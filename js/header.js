document.addEventListener("DOMContentLoaded", function () {
  const base = location.pathname.includes("/blog/") || 
               location.pathname.includes("/trabajos/") || 
               location.pathname.includes("/servicios/") || 
               location.pathname.includes("/candidatos/") 
               ? "../" : "";

  const headerHTML = `
    <div class="banner-top">
      <a href="${base}index.html" class="logo-banner">
        <img src="${base}img/logo.png" alt="Logo BJM" />
      </a>
      <span class="lema-banner">
        <i class="fas fa-people-carry-box" aria-hidden="true"></i>
        Personas que cuidan lo que otras personas necesitan para seguir adelante.
      </span>
    </div>

    <div class="contenedor-header">
      <button id="menu-toggle" class="hamburguesa" aria-label="Abrir menú">
        <i class="fas fa-bars"></i>
      </button>

      <nav class="menu-principal">
        <ul>
          <li><a href="${base}index.html"><i class="fa-solid fa-house"></i> Inicio</a></li>
          <li><a href="${base}quienes-somos.html"><i class="fa-solid fa-users"></i> Quiénes somos</a></li>
          <li><a href="${base}servicios/index.html"><i class="fa-solid fa-gears"></i> Servicios</a></li>
          <li><a href="${base}trabajos/index.html"><i class="fa-solid fa-screwdriver-wrench"></i> Casos de éxito</a></li>
          <li><a href="${base}trabaja.html"><i class="fa-solid fa-user-plus"></i> Trabaja con nosotros</a></li>
          <li><a href="${base}contacto.html"><i class="fa-solid fa-envelope"></i> Contacto</a></li>
          <li><a href="${base}blog/index.html"><i class="fa-solid fa-blog"></i> Blog</a></li>
        </ul>
      </nav>

      <div class="redes-header">
        <a href="https://www.instagram.com/borja_1629/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/borja.gilgonzalez.7" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
      </div>
    </div>
  `;

  const header = document.createElement("div");
  header.innerHTML = headerHTML;
  document.body.insertBefore(header, document.body.firstChild);
});
