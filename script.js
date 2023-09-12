function calculadora() {
    const operacao = Number(prompt("Escolha uma operaçao matemática:\n1 - soma\n2 - subtração\n3 - multiplicação\n4 - divisão\n5 - potenciação\n0 - para sair"));

    if (operacao == 0) {
        num1 = null;
        num1 = null;
    } else if (!operacao || operacao >= 7) {
        alert("operação invalida")
    } else {

        let num1 = Number(prompt("Insira o PRIMEIRO valor: "));
        let num2 = Number(prompt("Insira o SEGUNDO valor: "));
        let resultado;
        if (!num1 || !num2) {
            alert("Entrada inválida!")
            calculadora();
        }
        function soma() {
            resultado = num1 + num2;
            alert(`${num1} + ${num2} = ${resultado}`)
        }
        function subtracao() {
            resultado = num1 - num2;
            alert(`${num1} - ${num2} = ${resultado}`)
        }
        function multiplicacao() {
            resultado = num1 * num2;
            alert(`${num1} x ${num2} = ${resultado}`)
        }
        function divisao() {
            resultado = num1 / num2;
            alert(`${num1} / ${num2} = ${resultado}`)
        }
        function potencia() {
            resultado = num1 ** num2;
            alert(`${num1} elevado ${num2} é = ${resultado}`)
        }

        switch (operacao) {
            case 1:
                soma();
                calculadora();
                break;
            case 2:
                subtracao();
                calculadora();
                break;
            case 3:
                multiplicacao();
                calculadora();
                break;
            case 4:
                divisao();
                calculadora();
                break;
            case 5:
                potencia();
                calculadora();
                break;
            case 0:
                break;
            default:
                break;
        }
    }
}
calculadora();