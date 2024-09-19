const buttons = document.querySelectorAll('button');
const typeScreen = document.querySelector('#typingScreen');
const clearBtn = document.querySelector('#clearBtn');
const eraseBtn = document.querySelector('#eraseBtn');
const equalBtn = document.querySelector('#equalBtn');

// function add(a, b){
//     return a + b
// }


function appendToInputField(newValue){
    typeScreen.value += newValue;
}

function clearInputField(){
    typeScreen.value = ''
}


function deleteLastInput(){
   typeScreen.value = typeScreen.value.slice(0, -1);
}


buttons.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        btn.classList.add('animate')
        
        setTimeout(()=>{
            btn.classList.remove('animate')
        }, 100)
    })
});

// equalBtn.addEventListener('click', ()=>{
//     console.log('clicked equal')
//     if(typeScreen.value.includes('+')){
//         // console.log((Number((typeScreen.value.split('+')).join(''))) + 10)
//          let a = (Number((typeScreen.value.split('+')).join('')))
//          let b = 10
//         console.log(add(a, b))
//     }
// })


buttons.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        let value = e.currentTarget.value
        console.log(e.currentTarget.value)
        appendToInputField(value);
    })
    
})

clearBtn.addEventListener('click', ()=>{
    clearInputField();
    console.log('cleared')
})




eraseBtn.addEventListener('click', ()=>{
    deleteLastInput()
})

