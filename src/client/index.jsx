import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector('#root');
const renderApp = () => {
  ReactDOM.render(<App />, root);
};

class App extends React.Component {
  render() {
    return (
      <div>Working!</div>
    )
  }
}

renderApp();