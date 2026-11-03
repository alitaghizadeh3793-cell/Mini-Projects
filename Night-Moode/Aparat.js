const toggleButton = document.querySelector('.toggle-button')
const body = document.querySelector('body')

let theme = localStorage.getItem('theme')

if (theme === 'dark') {
    setDark()
}

toggleButton.addEventListener('click', () => {
    
    theme = localStorage.getItem('theme')
    if (theme === 'dark') {
        setLight()
    } else {
        setDark()
    }
})

function setDark() {
    body.classList.add('dark')
    toggleButton.classList.add('active')
    localStorage.setItem('theme', 'dark')
}

function setLight() {
    body.classList.remove('dark')
    toggleButton.classList.remove('active')
    localStorage.setItem('theme', 'light')
}

///
const carousel = document.querySelector('.carousel')

let counter = 1             // مشخص میکنه که در حال حاضر کدام تصویر نمایش داده میشه
const imageCount = 5
const imageSize = 760

window.onload = startCarousel()


function startCarousel () {
    if (counter >= imageCount)
        counter = 0
    setTimeout(() => {
        carousel.style.transform = 'translateX('+ (imageSize * counter) +'px)'
        counter++
        startCarousel()
    },3000)
}