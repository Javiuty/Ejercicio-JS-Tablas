//  Variables
const tabla = document.querySelector(".tabla");
const tablaHeading = document.querySelector(".tabla__heading");
const tablaRow = document.querySelector(".tabla__row");
const horaUTC = document.querySelector(".hora__utc");

// Funciones
function callingData() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => renderingHTML(data.data));
}

callingData();

function renderingHTML(data) {
  // Rendering Heading TAble
  for (let prop in data[0]) {
    const td = document.createElement("td");
    td.textContent = prop;
    tablaHeading.appendChild(td);
  }

  // Rendering DAta
  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");

    for (let prop in data[i]) {
      const td = document.createElement("td");
      td.textContent = data[i][prop];
      tr.appendChild(td);
      tablaHeading.appendChild(tr);
    }
  }

  // Rendering Names and Countries
}

horaUTC.textContent = moment.utc(Date.now()).format("hh:mm");
