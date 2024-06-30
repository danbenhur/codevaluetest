import { Provider } from 'mobx-react';
import { productStore } from './store/ProductStore';
import styles from './App.module.css';
import { Header } from './components/Header';
import { DetailsPane } from './components/DetailsPane';
import { ProductsList } from './components/ProductsList';


const App: React.FC = () => {
  return (
    <Provider productStore={productStore}>
     <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>
        <ProductsList />
        <DetailsPane />
      </div>
     </div>
    </Provider>
  );
};

export default App;
