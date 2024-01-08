const passwordInput = document.querySelector('.password-input')
const changeType = document.querySelector('.js-change')

function change(input, button) {
    if (input.type !== 'text') {
        input.type = 'text'
        button.classList.remove('fa-eye')
        button.classList.add('fa-eye-slash')
    } else {
        input.type = 'password'
        button.classList.add('fa-eye')
        button.classList.remove('fa-eye-slash')
    }
}

changeType.addEventListener('click', () => {
    change(passwordInput, changeType)
})

const passwordInput2 = document.querySelector('.password-input2')
const changeType2 = document.querySelector('.js-change2')

changeType2.addEventListener('click', () => {
    change(passwordInput2, changeType2)
})