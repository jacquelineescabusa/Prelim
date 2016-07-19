const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your grade: ', (grade) => {
  // TODO: Log the answer in a database
  
 var grade = parseInt(grade);
 addnumber(grade,5 && even);
 
 
  rl.close();
});
function addnumber(grade,decrement){
    var num = grade + decrement;
    var num = grade + increment;
}