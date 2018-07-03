import axios from './init'

// example
// import auth from './api/auth'
// auth.loginUser()

export default {
    fetchToken,
    fetchAccount
}

async function fetchToken(email, password) {
    // pretending to post the username, password
    // post gives back token if success
    const response = await axios.post('./auth/login', {
        email,
        password
    })
    const {token} = response.data
    return token
}


async function fetchAccount(token) {
    const response = await axios.get('/bookings', {

        headers : {
            'Content-Type': `Bearer ${token}`
        }
    })
    const bookings = response.data
    return bookings
   
}





