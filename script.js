var texto='';
var textoCodificado = '';
var botaoCodificar = document.getElementById('botao-codificar');
var botaoDecodificar = document.getElementById('botao-decodificar');
var botaoCopiar = document.getElementById('botao-copiar');
var labelResultado = document.getElementById('resultado');
var containerSemTexto=document.getElementById('container-sem-texto');
var textarea = document.getElementsByClassName('EntradaTexto')[0];

// Substituições de letras
var substituicoes = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};
var retorno ={
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

textarea.addEventListener('click', function() {
    if (this.value === 'Digite seu texto') {
        this.value = '';
    }
});

botaoCodificar.addEventListener('click', function(){
    texto = textarea.value;
    console.log(texto);
    console.log(codificarTexto(texto));
    containerSemTexto.style.display = 'none';
    botaoCopiar.style.display = 'block';
    labelResultado.value = codificarTexto(texto);
    labelResultado.style.display = 'block';
});
botaoDecodificar.addEventListener('click', function(){
    texto = textarea.value;
    console.log(texto);
    console.log(decodificarTexto(texto));
    containerSemTexto.style.display = 'none';
    botaoCopiar.style.display = 'block';
    labelResultado.value = decodificarTexto(texto)
    labelResultado.style.display = 'block';
});

function codificarTexto(texto){
    var textoCodificado = '';
    for(var i = 0; i < texto.length; i++){
        var letra = texto[i];
        if(substituicoes[letra]){
            textoCodificado += substituicoes[letra];
        } else {
            textoCodificado += letra;
        }
    }
    return textoCodificado;
}

function decodificarTexto(texto) {
    var textoDecodificado = texto;
    for (var codigo in retorno) {
        var regex = new RegExp(codigo, 'g');
        textoDecodificado = textoDecodificado.replace(regex, retorno[codigo]);
    }
    return textoDecodificado;
}

botaoCopiar.addEventListener('click', function() {
    labelResultado.select(); // Seleciona o texto no textarea
    document.execCommand('copy'); // Copia o texto selecionado para a área de transferência
});


