const toggle = document.querySelector(".btn-menu");
const menu = document.querySelector(".header__menu");
const logo = document.querySelector(".logo-header");
const nav = document.querySelector(".header__nav");
const page = document.body;
console.log(toggle, menu)
if (toggle && menu) {
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;


        toggle.ariaExpanded = isClosed ? "true" : "false";
        nav.ariaExpanded = isClosed ? "true" : "false";
        menu.ariaHidden = isOpen ? "true" : "false";
        logo.classList.toggle("header__logo--extend", isClosed);
        page.classList.toggle("u-noscroll", isClosed);
    });

    const menuLinks = menu.querySelectorAll('.menu__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.ariaExpanded = "false";
            nav.ariaExpanded = "false";
            menu.ariaHidden = "true";
            logo.classList.remove("header__logo--extend");
            page.classList.remove("u-noscroll");
        });
    });
}

// FAQ Accordion
const questionButtons = document.querySelectorAll(".question__btn");

questionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const questionItem = button.closest(".question__item");
        const isActive = questionItem.classList.contains("active");

        // Fermer les autres éléments
        document.querySelectorAll(".question__item.active").forEach(item => {
            if (item !== questionItem) {
                item.classList.remove("active");
            }
        });

        // Basculer l'élément actif
        questionItem.classList.toggle("active");
    });
});
