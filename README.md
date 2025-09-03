

# hello-http

This is a repository I created to help my sister studying JS, more specifically managing HTTP API requests using JS.  
The content here is very simple and focused on helping people to learn.

### Exercises

1. TBD

<img src="https://cdn-icons-png.flaticon.com/512/4456/4456616.png" align="right" height="80px"/>

### Spell API

To do the exercices you'll need to up our own API, to do that, type...

```bash
# URL: http://localhost:3000
npx json-server --watch api.json --port 3000
```

| Method | Endpoint       | Description               | Body Example                     |
|--------|----------------|---------------------------|----------------------------------|
| GET    | `/spells`      | List all spells           | –                                |
| GET    | `/spells/:id`  | Get a specific spell       | –                                |
| POST   | `/spells`      | Add a spell               | `{ id, name, effect }`           |
| PUT    | `/spells/:id`  | Update spell effect       | `{ effect }`                     |
| DELETE | `/spells/:id`  | Delete a spell            | –                                |

### Useful Links

The following links are just a **quick start** so you can do the exercises in this repository.  

I do encorage you to study deeper the topics you need, believe me, there's much more to learn, this is just a start!

- A Free API → [Wizard World API](https://github.com/MossPiglets/WizardWorldAPI)
- NeetCodeIO → [What is HTTP?](https://youtube.com/shorts/wOPrIhmi7l0?si=SDQFfoYOWZ_wAXHk)
- ByteByteGo → [What Is REST API?](https://www.youtube.com/watch?v=-mN3VyJuCjM)
- SoftwareStack-QC → [What is Postman?](https://youtube.com/shorts/khYbWDJpLgA?si=eiOo14K83-LWzeai)
- rocketseat → [NodeJS history in 1 minute](https://youtube.com/shorts/AlCAhpyFcF8?si=WXuUBSBI9U79o4Rw)

> About the amazing Spell API logo...  
> [Blessing icons created by Darius Dan - Flaticon](https://www.flaticon.com/free-icons/blessing), go check it out!
