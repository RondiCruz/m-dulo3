// while(true){} Trava maquina
// alert("Olá mundo");
console.log('mensagem bonita');

document.getElementById('titulo').innerHTML = "UNIVILLE";

let resposta = confirm("Voce mora em Joinville?");
alert("sua resposta foi " + resposta);

let outraresposta = prompt("Digite seu nome?");
alert("seu nome e " + outraresposta);


document.write("testando...");

const style = document.createElement('style');
style.textContent = 'body { background-color : green; }';
document.head.append(style);