const htmlElement = document.documentElement;
const colorThemeSelector = document.querySelector(
  "[data-color-theme-selector]"
);
const colorThemeSelectorInput = colorThemeSelector.querySelector("select");
const storedTheme = localStorage.theme;

function setInputState(storedTheme) {
  if (!!storedTheme) {
    colorThemeSelectorInput.querySelector(
      `[value="${storedTheme}"]`
    ).selected = true;

    htmlElement.classList.add(storedTheme);
  }
}

function displayThemeSelector() {
  colorThemeSelector.classList.remove("invisible");
}

function toggleThemeClass(type) {
  if (type === "dark") {
    if (htmlElement.classList.contains("light")) {
      htmlElement.classList.remove("light");
    }

    htmlElement.classList.add("dark");
  } else if (type == "light") {
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
    }

    htmlElement.classList.add("light");
  } else {
    // "System" mode - blanket remove all theme classes from the root <html> element
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
    }

    if (htmlElement.classList.contains("light")) {
      htmlElement.classList.remove("light");
    }

    // If the current system color scheme preference is dark, apply the .dark class
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      htmlElement.classList.add("dark");
    }
  }
}

function updateTheme(type) {
  switch (type) {
    case "dark":
      toggleThemeClass("dark");
      localStorage.theme = "dark";
      break;
    case "light":
      toggleThemeClass("light");
      localStorage.theme = "light";
      break;
    default:
      toggleThemeClass("system");

      localStorage.removeItem("theme");
      break;
  }
}

setInputState(storedTheme);
displayThemeSelector();

colorThemeSelectorInput.addEventListener("change", (e) => {
  updateTheme(e.target.value);
});
