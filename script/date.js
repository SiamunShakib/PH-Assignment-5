const today = new Date();

const day = today.getDate();
const year = today.getFullYear();

const weeks = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const week = weeks[today.getDay()];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const month = months[today.getMonth()];

const thisDay = document.createElement('h1');
thisDay.innerText = `${week} ${month} ${day} ${year}`

const dateBox = document.getElementById('date');

dateBox.appendChild(thisDay);








