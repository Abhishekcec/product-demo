import axios from "axios"

export const getProducts = () => {
    return axios.get('https://dummyjson.com/products?limit=50')
    .then(res => {
        return res.data.products;
    })
}

export const getProductsByCategory = (category: string) => {
    return axios.get(`https://dummyjson.com/products/category/${category}`)
    .then(res => {
        return res.data.products;
    })
}

export const deleteProduct = (id: number) => {
    return axios.delete(`https://dummyjson.com/products/category/${id}`)
    .then(res => {
        return res.data.products;
    })
}

export const searchProducts = (searchText: string) => {
    return axios.delete(`https://dummyjson.com/products/search?q=${searchText}`)
    .then(res => {
        return res.data.products;
    })
}