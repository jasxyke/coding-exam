import React from "react";

const SelectFilter = ({ filter, changeFilter, filters }) => {
  const filterOpts = filters.map((filter, index) => (
    <option key={index} value={filter.value}>
      {filter.display}
    </option>
  ));
  return (
    <div>
      <label htmlFor="filter" className="form-label">
        Filter By Age
      </label>
      <br />
      <select
        name="filter"
        id="filter"
        className="input"
        value={filter}
        onChange={(e) => changeFilter(e.target.value)}
      >
        {filterOpts}
      </select>
    </div>
  );
};

export default SelectFilter;
