const nomeUtente = prompt ('inserire nome')
const cognomeUtente = prompt ('inserire cognome')
const coloreUtente = prompt ('Inserire il colore preferito')

output = `
<strong>
${nomeUtente}${cognomeUtente}${coloreUtente}22
</strong>
`

console.log(output);

document.getElementById(`nomeUtente`).innerHTML += nomeUtente;
document.getElementById(`cognomeUtente`).innerHTML += cognomeUtente;
document.getElementById(`coloreUtente`).innerHTML += coloreUtente;
document.getElementById(`passwordUtente`).innerHTML += output;
