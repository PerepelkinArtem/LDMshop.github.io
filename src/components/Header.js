import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <Link to='/'>
        <div className="headerLeft">
          <img with={40} height={40} src="/img/logo.jpg" alt="LOGO" />
          <div>
            <h3>Магазин ECO товаров</h3>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li>
          <img
            onClick={props.onClickDrawer}
            with={20}
            height={20}
            src="/img/basket.svg"
            alt="Basket_picture"
          />
          <span>1205 руб.</span>
          <Link to='/favorites'><img with={20} height={20} src="/img/favorite/favoriteIcon.svg" alt="Избранное" /></Link>
          <img with={20} height={20} src="/img/user.svg" alt="Пользователь" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
