let txt = document.getElementById("txt");
let txt2 = document.getElementById("txt2");

function getData(dataId,getNextValue){

    setTimeout(()=>{
        txt.innerText = dataId;
        if(getNextValue){
            getNextValue();
        }

    },3000);
}


getData(1,()=>{
    txt2.innerText = "Your Data 2 is fetching...";
    getData(2,()=>{
        txt2.innerText ="Your Data 3 is fetching...";
        getData(3,()=>{
            txt2.innerText ="Your Data 4 is Fetching...";
            getData(4,()=>{
                txt2.innerText = "Your Data Updation is Completed.";
            });
        });
    });
});
