import "./App.css";
import ProductCard from "./components/ProductCard";
import ProductCardsContainer from "./components/ProductCardsContainer";
import data from "./data/data";
function App() {
  return (
    <>
      <ProductCardsContainer data={data} />
    </>
  );
}

export default App;
