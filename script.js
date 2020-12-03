//Array of Objects.
var questionNumList = [
    "Question 1 of 7 ",
    "Question 2 of 7 ",
    "Question 3 of 7 ",
    "Question 4 of 7 ",
    "Question 5 of 7 ",
    "Question 6 of 7 ",
    "Question 7 of 7 "
]

var questions = [

    {
        question: " Who is first persident of America? ",
        options: ["A: James Patterson", "B: George Washington", "C: Hemingway", "D:Micheal Jackson"],
        answer: "B: George Washington"
    },

    {
        question: " What is Javascript? ",
        options: ["A: Name of coffeebean", "B: Programming langauge", "C: Coffee", "D:Name of"],
        answer: "B: Programming langauge"
    },

    {
        question: " 3+4 ? ",
        options: ["A: 6", "B: 1", "C: 7", "D: 6"],
        answer: "C: 7"
    },

    {
        question: " What school Harry Potter attend ? ",
        options: ["A: Northwestern", "B: Harvard", "C: Columbia", "D:Hogwarts"],
        answer: "D:Hogwarts"
    },

    {
        question: " How many days in the month of April ? ",
        options: ["A: 29days", "B: 28days", "C: 30days", "D:31days"],
        answer: "C: 30days"
    },

    {
        question: " What color is banana? ",
        options: ["A: Green", "B: Yellow", "C: Orange", "D: Blue"],
        answer: "B: Yellow"
    },


    {
        question: " Who played movie 007 the most ? ",
        options: ["A: Sean Connery", "B: Daniel Craig", "C: Pierce Brosnan", "D: Rodger Moore"],
        answer: "A: Sean Connery"
    }

]
//Assign code
var remaining = document.querySelector(".timeremaining");

var questionCounter = 0;
var correctCounter = 0;
var incorrectCounter = 0;
var score = 0;
var userInitials;
var highscore = JSON.parse(localStorage.getItem("highscores")) || []
var timeleft = 60;

var startButton = document.querySelector("#startBtn");
var userscore = document.querySelector(".user-score");
var questionNumber = document.querySelector(".question-number");
var questionText = document.querySelector(".question-text");
var optionContainer = document.querySelector(".option-container");
var option1 = document.querySelector(".option1");
var option2 = document.querySelector(".option2");
var option3 = document.querySelector(".option3");
var option4 = document.querySelector(".option4");
//container boxes
var hb = document.querySelector("#hb");
var qb = document.querySelector("#qb");
var rb = document.querySelector("#rb");

var tBtn = document.querySelector("#tryagainBtn");

var optBtnA = document.querySelector("#optBtnA");
var optBtnB = document.querySelector("#optBtnB");
var optBtnC = document.querySelector("#optBtnC");
var optBtnD = document.querySelector("#optBtnD");

//functions
function iterate() {

    if (questionCounter < 7) {
        // comparing with previous answer to match buttons and options 
        var currentAnswer = ""
        if (this.textContent == "A") {
            currentAnswer = questions[questionCounter].options[0]

        }
        else if (this.textContent == "B") {
            currentAnswer = questions[questionCounter].options[1]
        }

        else if (this.textContent == "C") {
            currentAnswer = questions[questionCounter].options[2]
        }

        else if (this.textContent == "D") {
            currentAnswer = questions[questionCounter].options[3]
        }
 
        //validating answer and  counting scores
        if (currentAnswer == questions[questionCounter].answer) {
            score += 2;
            correctCounter++;

        }
        if (currentAnswer !== questions[questionCounter].answer) {
            score -= 1
            incorrectCounter++;
            timeleft -= 5;
        }

        //render question text into DOM 

        questionNumber.textContent = questionNumList[questionCounter]

        questionText.textContent = questions[questionCounter].question
        option1.textContent = questions[questionCounter].options[0]
        option2.textContent = questions[questionCounter].options[1]
        option3.textContent = questions[questionCounter].options[2]
        option4.textContent = questions[questionCounter].options[3]
        //add user scores 
        userscore.textContent = "Your Current score is: " + score + "\nYou have gotten " + correctCounter + " questions correct and "
            + incorrectCounter + " incorrect."


    }
  

    questionCounter++
    saveScore()

}

//save score to local Storage

function saveScore() {
    highscore = 0;
    localStorage.setItem("userScores", JSON.stringify(
        {
            totalCorrect: correctCounter,
            totalIncorrect: incorrectCounter,
            totalScore: score
        }))

    if (highscore < score) {
        localStorage.setItem("highscores", JSON.stringify({
            highscore: score
            , initial: userInitials
        }))
    }
}

var totalQuestionC = document.querySelector("#correct")
var totalQuestionI = document.querySelector("#wrong")
var total = document.querySelector("#total")
var highScore = document.querySelector("#highScore")
var winnerInitial = document.querySelector("#winnerInitial")

function startQuiz() {
    userInitials = prompt("Please enter your initial.")
    iterate();
    hb.setAttribute("class", "hide")
    qb.setAttribute("class", "quiz-box custom-box")

    timeleft = 60;
    var interval = setInterval(function () {

        timeleft--;
        remaining.textContent = timeleft
        if (timeleft <= 0 || questionCounter >= 8) {

            clearInterval(interval);
            qb.setAttribute("class", "hide");
            tBtn.setAttribute("class", "btn");

        // render score results into result-counter 
            totalQuestionC.textContent = correctCounter;
            totalQuestionI.textContent = incorrectCounter;
            total.textContent = score;
            highScore.textContent = score;
            winnerInitial.textContent = userInitials;

            rb.setAttribute("class", "result-box custom-box")

        }
    }, 1000)


}
//return to first start . 

function bktoStart() {

    hb.setAttribute("class", "home-box custom-box");
    rb.classList.add("hide");
    tBtn.classList.add("hide");
    questionCounter = 0;
    score = 0;
    correctCounter = 0;
    incorrectCounter = 0;

}

//Invocations

startButton.addEventListener("click", startQuiz)
optBtnA.addEventListener("click", iterate)
optBtnB.addEventListener("click", iterate)
optBtnC.addEventListener("click", iterate)
optBtnD.addEventListener("click", iterate)

tBtn.addEventListener("click", bktoStart)

























