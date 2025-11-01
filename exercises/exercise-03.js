// -----------------------
//  exercise-03.js
// ------------------
// In this file you will find a suggested structure for your code.
// You can modify it as you want, as long as you reach the expected result.

// Dúvidas ❓
// 1. Pra testar se estava funcionando eu não preenchi o segundo spell, e no console apareceu:
// New spell added { id: '9ffe' } -> é como base 

async function createSpell(spell) {
    const response = await fetch("http://localhost:3000/spells/",{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(spell),
    }
    );
    
    if (!response.ok) {
        throw new Error(`‼️ HTTP error! Status: ${response.status}`);
    } 
    const newSpell = await response.json();
    console.log("✅ New spell added", newSpell);
    return newSpell;
}

// Checar se o spell já existe
async function checkExistingSpell(spellId) {
    const response = await fetch(`http://localhost:3000/spells/${spellId}`);
    if (response.ok) {
        throw new Error(`An spell with ID ${spellId} aready exists! Status: ${response.status}`);
    }
    console.log(`There is no spell with ID ${spellId} ✔`)
}


// -----------------------
// Running the code 🚀
// -----------------------

await checkExistingSpell("17")
await createSpell({ 
    id: "17", 
    name: "Rictusempra", 
    effect: "Tickling charm"
});

// Obliviate → Erases memories
const obliviate = {
    id: "18", 
    name: "Obliviate", 
    effect: "Erases memories"
}
await checkExistingSpell(obliviate.id)
await createSpell(obliviate);


// To check if it worked, run the previous exercise-02.js file ;)
// Shomething should be different now... 👀
