const buttons = document.querySelectorAll(".buttons button")
const infoContents = document.querySelectorAll(".infoContent")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetContent = document.getElementById(targetId);

    infoContents.forEach(content => content.classList.remove("infoContentActive"));
    buttons.forEach(btn => btn.classList.remove("active"));
    
    button.classList.add("active");
    targetContent.classList.add("infoContentActive"); // fixed typo
  });
});