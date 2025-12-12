const toggle = document.querySelector(".btn-menu");
const nav = document.querySelector(".menu");
const logo = document.querySelector(".header__logo");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;

    // Mise à jour des attributs ARIA pour accessibilité
    toggle.ariaExpanded = isClosed;
    nav.hidden = isOpen;
  });
}