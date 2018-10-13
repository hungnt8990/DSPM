import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import store from './helpers/store';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import Login from './components/LOGIN/LoginComponent';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container" style={{ marginTop: 20 }}>
            <Login />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
