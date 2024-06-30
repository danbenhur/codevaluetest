import { observable, action, computed, makeObservable, reaction  } from 'mobx';
import { initialItemsArray } from '../DummyItems';

export interface Product {
    id: number;
    name: string;
    price: number;
    creationDate: string; 
    image: string;
    description?: string;
  }

class ProductStore {
  @observable products: Product[] = initialItemsArray;
  @observable selectedItemId: number | null = null;

  constructor() {
    makeObservable(this); 

    reaction(
        () => this.selectedItemId,
        (selectedItemId: number | null) => {
          console.log('Selected item ID:', selectedItemId);
        }
      );
    }

    @computed get selectedProduct() {
      return this.products.find(product => product.id === this.selectedItemId) || null;
    }
  

//   @action
//   setProducts(products: Product[]) {
//     this.products = products;
//   }

//   @action
//   addProduct(product: Product) {
//     this.products.push(product);
//   }

//   @action
//   removeProduct(productId: number) {
//     this.products = this.products.filter(product => product.id !== productId);
//   }

  @action
  selectedProductId(productId: number) {
    this.selectedItemId = productId;
  }

}

export const productStore = new ProductStore();
 
