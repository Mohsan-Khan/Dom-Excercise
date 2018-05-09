var Body = document.body;

function mixin(bgcolor) {
    Body.style.backgroundColor = 'bgcolor';
    Body.style.transition = '.2s';

}

window.addEventListener('keydown', function(e) {
    if (e.key == 'a') {
        Body.style.backgroundColor = 'black';
        Body.style.transition = '.2s';
    } else if (e.key == 's') {
        Body.style.backgroundColor = 'darkgray';
        Body.style.transition = '.2s';
    } else if (e.key == 'd') {
        Body.style.backgroundColor = 'green';
        Body.style.transition = '.2s';
    } else if (e.key == 'f') {
        Body.style.backgroundColor = 'yellow';
        Body.style.transition = '.2s';
    } else if (e.key = 'j') {
        Body.style.backgroundColor = 'blue';
        Body.style.transition = '.2s';
    }
});