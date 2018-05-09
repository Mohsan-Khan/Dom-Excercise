let btn = document.querySelector('button');
let output = document.querySelector('ul');

let samurai = [
    'Hayaku', 'Mogan', 'Takuma', 'Ayaku'
];

btn.addEventListener('click', function() {
    output.innerText = '';
    for (var i = 0; i < samurai.length; i++) {
        var List = document.createElement('li');
        var Close = document.createElement('a');
        Close.innerText = 'X';

        Close.addEventListener('click', function() {
            this.parentNode.remove();
        });

        List.innerText = samurai[i];
        output.appendChild(List);
        List.appendChild(Close);
    }
});