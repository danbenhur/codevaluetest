import React from 'react';
import { observer } from 'mobx-react';
import styles from './ItemActions.module.css';



export const ItemActions: React.FC = observer(() => {
  return (
   <div className={styles.actionButtonsSpacer}>
    <div className={styles.actionButtons} >
     <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>    </div></div> 
  );
});





