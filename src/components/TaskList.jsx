import React from "react";
import EditSection from "./EditSection";

export default function TaskList({
  taskName,
  edit,
  editItem,
  onEditChange,
  onSave,
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
            onSave={onSave}
          />
        )}
        }
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
