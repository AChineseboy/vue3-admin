/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */

const md = require('markdown-it')().use(require('markdown-it-container'), 'demo', {
  render(tokens, idx) {
    const demoContent = tokens[idx].info.trim();
    return `<demo-block>${demoContent}</demo-block>`;
  },
});

module.exports = function (source) {
  const res = md.render(source);
  const output = `
  <template><div>${res}</div></template>
`;
  return output;
};
