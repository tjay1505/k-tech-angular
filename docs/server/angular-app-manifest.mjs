
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ktech/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 28657, hash: '6aae52199e82c13737aba0a8af5f0925a49d2e12995759c943442ab552bc6fa8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17659, hash: '9312934d1e23bfc6e3f53775d8519ae361e84cf012a3d5182c26b2ae6e960b1b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7DS3LMSF.css': {size: 264623, hash: 'QV1dbhMS7C8', text: () => import('./assets-chunks/styles-7DS3LMSF_css.mjs').then(m => m.default)}
  },
};
