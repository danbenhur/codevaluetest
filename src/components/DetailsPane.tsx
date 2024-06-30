import React from 'react';
import styles from './DetailsPane.module.css';
import { observer } from 'mobx-react';

export const DetailsPane: React.FC = observer(() => {
  return (
    <div className={styles.detailsPane}>
      <p>Details Pane</p>
    </div>
);
});

