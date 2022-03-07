let compras = ['arroz', 'feijão', 'macarrão', 'carne']

let html = '<ul>';

for( let i in compras) {
    html += `<li> ${compras[i]} </li>`;
}

html += '</ul>';

document.getElementById('demo').innerHTML = html;
