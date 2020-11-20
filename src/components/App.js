import React from "react";
import "./../styles/App.css";

import {
  TextareaAutosize,
  Button,
  Paper,
  Typography,
  Box,
  IconButton
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

function App() {
  const [value, setValue] = React.useState("");
  const [editValue, setEditValue] = React.useState("");
  const [items, setItems] = React.useState([]);

  const handleClick = () => {
    if (value.trim() === "") {
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
    setEditValue(editItem.task);
    editItem.edit = true;
  };

  const handleSave = (index, value) => {
    const itemsCopy = [...items];
    const editItem = itemsCopy[index];
    const prevValue = editItem.task;
    if (value.trim() === "") {
      editItem.task = prevValue;
      setEditValue("");
      setItems(itemsCopy);
      editItem.edit = false;
      return;
    }
    editItem.task = value;
    setEditValue("");
    setItems(itemsCopy);
    editItem.edit = false;
  };

  return (
    <div id="main">
      <TextareaAutosize
        id="task"
        aria-label="empty textarea"
        placeholder="Empty"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <Button
        id="btn"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Add
      </Button>
      <ol>
        {items.map((item, index) => (
          <li key={item.task} className="list">
            <Box
              display="flex"
              flexDirection="row"
              // justifyContent="space-between"
            >
              <Typography variant="h6">{item.task} </Typography>

              <Box>
                <IconButton
                  aria-label="delete"
                  color="primary"
                  className="edit"
                  onClick={() => handleEdit(index)}
                >
                  <Edit />
                </IconButton>
                {item.edit && (
                  <div>
                    <TextareaAutosize
                      id="task"
                      aria-label="empty textarea"
                      placeholder="Empty"
                      className="editTask"
                      value={editValue}
                      onChange={(event) => setEditValue(event.target.value)}
                    />

                    <Button
                      id="btn"
                      variant="contained"
                      color="primary"
                      className="saveTask"
                      onClick={() => handleSave(index, editValue)}
                    >
                      Save
                    </Button>
                  </div>
                )}
                <IconButton
                  aria-label="delete"
                  color="secondary"
                  className="delete"
                  onClick={() => handleDelete(index)}
                >
                  <Delete />
                </IconButton>
              </Box>
            </Box>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
