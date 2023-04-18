let equals = document.getElementById('equals')
let back = document.getElementById('del')
let erase = document.getElementById('ac')
let input = document.getElementById('input')
let buttons = document.querySelectorAll('.input-button')
let percent = document.getElementById('percent')
let clickedEquals = 0

window.onload = () => {
    input.value = ""
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(clickedEquals == 1){
            input.value = ""
            clickedEquals = 0
        }
        input.value += button.value
    })
})    

equals.addEventListener('click', () => {
    clickedEquals = 1
    let inpt = input.value
    try {
        let result = eval(inpt)
        if(Number.isInteger(result)){
            input.value = result
        } else {
            input.value = result.toFixed(2)
        }
    }
    catch(err){
        alert("invalid input")
    }
})

erase.addEventListener('click', () => {
    input.value = ""
})

back.addEventListener('click', () => {
    input.value = input.value.substring(0, input.value.length - 1)
})

percent.addEventListener('click', () => {
    let inp = parseFloat(input.value)
    input.value = inp / 100 
})