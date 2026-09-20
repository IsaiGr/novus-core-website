const navItems = [
  ["Inicio", "/"],
  ["Soluciones", "/soluciones"],
  ["Metodología", "/metodologia"],
  ["Contacto", "/contacto"],
];

const scenes = [
  { image: "/assets/novus-warehouse-3d.png", label: "01 · Fricción visible", title: "La operación que sí puedes ver", text: "Inventario, despacho y excepciones convertidos en una escena común." },
  { image: "/assets/novus-network-globe-3d.png", label: "02 · Trazabilidad", title: "Datos que siguen el movimiento", text: "Conexiones claras entre pedidos, almacenes, personas y decisiones." },
  { image: "/assets/novus-modular-flow-3d.png", label: "03 · Módulo reutilizable", title: "Un incremento que puede crecer", text: "La intervención empieza acotada y deja aprendizaje para el siguiente cliente." },
];

const icon = (name) => `<span class="icon" aria-hidden="true">${name}</span>`;

function logo() {
  return `<a class="brand" href="/" aria-label="Novus Core, inicio">
    <span class="brand-mark">${icon("◈")}</span>
    <span><strong>NOVUS CORE</strong><small>OPERACIONES · SOFTWARE</small></span>
  </a>`;
}

function header(active) {
  return `<header class="site-header"><div class="nav-shell">
    ${logo()}
    <nav aria-label="Navegación principal">${navItems.map(([label, href]) => `<a class="nav-link ${active === href ? "active" : ""}" href="${href}">${label}</a>`).join("")}</nav>
    <a class="button button-dark button-small" href="/agendar-auditoria">Conversar sobre una auditoría ${icon("→")}</a>
    <button class="menu-button" aria-label="Abrir menú" aria-expanded="false">☰</button>
  </div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="footer-grid">
    <div><div class="footer-brand">${logo()}</div><p>Software y arquitectura para reducir fricción en operaciones de distribución y logística.</p></div>
    <div><span class="eyebrow">Explorar</span><a href="/soluciones">Soluciones</a><a href="/metodologia">Metodología</a><a href="/agendar-auditoria">Auditoría de fricción</a><a href="/contacto">Contacto</a></div>
    <div><span class="eyebrow">Principios</span><span>Configurar antes de personalizar</span><span>Un núcleo versionado</span><span>Valor medible antes de ampliar</span></div>
  </div><div class="footer-bottom"><span>© 2026 Novus Core</span><span>Preparación local · sin publicación automática</span></div></footer>`;
}

function shell(active, content) {
  return `${header(active)}<main>${content}</main>${footer()}`;
}

const card = (number, title, text, label) => `<article class="card">
  <span class="card-number">${number}</span><h3>${title}</h3><p>${text}</p>${label ? `<span class="card-label">${label}</span>` : ""}
</article>`;

