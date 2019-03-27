import React, { Component } from "react";
import MatchingCard from "./components/MatchingCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import vans from "./vans.json";



// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    vans
  };

  removeVans = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const vans = this.state.vans.filter(vans => vans.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ vans });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Van's</Title>
        {this.state.vans.map(vans => (
          <MatchingCard
            removeVans={this.removeVans}
            id={vans.id}
            key={vans.id}
            name={vans.name}
            image={vans.image}
           
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
