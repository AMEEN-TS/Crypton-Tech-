const question="What is minus 60  by 10?"
let data=question.split(" ");
let values=[];
let operator;
for(let i of data){
    let value=parseInt(i);
    if(value){
       values.push(value)
    }

    if(i==="plus" || i==="minus" || i==="multiplied" || i==="divided" ){
        operator=i;
    }
}

let num1=values[0];
let num2=values[1];

let result;
    switch (operator) {
      case 'plus':
        result = num1 + num2;
        break;
      case 'minus':
        result = num1 - num2;
        break;
      case 'multiplied':
        result = num1 * num2;
        break;
      case 'divided':
        result = num1 / num2;
        break;
      default:
        result=undefined;
       
    }
    if(result){
        console.log(`${num1} ${operator} ${num2} is ${result}`);
    }else{
        console.log("invalid");
    }