
// function passwords(){
//     var pass = document.getElementById('password');
//     var error = document.getElementById('error');
//     var check = document.getElementById('confirm');
//     var user = document.getElementById('user');
//     var email = document.getElementById('email');
//     // var Gender = document.getElementById('Gender');
//     var Gender = document.querySelector('input[name="Gender"]:checked');


// if(user.value == ""||email.value == ""||pass.value == ""||check.value == ""||!Gender){
//     error.innerHTML='please fill all the fields';
//     return false;
// }
// else if(pass.value.length < 6){
//    error.innerHTML="Password must be more than 6 characters ";
//    return false;
// }
// else if(check.value != pass.value)
// {
//     error.innerHTML='please write same password';
//    return false;
// }
// else{
//     alert('the password is good');
// }
// }

// function toggleLogin() {
//     const form = document.getElementById('loginForm');
//     const button = document.querySelector('.toggle-btn');
//     if (form.style.display === 'none' || form.style.display === '') {
//         form.style.display = 'block';
//     } else {
//         form.style.display = 'none';
//     }
// }
// function validatePasswords() {
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirm').value;

//     if (password !== confirmPassword) {
//         alert('Passwords do not match!');
//         return false; 
//     }
//     return true;
// }
function toggleMenu() {
    const menu = document.querySelector('.cheez');
    menu.classList.toggle('show');
}


// function toggleMenu(){
//     const b = document.querySelector(".cheez");
//     b.toggle('show');

// }
