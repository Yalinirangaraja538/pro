document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "🌞" : "🌙";
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("[data-animate]").forEach(el => {
  observer.observe(el);
});



function copyEmail() {
  const email = document.getElementById("emailText").innerText;
  navigator.clipboard.writeText(email);
  alert("Email copied to clipboard!");
}


(function(){
  emailjs.init("IjPdMxia4ZFbxU6CS"); 
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_iqgkwdc",    
    "template_6n8aija",   
    this
  ).then(() => {
    document.getElementById("formStatus").innerText =
      "✅ Message sent successfully!";
    this.reset();
  }, () => {
    document.getElementById("formStatus").innerText =
      "❌ Failed to send message. Try again.";
  });
});
 
// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav-pro");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
