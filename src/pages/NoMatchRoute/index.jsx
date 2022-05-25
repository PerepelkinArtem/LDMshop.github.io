import React from 'react'

import styles from './NoMatchRoute.module.scss'

const NoMatchRoute = () => {
    return (
        <div className={styles.nomatchrouteMain}>
            <img src='../../img/nomatchroute.svg' />
            <h2>
                <span>Ничего не найдено</span>
            </h2>
            <p>Страница отсутсвует</p>
        </div>
    )
}

export default NoMatchRoute