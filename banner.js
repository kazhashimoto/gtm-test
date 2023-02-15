const IDENT = '_my-consent';

const domString = `
<div class="${IDENT}-banner" id="${IDENT}">
  <div class="${IDENT}-inner">
    <dl class="${IDENT}-col1">
      <dt>Consent Types: </dt>
      <dd>
        <label><input type="checkbox" value="adConsentGranted">ad</label>
        <label><input type="checkbox" value="analyticsConsentGranted">analytics</label>
        <label><input type="checkbox" value="functionalityConsentGranted">functionality</label>
        <label><input type="checkbox" value="personalizationConsentGranted">personalization</label>
        <label><input type="checkbox" value="securityConsentGranted">security</label>
      </dd>
    </dl>
    <div class="${IDENT}-col2">
      <button type="button" id="${IDENT}-ok-btn" class="${IDENT}-btn">OK</button>
    </div>
  </div>
</div>
`;

const cssRules = [
  `.${IDENT}-banner { width: 100%; min-height: 100px; position: fixed; bottom: 0; left: 0; }`,
  `.${IDENT}-banner { display: flex; justify-content: center; background: lightblue; padding: 20px 10px; }`,
  `.${IDENT}-inner { display: flex; max-width: 500px; }`,
  `.${IDENT}-col1 { display: flex; margin: 0; }`,
  `.${IDENT}-col1 > dt { white-space: nowrap; }`,
  `.${IDENT}-col1 > dd { margin-left: 10px; }`,
  `.${IDENT}-col1 label { display: inline-block; }`,
  `.${IDENT}-col2 { margin-left: auto; }`,
  `.${IDENT}-btn { color: #fff; font-size: 1rem; padding: 8px 16px; border-width: 0; border-radius: 5px; background: #3b5bdb; text-shadow: 0 1px 0 #364fc7; transition: all 0.2s; cursor: pointer; }`,
  `.${IDENT}-btn.active { color: #fff; background: #fff; }`,
  `@media (hover: hover) and (pointer: fine) { .${IDENT}-btn:hover { background: #4c6ef5; }}`,
  `@media (max-width: 500px) { .${IDENT}-inner { flex-direction: column; }}`,
  `@media (max-width: 500px) { .${IDENT}-col1 { flex-direction: column; }}`,
  `@media (max-width: 500px) { .${IDENT}-col2 { margin: 20px auto 0; }}`
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
  banner.querySelector(`#${IDENT}-ok-btn`).addEventListener('click', (evt) => {
    console.log('click', evt.target);
    const consent = {};
    const items = document.querySelectorAll(`#${IDENT} input[type=checkbox]`);
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
