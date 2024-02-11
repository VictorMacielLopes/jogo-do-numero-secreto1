function textoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.7});
}

textoNaTela('h1', 'Bem vindos ao jogo do numero secreto');
textoNaTela('p', 'Escolha um numero entre 1 e 10');