import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null,
    };
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

 fetchFruit = () => {
   fetch('/api/fruit')
     .then(response => response.json())
     .then(fruit => this.setState({ fruit }));
 }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  updateFilter = event => {
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentfilter={this.state.currentFilter}
        onUpdateFilter={this.updateFilter}
      />
    );
  }
}

export default App;
