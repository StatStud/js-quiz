// 1. Create a multidimensional array to hold quiz questions and answers

quiz = [
  ['what is blue?', 'blue'],
  ['what is red?', 'red'],
  ['what is yeet?', 'yeet'],
  ['what is moo?', 'moo']
]
// 2. Store the number of questions answered correctly
let score = 0;
let correct = [];
let incorrect = [];
let correct_html = "";
let incorrect_html = "";

for (i=0;i<quiz.length;i++){
  response = prompt(quiz[i][0]).toLocaleLowerCase();
  if (response === quiz[i][1]){
    score += 1;
    correct.push(quiz[i][0]);
  } else {
    incorrect.push(quiz[i][0]);
}
}

for (var i=0;i<correct.length;i++){
  correct_html += `<li> ${correct[i]} </li>`;
}

for (var i=0;i<incorrect.length;i++){
  incorrect_html += `<li> ${incorrect[i]} </li>`;
}
  
// 3. create html
  
html = `
<h1> your score is ${score} points </h1>
`;
  
  
// 4. Display the number of correct answers to the user
document.querySelector("main").innerHTML = html + `<h2> here are the questions you answered correctly </h2>` + correct_html + `<h2> here are the questions you missed </h2>` +incorrect_html;

