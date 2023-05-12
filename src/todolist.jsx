import React, {useEffect } from "react";

function TodoList(props) {
  const { items, setItems } = props;

  const deleteItem = (item) => {
    const newItemArr = items.filter((itemA) => itemA !== item);
    localStorage.setItem("items", JSON.stringify(newItemArr));
    setItems(newItemArr);
  };
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")));
  }, [setItems]);
  return (
    <div className="todo-list">
      <ul>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>{item}</li>
            <button onClick={() => deleteItem(item)} id={index}>
              Remove item
            </button>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
