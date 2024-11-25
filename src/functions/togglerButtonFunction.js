export function togglerButtonFunction(setTheme) {
  setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
}
