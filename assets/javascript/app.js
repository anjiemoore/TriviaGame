//Start page
//create variables
//create questions/questions array
//correct answers/ array
//wrong answers/array
//timer
var first = {
    q: "What does the 'TIE' in TIE Fighter stand for?",
    a1: "A. Turbo Induction Encabulator",
    a2: "B. Twin Ion Engine*",
    a3: "C. Techno Incantho Envulcanator",
    a4: "D. Thermal Inverse Engine"
};

var correctAnswer = first.a1;
var wrongAnswer = [first.a2, first.a3, first.a4];

var second = {
    q: "What planet does Padme represent?",
    a1: "A. Hoth",
    a2: "B. Coruscant",
    a3: "C. Endor",
    a4: "D. Naboo*"
};

var correctAnswer = second.a4;
var wrongAnswer = [second.a1, second.a2, second.a3];

var third = {
    q: "Who was the Chancellor before Palpatine?",
    a1: "A. Chancellor Fillorean",
    a2: "B. Chancellor Velorum*",
    a3: "C. Chancellor Pultimo",
    a4: "D. Chancellor Biel Ductavis"
};

var correctAnswer = third.a2;
var wrongAnswer = [third.a1, third.a3, third.a4];

var fourth = {
    q: "What micro-organisms are said to be conductors of the Force?",
    a1: "A. Force Ghosts",
    a2: "B. Chlorimidians",
    a3: "C. Mitochondria",
    a4: "D. Midichlorians*"
};

var correctAnswer = fourth.a4;
var wrongAnswer = [fourth.a1, fourth.a2, fourth.a3];

var fifth = {
    q: "What is Count Dooku's Sith name?",
    a1: "A. Darth Tyranus*",
    a2: "B. Darth Rex",
    a3: "C. Darth Maul",
    a4: "D. Darth Sidious"
};

var correctAnswer = fifth.a1;
var wrongAnswer = [fifth.a2, fifth.a3, fifth.a4];

var sixth = {
    q: "Who was the first Jedi to learn how to return from death as a Force Ghost?",
    a1: "A. Yoda",
    a2: "B. Obi-Wan Kenobi",
    a3: "C. Anakin Skywalker",
    a4: "D. Qui-Gon-Jinn*"
};

var correctAnswer = sixth.a4;
var wrongAnswer = [sixth.a1, sixth.a2, sixth.a3];

var seventh = {
    q: "Which planet is Princess Leia from?",
    a1: "A. Jakku",
    a2: "B. Dagobah",
    a3: "C. Alderaan*",
    a4: "D. Endor"
};

var correctAnswer = seventh.a3;
var wrongAnswer = [seventh.a1, seventh.a2, seventh.a4];

var eighth = {
    q: "What did Luke Skywalker's uncle, Owen, operate on Tatooine?",
    a1: "A. A droid repair service",
    a2: "B. A speeder repair garage",
    a3: "C. A cantina",
    a4: "D. A moisture farm*"
};

var correctAnswer = eighth.a4;
var wrongAnswer = [eighth.a1, eighth.a2, eighth.a3];

var ninth = {
    q: "What is Chewbacca's home planet?",
    a1: "A. Bespin",
    a2: "B. Mustafar",
    a3: "C. Kashyyk*",
    a4: "D. Endor"
};

var correctAnswer = ninth.a3;
var wrongAnswer = [ninth.a1, ninth.a2, ninth.a4];

var tenth = {
    q: "Who killed Jango Fett?",
    a1: "A. Boba Fett",
    a2: "B. Mace Windu*",
    a3: "C. Obi-Wan Kenobi",
    a4: "D. Yoda"
};

var correctAnswer = tenth.a2;
var wrongAnswer = [tenth.a1, tenth.a3, tenth.a4];

var userGuess;
var timer = 30;
var intervalId;

$("#start").click("click", beginQuiz);
    $(function(){
        $("#start").on('click', function() {
            $(this).hide();
            })
        })

$(".container").hide();
$("#start").on('click', function() {
    $("#start").hide();
    $(".container").show(".container");

})

function beginTimer () {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    $("#timer").html("<h2>" + timer + "</h2>");
        if (timer === 0) {
            clearInterval(intervalId);
        }
}

function beginQuiz() {
    var question1 = first;
    $("#question").text(first.q);
    $("#A").text(first.a1);
    $("#B").text(first.a2);
    $("#C").text(first.a3);
    $("#D").text(first.a4);

    beginTimer();

}

