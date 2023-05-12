import React from "react";

function AddItem(props) {
  const { items, setItems } = props;
  const addItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = formData.get("newItem");
    setItems([...items, newItem]);
    localStorage.setItem("items", JSON.stringify([...items, newItem]));
    e.target.reset();
  };
  
  return (
    <div className="add-item">
        <form onSubmit={addItem}>
          <input type="text" name="newItem" placeholder="Add Item" />
          <button type="submit">Add</button>
        </form>
    </div>
  )
}
  
export default AddItem;