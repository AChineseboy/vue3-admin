/* eslint-disable func-names */

const fs = require('fs');
const path = require('path');

const markRender = require('./markdownit-test');

module.exports = function (source) {
  const res = markRender(source);
  fs.writeFileSync(path.resolve(__dirname, './markdownitoutput.vue'), markRender(res));
  return markRender(res);
};
