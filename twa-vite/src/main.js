import './style.css'

const counter = document.querySelector('#counter')
const restart = document.querySelector('#restart')
let timer

function setCount(value) {
  counter.value = value
  counter.textContent = value
  document.title = `Contador: ${value}`
}

function start() {
  window.clearInterval(timer)
  let value = 10
  setCount(value)

  timer = window.setInterval(() => {
    value -= 1
    setCount(value)

    if (value === 0) {
      window.clearInterval(timer)
    }
  }, 1000)
}

restart.addEventListener('click', start)
start()
