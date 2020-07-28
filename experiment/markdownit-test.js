const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const md = require('markdown-it')();

const testFile = fs.readFileSync('./test.md', 'utf-8');
const res = md.render(testFile);
fs.writeFileSync('./markdownitoutput', res);
