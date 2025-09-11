let persistentTheme = JSON.stringify(localStorage.getItem("theme"));

const toggleStoredTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

const getStoredTheme = () => {
  return localStorage.getItem("theme");
};

export { toggleStoredTheme, getStoredTheme };
