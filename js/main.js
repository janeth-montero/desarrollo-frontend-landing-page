//
// Impresion en consola simple
//

console.log('Hola mundo!');

//
// Funcion tradional
//

function mostrarMensajeInicial() {

  if (confirm('Este sitio esta en desarrollo, disculpe las molestias')) {
    alert('Gracias por visitarnos!');
  } else {
    alert('...');
  }

}

//
// FUNCTION DECLARATION: forma tracional de definir funciones con palabra clave function
//
// function funcionNoAnonima() {
//   return 1 + 1;
// }


//
// ARROW FUNCTION: sintaxis más concisa para definir funciones,
//    especialmente útiles cuando se trata de funciones pequeñas y anónimas
//
// () => 1 + 1;

//
// Evento de boton ir a arriba
//

document.addEventListener("DOMContentLoaded", () => {

  const scrollToBottomButtom = document.getElementById('btn-ir-arriba');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottomButtom.style.display = 'block';
    } else {
      scrollToBottomButtom.style.display = 'none';
    }
  });

  scrollToBottomButtom.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth'
    });
  });

});

//
// Galeria de imagenes
//

const galeriaImagenes = document.querySelectorAll('.galeria-img');
const overlay = document.querySelector('.galeria-overlay');
const overlayImagen = document.querySelector('.galeria-overlay-img');

galeriaImagenes.forEach(imagen => {

  imagen.addEventListener('click', () => {
    overlayImagen.src = imagen.src;
    overlay.style.display = 'flex';
  });

});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayImagen.src = '';
});

//
// Recuperar datos del formulario
//

const contactoForm = document.getElementById('contacto-form');

contactoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  alert('Gracias por contactarnos - Nombre: ' + nombre + '- Email: ' + email + '- Mensaje: ' + mensaje);

  contactoForm.reset();
});
