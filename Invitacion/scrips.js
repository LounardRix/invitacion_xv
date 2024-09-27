const contador = document.getElementById('contador');
const diasElement = document.getElementById('dias');
const horasElement = document.getElementById('horas');
const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');

const fechaFiesta = new Date('2024-11-02T00:00:00');
const ahora = new Date();

function actualizarContador() {
  const diferencia = fechaFiesta - ahora;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  diasElement.textContent = dias.toString().padStart(2, '0');
  horasElement.textContent = horas.toString().padStart(2, '0');
  minutosElement.textContent = minutos.toString().padStart(2, '0');
  segundosElement.textContent = segundos.toString().padStart(2, '0');
}

let contadorInterval;

window.onload = function() {
  contadorInterval = setInterval(actualizarContador, 1000); // Llamar a actualizarContador cada 1 segundo
};

function actualizarContador() {
  // Código para actualizar el contador aquí
  const ahora = new Date();
  const fechaFiesta = new Date('2024-11-02T00:00:00');
  const diferencia = fechaFiesta - ahora;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);

const sections = document.querySelectorAll('.animate');

window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= sectionTop - viewportHeight / 2 && scrollPosition < sectionTop + sectionHeight) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
});
