const buttonConvert = document.querySelector('.button-convert')
const selectMoedaEscolhida = document.querySelector('.escolher-moeda')
const selectMoedaConvertida = document.querySelector('.Moeda-convertida')

async function valoresConvertidos() {
    const inputValue = document.querySelector('.Valores-convertido').value
    const valorASerConvertido = document.querySelector('.valor-a-ser-convertido')
    const valorConvertido = document.querySelector('.valor-convertido')

    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(resposta => resposta.json())

    console.log(selectMoedaConvertida.value)

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high


    valorASerConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValue)

    if (selectMoedaConvertida.value == 'Dolar') {
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue / dolar)

    }
    if (selectMoedaConvertida.value == 'Euro') {
        valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValue / euro)

    }

    console.log(valoresConvertidos)
}
function valoresTrocados() {
    const nomeDasMoedas = document.querySelector('.Nome-Das-Moedas')
    const imgMoedas = document.querySelector('.bandeira-das-moedas')
    if (selectMoedaConvertida.value == 'Dolar') {
        nomeDasMoedas.innerHTML = 'Dolar Americano'
        imgMoedas.src = './assets/estados-unidos (1) 1 (1).png'
    }
    if (selectMoedaConvertida.value == 'Euro') {
        nomeDasMoedas.innerHTML = '€ Euro'
        imgMoedas.src = './assets/Design sem nome 3.png'
    }

    valoresConvertidos()
}
buttonConvert.addEventListener('click', valoresConvertidos)
selectMoedaConvertida.addEventListener('change', valoresTrocados)