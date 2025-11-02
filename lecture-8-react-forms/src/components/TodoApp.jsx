import { useState } from "react";
import FormComponent from "./FormComponent";
import TodoCardsContainer from "./TodoCardsContainer";
export default function TodoApp() {
  // one item
  const [todo, setTodo] = useState({
    title: "",
    checked: false,
  });

  // all items
  const [todoList, setTodoList] = useState([]);

  //
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.title.trim() === "") {
      alert("Add todo before submitting.|||.");
      return;
    }
    setTodoList((prevList) => {
      return [...prevList, todo];
    });
    setTodo({
      title: "",
      checked: false,
    });
  };
  const handleOnChange = (e) => {
    setTodo((prevTodo) => {
      return {
        ...prevTodo,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleOnSubmit = () => {};
  //
  const handleOnDelete = (index) => {
    // console.log(index);
    setTodoList((prevList) => {
      return prevList.filter((item, i) => i !== index);
    });
  };
  const handleOnCheck = (e, index) => {
    setTodoList(
      todoList.map((item, i) =>
        i === index ? { ...item, checked: e.target.checked } : item
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <FormComponent
        todo={todo}
        handleAddToTodo={handleAddTodo}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      <TodoCardsContainer
        todoList={todoList}
        handleOnCheck={handleOnCheck}
        handleOnDelete={handleOnDelete}
      />
    </div>
  );
}
