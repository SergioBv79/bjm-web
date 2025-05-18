// Archivo: js/header.js

// Inserta este header en todas las páginas llamando a este script en el HTML
// Asegúrate de que el elemento <header id="header"></header> esté en el HTML principal

document.getElementById("header").innerHTML = `
  <div class="contenedor-header">
    <div class="logo">
      <!-- 📌 Logo principal de la web -->
      <!-- Guarda tu logo como img/logo.png -->
      <!-- LOGO DINÁMICO SEGÚN RUTA -->
<a href="${location.pathname.includes('blog') || location.pathname.includes('trabajos') || location.pathname.includes('servicios') || location.pathname.includes('candidatos') ? '../index.html' : 'index.html'}">
  <img src="${location.pathname.includes('blog') || location.pathname.includes('trabajos') || location.pathname.includes('servicios') || location.pathname.includes('candidatos') ? '../img/logo.png' : 'img/logo.png'}" alt="Logo BJM" />
</a>

    </div>
    <nav class="menu-principal">
      <ul>
  <li><a href="index.html"><i class="fa-solid fa-house"></i> Inicio</a></li>
  <li><a href="quienes-somos.html"><i class="fa-solid fa-users"></i> Quiénes somos</a></li>
  <li><a href="servicios/index.html"><i class="fa-solid fa-gears"></i> Servicios</a></li>
  <li><a href="trabajos/index.html"><i class="fa-solid fa-screwdriver-wrench"></i> Casos de éxito</a></li>
  <li><a href="trabaja.html"><i class="fa-solid fa-user-plus"></i> Trabaja con nosotros</a></li>
  <li><a href="contacto.html"><i class="fa-solid fa-envelope"></i> Contacto</a></li>
</ul>

    </nav>
    <div class="redes-header">
      <!-- Iconos enlazables a redes sociales; # es un marcador de posición que debes reemplazar por el enlace real de cada red. -->
      <a href="#" aria-label="Instagram" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      <a href="#" aria-label="Facebook" target="_blank"><i class="fa-brands fa-facebook"></i></a>
      <a href="#" aria-label="TikTok" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
      <a href="#" aria-label="LinkedIn" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      <a href="#" aria-label="YouTube" target="_blank"><i class="fa-brands fa-youtube"></i></a>
    </div>
  </div>
`;
 
