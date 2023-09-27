let iconList = document.querySelector(".iconList");
let list = document.querySelector(".list");
let listLi = document.querySelectorAll(".list ul li");
let iconFalse = document.querySelector(".false");
let scrollUp = document.querySelector(".up");
let navbar = document.querySelector("nav");
let myLi = document.querySelectorAll(".myLi");
let act = document.querySelectorAll(".mytext");
let myimg = document.querySelectorAll(".myimg");
let myDiv = document.querySelectorAll(".myDiv");
let myImgDiv = document.querySelectorAll(".myImgDiv");

iconList.addEventListener("click", (e) => {
    list.style.display = "block";
});

iconFalse.addEventListener("click", (e) => {
    list.style.display = "none";
});

listLi.forEach(ele=>{
    ele.onclick = function(){
        list.style.display = "none";
    }
})

for(let i = 0; i < myLi.length; i++) {
    myLi[i].addEventListener("click",()=>{
        for(let j = 0; j < myLi.length; j++){
            myLi[j].classList.remove("active");
            act[j].classList.remove("act");
            myimg[j].classList.remove("act");
        };
        myLi[i].classList.add("active");
        act[i].classList.add("act");
        myimg[i].classList.add("act");
    })
}

for(let x = 0; x < myDiv.length; x++) {
    myDiv[x].addEventListener("click",()=>{
        for(let y = 0; y < myDiv.length; y++){
            myDiv[y].classList.remove("divAct");
            myImgDiv[y].classList.remove("act");
        };
        myDiv[x].classList.add("divAct");
        myImgDiv[x].classList.add("act");
    })
}

window.onscroll = function(){
    if(window.scrollY >= 20){
        scrollUp.style.display = "block";
        navbar.classList.add("shadow-xl");
    }
    else{
        scrollUp.style.display = "none";
        navbar.classList.remove("shadow-xl");
    }
}

scrollUp.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})