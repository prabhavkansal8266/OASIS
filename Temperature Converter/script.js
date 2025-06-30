 
    function convertTemp() {
      const tempInput = document.getElementById("temperature").value;
      const scale = document.getElementById("scale").value;
      const resultDiv = document.getElementById("result");

      if (tempInput === "" || isNaN(tempInput)) {
        resultDiv.textContent = "Please enter a valid number.";
        return;
      }

      const temp = parseFloat(tempInput);
      let converted = 0;
      let unit = "";

      if (scale === "fahrenheit") {
        converted = ((temp - 32) * 5) / 9;
        unit = "°C";
      } else if (scale === "celsius") {
        converted = (temp * 9) / 5 + 32;
        unit = "°F";
      } else if (scale === "kelvin") {
        converted = temp - 273.15;
        unit = "°C";
      }

      resultDiv.textContent = `${converted.toFixed(4)} ${unit}`;
    }

