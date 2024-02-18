import * as React from 'react';
import _ from 'lodash';
import { sortArray } from '../../shared/utilities';
import {getCategories} from '../../services/category.service';
import { getProducts, getProductsByCategory } from '../../services/products.service';
import ProductCard from '../../components/card/product-card';
import { Product } from '../../services/models/product';
import { Toolbar,Box, CssBaseline } from '@mui/material';
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

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <Sidebar categories={categories} handleCategories={handleCategories} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
      <Toolbar />
      <SearchBar 
        sortBy={sortBy} 
        searchText={searchText} 
        handleSearch={handleSearch} 
        handleSearchChange={handleSearchChange} 
        handleSortBy={handleSortBy} 
      />
        {/* {selectedCategory && <><Grid sx={{ p: 0 }} item xs={4}><h4><b>Category: {selectedCategory}</b></h4></Grid><Grid item xs={8}></Grid></>} */}
       
       {products.length > 0 && products.map((product, index) => (
        <>
          <ProductCard product={product}/>
          <br/>
        </>)
        )}
      </Box>
    </Box>
  );
}

export default ViewProduct;