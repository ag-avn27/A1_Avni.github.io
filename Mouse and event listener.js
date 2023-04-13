const element = document.getElementById("myBtn");
element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Kr hi lia na mujhe click !!!! ";
});
 
 function myFunction() {
    document.getElementById("demo").innerHTML += "Heyy, Wassup? ";
  }
  function mouseDown() {
    document.getElementById("myP").style.color = "red";
  }
  
  function mouseUp() {
    document.getElementById("myP").style.color = "blue";
  }
  function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }