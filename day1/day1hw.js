
function calc(){
    let name= prompt("enter your name");
   let faculty=prompt("enter your faculty");
   let roll=prompt("enter your roll"); 
let i=+prompt("Enter your SGPA in i st sem");    
let ii=+prompt("Enter your SGPA in ii st sem");
let iii=+prompt("Enter your SGPA in iii st sem");
let iv=+prompt("Enter your SGPA in iv st sem");
let v=+prompt("Enter your SGPA in v st sem");
let vi=+prompt("Enter your SGPA in vi st sem");
let vii=+prompt("Enter your SGPA in vii st sem");
let viii=+prompt("Enter your SGPA in viii st sem");

let cgpa=(i+ii+iii+iv+v+vi+vii+viii)/8;

alert(`i am ${name} ,roll no   ${roll}  from   ${faculty} and I scored   ${cgpa}  CGPA in my bachelor `);
}

calc();