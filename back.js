const sigma = document.getElementById('Backend');

const button2 = document.createElement('button');
button2.id = 'sigma';
button2.textContent = 'trybutton';
sigma.append(button2);

const button3 = document.createElement('button');
button3.id = 'beta';
button3.textContent = 'betabutton';
sigma.append(button3);

button2.addEventListener('click',onbutton2click);
button3.addEventListener('click',onbutton3click);

function onbutton2click(){
        button2.remove();
        button3.append(sigma);}
        
function onbutton3click(){
        button3.remove();
        button2.append(sigma);}
