// -----------------------
//  exercise-02.js
// ------------------
// In this file you will find a suggested structure for your code.
// You can modify it as you want, as long as you reach the expected result. 

async function getSpell(spellId) {
    const response = await fetch("http://localhost:3000/spells/" + spellId);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const spells = await response.json();
    return spells;
}

const allSpells = await getSpell("5");
console.log(allSpells)

function printSpellEffect(spells) {
    // Add your code here...
}

// -----------------------
// Running the code 🚀
// -----------------------
const spellFive = await getSpell("5");
printSpellEffect(spellFive);

const spellSeventeen = await getSpell("17");
printSpellEffect(spellSeventeen);
