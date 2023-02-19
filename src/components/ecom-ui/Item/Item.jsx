import { Button } from 'react-bootstrap';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';

const Item = ({ btnText, actionType, title, price, img, id }) => {
  const { item } = styles;

  const disptach = useDispatch();

  const actionHandler = () => {
    if (actionType === 'add') {
      disptach({ type: 'cart/addToCart', payload: id });
    }
  };

  console.log('id', id);

  return (
    <div className={item}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant='info' onClick={actionHandler}>
        {btnText || 'Add to card'}
      </Button>
    </div>
  );
};

export default Item;
