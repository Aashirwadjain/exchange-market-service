import dotenv from "dotenv"
import express, { Express, Request, Response } from "express"

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000


// GET API
app.get("/", (req: Request, res: Response) => {
    res.send("Exchange Market Service Working")
})

app.listen(port, () => {
    console.log(`[server]: Server is running at port: ${port}`)
})