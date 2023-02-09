window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('policy', 'inject_script', function(container, policy, data) {

  // reference the url of the script to be injected
  let url = data.url || '';

  // if the url of the injected script exactly matches, allow it.
  // otherwise throw an error
  if (url === 'https://scripts.example.com/analytics.js') {
    return true;
  } else {
    throw 'Only permitted to inject https://scripts.example.com/analytics.js';
  }
});
