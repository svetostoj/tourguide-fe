import axios from './init'

// example
// import auth from './api/auth'
// auth.loginUser()

export default {
    fetchToken
}

async function fetchToken(username, password) {
    // pretending to post the username, password
    // post gives back token if success
    const response = await axios.get('/token') //fake token req
    const {token} = response.data
    return token
}


