function click_botao(valor){
 let txttela =  document.getElementById("txttela"); 
 txttela.value += valor;
}

function click_igual(){
    let txttela =  document.getElementById("txttela");
    let resultado = eval(txttela.value);
    txttela.value = resultado;
}

//function apagar(){
//    let tela = document.getElementById("tela");
//    tela.value = tela.value.slice(0, -1);
//}