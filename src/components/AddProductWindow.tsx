import React from 'react';
import styles from './AddProductWindow.module.css';
import { Product } from '../store/ProductStore';

interface AddProductWindowProps {
  onClose: () => void; 
  onAddProduct: (product: Product) => void; 
}

const AddProductWindow: React.FC<AddProductWindowProps> = ({ onClose, onAddProduct }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Fetch form data
    const formData = new FormData(event.currentTarget);
    const product: Product = {
      id: Math.floor(Math.random() * 1000),
      name: formData.get('name') as string,
      price: parseFloat(formData.get('price') as string),
      creationDate: formData.get('creationDate') as string,
      image: formData.get('image') as string,
      description: formData.get('description') as string,
    };

    onAddProduct(product);

    onClose();
  };

  return (
    <div className={styles.overlay}>
    <div style={{ backgroundColor: 'white', padding: '52px' }}
    className={styles.formContainer}>
        <h2>Add Product</h2>
        <form id="productForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required /><br /><br />

          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" required /><br /><br />

          <label htmlFor="creationDate">Creation Date:</label>
          <input type="date" id="creationDate" name="creationDate" required /><br /><br />

          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image" required /><br /><br />

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description"></textarea><br /><br />

          <button type="submit" className={styles.addButton}>Add Product</button>
          <button type="button" className={styles.closeButton} onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductWindow;
