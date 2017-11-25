import React from 'react';
import Loader from 'react-loader';

import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <Loader />
    </div>
  );
}
