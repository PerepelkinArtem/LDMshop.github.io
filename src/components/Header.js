function Header(props) {
    return (
        <header>
            <div className="headerLeft">
                <img with={40} height={40} src="/img/logo.jpg" />
                <div>
                    <h3>Авторазборка в Калуге</h3>
                </div>
            </div>
            <ul className="headerRight">
                <li>
                    <img onClick={props.onClickDrawer} with={20} height={20} src="/img/basket.svg" />
                    <div>1205 руб.</div>
                    <img with={20} height={20} src="/img/user.svg" />
                </li>
            </ul>
        </header>
    );
}

export default Header;