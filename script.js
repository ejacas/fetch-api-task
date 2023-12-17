const API_URL = "https://open-long-puck.glitch.me/"
const table = document.querySelector("table")




fetch('https://open-long-puck.glitch.me/')
  .then(res => res.json())
  .then(data => {

    const rows = data.map(car => {
      const tableRow = table.insertRow(-1)

      const c1 = tableRow.insertCell(0)
      const c2 = tableRow.insertCell(1)

      c1.innerText = car.brand
      c2.innerText = car.model

      return tableRow
    })

    rows.forEach(row => table.appendChild(row))

    console.log(data)
  })
  .catch(e => console.log(e.message))

