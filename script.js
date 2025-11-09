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

const sbutton = document.querySelector(".hamburger");
const aside = document.querySelector("aside");

sbutton.addEventListener("click", () => {
  aside.classList.toggle("active");
});


const closeBtn = aside.querySelector("button");

closeBtn.addEventListener("click", () => {
  aside.classList.remove("active");
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // remove when out of view
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.autoShow').forEach(el => observer.observe(el));

const observerUp = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showUp');
    } else {
      entry.target.classList.remove('showUp'); // remove when out of view
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.autoShowUp').forEach(el => observerUp.observe(el));


const pobserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('pop');
    } else {
      entry.target.classList.remove('pop'); // allows repeated pop
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.autoPop').forEach(el => pobserver.observe(el));
