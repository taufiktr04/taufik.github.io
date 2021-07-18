// Menu show

// others way
// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId);

//   if (toggle && nav) {
//     toggle.addEventListener("click", () => {
//       nav.classList.toggle("show");
//     });
//   }
// };

// My way
function showMenu(toggleId, navId) {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }
}

showMenu("nav-toggle", "nav-menu");

// active and remove menu
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // Active Link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  // remove mobile menu
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "120px",
  duration: 2000,
  reset: true,
});

// Scroll Home
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

// Scroll About
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 200 });
sr.reveal(".about__text", { delay: 400 });

// Scroll Skills
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", { delay: 200 });
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 400 });

// Scrool Work
sr.reveal(".work__img", { interval: 200 });

// Scroll Contact
sr.reveal(".contact__input", { interval: 200 });

// Proyek Link
// Proyek 1
const proyek1 = document.getElementById("proyek1");
proyek1.addEventListener("click", function () {
  window.location.href = "https://taufiktr04.github.io/taufik2.github.io/";
});
// Proyek 2
const proyek2 = document.getElementById("proyek2");
proyek2.addEventListener("click", function () {
  window.location.href = "https://taufiktr04.github.io/merch.github.io/";
});

// Proyek 3
const proyek3 = document.getElementById("proyek3");
proyek3.addEventListener("click", function () {
  window.location.href = "https://taufiktr04.github.io/conqueror.github.io/";
});

// Contact Whatsapp
$(document).on("click", ".send", function () {
  /* Inputan Formulir */
  var input_name = $("#name").val(),
    input_email = $("#email").val(),
    input_description = $("#message").val();

  /* Pengaturan Whatsapp */
  var walink = "https://web.whatsapp.com/send",
    phone = "6281257724544",
    text = "Hello, I'm",
    text_yes = "Succed.",
    text_no = "Failed.";

  /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = "whatsapp://send";
  }

  if (input_name != "" && input_email != "" && input_description != "") {
    /* Whatsapp URL */
    var checkout_whatsapp = walink + "?phone=" + phone + "&text=" + text + "%0A%0A" + "*Name* : " + input_name + "%0A" + "*Email* : " + input_email + "%0A" + "*Message* : " + input_description;

    /* Whatsapp Window Open */
    window.open(checkout_whatsapp, "_blank");
    document.getElementById("text-info").innerHTML = '<div class="alert alert-success">' + text_yes + "</div>";
  } else {
    document.getElementById("text-info").innerHTML = '<div class="alert alert-danger">' + text_no + "</div>";
  }
});
