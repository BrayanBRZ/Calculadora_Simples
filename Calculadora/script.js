// Função para calcular o resultado
function calcularOperação() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado = document.getElementById("resultado");
    
    if (operacao == "0") {
        resultado.value = "Escolha uma operação";
    } else if (operacao == "1") {
        resultado.value = valor1 + valor2;
    } else if (operacao == "2") {
        resultado.value = valor1 - valor2;
    } else if (operacao == "3") {
        resultado.value = valor1 * valor2;
    } else if (operacao == "4") {
        if (valor2 != 0) {
            resultado.value = valor1 / valor2;
        } else {
            resultado.value = "Erro: divisão por zero";
        }
    }
}

function calcularTabuada() {
    var valor3 = parseFloat(document.getElementById("valor3").value);
    var guardarMultS
    var resultadoTabuada = ""

    for (i = 1; i <= 10; i++) {
        guardarMult = valor3 * i;
        resultadoTabuada += valor3 + " x " + i + " = " + guardarMult + "\n";
    }
    document.getElementById("resultText").value = resultadoTabuada;
}

// Event listener para o botão "Calcular"
var calcularButton = document.querySelector("button.display");
calcularButton.addEventListener("click", calcular);
