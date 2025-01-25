import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddItemForm = ({ addItem }) => {
  const [formData, setFormData] = useState({ name: "", category: "", quantity: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.category && formData.quantity) {
      addItem({ ...formData, id: uuidv4(), quantity: Number(formData.quantity) });
      setFormData({ name: "", category: "", quantity: "" });
    }
  };

  return (
    <div className="card p-3">
      <h5>Add New Item</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Item Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter item name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
