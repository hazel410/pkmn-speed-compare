const FALLBACK_SPRITE = './fallback-sprite.png';
const SPRITE_DATABASE_ROOT = '';

const CSS_SPRITE_CLASS = 'sprite';
const CSS_NAMESELECT_CLASS = 'nameSelect';
const CSS_LEVELSELECT_CLASS = 'levelSelect';
const CSS_CHECKBOXES_CLASS = 'checkboxes';


// function getSpriteUrl(pokemon) {
//   if (pokemon === 'null') {
//     return `${FALLBACK_SPRITE}`;
//   } else {
//     return `${SPRITE_DATABASE_ROOT}/${pokemon}.png`;
//   }
// }


// function getPokemonLevelSelect() {
//   html = `<label for="level">level</label>\n`;
//   html += `<input type="number" id="level" name="level" min="1" max="200" step="1" value="50">\n`;
//   return html;
// }

// function loadPokemonBoxHtml(dropdown, pkmn) {
//   dropdown.innerHTML = /*html*/ `
//     <div class="sprite">${getSpriteUrl(pkmn)}</div>
//     <div class="nameSelect">${getPokemonDropdown(GLOBAL_DB)}</div>
//     <div class="levelSelect">${getPokemonLevelSelect()}</div>
//     <div class="checkboxes"></div>
//     `;
// }


// class pokemonBox {
//   constructor(boxId) {
//     // bad hardcoding but it works
//     this.boxDom = document.getElementById(boxId);
//     this.spriteDom = this.boxDom.children[0];
//     this.nameSelectDom = this.boxDom.children[1];
//     this.levelSelectDom = this.boxDom.children[2];
//     this.checkboxesDom = this.boxDom.children[3];

//     // variable inits
//     this.activeName = 'null';
//     this.activeLevel = 50;
//     // this.activeBoosts = 0;

//     // listeners
//     this.nameSelectDom.addEventListener('change', function() {
//       this.activeName = event.target.value;
//       this.spriteDom.innerHTML = `<img src=${getSpriteUrl(newPokemonName)}>`;
//       updateCompare();
//     });

//     this.levelSelectDom.addEventListener('change', function () {
//       this.activeLevel = event.target.value;
      
//     })
//   }
// }

// function main() {
//   // defining stuffs
//   const leftBox = pokemonBox('leftBox');
//   const rightBox = pokemonBox('rightBox');
//   const compareBox = document.getElementById('compareBox');
//   let leftChoice = 'null';
//   let rightChoice = 'null';
//   function refresh() {
//     compareBox.innerHTML = `${leftChoice}, ${rightChoice}<br>${GLOBAL_DB[leftChoice]}, ${GLOBAL_DB[rightChoice]}`;
//   }
  
//   // this is where the html is actually loaded
//   loadPokemonBoxHtml(leftBox, leftChoice);
//   loadPokemonBoxHtml(rightBox, rightChoice);
//   refresh();

//   // listeners
//   leftBox.addEventListener('change', function() {
//     leftChoice = event.target.value;
//     refresh()
//   });
//   rightBox.addEventListener('change', function() {
//     rightChoice = event.target.value;
//     refresh()
//   });

// }

// RESTARTED CODE

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

function loadNameHtml(id) {
  let name = document.getElementById(id);
  name.innerHTML = getPokemonDropdown(GLOBAL_DB);
}

function loadStatHtml(id) {
  let stat = document.getElementById(id);
  const html = /*html*/ `
  <select>
    <option value="6">+6</option>
    <option value="5">+5</option>
    <option value="4">+4</option>
    <option value="3">+3</option>
    <option value="2">+2</option>
    <option value="1">+1</option>
    <option value="0" selected="selected">--</option>
    <option value="-1">-1</option>
    <option value="-2">-2</option>
    <option value="-3">-3</option>
    <option value="-4">-4</option>
    <option value="-5">-5</option>
    <option value="-6">-6</option>
  </select>
  `;
  stat.innerHTML = html;
}

function loadLevelHtml(id) {
  let level = document.getElementById(id);
  const html = /*html*/ `
  <label for="level">lvl</label>
  <input type="number" id="level" name="level" min="1" max="200" step="1" value="50">
  `;
  level.innerHTML = html;
}

function loadCheckHtml(id) {
  // preamble
  let check = document.getElementById(id);
  const checkboxList = ['paralysis', 'scarf', 'ironBall', 'abilityNormal', 'abilityWeird'];

  function addButtonListener(id) {
    const button = document.getElementById(id);
    button.addEventListener('click', () => {
      let isPressed = button.getAttribute('aria-pressed') === 'true';
      button.setAttribute('aria-pressed', !isPressed);
    });}

  function getHtml(buttonId, buttonText) {
    return /*html*/ `<li><button id=${buttonId} type="button" aria-pressed="false">${buttonText}</button></li>`;
  }

  // first we make the buttons
  const html = /*html*/ `
  <ul>
    ${getHtml(id + checkboxList[0], 'paralysis')}
    ${getHtml(id + checkboxList[1], 'choice scarf')}
    ${getHtml(id + checkboxList[2], 'iron ball')}
    ${getHtml(id + checkboxList[3], '2x ability')}
    ${getHtml(id + checkboxList[4], '1.5x ability')}
  </ul>
  `;
  check.innerHTML = html;

  // then we make them responsive
  addButtonListener(id + checkboxList[0]);
  addButtonListener(id + checkboxList[1]);
  addButtonListener(id + checkboxList[2]);
  addButtonListener(id + checkboxList[3]);
  addButtonListener(id + checkboxList[4]);
}


