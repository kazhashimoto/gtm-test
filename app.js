document.querySelectorAll('a[href^="#"]').forEach(e => {
  e.addEventListener('click', (evt) => {
    if (disableDefault()) {
      evt.preventDefault();
    }
    const id = evt.target.getAttribute('href').replace(/^#/, '');
    const el = document.getElementById(id);
    const top = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  })
});

(function() {
  const val = getParam('default');
  console.log('default', val);
  if (val) {
    const item = document.getElementById('cb1');
    item.checked = (val == 'true')? true: false;
  }
})();

function disableDefault() {
  const item = document.getElementById('cb1');
  console.log('checked', item.checked);
  return item.checked;
}

function getParam(name) {
  const params = new URL(document.location).searchParams;
  return params.get(name);
}
