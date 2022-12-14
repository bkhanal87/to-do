import { useLayoutEffect } from 'react';
import './App.css';

export default function App() {
  const todos = [
    { id: 1, text: "Go Shopping", done: false},    
    { id: 2, text: "Drop kids at school", done: false},
    { id: 3, text: "Buy groceries", done: false}
  ];
  return (
    <div className="App">
      <h1>
        Todo List
      </h1>
      <TodoList todos={todos} />
    </div>
  );
}

function TodoList({todos}) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )}

  function AddTodo() {
    function handleAddTodo(event) {
      event.preventDefault();
      console.log(event.target.elements);
    }
    return(
      <form onSubmit={handleAddTodo}>
        <input placeholder='Add todo'/>
        <button type='submit'> Submit </button>
      </form>
    )
  }