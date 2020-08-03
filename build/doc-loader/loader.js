/* eslint-disable */

const fs = require('fs')
const path = require('path')
const renderTemplate = require('./markdownit-test');

function main(source) {
  const scriptReg = /<script[^>]*>(?:.|[\r\n])*<\/script>/;
  const template = renderTemplate(source);
  const scriptCode = source.match(scriptReg);
  fs.writeFileSync(path.resolve(__dirname, './markdownitoutput.vue'), template + '\n' + (scriptCode ? scriptCode[0] : ''))
  return template + '\n' + (scriptCode ? scriptCode[0] : '')
}

module.exports = main
