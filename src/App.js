import React, { useState } from "react";
import InventoryTable from "./components/InventoryTable";
import AddItemForm from "./components/AddItemForm";
import FilterSortControls from "./components/FilterSortControls";

const App = () => {
  const [items, setItems] = useState([
    { id: "1", name: "Apples", category: "Fruit", quantity: 15 },
    { id: "2", name: "Milk", category: "Dairy", quantity: 8 },
    { id: "3", name: "Bread", category: "Bakery", quantity: 20 },
  ]);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const editItem = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const filteredItems = items.filter((item) =>
    filter ? item.category.toLowerCase() === filter.toLowerCase() : true
  );

  const sortedItems = [...filteredItems].sort((a, b) =>
    sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Inventory Management</h1>
      <div className="row mb-4">
        <div className="col-md-6">
          <AddItemForm addItem={addItem} />
        </div>
        <div className="col-md-6">
          <FilterSortControls setFilter={setFilter} setSortOrder={setSortOrder} />
        </div>
      </div>
      <InventoryTable
        items={sortedItems}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default App;
