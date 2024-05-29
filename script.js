let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let toggleMenu = document.querySelector(".menu");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

let toggle = document.querySelector(".toggle");
var toggleVar = true;
toggle.addEventListener("click", function (e) {
  toggleVar = !toggleVar;
  if (toggleVar) {
    toggle.innerHTML = `<i class='bx bxs-moon' ></i>`;
    document.documentElement.style.setProperty("--bg-color", "#fff");
    document.documentElement.style.setProperty("--text-color", "#000");
    document.documentElement.style.setProperty("--main-color", "#3867d6");
    document.documentElement.style.setProperty("--second-bg-color", "#f7f8fa");
  } else {
    toggle.innerHTML = `<i class='bx bxs-sun' ></i>`;
    document.documentElement.style.setProperty("--bg-color", "#1f242d");
    document.documentElement.style.setProperty("--second-bg-color", "#323946");
    document.documentElement.style.setProperty("--main-color", "#0ef");
    document.documentElement.style.setProperty("--text-color", "#fff");
  }
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);
});

function getData(form) {
  var formData = new FormData(form);
  let obj = Object.fromEntries(formData);
  //   console.log("obj",obj);
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sachinvermaa1234@gmail.com",
    Password: "5F98B927D56B36A4A9382E1FCD6D295908A4",
    To: "sachinvermaa1234@gmail.com",
    From: "sachinvermaa1234@gmail.com",
    Subject: obj.subject,
    Body: `<h2>Name:- ${obj.name}</h2><br><h2>Email:- ${obj.email}</h2><br><h2>Phone:- ${obj.phone}</h2><br><br><h2>Message:- ${obj.message}</h2>`,
  }).then((message) => alert("Sent."));
}

// scroll

const mq = window.matchMedia("(min-width: 1000px)");

if (mq.matches) {
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
  ScrollReveal().reveal(".home-content h1", { origin: "left" });

  ScrollReveal().reveal(".about-content, .heading", { origin: "top" });
  ScrollReveal().reveal(".about-content h3", { origin: "left" });

  ScrollReveal({
    reset: true,
    distance: "360px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".first", { origin: "left" });
  ScrollReveal().reveal(".second", { origin: "right" });
}

const typed = new Typed(".multiple-text", {
  strings: ["Product Manager", "Product Manager"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

let frontendService = document.querySelector(".frontendService");
frontendService.addEventListener("click", openPopup);

function openPopup() {
  window.open("service.html", "_blank", "width=600,height=400");
}

let backendService = document.querySelector(".backendService");
backendService.addEventListener("click", openPopup);

function openPopup() {
  window.open("backservice.html", "_blank", "width=600,height=400");
}
