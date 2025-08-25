let currentLanguage = "en";

function switchLanguage(lang) {
    currentLanguage = lang;

    document.documentElement.lang = lang;

    const allLangElements = document.querySelectorAll("[data-lang]");
    allLangElements.forEach((el) => el.classList.remove("active"));

    const selectedLangElements = document.querySelectorAll(
        `[data-lang='${lang}']`
    );
    selectedLangElements.forEach((el) => el.classList.add("active"));

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.remove("active");
    });
    document
        .querySelector(`[onclick="switchLanguage('${lang}')"]`)
        .classList.add("active");

    localStorage.setItem("preferredLanguage", lang);
}

document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("preferredLanguage") || "en";

    switchLanguage(savedLang);
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
