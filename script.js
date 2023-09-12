function calculadora() {
    const operacao = prompt("Escolha uma operaçao matemática:\n1 - soma\n2 - subtração\n3 - multiplicação\n4 - divisão\n5 - raiz quadrada\n potenciação");
    


    switch (operador) {
        case 1:
            resultado = num1 + num2;
            break;
        case 2:
            resultado = num1 - num2;
            break;
        case 3:
            resultado = num1 * num2;
            break;
        case 4:
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Divisão por zero não é permitida.";
                calculadora();
            }
            break;
        case 5:
            resultado = num1 * num2;
            break;
        case 6:
            resultado = num1 * num2;
            break;

        default:
            alert("Operador inválido, tente novamente");
    }

    console.log(`Resultado: ${resultado}`);

}

calculadora();