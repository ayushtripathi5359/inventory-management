import React from "react";

const FilterSortControls = ({ setFilter, setSortOrder }) => {
  return (
    <div className="card p-3">
      <h5>Filter and Sort</h5>
      <div className="mb-3">
        <label className="form-label">Filter by Category</label>
        <select className="form-select" onChange={(e) => setFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Fruit">Fruit</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
        </select>
      </div>
      <div>
        <button
          className="btn btn-secondary me-2"
          onClick={() => setSortOrder("asc")}
        >
          Sort Asc
        </button>
        <button className="btn btn-secondary" onClick={() => setSortOrder("desc")}>
          Sort Desc
        </button>
      </div>
    </div>
  );
};

export default FilterSortControls;
