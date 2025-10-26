function initBurger() {
  const burger = document.querySelector('.burger');
  const navBar = document.querySelector('.header__list');
  const html = document.querySelector('html');


  burger.addEventListener('click', () => {
    navBar.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    html.classList.toggle('is-lock');
  });
}

export default initBurger;

