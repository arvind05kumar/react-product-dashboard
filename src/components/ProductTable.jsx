import "./ProductTable.css";
import TableRow from "./TableRow";

const ProductTable = ({ products, onTitleChange }) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              product={product}
              onTitleChange={onTitleChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
