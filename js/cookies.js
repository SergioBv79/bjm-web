// cookies.js - Gestión completa de cookies

document.addEventListener("DOMContentLoaded", function () {
  const consent = localStorage.getItem("cookies_accepted");

  const bannerHTML = `...`; // Tu HTML de banner (sin cambios)
  const configHTML = `...`; // Tu HTML de configuración (sin cambios)

  document.body.insertAdjacentHTML("beforeend", configHTML);
  const modal = document.getElementById("cookie-config-modal");

  const path = window.location.pathname;
  const esIndex = path.endsWith("index.html") || path === "/" || path.endsWith("/");

  if (!consent && esIndex) {
    document.body.insertAdjacentHTML("beforeend", bannerHTML);
    document.getElementById("cookie-banner").classList.add("visible");
  } else if (consent) {
    activarGoogleAnalyticsSiProcede();
  }

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

  document.addEventListener("click", function (e) {
    if (e.target.id === "configure-cookies") modal.classList.remove("oculto");
    if (e.target.id === "close-config") modal.classList.add("oculto");
    if (e.target.id === "accept-cookies") {
      localStorage.setItem("cookies_accepted", "all");
      const banner = document.getElementById("cookie-banner");
      if (banner) banner.remove();
      modal.classList.add("oculto");
      activarGoogleAnalyticsSiProcede();

      // 🔥 NUEVO: Mostrar formulario directamente si existe
      const wrapper = document.getElementById('formulario-contacto-wrapper');
      const bloqueo = document.getElementById('bloqueo-formulario');
      if (wrapper && bloqueo) {
        wrapper.style.display = "block";
        bloqueo.style.display = "none";
      }
    }
    if (e.target.id === "reject-cookies") {
      localStorage.setItem("cookies_accepted", "necessary");
      const banner = document.getElementById("cookie-banner");
      if (banner) banner.remove();
      modal.classList.add("oculto");
    }
  });

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

      // 🔥 NUEVO: Mostrar formulario directamente si se acepta analytics
      const wrapper = document.getElementById('formulario-contacto-wrapper');
      const bloqueo = document.getElementById('bloqueo-formulario');
      if (accepted.analytics && wrapper && bloqueo) {
        wrapper.style.display = "block";
        bloqueo.style.display = "none";
      }
    }
  });
});

// ✅ ACTIVACIÓN DE GOOGLE ANALYTICS SOLO SI HAY CONSENTIMIENTO DE MARKETING
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

// ✅ INYECTAR GA DINÁMICAMENTE (EDITAR EL ID CUANDO SE PUBLIQUE)
function inyectarGA() {
  const scriptTag = document.createElement("script");
  scriptTag.async = true;
  scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"; // ← REEMPLAZAR ESTE ID CUANDO PUBLIQUES

  const inlineScript = document.createElement("script");
  inlineScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); // ← REEMPLAZAR ESTE ID TAMBIÉN
  `;

  document.head.appendChild(scriptTag);
  document.head.appendChild(inlineScript);
}
