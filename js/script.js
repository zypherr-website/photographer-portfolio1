// SCROLL EFFECT JS
const header = document.querySelector(".header");

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 250){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
})

// POPUP FORM JS
let myForm = document.getElementById("myForm");

function popup(){
    if(myForm.style.display === "block"){
        myForm.style.display = "none";
    }
    else{
        myForm.style.display = "block";
    }
}