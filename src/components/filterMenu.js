import React , {useState, useEffect} from 'react';
import { Grid, Slider } from '@material-ui/core';
import "./filterMenu.css";
const marks = [
    {value: 0,label: ''},
    {value: 10,label: '10k'},
    {value: 40,label: '40k'},
    {value: 70,label: '70k'},
    {value: 100,label: '100k'}
  ];
let priceOfItem = 0;
let prevItemprice = 0; 
const FilterMenu =(props)=>{

      const [value,setValue]=useState(0);
      function valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
      }
      const handleChange = (event,newValue) => {
        setValue(newValue);
      };

      if(value === 0){
        priceOfItem = 0;
        prevItemprice = null;
      }

      else if(value === 10){
        priceOfItem = 10000;
      }
      else if(value === 40){
        priceOfItem = 40000;
        prevItemprice = 10000;
      }
      else if(value === 70){
        priceOfItem = 70000;
        prevItemprice = 40000;
      }
      else if(value === 100){
        priceOfItem = 100000;
        prevItemprice = 70000;
      }

    const returnItems = () =>{
        return props.callback(priceOfItem, prevItemprice);
    }
    returnItems();
      
        return(
            <Grid container direction="column" id="filtergrid">
              <div id = "filterdiv">
                <label className="filterlabel">Filter By Price </label>
                <Slider
                  defaultValue={0}
                  valueLabelFormat={valueLabelFormat}
                  onChange={handleChange}
                  aria-labelledby="discrete-slider-restrict"
                  step={null}
                  marks={marks}
               />
            </div>
          </Grid>
        );
}

export default FilterMenu;