const path = require('path');

const docLoader = path.resolve('./build/doc-loader/loader.js');
// options: {
//   compilerOptions: {
//     preserveWhitespace: false
//   }
// }
module.exports = {
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule('doc')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use(docLoader)
      .loader(docLoader)
      .end();
  },
};
