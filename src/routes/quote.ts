import { GetObjectCommand } from "@aws-sdk/client-s3"
import { Router } from "express"
import { s3Client } from "../aws/s3Client"
import path from "path"
import fs from "fs"

const quoteRouter = Router()

quoteRouter.get("/quote", async (_req, res) => {
    try {
        // const command = new GetObjectCommand({
        //     Bucket: process.env.AWS_QUOTE_BUCKET!,
        //     Key: "quotes.json"
        // })
        // const s3data = await s3Client.send(command)
        // const data = await data.Body?.transformToString()

        const filePath = path.join(__dirname, "../../resources/quotes.ts");
        const data = fs.readFileSync(filePath, "utf-8");

        if (!data) {
            return res.status(500).json({ error: "Empty response from S3" })
        }

        const quotes: string[] = JSON.parse(data)
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

        res.json({ quote: randomQuote })

    } catch (err) {
        console.log("Error getting quote:", err)
        res.status(500).json({ error: "Error getting quote" })
    }
})

export default quoteRouter