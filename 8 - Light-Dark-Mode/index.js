let btn = document.getElementById("btn");

let currMode = "light"; //dark 

btn.addEventListener("click",()=>{
    if (currMode === "light") {
        currMode = "dark";
        Bgdark();
        
    } else {
        currMode = "light";
        Bglight();
    }
});


let Bgdark = ()=>{
    let bgc = document.querySelector("body");
        bgc.style.backgroundColor = "black";
        bgc.style.color = "white";
        btn.style.backgroundColor = "gray";
        btn.style.color = "black";    
    };

let Bglight = ()=>{
    let bgc = document.querySelector("body");
        bgc.style.backgroundColor = "white";
        bgc.style.color = "black";
        btn.style.backgroundColor = "white";
        btn.style.color = "black";    
    };    
