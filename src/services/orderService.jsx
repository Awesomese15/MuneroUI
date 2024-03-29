import axios from 'axios';
const BASE_URL = 'http://localhost:9090/munero';
const token ='Bearer '+sessionStorage.getItem('Authorization');
const orderService = {
    placeOrder: async(order) =>{
        const response = await axios.post(`${BASE_URL}/place-order`, order,{
            headers: {
                Authorization: token,
              },
        });
        return response;

    },
    orderStatus: async(id) =>{

        const response = await axios.get(`${BASE_URL}/order-status/${id}`, {
            headers: {
                Authorization: token,
              },
        });

        return response;
    }
}
export default orderService;