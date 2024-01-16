class Person{

    eat(){
        console.log("He can Eat");
    }        
    sleep(){
        console.log("He can sleep");
    }

}
class Engineer extends Person{
    work(){
        console.log("They can solve problems, build something");
    }
    earn(){
        console.log("Over 10cr. ");
    }
}
class Trader extends Person{
    work(){
        console.log("Trading and business..");
    }
    earn(){
        console.log("Over 30cr. ");
    }
}
class Doctor extends Person{
    work(){
        console.log("Treat Patients...");
    }
    earn(){
        console.log("Over 20cr. ");
    }
}

let akshu  = new Engineer();
let Saitan = new Trader();
let shivam = new Doctor();

