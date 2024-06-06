
// Banner AutoSlide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// Validadate Form
function validateForm() {
    const date = new Date();
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const email = document.forms["message-form"]["email"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    setSenderUI(name, date, email, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, date, email, birthDate, gender, messages) {
    document.getElementById("sender-current-time").innerHTML = date;
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}


// Prompt Replace Name
function replaceName() {
    let person = prompt("Please enter Your Name", "");
    if (person != null) {
      document.getElementById("name-span").innerHTML =  person;
    }
}

//