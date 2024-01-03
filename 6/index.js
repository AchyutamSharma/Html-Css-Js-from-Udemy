let tryGetAtt = document.querySelector(".para-1"); 
tryGetAtt.innerHTML = "This Text Change by JavaScript.\n We use getAttribute in this line.";

console.log(tryGetAtt);

let idPara1 = tryGetAtt.getAttribute("class");
console.log(idPara1);

let namePara1 = tryGetAtt.getAttribute("name");
console.log(namePara1);

let h2 = document.querySelector("h2");
console.log(h2.getAttribute("class"));


let div2 = document.querySelector("#div2-h1"); // h1 is inside the div-2
console.log(div2);


let changeValue = div2.setAttribute("class","Hello-H1");
console.log(changeValue);
console.log(div2);

let ChangeclassName = document.querySelector(".old");
ChangeclassName.setAttribute("class","NewClass");
console.log(ChangeclassName);

