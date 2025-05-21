 
// cookies.js - Gestión completa de cookies

document.addEventListener("DOMContentLoaded", function () {
  const bannerHTML = `
    <div id="cookie-banner" class="cookie-banner">
      <p>Este sitio utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico. Puedes aceptar todas, rechazarlas o configurarlas.</p>
      <div class="cookie-buttons">
        <button id="accept-cookies">Aceptar todas</button>
        <button id="reject-cookies">Rechazar</button>
        <button id="configure-cookies">Configurar</button>
      </div>
    </div>
  `;

  const configHTML = `
    <div id="cookie-config-modal" class="cookie-modal oculto">
      <div class="cookie-modal-contenido">
        <h2>Configuración de cookies</h2>
        <form id="cookie-options">
          <label><input type="checkbox" disabled checked> Cookies necesarias (siempre activas)</label><br>
          <label><input type="checkbox" id="analytics"> Cookies estadísticas</label><br>
          <label><input type="checkbox" id="marketing"> Cookies de marketing</label><br>
          <div class="cookie-modal-botones">
            <button type="submit">Guardar configuración</button>
            <button type="button" id="close-config">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", bannerHTML);
  document.body.insertAdjacentHTML("beforeend", configHTML);

  const banner = document.getElementById("cookie-banner");
  const modal = document.getElementById("cookie-config-modal");
  const openConfig = document.getElementById("abrir-configuracion-cookies");

  if (openConfig) {
    openConfig.addEventListener("click", () => {
      modal.classList.remove("oculto");
    });
  }

  document.querySelectorAll('.abrir-config-cookies').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      modal.classList.remove("oculto");
    });
  });

  document.getElementById("configure-cookies").addEventListener("click", () => {
    modal.classList.remove("oculto");
  });

  document.getElementById("close-config").addEventListener("click", () => {
    modal.classList.add("oculto");
  });

  document.getElementById("accept-cookies").addEventListener("click", () => {
    localStorage.setItem("cookies_accepted", "all");
    banner.remove();
    modal.classList.add("oculto");
  });

  document.getElementById("reject-cookies").addEventListener("click", () => {
    localStorage.setItem("cookies_accepted", "necessary");
    banner.remove();
    modal.classList.add("oculto");
  });

  document.getElementById("cookie-options").addEventListener("submit", function (e) {
    e.preventDefault();
    const accepted = {
      analytics: document.getElementById("analytics").checked,
      marketing: document.getElementById("marketing").checked
    };
    localStorage.setItem("cookies_custom", JSON.stringify(accepted));
    localStorage.setItem("cookies_accepted", "custom");
    banner.remove();
    modal.classList.add("oculto");
  });

  if (!localStorage.getItem("cookies_accepted")) {
    banner.classList.add("visible");
  }
});