function home() {
  return shell("/", `<section class="hero section-wrap">
    <div class="hero-copy"><span class="status-pill"><i></i> Diagnóstico operativo · Distribución y logística</span>
      <h1>Menos retrabajo.<br /><em>Más control operativo.</em></h1>
      <p class="lead">Ayudamos a empresas de distribución y logística a identificar dónde se pierde tiempo, margen y trazabilidad; después diseñamos el módulo más pequeño que pueda demostrar valor.</p>
      <div class="actions"><a class="button button-dark" href="/agendar-auditoria">Empezar por una auditoría ${icon("→")}</a><a class="button button-light" href="/soluciones">Ver cómo trabajamos ${icon("↗")}</a></div>
      <div class="metric-row"><div><span>PRIMER PASO</span><strong>Auditar</strong><small>la fricción antes de construir</small></div><div><span>RESULTADO</span><strong>Medible</strong><small>línea base y criterio de éxito</small></div><div><span>ARQUITECTURA</span><strong>Reutilizable</strong><small>configurar antes de personalizar</small></div></div>
    </div>
    <div class="hero-visual scene-viewer"><img id="scene-image" src="${scenes[0].image}" alt="Visualización 3D de una operación logística conectada" /><div class="scene-shade"></div><div class="scene-caption"><span id="scene-label">${scenes[0].label}</span><b id="scene-title">${scenes[0].title}</b><small id="scene-text">${scenes[0].text}</small></div><div class="scene-controls"><button class="scene-arrow" id="scene-prev" aria-label="Escena anterior">←</button><div class="scene-dots">${scenes.map((_, index) => `<button class="scene-dot ${index === 0 ? "active" : ""}" data-scene="${index}" aria-label="Ver escena ${index + 1}"></button>`).join("")}</div><button class="scene-arrow" id="scene-next" aria-label="Siguiente escena">→</button></div></div>
  </section>
  <section class="section-wrap section-muted"><div class="section-heading"><div><span class="eyebrow">01 / Problema</span><h2>La operación no necesita otra capa de complejidad.</h2></div><p>El punto de partida no es una plataforma completa. Es entender el proceso que está consumiendo capacidad y decidir si merece una intervención.</p></div>
    <div class="card-grid four">${card("01", "Datos duplicados", "Pedidos, inventario o facturas que se capturan más de una vez y pierden trazabilidad.", "fricción visible")} ${card("02", "Reportes tardíos", "Decisiones operativas tomadas con información que ya quedó atrás.", "tiempo de respuesta")} ${card("03", "Excepciones manuales", "El proceso funciona mientras una persona clave recuerda cómo resolver cada caso.", "dependencia")} ${card("04", "Sistemas aislados", "La información existe, pero no fluye entre las herramientas que sostienen la operación.", "conectividad")}</div>
  </section>
  <section class="section-wrap"><div class="section-heading centered"><div><span class="eyebrow">02 / Proceso Novus Core</span><h2>Primero claridad. Después software.</h2></div><p>La secuencia protege el núcleo común y evita convertir una excepción de cliente en una deuda permanente.</p></div>
    <div class="process-grid">${card("01", "Auditoría", "Mapeamos personas, sistemas, datos, excepciones y una línea base del problema.", "resultado: diagnóstico")} ${card("02", "Arquitectura", "Elegimos configuración, capacidad reutilizable o adaptador aislado.", "resultado: decisión")} ${card("03", "Incremento", "Construimos un módulo acotado con criterios de aceptación y evidencia.", "resultado: demostración")} ${card("04", "Valor", "Medimos adopción y resultado antes de proponer una siguiente fase.", "resultado: aprendizaje")}</div>
  </section>
  <section class="cta-band section-wrap"><div><span class="eyebrow">Siguiente conversación</span><h2>¿Dónde se está escapando la capacidad de tu operación?</h2><p>Comparte el contexto. Primero confirmamos si la auditoría es el siguiente paso correcto.</p></div><a class="button button-light" href="/agendar-auditoria">Compartir contexto ${icon("→")}</a></section>`);
}

function solutions() {
  return shell("/soluciones", `<section class="page-hero section-wrap"><span class="status-pill"><i></i> Soluciones por problema, no por catálogo</span><h1>Un módulo correcto vale más que un sistema enorme.</h1><p class="lead">Novus Core convierte una fricción operativa prioritaria en una intervención acotada, medible y compatible con el núcleo común.</p></section>
  <section class="section-wrap section-muted"><div class="split-panel"><div><span class="eyebrow">Filtro de decisión</span><h2>Elegimos la forma más pequeña de resolverlo.</h2><p>Antes de hablar de tecnología, respondemos qué resultado necesita la operación, cómo se medirá y si el problema se repetirá en el segmento.</p></div><div class="decision-list"><div><b>A · Configuración</b><span>Reglas, permisos, campos o plantillas que ya existen.</span></div><div><b>B · Capacidad reutilizable</b><span>Una necesidad que puede fortalecer la plataforma para otros clientes.</span></div><div><b>C · Adaptador aislado</b><span>Una integración o extensión específica sin modificar el núcleo.</span></div><div><b>D · Rediseñar o rechazar</b><span>Cuando el costo, riesgo o excepción no justifican construir.</span></div></div></div></section>
  <section class="section-wrap"><div class="section-heading"><div><span class="eyebrow">Módulos de entrada</span><h2>Comenzar donde el valor sea observable.</h2></div><p>Estos son ejemplos de líneas de trabajo. El alcance, la integración y el mantenimiento se definen después del diagnóstico.</p></div><div class="card-grid three">${card("01", "Flujo de pedidos", "Reducir doble captura y dar trazabilidad desde la solicitud hasta la entrega.", "operación comercial")} ${card("02", "Inventario y excepciones", "Hacer visibles diferencias, faltantes y decisiones de reorden.", "operación y stock")} ${card("03", "Conectores y reportes", "Conectar fuentes existentes para que la dirección vea la misma operación.", "datos e integración")}</div></section>
  <section class="section-wrap calculator-section"><div><span class="eyebrow">Escenario ilustrativo</span><h2>La hipótesis se calcula después de observar el proceso.</h2><p>Usa esta referencia solo para ordenar la conversación. No es una promesa de ahorro ni sustituye una línea base real.</p></div><div class="calculator card"><label for="people">Personas que participan <output id="people-value">12</output></label><input id="people" type="range" min="1" max="100" value="12" /><label for="hours">Horas manuales por persona / semana <output id="hours-value">8</output></label><input id="hours" type="range" min="1" max="40" value="8" /><div class="calc-result"><span>Horas potencialmente visibles al mes</span><strong id="calc-result">384</strong><small>Escenario preliminar · validar en auditoría</small></div></div></section>`);
}

