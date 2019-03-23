const loginform = document.querySelector("#myform");
loginform.addEventListener("submit", function(e){
e.preventDefault();
let pass1 = e.target.password.value;
let pass2 = e.target.password1.value;

if(pass1 ===pass2){
  console.log(pass1);
  console.log(pass2);
}else{
  document.querySelector("#demo").textContent = "Password does not match"
}

console.log(e.target.email.value)
console.log(e.target.password.value)
console.log(e.target.password1.value)


e.target.email.value = '';
e.target.password.value = '';
e.target.password1.value = '';

document.querySelector("#demo").style.color="red";
document.querySelector("#demo").setTimeout(() => {
  
}, timeout);

})
