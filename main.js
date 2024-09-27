// Notification
function showAlert() {
  var inputValue = document.getElementById('notification').value;
    
  if (inputValue.trim() !== "") {
      alert(inputValue);
  } 
  }

// Change Color
function changeBackgroundColor() {
  var card = document.querySelector('.cardColor');
  if (card.style.backgroundColor === 'rgb(1, 21, 34)' || card.style.backgroundColor === '#011522') {
    card.style.backgroundColor = '#dddddd'; 
  } else {
      card.style.backgroundColor = '#011522'; 
  }
}

// Text Change
function changeHeadingText() {
  var newText = document.getElementById('changeText').value;
  
  if (newText.trim() === "") {
      alert("Please enter a new heading text.");
      return;
  }

  document.getElementById('heading').textContent = newText;
}

// Date & Time
function showDateTime() {
    var dateTimeInput = document.getElementById('dateTime').value;
    
    if (dateTimeInput) {
      var formattedDateTime = dateTimeInput.replace("T", " ");
      
      document.getElementById('displayDateTime').innerHTML = formattedDateTime;
    } else {
      document.getElementById('displayDateTime').innerHTML = "Please select a date and time.";
    }
  }

// Summation
  function adjustWidth(input) {
    input.style.width = (input.value.length + 1) + "ch";
  }

    var int1 = document.getElementById('int1');
    var int2 = document.getElementById('int2');

    int1.addEventListener('input', function() {
      adjustWidth(int1);
    });

    int2.addEventListener('input', function() {
      adjustWidth(int2);
    });

function calculateSum() {
    var num1 = parseFloat(document.getElementById('int1').value);
    var num2 = parseFloat(document.getElementById('int2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
      var sum = num1 + num2;

      document.getElementById('result').innerHTML = "Sum: " + sum;
    } else {
      document.getElementById('result').innerHTML = "Please enter valid numbers.";
    }
  }
  
function handleKeyPress(event) {
  if (event.key === "Enter") {
      calculateSum();
  }
}

document.getElementById('int1').addEventListener('keypress', handleKeyPress);
document.getElementById('int2').addEventListener('keypress', handleKeyPress);

// Login
function togglePassword() {
  const passwordInput = document.getElementById('password');
            const eyeIcon = event.target;
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.innerHTML = `<path d="M12 4.5C6.8 4.5 2.2 8.5 1 12c1.2 3.5 5.8 7.5 11 7.5s9.8-4 11-7.5c-1.2-3.5-5.8-7.5-11-7.5zM12 15a3 3 0 110-6 3 3 0 010 6zm-7.4 2.4L1.5 15 3 13.5l1.5 1.5L9 9.4a9.8 9.8 0 012.5 5.5l-1.5 1.5A7.2 7.2 0 005.6 17.4zM21 15l-1.5 1.5-1.5-1.5L15 13l-1.5 1.5 4.5 4.5 2-2zM21 9.4a9.8 9.8 0 00-2.5-5.5l1.5-1.5a11.4 11.4 0 012.5 6.5c-1.2 3.5-5.8 7.5-11 7.5s-9.8-4-11-7.5A11.4 11.4 0 011.5 9.4l1.5 1.5a9.8 9.8 0 002.5 5.5L9 13l2.1 2.1A7.2 7.2 0 0112 15a7.2 7.2 0 013-1.5l1.5-1.5 4.5 4.5z" fill="currentColor"></path>`;
            } else {
                passwordInput.type = 'password'; 
                eyeIcon.innerHTML = `<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                                     <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>`;
            }
}
function handleSubmit(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
      alert("Success! You've signed in.");
  } else {
      alert("Please fill in both fields."); 
  }

  return false; 
}


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    const carousel = document.querySelector('.carousel');
    const translateX = -100 * slideIndex;
    carousel.style.transform = `translateX(${translateX}%)`;
}

document.querySelector('.carousel-container').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.carousel-container').addEventListener('touchmove', handleTouchMove, false);

let xDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
    if (!xDown) return;

    const xDiff = xDown - evt.touches[0].clientX;

    if (xDiff > 0) {
        // Swipe left
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    } else {
        // Swipe right
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    }

    xDown = null;
}
