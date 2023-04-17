worker1= new Worker('worker1.js');
worker2= new Worker('worker2.js');

function calcularQuadrado(){
    worker1.postMessage(document.getElementById('inputNumber1').value);
}
worker1.addEventListener('message', function(event){
    const quadrado = event.data;
    document.getElementById('resultado1').textContent='O quadrado do numero digitado é: '+ quadrado
})


function calcularFactorial(){
    worker2.postMessage(document.getElementById('inputNumber2').value);
}
worker2.addEventListener('message', function(event){
    const factorial=event.data;
    document.getElementById('resultado2').textContent='O factorial do numero digitado é: '+factorial
})