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
      <button type="button" id="ok-btn" class="btn">OK</button>
    </div>
  </div>
</div>
`;

const cssRules = [
  '.banner { display: flex; justify-content: center; background: lightblue; padding: 20px 10px; }',
  '.banner-inner { display: flex; max-width: 500px; }',
  '.col1 { display: flex; margin: 0; }',
  '.col1 > dt { white-space: nowrap; }',
  '.col1 > dd { margin-left: 10px; }',
  '.col1 label { display: inline-block; }',
  '.col2 { margin-left: auto; }',
  '.btn { color: #fff; font-size: 1rem; padding: 8px 16px; border-width: 0; border-radius: 5px; background: #3b5bdb; text-shadow: 0 1px 0 #364fc7; transition: all 0.2s; cursor: pointer; }',
  '.btn.active { color: #fff; background: #fff; }',
  '@media (hover: hover) and (pointer: fine) { .btn:hover {background: #4c6ef5; }}',
  '@media (max-width: 500px) { .banner-inner { flex-direction: column; }}',
  '@media (max-width: 500px) { .col1 { flex-direction: column; }}',
  '@media (max-width: 500px) { .col2 { margin: 20px auto 0; }}'
];

const addCSS = function() {
  let el = document.getElementById('banner-styles');
  if (el) {
    return;
  }
  el = document.createElement('style');
  el.id = 'banner-styles';
  el.textContent = cssRules.join(' ');
  document.querySelector('head').appendChild(el);
};

(function() {
  console.log('### banner.js');
  addCSS();
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
