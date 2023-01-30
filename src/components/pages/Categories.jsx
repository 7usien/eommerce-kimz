import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from './../ecom-ui/Category/Category';
import { getcategories } from './../../state/categorySlice';
import GridList from '../GridList/GridList';
const Categories = () => {
  const dispatch = useDispatch();

  const { loading, error, records } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getcategories());
  }, []);

  return (
    <>
      <GridList loading={loading} error={error} items={records}>
        <Category />
      </GridList>
    </>
  );
};

export default Categories;
