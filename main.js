let val = document.querySelector('#inp');
let equationDisplay = document.querySelector('.display')
let equation = '';
let display = '';

let checkbox = document.querySelector('#dark');
let main = document.querySelector('.main');
let calculator = document.querySelector('.calculator');
let buttons = document.querySelectorAll('button');
let label = document.querySelector('label');

function keydownColor(i){
    buttons[i].style.background = 'white';
    buttons[i].style.color = 'deeppink';
}

function colorback(){
    if(checkbox.checked){
        buttons.forEach((item)=>{
            item.style.background = 'linear-gradient(to bottom, darkorchid, royalblue, darkmagenta)'
            item.style.color = 'white';
        })
    }else{
        buttons.forEach((item)=>{
            item.style.background = 'linear-gradient(to bottom, royalblue, deeppink)';
            item.style.color = 'white';
        })
    }
}
    

window.addEventListener('keydown', (event)=>{
    switch(event.key){
        case '1':
            screen(1);
            keydownColor(4);
            break;
        case '2':
            screen(2);
            keydownColor(5);
            break;
        case '3':
            screen(3);
            keydownColor(6);
            break;
        case '4':
            screen(4);
            keydownColor(8);
            break;
        case '5':
            screen(5);
            keydownColor(9);
            break;
        case '6':
            screen(6);
            keydownColor(10);
            break;
        case '7':
            screen(7);
            keydownColor(12);
            break;
        case '8':
            screen(8);
            keydownColor(13);
            break;
        case '9':
            screen(9);
            keydownColor(14);
            break;
        case '0':
            screen(0);
            keydownColor(17);
            break;
        case '.':
            screen('.');
            keydownColor(18);
            break;
        case '*':
            operator('*');
            keydownColor(7);
            break;
        case '/':
            operator('/');
            keydownColor(3);
            break;
        case '+':
            operator('+');
            keydownColor(15);
            break;
        case '-':
            operator('-');
            keydownColor(11);
            break;
        case 'Backspace':
            cancel();
            keydownColor(1);
            break;
        case '=':
            exe('=');
            keydownColor(19);
            break;
        case 'Enter':
            exe('=');
            keydownColor(19);
            break;
        case 'Delete':
            cls();
            keydownColor(0);
            break;
        case 'Escape':
            cls();
            keydownColor(0);
            break;
        case '%':
            percentage('%');
            keydownColor(16);
            break;
        case ';':
            squareRoot();
            keydownColor(2);
            break;
        
    }
})

window.addEventListener('keyup', (event)=>{
    switch(event.key){
        case '1':
            colorback();
            break;
        case '2':
            colorback();
            break;
        case '3':
            colorback();
            break;
        case '4':
            colorback();
            break;
        case '5':
            colorback();
            break;
        case '6':
            colorback();
            break;
        case '7':
            colorback();
            break;
        case '8':
            colorback();
            break;
        case '9':
            colorback();
            break;
        case '0':
            colorback();
            break;
        case '.':
            colorback();
            break;
        case '*':
            colorback();
            break;
        case '/':
            colorback();
            break;
        case '+':
            colorback();
            break;
        case '-':
            colorback();
            break;
        case 'Backspace':
            colorback();
            break;
        case '=':
            colorback();
            break;
        case 'Enter':
            colorback();
            break;
        case 'Delete':
            colorback();
            break;
        case 'Escape':
            colorback();
            break;
        case '%':
            colorback();
            break;
        case ';':
            colorback();
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
        item.style.background = 'linear-gradient(to bottom, darkorchid, royalblue, darkmagenta)'
    })
    val.style.background = 'linear-gradient(to bottom, deeppink, darkmagenta)';
    val.style.color = 'black';
    equationDisplay.style.color = 'black';
    label.style.color = 'white';
    buttons.forEach((item)=>{
        item.onmouseover = ()=>{
            item.style.background = 'white'
            item.style.color = 'black'
        }
        item.onmouseout = ()=>{
            item.style.background = 'linear-gradient(to bottom, darkorchid, royalblue, darkmagenta)';
            item.style.color = 'white'
        }
    })
   

}

function lightmode(){
    main.style.background = 'linear-gradient(to right, deeppink, darkorchid, royalblue)';
    calculator.style.backgroundColor = 'darkorchid'
    buttons.forEach((item)=>{
        item.style.background = 'linear-gradient(to bottom, royalblue, deeppink)'
    })
    val.style.background = 'linear-gradient(to bottom, deeppink, orange, yellow)';
    val.style.color = 'white';
    equationDisplay.style.color = 'white';
    label.style.color = 'royalblue';
    buttons.forEach((item)=>{
        item.onmouseover = ()=>{
            item.style.background = 'deeppink'
            item.style.color = 'yellow'
        }
        item.onmouseout = ()=>{
            item.style.background = 'linear-gradient(to right, deeppink, darkorchid, royalblue)';
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
    equation = '';
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
    let percentage = numbers[numbers.length-1] + ' * 0.01';
    let percent = eval(percentage)
    let total = eval(newEquation);
    
    for(let char of equation){
        if(operators.includes(char)){
            operate += char
        }
    }
    if(operate === '-' || operate === '+'){
    equation = numbers[0] + operate + total;
    val.value = total;
    }else{
        equation = numbers[0] + operate + percent;
        val.value = percent;
    }
    
    
}

function exe(v){
    val.value = eval(equation)
    equationDisplay.textContent += v + val.value;
}

function cancel(){
    val.value=val.value.substr(0,val.value.length-1);
    equationDisplay.textContent=equationDisplay.textContent.substr(0,equationDisplay.textContent.length-1);
    equation-equationDisplay.textContent[equationDisplay.textContent.length-1];
    equation = equation.substr(0, equation.length-1)
}

