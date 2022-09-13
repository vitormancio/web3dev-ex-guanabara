const button1 = document.querySelector('.button-1')
const resultado = document.querySelector('.resultado')

button1.addEventListener('click', () => {
    const numero = Number(prompt('Digite um numero:'))

    resultado.innerHTML = isOdd(numero) ? `${numero} é Par` : `${numero} é Ímpar`

})

function isOdd (numero) {
    if(numero %2 === 0) {
        return true
        
    }
    return false
}





