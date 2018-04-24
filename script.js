                //  Do While Loop                    
                // var i = 0;
                // var value = 20;

                // do {
                //     i++;
                //     console.log(i);

                // } while (i > 20);

                // FOR LOOPS:

                // for (var i = 0; i < 40; i++) {
                //     console.log(i);
                // }

                // Arrays:

                // var data = ['a', 'b', 'c', 'd'];

                // for (i = 0; i < data.length; i++) {
                //     console.log(data.length);
                // }

                // var data = ['a', 'b', 'c', 'd'];
                // var i = 0;

                // do {
                //     console.log(data[i]);
                //     i++;


                // } while (i < data.length);

                // var button = document.getElementById('btn');
                // button, addEventListener('click', function() {
                //     var names = ['Abuzar', 'Badar', 'Atif', 'Taha'];

                //     for (i = 0; i < names.length; i++) {
                //         document.write(names[i]);
                //     }
                // })


                // var input = document.getElementById('input');
                // var output = document.getElementById('output');
                // var button = document.getElementById('btn');

                // button.addEventListener('click', function() {
                //     output.innerText = input.value;
                // })

                // _________________________________________________________________________

                // var button = document.getElementById('btn')
                // var output = document.getElementById('output');

                // button.addEventListener('click', function() {
                //     var element = document.createElement('li');
                //     element.innerText = ('khan');
                //     output.appendChild(element);
                // })
                // _______________________________________________________________________

                var button = document.getElementById('btn');
                var input = document.getElementById('input');
                var output = document.querySelector('#output');

                button.addEventListener('click', function() {
                    var element = document.createElement('li');
                    if (input.value == null || input.value == ('')) {
                        return null;

                    } else {
                        element.innerText = input.value;
                        output.appendChild(element);
                    }
                });