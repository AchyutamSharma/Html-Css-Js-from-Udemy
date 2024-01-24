let  btn = document.getElementById("btn");

function Await(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Your data = ",dataId);
            resolve("This is Async-Await..");
        },2000);
    });
}

// This is Example of IIFE :-
(async function(){
        console.log("fetching your data 1...");
        await Await(1);
        console.log("fetching your data 2...");
        await Await(2);
        console.log("fetching your data 3...");
        await Await(3);
        console.log("fetching your data 4...");
        await Await(4);
        console.log("fetching your data 5...");
        await Await(5);
})();





// async function newOne(){
//     console.log("fetching your data 1...");
//     await Await(1);
//     console.log("fetching your data 2...");
//     await Await(2);
//     console.log("fetching your data 3...");
//     await Await(3);
//     console.log("fetching your data 4...");
//     await Await(4);
//     console.log("fetching your data 5...");
//     await Await(5);
// }





// btn.addEventListener("click",()=>{
//     newOne();
// });

