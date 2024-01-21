const lightIcon = document.querySelector(".light-icon");
const darkIcon = document.querySelector(".dark-icon");
const lightIconMobile = document.querySelector(".light-icon-mobile");
const darkIconMobile = document.querySelector(".dark-icon-mobile");

let userTheme = "light";
const initialData = false;
let isDarkMode = JSON.parse(localStorage.getItem("isDarkMode")) || initialData;
const systemDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches;

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const themeCheck = () => {
    // if (systemDarkMode === true) {
    //     isDarkMode = true;
    // } else {
    //     isDarkMode = false;
    // }
    if (isDarkMode === true) {
        document.documentElement.classList.add("dark");
        darkIcon.parentElement.classList.remove("hidden");
        lightIcon.parentElement.classList.add("hidden");
        darkIconMobile.parentElement.classList.remove("hidden");
        lightIconMobile.parentElement.classList.add("hidden");
        localStorage.setItem("isDarkMode", true);
        return;
    } else {
        document.documentElement.classList.remove("dark");
        darkIcon.parentElement.classList.add("hidden");
        lightIcon.parentElement.classList.remove("hidden");
        darkIconMobile.parentElement.classList.add("hidden");
        lightIconMobile.parentElement.classList.remove("hidden");
        localStorage.setItem("isDarkMode", false);
        return;
    }
};

lightIcon.addEventListener("click", () => {
    document.documentElement.classList.add("dark");
    userTheme = "dark";
    lightIcon.parentElement.classList.add("hidden");
    darkIcon.parentElement.classList.remove("hidden");
    lightIconMobile.parentElement.classList.add("hidden");
    darkIconMobile.parentElement.classList.remove("hidden");
    localStorage.setItem("isDarkMode", true);
});
lightIconMobile.addEventListener("click", () => {
    document.documentElement.classList.add("dark");
    userTheme = "dark";
    lightIconMobile.parentElement.classList.add("hidden");
    darkIconMobile.parentElement.classList.remove("hidden");
    lightIcon.parentElement.classList.add("hidden");
    darkIcon.parentElement.classList.remove("hidden");
    localStorage.setItem("isDarkMode", true);
});

darkIcon.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
    userTheme = "light";
    lightIcon.parentElement.classList.remove("hidden");
    darkIcon.parentElement.classList.add("hidden");
    lightIconMobile.parentElement.classList.remove("hidden");
    darkIconMobile.parentElement.classList.add("hidden");
    localStorage.setItem("isDarkMode", false);
});

darkIconMobile.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
    userTheme = "light";
    lightIconMobile.parentElement.classList.remove("hidden");
    darkIconMobile.parentElement.classList.add("hidden");
    lightIcon.parentElement.classList.remove("hidden");
    darkIcon.parentElement.classList.add("hidden");
    localStorage.setItem("isDarkMode", false);
});

themeCheck();

// navbar active on scroll
let section = document.querySelectorAll("section");
let lists = document.querySelectorAll(".list");
let lists_mobile = document.querySelectorAll(".list_mobile");

function activeLink(lis) {
    lists.forEach((item) => item.classList.remove("active"));
    lists_mobile.forEach((item) => item.classList.remove("active"));
    lis.forEach((li) => li.parentElement.classList.add("active"));
}
lists.forEach((item) =>
    item.addEventListener("click", function () {
        activeLink(this);
    })
);

window.onscroll = () => {
    section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            const targets = document.querySelectorAll(`[href='#${id}']`);
            activeLink(targets);
        }
    });
};
