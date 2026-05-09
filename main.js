function getPokemonDropdown(database) {
  const databaseIDs = Object.keys(database);
  let html = ''; 
  html += `<select class="form-select" autocomplete="pokemon" id="pokemon" name="pokemon">\n`;
  html += `<option>pick pokemon</option>\n`;

  for (let i = 0; i < databaseIDs.length; i++) {
    html += `  <option>${databaseIDs[i]}</option>\n`;
  }

  html += `</select>\n`;
  return html;
}

function getPokemonLevelSelect() {
  html = `<label for="level">level</label>\n`;
  html += `<input type="number" id="level" name="level" min="1" max="100" step="1" value="50">\n`;
  return html;
}

function loadDropdownHtml(dropdown) {
  dropdown.innerHTML = /*html*/ `
    ${getPokemonDropdown(global_db)}<br>
    ${getPokemonLevelSelect()}
  `
}

function main() {
  // defining stuffs
  const leftDropdown = document.getElementById('leftDropdown');
  const rightDropdown = document.getElementById('rightDropdown');
  const compareBox = document.getElementById('compareBox');
  let leftChoice;
  let rightChoice;
  function refresh() {
    compareBox.innerHTML = `${leftChoice}, ${rightChoice}<br>${global_db[leftChoice]}, ${global_db[rightChoice]}`;
  }
  
  // this is where the html is actually loaded
  loadDropdownHtml(leftDropdown);
  loadDropdownHtml(rightDropdown);
  refresh();

  // listeners
  leftDropdown.addEventListener('change', function() {
    leftChoice = event.target.value;
    refresh()
  });
  rightDropdown.addEventListener('change', function() {
    rightChoice = event.target.value;
    refresh()
  });

}

