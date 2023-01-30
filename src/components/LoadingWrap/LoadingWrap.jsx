import React from 'react';

import styles from './styles.modules.css';
const LoadingWrap = ({ loadingState, errorState, children }) => {
  const { loading } = styles;
  console.log(loadingState);
  console.log(errorState);
  return (
    <>
      {loadingState ? (
        <div className={loading}>loading wait ..</div>
      ) : errorState ? (
        <div>errorState</div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingWrap;
