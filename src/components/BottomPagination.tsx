import React from 'react';
import { observer } from 'mobx-react';
import styles from './ItemActions.module.css';



export const BottomPagination: React.FC = observer(() => {
  return (
    <div className={styles.bottomPaginationSpacer}>
    <div className={styles.pagination}>
      <button>Previous</button>
      <button>Next</button>
    </div></div>
  );
});





