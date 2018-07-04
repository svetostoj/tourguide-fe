import React, { Component, Fragment } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import auth from './api/auth'



class App extends Component {

  state = {
    isLoggedIn: false,
  }

  login = (username, password) => {
    auth.login(username, password)
    .then(() => {
        localStorage.setItem('login', 'true')
        this.setState({
          isLoggedIn: true
        })
      }
    )
    .then(() => {
      this.setState({
        isLoggedIn: true 
      })
    })
  }

    componentDidMount() {
      // nothing here so far
      // locked in
      const login = localStorage.getItem('login')
      // token (007)
      // token null
      if(login) {
        this.setState({
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
