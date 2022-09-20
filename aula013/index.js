const button1 = document.querySelector('.button-1')
const resultado = document.querySelector('.resultado')

button1.addEventListener('click', () => {
    const num1 = Number(prompt('Digite um valor:'))
    const num2 = Number(prompt('Digite outro valor:'))

    resultado.innerHTML = numeroMaior(num1,num2) ? `O ${num1} é maior que o ${num2}` : `O ${num2} é maior que o ${num1}`
})

function numeroMaior(num1,num2) {
    if(num1 > num2) {
       return true
     }
     else {
        return false
     }
     
}




