
function chaining(DataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Transfer your data " + DataId + "....."); 
            resolve("Data Transfer Successfuly...");
        },2000);
    });
}


// This is called Promise Chaining
chaining(1)
            .then((res)=>{
                return chaining(2);
            })
            .then((res)=>{
                return chaining(3);
            })
            .then((res)=>{
                console.log(res);
            });

