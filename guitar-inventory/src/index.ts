import express from "express"
import path from 'path'
const app = express()
const port = 8080

// configure express to use EJS
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get('/', (req, res)=>{
    // render the ejs template
    res.render("index")
})

app.listen(port, ()=>{
    // tslint:disable-next-line:no-console
    console.log(`server started at port ${port}`)
})