const buttonMap = document.querySelector('.map__btn');

buttonMap.addEventListener('click', (evt) => {
  evt.target.classList.toggle('map__btn_active');
});

/*buttonMap.addEventListener('click', (evt) => {
  evt.target.classList.toggle('map__btn_active');
  const isAriaPressed = buttonMap.getAttribute('aria-pressed') === 'true'
  buttonMap.setAttribute('aria-pressed', isAriaPressed ? 'false' : 'true')
  //buttonMap.textContent = `${isAriaPressed ? 'title' : ' '}`
})
*/


