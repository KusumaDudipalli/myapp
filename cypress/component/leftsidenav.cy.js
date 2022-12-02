import Leftsidenav from '../../src/Components/leftsidenav';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { render } from 'react-dom';

describe('leftsidenav.cy.js', () => {
    let container = null;

    // beforeEach(() => {
    //     // setup a DOM element as a render target
    //     container = document.createElement("div");
    //     document.body.appendChild(container);
    //   });

    //   afterEach(() => {
    //     // cleanup on exiting
    //     ReactDOM.unmountComponentAtNode(container)
    //     container.remove()
    //     container = null
    //   })

  it('mount Leftsidenav', () => {
    cy.mount(<Leftsidenav />, {wrapper: Router});
  })
})