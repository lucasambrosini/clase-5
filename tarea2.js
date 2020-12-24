
//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

document.querySelector('#ingresar').onclick = function(e){
    e.preventDefault
const nombre = document.querySelector("#nombre-usuario").value
const segundonombre = document.querySelector("#segundonombre-usuario").value
const apellido = document.querySelector("#apellido-usuario").value
const edad = document.querySelector("#edad-usuario").value 
const $bienvenida = document.querySelector("#bienvenida")
const $informacioncompleta = document.querySelector("#informacion-completa")
const informacionResultante = `${nombre} ${segundonombre} ${apellido} tiene ${edad} años `
const saludo = `Bienvenido ${nombre} ${segundonombre} ${apellido}!`

$bienvenida.innerText = saludo;
$informacioncompleta.innerText = informacionResultante;
}









