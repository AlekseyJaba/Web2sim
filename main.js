function ShowPass(event){
    if(pass.type == "password"){
        pass.type = "text";
    }
    else{
        pass.type = "password";
    }
}

function registrdate(event){
    event.preventDefault();

    const forms = event.currentTarget;
    const forminf = new FormData(forms);
    console.table({
        "Email": forminf.get("email"),
        "Pass": forminf.get("password")
    })
}

function CheckDate(event){
    const input = event.currentTarget;
    const validate = input.validity;
    let mesege = "";
    if(validate.valueMissing){
        mesege = "Поле не заполнено"
    }
    if(validate.tooShort){
        mesege = `Минимальная длина ${input.minLength}`
    }
    if(validate.typeMismatch){
        mesege = "Неправильный формат ввода"
    }
    if(validate.valid){
        mesege = ""
    }
    input.setCustomValidity(mesege);
    const zak = input.closest(".input-error")
    const ermes = zak.querySelector(".error")
    ermes.textContent = mesege
}
var modal = document.getElementsByClassName("modal")[0];
var btn = document.querySelector('button');
var span = document.getElementsByClassName("close")[0];
var showpass = document.getElementsByClassName("show-pass")[0];
var pass = document.querySelectorAll("input")[1]
var email = document.querySelectorAll("input")[0]
const fin = document.getElementById("fin")
var form = document.querySelector("form");


form.addEventListener("submit", registrdate);
btn.onclick = function (){
    modal.style.display="block";
}

span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
showpass.addEventListener("pointerup", ShowPass);
showpass.addEventListener("pointerdown", ShowPass);
form.querySelectorAll("input").forEach(input => {
    console.log("+");
    input.addEventListener("blur", CheckDate)
})


