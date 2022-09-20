const button1 = document.querySelector('.button-1')
const resultado = document.querySelector('.resultado')

button1.addEventListener('click', () => {

    const date = new Date()

    const diaSemana = date.getDay()
    const mes = date.getMonth()

    let diaSemanaTexto

    switch(diaSemana) {
        case 0 :
         diaSemanaTexto = "Domingo"
        break
        case  1:
         diaSemanaTexto = "Segunda"
        break
        case 2 :
         diaSemanaTexto = "Terça"
        break
        case 0 :
         diaSemanaTexto = "Quarta"
        break
        case 0 :
         diaSemanaTexto = "Quinta"
        break
        case 0 :
         diaSemanaTexto = "Sexta"
        break
        case 0 :
         diaSemanaTexto = "Sábado"
        break
    }

    resultado.innerHTML += `Dia:${date.getDate()}<br>`
    resultado.innerHTML += `Mes:${mes}<br>`
    resultado.innerHTML += `Dia da semana:${diaSemanaTexto}<br>`
    resultado.innerHTML += `Hora: ${date.getHours()}<br>`
    resultado.innerHTML += `Minutos : ${date.getMinutes()}<br>`
    resultado.innerHTML += `Segundos ${date.getSeconds()}<br>`
    resultado.innerHTML += `Ano: ${date.getFullYear()}<br>`
})




