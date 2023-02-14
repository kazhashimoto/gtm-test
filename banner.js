const domString = `
<div class="banner">
  <div class="banner-inner">
    <dl class="col1">
      <dt>Consent Types: </dt>
      <dd>
        <label><input type="checkbox" value="adConsentGranted" class="cb">ad</label>
        <label><input type="checkbox" value="analyticsConsentGranted" class="cb">analytics</label>
        <label><input type="checkbox" value="functionalityConsentGranted" class="cb">functionality</label>
        <label><input type="checkbox" value="personalizationConsentGranted" class="cb">personalization</label>
        <label><input type="checkbox" value="securityConsentGranted" class="cb">security</label>
      </dd>
    </dl>
    <div class="col2">
      <button type="button" id="ok-btn">OK</button>
    </div>
  </div>
</div>
`;

(function() {
  console.log('### banner.js');
  let banner = document.createRange().createContextualFragment(domString);
  banner.querySelector('#ok-btn').addEventListener('click', (evt) => {
    console.log('click', evt.target);
    const consent = {};
    const items = document.querySelectorAll('.cb');
    for (const el of items) {
      console.log(el.id, el.checked, el.value);
      if (el.checked) {
        consent[el.value] = true;
      }
    }
    console.log(consent);
    onConsentChange(consent);
  });

  document.body.appendChild(banner);
})();
