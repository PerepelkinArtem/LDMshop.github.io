import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header(props) {
const { items, totalPrice } = useSelector (state => state.drawer)
  
  return (
    <header>
      <Link to='/'>
        <div className="headerLeft">
          <img with={40} height={40} src="/img/logo.jpg" alt="LOGO" />
          <div>
            {/* <h3>Магазин ECO товаров</h3> */}
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li>
          <span>{items.length}</span>
          <img
            onClick={props.onClickDrawer}
            with={20}
            height={20}
            src="/img/basket.svg"
            alt="Basket_picture"
          />
          <span>{totalPrice} руб.</span>
          <Link to='/favorites'><img with={20} height={20} src="/img/favorite/favoriteIcon.svg" alt="Избранное" /></Link>
          <img with={20} height={20} src="/img/user.svg" alt="Пользователь" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
