// -----------------------
//  exercise-05.js
// ------------------
// In this file you will find a suggested structure for your code.
// You can modify it as you want, as long as you reach the expected result. 


// Checar lista completa de spells 
async function getAllSpells() {
    const response = await fetch("http://localhost:3000/spells");
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const spells = await response.json();
    return spells;
}

// Deletar um spell por ID
async function deleteSpell(spellId) {
    // Add your code here...
    // If you need to add parameters in the function signature, 
    // feel free to do so.
}

// -----------------------
// Running the code 🚀
// -----------------------

const allSpells = await getAllSpells()
// Checar lista de spells ANTES do delete
console.log(allSpells)

await deleteSpell("1000");
await deleteSpell("1001");

