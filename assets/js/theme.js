const themes = {
  light: {
    background: "white",
    text: "black",
  },
  dark: {
    background: "black",
    text: "white",
  },
};

function setTheme(newTheme) {
  const themeColors = themes[newTheme];
  const html = document.documentElement;

  Object.keys(themeColors).map((key) => {
    return html.style.setProperty(`--${key}`, themeColors[key]);
  });
}

const lightModeToggle = document.getElementById("themeToggle");
lightModeToggle.addEventListener("change", ({ target }) => {
  setTheme(target.checked ? "light" : "dark");
});
