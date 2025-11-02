import TodoCard from "./TodoCard";

export default function TodoCardsContainer({
  todoList,
  handleOnCheck,
  handleOnDelete,
}) {
  return (
    <div>
      {todoList.map((item, index) => (
        <TodoCard
          key={index}
          {...item}
          handleOnCheck={handleOnCheck}
          handleOnDelete={handleOnDelete}
          index={index}
        />
      ))}
    </div>
  );
}
