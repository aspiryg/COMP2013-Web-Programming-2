import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

// Ahmad Spierij
// Lab 2 - Resorts Lite

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="card-container">
        <Card
          image="src/assets/images/1.jpg"
          country="Indonesia"
          name="Gili Air Hotel"
          rating="4.8"
          price="589"
        />
        <Card
          image="src/assets/images/2.jpg"
          country="Seychelles"
          name="Hilton Resort"
          rating="4.2"
          price="629"
        />
        <Card
          image="src/assets/images/3.jpg"
          country="US Virgin Islands"
          name="Goa Resort"
          rating="3.5"
          price="485"
        />
        <Card
          image="src/assets/images/4.jpg"
          country="Bahamas"
          name="Kuredu Resort"
          rating="4.1"
          price="729"
        />
        <Card
          image="src/assets/images/5.jpg"
          country="Mauritius"
          name="Trou D'eau Douce"
          rating="4.9"
          price="877"
        />
        <Card
          image="src/assets/images/6.jpg"
          country="Bermuda"
          name="Staniel Cay Hotel"
          rating="3.2"
          price="365"
        />
      </div>
    </div>
  );
}

export default App;
