let second = 0;
let minute = 0;
let hour = 0;

const secondHand = document.querySelector('#second-hand');
const minuteHand = document.querySelector('#minute-hand');
const hourHand = document.querySelector('#hour-hand');

let d = new Date();

setInterval(
    function() {
        d = new Date();
        second = d.getSeconds() * 6;
        minute = d.getMinutes() *6;
        hour = d.getHours() * 30 + Math.round(minute / 12);
        secondHand.style.transform = 'rotate(' + second + 'deg)';
        minuteHand.style.transform = 'rotate(' + minute + 'deg)';
        hourHand.style.transform = 'rotate(' + hour + 'deg)';
    },1000
)