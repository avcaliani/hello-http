// -----------------------
//  exercise-01.js
// ------------------

async function getAllSpells() {
    const response = await fetch("https://wizard-world-api.herokuapp.com/Spells");
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const spells = await response.json();
    return spells;
}

function filterSpells(spells) {
    const filteredSpells = [];
    for (const spell of spells) {
        const numberOfAs = spell.name.toLowerCase().split("a").length - 1;
        if (numberOfAs > 1) {
            filteredSpells.push(spell);
        }
    }
    return filteredSpells;
}

function printSpells(spells) {
    console.log("-+-+-+-+-+-+-+-+-+-");
    console.log(" List of Spells ✨");
    console.log("-+-+-+-+-+-+-+-+-+-");
    for (const spell of spells) {
        console.log(` → ${spell.name}`);
    }
}

// -----------------------
// Running the code 🚀
// -----------------------
const allSpells = await getAllSpells();
console.log(`There are ${allSpells.length} spells in total.`);
const filteredSpells = filterSpells(allSpells);
console.log(`Only ${filteredSpells.length} spells have two or more letter 'A' in the name.`);
printSpells(filteredSpells);
