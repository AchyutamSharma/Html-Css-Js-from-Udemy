


/*
const orderPizza = new Promise((resolve,reject)=>{
    console.log("We take your Order.\n Please wait for conformation.");    
    setTimeout(()=>{
        let pizzaBaked = false;
        if (!pizzaBaked) {
            reject("Pizza order is Failed.");
        } else {
            resolve("Pizza is ready.");
        }
    },4000);
}); 
orderPizza
        .then((msg) => console.log(msg))
    .catch((error)=> console.log(error));

*/

function prom(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("This is your data : 'du16sg4f468g1d6fds' ");
            resolve("Successfully you get your Data...");
        },6000);
    });
}
setTimeout(()=>{
    console.log("Please Wait some more Time,\nYour data on the way.....");
},3000);
    console.log("fetching your data.....");
let p = prom();
p.then((val) => console.log(val));


/*
let p = new Promise((ha,nahi)=>{
    setTimeout(()=>{
        ha("Yeh hai resolve ka value 'Ha'.... ");
        console.log("Or bhai hogaya print");
    },4000);
});
p.then((value)=>{
    console.log(value);
    console.log("This is then() value......");
});
*/



