import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Bookings from './pages/Bookings';

ReactDOM.render(
    <BrowserRouter>
    <div>
<Route exact path='/' component={App}/>
<Route exact path='/bookings' component={Bookings}/>
</div>
    </BrowserRouter>
, document.getElementById('root'));

