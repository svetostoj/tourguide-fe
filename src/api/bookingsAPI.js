import axios from './init'

export default {
    fetchBookings
}

// const AuthStr = 'Bearer ' + USER_TOKEN;
// { 'headers': { 'Authorization': AuthStr } 
// const reqHeaders = {
//     'headers': {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Credentials': true,
//         'Access-Control-Allow-Origin': '*'

//       }
// }
// , reqHeaders

// X-Powered-By: Express
// Access-Control-Allow-Origin: *
// Access-Control-Allow-Credentials: true
// Content-Type: application/json; charset=utf-8
// Content-Length: 415
// ETag: W/"19f-OiaVnwHrBkPvmXXtgU3STu02SaQ"
// Date: Wed, 04 Jul 2018 02:10:01 GMT
// Connection: keep-alive

async function fetchBookings() {
    const response = await axios.get('/bookings')
    const bookings = response.data
    return bookings
}