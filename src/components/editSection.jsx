import React from "react";

export default function EditSection({ editItem, onEditChange, onSaveEdit }) {
  return (
    <>
      <input
        className="editTask"
        type="string"
        onChange={onEditChange}
        value={editItem}
      />
      <button
        disabled={editItem === ""}
        className="saveTask"
        onClick={onSaveEdit}
      >
        Save
      </button>
    </>
  );
}
