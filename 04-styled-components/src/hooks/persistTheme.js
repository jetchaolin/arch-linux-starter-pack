let persistentTheme = localStorage.getItem("theme");

const toggleStoredTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

const getStoredTheme = () => {
  return persistentTheme;
};

export { toggleStoredTheme, getStoredTheme };
