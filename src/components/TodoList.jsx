import TodoCard from './TodoCard';

// de-structure
export default function Todolist(props) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        // map for every element in the list
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

//parent element needs a unique key (todoIndex), index of eacht elemaent in the list is unique
