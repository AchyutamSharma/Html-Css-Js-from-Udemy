let txt = document.getElementById("txt");
let txt2 = document.getElementById("txt2");



let p1 = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        reject(new Error("This is promise error."));
        txt.innerText = "This is promises Error After 3sec....";
        console.log("This is promises of P1");
        console.log(p1);
        
    },3000);
    
});

p1.catch((error)=>{
    console.log("Some error of P1.... in this line we use catch method.");
});


/*
let p2 = new Promise((resolve,reject)=>{
    

    setTimeout(()=>{
        txt2.innerText = "This is Promis Resolve After 5 sec....";
        resolve("Your Error is Solved. :)");
        console.log("This is promises of P2.");
        console.log(p2);
    },3000);
    
});


p2.then((value)=>{
    console.log(value);
})
*/
