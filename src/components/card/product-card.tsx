import * as React from 'react';
import Card from '@mui/material/Card';
import { Product } from '../../services/models/product';
import { Grid } from '@mui/material';

interface Props {
  product: Product;
  handleDelete: (id: number) => void;
}

const ProductCard: React.FC<Props> = ({product, handleDelete}) => {

  return(
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div style={{textAlign: 'center', paddingTop: '10%'}}>
            <img style={{width: '70%', height: '70%'}} src={product.images[0]} ></img>
          </div>
        </Grid>
        <Grid item xs={5}>
          <h3><b>{product.title}</b></h3>
          <div>category: {product.category}</div>
          <div>{product.description}</div>
        </Grid>
        <Grid item xs={4}>
          <div><br/></div>
          <div><h3 style={{padding: '0%'}}><b>${product.price}</b></h3></div>
          <div><b><span style={{color: 'green'}}>Available {product.stock}</span></b></div>
          {/* <button onClick={() => handleDelete(product.id)}>delete</button> */}
        </Grid>
      </Grid>
    </Card>
  )
}

export default ProductCard