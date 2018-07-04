import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bookingsAPI from '../api/bookingsAPI';

class Bookings extends Component {

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
        if (!bookings) return <h3>fetching bookings...</h3>
        return <ul>
            {bookings.map(booking => {
                    return <li key={booking.id}>
                        <Link to={`/bookings/${booking.id}`}>
                            {bookings.booking} </Link></li>
                })}
        </ul>
    }
}

export default Bookings