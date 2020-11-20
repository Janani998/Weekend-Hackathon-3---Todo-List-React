import React from "react";

export default function EditSection({ editValue, onEditChange, onSaveEdit }) {
  return (
    <>
      <input
        className="editTask"
        type="string"
        onChange={onEditChange}
        value={editValue}
      />
      <button
        disabled={editValue === ""}
        className="saveTask"
        onClick={onSaveEdit}
      >
        Save
      </button>
    </>
  );
}
