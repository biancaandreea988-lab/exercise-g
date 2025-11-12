import express from "express";
import healthRouter from "./routes/health"
import quoteRouter from "./routes/quote";

import { config } from "dotenv";
config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(healthRouter)
app.use(quoteRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})