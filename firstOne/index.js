
var yourname = prompt("Hey!! \n What is your name??");
document.querySelector("h3").innerHTML = "Welcome " + yourname;
document.querySelector("h4").innerHTML = "This is My first javaScript Website. ";


// After this line I was copy from google.
const text = document.querySelector("h3");

text.addEventListener('mouseover', () => {
  text.style.color = 'blue';
});

text.addEventListener('mouseout', () => {
  text.style.color = 'White';
});

