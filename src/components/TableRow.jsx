import EditableCell from "./EditableCell";

const TableRow = ({ product, onTitleChange }) => {
  return (
    <tr>
      <td>
        <EditableCell
          value={product.title}
          onSave={(newTitle) => onTitleChange(product.id, newTitle)}
        />
      </td>
      <td>{product.brand}</td>
      <td>{product.category}</td>
      <td>${product.price}</td>
      <td>{product.rating}</td>
    </tr>
  );
};

export default TableRow;
