import GenericService from "./GenericService";
class ProductService extends GenericService{

    addItem = (data) => {
        return this.post("furniture",data);
    }
    updateItem = (data, _id) =>{
        return this.put("furniture/" + _id , data);
    }
    deleteItem = (_id) =>{
        return this.delete("furniture/" + _id);
    }
    getItem = () => {
        return this.get("furniture");
    }
    getPopularItems = () => {
        return this.get("furniture/popular");
    }
    getFurnitureItems = (category) => {
        return this.get("furniture/"+category);
    }
    getItemsPrice = (price,type)=>{
        return this.getPrice("furniture/price",price,type)
    }
    getItemById = (id) =>{
        return this.get("furniture/itembyid/"+id);
    }
}

let productService = new ProductService();
export default productService;