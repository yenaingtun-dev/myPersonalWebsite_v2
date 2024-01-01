const lightIcon = document.querySelector(".light-icon");
const darkIcon = document.querySelector(".dark-icon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        console.log("dark");
        document.documentElement.classList.add("dark");
        darkIcon.parentElement.classList.add("hidden");
        lightIcon.parentElement.classList.remove("hidden");
        return;
    } else {
        console.log("light");
        document.documentElement.classList.remove("dark");
        lightIcon.parentElement.classList.add("hidden");
        darkIcon.parentElement.classList.remove("hidden");
        return;
    }
};

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        darkIcon.parentElement.classList.add("hidden");
        lightIcon.parentElement.classList.remove("hidden");
        themeCheck();
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    lightIcon.parentElement.classList.add("hidden");
    darkIcon.parentElement.classList.remove("hidden");
    themeCheck();
};

lightIcon.addEventListener("click", () => {
    themeSwitch();
});

darkIcon.addEventListener("click", () => {
    themeSwitch();
});

themeCheck();
