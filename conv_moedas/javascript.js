function calc() {
    var moeda = parseFloat(document.getElementById("moedaInicial").value)
    var valor = document.getElementById("valor").value
    var tipo = parseFloat(document.getElementById("select").value)
    let result = document.getElementById("result")
    if (valor === '') {
        result.innerHTML = '<p id="result" style="color: red;">SELECIONE O VALOR DA MOEDA</p>'
    }
    else {
        var valor = parseFloat(document.getElementById("valor").value)
        if (moeda == 0) {
            if (tipo == 0) {
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else if (tipo == 1) {
                valor = valor*0.95
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '€' + valor 
            }
            else if (tipo == 2) {
                valor = valor*1.300
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '₩' + valor
            }
            else if (tipo == 3) {
                valor = valor*17.50
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else if (tipo == 4) {
                valor = valor*1.55
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else {
                result.innerHTML = '<p id="result" style="color: red;">SELECIONE UMA MOEDA!</p>'
            }
        }
        else if (moeda == 1) {
            if (tipo == 0) {
                valor = valor*1.05
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else if (tipo == 1) {
                result.innerHTML = 'O resultado é: ' + '€' + valor 
            }
            else if (tipo == 2) {
                valor = valor*1.368
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '₩' + valor
            }
            else if (tipo == 3) {
                valor = valor*18.42
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else if (tipo == 4) {
                valor = valor*1.63
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else {
                result.innerHTML = '<p id="result" style="color: red;">SELECIONE UMA MOEDA!</p>'
            }
        }
        else if (moeda == 2) {
            if (tipo == 0) {
                valor = valor*0.000769
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else if (tipo == 1) {
                valor = valor*0.000731
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '€' + valor 
            }
            else if (tipo == 2) {
                result.innerHTML = 'O resultado é: ' + '₩' + valor
            }
            else if (tipo == 3) {
                valor = valor*0.013
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else if (tipo == 4) {
                valor = valor*0.00119
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else {
                result.innerHTML = '<p id="result" style="color: red;">SELECIONE UMA MOEDA!</p>'
            }
        }
        else if (moeda == 3) {
            if (tipo == 0) {
                valor = valor*0.0571
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else if (tipo == 1) {
                valor = valor*0.0543
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '€' + valor 
            }
            else if (tipo == 2) {
                valor = valor*76.92
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '₩' + valor
            }
            else if (tipo == 3) {
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else if (tipo == 4) {
                valor = valor*0.088
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else {
                result.innerHTML = '<p id="result" style="color: red;">SELECIONE UMA MOEDA!</p>'
            }
        }
        else if (moeda == 4) {
            if (tipo == 0) {
                valor = valor*0.645
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else if (tipo == 1) {
                valor = valor*0.613
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '€' + valor 
            }
            else if (tipo == 2) {
                valor = valor*840.34
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '₩' + valor
            }
            else if (tipo == 3) {
                valor = valor*11.36
                valor = valor.toFixed(2)
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else if (tipo == 4) {
                result.innerHTML = 'O resultado é: ' + '$' + valor
            }
            else {
                result.innerHTML = '<p id="result" style="color: red;">SELECIONE UMA MOEDA!</p>'
            }
        }
        else {
            result.innerHTML = '<p id="result" style="color: red;">SELECIONE UMA MOEDA INICIAL!</p>'
        }
    }
}