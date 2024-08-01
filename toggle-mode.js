let darkMode = true
const buttonToggle = document.getElementById("switch")

buttonToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("light")

  const mode = darkMode ? "light" : "dark"

  event.currentTarget.querySelector(
    "span"
  ).textContent = `${mode} mode Activated`

  darkMode = !darkMode
})
