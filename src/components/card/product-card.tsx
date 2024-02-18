import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../../services/models/product';
import { Grid } from '@mui/material';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({product}) => {

  return(
    <Card>
      <Grid container spacing={2}>
  
  <Grid item xs={4}>
    <div><img style={{width: '50%', height: '50%'}} src={product.images[0]} ></img></div>
  </Grid>
  <Grid item xs={4}>
  <h3><b>{product.title}</b></h3>
  <div>{product.category}</div>
    <div>{product.description}</div>
      <div>rating: {product.rating}
      </div>

  </Grid>
  <Grid item xs={4}>
    <div><br/></div>
    <div><b>${product.price}</b></div>
    <div><b><span style={{color: 'green'}}>Available {product.stock}</span></b></div>
  </Grid>
  
</Grid>
    </Card>
  )
}

export default ProductCard