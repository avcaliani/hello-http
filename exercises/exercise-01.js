// -----------------------
//  exercise-01.js
// ------------------
// In this file you will find a suggested structure for your code.
// You can modify it as you want, as long as you reach the expected result. 

async function getAllSpells() {
    const response = await fetch("http://localhost:3000/spells");
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const spells = await response.json();
    return spells;
}

function filterSpells(spells) {
    const filteredSpells = [];
    
    for (var i=0; i <= spells.length - 1; i++){
        const spellName = spells[i].name.toLowerCase()
        if (spellName.split("a").length >= 3){
            
            filteredSpells.push(spellName)
        }
    }
    // Add your code here...
    return filteredSpells;
}

// function printSpells(spells) {
//     // Add your code here...
// }

// -----------------------
// Running the code 🚀
// -----------------------
const allSpells = await getAllSpells();
console.log(`Spells Found: ${allSpells.length}`)
console.log(allSpells)

const filteredSpells = filterSpells(allSpells);
console.log(filteredSpells);
