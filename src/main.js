const lightIcon = document.querySelector(".light-icon");
const darkIcon = document.querySelector(".dark-icon");
const lightIconMobile = document.querySelector(".light-icon-mobile");
const darkIconMobile = document.querySelector(".dark-icon-mobile");

let userTheme = "light";
const initialData = false;
let isDarkMode = JSON.parse(localStorage.getItem("isDarkMode")) || initialData;
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const themeCheck = () => {
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

// const themeSwitch = () => {
//     if (document.documentElement.classList.contains("dark")) {
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//         darkIcon.parentElement.classList.add("hidden");
//         lightIcon.parentElement.classList.remove("hidden");
//         console.log("herer dark to light");
//         themeCheck();
//     } else {
//         document.documentElement.classList.add("dark");
//         userTheme = "dark";
//         lightIcon.parentElement.classList.add("hidden");
//         darkIcon.parentElement.classList.remove("hidden");
//         console.log("herer light to dark");
//         themeCheck();
//     }
// };

lightIcon.addEventListener("click", () => {
    document.documentElement.classList.add("dark");
    userTheme = "dark";
    lightIcon.parentElement.classList.add("hidden");
    darkIcon.parentElement.classList.remove("hidden");
    lightIconMobile.parentElement.classList.add("hidden");
    darkIconMobile.parentElement.classList.remove("hidden");
    localStorage.setItem("isDarkMode", true);
    // themeSwitch();
});
lightIconMobile.addEventListener("click", () => {
    document.documentElement.classList.add("dark");
    userTheme = "dark";
    lightIconMobile.parentElement.classList.add("hidden");
    darkIconMobile.parentElement.classList.remove("hidden");
    lightIcon.parentElement.classList.add("hidden");
    darkIcon.parentElement.classList.remove("hidden");
    localStorage.setItem("isDarkMode", true);
    // themeSwitch();
});

darkIcon.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
    userTheme = "light";
    lightIcon.parentElement.classList.remove("hidden");
    darkIcon.parentElement.classList.add("hidden");
    lightIconMobile.parentElement.classList.remove("hidden");
    darkIconMobile.parentElement.classList.add("hidden");
    localStorage.setItem("isDarkMode", false);
    // themeSwitch();
});

darkIconMobile.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
    userTheme = "light";
    lightIconMobile.parentElement.classList.remove("hidden");
    darkIconMobile.parentElement.classList.add("hidden");
    lightIcon.parentElement.classList.remove("hidden");
    darkIcon.parentElement.classList.add("hidden");
    localStorage.setItem("isDarkMode", false);
    // themeSwitch();
});

themeCheck();
