
function changeTheme() {
  // select the body element
  var body = document.querySelector("body");
  // check the current theme
  if (body.classList.contains("dark")) {
    // remove the dark theme class and add the light theme class
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    // remove the light theme class and add the dark theme class
    body.classList.remove("light");
    body.classList.add("dark");
  }
}  
let a=25,b=56,c=a+b;
console.log
(c);


