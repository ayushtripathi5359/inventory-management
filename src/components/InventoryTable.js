import React, { useState } from "react";

const InventoryTable = ({ items, editItem, deleteItem }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEdit = (item) => {
    setIsEditing(item.id);
    setEditData(item);
  };

  const handleSave = () => {
    editItem(editData);
    setIsEditing(null);
  };

  return (
    <div className="card p-3">
      <h5>Inventory</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const isLowStock = item.quantity < 10;
            return (
              <tr
                key={item.id}
                style={{
                  backgroundColor: isLowStock ? "#ffe5e5" : "white",
                }}
              >
                <td style={{ backgroundColor: isLowStock ? "#ffe5e5" : "white" }}>
                  {isEditing === item.id ? (
                    <input
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td style={{ backgroundColor: isLowStock ? "#ffe5e5" : "white" }}>
                  {isEditing === item.id ? (
                    <input
                      value={editData.category}
                      onChange={(e) =>
                        setEditData({ ...editData, category: e.target.value })
                      }
                    />
                  ) : (
                    item.category
                  )}
                </td>
                <td style={{ backgroundColor: isLowStock ? "#ffe5e5" : "white" }}>
                  {isEditing === item.id ? (
                    <input
                      type="number"
                      value={editData.quantity}
                      onChange={(e) =>
                        setEditData({ ...editData, quantity: Number(e.target.value) })
                      }
                    />
                  ) : (
                    item.quantity
                  )}
                </td>
                <td style={{ backgroundColor: isLowStock ? "#ffe5e5" : "white" }}>
                  {isEditing === item.id ? (
                    <>
                      <button
                        className="btn btn-success me-2"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => setIsEditing(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteItem(item.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
