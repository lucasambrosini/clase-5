//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


document.querySelector('#ingresar').onclick = function(e){
    e.preventDefault
    const horas = document.querySelectorAll(".hora-clase")
    const minutos = document.querySelectorAll(".minutos-clase")
    const segundos =  document.querySelectorAll(".segundos-clase")

    const $resultado = document.querySelector("#resultado")

    let segundosTotales = 0

    for (i = 0 ; i < horas.length ; i++) {

       segundosTotales += Number(horas[i].value) * 3600 + Number(minutos[i].value) * 60 + Number(segundos[i].value)
    }

    let horasFinal = Math.floor(segundosTotales/3600)
    let minutosFinal = Math.floor( (segundosTotales % 3600) / 60)
    let segundosFinal = segundosTotales - horasFinal*3600 - minutosFinal*60

$resultado.innerText = `El curso dura ${horasFinal} : ${minutosFinal} : ${segundosFinal}  `


}