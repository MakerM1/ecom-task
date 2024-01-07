const smallImage = document.querySelectorAll('.product__image-small')
const bigImage = document.querySelector('.product__image')

smallImage.forEach((image) => {
    image.addEventListener('click', () => {
        const smallImageSrc = image.src
        bigImage.innerHTML = `<img src="${smallImageSrc}" alt="product image" />`
       for (let i = 0; i < smallImage.length; i++) {
        if (smallImage[i].classList.contains('active')) {
            smallImage[i].classList.remove('active')
        }
        
        if (!image.classList.contains('active')) {
            image.classList.add('active')
        } 
       }
    })
})

// quantity
let quantity = 5
const quantityText = document.querySelector('.quantity')
const minusButton = document.querySelector('.minus')
const plusButton = document.querySelector('.plus')

minusButton.addEventListener('click', () => {
    if (quantity > 0) {
        quantity--
        quantityText.innerHTML = quantity
    } else {
        quantity = 0
    }
})

plusButton.addEventListener('click', () => {
    quantity++
    quantityText.innerHTML = quantity
})