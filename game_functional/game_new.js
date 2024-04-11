document.addEventListener("DOMContentLoaded", function() {
    
    var operators = ["+", "-", "*", "/", "%"];
    var score = 0;
    var timerInterval;
    var duration = 21; 

    
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    
    function generateRandomOperator() {
        var randomIndex = Math.floor(Math.random() * operators.length);
        return operators[randomIndex];
    }

   
    function applyOperator(number1, number2, operator) {
        switch (operator) {
            case "+":
                return number1 + number2;
            case "-":
                return number1 - number2;
            case "*":
                return number1 * number2;
            case "/":
                return Math.floor(number1 / number2); 
            case "%":
                return number1 % number2;
            default:
                return NaN; 
        }
    }

    
    function displayNumbersAndResult(number1, number2, result) {
        document.getElementById("number1").textContent = number1;
        document.getElementById("number2").textContent = number2;
        document.getElementById("result").textContent = result;
    }

    
    function updateScore() {
        score++; 
        localStorage.setItem("score", score); 
    }

   
    function handleGuess(guess) {
        if (guess === operator) {
            console.log("Correct answer!");
            updateScore();
        } else {
            console.log("Incorrect answer. The correct operator was: " + operator);
        }
       
        number1 = generateRandomNumber(1, 100); 
        number2 = generateRandomNumber(1, 100); 
        operator = generateRandomOperator(); 
        var result = applyOperator(number1, number2, operator); 

       
        displayNumbersAndResult(number1, number2, result);

        timer(); 
    }

    
    document.getElementById("plus").addEventListener("click", function() {
        handleGuess("+");
    });
    document.getElementById("minus").addEventListener("click", function() {
        handleGuess("-");
    });
    document.getElementById("mul").addEventListener("click", function() {
        handleGuess("*");
    });
    document.getElementById("divide").addEventListener("click", function() {
        handleGuess("/");
    });
    document.getElementById("modulus").addEventListener("click", function() {
        handleGuess("%");
    });

    var timerInterval;

function timer() {
    var duration = 21;
    clearInterval(timerInterval); 

    
    timerInterval = setInterval(function() {
        duration--;
        updateTimer(duration);
        if (duration === 0) {
            clearInterval(timerInterval);
            window.location.href = "gameover.html"; 
        }
    }, 1000); 
}
    
    function updateTimer(timeLeft) {
        document.getElementById("timer").textContent = timeLeft;
    }

   
    var number1 = generateRandomNumber(1, 100);
    var number2 = generateRandomNumber(1, 100); 
    var operator = generateRandomOperator(); 
    var result = applyOperator(number1, number2, operator); 

  
    displayNumbersAndResult(number1, number2, result);
    timer(); 

});
