const fetch = require('node-fetch');
const dash = require('dashdash');

const options = {
  allowUnknown: true,
  options: [],
};
const parser = dash.createParser(options);

const opts = parser.parse(options);
console.log('Options are:', opts);
