var readLineSync = require("readLine-sync");
var score = 0;
var userName = readLineSync.question(" what's your name? ");
console.log("welcome" + userName);

function play( question , answer ) {
  var userAnswer = readLineSync.question("question");
  if (userAnswer === answer) {
    console.log(" yes! you are correct ");
    score = score + 1;
    console.log(" your score is: ", score);
  } else {
    console.log(" oops! you are wrong ");
    score = score - 1;
    console.log(" your score is: ", score);
  }

}

var questions = [{
  question: " How many infinity stones are there? ",
  answer: " six ",
  question: " Where is Captain America from? ",
  answer: " Brooklyn ",
  question: " What type of doctor is Doctor Strange ",
  answer: " A neurosurgeon ",
  question: " Whose power exceeds that of the Sorcerer Supereme? ",
  answer: " Wanda ",
   question: " Captain America's shield and Bucky's arm are made of what?  ",
  answer:" Vibranium ",
   question: " Who was able to pick up Thor's hammer in Endgame ",
  answer:" Captain America ",
   question: " In which movie did Spider-Man make his first appearance in MCU? ",
  answer: " Captain America: Civil war ",
   question: " Wanda and her brother Pietro are from where? ",
  answer:" Sokovia "

}];
for(var i=0 ; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQUestion.answer)
}
console.log("YAY! you scored:", score);