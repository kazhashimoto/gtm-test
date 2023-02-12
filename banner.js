(function() {
  console.log('### banner.js');
  const target = document.createElement('div');
  target.classList.add('banner');

  let el = (function() {
    const el = document.createElement('button');
    el.type = 'button';
    el.id = 'banner-btn';
    el.textContent = 'OK';
    el.addEventListener('click', function(evt) {
      console.log('clicked', evt.target);
    });
    return el;
  })();

  target.appendChild(el);
  document.body.appendChild(target);
})();
