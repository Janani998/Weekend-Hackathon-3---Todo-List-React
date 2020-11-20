import React from "react";
import EditSection from "./editSection";

export default function TaskList({
  taskName,
  edit,
  editItem,
  onEditChange,
  onsaveEdit,
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
            editItem={editItem}
            onEditChange={onEditChange}
            onsaveEdit={onsaveEdit}
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
