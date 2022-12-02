import React from 'react';
import Index from '../../src/index.js';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { render } from 'react-dom';

describe('index.cy.js', () => {
    let container = null;

//     beforeEach(() => {
//         // setup a DOM element as a render target
//         container = document.createElement("div");
//         document.body.appendChild(container);
//       });

//       afterEach(() => {
//         // cleanup on exiting
//         ReactDOM.unmountComponentAtNode(container)
//         container.remove()
//         container = null
//       })

//   it('mount Leftsidenav', () => {
//     render(<Index />, {wrapper: Router});
//   })
it('loads successfully', () => {
    cy.visit('http://localhost:3000')
})
})