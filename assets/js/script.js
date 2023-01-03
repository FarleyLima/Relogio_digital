// atribuindo as funcionalidade a cada id do relógio
const hours = document.getElementById('hours')

const minutes = document.getElementById('minutes')

const seconds = document.getElementById('seconds')

// definindo a função do relogio
const clock = setInterval(function time() {
  let dateToday = new Date()
  let clockHours = dateToday.getHours()
  let clockMinutes = dateToday.getMinutes()
  let clockSeconds = dateToday.getSeconds()

  // Para aparecer o 0 a frente
  if (clockHours < 10) clockHours = '0' + clockHours

  if (clockMinutes < 10) clockMinutes = '0' + clockMinutes

  if (clockSeconds < 10) clockSeconds = '0' + clockSeconds

  // atribuíndo o funcionamento do relogio, hora, minuto e segundos.
  hours.textContent = clockHours
  minutes.textContent = clockMinutes
  seconds.textContent = clockSeconds
})
