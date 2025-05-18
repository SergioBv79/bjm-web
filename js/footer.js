 // Archivo: js/footer.js

// Inserta este footer en todas las páginas llamando a este script en el HTML
// Asegúrate de que el elemento <footer id="footer"></footer> esté en el HTML principal

document.getElementById("footer").innerHTML = `
  <div class="contenedor-footer">
    <div class="footer-info">
      <p>&copy; 2025 BJM Mantenimientos y Servicios Industriales</p>
      <p>El Puerto de Santa María · Cádiz</p>
      <p>Tel: <a href="tel:+34600000000">600 000 000</a> · Email: <a href="mailto:info@bjm.com">info@bjm.com</a></p>
    </div>

    <div class="footer-enlaces">
      <ul>
        <li><a href="contacto.html">Contacto</a></li>
        <li><a href="politica-privacidad.html">Política de privacidad</a></li>
        <li><a href="politica-cookies.html">Política de cookies</a></li>
        <li><a href="aviso-legal.html">Aviso legal</a></li>
        <li><a href="accesibilidad.html">Accesibilidad</a></li>
        <li><a href="blog/index.html">Blog</a></li>
        <li><a href="sitemap.html">Mapa web</a></li>
      </ul>
    </div>

    <div class="footer-redes">
      <a href="#" aria-label="Instagram" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      <a href="#" aria-label="Facebook" target="_blank"><i class="fa-brands fa-facebook"></i></a>
      <a href="#" aria-label="TikTok" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
      <a href="#" aria-label="LinkedIn" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      <a href="#" aria-label="YouTube" target="_blank"><i class="fa-brands fa-youtube"></i></a>
    </div>
  </div>

  <!-- Botón flotante de configuración de cookies -->
  <div class="boton-cookies-config">
    <a href="politica-cookies.html#configuracion">Configurar cookies</a>
  </div>
`;

