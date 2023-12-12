
const change = document.querySelector(".lists");
console.log(change);
/* getAttribute :- To get the Attribute Value */
console.log(change.getAttribute("name"));


let ids = document.querySelector("ol");
ids.setAttribute("name", "OL it change by the setAttribute");
console.log(ids);
ids.style.backgroundColor = "black";
ids.style.color = "white";
ids.style.fontSize = "36px";



let paratxt = document.querySelectorAll("#li-discription");
// it change the inner Txt of the li but never change the org txt. 
paratxt[2].innerText = "Hello";
console.log(paratxt[2].textContent); // it show the "Hello" only.
paratxt[0].style.fontSize = "20px";
paratxt[0].innerText += " `It was add from js file.`";

