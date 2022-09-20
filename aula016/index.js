const button1 = document.querySelector('.button-1')
const resultado = document.querySelector('.resultado')

button1.addEventListener('click', () => {

    const anoNascimento = Number(prompt('Qual o seu ano de nascimento ?'))

    const date = new Date()
    const year = date.getFullYear()

    resultado.innerHTML = `Quem nasceu em ${anoNascimento} vai fazer ${year - anoNascimento} em ${year}`

})




