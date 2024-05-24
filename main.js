// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const featureLinks = document.querySelectorAll(".feature .btn");
    const pricingLinks = document.querySelectorAll(".pricing-option .btn");

    featureLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            alert("Funcionalidad próximamente disponible");
        });
    });

    pricingLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            alert("Funcionalidad próximamente disponible");
        });
    });
});
