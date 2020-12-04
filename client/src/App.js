import React from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Downloading from './components/Downloading';
import './style/main.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      message: ""
    }
  }

  render = () => {
    return (
      <div className='container'>
        <Header />
        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/downloading" component={Downloading} />
        <footer>
          <a
            href="https://webreznov.now.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Разработано от студии{' '}
            <h2> #webreznov__studio</h2>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
