import React, { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { DetailsPane } from './components/DetailsPane';
import { Product, ProductsList } from './components/ProductsList';


const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number>();
  console.log("Dan selectedProduct",selectedProduct);
  

  const hanldeProductItemWasClicked = (productId: number) => {
    setSelectedProduct(productId)
  }

  return (
 <div className={styles.container}>
    <Header />
     <div className={styles.mainContent}>
      <ProductsList onClick={hanldeProductItemWasClicked}/>
      <DetailsPane />
     </div>
</div>

  );
};

export default App;
