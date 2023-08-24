
console.log('Hola mundo!');


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

document.addEventListener("DOMContentLoaded", () => {
  const scrollToBottomButtom = document.getElementById('btn-ir-arriba');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottomButtom.style.display = 'block';
    } else {
      scrollToBottomButtom.style.display = 'none';
    }
  })

  scrollToBottomButtom.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
})
