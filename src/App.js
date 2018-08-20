import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataTable } from './DataTable/DataTable';

class App extends Component {
  bikeList = null;

  state = {
    data: [],
    totalPages: null,
    localData: null
  };

  pullBikeInfo = () => {
    fetch('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen')
    .then(results => results.json())
    .then(data => {
      this.setState({
        data: data.bikes
      });
    });
  };

  componentDidMount = () => {
    this.pullBikeInfo();
  };

  deleteBikeHandler = id => {
    const bikes = [...this.state.data];
    bikes.splice(id, 1);

    this.setState({
      data: bikes
    });
  };
  
  render() {
    return (
      <div className="App container">
        <div className="jumbotron">
          <h1>Welcome to the Bike Inventory Locator</h1>
        </div>
        <DataTable list={this.state.data} delete={this.deleteBikeHandler} />
      </div>
    );
  }
}

export default App;
