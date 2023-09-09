
function calc(){
let cal=+prompt("Enter your marks in calculus:");
let dis=+prompt("Enter your marks in discrete math:");
let c=+prompt("Enter your marks in c prigramming:");
let pst=+prompt("Enter your marks in in problem solving technique:");
let draw=+prompt("Enter your marks in er. drawing: ");

let per=(cal+dis+c+pst+draw)/5;

alert("your percentage is" +per);
}

calc()