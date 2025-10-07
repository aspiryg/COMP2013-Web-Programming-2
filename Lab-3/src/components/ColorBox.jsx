export default function ColorBox({ colorIndex, colors, handleClick }) {
  return (
    <div
      className="color-box"
      style={{ backgroundColor: colors[colorIndex] }}
      onClick={handleClick}
    ></div>
  );
}
