import React, { useEffect, useState } from 'react';
import './App.css';
const App = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: ''
  });
  const [editProduct, setEditProduct] = useState(null);
  const [errors, setErrors] = useState({});
  const fetchProducts = () => {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editProduct) {
      setEditProduct({ ...editProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
    setErrors({ ...errors, [name]: '' });
  };
  const validateInputs = (product) => {
    const newErrors = {};
    if (!product.name) newErrors.name = 'Product name is required.';
    if (!product.price) newErrors.price = 'Product price is required.';
    if (!product.description) newErrors.description = 'Product description is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const addProduct = () => {
    if (!validateInputs(newProduct)) return;
    fetch('http://localhost:4000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(response => response.json())
      .then(() => {
        fetchProducts();
        setNewProduct({ name: '', price: '', description: '' });
      });
  };
  const updateProduct = () => {
    if (!validateInputs(editProduct)) return;
    fetch(`http://localhost:4000/products/${editProduct._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editProduct)
    })
      .then(response => response.json())
      .then(() => {
        fetchProducts();
        setEditProduct(null);
      });
  };
  const deleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      fetch(`http://localhost:4000/products/${productId}`, {
        method: 'DELETE'
      })
        .then(() => fetchProducts());
    }
  };
  return (
    <div className="container">
      <h1 className="title">Product Management</h1>
      {products.length === 0 ? (
        <p className="no-products-message">No products available. Please add a new product.</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id} className="product-row">
                <td>{product.name}</td>
                <td>₹{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <div className="action-buttons">
                    <button onClick={() => setEditProduct(product)} className="edit-button">Edit</button>
                    <button onClick={() => deleteProduct(product._id)} className="delete-button">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="form-section">
        <h2 className="form-title">{editProduct ? 'Edit Product' : 'Add New Product'}</h2>
        <div className="input-group">
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              value={editProduct ? editProduct.name : newProduct.name}
              onChange={handleInputChange}
              placeholder="Product Name"
              className="input-field"
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="input-wrapper">
            <input
              type="number"
              name="price"
              value={editProduct ? editProduct.price : newProduct.price}
              onChange={handleInputChange}
              placeholder="Product Price ᴃ"
              className="input-field"
            />
            {errors.price && <p className="error-message">{errors.price}</p>}
          </div>
          <div className="input-wrapper">
            <textarea
              name="description"
              value={editProduct ? editProduct.description : newProduct.description}
              onChange={handleInputChange}
              placeholder="Product Description"
              className="input-field"
              rows={3}
            />
            {errors.description && <p className="error-message">{errors.description}</p>}
          </div>
        </div>
        {editProduct ? (
          <button onClick={updateProduct} className="update-button">Update Product</button>
        ) : (
          <button onClick={addProduct} className="add-button">Add Product</button>
        )}
      </div>
    </div>
  );
};
export default App;
