const owner = "Akshutam";
let h2 = document.querySelector("p");
console.dir(h2);
h2.innerText = `${h2.innerText}  ${owner}`;

/*
const fst = document.querySelector(".box-first");
console.dir(fst);
fst.innerText = fst.innerText + `Js Add by ${owner}`;


const sec = document.querySelector(".box-second");
console.dir(sec);
sec.innerText = sec.innerText + `Js Add by ${owner}`;


const trd = document.querySelector(".box-third");
console.dir(trd);
trd.innerText = trd.innerText + `I did it :) \n Add by ${owner}`;

                    // or 
*/
const divs = document.querySelectorAll(".box");
let idx = 1;

for (const val of divs) {
    val.innerText = `divs[${idx}] Js Add by ${owner}`; 
    idx++;
}

/*                  // or 
divs[0].innerText = `divs[0] Js Add by ${owner}`; 
divs[1].innerText = `divs[1] Js Add by ${owner}`; 
divs[2].innerText = `divs[2] Js Add by ${owner}`; 
*/

const sce = document.querySelector("#para-2");
console.dir(sce);
sce.innerText = "This is From Js";

