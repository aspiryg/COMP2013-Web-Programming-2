import { useState } from "react";
import ColorBox from "./ColorBox";
export default function ColorBoxesContainer({ colors }) {
  // this array keeps track of the original order of indices, so when we reset the colors, we can go back to this order
  const originalIndicesOrder = Array.from(
    { length: colors.length },
    (color, index) => index
  );

  // This array keeps track of the indices of the colors, so when we shuffle, we shuffle the indices and not the colors themselves
  // and when we reset, we reset the indices to the original order using the originalIndicesOrder array
  const [colorIndices, setColorIndices] = useState(originalIndicesOrder);

  // function to shuffle colors
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  //
  const handleClick = () => {
    setColorIndices(shuffleArray([...colorIndices]));
  };

  // Reset the color of each box to the color that corresponds to its index
  const resetColors = () => {
    setColorIndices(originalIndicesOrder);
  };

  /*
    I had to write this function to change the color here and pass it to the ColorBox component, because I wanted a way to keep
    track of each box's index and what color it corresponds to, so when I reset the colors, I can reset them to their original colors.

    so when the box is clicked, it calls this function with its index, and the function changes the color index in the colorIndices array 
    at that index. This way, I can keep track of which box has which color index, and when I reset the colors, I can reset them to their 
    original colors.

    I guess there are other simpler ways to do this, but this is the one I came up with. I hope it makes sense.
   */
  const changeColor = (index) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newColorIndices = [...colorIndices];
    newColorIndices[index] = colorIndices[randomIndex];
    setColorIndices(newColorIndices);
  };

  //
  return (
    <>
      {/* This is where I passed the function to change the color index in the indices array */}
      <div className="color-boxes-container">
        {colorIndices.map((colorIndex, index) => (
          <ColorBox
            key={index}
            boxIndex={index}
            colorIndex={colorIndex}
            colors={colors}
            handleClick={() => changeColor(index) /*Here*/}
          />
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleClick}>Shuffle Colors</button>
        <button onClick={resetColors}>Reset Colors</button>
      </div>
    </>
  );
}
