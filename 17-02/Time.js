
let myCreatedDate = new Date("1-13-2024")
//  In above line you need to write like this :- Date("MM-DD-YYYY")


console.log(myCreatedDate)
console.log("Date:-",myCreatedDate.getDate())
console.log("Day(0-6):-",myCreatedDate.getDay())
console.log("Month:-",myCreatedDate.getMonth() + 1)// start from 0 in js
console.log("Full Year:-",myCreatedDate.getFullYear())

arrOfDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
let todayDate = new Date()
inOneLine = `Date :-${todayDate.getDate()} Day:- ${arrOfDay[todayDate.getDay()]} Month:- ${todayDate.getMonth()+1} Year:- ${todayDate.getFullYear()}`
console.log(inOneLine)



let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Math.floor(Date.now()/1000)) //if you make AirBnb app then it will use in room booking for date and time compare


let newTodayDate = todayDate.toLocaleString('default',{
    weekday: "long",
    era: "long", // AD :- it not use. in this Era :)
    dayPeriod: "long", // It show afternoon , morning, night

})
console.log("This is Era and Weekday:- ",newTodayDate)

