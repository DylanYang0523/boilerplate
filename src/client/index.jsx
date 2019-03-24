import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector('#root');
const renderApp = () => {
  ReactDOM.render(<App />, root);
};

class App extends React.Component {
  render() {
    return (
      <div>Ummm Working!!!!</div>
    )
  }
}

renderApp();

if (module.hot) {
  module.hot.accept(App, renderApp);
}