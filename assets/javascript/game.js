//

    function myFunction() {
    var x = document.getElementById("container");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
 
    timeStart ();
    countDown ();
    }

    var correct = 0;
    var incorrect = 0;
    var answers = ["customRadioInline3", "customRadioInline23", "customRadioInline32", "customRadioInline44", "customRadioInline52"]
    var myTimer ;           //means undefined
// Countdown clock
    var timeLeft = 50;

    function timeClock  () {
        setTimeout(countDown,1000);                    //ordinarily would launch the countDown function after 1 second but we put it inside a function and call it
             };                                        // with the START button instead

    function countDown(){                           //Counts down every second of the variable timeLeft
        timeLeft--;
        if(timeLeft > 0){
        setTimeout(countDown,1000);
    }
   console.log(timeLeft);
   $("#timeLeft").text("Time left: "+timeLeft);
    }

// Countdown to alert
   function timeStart () {
    myTimer = setTimeout (timeIsUp, 50000);
    }
    
   function timeIsUp () {
        alert("Time is up!");
        checkAnswer ();
        reportScore ();
    };

//Submit button clear timeout
    function submitted () {
        clearTimeout(myTimer);
        //clearTimeout(timeClock);
        checkAnswer ();
        timeLeft = 1;
       // clearTimeout(countDown);
    };

//check answers against correctAnswers array
    var checkAnswer = function () {
        for (var i = 0; i < answers.length; i++) {

            if (document.getElementById(answers[i]).checked) {
                correct++;
            }
        else  {
           incorrect++;
        }
    
    }
    console.log("Correct = "+ correct + " answers");
    reportScore ();
    };

    function reportScore () {
       // console.log("Correct = "+ correct, + "Incorrect = "+ incorrect)
       $("#Score").text(" You got " + correct + " out of 5 questions correct!!!");
    };