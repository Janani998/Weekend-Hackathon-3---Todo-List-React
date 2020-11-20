import React from "react";
import EditSection from "./editSection";

export default function TaskList({
  taskName,
  edit,
  editValue,
  onEditChange,
  onSaveEdit,
  onDelete,
  onEdit
}) {
  return (
    <>
      <li className="list">
        {!edit ? (
          taskName
        ) : (
          <EditSection
            editValue={editValue}
            onEditChange={onEditChange}
            onSaveEdit={onSaveEdit}
          />
        )}
      </li>
      <button className="edit" onClick={onEdit}>
        Edit
      </button>
      <button className="delete" onClick={onDelete}>
        Delete
      </button>
    </>
  );
}
