export default function FormComponent({
  todo = { title: "Placeholder", checked: true },
  handleOnChange,
  handleAddToTodo,
  handleOnSubmit,
}) {
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="username">Title: </label>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleOnChange}
          />
          <button onClick={handleAddToTodo}>Add Task to List</button>
        </div>
      </form>
    </div>
  );
}
