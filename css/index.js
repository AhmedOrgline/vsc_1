let article = document.querySelector("article");
let darkmode_btn = document.querySelectorAll(".darkmode");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");
let Search = document.querySelector(".S");
let img_1 = document.querySelector(".img_1");
let img_2 = document.querySelector(".img_2");
let img_3 = document.querySelector(".img_3");
let img_4 = document.querySelector(".img_4");
let comp = document.querySelectorAll(".comp div");
let div_1 = document.querySelector(".this");
let sections = document.querySelectorAll("section")

sections[0].classList.add("section")
sections[1].classList.add("section")

window.onscroll = function(){
    sections.forEach((section , index , group) => {
        if(window.scrollY >= group[index].offsetTop + 100){
            group[index].classList.add("section");
            if(group[index+1]){
                group[index+1].classList.add("section");
            }
            
        }
    })
}
/* window.scrollY >= article.offsetTop && window.scrollY < gallery.offsetTop - 100 */

window.onload = function(){
    article.style.opacity = '1';
}
darkmode_btn.forEach(function(e){
e.addEventListener('click' , function(){
    document.body.classList.toggle("bg-dark");
    document.querySelectorAll("div").forEach((e)=>e.classList.toggle("text-light"))

    if(document.body.getAttribute("class") !== "bg-light"){
        navbar.classList.add("navbar-dark");
        header.classList.add("bg-dark");
        e.classList.add("btn-dark");        
        e.children[0].className = "fa-regular fa-sun";        
        Search.classList.add("bg-dark");
        Search.classList.add("text-light");
        Search.classList.add("border-secondary");
        img_1.src = "img/dark_mode.png";
        img_2.src = "img/dark_mode_1.png";
        img_3.src = "img/dark_mode_2.png";
        img_4.src = "img/dark_mode_3.png";
        document.querySelector(".comp i").style.cssText = "background-color : #666 !important";
        comp.forEach((e)=>e.classList.add("border-secondary"));
    }else{
        navbar.classList.remove("navbar-dark");
        header.classList.remove("bg-dark");
        e.classList.remove("btn-dark");
        e.children[0].className = "fa-regular fa-moon";
        Search.classList.remove("bg-dark");
        Search.classList.remove("text-light");
        Search.classList.remove("border-secondary");
        img_1.src = "img/home-screenshot-copilot-light.png";
        img_2.src = "img/light_mode_0.png";
        img_3.src = "img/light_mode_1.png";
        img_4.src = "img/light_mode_2.png";
        document.querySelector(".comp i").style.cssText = "background-color : #666 !important";
        comp.forEach((e)=>e.classList.remove("border-secondary"));
    }
})  
})