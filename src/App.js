import React, { Component, Fragment } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import auth from './api/auth'



class App extends Component {

  state = {
    token: '',
    isLoggedIn: false,
  }

  login = (username, password) => {
    auth.fetchToken(username, password)
    .then(token => {
      localStorage.setItem('token', token)
      return token
    })
    .then(token => {
      this.setState({
        token,
        isLoggedIn: true 
      })
    })
  }

    componentDidMount() {
      // nothing here so far
      // locked in
      const token = localStorage.getItem('token')
      // token (007)
      // token null
      if(token) {
        this.setState({
          token,
          isLoggedIn: true 
        })
      }

    
    }
    // post username, password √
    // receieve token √
    // update state 
    // update state to set LoggedIn to true
  



  logout = () => {
    // console.log('logout')
    // update state to remove token
    // const token = localStorage.removeItem('token')
    localStorage.removeItem('token')
    // update state to set isLoggedIn to false
    
    this.setState({
      token: null,
      isLoggedIn: false 

    })

  }

  render() {
    console.log(window)
    const {isLoggedIn} = this.state
    return <Fragment>
        {isLoggedIn ? 
          <button onClick={this.logout}>Logout</button> 
            : 
          <LoginForm handleSubmit={this.login}/> 
        }
      </Fragment>
      
  }
}

export default App;
