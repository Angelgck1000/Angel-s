const header = document.querySelector(".header");
const totalImages = 3; // Número total de imágenes en el carrusel
let currentImage = 1;
const intervalTime = 3000; // Tiempo en milisegundos para el cambio automático (3 segundos)

// Función para mostrar la imagen y el texto correspondiente
function showSlide() {
  // Cambia la imagen de fondo
  header.setAttribute("data-image", currentImage);

  // Cambia el texto correspondiente
  document.querySelectorAll(".carousel-text p").forEach((p) => {
    p.classList.remove("active");
  });
  document
    .querySelector(`.carousel-text p[data-text="${currentImage}"]`)
    .classList.add("active");
}

// Función para avanzar a la siguiente imagen
function nextSlide() {
  currentImage = currentImage === totalImages ? 1 : currentImage + 1;
  showSlide();
}

// Función para retroceder a la imagen anterior
function prevSlide() {
  currentImage = currentImage === 1 ? totalImages : currentImage - 1;
  showSlide();
}

// Eventos para los botones de navegación
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

// Cambio automático de imagen y texto
setInterval(nextSlide, intervalTime);

// Inicializa la primera imagen y texto
showSlide();

// OTRO
