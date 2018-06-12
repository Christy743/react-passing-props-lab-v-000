import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, filters, currentFilter, onUpdateFilter }) =>
    <div className="fruit-basket">
      <Filter
        filters={filters}
        handleChange={onUpdateFilter}
      />
      <FilteredFruitList
        filter={currentFilter}
        fruit={fruit}
      />
    </div>

FruitBasket.defaultProps = {
  currentFilter: null,
  filters: [],
  fruit: [],
  updateFilterCallback: () => {}
};

export default FruitBasket;
