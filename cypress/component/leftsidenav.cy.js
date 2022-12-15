import Leftsidenav from '../../src/Components/leftsidenav';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import {BrowserRouter, Routes, Route, MemoryRouter} from 'react-router-dom';
import { render } from 'react-dom';

describe('leftsidenav.cy.js', () => {
    let container = null;

    beforeEach(() => {
      cy.mount(
        <MemoryRouter>
        <Routes>
          <Route path={'/'} element={<Leftsidenav />}/>
        </Routes>
        </MemoryRouter>);
      });

    //   afterEach(() => {
    //     // cleanup on exiting
    //     ReactDOM.unmountComponentAtNode(container)
    //     container.remove()
    //     container = null
    //   })

  it('mount Leftsidenav', () => {
   
  
  // cy.visit('http://localhost:3000/')
  cy.get('.left-dropdown-content').should('include.text','Dashboard')
  })

  it('Should Toggle Navigation Pane', () => {
  // cy.visit('http://localhost:3000/')
  cy.get('#menu')
  .then($button => {
    if ($button.is(':visible')) {
      $button.click()}})
  // cy.get('#menu').click()
  })

})