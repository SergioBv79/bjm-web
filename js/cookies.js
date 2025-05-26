
// cookies.js - Versión final 100% funcional

document.addEventListener("DOMContentLoaded", function () {
  // ✅ HTML del banner de cookies
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

  // ✅ HTML del modal de configuración de cookies
  const configHTML = `
    <div id="cookie-config-modal" class="cookie-modal oculto">
      <div class="cookie-modal-contenido configuracion-cookies animar-aparicion">
        <h2><i class="fas fa-cogs"></i> Configuración de cookies</h2>
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

  // ✅ Insertar el modal y el banner si no hay consentimiento
  document.body.insertAdjacentHTML("beforeend", configHTML);
  const modal = document.getElementById("cookie-config-modal");
  const consentimiento = localStorage.getItem("cookies_accepted");

  if (!consentimiento) {
    document.body.insertAdjacentHTML("beforeend", bannerHTML);
    document.getElementById("cookie-banner").classList.add("visible");
  } else {
    activarGoogleAnalyticsSiProcede();
  }

  // ✅ Enlaces o botones para abrir el modal
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("abrir-config-cookies") || e.target.id === "configure-cookies") {
      modal.classList.remove("oculto");
    }
    if (e.target.id === "close-config") {
      modal.classList.add("oculto");
    }
    if (e.target.id === "accept-cookies") {
      localStorage.setItem("cookies_accepted", "all");
      const banner = document.getElementById("cookie-banner");
      if (banner) banner.remove();
      modal.classList.add("oculto");
      activarGoogleAnalyticsSiProcede();
      desbloquearFormulario();
    }
    if (e.target.id === "reject-cookies") {
      localStorage.setItem("cookies_accepted", "necessary");
      const banner = document.getElementById("cookie-banner");
      if (banner) banner.remove();
      modal.classList.add("oculto");
    }
  });

  // ✅ Guardar configuración personalizada
  document.addEventListener("submit", function (e) {
    if (e.target.id === "cookie-options") {
      e.preventDefault();
      const accepted = {
        analytics: document.getElementById("analytics").checked,
        marketing: document.getElementById("marketing").checked
      };
      localStorage.setItem("cookies_custom", JSON.stringify(accepted));
      localStorage.setItem("cookies_accepted", "custom");
      const banner = document.getElementById("cookie-banner");
      if (banner) banner.remove();
      modal.classList.add("oculto");
      activarGoogleAnalyticsSiProcede();
      if (accepted.analytics) desbloquearFormulario();
    }
  });

  comprobarBloqueoFormulario();
});

// ✅ Mostrar u ocultar formulario de contacto según cookies
function desbloquearFormulario() {
  const wrapper = document.getElementById('formulario-contacto-wrapper');
  const bloqueo = document.getElementById('bloqueo-formulario');
  if (wrapper && bloqueo) {
    wrapper.style.display = "block";
    bloqueo.style.display = "none";
  }
}

// ✅ Comprobar visibilidad del formulario
function comprobarBloqueoFormulario() {
  const aceptadas = localStorage.getItem("cookies_accepted");
  let analyticsOk = false;

  if (aceptadas === "all") analyticsOk = true;
  if (aceptadas === "custom") {
    try {
      const prefs = JSON.parse(localStorage.getItem("cookies_custom"));
      analyticsOk = prefs.analytics === true;
    } catch {}
  }

  const wrapper = document.getElementById('formulario-contacto-wrapper');
  const bloqueo = document.getElementById('bloqueo-formulario');
  if (wrapper && bloqueo) {
    wrapper.style.display = analyticsOk ? "block" : "none";
    bloqueo.style.display = analyticsOk ? "none" : "block";
  }
}

// ✅ Activar Google Analytics si se permite
function activarGoogleAnalyticsSiProcede() {
  const consentimiento = localStorage.getItem("cookies_accepted");
  if (consentimiento === "all") {
    inyectarGA();
  } else if (consentimiento === "custom") {
    try {
      const config = JSON.parse(localStorage.getItem("cookies_custom"));
      if (config.marketing) {
        inyectarGA();
      }
    } catch (error) {
      console.error("Error leyendo configuración personalizada de cookies:", error);
    }
  }
}

// 🛠 Recuerda cambiar el ID de Analytics antes de publicar
function inyectarGA() {
  const scriptTag = document.createElement("script");
  scriptTag.async = true;
  scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"; // Sustituye este ID

  const inlineScript = document.createElement("script");
  inlineScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `;

  document.head.appendChild(scriptTag);
  document.head.appendChild(inlineScript);
}
