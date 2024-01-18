

let txt = document.getElementById("txt");

let data = "Some impotant Data...";

class person{
    constructor(userName, userNumber){
        this.userName = userName;
        this.userNumber = userNumber;
    }
    viewData(){
        console.log("Data = ", data);
    }
}

class admin extends person{ 

        constructor(userName,userNumber){
            super(userName,userNumber);
            console.log("Data = ", data);
        }
        editData(){            
            data = "Different data...";
            txt.innerText = `User Name = ${this.userName} & Number = ${this.userNumber}`;
        }
}
let teacher = new admin("Akshu","123564").editData(); //if you remove editData(); then you cant display 




