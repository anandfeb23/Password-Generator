let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
})


genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*_+><?:";


//Generate Password Function -

function generatePassword(){
    let genPassword = "";
    let allChars = "";

     allChars += lowercase.checked ? lowerChars : "";
     allChars += uppercase.checked ? upperChars : "";
     allChars += numbers.checked ? allNumbers : "";
     allChars += symbols.checked ? allSymbols : "";



    let i = 1;
    while(i<= inputSlider.value){

        genPassword +=  allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }


    return genPassword;
}

copyIcon.addEventListener('click', () => {
    if (passBox.value !== "") {
        // Create a temporary input element
        const tempInput = document.createElement('input');
        // Set its value to the generated password
        tempInput.value = passBox.value;
        // Append it to the document body
        document.body.appendChild(tempInput);
        // Select its content
        tempInput.select();
        // Execute the copy command
        document.execCommand('copy');
        // Remove the temporary input element
        document.body.removeChild(tempInput);

        // Update copy icon and provide visual feedback
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";
        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 2000);
    }
});
