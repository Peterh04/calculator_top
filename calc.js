//perform automatic calculations

const buttons = document.querySelectorAll('button');
const typeScreen = document.querySelector('#typingScreen');
const clearBtn = document.querySelector('#clearBtn');
const eraseBtn = document.querySelector('#eraseBtn');
const equalBtn = document.querySelector('#equalBtn');
const answerScreen = document.querySelector('#answerScreen');
const bracketsBtn = document.querySelector('#bracketsBtn');

let openingbracketCount = 0;
let closingBracketCount = 0

function appendToInputField(newValue){
    typeScreen.value += newValue;
    evaluate()
}

function clearInputField(){
    typeScreen.value = ''
    answerScreen.textContent = ''
   openingbracketCount = 0;
   closingBracketCount = 0;  
}


function deleteLastInput(){
    typeScreen.value = typeScreen.value.slice(0, -1);
}

function add(a, b){
    return a + b ;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function percentage(a){
    return a / 100
}

function divisionByZeroErrror(){
    
}

function evaluate(){
    let expression = typeScreen.value
    if (!/^\d+(\.\d+)?([+\-*/÷%]\d+(\.\d+)?)*$/.test(expression)) {
        answerScreen.textContent = '';
        return;
    }
    
    if(typeScreen.value.includes('+')){
        let number = typeScreen.value.split('+')
         a = parseFloat(number[0])
         b = parseFloat(number[1])
        
        
        answerScreen.textContent = add(a,b)
      
    
    }

    if(typeScreen.value.includes('-')){
        let number = typeScreen.value.split('-');
        let a = parseFloat(number[0])
        let b = parseFloat(number[1])
        answerScreen.textContent = subtract(a, b)
    }

    if(typeScreen.value.includes('*')){
        let number = typeScreen.value.split('*')
        let a = parseFloat(number[0])
        let b = parseFloat(number[1])

        answerScreen.textContent = multiply(a, b)
    }

    if(typeScreen.value.includes('÷')){
        let number = typeScreen.value.split('÷')
        console.log(number)
        let a = parseFloat(number[0])
        let b = parseFloat(number[1])
        
        if(a == 0 || b == 0){
           typeScreen.style.color = 'red'
           alert(`Can't divide by zero!`)
           setTimeout(()=>{
            typeScreen.style.color = '';
           }, 1000)
         
           return
        }
        answerScreen.textContent = divide(a, b)

    }
    if(typeScreen.value.includes('%')){
        let number = typeScreen.value.split('%')
        console.log(number)
        let a = parseFloat(number[0])
        answerScreen.textContent = percentage(a)
    }

 
}

buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        btn.classList.add('animate')
        
        setTimeout(()=>{
            btn.classList.remove('animate')
        }, 100)
    })
});



buttons.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        let value = e.currentTarget.value
        if(!btn.classList.contains('equalBtn')){
            
            appendToInputField(value);
            
       }

       
    })

    
})





clearBtn.addEventListener('click', ()=>{
    clearInputField();
   
})




eraseBtn.addEventListener('click', ()=>{
    deleteLastInput()
})


equalBtn.addEventListener('click', ()=>{
   typeScreen.value = answerScreen.textContent;
   answerScreen.textContent = ''
})



bracketsBtn.addEventListener('click', ()=>{
    if(openingbracketCount === 0){
        typeScreen.value += '(';
        openingbracketCount += 1;
        
    }else{
        
        
        typeScreen.value += ')'
        closingBracketCount += 1;
        openingbracketCount = 0

    }
})




