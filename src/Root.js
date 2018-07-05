import React, { Component, Fragment } from 'react';
import './App.css';
// import LoginForm from './components/LoginForm'
import auth from './api/auth'
// import Table from './pages/Table';
import Bookingss from './pages/Bookingss';

class App extends Component {

  state = { isLoggedIn: false }

  login = (username, password) => {
    auth.loginFunc(username, password)
      .then(() => {
        localStorage.setItem('login', 'true')
        this.setState({ isLoggedIn: true })
      }
      )
      .then(() => {
        this.setState({ isLoggedIn: true })
      })
  }

  componentDidMount() {
    const login = localStorage.getItem('login')
    if (login) {
      this.setState({ isLoggedIn: true })
    }
  }

  logout = () => {
    localStorage.removeItem('login')
    this.setState({
      login: null,
      isLoggedIn: false
    })
  }

  render() {
    // const { isLoggedIn } = this.state
    return <Fragment>
     <Bookingss />

    
    </Fragment>
  }
}

export default App;
