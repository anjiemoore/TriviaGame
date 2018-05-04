var questions = [
    {
        q: "What does the 'TIE' in TIE Fighter stand for?",
        a1: "A. Turbo Induction Encabulator",
        a2: "B. Twin Ion Engine",
        a3: "C. Techno Incantho Envulcanator",
        a4: "D. Thermal Inverse Engine",
        ca: "a2"
    },
    {
        q: "What planet does Padme represent?",
        a1: "A. Hoth",
        a2: "B. Coruscant",
        a3: "C. Endor",
        a4: "D. Naboo",
        ca: "a4"
    },
    {
        q: "Who was the Chancellor before Palpatine?",
        a1: "A. Chancellor Fillorean",
        a2: "B. Chancellor Velorum",
        a3: "C. Chancellor Pultimo",
        a4: "D. Chancellor Biel Ductavis",
        ca: "a2"
    },
    {
        q: "What micro-organisms are said to be conductors of the Force?",
        a1: "A. Force Ghosts",
        a2: "B. Chlorimidians",
        a3: "C. Mitochondria",
        a4: "D. Midichlorians",
        ca: "a4"
    },
    {
        q: "What is Count Dooku's Sith name?",
        a1: "A. Darth Tyranus",
        a2: "B. Darth Rex",
        a3: "C. Darth Maul",
        a4: "D. Darth Sidious",
        ca: "a1"
    },
    {
        q: "Who was the first Jedi to learn how to return from death as a Force Ghost?",
        a1: "A. Yoda",
        a2: "B. Obi-Wan Kenobi",
        a3: "C. Anakin Skywalker",
        a4: "D. Qui-Gon-Jinn",
        ca: "a4"
    },
    {
        q: "Which planet is Princess Leia from?",
        a1: "A. Jakku",
        a2: "B. Dagobah",
        a3: "C. Alderaan",
        a4: "D. Endor",
        ca: "a3"
    },
    
    {
        q: "What did Luke Skywalker's uncle, Owen, operate on Tatooine?",
        a1: "A. A droid repair service",
        a2: "B. A speeder repair garage",
        a3: "C. A cantina",
        a4: "D. A moisture farm",
        ca: "a4"
    },
    {
        q: "What is Chewbacca's home planet?",
        a1: "A. Bespin",
        a2: "B. Mustafar",
        a3: "C. Kashyyk",
        a4: "D. Endor",
        ca: "a3"
    },
    {
        q: "Who killed Jango Fett?",
        a1: "A. Boba Fett",
        a2: "B. Mace Windu",
        a3: "C. Obi-Wan Kenobi",
        a4: "D. Yoda",
        ca: "a2"
    }
];

var wins = 0;
var losses = 0;
var intervalId;


$(".container").hide();
$("#outOfTimeCard").hide();
$("#start").click(beginQuiz);

function setUpQuestion(question) {
    var beginTimer = function() {
        if (intervalId !== 0) {
            clearInterval(intervalId);
            timer = 30;
        };

        decrement();
        intervalId = setInterval(decrement, 1000);
    }
    var decrement = function() {
        $("#timer").html("<h4>You have " + timer + " seconds left!</h4>");
            if (timer === 0 && !$("#answerCard").is(":visible") && !$("#endingCard").is(":visible")) {
                clearInterval(intervalId);
                outOfTime();
            } else {                
                timer--;
            }
    }
    var correctClick = function() {
        wins++;
        $("#questionCard").hide();
        $("#answerCard").show();
        $("#correctResponse").hide();

        $("#response").text("Correct!");
        $("#responseImage").attr("src", "assets/images/right.gif");

        setTimeout(function(){
           setUpQuestion(nextQuestion()) 
        }, 3000);
    }
    var wrongClick = function() {
        losses++;
        $("#questionCard").hide();
        $("#answerCard").show();
        $("#correctResponse").show();

        $("#response").text("Wrong!");
        $("#correctResponse").text("The correct answer was " + question[question.ca] + "!");
        $("#responseImage").attr("src", "assets/images/wrong.gif");

        setTimeout(function(){
            setUpQuestion(nextQuestion()) 
         }, 3000);
    }
    var outOfTime = function() {
        losses++;
        $("#questionCard").hide();
        $("#answerCard").hide();
        $("#outOfTimeCard").show();
        $("#correctResponse").show();

        $("#outOfTimeResponse").text("Not quick enough!");
        $("#outOfTimeCorrectResponse").text("The correct answer was " + question[question.ca] + " !");
        $("#outOfTimeImage").attr("src", "assets/images/outOfTime.gif");

        setTimeout(function(){
            setUpQuestion(nextQuestion()) 
         }, 3000);
    }

    if (question === undefined) {
        $("#questionCard").hide();
        $("#answerCard").hide();
        $("#outOfTimeCard").hide();
        $("#endingCard").show();

        $("#endingResponse").text(wins > losses ? "The Force is with you!" : "Need a little bit more work, young Padawan");
        $("#endingImage").attr("src", wins > losses ?  "assets/images/win.gif" : "assets/images/lose.gif");
        $("#endingResultCorrect").text("Correct: " + wins);
        $("#endingResultIncorrect").text("Incorrect: " + losses);
    } else {
        beginTimer();
        $("#questionCard").show();
        $("#answerCard").hide();
        $("#outOfTimeCard").hide();
        $("#endingCard").hide();

        $("#question").text(question.q);
        $("#A").text(question.a1);
        $("#B").text(question.a2);
        $("#C").text(question.a3);
        $("#D").text(question.a4);

        $("#A").unbind("click");
        $("#B").unbind("click");
        $("#C").unbind("click");
        $("#D").unbind("click");  

        if (question.ca === "a1") {
            $("#A").click(correctClick);
        } else {
            $("#A").click(wrongClick);
        }

        if (question.ca === "a2") {
            $("#B").click(correctClick);
        } else {
            $("#B").click(wrongClick);
        }
        
        if (question.ca === "a3") {
            $("#C").click(correctClick);
        } else {
            $("#C").click(wrongClick);
        }

        if (question.ca === "a4") {
            $("#D").click(correctClick);
        } else {
            $("#D").click(wrongClick);
        }
    }
}

function nextQuestion() {
    return questions.shift();
}
function beginQuiz() {
    $("#start").hide();
    $("#header").hide();
    $(".container").show();
    $("#outOfTimeCard").hide();
    setUpQuestion(nextQuestion());
}

