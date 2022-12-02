import Upperbar from '../../src/Components/upperbar';
import { HOST, CART_USER_URI, TOYS_URI, USER_URI, ELECTRONICS_URI } from '../../src/Constants/constants';
import axios from 'axios';

describe('Upperbar.cy.js', () => {
  beforeEach(() => {
    const username = sessionStorage.getItem("currentUser");
    spyOn(axios, get).then
    axios({
      method: 'get',
      url: HOST + USER_URI + "user1" 
    }).then((response)=>{
      var email = response.data[0].email;
      var type = response.data[0].profile;
      // dispatch(updateuser({username:username,email:email, type: type}));
    });
  
  })
  it('mount upperbar', () => {
    cy.mount(<Upperbar />)
  })
})