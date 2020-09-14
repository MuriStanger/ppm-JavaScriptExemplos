window.alert('Bem vindo a calculadora JS.')

var opcao = parseInt(window.prompt('Calculadora! \n Digite a operação: \n1 - SOMA \n2 - SUBTRAÇÃO \n3 - MULTIPLICACAO \n4 - DIVISAO \n5 - POTÊNCIA  '))

var numero1 = parseFloat(window.prompt('Digite o primeiro número: '));
var numero2 = parseFloat(window.prompt('Digite o segundo número: '));
var resultado;

switch (opcao) {
    case 1:
        resultado = numero1 + numero2;
        window.alert('Resultado: ' + resultado);
        break;
    case 2:
        resultado = numero1 - numero2;
        window.alert('Resultado: ' + resultado);
        break;
    case 3:
        resultado = numero1 * numero2;
        window.alert('Resultado: ' + resultado);
        break;
    case 4:
        resultado = numero1 / numero2;
        window.alert('Resultado: ' + resultado);
        break;
    case 5:
        resultado = Math.pow(numero1, numero2);
        window.alert('Resultado: ' + resultado);
        break;
    default:
        window.alert('Opcao Inválida');
}