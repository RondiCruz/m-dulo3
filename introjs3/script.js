function infinity() {
    let i = 0;
    while(true){
        console.log(i++);
    }
}

function infinity2(){
    let i = 0;
//setInterval(function(){
//CALLBACK
//JS executa func daqui a 1 segundo
    setTimeout(function(){ // Define um tempo unico de execução
        console.log(i++);
        return i;
    }, 1000); // unidade de milisegundos
}

function date(){
    console.log(new Date());
    fazqqcoisa();
}

function fazqqcoisa(){
    console.log("qq coisa");
}
//infinity(); cuidado trava navegador
 let resultado = infinity2();
 console.log("Result " + resultado);
date();

