// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react18'
import React from 'react';
import ReactDOM from 'react-dom';
import '../../src/index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from '../../src/App';
import Login from '../../src/Pages/login';
import Register from '../../src/Pages/register';
import Loggedin from '../../src/Pages/loggedin';
import Dashboard from '../../src/Pages/dashboard';
import Contacts from '../../src/Pages/contacts';
import AddUser from '../../src/Pages/adduser';
import AddItem from '../../src/Pages/additem';
import Toys from '../../src/Pages/toys';
import Electronics from '../../src/Pages/electronics';
// import Cart from './Pages/cart';
import Signout from '../../src/Pages/signout'
import reportWebVitals from '../../src/reportWebVitals';
import store from '../../src/store'
import { Provider } from 'react-redux'

Cypress.Commands.add('mount', mount)

//commented 22 24 lines

// Example use:
// cy.mount(<MyComponent />)




ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
        <Routes>
            <Route path={'/register'} element={<Register />}/>
            {/* <Route path={'/loggedin/:name/:email'} element={<Loggedin />}/>  */}
            <Route path={'/login'} element={<Login />}/>
            <Route path={'/loggedin'} element={<Loggedin />}/>
            <Route path={'/dashboard'} element={<Dashboard />}/>
            <Route path={'/contacts'} element={<Contacts />}/>
            <Route path={'/adduser'} element={<AddUser />}/>
            <Route path={'/additem'} element={<AddItem />}/>
            <Route path={'/toys'} element={<Toys />}/>
            <Route path={'/electronics'} element={<Electronics />}/>
            {/* <Route path={'/cart'} element={<Cart />}/> */}
            <Route path={'/signout'} element={<Signout />}/>
            <Route path={'/'} element={<Login />}/>
        </Routes>
    </BrowserRouter>
    </Provider>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
