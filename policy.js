// https://developers.google.com/tag-manager/templates/policies?hl=ja

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('policy', 'inject_script', function(container, policy, data) {
  console.log('gtag inject_script');

  // reference the url of the script to be injected
  let url = data.url || '';

  // if the url of the injected script exactly matches, allow it.
  // otherwise throw an error
  if (url === 'https://kazhashimoto.github.io/gtm-test/callback.js') {
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

  console.log('gtag policy', policy);
  // Since the policy is 'all', adjust permissions conditionally.
  switch (policy) {

    case 'send_pixel':
      // return true;
      console.log(policy, false);
      return false; // TEST

    case 'write_globals':
      return data.key && data.key == '_gaq';

    case 'inject_script':
      let url = data.url || '';
      if (url.indexOf('https://kazhashimoto.github.io/') != 0)
        throw 'Only kazhashimoto.github.io scripts are permitted';
    case 'logging':
      console.log(policy, true);
      return true;
    default:
      // IT staff decides that all unknown permissions
      // are rejected.
      // return false;
      return true;  // test
  }
});
