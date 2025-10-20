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

const testimonials = document.querySelectorAll(".testCon");
const contbutton = document.querySelectorAll(".pag button");

let currentIndex = 0;
let buttonIndex = 0;

function showTestimonial(index, buttonIndex) {
  testimonials.forEach(test => test.classList.remove("testActive"));
  contbutton.forEach(btn => btn.classList.remove("contActive"));

  contbutton[buttonIndex].classList.add("contActive");
  testimonials[index].classList.add("testActive");
}

// Show the first testimonial initially
showTestimonial(currentIndex, buttonIndex);

// Cycle through testimonials every 2 seconds
setInterval(() => {
  currentIndex++;
  buttonIndex++;
  if (currentIndex >= testimonials.length && buttonIndex >= contbutton.length) {
    currentIndex = 0; // loop back to first
    buttonIndex = 0; // loop back to first
  }  
  showTestimonial(currentIndex, buttonIndex);
}, 2000);
