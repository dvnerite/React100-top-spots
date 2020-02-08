  
import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      topspots: []

    };
  }

  componentWillMount() {
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <div className="container">
          <div className="jumbotron">

            <h1>San Diego Top Spots</h1>
            <p>A List Of The Top 30 Places To See In San Diego, California</p>
          </div>
        </div>
        {
          this.state.topspots.map(topspot => (
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location}/>
          ))
        }

<pre>
            {/* { JSON.stringify(this.state.topspots, null, 2) } */}
      </pre>
  </div>

      
      
    );
  }
}

export default App;