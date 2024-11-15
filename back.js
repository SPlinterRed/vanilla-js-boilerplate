const sigma = document.getElementById('Backend');

const button2 = document.createElement('button');
button2.id = 'sigma';
button2.textContent = 'trybutton';
sigma.append(button2);

const button3 = document.createElement('button');
button3.id = 'beta';
button3.textContent = 'betabutton';
sigma.append(button3);
for( i = 0; i < 5; i ++){
    print("what the hell");
    if(i == 4){
        i = 0;
        button2.remove();
        button2.append(sigma);
        button3.remove();
        button2.append(sigma)
    }
}