// defining variables for weather factors (temp in Celcius and wind speed in  km/h)
const temp = 8;
const windSpeed = 21;

// Wind chill function
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp -11.37 * windSpeed ** 0.16 + 0.3965 * temp * windSpeed **0.16);
}

if (temp >= 10 && windSpeed >= 4.8) {
    wc =  calculateWindChill(temp, windSpeed);
} else {
    wc =  "N/A";
}
document.getElementById("tem").innerHTML = "Temperature: "+ temp + "&deg C"
document.getElementById("cond").innerHTML = "Conditions: " + "Mostly Cloudy"
document.getElementById("wind").innerHTML = "Wind Speed: " + windSpeed + " km/h"
document.getElementById("windChill").innerHTML = "Wind Chill: " + Math.round(wc) + "&deg C"
