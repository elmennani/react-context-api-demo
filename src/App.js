import React, { Component } from 'react';
import { Provider, Consumer } from './MyContext';

const Nav = () => (<LoginForm />);

class LoginForm extends Component {
  render() {
    return (
      <Consumer>
        {value => (
          value.viewer ? (
            <React.Fragment>
              <h3>Loged in as: {value.viewer}</h3>
              <button onClick={value.logOut}>Log Out</button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <input type="text" placeholder="login please" ref={ r => this.inputRef = r}  />
              <button type="submit" onClick={() => value.logIn(this.inputRef.value)}>Log In</button>
            </React.Fragment>
          )
        )}
      </Consumer>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <Nav />
        </Provider>
      </div>
    );
  }
}

export default App;
