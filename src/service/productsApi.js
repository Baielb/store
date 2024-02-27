
import axios from '../axios'

class Products {
    getProducts(){
        return axios.get('/products')
    }
    deleteProducts(){}
    updateProducts(){}
    createProducts(){}
}

export default new Products