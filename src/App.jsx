import { useState } from "react";
import Form from "./componants/form";
import List from "./componants/list";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState();
  const [editIndex, setEditIndex] = useState();

  const addTodo = (todo) => {
    setTodos(todos.concat([todo]));
  };

  const editTodo = (index) => {
    setCurrentTodo(todos[index]);
    setEditIndex(index);
  };

  const updateTodo = (updatedTodo) => {
    todos[editIndex] = updatedTodo;
    setTodos(todos.slice());
    setCurrentTodo(null);
    setEditIndex(-1);
  };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    setTodos(todos.slice());
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
      <Form addTodo={addTodo} editTodo={updateTodo} currentTodo={currentTodo} />
      <List todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
