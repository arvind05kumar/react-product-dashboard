import "./EditableCell.css";
import { useState } from "react";

const EditableCell = ({ value, onSave }) => {
  const [editValue, setEditValue] = useState(value);

  const handleBlur = () => onSave(editValue);

  return (
    <input
      className="edit-input"
      value={editValue}
      onChange={(e) => setEditValue(e.target.value)}
      onBlur={handleBlur}
    />
  );
};

export default EditableCell;
