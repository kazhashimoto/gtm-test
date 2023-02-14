// https://developers.google.com/tag-platform/tag-manager/templates/consent-apis?hl=ja

// Array of callbacks to be executed when consent changes
const consentListeners = [];

/**
 * Called from GTM template to set callback to be executed when user consent is provided.
 * @param {function} Callback to execute on user consent
 */
window.addConsentListenerExample = (callback) => {
  console.log('addConsentListenerExample', callback);
  consentListeners.push(callback);
};

/**
 * Called when user grants/denies consent.
 * @param {Object} Object containing user consent settings.
 */
onConsentChange = (consent) => {
  consentListeners.forEach((callback) => {
    callback(consent);
  });
};
