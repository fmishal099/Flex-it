window.addEventListener('load', function () {
  document.querySelector('.pre-loader').className += ' hidden';
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.header');
  if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});


// Header
document.addEventListener("DOMContentLoaded", function() {
  // Get references to the elements
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');

  // Function to toggle the menu
  function toggleMenu() {
      navbar.classList.toggle('hidden');
  }

  // Add click event listener to the hamburger icon
  hamburger.addEventListener('click', function(event) {
      // Toggle the 'hidden' class on the navigation menu
      toggleMenu();
      // Prevent the click event from propagating to the document
      event.stopPropagation();
  });

  // Add click event listener to close the menu when clicking outside the menu
  document.addEventListener('click', function(event) {
      // Check if the clicked element is not part of the navbar or hamburger icon
      if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
          // Close the menu if it's open
          navbar.classList.add('hidden');
      }
  });
});


window.addEventListener('scroll', function() {
    var header = document.querySelector('.transparent-header');
    header.style.opacity = window.pageYOffset > 100 ? 1 : 0.5;
  });
  
  $(document).ready(function(){
    $('#slider').carousel({
      interval: 3000, // Change slide every 3 seconds
      pause: false // Do not pause on hover
    });
  });

// SLICK SLIDER
$(document).ready(function(){
  $('.logoipsum').slick({
    slidesToShow: 5, 
slidesToScroll: 1,
autoplay: true, // Autoplay the slider
autoplaySpeed: 700, // Autoplay speed in milliseconds
dots: false, // Show navigation dots
arrows: false, // Hide navigation arrows
infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4 // Change number of slides to show on smaller screens
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3 // Change number of slides to show on even smaller screens
        }
      }
    ]
  });
});

// Testimonial

$(document).ready(function(){
  $('.testimonials').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true, // Autoplay the slider
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    dots: false, // Show navigation dots
    arrows: true, // Show navigation arrows
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2 // Change number of slides to show on smaller screens
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1 // Change number of slides to show on even smaller screens
        }
      }
    ]
  });
});

// Catagories
document.addEventListener('DOMContentLoaded', function () {
  const categoryLinks = document.querySelectorAll('.category-link');
  const categoryImgs = document.querySelectorAll('.catagory-img .col-md-4');

  categoryLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const filter = this.getAttribute('data-filter');
          categoryLinks.forEach(link => link.classList.remove('active'));
          this.classList.add('active');

          categoryImgs.forEach(img => {
              if (filter === 'all' || img.getAttribute('data-category') === filter) {
                  img.style.display = 'block';
              } else {
                  img.style.display = 'none';
              }
          });
      });
  });
});


// countdown



$(document).ready(function(){
  $('.counter').each(function() {
      var $this = $(this);
      var value = parseInt($this.attr('data-value'));
      if (!isNaN(value)) {
          $this.text(value).counterUp({
              delay: 100,
              time: 2000
          });
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function (dropdown) {
      var link = dropdown.querySelector('.navbar-link');
      var content = dropdown.querySelector('.dropdown-content');

      // Toggle dropdown content on click
      link.addEventListener('click', function (event) {
          event.preventDefault();
          content.classList.toggle('show');
      });

      // Keep dropdown content visible when hovering over it
      dropdown.addEventListener('mouseenter', function () {
          content.classList.add('show');
      });

      dropdown.addEventListener('mouseleave', function () {
          content.classList.remove('show');
      });

      // Close dropdown content when clicking outside of it
      document.addEventListener('click', function (event) {
          if (!dropdown.contains(event.target)) {
              content.classList.remove('show');
          }
      });
  });
});


function toggleFaq(element) {
  var faqContent = element.nextElementSibling;
  var icon = element.querySelector('i');

  if (faqContent.style.display === 'block') {
      faqContent.style.display = 'none';
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
  } else {
      faqContent.style.display = 'block';
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
  }
}

window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});


$(document).ready(function(){
  $('.slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: '<button type="button" id="slick-prev"> &lt; </button>',
      nextArrow: '<button type="button" id="slick-next"> &gt; </button>',
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var counters = document.querySelectorAll('.counter');
  var speed = 50; // Adjust speed here

  var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };

  var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting) {
              var target = +entry.target.getAttribute('data-value');
              var count = 0;
              var increment = target > 100 ? Math.ceil(target / 100) : 1; // Increment value based on target

              var updateCounter = function() {
                  count += increment;
                  entry.target.innerText = count;

                  if (count < target) {
                      setTimeout(updateCounter, speed);
                  } else {
                      entry.target.innerText = target;
                  }
              };

              updateCounter();
              observer.unobserve(entry.target);
          }
      });
  }, options);

  counters.forEach(function(counter) {
      observer.observe(counter);
  });
});



// Search bar

// Get references to the elements
const searchIcon = document.getElementById('search-icon');
const searchOverlay = document.querySelector('.search-overlay');
const searchBox = document.querySelector('.search-box');
const closeBtn = document.querySelector('.close-btn');

// Function to toggle the search box and overlay
function toggleSearchBox() {
    searchOverlay.classList.toggle('hidden');
    searchBox.classList.toggle('hidden');
}

// Add click event listener to the search icon
searchIcon.addEventListener('click', toggleSearchBox);

// Add click event listener to the close button
closeBtn.addEventListener('click', toggleSearchBox);
