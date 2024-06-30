import React from 'react';
import { Product } from './ProductsList';
import styles from './ProductsListItem.module.css'


export const ProductsListItem: React.FC<ProductsListItemProps> = ({ product, onClick }) => {

const handleProductWasClicked = () => {
onClick(product.id)
}
  
  return (
    <div className={styles.product} onClick={handleProductWasClicked}>
      <img src={product.image} alt={product.name} />
      <div className={styles.details}>
        <h2>{product.name}</h2>
      {product.description && <p>{product.description}</p>}
      </div>
    </div>
  );
};

interface ProductsListItemProps {
  product: Product;
  onClick: (productId: number) => void;
}



