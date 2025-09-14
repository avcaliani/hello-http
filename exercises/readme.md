# 🧙 API Exercises

Before running the exercises, make sure you have the [Spell API](../README.md) up and running.

### 01. Find spells with multiple "a"s

Using the `/spells` endpoint, create a script that prints all spells whose names contain more than one letter `"a"`.

➡️ [`exercise-01.js`](./exercise-01.js)

---

### 02. What does these spells do?

Using the `/spells/:id` endpoint, create a script that prints the effects of the spells with IDs **5** and **17**.  
If the API returns an error, clearly display the error message.

➡️ [`exercise-02.js`](./exercise-02.js)

---

### 03. Create missing spells

Using the `/spells/` endpoint, create a script that adds the following new spells:

- **Rictusempra** → *Tickling charm*  
- **Obliviate** → *Erases memories*  

➡️ [`exercise-03.js`](./exercise-03.js)

---

### 04. Fixing incorrect spell name

Using the `/spells/:id` endpoint, create a script that corrects the misspelled **Accio** spell.  
It is currently stored as `acciooooo`, but it should be `Accio`.

➡️ [`exercise-04.js`](./exercise-04.js)

---

### 05. Delete old test spells

Using the `/spells/:id` endpoint, create a script that deletes the test spells created in the past with IDs **1000** and **1001**.  
If the API returns an error, clearly display the error message.

➡️ [`exercise-05.js`](./exercise-05.js)
