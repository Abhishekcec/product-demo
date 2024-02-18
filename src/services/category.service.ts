import axios from "axios"

export const getCategories = () => {
    return axios.get('https://dummyjson.com/products/categories')
    .then(res => {
        return res.data;
    })
}