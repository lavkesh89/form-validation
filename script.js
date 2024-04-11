var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

// function validateName(){
//     var name = document.getElementById('contact-name').value;
//     if(name.length == 0){
//         nameError.innerHTML = "Name is required";
//         return false;
//     }
//     if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
//        nameError.innerHTML ='Write full name';
//        return false;
//     }
//     nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
//     return true;
// }

function validateName() { 
    var name = document.getElementById('contact-name').value; // Assuming there's an element with id 'name-error' to display errors

    if (name.length === 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) { // Adjusted regex to ensure there's at least one character before and after the space
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>'; // Changed to 'Valid' instead of 'valid' for consistency
    return true;
}
