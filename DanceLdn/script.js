// DROP DOWN NAVBAR
// Toggle between adding and removing the "responsive" class to topnav when user clicks hamburger icon
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



// BACK TO TOP BUTTON
// Target button
let theBtn = document.getElementById("back-to-top-btn");
  theBtn.style.color = "black";
  theBtn.style.backgroundColor = "white";
  theBtn.style.fontSize = "1.5rem";
  theBtn.style.borderRadius = '50%';
  theBtn.style.border="black solid 0.1rem"


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 
    || document.documentElement.scrollTop > 20) {
      theBtn.style.display = "block";
  } 
  else {
    theBtn.style.display = "none";
  }
}


// When the user hovers on the button, change colour
theBtn.addEventListener("mouseenter", function () {
  theBtn.style.color="white"
  theBtn.style.background="black"
  theBtn.style.cursor = "pointer";
  theBtn.style.border="white solid 0.1rem"
});


// When the user stops hovering on the button, reinstate colour
theBtn.addEventListener("mouseleave", function () {
  theBtn.style.border="black solid 0.1rem"
  theBtn.style.color="black"
  theBtn.style.background="white"
});


// When the user clicks on the button, scroll to the top of the document
theBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});



// NEWSLETTER SIGN UP FORM
// Target form elements
const form  = document.getElementsByTagName("form")[0];
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
const log = document.getElementById('log');

// Validate input
email.addEventListener("input", function() {
  // Each time the user types something, reset error/thanks message
  emailError.textContent = "";
  emailError.className = "error"; 
  log.textContent = "";
  // check form fields are valid.
  if (!email.validity.valid) {    
  // If there is an error, show the correct error
  showError();
  }
});


form.addEventListener("submit", function() {
  // if the email field is valid, let the form submit and display thanks message
  if (email.validity.valid) {
  log.textContent = "Thanks for subscribing!";
  event.preventDefault();
  }
  // If it isn't, display appropriate error message and cancel submit event
  else {
  showError();
  event.preventDefault();
  }
});


function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "Please enter your e-mail address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Please enter a valid e-mail address.";
  }
  // Set the styling appropriately
  emailError.className = 'error active';
}