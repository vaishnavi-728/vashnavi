const scrollBtn = document.getElementById("scrollUpBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

const slider = document.querySelector(".slider");

slider.innerHTML += slider.innerHTML;

let scrollAmount = 0;
let scrollStep = 1; // speed
let maxScroll = slider.scrollWidth / 2;

function autoScroll() {
    if (window.innerWidth > 768) {
        scrollAmount += scrollStep;
        if (scrollAmount >= maxScroll) {
            scrollAmount = 0;
        }
        slider.scrollTo({ left: scrollAmount });
    }
}

let autoScrollInterval = setInterval(autoScroll, 20);

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

leftBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -300, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
    slider.scrollBy({ left: 300, behavior: "smooth" });
});

slider.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));
slider.addEventListener("mouseleave", () => autoScrollInterval = setInterval(autoScroll, 20));

leftBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -300, behavior: "smooth" });
    clearInterval(autoScrollInterval);
});

rightBtn.addEventListener("click", () => {
    slider.scrollBy({ left: 300, behavior: "smooth" });
    clearInterval(autoScrollInterval);
});

const galleryImages = document.querySelectorAll(".gallery img");
const imagePreview = document.getElementById("imagePreview");
const previewImg = document.getElementById("previewImg");
const closeBtn = document.querySelector(".close-btn");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        previewImg.src = img.src;
        imagePreview.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    imagePreview.style.display = "none";
});

imagePreview.addEventListener("click", (e) => {
    if (e.target === imagePreview) {
        imagePreview.style.display = "none";
    }
});

document.addEventListener("contextmenu", e => e.preventDefault());
document.onkeydown = function (event) {

    if (event.key === "F12") {
        alert("Inspect is disabled");
        return false;
    }

    if (event.ctrlKey && event.shiftKey && event.key === "I") {
        alert("Inspect is disabled");
        return false;
    }

    if (event.ctrlKey && event.key === "u") {
        alert("Source view is disabled");
        return false;
    }

    if (event.ctrlKey && event.shiftKey && event.key === "J") {
        alert("Console is disabled");
        return false;
    }
};
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const phoneNumber = "917979019334";

    if (!name || !email || !message) {
        alert("⚠️ Please fill in all fields before sending.");
        return;
    }

    const whatsappMessage = `Name:- ${name}. Email:- ${email}. Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    this.reset();
});