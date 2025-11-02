export default function TodoCard({
  title,
  checked,
  handleOnCheck,
  handleOnDelete,
  index,
}) {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleOnCheck(e, index)}
      />
      <span
        style={
          checked
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {title}
      </span>
      <button onClick={() => handleOnDelete(index)}>Delete</button>
    </div>
  );
}
