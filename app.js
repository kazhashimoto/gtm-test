
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

function disableDefault() {
  const item = document.getElementById('cb1');
  console.log('checked', item.checked);
  return item.checked;
}
