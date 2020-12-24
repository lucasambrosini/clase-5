//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const listaNumeros = document.querySelectorAll("li")
const $promedioEs = document.querySelector("#promedio")

let sumaLista = 0;

for (i=0 ; i < listaNumeros.length ; i++) {

    sumaLista += Number(listaNumeros[i].innerText)

}

let promedio = sumaLista / listaNumeros.length

$promedioEs.innerText = `El promedio es ${promedio}`




const $masPequeñoEs = document.querySelector("#numero-mas-pequeño")

masPequeño = Number(listaNumeros[0].innerText)

for (i = 1 ; i < listaNumeros.length ; i++) {
if (masPequeño > Number(listaNumeros[i].innerText)){
    
    masPequeño = Number(listaNumeros[i].innerText)
}

}

$masPequeñoEs.innerText = `El mas pequeño es ${masPequeño}`

const $masGrandeEs = document.querySelector("#numero-mas-grande")

let masGrande = Number(listaNumeros[0].innerText)

for (i = 1 ; i < listaNumeros.length ; i++) {
if (masGrande < Number(listaNumeros[i].innerText)){
    masGrande = Number(listaNumeros[i].innerText)
}

}

$masGrandeEs.innerText = `El mas grande es ${masGrande}`


const $masFrecuenteEs = document.querySelector("#numero-mas-frecuente")

let numeroMasFrecuente;

let contador = 0;

let repeticionesActuales = 1;

for(let i=0; i<listaNumeros.length; i++){
    for(let j=0; j<listaNumeros.length; j++){
        if(Number(listaNumeros[i].innerText) === Number(listaNumeros[j].innerText)){
            contador++;
        }
        if(repeticionesActuales < contador){
            repeticionesActuales= contador;
            numeroMasFrecuente = Number(listaNumeros[i].innerText);
        }
    }
    contador = 0;
    
}


$masFrecuenteEs.innerText = `El mas frecuente es ${numeroMasFrecuente}`



