const spanTag = '<span class="blink">|</span>'
let passwordElement = document.querySelector('.text-hidden')
const text = 'Password'
let n = 0
var typeTimer = setInterval(() => {
    passwordElement.innerHTML = text.slice(0, n) + spanTag + passwordElement.innerText.slice(n, text.length)
    n += 1
    if (n === text.length + 1)
        clearInterval(typeTimer)
}, 800)

let sliderRange = 10
const range = document.querySelector('.password-slider input')
range.addEventListener('input', () => {
    if (range.value < 4) {
        range.value = 4
    }
})
range.addEventListener('input', () => {
    sliderRange = range.value
    document.querySelector('.password-slider span').innerText = range.value
})

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*|;:(){}[]<>/?-_=+'
const allChars = upperCase + lowerCase + numbers + symbols
const createPassword = () => {
    let password = ''
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]
    while (password.length < sliderRange) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    document.getElementById('password-input').value = password
}

const copyIcon = document.querySelector('#copy-icon')
const button = document.querySelector('.password-btn')
const passwordInfo = document.querySelector('.password-info')
button.addEventListener('click', () => {
    createPassword()
    copyIcon.src = 'images/copy-icon.svg'
    var passwordStrength
    if (sliderRange < 8)
        passwordStrength = '<span id="danger">Weak</span>'
    else if (sliderRange < 18)
        passwordStrength = '<span id="warn">Medium</span>'
    else
        passwordStrength = '<span id="good">Strong</span>'
    passwordInfo.innerHTML = 'Password Length: ' + passwordStrength
})

const copyPassword = () => {
    var inputField = document.querySelector('#password-input')
    navigator.clipboard.writeText(inputField.value)
}

copyIcon.addEventListener('click', () => {
    copyPassword()
    copyIcon.src = 'images/tick-mark-icon.svg'
})
