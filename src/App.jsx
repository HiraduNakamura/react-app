import TodoList from './todolist';
import { useState } from "react";
import { useEffect } from "react";
import AddItem from "./additem";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("items")) {
      setItems(JSON.parse(localStorage.getItem("items")));
    } else {
      localStorage.setItem("items", JSON.stringify([]));
    }
  }, []);
  return (
    <div className="App">
      <header>TODO LIST:</header>
      <AddItem items={items} setItems={setItems} />
      <TodoList   items={items} setItems={setItems} />
    </div>
  );
}

export default App;
