import React, { useState } from 'react';
import styles from './ProductsList.module.css';
import { initialItemsArray } from '../DummyItems';
import { ProductsListItem } from './ProductsListItem';


export const ProductsList: React.FC<ProductsListProps> = (props) => {
const [products,setProducts] =useState(initialItemsArray)

  return (
    <div className={styles.productsList}>
      <p>Items List</p>
        {products.map(product => (
          <ProductsListItem key={product.id} product={product} onClick={props.onClick} />
        ))}
    </div>
  );
};

export interface Product {
    id: number;
    name: string;
    price: number;
    creationDate: string; 
    image: string;
    description?: string;
  }

  interface ProductsListProps {
    onClick: (productId: number) => void;
  }
  
  