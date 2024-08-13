const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const fecha = document.querySelector('#fecha');
const isVisible = "is-visible";

// Abrir modal
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}
// Cerrar modal dando click fueradel modal
document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

// Fecha en seccion explorar
const FECHA = new Date ()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{
    month: 'long',
    day: 'numeric',
    year: 'numeric'
});