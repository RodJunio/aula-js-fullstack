let carros = ['Ferrari', 'fusca', 'palio', 'corolla'];

let html = '<ul>';

for (let i in carros) {
    html += `<li> ${carros[i]} </li>`;
}

html += "</ul>";

document.getElementById("demo").innerHTML = html;