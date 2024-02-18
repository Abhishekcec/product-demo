import * as React from 'react';
import _ from 'lodash';
import { sortArray } from '../../shared/utilities';
import {getCategories} from '../../services/category.service';
import { deleteProduct, getProducts, getProductsByCategory } from '../../services/products.service';
import ProductCard from '../../components/card/product-card';
import { Product } from '../../services/models/product';
import { Toolbar,Box, Grid } from '@mui/material';
import SearchBar from '../../components/search-bar/search-bar';
import Sidebar from '../../components/sidebar/sidebar';
import Header from '../../components/header/header';

const ViewProduct = () => {

  const [categories, setCategories] = React.useState<string[]>([]);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [searchText, setSearchText] = React.useState<string>('');
  const [sortBy, setSortBy] = React.useState('title');

  React.useEffect(() => {
    getCategories().then((allcategories: string[]) => {
      setCategories(allcategories);
    })
    .catch((err: any) => {
      console.log(err);
    })
    getFilteredProducts('', sortBy);
  },[]);

  const getFilteredProducts = (category: string, sortByValue: string) => {
    if(category.length === 0 && selectedCategory.length === 0){
      getProducts().then((products: Product[]) => {
        console.log(sortBy);
        setProducts(sortArray(products,sortByValue, 'asc').filter(product => product.title.toLowerCase().includes(searchText.toLowerCase())));
      })
      .catch((err: any) => {
        console.log(err);
      })
    }
    else{
      getProductsByCategory(category.length === 0 ? selectedCategory : category).then((products: Product[]) => {
        setProducts(sortArray(products,sortByValue, 'asc').filter(product => product.title.toLowerCase().includes(searchText.toLowerCase())));
      })
      .catch((err: any) => {
        console.log(err);
      })
    }
  }

  const handleCategories = (category: string) => {
    setSelectedCategory(category);
    getFilteredProducts(category, sortBy)
  }

  const handleSearch = () => {
    getFilteredProducts(selectedCategory, sortBy);
  }

  const handleSortBy = (value: string) => {
    setSortBy(value);
    getFilteredProducts('',value);
  };

  const handleSearchChange = (value: string) => {
    setSearchText(value);
  }

  const handleDelete = (id: number) => {
    deleteProduct(id);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar categories={categories} selectedCategory={selectedCategory} handleCategories={handleCategories} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
      <Toolbar />
      {selectedCategory && <><Grid sx={{ p: 0 }} item xs={4}><h2><b>Category: {selectedCategory}</b></h2></Grid><Grid item xs={8}></Grid></>}
      <SearchBar 
        sortBy={sortBy} 
        searchText={searchText} 
        handleSearch={handleSearch} 
        handleSearchChange={handleSearchChange} 
        handleSortBy={handleSortBy} 
      />
      {products.length > 0 && products.map((product, index) => (
        <>
          <ProductCard product={product} handleDelete={handleDelete}/>
          <br/>
        </>)
        )}
      </Box>
    </Box>
  );
}

export default ViewProduct;