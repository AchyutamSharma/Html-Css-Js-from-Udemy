/*
You are creating a website for your college. Create  a class User with 2 properties, Name & Email. It also has a method called viewData() that allow user to view website data.
*/

let data = "some Importent Information";

let nameOfUser = prompt("Enter your Name...");
let emailofUser = prompt("Enter your Email...");
let txtofUser = document.getElementById("txt");
class User{
    constructor(userName,Email){
        this.userName = userName;
        this.Email = Email;
    }
    viewData(){
        console.log(`Your Data are \n UserName : ${this.userName} \n Email :- ${this.Email}`);
        txtofUser.innerText = `Your Data are \n UserName : ${this.userName} \n Email :- ${this.Email}`;
    }
}


let student1 = new User(nameOfUser,emailofUser).viewData();

let student2 = new User("Bhupendar Jogi","bhopu@gmail.com");
