const form = document.querySelector('#form');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const errorMsg = document.querySelectorAll('.error-msg'); 
const icon = document.querySelectorAll('.icon');

form.addEventListener('submit', function (e) {
  // prevent form from submitting
  e.preventDefault();

  checkFirstname();
  checkLastname();
  checkEmail();
  checkPassword();
}); 


// function to check if input fields are empty. 
const isRequired = function(value) {
  if (value == '') {
    value = false;
  } else {
    value = true;
  }  
  return value;  
}; 

// function to check if email has a valid input. i.e. xyz@domain.net. 
const isEmailValid = (x) => {
  const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailFormat.test(x);
};

// check firstname 
const checkFirstname = () => {
  let valid = false;
  const firstnameVal = firstname.value.trim(); 

  if (!isRequired(firstnameVal)) {
    errorMsg[0].textContent = "First Name cannot be empty"; 
    firstname.style.border = "2px solid hsl(0, 100%, 74%)";
    icon[0].style.display = "block";
  } else {
    valid = true;
    errorMsg[0].textContent = "";
    firstname.style.border = "1px solid hsl(246, 25%, 77%)"
    icon[0].style.display = "none";
  }
  return valid; 
}

// check lastname 
const checkLastname = () => {
  let valid = false;
  const lastnameVal = lastname.value.trim(); 

  if (!isRequired(lastnameVal)) {
    errorMsg[1].textContent = "Last Name cannot be empty"; 
    lastname.style.border = "2px solid hsl(0, 100%, 74%)";
    icon[1].style.display = "block";
  } else {
    valid = true;
    errorMsg[1].textContent = "";
    lastname.style.border = "1px solid hsl(246, 25%, 77%)"
    icon[1].style.display = "none";
  }
  return valid; 
}

// check password 
const checkPassword = () => {
  let valid = false;
  const passwordVal = password.value.trim(); 

  if (!isRequired(passwordVal)) {
    errorMsg[3].textContent = "Password cannot be empty"; 
    password.style.border = "2px solid hsl(0, 100%, 74%)";
    icon[3].style.display = "block";
  } else {
    valid = true;
    errorMsg[3].textContent = "";
    password.style.border = "1px solid hsl(246, 25%, 77%)"
    icon[3].style.display = "none";
  }
  return valid; 
}

// check email  
const checkEmail = () => {
  let valid = false;
  const emailVal = email.value.trim(); 

  if (!isRequired(emailVal)) {
    errorMsg[2].textContent = "Email cannot be empty"; 
    email.style.border = "2px solid hsl(0, 100%, 74%)";
    icon[2].style.display = "block";
  } else if (!isEmailValid(emailVal)) {
    errorMsg[2].textContent = "Looks like this is not an email"; 
    email.style.border = "2px solid hsl(0, 100%, 74%)";
    icon[2].style.display = "block";
  } else {
    valid = true;
    errorMsg[2].textContent = "";
    email.style.border = "1px solid hsl(246, 25%, 77%)"
    icon[2].style.display = "none";
  }
  return valid; 
}



/* 
  lots of repeated code here, need to refactor: 

*/