function methodology() {
  return shell("/metodologia", `<section class="page-hero section-wrap"><span class="status-pill"><i></i> Marco operativo Novus Core</span><h1>Hacer visibles los riesgos antes de ampliarlos.</h1><p class="lead">Un proceso en cinco etapas para entender la fricción, diseñar un incremento verificable y medir si genera valor.</p></section>
  <section class="section-wrap section-muted"><div class="timeline">${[["01", "Auditoría", "Mapear el flujo real, los sistemas, los datos y las excepciones."],["02", "Arquitectura", "Decidir configuración, módulo reutilizable o adaptador aislado."],["03", "Construcción", "Implementar un incremento con alcance y criterios de aceptación."],["04", "Validación", "Demostrar el comportamiento en un entorno controlado."],["05", "Evolución", "Medir adopción y decidir la siguiente inversión con evidencia."]].map(([n,t,d]) => `<article class="timeline-item"><span>${n}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join("")}</div></section>
  <section class="section-wrap"><div class="section-heading"><div><span class="eyebrow">Entregables</span><h2>La evidencia acompaña cada decisión.</h2></div><p>La metodología no promete cero riesgo. Crea puntos de revisión para que el fundador pueda aprobar alcance, arquitectura y lanzamiento por separado.</p></div><div class="card-grid three">${card("A", "Línea base", "Qué ocurre hoy, cuánto cuesta y qué señal permitiría decir que mejoró.", "producto")} ${card("B", "Paquete de decisión", "Alcance, arquitectura, supuestos, riesgos, responsables y condiciones.", "arquitectura")} ${card("C", "Evidencia reproducible", "Pruebas, cambios, rutas modificadas y aprendizaje reutilizable.", "calidad")}</div></section>
  <section class="cta-band section-wrap"><div><span class="eyebrow">Sin promesas prematuras</span><h2>El siguiente paso es entender el proceso real.</h2></div><a class="button button-light" href="/agendar-auditoria">Solicitar conversación ${icon("→")}</a></section>`);
}

function audit() {
  return shell("/agendar-auditoria", `<section class="page-hero section-wrap"><span class="status-pill"><i></i> Primera conversación de diagnóstico</span><h1>Agende una auditoría de fricción operativa.</h1><p class="lead">En esta etapa el contacto comienza por WhatsApp. Así podemos entender el contexto directamente antes de pedir datos o prometer un siguiente paso.</p></section>
  <section class="section-wrap audit-layout"><div class="dark-card whatsapp-card"><span class="eyebrow">Canal único de contacto</span><h2>Conversemos directamente.</h2><p>Escríbenos qué proceso se repite, se retrasa o depende demasiado de una persona. No envíes datos sensibles ni información de clientes.</p><a class="button button-whatsapp" href="https://api.whatsapp.com/send?phone=523328911904&text=Hola%20Novus%20Core%2C%20quiero%20conversar%20sobre%20una%20posible%20auditor%C3%ADa%20de%20fricci%C3%B3n%20operativa.">Abrir WhatsApp ${icon("↗")}</a><small>+52 33 2891 1904 · mensaje inicial preparado</small></div><aside class="audit-aside"><div class="note-card"><b>Qué ordenaremos en la conversación</b><ul><li>El resultado que necesita la operación.</li><li>El proceso y las personas involucradas.</li><li>Los sistemas, datos y excepciones.</li><li>El siguiente paso más pequeño y útil.</li></ul></div><div class="note-card"><b>Importante</b><p>Los tiempos, precios, SLA y alcance se acuerdan después de entender la iniciativa y la capacidad disponible.</p></div></aside></section>`);
}

function contact() {
  return shell("/contacto", `<section class="page-hero section-wrap"><span class="status-pill"><i></i> Contacto Novus Core</span><h1>Conversemos sobre la operación que quieres entender mejor.</h1><p class="lead">Por ahora mantenemos un solo canal de contacto: WhatsApp. Es más simple para iniciar la conversación y nos permite calificar el contexto antes de pedir más información.</p></section>
  <section class="section-wrap audit-layout"><div class="dark-card whatsapp-card"><span class="eyebrow">Canal directo</span><h2>Cuéntanos dónde está la fricción.</h2><p>Escríbenos qué proceso se repite, se retrasa o depende demasiado de una persona. No envíes datos sensibles ni información de clientes.</p><a class="button button-whatsapp" href="https://api.whatsapp.com/send?phone=523328911904&text=Hola%20Novus%20Core%2C%20quiero%20conversar%20sobre%20una%20posible%20auditor%C3%ADa%20de%20fricci%C3%B3n%20operativa.">Abrir WhatsApp ${icon("↗")}</a><small>+52 33 2891 1904 · mensaje inicial preparado</small></div><aside class="audit-aside"><div class="note-card"><b>Qué sucede después</b><p>Revisamos el contexto, confirmamos si existe ajuste con el segmento y recomendamos el siguiente paso: diagnóstico, propuesta acotada o una alternativa.</p><div class="contact-points"><span>${icon("01")} Calificar la oportunidad</span><span>${icon("02")} Entender el resultado</span><span>${icon("03")} Decidir sin prometer de más</span></div></div></aside></section>`);
}

function render() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const pages = { "/": home, "/soluciones": solutions, "/metodologia": methodology, "/agendar-auditoria": audit, "/contacto": contact };
  document.title = path === "/" ? "Novus Core — Menos retrabajo. Más control operativo." : `Novus Core — ${path.slice(1).replaceAll("-", " ")}`;
  document.querySelector("#app").innerHTML = (pages[path] || home)();
  bindInteractions();
}

function bindInteractions() {
  document.querySelectorAll("a[href^='/']").forEach((link) => link.addEventListener("click", (event) => { event.preventDefault(); history.pushState({}, "", link.getAttribute("href")); render(); window.scrollTo({ top: 0, behavior: "smooth" }); }));
  const menu = document.querySelector(".menu-button");
  const nav = document.querySelector("nav");
  menu?.addEventListener("click", () => { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); });
  const people = document.querySelector("#people"); const hours = document.querySelector("#hours");
  const recalc = () => { if (!people || !hours) return; document.querySelector("#people-value").value = people.value; document.querySelector("#hours-value").value = hours.value; document.querySelector("#people-value").textContent = people.value; document.querySelector("#hours-value").textContent = hours.value; document.querySelector("#calc-result").textContent = Number(people.value) * Number(hours.value) * 4; };
  people?.addEventListener("input", recalc); hours?.addEventListener("input", recalc);
  let sceneIndex = 0;
  const updateScene = (next) => { sceneIndex = (next + scenes.length) % scenes.length; const scene = scenes[sceneIndex]; document.querySelector("#scene-image").src = scene.image; document.querySelector("#scene-image").alt = scene.title; document.querySelector("#scene-label").textContent = scene.label; document.querySelector("#scene-title").textContent = scene.title; document.querySelector("#scene-text").textContent = scene.text; document.querySelectorAll(".scene-dot").forEach((dot, index) => dot.classList.toggle("active", index === sceneIndex)); };
  document.querySelector("#scene-prev")?.addEventListener("click", () => updateScene(sceneIndex - 1));
  document.querySelector("#scene-next")?.addEventListener("click", () => updateScene(sceneIndex + 1));
  document.querySelectorAll(".scene-dot").forEach((dot) => dot.addEventListener("click", () => updateScene(Number(dot.dataset.scene))));
}

window.addEventListener("popstate", render);
render();
