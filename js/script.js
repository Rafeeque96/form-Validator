// We need a listener
// addEventListeners
//document.addEventListener("eventType", callback function)
// lets validate the form again using JS
// We need to check the password match
//Store form data 

//Dom Elements
//------------------------------------------------//
let formEL = document.getElementById("form");

//pick the form element to javascript

let messageEl = document.getElementById("message");
let messagecontainerEl = document.querySelector(".message-container");//queryselector because class(.)(class/id/tags uses)
let passwords = document.querySelectorAll('.password')//querySelectorAll is more elementts pick  one by one

//variables / flags 
let isValid = false;
let passwordMatch = false;
let storedData = {}

//--------------------------------------------------//
// validate the form before we store the data

const validateForm = () => {
  //console.log("form validation starts from here");
  isValid = formEL.checkValidity();
  //console.log(isValid)
  //instructions//check conditions
  // ! (exclamation mark) is not equal
  if (!isValid) {
    messageEl.innerHTML = "Something is wrong";
    messagecontainerEl.classList.remove("pass")
    messagecontainerEl.classList.add("fail");
    return false
  } else {
    messageEl.innerHTML = "Registration successful";
    messagecontainerEl.classList.remove("fail")
    messagecontainerEl.classList.add("pass");
    
    return true
  }
};
//check the password
//--------------------------------------------------//
const checkPassword =()=>{
  let password1Value = passwords[0].value  
  let password2Value = passwords[1].value

  if (password1Value===password2Value){
    messagecontainerEl.classList.remove("fail")
    messagecontainerEl.classList.add("pass")
   
    passwordMatch = true;

    passwords.forEach((password)=>{
      passwordMatch === true ? password.classList.remove("fail") + password.classList.add("pass") : ""  //ES6 syntax
    });
    return true
   }else{
    messageEl.innerHTML = "password mis match found"
    messagecontainerEl.classList.remove("pass")
    messagecontainerEl.classList.add("fail")

    passwordMatch = true
    passwords.forEach((password)=>{
      passwordMatch === true ? password.classList.remove("pass") + password.classList.add("fail") : "" 
  });
  return false;
  }
}

//Store the passwords
//--------------------------------------------------//
const storeFormData = ()=> {
  storedData = {
    fullName : formEL.name.value,
    PhoneNumber : formEL.phone.value,
    emailAddress : formEL.email.value,
    websiteUrl : formEL.website.value,
    password : formEL.password1.value
  }
  console.log(storedData)
}
//lets start processing the form data
//--------------------------------------------------//
const processFormData = (event) => {
  //(function)
  //alert("Processing..")
  event.preventDefault();
  //form validation
  let check1 = validateForm();
  //Check password match
  // if(check1 === true){
  // let check2= checkPassword();}  
  let check2 = check1 ? checkPassword() : false;

  // Now the data is ready , please  save it 
  check1  && check2 ? storeFormData() : console.log("Somthing is wrong");  
};
//----------------------------------------------------//
//Event listeners
formEL.addEventListener("submit", processFormData); //submit click time run function