import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasData: false,
      targetId: 2440,
      owner: [],
      theData: [],
      theKit: []
    };
    this.getSensorData = this.getSensorData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    let sens = this.state.theData.map((item, key) => {
      return (
        <div className="col-6 col-md-4 border red" key={key}>
          <p>{item['description']}</p>
          <h1 className="text-center">{item['raw_value']}</h1>
          <p className="text-center">{item['unit']}</p>
          <p className="text-right">{item['name']}</p>
        </div>
      );
    });
    return (
      <div className="container">
      <div id="demo">
        Geolocation:
        <hr />
      </div>

        <div className="row">

          <div className="col-6">
            <input type="text" onChange={this.handleChange} value={this.state.targetId}/>
            <button onClick={this.getSensorData}> Get data </button>
          </div>

          <div className="col-12">
            <table>
              <thead></thead>
              <tbody>
                <tr><td>Have data</td><td> {this.state.hasData ? 'Yes' : 'No'} </td></tr>

                <tr><td>Description:</td><td> {this.state.description} </td></tr>

                <tr><td>Kit Name</td><td>{this.state.theKit['name']} </td></tr>
                <tr><td>Kit ID</td><td>{this.state.theKit['id']} </td></tr>

                <tr><td>Owner id</td><td>{this.state.owner['id']} </td></tr>
                <tr><td>Username</td><td>{this.state.owner['username']} </td></tr>
              </tbody>
            </table>
            {console.log('type', typeof this.state.theData)}
            {console.log(this.state.theData)}
          </div>
        </div>

        <div className="row">
          {sens}
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.getSensorData();
  }

  handleChange(event){
    this.setState({targetId: event.target.value})
  }

  getSensorData(){
    //console.log('fetching data...');
    return fetch('https://api.smartcitizen.me/v0/devices/' + this.state.targetId)
      .then((response) =>  response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        //console.log( typeof responseJson);
        this.setState({
          hasData: true,
          owner: responseJson.owner,
          theData: responseJson.data.sensors,
          theKit: responseJson.kit,
          description: responseJson.description,
        });
      })
  }

}

export default App;
