//Array of Objects.
var questionNumList = [
    "Question 1 of 5 ",
    "Question 2 of 5 ",
    "Question 3 of 5 ",
    "Question 4 of 5 ",
    "Question 5 of 5 "
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
    }

]
//Assign code
var remaining = document.querySelector(".timeremaining");

var score = 0;
var questionCounter = 0;
var correctCounter = 0
var incorrectCounter = 0

var userscore = document.querySelector(".user-score");
var startButton = document.querySelector("#startBtn");
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

    if (questionCounter < 5) {
        // comparing with previous answer if it is correct or not depending on which choice they pick line 76 - 106
        var previousAnswer = ""
        if (this.textContent == "A") {
            previousAnswer = questions[questionCounter - 1].options[0]
            // console.log(previousAnswer)
        }
        else if (this.textContent == "B") {
            previousAnswer = questions[questionCounter - 1].options[1]
        }

        else if (this.textContent == "C") {
            previousAnswer = questions[questionCounter - 1].options[2]
        }

        else if (this.textContent == "D") {
            previousAnswer = questions[questionCounter - 1].options[3]
        }

        if (questionCounter != 0) {

            if (previousAnswer == questions[questionCounter - 1].answer) {
                score += 2
                correctCounter++
                //  console.log("correct " + score + "      " +correctCounter)
            }
            if (previousAnswer !== questions[questionCounter - 1].answer) {
                score -= 1
                incorrectCounter++
            }

        }
        // add question text and options.. line 109 -116 means only one page question & options

       
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
    localStorage.setItem("scorenumber", score);
}


var totalQuestionC = document.querySelector("#correct")
var totalQuestionI = document.querySelector("#wrong")
var total = document.querySelector("#total")

function startQuiz() {
    iterate();
    hb.setAttribute("class", "hide")
    qb.setAttribute("class", "quiz-box custom-box")
    var timeleft = 30;
    var interval = setInterval(function () {
        timeleft--;
        remaining.textContent = timeleft
        if (timeleft <= 0 || questionCounter >= 6) {
            clearInterval(interval);
            qb.setAttribute("class", "hide");
            tBtn.setAttribute("class", "btn");
            totalQuestionC.textContent = correctCounter;
            totalQuestionI.textContent = incorrectCounter;
            total.textContent = score;
            rb.setAttribute("class", "result-box custom-box")

        }
    }, 1000)


}
//return to first homepage 
function bktoStart() {

    hb.setAttribute("class","home-box custom-box");
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
// tBtn.addEventListener("click", iterate)























