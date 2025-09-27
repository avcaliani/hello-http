// -----------------------
//  exercise-02.js
// ------------------
// In this file you will find a suggested structure for your code.
// You can modify it as you want, as long as you reach the expected result. 

async function getSpell(spellId) {
    const response = await fetch(`http://localhost:3000/spells/${spellId}`);
    if (!response.ok) {
        console.error(`‼️ HTTP error! Status: ${response.status} | Spell ${spellId} not found!`);
        return null;
    }
    const spell = await response.json();
    return spell;
}

function printSpellEffect(spell) {
    if (!spell) return;
    console.log(`✨ The spell "${spell.name}" effect is to ${spell.effect.toLowerCase()}.`);
}

// -----------------------
// Running the code 🚀
// -----------------------
const spellFive = await getSpell("5");
printSpellEffect(spellFive);

const spellSeventeen = await getSpell("17");
printSpellEffect(spellSeventeen);
