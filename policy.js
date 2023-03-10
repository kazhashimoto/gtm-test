// Adapted from
// https://developers.google.com/tag-manager/templates/policies?hl=ja

window.dataLayer = window.dataLayer || [];
let gtag = function() {dataLayer.push(arguments);}

const policies = new Map();
policies.set('send_pixel', true)
  .set('write_globals', true)
  .set('inject_script', true)
  .set('logging', true)
  .set('access_globals', true)
  .set('access_consent', true)
  .set('read_event_metadata', true)
  .set('write_data_layer', true)
  .set('get_cookies', true)
  .set('set_cookies', true)
  .set('unknown', false);

let debug_policy = false;
const debug = function() {
  if (debug_policy) {
    console.log(...arguments);
  }
};

(function() {
  let val;
  const params = new URL(document.location).searchParams;
  for (const key of policies.keys()) {
    debug(key, policies.get(key), params.get(key));
    val = params.get(key);
    if (val) {
      policies.set(key, val == 'true');
    }
  }
  val = params.get('check_policy');
  if (val && val == 'false') {
    gtag = function() {};
  }
  val = params.get('debug_policy');
  if (val && val == 'true') {
    debug_policy = true;
  }
})();

gtag('policy', 'inject_script', function(container, policy, data) {
  debug('gtag inject_script');

  // reference the url of the script to be injected
  let url = data.url || '';

  // if the url of the injected script exactly matches, allow it.
  // otherwise throw an error
  const allow = [
    'https://kazhashimoto.github.io/gtm-test/callback.js',
    'https://kazhashimoto.github.io/gtm-test/banner.js'
  ];

  if (allow.includes(url)) {
    return true;
  } else {
    throw 'Only permitted to inject https://kazhashimoto.github.io/gtm-test/callback.js';
  }
});

gtag('policy', 'all', function(container, policy, data) {

  // Only set policy for 1 specific container.
  // This enables other containers loaded on the page to
  // operate without restrictions on permissions.
  if (container != 'GTM-5JKR7FS') return true;

  let val = false;
  if (policies.has(policy)) {
    val = policies.get(policy);
  }
  debug('gtag policy', policy, val);
  // Since the policy is 'all', adjust permissions conditionally.
  switch (policy) {

    case 'send_pixel':
      return val;

    case 'write_globals':
      return val && data.key && data.key == '_gaq';

    case 'inject_script':
      let url = data.url || '';
      if (url.indexOf('https://kazhashimoto.github.io/') != 0)
        throw 'Only kazhashimoto.github.io scripts are permitted';
      return val;
    case 'logging':
      return val;
    default:
      // IT staff decides that all unknown permissions
      // are rejected.
      // return false;
      return val;
  }
});
