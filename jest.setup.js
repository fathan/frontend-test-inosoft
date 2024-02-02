const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
});
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

const { config } = require('@vue/test-utils');
config.global = {
  mocks: {
    $route: {},
  }
};

if (typeof Element === 'undefined') {
  global.Element = function () {};
}

if (typeof HTMLBodyElement === 'undefined') {
  global.HTMLBodyElement = window.HTMLBodyElement;
}

import RouterLink from './resources/js/mocks/router-link';

config.stubs['router-link'] = RouterLink;