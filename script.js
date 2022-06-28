let equation="";

let screen = document.querySelector(".result");
function btnClick(char) {
    if (char == "equal") {
        equation = eval(equation);
        screen.innerText = eval(equation);
    }
    else if(char=="clear"){
        equation= "";
        screen.innerText = equation;
    }
    else if(char=="del"){
        equation= equation.slice(0,equation.length-1,);
        screen.innerText = equation;
    }
    else{
        equation += char;
        screen.innerText = equation;
    }
}
