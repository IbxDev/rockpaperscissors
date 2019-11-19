// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */




// DOCUMENT READY FUNCTION BELOW


$("#shoot").click(function() {
    $("#userChoice").text($("#input").val());
     var cpu  = Math.random()   
    if (cpu > 0 && cpu < 0.333) {
        $("#computerChoice").html("rock");
    } else if (cpu > 0.333 && cpu < 0.666) {
        $("#computerChoice").html("paper");
    } else if (cpu > 0.666 && cpu < 0.999) {
        $("#computerChoice").html("scissors");
    }

    
    var resultUser = $("#userChoice").text($("#input").val());
    console.log(cpu);
    if (resultUser === "rock" && "#computerChoice" === "scissors") {
        $("#result").html("You've won!");
    }
    $("#computerChoice").text($(cpu).val());
});

