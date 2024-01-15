import express from "express"
import { volumeTabung, luaspermukaanTabung, volumeKubus, luaspermukaanKubus , volumeBalok, luaspermukaanBalok, volumeBola, luaspermukaanBola } from "../controller/bangunRuang"
import { validateTabung } from "../middleware/validateTabung"
import { validateKubus } from "../middleware/validateKubus"
import { validateCube } from "../middleware/validateCube"
import { validateBola } from "../middleware/validateBola"
const app = express()

app.use(express.json())

app.post(`/Tabung/volume`,validateTabung,volumeTabung)
app.post(`/Tabung/luaspermukaan`,validateTabung, luaspermukaanTabung)
app.post(`/Kubus/volume`,validateKubus,volumeKubus)
app.post(`/Kubus/luaspermukaan`,validateKubus,luaspermukaanKubus)
app.post(`/Balok/volume`,validateCube,volumeBalok)
app.post(`/Balok/luaspermukaan`,validateCube,luaspermukaanBalok)
app.post(`/Bola/volume`,validateBola,volumeBola)
app.post(`/Bola/luaspermukaan`,validateBola,luaspermukaanBola)
export default app 