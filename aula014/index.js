const button1 = document.querySelector('.button-1')
const resultado = document.querySelector('.resultado')

const date = new Date()
const seconds = date.getMinutes()

button1.addEventListener('click', () => {
    resultado.innerHTML += `O que eu recebi do sistema foi ${seconds}`
})





