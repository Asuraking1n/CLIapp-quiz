var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

console.log('hollaaaaaaaaaaaa strange man:)');
var userName = readlineSync.question('What may I Call you sir ? : ');

console.log('Hello '+userName+',\n');
console.log('Welcome to Quzii'+chalk.bgRed.bold(' You think you know Asura ?\n'));
console.log('Let\'s see how much you know about '+ chalk.yellow.bold(' Asura ')+'?\n');

 console.log(chalk.yellowBright('-----------------------------------------------'));



var questionBook = [
  {
    question : 'What my family calls me?',
    options : ['Asura', 'nishant','raja','rajan'],
    answer :'raja'
  },
  {
    question : 'Which city i love most ?',
    options : ['varanasi', 'Ayodhya','Bikaner','none'],
    answer : 'Bikaner'
  },
  {
    question :  'What is my fav colour?',
    options : ['black','mate black','light black','dark black'],
    answer : 'mate black'
  },
    
  {
    question : 'What is my favourite Game?',
    options : ['Basketball','Volleyball','Badminton','Football'],
    answer : 'Basketball'
  },

  
  {
    question : 'Which is my favourite food ?',
    options : ['chocolate', 'icecream', 'namkin','treat'],
    answer : 'icecream'
  },
]


function displayQuestion(questions){
  console.log(chalk.yellowBright.bold(questions.question)+'\n')
  for(var i = 1; i <= 4; i++){
    console.log('['+i+'] '+questions.options[i-1]);
  }
  var index = readlineSync.keyIn('\n\nTell me what you know : ', {limit: '$<1-4>'});

  var userAnswer = questions.options[index - 1];
  if(userAnswer === questions.answer){
    console.log(chalk.bgGreen.black.bold('\nYou are awesome as ASura\n'));
    score = score +2;
  }
  else{
    console.log(chalk.bgRed.black.bold('\nHuff.....you dont know me\n'));
  }
}

for(var i = 0; i< questionBook.length ; i++){
  displayQuestion(questionBook[i]);
  console.log(chalk.yellowBright('-----------------------------------------------'));
}

 console.log(chalk.yellowBright('-----------------------------------------------'));
console.log(chalk.yellow.bold('\n\n Final Score : ', score+'\n\n'));
if(score === 10){
  console.log(chalk.bgBlueBright.bold('WOOWWW! You are Awesome as heaven you know asura, asura loves you>>>>> \n'));
  
}

 console.log(chalk.yellowBright('-----------------------------------------------'));