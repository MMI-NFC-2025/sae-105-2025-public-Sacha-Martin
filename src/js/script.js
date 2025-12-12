//menu

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
        document.querySelectorAll(".question__item.active").forEach(item => {
            if (item !== questionItem) {
                item.classList.remove("active");
            }
        });
        questionItem.classList.toggle("active");
    });
});

// Lightbox pour images
const itemImages = document.querySelectorAll(".item__img");
let currentImageIndex = 0;

// Créer la lightbox HTML si elle n'existe pas
if (!document.querySelector(".lightbox")) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
        <div class="lightbox__content">
            <button class="lightbox__close">&times;</button>
            <button class="lightbox__button lightbox__button-prev">&#10094;</button>
            <img class="lightbox__img" src="" alt="">
            <button class="lightbox__button lightbox__button-next">&#10095;</button>
        </div>
    `;
    document.body.appendChild(lightbox);
}

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox__img");
const lightboxClose = document.querySelector(".lightbox__close");
const lightboxPrev = document.querySelector(".lightbox__button-prev");
const lightboxNext = document.querySelector(".lightbox__button-next");
const allImages = Array.from(document.querySelectorAll(".item__img"));

itemImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentImageIndex = allImages.indexOf(img);
        showLightbox();
    });
});

function showLightbox() {
    const img = allImages[currentImageIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
}

lightboxClose.addEventListener("click", closeLightbox);

lightboxPrev.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    showLightbox();
});

lightboxNext.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % allImages.length;
    showLightbox();
});

// Fermer avec Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

// Fermer en cliquant en dehors de l'image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
