import React from 'react';

function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <img with={40} height={40} src="/img/logo.jpg" alt="LOGO" />
        <div>
          <h3>Магазин ECO товаров</h3>
        </div>
      </div>
      <ul className="headerRight">
        <li>
          <img
            onClick={props.onClickDrawer}
            with={20}
            height={20}
            src="/img/basket.svg"
            alt="Basket_picture"
          />
          <div>1205 руб.</div>
          <img with={20} height={20} src="/img/user.svg" alt="User_picture" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
