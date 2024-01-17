import express from "express"
import { kopi } from "../controller/kopi"
const app = express()
app.use(express.json())

app.post('/kopilebonnn/kopi',kopi)

export default app