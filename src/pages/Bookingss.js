import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import bookingsAPI from '../api/bookingsAPI';

class Bookingss extends Component {

    state = { bookings: null }

    componentDidMount() {
        bookingsAPI.fetchBookings()
            .then(bookings => {
                this.setState({ bookings })
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        // deconstructing
        const { bookings } = this.state
        if (!bookings) return <h3>fetching bookings XXXX...</h3>
        console.log(bookings)
        return <ul>
            {bookings.map(booking => {
                return <li >
                    {booking.booking}
                </li>
            })}
        </ul>
    }
}

export default Bookingss