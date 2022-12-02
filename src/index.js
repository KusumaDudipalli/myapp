import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Login from './Pages/login';
import Register from './Pages/register';
import Loggedin from './Pages/loggedin';
import Dashboard from './Pages/dashboard';
import Contacts from './Pages/contacts';
import AddUser from './Pages/adduser';
import AddItem from './Pages/additem';
import Toys from './Pages/toys';
import Electronics from './Pages/electronics';
// import Cart from './Pages/cart';
import Signout from './Pages/signout'
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'


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
