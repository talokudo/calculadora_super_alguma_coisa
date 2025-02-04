// const prompt = require('prompt-sync')();

const promptSync = require('prompt-sync');
const prompt = promptSync();

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        return "Erro: Divisão por zero";
    }
}

while (true) {
    let escolha = prompt("Escolha a operação: 1. Soma, 2. Subtração, 3. Multiplicação, 4. divisão, 5. Sair");

    if (escolha === "5") {
        break;
    }

    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));

    if (escolha === "1") {
        console.log("Resultado: ", soma(num1, num2));
    } else if (escolha === "2") {
        console.log("Resultado: ", subtracao(num1, num2));
    } else if (escolha === "3") {
        console.log("Resultado: ", multiplicacao(num1, num2));
    } else if (escolha === "4") {
        console.log("Resultado: ", divisao(num1, num2));
    } else {
        console.log("Escolha inválida");
    }
}