function toggleNavbar() {
    var navbarLinks = document.querySelector('.navbar-links');
    var toggleIcon = document.querySelector('.toggle-icon');
  
    navbarLinks.classList.toggle('active');
    toggleIcon.classList.toggle('active');
  }

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
}