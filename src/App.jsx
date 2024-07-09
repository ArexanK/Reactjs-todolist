import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';

function App() {
  // react stateful variables, user interaction you use useState
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }

  //this function is going to expect a newTodo
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]; //...todos(spreading out old todos), newTodo(adding new todos)
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  // function handleEditTodo(index) {
  //   const valueToEdit = todos[index];
  //   setTodoValue(valueToEdit);
  //   handleDeleteTodo(index);
  // }

  //not lose localstorage when
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem('todos');
    if (localTodos) localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  //everything happens in app.js (parent component) and then it gets renderd in main.js and then through id in index.js
  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
