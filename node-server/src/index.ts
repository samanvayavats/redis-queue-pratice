import express, { json } from 'express'
import { createClient } from 'redis'
const app = express()
app.use(express.json())
const client = createClient()

await client.connect()

app.post('/' ,async(req, res)=>{
    const {name , userId , problem , code} = req.body

    client.lPush("submission" , JSON.stringify({name , userId , problem , code}))

    return res.json({
        message : "sucessfully added in the queue"
    })

})





app.listen(3000 , ()=>{
    console.log('the server is running on the port 3000')
})
