import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { filterItems } from '../../state/ItemSlice';
import { useParams } from 'react-router-dom';
import GridList from '../GridList/GridList';
import { Item } from '../ecom-ui';

const Items = () => {
  const dispatch = useDispatch();
  const { prefix } = useParams();

  useEffect(() => {
    dispatch(filterItems(prefix));

    return () => {
      dispatch({ type: 'items/cleanRecords' });
    };
  }, [dispatch, prefix]);

  const { loading, error, records } = useSelector((state) => state.items);

  return (
    <>
      <GridList items={records} loading={loading} error={error}>
        <Item actionType='add' />
      </GridList>
    </>
  );
};

export default Items;
