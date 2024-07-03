import TodoCard from "./TodoCard";
export default function Todolist() {
  let todos = [
    "Build a ReactJS todo list app",
    "Build a ReactJS app with Nasa API",
    "Build a ReactJS Chatbot",
  ];

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        // map for every element i the list
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

//parent element needs a unique key (todoIndex), index of eacht elemaent in the list is unique
