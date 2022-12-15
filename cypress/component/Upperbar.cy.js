import Upperbar from '../../src/Components/upperbar';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import {BrowserRouter, Routes, Route, MemoryRouter} from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


describe('Upperbar.cy.js', () => {
  beforeEach(() => {
    const initialState = { cartCount: 0,
      addFlag: "False",
      delFlag: "False",
      cartList: [],
      username: "",
      email: "",
      type: "",
      electronics: [],
      toys: [] };
    const mockStore = configureStore();
    let store;
    let username = "user1"
    store = mockStore(initialState);

    cy.intercept('GET', 'api/user/' + username, { fixture: 'users.json'}).as('getUsers')
    cy.intercept('GET', 'api/user/' + username, { fixture: 'users.json'}).as('getUsers')
    cy.intercept('GET', 'api/user/' + username, { fixture: 'users.json'}).as('getUsers')

   

    cy.mount(
      <Provider store={store}>
        <MemoryRouter>
        <Routes>
          <Route path={'/'} element={<Upperbar />}/>
        </Routes>
        </MemoryRouter>
      </Provider>);

    cy.wait(['@getUsers'])
    });
  
    it('mount upperbar', () => {
      cy.get('.dropdown-content').click()
    })
  })
  
