/* Menu Active Codes */
let targets = document.querySelectorAll('[data-target]')
targets.forEach(element => {
  element.addEventListener('click', () => {
    var target = document.querySelector(element.dataset.target)
    targets.forEach(element2 => {
      var target2 = document.querySelector(element2.dataset.target)
      element2.style.color = 'var(--menu_text_color)'
      target2.style.display = 'none'
    });
    element.style.color = 'var(--menu_active_text_color)'
    target.style.display= 'flex'
  })
})

/* Date Time */
function dateTime() {
  const date = new Date();
  document.getElementById('date-time').innerText = date.toLocaleString('en-GB', {timeZone: 'Australia/Sydney'});
}
setInterval(dateTime, 1000);

/* Toggle Dark Mode */

const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const modeToggleImage = document.getElementById('mode-toggle-img');

let isDay = true;


modeToggle.addEventListener('click', () => {
	body.classList.toggle('dark-mode');
  if (isDay) {
    modeToggleImage.src = './img/sun_icon.png';
    isDay = false;
  } else {
    modeToggleImage.src = './img/moon_icon.png';
    isDay = true;
  }
});