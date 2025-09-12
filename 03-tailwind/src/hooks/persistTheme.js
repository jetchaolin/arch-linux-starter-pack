const toggleStoredTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

const getStoredTheme = () => {
  return localStorage.getItem("theme");
};

export { toggleStoredTheme, getStoredTheme };
