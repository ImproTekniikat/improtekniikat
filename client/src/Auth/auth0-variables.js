export const AUTH_CONFIG = {
  domain: 'improsivusto.eu.auth0.com',
  clientId: 'Cldiq6Z7azFTSdITHf4Hrnoj5SigXvZN',
  callbackUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/callback'
      : 'https://improtekniikat.herokuapp.com/callback'
  // callbackUrl: 'http://localhost:3000/callback'
};

/*
import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'improsivusto.eu.auth0.com',
    clientID: 'Cldiq6Z7azFTSdITHf4Hrnoj5SigXvZN',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://improsivusto.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}*/
