updateView();
function updateView() {
  document.getElementById("app").innerHTML = /*html*/ `
    <button onclick="generateUniqueRandomNumbers()">Generer 2 random tall</button>
    <div id="ifEqual"></div>
  `;
}

function generateUniqueRandomNumbers() {
  let firstUniqueNumber, secondUniqueNumber;

  do {
    firstUniqueNumber = Math.floor(Math.random() * 100);
    secondUniqueNumber = Math.floor(Math.random() * 100);
    console.log(firstUniqueNumber, secondUniqueNumber);

    if (firstUniqueNumber === secondUniqueNumber) {
      document.getElementById("ifEqual").innerHTML += /*html*/ `
        <div>Like tall funnet: ${firstUniqueNumber}</div>
      `;
    }
  } while (firstUniqueNumber === secondUniqueNumber);
}
