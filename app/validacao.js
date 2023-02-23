function validaValorChute() {
    const numero = +chute;

    if(numeroForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Este não é um número</div>';
        return
    }

    if(limiteMáximoOuMinimoExcedido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: O chute precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!!!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>
        `
    };

};

function numeroForInvalido(numero) {
    return Number.isNaN(numero);
};

function limiteMáximoOuMinimoExcedido(numero) {
    return numero > maiorValor || numero < menorValor;
};

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
});

