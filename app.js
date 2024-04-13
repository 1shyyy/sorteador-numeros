let numerosSorteados = [];

function sortear(){
    let quantidadeNumeros = document.getElementById('quantidade').value;
    let deNumero = document.getElementById('de').value;
    let ateNumero = document.getElementById('ate').value;

    for(let i = 0; quantidadeNumeros > i; i++){
        numerosSorteados [i] = gerarNumero(deNumero, ateNumero); 
    }
    exibirTexto('resultado', 'label', `Números sorteados: ${numerosSorteados}`);
    alterarStatusBotao('btn-reiniciar', 'btn-sortear');
}

function gerarNumero(deNumero, ateNumero){
    let numeroEscolhido = parseInt (Math.random() * ateNumero + 1);
    if(numeroEscolhido < deNumero || numerosSorteados.includes(numeroEscolhido)){
        return gerarNumero(deNumero, ateNumero);
    }else{
        return numeroEscolhido;
    }
}

function exibirTexto (id, query, texto){
    let campo = document.getElementById(id).querySelector(query);
    campo.innerHTML = texto;
}

function alterarStatusBotao(idAtivar, idDesativar){
    let botaoAtivar = document.getElementById(idAtivar);
    let botaoDesativar = document.getElementById(idDesativar);
    if(botaoAtivar.classList.contains('container__botao-desabilitado')){
        botaoAtivar.classList.remove('container__botao-desabilitado');
        botaoAtivar.classList.add('container__botao');
        botaoDesativar.classList.remove('container__botao');
        botaoDesativar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    exibirTexto('resultado', 'label', `Números sorteados:  nenhum até agora`);
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    alterarStatusBotao('btn-sortear', 'btn-reiniciar');
}
