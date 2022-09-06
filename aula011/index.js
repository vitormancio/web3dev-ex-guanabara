const button1 = document.querySelector('.button-1')
const resultado = document.querySelector('.resultado')

button1.addEventListener('click', () => {
    resultado.innerHTML = ''
    const nome = prompt('Digite seu nome:')
    const nota1 = Number(prompt('Primeira nota:'))
    const nota2 = Number(prompt('Segunda nota:'))

    const media = (nota1 + nota2) / 2

    resultado.innerHTML += `Média final de ${nome}<br>`
    resultado.innerHTML += `As notas obtidas foram ${nota1} e ${nota2}<br>`
    resultado.innerHTML += `A média final foi ${(nota1 + nota2) / 2}<br>`

    const paragrafo = document.createElement('p')
    resultado.appendChild(paragrafo)

    if (media > 5) {
        paragrafo.classList.add('green')
        paragrafo.innerHTML += `Parabéns pela nota<br>`
    }

    else {
        paragrafo.classList.add('red')
        paragrafo.innerHTML += `Estude um pouco mais<br>`
    }

})








