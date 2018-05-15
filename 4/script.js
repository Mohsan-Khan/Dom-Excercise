// for key , for keycode , keylocation ,keyalert


// window.addEventListener('click', function(e) {
//     alert(e);
// })

// ____________________________________________________________________


// var Body = document.body;

// function mixin(bgcolor) {
//     Body.style.backgroundColor = 'bgcolor';
//     Body.style.transition = '.1000s';
// }

// window.addEventListener('keydown', function(e) {

//     if (e.key == 'a') {
//         Body.style.backgroundColor = 'black';
//         Body.style.transition = '..1000s';
//     } else if (e.key == 's') {
//         Body.style.backgroundColor = 'gray';
//         Body.style.transition = '..1000s';
//     } else if (e.key == 'd') {
//         Body.style.backgroundColor = 'aqua';
//         Body.style.transition = '..1000s';
//     } else if (e.key == 'f') {
//         Body.style.backgroundColor = 'green';
//         Body.style.transition = '..1000s';
//     }
// });

// _______________________________________________________________________________


let box = document.getElementById('box');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');


window.addEventListener('keydown', function(e) {
    if (e.key == 'a') {
        box.style.backgroundColor = 'black';
        box.style.transition = '.1000s';
    } else if (e.key == 's') {
        box1.style.backgroundColor = 'blue'
        box1.style.transition = '.1000s';
    } else if (e.key == 'd') {
        box2.style.backgroundColor = 'green';
        box2.style.transition = '.1000s';
    } else if (e.key == 'f') {
        box3.style.backgroundColor = 'pink';
        box3.style.transition = '.1000s';
    } else if (e.key == 'g') {
        box4.style.backgroundColor = 'brown';
        box4.style.transition = '.1000s';
    } else if (e.key == 'h') {
        box5.style.backgroundColor = 'red';
        box5.style.transition = '.1000s';
    } else if (e.key == 'j') {
        box6.style.backgroundColor = 'yellow';
        box6.style.transition = '.1000s';
    } else if (e.key == 'k') {
        box7.style.backgroundColor = 'green';
        box7.style.transition = '.1000s';
    } else if (e.key == 'l') {
        box8.style.backgroundColor = 'Gray';
        box8.style.transition = '.1000s';
    } else if (e.key == 'z') {
        box9.style.backgroundColor = 'black';
        box9.style.transition = '.1000s';
    }

    setTimeout(function() {
        box.style.backgroundColor = ('aqua');
        box.style.transition = ('.1000s');

        box1.style.backgroundColor = ('aqua');
        box1.style.transition = ('.1000s');

        box2.style.backgroundColor = ('aqua');
        box2.style.transition = ('.1000s');

        box3.style.backgroundColor = ('aqua');
        box3.style.transition = ('.1000s');

        box4.style.backgroundColor = ('aqua');
        box4.style.transition = ('.1000s');

        box5.style.backgroundColor = ('aqua');
        box5.style.transition = ('.1000s');

        box6.style.backgroundColor = ('aqua');
        box6.style.transition = ('.1000s');

        box7.style.backgroundColor = ('aqua');
        box7.style.transition = ('.1000s');

        box8.style.backgroundColor = ('aqua');
        box8.style.transition = ('.1000s');

        box9.style.backgroundColor = ('aqua');
        box9.style.transition = ('.1000s');

    }, 500);


});