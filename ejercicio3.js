var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.onclick = function(){
    var fahrenheit = parseInt(document.getElementById("fahrenheit").value);
    var celsius = document.getElementById("celsius");
    var resultado = (fahrenheit - 32) * (5 / 9);
    celsius.innerHTML = resultado;
}