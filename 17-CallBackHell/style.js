/* CallBack Hell*/

function getData(dataId, getNextData){
        setTimeout(()=>{
            console.log("Data ", dataId);
            if(getNextData){
                getNextData();    
            }
        },2000);
}

// Callback Hell(Nested Callback):- ek Callback ke andar dusra Callback (repetation) is called Callback Hell/ Nested Callback
getData(1,()=>{
    console.log("getting you data 2 ......");
    getData(2,()=>{
        console.log("getting you data 3 ......");
        getData(3,()=>{
            console.log("getting you data 4 ......");
            getData(4,()=>{
                console.log("getting you data 5 ......");
                getData(5,()=>{
                    console.log("Here is your All Data.");
                });
            });
        });
    });
});
