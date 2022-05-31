import React from 'react'
import { SearchContext } from '../../App';

// import styles from './Search.module.scss'

function Search() {

    const { searchValue, setSearchValue, onChangeSearchInput } = React.useContext(SearchContext);

    return (
        <div className="sub-title_content">
            <h3>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все товары'}</h3>
            <div className="search-block">
                <img src="/img/search.svg" alt="Search" />
                {searchValue && (
                    <img
                        className="clear-btn"
                        onClick={() => setSearchValue('')}
                        src="/img/drawer/X.svg"
                        alt="Clear"
                    />
                )}
                <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />

            </div>
        </div>
    )
}

export default Search