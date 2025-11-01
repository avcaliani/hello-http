// -----------------------
//  exercise-04.js
// ------------------
// In this file you will find a suggested structure for your code.
// You can modify it as you want, as long as you reach the expected result. 

// Atualizar parâmetro específico do spell
async function updateSpellName(spellId, updateParameter, newValue) {
    const response = await fetch(`http://localhost:3000/spells/${spellId}`,{
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ [updateParameter]: newValue}),
    }
    );
    if (!response.ok) {
        throw new Error(`‼️ HTTP error! Status: ${response.status} | Spell ${spellId} not updated!`);
    }
    const spellUpdate = await response.json();
    console.log(spellUpdate)
    return spellUpdate;

}

}



// -----------------------
// Running the code 🚀
// -----------------------
await updateSpellName("1", "name", "Accio");

