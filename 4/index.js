const bodys = document.querySelector("body");
bodys.style.backgroundColor = "black";
 bodys.style.color = "white";
console.log(bodys);

    /* create btn from here using Create Element */
let creates = document.createElement("button");
console.log(creates);
creates.innerText = "Click Me";
creates.style.height = "50px";
creates.style.width = "100px";
creates.style.backgroundColor = "gray";
creates.style.fontSize = "20px";
creates.style.fontWeight = "bold";
creates.style.backgroundColor = "yellow";
creates.style.borderRadius = "20px";
console.log(creates);

    /* where we need to show the btn */
let showbtn = document.querySelector("div");
showbtn.prepend(creates); 
console.log(showbtn);


/* create a H3 tag */
let  createsH3 = document.createElement("h3");
console.log(createsH3);
createsH3.innerText = "This is Append. It add on the end of nord(inside) & It was add from the JavaScript file.";
        /* where we show the H3 tag */
const showH3 = document.getElementById("newlist");
showH3.append(createsH3);
console.log(showH3);


        /* Create 'p' tag for append()*/
const createP1 = document.createElement("p");
console.log(createP1);
createP1.innerText = ".append():- Add at the end of the nodes(inside).\n & This is Example of .after()";

const showP1 = document.getElementById("li-1");
showP1.after(createP1);
console.log(showP1);

const createP2 = document.createElement("p");
createP2.innerHTML = "  .prepend():- Add at the strt of the nodes(inside).\n & This is Example of .before().";
const showP2 = document.getElementById("li-3");
showP2.before(createP2);

const createP3 = document.createElement("p");
createP3.innerHTML = " .before():-  It Add before the node(outside). \n & This is Example of .before(). ";
const showP3 = document.getElementById("li-4");
showP3.before(createP3);

const createP4 = document.createElement("p");
createP4.innerHTML = ".after():-  It Add After the node(outside). \n & This is Example of .After(). "
const showP4 = document.getElementById("li-4");
showP4.after(createP4);

const remov = document.getElementById("Remove1");
remov.remove();


