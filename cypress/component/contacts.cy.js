import Contacts from '../../src/Pages/contacts';
// import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../src/store';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Experimental_CssVarsProvider } from '@mui/material';

describe('contacts.cy.js', () => {
  it('mount contacts', () => {
//     <Provider store={store}>
//     <BrowserRouter>
//        <Routes>
//        <Route path={'/contacts'} element={<Contacts />}/>
//        </Routes>
//    </BrowserRouter>
// </Provider>
    // cy.mount(<Contacts />);
    let contacts = cy.mount(<Contacts />);
cy.get('.content').should('have.text','For any issues, please contact us')
  })
})