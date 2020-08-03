/* eslint-disable */
const fs = require('fs');
const path = require('path');
// const compiler = require('@vue/compiler-sfc/dist/compiler-sfc.cjs');
const md = require('markdown-it')({ html: true, linkify: true, typographer: true });

const defaultRender = md.renderer.rules.fence;
md.renderer.rules.fence = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  // 判断该 fence 是否在 :::demo 内
  const prevToken = tokens[idx - 1];
  const isInDemoContainer =
    prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/);
  if (token.info === 'html' && isInDemoContainer) {
    const scriptReg = /<script[^>]*>(?:.|[\r\n])*<\/script>/;
    console.log(token.content.replace(scriptReg, ''))
    return `
    <pre><code class="test-html">${token.content.replace(scriptReg, '')}</code></pre>
    <template v-slot:code><pre>${md.utils.escapeHtml(
      token.content,
    )}</pre></template>
    `;
  }
  return defaultRender(tokens, idx, options, env, self);
};

md.use(require('markdown-it-container'), 'demo', {
  render(tokens, idx) {
    const { type, info } = tokens[idx];
    const demoContent = info.trim().slice(5, info.length);
    if (type === 'container_demo_open') {
      return `<demo-block><span class="demo-des">${md.render(demoContent)}</span>`;
    }
    return '</demo-block>';
  },
});

function renderTemplate(source) {
  const res = md.render(source);
  return `
  <template><div class="demo">${res}</div></template>
`;
}

module.exports = renderTemplate;
