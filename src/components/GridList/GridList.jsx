import React from 'react';
import styles from './styles.module.css';
import LoadingWrap from '../LoadingWrap/LoadingWrap';
const GridList = ({ children, items, loading, error }) => {
  const renderItems = items?.map((item) =>
    React.cloneElement(children, { key: item.id, ...item })
  );
  const { grid } = styles;
  return (
    <LoadingWrap loadingState={loading} errorState={error}>
      <div className={grid}>{renderItems}</div>
    </LoadingWrap>
  );
};

export default GridList;
