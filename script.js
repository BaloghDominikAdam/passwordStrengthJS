const passwordInput = document.querySelector(".pass-field input")
const eye = document.querySelector(".pass-field i")
const requirementList = document.querySelectorAll(".requirement-list li")


const requirements = [
    {regex: /.{8,}/, index: 0},
    {regex: /[0-9]/, index: 1},
    {regex: /[a-z]/, index: 2},
    {regex: /[^A-Za-z0-9]/, index: 3},
    {regex: /[A-Z]/, index: 4},
]

passwordInput.addEventListener("keyup", (e) =>{
    requirements.forEach(item =>{
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];


        if(isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.style.color = "green"
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.style.color = "black"
        }
    });
});

eye.addEventListener("click", () => {

        if(passwordInput.type === "password"){
            passwordInput.type = "text"
            eye.classList.replace("fa-eye", "fa-eye-slash")
        } else{
            passwordInput.type = "password"
            eye.classList.replace("fa-eye-slash", "fa-eye")
        }
});