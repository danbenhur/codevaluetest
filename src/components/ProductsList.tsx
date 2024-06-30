import { observer } from 'mobx-react';
import styles from './ProductsList.module.css';
import { ProductsListItem } from './ProductsListItem';
import { productStore } from '../store/ProductStore';


export const ProductsList: React.FC = observer(() => {
const products = productStore.products
  return (
    <div className={styles.productsList}>
      <p>Items List</p>
        {products.map(product => (
          <ProductsListItem key={product.id} product={product}  />
        ))}
    </div>
  );
});


  
  