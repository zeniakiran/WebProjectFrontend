import GenericService from "./GenericService";
class OrderService extends GenericService{

    addItem = (data) => {
        return this.post("orders",data);
    }
    
    deleteItem = (_id) =>{
        return this.delete("orders/" + _id);
    }
    getItem = () => {
        return this.get("orders");
    }
    
}

let orderService = new OrderService();
export default orderService;