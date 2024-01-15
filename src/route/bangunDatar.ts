import express from "express"
import { kelilingLingkaran, kelilingPersegi, kelilingPersegiPanjang, luasLingkaran, luasPersegi, luasPersegiPanjang, luasSegitiga } from "../controller/bangunDatar"
import { validateBola } from "../middleware/validateBola"
import { validateKubus } from "../middleware/validateKubus"
import { validatePersegipanjang } from "../middleware/validatePersegipanjang"
import { validateSegitiga } from "../middleware/validateSegitiga"
const app = express()

/**  allow read a body */
app.use(express.json())

/** fungsi use digunakan untuk menerapkan sebuah fungsi pada object express. 
 * fungsi tersebut akan otomatis dijalankan */

app.post(`/lingkaran/luas`,validateBola, luasLingkaran)
app.post(`/lingakaran/keliling`,validateBola, kelilingLingkaran)
app.post(`/Persegi/luas`,validateKubus,luasPersegi)
app.post(`/Persegi/keliling`,validateKubus,kelilingPersegi)
app.post(`PersegiPanjang/luas`,validatePersegipanjang,luasPersegiPanjang)
app.post(`PersegiPanjang/keliling`,validatePersegipanjang,kelilingPersegiPanjang)
app.post(`/Segitiga/luas`,validateSegitiga,luasSegitiga)
export default app 