import { Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import shoppingCardImg from '../../assets/shopping-card.svg';

import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { totalCartQuantity } from './../../state/cartSLice';

const Header = () => {
  const {
    shoppingCard,
    shoppingCartCounter,
    headerTop,
    header,
    mainNav,
    secNav,
    activeLink,
  } = styles;

  const totalCartQuantityCount = useSelector(totalCartQuantity);

  return (
    <header className={header}>
      <div className={headerTop}>
        <h1>
          Our <Badge bg='info'>Ecom</Badge>
        </h1>
        <div className={shoppingCard}>
          <img alt='' src={shoppingCardImg} width='30' />
          <div className={shoppingCartCounter}>{totalCartQuantityCount}</div>
        </div>
      </div>

      <nav>
        <ul className={mainNav}>
          <li>
            <NavLink
              end
              to='/'
              className={({ isActive }) => (isActive ? activeLink : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/categories'
              className={({ isActive }) => (isActive ? activeLink : undefined)}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/new-collections'
              className={({ isActive }) => (isActive ? activeLink : undefined)}
            >
              new collections
            </NavLink>
          </li>
        </ul>
        <ul className={secNav}>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li>
            <NavLink to='/register'>Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
