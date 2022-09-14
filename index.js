// Your Code Here
let userName = window.prompt("Please enter your name:")
let userScore = 0
let playAgain = true

//function to play the game

function playGame() {
    for(let i = 0; i < questions.length; i++) {
        let question = questions[i]
        let userAnswer = window.prompt (question.text)
        if(userAnswer === question.correctAnswer){
            userScore = userScore + 10
            console.log("Correct")
        }
        

    }
    window.alert("Your score is: "+userScore)  
}

//play again prompt

while (playAgain === true){
    playGame() 
     
    let userChoice = window.prompt("Would you like to play the game again? Answer yes or no.")
    if (userChoice === "yes") {
        //line 30 added so score become 0 again upon playing again.
        userScore = 0        
        playAgain = true
            
    } else {
        playAgain = false 
        window.alert("Thanks for playing the game!")
    }
}
