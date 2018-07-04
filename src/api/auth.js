import axios from './init'

// example
// import auth from './api/auth'
// auth.loginUser()

export default {
    login
}

async function login(email, password) {
    // pretending to post the username, password
    // post gives back token if success
    const payload = {
        email,
        password
    }
    const response = await axios.post('/auth/login', payload)
    console.log(response)
    return true
}


// async function fetchAccount(token) {
//     const response = await axios.get('/bookings', {

//         headers : {
//             'Content-Type': `Bearer ${token}`
//         }
//     })
//     const bookings = response.data
//     return bookings
   
// }





