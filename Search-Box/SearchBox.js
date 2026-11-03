const titles = ['چطوری کیک درست کنیم',
  'چطوری آب کرفس بگیریم',
  'چطوری آب زرشک بگیریم ',
  'چطوری آرد عدس درست کنم',
  'چطوری در خانه لواشک درست کنم ',
  'چطوری آب رزشک خانگی درست کنم',
]

const search = document.querySelector('.search')
const inputBox = document.querySelector('input')
const resultBox = document.querySelector('.result-box')

inputBox.onkeyup = (e) => {
  const userInput = e.target.value
  let resultArray = []

  if (userInput.length > 0) {


    resultArray = titles.filter((title) => {
      if (title.startsWith(userInput))
        return title
    })

    resultArray = resultArray.map((title) => {
      return '<li><b>'+userInput + '</b>' + title.substring(userInput.length) + '</li>'
    })

    if (resultArray.length > 0) {
      resultBox.innerHTML = resultArray.join("")
      search.classList.add("active")
    } else {
      search.classList.remove('active')
    }

  } else {
    search.classList.remove('active')
  }
}
resultBox.addEventListener('click' , () =>{
  inputBox.innerText = titles.value.length
})
