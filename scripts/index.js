// price range

const minInput = document.querySelector('.slider1')
const maxInput = document.querySelector('.slider2')
const minInputText = document.querySelector('.min-price')
const maxInputText = document.querySelector('.max-price')

minInput.addEventListener('input', () => {
    if (minInput.value * -1 === -0) {
        minInputText.innerHTML = '0'
    } else {
        minInputText.innerHTML = Number(minInput.value * -1).toLocaleString("en-US")
    }
})

maxInput.addEventListener('input', () => {
    maxInputText.innerHTML = Number(maxInput.value).toLocaleString("en-US")
})

// open close menu

document.querySelectorAll('.sidebar__tops').forEach((open) => {
    open.addEventListener('click', () => {
        console.log('close')
        open.classList.toggle('not-active')
    })
})

// tags

const tags = document.querySelectorAll('.tag')

tags.forEach((tag) => {
    tag.addEventListener('click', () => {
        tag.classList.toggle('active')
    })
})

// sidebar 

const sidebarButton = document.querySelector('.filter__button')
const sidebar = document.querySelector('aside')

sidebarButton.addEventListener('click', () => {
    sidebarButton.classList.toggle('closed')
    sidebar.classList.toggle('closed')
})