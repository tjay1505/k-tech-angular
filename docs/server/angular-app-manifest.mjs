
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/K-Tech/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 28658, hash: '172d366387e4ef7f4493559e7c160646e43965b86849cf2ba89a9912d19478ea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17660, hash: 'fa4ee5e44ca0a20534d08dae1c3b11e642faf91cb31facb3058f945c80de8683', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7DS3LMSF.css': {size: 264623, hash: 'QV1dbhMS7C8', text: () => import('./assets-chunks/styles-7DS3LMSF_css.mjs').then(m => m.default)}
  },
};
