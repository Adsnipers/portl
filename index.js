let UnmsAPI = require('node-unmsapi');
let unifi = UnmsAPI({
   baseUrl: 'https://uisp.airbridge.net.au', // The URL of the Unifi Controller
   username: 'ubnt',
   password: 'ubnt',
   debug: true, // More debug of the API (uses the debug module)
   debugNet: true // Debug of the network requests (uses request module)
});