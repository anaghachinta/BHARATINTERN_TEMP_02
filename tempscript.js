function convertTemperature()
{
    var celsius = parseFloat(document.getElementById("celsius").value);
    if (isNaN(celsius)) {
        alert("Please enter a valid number for Celsius.");
        return;
    }
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").textContent = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
}
