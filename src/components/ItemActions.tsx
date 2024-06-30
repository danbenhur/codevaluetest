import React, { useState } from "react";
import { observer } from "mobx-react";
import styles from "./ItemActions.module.css";
import AddProductWindow from "./AddProductWindow";
import { Product, productStore } from "../store/ProductStore";


export const ItemActions: React.FC = observer(() => {
  const [addProductWindowIsOpen, setAddProductWindowIsOpen] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    productStore.setSearchQuery(event.target.value); // Update search query in ProductStore
  };

  const handleAddProduct = (product: Product) => {
    productStore.addProduct(product); 
  };

  return (
    <>
      {addProductWindowIsOpen && <AddProductWindow onClose={() => setAddProductWindowIsOpen(false)} onAddProduct={handleAddProduct}/>}
      <div className={styles.actionButtonsSpacer}>
        <div className={styles.actionButtons}>
          <button onClick={() => setAddProductWindowIsOpen(true)}>Add</button>
       <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search by product name"
          value={productStore.searchQuery}
          onChange={handleSearchChange}
        />
      </div>
          <button>Button 3</button>{" "}
        </div>
      </div>
    </>
  );
});


