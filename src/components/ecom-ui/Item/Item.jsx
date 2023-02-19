import { Button, Spinner } from 'react-bootstrap';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
const Item = ({ btnText, actionType, title, price, img, id }) => {
  const { item } = styles;

  const disptach = useDispatch();

  const actionHandler = () => {
    if (actionType === 'add') {
      disptach({ type: 'cart/addToCart', payload: id });
      setIsClicked((prev) => prev + 1);
    }
  };

  const [disabled, setDisabled] = useState(false);
  const [isClicked, setIsClicked] = useState(0);
  useEffect(() => {
    if (isClicked === 0) return;
    setDisabled(true);

    const debounce = setTimeout(() => {
      setDisabled(false);
    }, 400);

    return () => {
      clearTimeout(debounce);
    };
  }, [isClicked]);

  return (
    <div className={item}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant='info' onClick={actionHandler} disabled={disabled}>
        {disabled ? (
          <>
            <Spinner
              as='span'
              animation='grow'
              size='sm'
              role='status'
              aria-hidden='true'
            />
            Loading...
          </>
        ) : (
          btnText || 'Add to card'
        )}
      </Button>
    </div>
  );
};

export default Item;
