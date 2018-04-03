import React from 'react';

const MyContext = React.createContext('myContext');

export class Provider extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      context: {
        viewer: null,
        logIn: this.logIn,
        logOut: this.logOut,
      }
    }
  }

  logIn = name => this.setState({
    context: {
      ...this.state.context,
      viewer: name
    }}
  );

  logOut = () => this.setState({
    context: {
      ...this.state.context,
      viewer: null
    }
  });

  render() {
    return (
      <MyContext.Provider
        value={this.state.context}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export const Consumer = MyContext.Consumer;