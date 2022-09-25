var readLineSync = require('readline-sync');
var score = 0 ;

function playQuiz(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer===answer){
    console.log(" You are correct ");
    score = score+1;
    console.log(score);
    
  }else{
    console.log(" No your answer is incorrect ");
      score = score-1;
   console.log(score);
   
  }
}
playQuiz(" what's your name ","Yash Rawat");
playQuiz(" are you above 18 ","yes");
playQuiz(" where do you live ","Delhi");
playQuiz(" favourite hobby ","reading novels");
playQuiz("favourite sport ", "football");


