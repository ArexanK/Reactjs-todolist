import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//everything happens in app.js (parent component) and thenit gets renderd in main.js and then through id in index.js
function App() {
  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  );
}

export default App;
