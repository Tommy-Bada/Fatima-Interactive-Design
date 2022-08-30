// Bastard Rotation Animation
let boxContainer = document.querySelector("#service-box-container")
//Hover in function
function expand(e){
    if(e.target.classList.contains("service-box")){
        e.target.firstElementChild.style.transform = "translate(10rem, 12rem) rotate(90deg)"
        e.target.firstElementChild.style.height = "12rem"

        e.target.firstElementChild.nextElementSibling.style.transform = "translate(0rem, 2rem) rotate(90deg)";

        e.target.lastElementChild.style.opacity = "1";
        e.target.lastElementChild.style.transform = "translate(-10rem, -5.5rem) rotate(90deg)";
    }
}
//Hover out function
function shrink(e){
    if(e.target.classList.contains("service-box")){
        e.target.firstElementChild.style.transform = "translate(0rem, 0rem) rotate(90deg)"
        e.target.firstElementChild.style.height = "6rem"

        e.target.firstElementChild.nextElementSibling.style.transform = "rotate(90deg) translate(15rem, 12rem)";

        e.target.lastElementChild.style.opacity = "0";
        e.target.lastElementChild.style.transform = "rotate(90deg) translate(5rem,14rem)";
    }
}

boxContainer.addEventListener("mouseover", expand)
boxContainer.addEventListener("mouseout", shrink)


//Hamburger Menu
document.getElementById("hamburger-icon").addEventListener("click", function(){
    let mobileMenu = document.querySelector("#mobile-menu");
    let hamburgerLongLine = document.querySelectorAll(".hamburger-line-1");
    let hamburgerShortLine = document.querySelectorAll(".hamburger-line-2");
    if(mobileMenu.classList.contains("slidedown") == false ){
        mobileMenu.classList.add("slidedown");
        mobileMenu.style.opacity = 1
        mobileMenu.style.transform = ("translateY(0vh)")
        hamburgerShortLine[0].style.width = "5rem"
        hamburgerShortLine[1].style.width = "5rem"
    }
    else{
        mobileMenu.classList.remove("slidedown");
        mobileMenu.style.opacity = 0
        mobileMenu.style.transform = ("translateY(-100vh)")
        hamburgerShortLine[0].style.width = "3rem"
        hamburgerShortLine[1].style.width = "3rem"
    }
});





//Testimomial Animation
let testimonialSection = document.querySelector("#section-5")
//Hover in function
function slideAndShow(e){
    if(e.target.classList.contains("profile-container")){
        e.target.lastElementChild.style.opacity = "1"
        e.target.firstElementChild.lastElementChild.firstElementChild.style.opacity = 1
        e.target.firstElementChild.lastElementChild.lastElementChild.style.opacity = 1
        e.target.firstElementChild.lastElementChild.firstElementChild.style.transform = "translateX(0rem)"
        e.target.firstElementChild.lastElementChild.lastElementChild.style.transform = "translateX(0rem)"
    }
}
function slideAndHide(e){
    if(e.target.classList.contains("profile-container")){
        e.target.lastElementChild.style.opacity = "0.05"
        e.target.firstElementChild.lastElementChild.firstElementChild.style.opacity = 0
        e.target.firstElementChild.lastElementChild.lastElementChild.style.opacity = 0
        e.target.firstElementChild.lastElementChild.firstElementChild.style.transform = "translateX(-10rem)"
        e.target.firstElementChild.lastElementChild.lastElementChild.style.transform = "translateX(-10rem)"
    }
}


testimonialSection.addEventListener("mouseover", slideAndShow)
testimonialSection.addEventListener("mouseout", slideAndHide)