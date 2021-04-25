// 1. Create a multidimensional array to hold quiz questions and answers
const qAndA = [ 
  ['9 x 9', 81],
  ['3 x 10', 30],
  ['6 x 11', 66],
  ['8 x 5', 40],
  ['7 x 7', 49]
];

// 2. Store the number of questions answered correctly
const right = [];
const wrong = [];
let correct = 0; 
/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < qAndA.length; i++){
 
  let questions = qAndA[i][0];
 let answers = qAndA[i][1];
 let response = prompt(`What is the value of : ${questions}`);

 if(+response === answers){
  correct += 1;
  right.push(questions);
  

} else {
  wrong.push(questions)
 
}
}

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `<h1> You got ${correct} questions correct </h1>
<h2>You got these questions right:</h2>
<ol>${createListItems(right)}</ol>

<h2> You got these questions wrong: </h2>
<ol>${createListItems(wrong)}</ol>`;



document.querySelector('main').innerHTML = html ;