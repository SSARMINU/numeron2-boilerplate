document.addEventListener("DOMContentLoaded", function() {
    // List of arithmetic operators
    var operators = ["+", "-", "*", "/", "%"];
    score = 0;

    // Function to generate a random number between min and max
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to generate a random arithmetic operator
    function generateRandomOperator() {
        var randomIndex = Math.floor(Math.random() * operators.length);
        return operators[randomIndex];
    }

    // Function to apply the operator to two numbers
    function applyOperator(number1, number2, operator) {
        switch (operator) {
            case "+":
                return number1 + number2;
            case "-":
                return number1 - number2;
            case "*":
                return number1 * number2;
            case "/":
                return Math.floor(number1 / number2); // Using Math.floor to handle division with remainder
            case "%":
                return number1 % number2;
            default:
                return NaN; // Invalid operator
        }
    }

    // Function to display the numbers and result
    function displayNumbersAndResult(number1, number2, result) {
        document.getElementById("number1").textContent = number1;
        document.getElementById("number2").textContent = number2;
        document.getElementById("result").textContent = result;
    }
    function updateTimer(timeLeft) {
        document.getElementById("timer").textContent =  timeLeft ;
    }
    function updateScore() {
        score++; // Increment score
        localStorage.setItem("score", score); 
       
    }

    // Function to start the game
    function startGame() {
        var number1 = generateRandomNumber(1, 100); // Generate random number between 1 and 100
        var number2 = generateRandomNumber(1, 100); // Generate random number between 1 and 100
        var operator = generateRandomOperator(); // Generate random operator
        var result = applyOperator(number1, number2, operator); // Apply operator to numbers

        // Display the numbers and result to the player
        displayNumbersAndResult(number1, number2, result);
        
        // Function to handle player's guess
        function handleGuess(guess) {
            if (guess === operator) {
                console.log("Correct answer!");
                updateScore();
            } else {
                console.log("Incorrect answer. The correct operator was: " + operator);
            }
            setTimeout(startGame, 2000); 
            
        }

        // Add event listeners to operator buttons
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
       
         
    }
    var duration = 30; // Duration of the game in seconds
        var timer = setInterval(function() {
            duration--;
            updateTimer(duration);
            if (duration === 0) {
                clearInterval(timer);
                window.location.href = "gameover.html";  
            }
        }, 1000);
    
    // Start the game when the page loads
    startGame();
});
