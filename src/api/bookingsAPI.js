import axios from './init'

export default {
    fetchBookings
}

// const AuthStr = 'Bearer ' + USER_TOKEN;
// { 'headers': { 'Authorization': AuthStr } 
// const reqHeaders = {
//     'headers': {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Headers': 'x-access-token'
//       }
// }
// , reqHeaders

async function fetchBookings() {
    const response = await axios.get('http://localhost:3000/bookings')
    const bookings = response.data
    return bookings
}