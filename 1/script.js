let button = document.querySelector('button');
let output = document.querySelector('ul');
let names = ['Abuzar', 'Taha', 'Mohsan', 'hassan'];

button.addEventListener('click', function() {
    for (i = 0; i < names.length; i++) {
        let create = document.createElement('li');
        create.innerText = names[i];
        output.appendChild(create);
    };
});