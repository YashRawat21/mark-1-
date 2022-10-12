var readLineSync = require('readline-sync');
var score = 0 ;
var highScore = 4;
var finalScore = 0;
function playQuiz(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(" You are correct ");
    score = score+1;
    console.log("Your score is : ", score);
    finalScore = score;
    
  }else{
    console.log(" No your answer is incorrect ");
    console.log("The correct answer is : ",answer)
   console.log("Your score is : ", score);
   
  }
}
playQuiz(" what's my name ? ","Yash");
playQuiz(" Am I above 18 ? ","yes");
playQuiz(" where do I live ? ","Delhi");
playQuiz(" What I love to do in my free time ? ","reading");
playQuiz(" What is my favourite sport ? ", "football");
playQuiz(" Who is my favourite footballer ? ", "Lionel Messi")

console.log("Your final score is : ",finalScore);
if(highScore < finalScore) {
  console.log("Congratulations, you have broken the high score.\n Send me the screenshot so that I can display your name.🏆 ")
}

