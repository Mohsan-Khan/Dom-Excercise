// for key , for keycode , keylocation ,keyalert


// window.addEventListener('click', function(e) {
//     alert(e);
// })


var Body = document.body;

function mixin(bgcolor) {
    Body.style.backgroundColor = 'bgcolor';
    Body.style.transition = '.5s';
}

window.addEventListener('keydown', function(e) {

    if (e.key == 'a') {
        Body.style.backgroundColor = 'black';
        Body.style.transition = '.3s';
    } else if (e.key == 's') {
        Body.style.backgroundColor = 'gray';
        Body.style.transition = '.3s';
    } else if (e.key == 'd') {
        Body.style.backgroundColor = 'white';
        Body.style.transition = '.3s';
    } else if (e.key == 'f') {
        Body.style.backgroundColor = 'green';
        Body.style.transition = '.3s';
    }
});