import { useState } from "react";
import Create from "./Create";

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Tasks</h2>
        </div>
      ) : (
        todos.map((todo, index) => <div key={index}>{todo}</div>)
      )}
    </div>
  );
};

export default Home;
