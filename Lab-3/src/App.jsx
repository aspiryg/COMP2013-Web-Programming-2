/*
  Ahmad Spierij
  Lab-3: Hooks and States
 */
import ColorBoxesContainer from "./components/ColorBoxesContainer";
import colors from "./data/data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ColorBoxesContainer colors={colors} />
    </div>
  );
}

export default App;
