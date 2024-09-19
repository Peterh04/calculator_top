const buttons = document.querySelectorAll('button');
const typeScreen = document.querySelector('#typingScreen');
const clearBtn = document.querySelector('#clearBtn');
const eraseBtn = document.querySelector('#eraseBtn');
const equalBtn = document.querySelector('#equalBtn');
const answerScreen = document.querySelector('#answerScreen')



function appendToInputField(newValue){
    typeScreen.value += newValue;
}

function clearInputField(){
    typeScreen.value = ''
    answerScreen.textContent = ''
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
    if(typeScreen.value.includes('+')){
        let number = typeScreen.value.split('+')
        let a = parseFloat(number[0])
        let b = parseFloat(number[1])
        
        
        typeScreen.value = add(a,b)
    
    }

    if(typeScreen.value.includes('-')){
        let number = typeScreen.value.split('-');
        let a = parseFloat(number[0])
        let b = parseFloat(number[1])
        typeScreen.value = subtract(a, b)
    }

    if(typeScreen.value.includes('*')){
        let number = typeScreen.value.split('*')
        let a = parseFloat(number[0])
        let b = parseFloat(number[1])

        typeScreen.value = multiply(a, b)
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
        typeScreen.value = divide(a, b)

    }
    if(typeScreen.value.includes('%')){
        let number = typeScreen.value.split('%')
        console.log(number)
        let a = parseFloat(number[0])
        typeScreen.value = percentage(a)
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
    evaluate();
})


