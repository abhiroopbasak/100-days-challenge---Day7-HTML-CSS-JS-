function perimeter() {
  var side1 = document.getElementById("side1").value;
  var side2 = document.getElementById("side2").value;
  var side3 = document.getElementById("side3").value;
  var perimeter = parseFloat(side1) + parseFloat(side2) + parseFloat(side3);
  var result = document.getElementById("p");
  result.innerHTML =  "Perimeter is " +perimeter;
}

function area() {
  var base = document.getElementById("base").value;
  var height = document.getElementById("height").value;
  var area = (base*height)/2 ;
  var result = document.getElementById("a");
  result.innerHTML =  "Area is " +area;
}