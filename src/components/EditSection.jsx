import React from "react";

export default function EditSection({ editItem, onEditChange, onSave }) {
  return (
    <>
      <input
        className="editTask"
        type="text"
        onChange={onEditChange}
        value={editItem}
      />
      <button disabled={editItem === ""} className="saveTask" onClick={onSave}>
        Save
      </button>
    </>
  );
}
