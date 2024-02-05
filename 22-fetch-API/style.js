let div = document.getElementById("divs");
let btn = document.getElementById("btn");

let URL = "https://dog-api.kinduff.com/api/facts";


// let promise = fetch(URL);
// console.log(promise);

const getFatch = async ()=>{

    console.log("getting data....");
    let respond = await fetch(URL);
    console.log(respond);
    let data = await respond.json(); // with out await, data not printed, and without json() data is not readable. 
    console.log(data.facts[0]);
    div.innerText = data.facts[0];
   
};

// async function getImg(){
//     div.style.backgroundImage = '';
//     console.log("Img is printed");
// }

btn.addEventListener("click",()=>{
    getFatch();
    
});

let body = document.querySelector("body")
body.style.backgroundColor = "black";
body.style.textAlign = 'center';
body.style.color = 'white';

btn.style.height = "70px";
btn.style.width = "150px";
btn.style.border = "1px solid black";
btn.style.borderRadius = "15px";
btn.style.color = 'black';
btn.style.backgroundColor = 'white';
btn.style.fontSize = '1.5rem';
btn.style.cursor = 'pointer';

div.style.height = '250px';
div.style.padding = '30px';
div.style.margin = "10px 130px 100px 130px";
div.style.border = "1px solid black";
div.style.borderRadius = "15px";
div.style.color = 'black';
div.style.backgroundColor = 'white';
div.style.fontSize = '2rem';

