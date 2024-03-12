//alert("Hola este es mi Javascript");

//let nombre = "Giancarlo";

let contenidoTitulo = "Nombre";

let titulo = document.querySelector("#encabezado .fa-solid.fa-heart");
console.log(titulo);
titulo.innerHTML = contenidoTitulo;

//Condicionales
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre") {
    titulo.innerHTML = " Mi web";
} else {
    console.log("no se cumple");
}

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    form.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});