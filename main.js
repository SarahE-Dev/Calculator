let val = document.querySelector('#inp');
let equationDisplay = document.querySelector('.display')
let equation = '';
let display = '';

let checkbox = document.querySelector('#dark');
let main = document.querySelector('.main');
let calculator = document.querySelector('.calculator');
let buttons = document.querySelectorAll('button');
let label = document.querySelector('label');

window.addEventListener('keydown', (event)=>{
    switch(event.key){
        case '1':
            screen(1);
            break;
        case '2':
            screen(2);
            break;
        case '3':
            screen(3);
            break;
        case '4':
            screen(4);
            break;
        case '5':
            screen(5);
            break;
        case '6':
            screen(6);
            break;
        case '7':
            screen(7);
            break;
        case '8':
            screen(8);
            break;
        case '9':
            screen(9);
            break;
        case '0':
            screen(0);
            break;
        case '.':
            screen('.');
            break;
        case '*':
            operator('*');
            break;
        case '/':
            operator('/');
            break;
        case '+':
            operator('+');
            break;
        case '-':
            operator('-');
            break;
        case 'Backspace':
            cancel();
            break;
        case '=':
            exe('=');
            break;
        case 'Enter':
            exe('=');
            break;
        case 'Delete':
            cls();
            break;
        case 'Escape':
            cls();
            break;
        case '%':
            percentage('%');
            break;
        case ';':
            squareRoot();
            break;
        
    }
})



checkbox.addEventListener('change', function(){
    if(this.checked){
        darkmode()
    }else{
        lightmode()
    }
})

function darkmode(){
    main.style.background = 'linear-gradient(to right, darkmagenta, indigo, black)';
    calculator.style.backgroundColor = 'black'
    buttons.forEach((item)=>{
        item.style.backgroundColor = 'darkviolet'
    })
    val.style.background = 'linear-gradient(to bottom, deeppink, magenta)';
    val.style.color = 'white';
    equationDisplay.style.color = 'white';
    label.style.color = 'white';
    buttons.forEach((item)=>{
        item.onmouseover = ()=>{
            item.style.backgroundColor = 'white'
            item.style.color = 'black'
        }
        item.onmouseout = ()=>{
            item.style.backgroundColor = 'darkviolet';
            item.style.color = 'white';
        }
    })
   

}

function lightmode(){
    main.style.background = 'linear-gradient(to right, deeppink, darkorchid, royalblue)';
    calculator.style.backgroundColor = 'darkorchid'
    buttons.forEach((item)=>{
        item.style.backgroundColor = 'black'
    })
    val.style.background = 'linear-gradient(to bottom, deeppink, orange, yellow)';
    val.style.color = 'black';
    equationDisplay.style.color = 'black';
    label.style.color = 'black';
    buttons.forEach((item)=>{
        item.onmouseover = ()=>{
            item.style.backgroundColor = 'deeppink'
            item.style.color = 'white'
        }
        item.onmouseout = ()=>{
            item.style.backgroundColor = 'black';
            item.style.color = 'white';
        }
    })

}

function screen(v){
    val.value+=v;
    equation+=v;
    equationDisplay.textContent+=v;
    
}

function squareRoot(){
    val.value = Math.sqrt(eval(val.value))
}

function cls(){
    val.value="";
    equationDisplay.textContent = '';
}

function operator(v){
    equation+=' ' + v + ' ';
    val.value='';
    equationDisplay.textContent+=v
}

function percentage(v){
    equationDisplay.textContent += v;
    let numbers = equation.split(' ');
    let newEquation = numbers[numbers.length-1] + ' * 0.01 * ' + numbers[0];
    let operators = '+-*/';
    let operate = '';
    let total = eval(newEquation);
    val.value = total;
    for(let char of equation){
        if(operators.includes(char)){
            operate += char
        }
    }
    if(operate === '+' || operate === '-'){
    equation = numbers[0] + operate + total;
    }
    
}

function exe(v){
    val.value = eval(equation)
    equationDisplay.textContent += v;
}

function cancel(){
    val.value=val.value.substr(0,val.value.length-1);
    equationDisplay.textContent=equationDisplay.textContent.substr(0,equationDisplay.textContent.length-1);
    equation-equationDisplay.textContent[equationDisplay.textContent.length-1];
    equation = equation.substr(0, equation.length-1)
}

