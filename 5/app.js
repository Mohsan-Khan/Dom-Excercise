// setTimeout(function() {
//     console.log('hello world');
// }, 10000);


// function printname() {
//     console.log('abc')
// }
// setTimeout(printname, 1500);

// setInterval(printname, 10000);

// console.log(new Date);


// let date = new Date();
// let time = new Date();

// let fulldate = date.getDate() + '/' + date.getDay() + '/' + date.getFullYear();
// let fulltime = (time.getHours() - 12) + ':' + time.getMinutes() + ':' + time.getSeconds();

// console.log(fulldate);
// console.log(fulltime);
// __________________________________________________________________________

let documentHours = document.getElementById('hours');
let documentMinutes = document.getElementById('minutes');
let documentSeconds = document.getElementById('seconds');

function clock() {
    let time = new Date();
    let hours = time.getHours() + (' hr');
    let minutes = time.getMinutes() + (' m');
    let seconds = time.getSeconds() + (' s');
    documentHours.innerHTML = hours;
    documentMinutes.innerHTML = minutes;
    documentSeconds.innerHTML = seconds;
};

setInterval(clock, 1000);