function Card() {
    return (
        <div className="card">
        <img src="/img/auto/1.jpg" alt="auto" />
        <p>VW JETTA 6 2014 1.4 CAXC DQ200 DSG7</p>
        <div>
          <span>Статус: </span>
          <b>В разборе</b>
          <button className="button">
            <img width={15} height={15} src="/img/plus.svg" alt="plus"/>
          </button>
        </div>
      </div>
    );
}

export default Card