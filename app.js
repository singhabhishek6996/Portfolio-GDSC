const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

var burger = document.querySelector('.burger')
var navcontainer = document.querySelector('.navcontainer')
var navright = document.querySelector('.navright')
var navleft = document.querySelector('.navleft')
  burger.addEventListener('click', () => {
  navright.classList.toggle('v-class')
  navleft.classList.toggle('v-class')
  navcontainer.classList.toggle('navheight')
})
