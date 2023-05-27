const contador = document.getElementById("contador")
const res = document.getElementById("res")
var number = 0
res.innerHTML = `Total de vezes clicado : ${number}`

contador.addEventListener("click", clicar)
contador.addEventListener("keyup", clicar)

function clicar() {
    number = number + 1
    res.innerHTML = `Total de vezes clicado : ${number}`

    const resety = document.getElementById("reset")

    resety.addEventListener("click", reset)
    
    function reset() {
        number = 0
        res.innerHTML = `Total de vezes clicado : ${number}`
    }
}

/* RELOGIO */

const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

const dias1 = document.getElementById('dias');
const diaSemana = setInterval(function day() {
    let diaTotal = new Date();
    let dias = diaTotal.getDay();

    switch (dias) {
        case 0:
            dias1.textContent =  ("Domingo")
        break;
        case 1:
            dias1.textContent =  ("Segunda-feira")
        break;
        case 2:
            dias1.textContent =  ("Terça-feira")
        break;
        case 3:
            dias1.textContent =  ("Quarta-feira")
        break;
        case 4:
            dias1.textContent =  ("Quinta-feira")
        break;
        case 5:
            dias1.textContent =  ("Sexta-feira")
        break;
        case 6:
            dias1.textContent =  ("Sábado")
        break;

    default:
        dias1.textContent =  ("Codigo Quebrado")
    }
})