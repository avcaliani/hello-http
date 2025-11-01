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
    const response = await fetch (`http://localhost:3000/spells/${spellId}`,{
        method: 'DELETE',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(spellId)
    }
);

    if (!response.ok) {
                throw new Error(`‼️ HTTP error! Status: ${response.status} | Spell ${spellId} could not be found or deleted!`);
            }
    const spellDelete = await response.json();
    console.log(spellDelete)
    return spellDelete;
}

// -----------------------
// Running the code 🚀
// -----------------------

const allSpells = await getAllSpells()
// Checar lista de spells ANTES do delete
console.log(allSpells)

await deleteSpell("1000");
await deleteSpell("1001");

