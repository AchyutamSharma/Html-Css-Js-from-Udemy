// This file was upload form git

let btn = document.querySelector("#btn-1");

btn.ondblclick = (event) =>{
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX, event.clientY);

}

let btn2 = document.querySelector("#btn-2");
btn2.addEventListener("click",() =>{
    console.log("This is the example of addEventListener.");
});






