// pegar as divs do html
const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finallyDiv = document.querySelector('.finally-step');
// alternando a visualização das divs
function go(currentStep, nextStep) {
    let displayNone, displayBlock;
    // verifica se o primeiro parametro é 1 ou 2.
    if (currentStep == 1) {
        displayNone = firstDiv;
    } else if (currentStep == 2) {
        displayNone = secondDiv;
    } else {
        displayNone = finallyDiv;
    }
    displayNone.style.display = 'none';

    //  verifica se o segundo parametro é 1 ou 2.
    if (nextStep == 1) {
        displayBlock = firstDiv;
    } else if (nextStep == 2) {
        displayBlock = secondDiv;
    } else {
        displayBlock = finallyDiv;
    }
    displayBlock.style.display = 'block';
}
// validacao dos campos input
function validate() {
    // pegando os elementos do html
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    peso.style.border = "none";
    altura.style.border = "none";
    const valorPeso = peso.value;
    const valorAltura = altura.value;

    //validando 
    if (!valorPeso || !valorAltura) {
        if (!valorPeso && !valorAltura) {
            peso.style.border = "2px solid red";
            altura.style.border = "2px solid red";
        } else if (!peso.value) {
            peso.style.border = "2px solid red";
        } else {
            altura.style.border = "2px solid red";
        }
    } else {
        let imc = valorPeso / (valorAltura * valorAltura);
        CalculoIMC(imc);
        go(2, 3);

    }

}
function CalculoIMC(imc) {
    const result = document.getElementById('resultado');
    if (imc <= 18.5) {
        result.style.color = "yellow";
        result.innerHTML = 'magreza | obesidade(grau): 0';
    } else if (imc <= 24.9) {
        result.style.color = "green";
        result.innerHTML = 'normal | obesidade(grau): 0';
    } else if (imc <= 29.9) {
        result.style.color = "yellow";
        result.innerHTML = 'sobrepeso | obesidade(grau): I';
    } else if (imc <= 39.9) {
        result.style.color = "orange";
        result.innerHTML = 'obesidade | obesidade(grau): II';
    } else {
        result.style.color = "red";
        result.innerHTML = 'obesidade grave | obesidade(grau): III';
    }

}
function retornar() {
    peso.value = '';
    altura.value = '';
    go(3, 2);
}
function finalizar() {
    peso.value = '';
    altura.value = '';
    go(3, 1);
}
function voltar() {
    peso.style.border = "none";
    altura.style.border = "none";
    peso.value = '';
    altura.value = '';
    go(2, 1);
}
