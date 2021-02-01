const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('yourName');
const focus = document.getElementById('focus');

function showTime () {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    const showAmOrPm = hour >= 12 ? 'PM' : 'AM';    

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmOrPm}`;

    setTimeout (showTime, 1000);
}


function addZero(n) {
    return (n < 10 ? '0' : '' ) + n;
}

function setBgGreeting() {
  let today = new Date(),
      hour = today.getHours();

  if (hour < 12) {
      changeTimeOfDay('morning.jpg', 'Morning');
  } else if (hour < 18) {
      changeTimeOfDay('afternoon.jpg', 'Afternoon');
  } else if (hour < 23) {
      changeTimeOfDay('evening.jpg', 'Evening');
  } else {
      changeTimeOfDay('night.jpg', 'Night');
      document.body.style.color = 'white';
  }
}

function changeTimeOfDay(backgroundImage, timeOfDay) {
  document.body.style.backgroundImage = `url('./img/${backgroundImage}')`;
   greeting.textContent = `Good ${timeOfDay}, `;
}

function getName() {
  if (
    localStorage.getItem('name') === '' || localStorage.getItem('name') === null
  ) {
    name.textContent = '[Enter Your Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  if (e.type === 'keypress') {
    if (e.key === 'Enter') {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
    }
} else {
    localStorage.setItem('name', e.target.innerText);
}
}

function getFocus() {
  if (
    localStorage.getItem('focus') === '' || localStorage.getItem('focus') === null
  ) {
    focus.textContent = '[Enter Your Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.key === 'Enter') {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
    }
} else {
    localStorage.setItem('focus', e.target.innerText);
}
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreeting ();
getName ();
getFocus ();
