import React from "react";
import "../styles/Products.css";

function Products() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Mobile",
      price: "₹79,999",
      stock: 25,
      status: "In Stock",
    },
    {
      id: 2,
      name: "MacBook Air",
      category: "Laptop",
      price: "₹99,999",
      stock: 12,
      status: "In Stock",
    },
    {
      id: 3,
      name: "Nike Running Shoes",
      category: "Footwear",
      price: "₹4,999",
      stock: 0,
      status: "Out of Stock",
    },
  ];

  return (
    <div className="products-page">
      <h1>Product Management</h1>
      <p className="products-subtitle">
        View and manage products listed on the platform.
      </p>

      <div className="products-table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <span
                    className={
                      product.status === "In Stock"
                        ? "status in-stock"
                        : "status out-stock"
                    }
                  >
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;