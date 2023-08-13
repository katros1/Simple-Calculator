const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
  updateModeToggleText(isDarkMode);
});

function updateModeToggleText(isDarkMode) {
  modeToggle.innerHTML = isDarkMode ? "White-Theme" : "Dark-Theme";
}

// Retrieve and apply the saved theme mode from local storage

const savedMode = localStorage.getItem("dark-mode");
if (savedMode === "true") {
  body.classList.add("dark-mode");
  updateModeToggleText(true);
} else {
  updateModeToggleText(false);
}
