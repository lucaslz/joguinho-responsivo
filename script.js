let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')
let EsquerdaQuadrado = 0

function pular() {
    if (personagem.classList != 'animar') {
        personagem.classList.add('animar')
    }

    setTimeout(function () {
       personagem.classList.remove('animar') 
    });
}

var testarColisao = setInterval(function () {
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    );

    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('left')
    );

    if (EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130) {
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Você perdeu!')
    }
}, 10);