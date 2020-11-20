import React from "react";
import "./../styles/App.css";
import TaskList from "./TaskList";

function App() {
  const [value, setValue] = React.useState("");
  const [editValue, setEditValue] = React.useState("");
  const [editIndex, setEditIndex] = React.useState(-1);
  const [items, setItems] = React.useState([]);

  const handleAdd = () => {
    if (value.trim() === "") {
      return;
    }
    let availableTasks = items.map((item) => item.task);
    if (availableTasks.includes(value)) {
      return;
    }
    const itemObj = { task: value, edit: false };
    const itemsCopy = [...items];

    itemsCopy.push(itemObj);
    setValue("");
    setItems(itemsCopy);
  };

  const handleDelete = (index) => {
    const itemsCopy = [...items];
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  };

  const handleEdit = (index) => {
    const itemsCopy = [...items];
    const editItem = itemsCopy[index];
    editItem.edit = true;
    itemsCopy[index] = editItem;
    setEditIndex(index);
    setItems(itemsCopy);
  };

  const handleSave = () => {
    const itemsCopy = [...items];
    itemsCopy[editIndex].task = editValue;
    itemsCopy[editIndex].edit = false;
    setItems(itemsCopy);
    setEditIndex(-1);
    setEditValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  return (
    <div id="main">
      <input
        id="task"
        type="text"
        value={value}
        onChange={(event) => handleChange(event)}
      />

      <button id="btn" onClick={handleAdd}>
        Add
      </button>
      {items.map((item, index) => (
        <TaskList
          taskName={item.task}
          edit={item.edit}
          key={index}
          editItem={editValue}
          onEditChange={handleEditChange}
          onSave={handleSave}
          onDelete={() => handleDelete(index)}
          onEdit={() => handleEdit(index)}
        />
      ))}
    </div>
  );
}

export default App;
