const lightIcon = document.querySelector(".light-icon");
const darkIcon = document.querySelector(".dark-icon");

let userTheme = "light";
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        darkIcon.parentElement.classList.remove("hidden");
        lightIcon.parentElement.classList.add("hidden");
        return;
    } else {
        document.documentElement.classList.remove("dark");
        darkIcon.parentElement.classList.add("hidden");
        lightIcon.parentElement.classList.remove("hidden");
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
    // themeSwitch();
});

darkIcon.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
    userTheme = "light";
    lightIcon.parentElement.classList.remove("hidden");
    darkIcon.parentElement.classList.add("hidden");
    // themeSwitch();
});

themeCheck();
