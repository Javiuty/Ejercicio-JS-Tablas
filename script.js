//  Variables
const tabla = document.querySelector(".tabla");
const tablaHeading = document.querySelector(".tabla__heading");

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
}

// tabla.innerHTML = `
//     <th>id</th>

// `;
