import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h3>ВCE АВТОМОБИЛИ:</h3>
        <div className="content-card">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
