/* fetch("src/exchangerates.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    show(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  }); */

const api_url = "src/exchangerates.json";

async function getapi(url) {
  const response = await fetch(url);

  let data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}

getapi(api_url);

function hideloader() {
  document.getElementById("loading").style.display = "none";
}

function show(data) {
  let tab = `<tr>
        <th>Broj tečajnice</th>
        <th>Datum primjene</th>
        <th>Država</th>
        <th>Država iso</th>
        <th>Šifra valute</th>
        <th>Valuta</th>
        <th>Jedinica</th>
        <th>Kupovni tečaj</th>
        <th>Srednji tečaj</th>
        <th>Prodajni tečaj</th>
        <th>Konverzija</th>
      </tr>`;

  for (let row of data) {
    tab += `<tr> 
       <td>${row.broj_tecajnice}</td>
         <td>${row.datum_primjene}</td>
         <td>${row.drzava}</td> 
         <td>${row.drzava_iso}</td> 
         <td>${row.sifra_valute}</td> 
         <td>${row.valuta}</td> 
         <td>${row.jedinica}</td> 
         <td>${row.kupovni_tecaj}</td> 
         <td>${row.srednji_tecaj}</td> 
         <td>${row.prodajni_tecaj}</td>
     </tr>`;
  }

  document.getElementById("showData").innerHTML = tab;
}

async function getValute() {
  let url = "src/exchangerates.json";
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderValute() {
  let valute = await getValute();
  let html = "";
  valute.forEach((valuta) => {
    let htmlSegment = `<select>
                        <option value="${valuta.valuta}">${valuta.valuta}</option>
                        </select>`;
    html += htmlSegment;
  });

  let zbir_valuta = document.getElementById("zbir_valuta");
  zbir_valuta.innerHTML = html;
}

renderValute();

var inputNumberValue = document.getElementById("number").value;

function konverzija() {}

/*
 function getSrednjiTecaj() {
  return fetch("src/exchangerates.json")
    .then((resp) => resp.json())
    .then((json) => render getSrednjiTecaj(json));
}

*/
