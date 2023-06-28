function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result;

  // Conversion logic
  if (fromUnit === "mm" && toUnit === "cm") {
    result = inputValue / 10;
  } else if (fromUnit === "mm" && toUnit === "meter") {
    result = inputValue / 1000;
  } else if (fromUnit === "mm" && toUnit === "km") {
    result = inputValue / 1000000;
  } else if (fromUnit === "mm" && toUnit === "mile") {
    result = inputValue / 1609344;
  } else if (fromUnit === "cm" && toUnit === "mm") {
    result = inputValue * 10;
  } else if (fromUnit === "cm" && toUnit === "meter") {
    result = inputValue / 100;
  } else if (fromUnit === "cm" && toUnit === "km") {
    result = inputValue / 100000;
  } else if (fromUnit === "cm" && toUnit === "mile") {
    result = inputValue / 160934.4;
  } else if (fromUnit === "meter" && toUnit === "mm") {
    result = inputValue * 1000;
  } else if (fromUnit === "meter" && toUnit === "cm") {
    result = inputValue * 100;
  } else if (fromUnit === "meter" && toUnit === "km") {
    result = inputValue / 1000;
  } else if (fromUnit === "meter" && toUnit === "mile") {
    result = inputValue / 1609.34;
  } else if (fromUnit === "km" && toUnit === "mm") {
    result = inputValue * 1000000;
  } else if (fromUnit === "km" && toUnit === "cm") {
    result = inputValue * 100000;
  } else if (fromUnit === "km" && toUnit === "meter") {
    result = inputValue * 1000;
  } else if (fromUnit === "km" && toUnit === "mile") {
    result = inputValue / 1.60934;
  } else if (fromUnit === "mile" && toUnit === "mm") {
    result = inputValue * 1609344;
  } else if (fromUnit === "mile" && toUnit === "cm") {
    result = inputValue * 160934.4;
  } else if (fromUnit === "mile" && toUnit === "meter") {
    result = inputValue * 1609.34;
  } else if (fromUnit === "mile" && toUnit === "km") {
    result = inputValue * 1.60934;
  } else {
    result = inputValue; // No conversion needed
  }

  document.getElementById("result").innerText = result.toFixed(2);
}
