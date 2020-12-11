//  Variables
const tabla = document.querySelector(".tabla");
const tablaHeading = document.querySelector(".tabla__heading");
const tablaRow = document.querySelector(".tabla__row");

// Funciones
function callingData() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => renderingHTML(data.data));
}

callingData();

function renderingHTML(data) {
  for (let prop in data[0]) {
    const td = document.createElement("td");
    td.textContent = prop;
    tablaHeading.appendChild(td);
  }

  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");

    for (let prop in data[i]) {
      const td = document.createElement("td");
      td.textContent = data[i][prop];
      tr.appendChild(td);
      tablaHeading.appendChild(tr);
    }
  }
}
