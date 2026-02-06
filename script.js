(() => {
  const btn = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  if(!btn || !menu) return;

  const setState = (open) => {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.classList.toggle('is-open', open);
  };

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    setState(!open);
  });

  document.addEventListener('click', (e) => {
    if(menu.classList.contains('is-open') && !menu.contains(e.target) && !btn.contains(e.target)){
      setState(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') setState(false);
  });
})();
