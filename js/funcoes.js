function minhaFuncao2(pParametro) {
    console.log("Parametro é "+pParametro)
}

function minhaFuncao3(pParametro){
    return pParametro*2;
}

function minhaFuncao4(){
    x+=10;
    var vInterna2 = "Blumenau"
}

function minhaFuncao5(){
    var x = 100;
    var vInterna = "Brasil"
}

function escreveMensagem(mensagem){
    var div = document.getElementById('mensagem');
    div.innerHTML = mensagem;
}

function alteraMensagem(){
    var vInput = document.getElementById('textoMensagem');
    var vMensagem = document.getElementById('mensagem');
    vMensagem.innerHTML = vInput.value;
}