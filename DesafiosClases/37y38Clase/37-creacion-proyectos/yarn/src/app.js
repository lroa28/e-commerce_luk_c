import express from 'express'
import FileContainer from 'filecontainer'

const Container = new FileContainer ()
Container.addEntity('users', './users.json')
const app = express()

app.get('/',async (req,res) => {
    await Container.save({name:"Manu", age:26}, 'users')
    res.send('ok');
})

app.listen(8080, ()=> console.log("Conectada"))