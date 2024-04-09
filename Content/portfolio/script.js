let ham=document.querySelector(".hamburger");
let isVisible=false;
ham.addEventListener("click",()=>{
    let navObj=document.querySelector("header nav");
    let uls=document.querySelector("header nav ul");
    if (isVisible) 
    {
        uls.style.display="none";
        isVisible=false;
    }
    else
    {
        uls.style.display="flex";
        uls.style.flexDirection="column";
        uls.style.alignItems="center";
        document.querySelector("header").style.justifyContent="center";
        document.querySelector(".right").style.width="100%";
        navObj.style.width="100%";
        isVisible=true;
    }
});