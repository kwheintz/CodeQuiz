// -------------DOM VARS-----------------


// -------------GLOBAL VARS-----------------

var currentScore = 0;

// -------------QUESTIONS-------------------
var questions = [
    {
        title: "How many NBA championships have the Los Angeles Lakers won in franchise history?",
        choices: ["14", "15", "16", "17"],
        answer: "16"
    },
    {
        title: "The Lakers are often referred to by the colors of their uniforms in which of the following ways?",
        choices: ["Gold and Purple", "Purple and Yellow", "Yellow and Purple", "Purple and Gold"],
        answer: "Purple and Gold"
    },
    {
        title: "What year did the Lakers move to Los Angeles?",
        choices: ["1959", "1960", "1961", "1962"],
        answer: "1960"
      },
      {
        title: "Who is the all-time leading scorer in the history of the Los Angeles Lakers?",
        choices: ["Kobe Bryant", "Magic Johnson", "Shaquille O'Neal", "Jerry West"],
        answer: "Kobe Bryant"
      },
      {
        title: "What is the name of the Los Angeles Lakers' home stadium?",
        choices: ["Great Western Forum", "Staples Center", "Lakers Arena", "Staples Arena"],
        answer: "Staples Center"
      }
  ];

// -------------FUNCTIONS-----------------

$(document).ready(function() {

    function quizstart() {
        $("#quiz-texttwo").empty();
        $("#start-button").empty();
    }
    
    // this function will display content to the screen
    function render () {

        display.textContent = finalPass;

    }

    function doGenPass () {
        
        init() // run init to reset global vars 

    }
    
    $("#start-quiz").on("click", function() {   
        $("#quiz-texttwo").empty();
        $("#start-button").empty();
        $("#quiz-texttwo").append("<button class='btn btn-secondary btn-lg btn-block' id='answera'></button>");
        $("#quiz-texttwo").append("<button class='btn btn-secondary btn-lg btn-block' id='answerb'></button>");
        $("#quiz-texttwo").append("<button class='btn btn-secondary btn-lg btn-block' id='answerc'></button>");
        $("#quiz-texttwo").append("<button class='btn btn-secondary btn-lg btn-block' id='answerd'></button>");
        
        for(var i=0; i<questions.length; i++) {
            $("#quiz-text").text(questions[i].title);
            $("#answera").text(questions[i].choices[0]);
            $("#answerb").text(questions[i].choices[1]);
            $("#answerc").text(questions[i].choices[2]);
            $("#answerd").text(questions[i].choices[3]);
        
            choicea = questions[i].choices[0];
            choiceb = questions[i].choices[1];
            choicec = questions[i].choices[2];
            choiced = questions[i].choices[3];
            finalAnswer = questions[i].answer;

            $("#answera").on("click", function() {
                if(choicea===finalAnswer) {
                    alert("Correct!");
                }   
                else {
                    alert("Incorrect!");
                }
            });
            $("#answerb").on("click", function() {
                if(choiceb===finalAnswer) {
                    alert("Correct!");
                }   
                else {
                    alert("Incorrect!");
                }
            });
            $("#answerc").on("click", function() {
                if(choicec===finalAnswer) {
                    alert("Correct!");          
                }
                else {
                    alert("Incorrect!");              
                }
            });
            $("#answerd").on("click", function() {
                if(choiced===finalAnswer) {
                    alert("Correct!");
                }  
                else {
                    alert("Incorrect!");
                } 
            });
        }        
    });     
});


