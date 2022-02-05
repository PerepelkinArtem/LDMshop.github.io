function Card() {
  return (
    <div className="card">
      <img src="/img/auto/1.jpg" alt="auto" />
      <p>VW JETTA 6 2014 1.4 DSG7</p>
      <div className="card-status">
        <span>Статус:</span>
        <b>В разборе</b>
        <img src="/img/plus.svg" alt="plus" />
        {/* <button className="button">
          <img src="/img/plus.svg" alt="plus" />
        </button> */}
      </div>
    </div>
  );
}

export default Card