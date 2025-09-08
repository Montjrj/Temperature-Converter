// @param {number} Temperature in fahrenheit 
// @param {number} Temperature in Celsius

// Write a function name converToCelsius that will takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function converToCelsius(fahrenheit){
   return (fahrenheit - 32) * 5/9; 
}

// 
    function describeTemperature(fahrenheit){
    const Celsius = converToCelsius(fahrenheit); 

    if (Celsius < 0){
        return "Very Cold"; 
    }else if (Celsius < 20) {
        return " Cold"; 
    }else if (Celsius < 30){
        return "warm";
    }else if (Celsius < 40) {
        return "hot";
    }else {
        return "very hot";
    }
}

const userInput = prompt ("Enter a temperature in Fahrenheit: "); 

if((!isNaN(userInput) && userInput !==null)){

    const fahrenheit = parseFloat(userInput);
    const Celsius = converToCelsius(fahrenheit).toFixed(2);
    const description = describeTemperature(fahrenheit); 

    alert(`${fahrenheit} F is equal to ${Celsius} C. That feels ${description}.`); 
}else{
    alert("Please enter a valid number for the temperature. ");
}


