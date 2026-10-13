const botonesVerMas = document.querySelectorAll('.btn-ver-mas');
console.log("¡JavaScript conectado a la página!")
botonesVerMas.forEach(function(boton) {
  boton.addEventListener('click', function() {
    const idObjetivo = boton.getAttribute('data-target');
    const parrafo = document.getElementById(idObjetivo);

    if (parrafo) {
      parrafo.classList.toggle('oculto');

      if (parrafo.classList.contains('oculto')) {
        boton.textContent = '[ ver mas ]';
      } else {
        boton.textContent = '[ ver menos ]';
      }
    }
  });
});
const boton=document.getElementById("volverArriba")
window.addEventListener("scroll",function(){
  if(window.scrollY>300){
    boton.style.display="block";
  } else {
    boton.style.display="none";
  }
});
boton.addEventListener("click",function(){
window.scrollTo({
  top:0,
  behavior:"smooth"
})
})

const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const indicatorsContainer = document.getElementById('indicators');

if (carousel && items.length > 0) {
  let index = 0;

  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = '';
    items.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('indicator');
      if (i === 0) dot.classList.add('activo');
      dot.addEventListener('click', () => moverA(i));
      indicatorsContainer.appendChild(dot);
    });
  }

  function actualizarCarrusel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    const dots = document.querySelectorAll('.indicator');
    dots.forEach((dot, i) => {
      dot.classList.toggle('activo', i === index);
    });
  }

  function moverA(nuevoIndex) {
    index = nuevoIndex;
    actualizarCarrusel();
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      index = (index + 1) % items.length;
      actualizarCarrusel();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      index = (index - 1 + items.length) % items.length;
      actualizarCarrusel();
    });
  }
}
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  const resultado = document.getElementById("Resultado");

  if (nombre.length < 3) {
    resultado.textContent = "El nombre debe tener al menos 3 caracteres.";
  } else if (!email.includes("@") || !email.includes(".")) {
    resultado.textContent = "Por favor, ingresá un e-mail válido (ejemplo@gmail.com).";
  } else if (mensaje.trim() === "") {
    resultado.textContent = "El mensaje no puede estar vacío.";
  } else {
    resultado.textContent = "¡Formulario enviado correctamente!";
    formulario.reset(); 
  }
});