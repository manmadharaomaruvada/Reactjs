import axios from "axios";
const baseUrl=" http://localhost:3000/product";
class ProductServices{
    getAllProducts(){
        return axios.get(baseUrl);
    }
    getProducts(id){
        return axios.get(`${baseUrl}/${id}`);
    }
    createProducts(product){
        return axios.post(baseUrl,product)
    }
    deleteProduct(id){
        return axios.delete(`${baseUrl}/${id}`)
    }
    updateProduct(id,product){
        return axios.put(`${baseUrl}/${id}`,product)
    }
}
export default new ProductServices();