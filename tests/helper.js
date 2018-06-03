require('babel-register')({
  presets: [
    'react',
    'env',
  ],
  plugins: [
    'transform-object-rest-spread',
  ],
});
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const axios = require('axios');
const httpAdapter = require('axios/lib/adapters/http');

axios.defaults.host = 'http://localhost:3000';
axios.defaults.adapter = httpAdapter;

configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

const exposedProperties = ['window', 'navigator', 'document'];

const { window } = new JSDOM('', { url: 'http://localhost' });
global.document = window.document;
global.window = window;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

global.localStorage = {
  setItem() {},
};

global.documentRef = document;
