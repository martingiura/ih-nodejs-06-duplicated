// 1. IMPORTACIONES
const express = require("express")
const router = express.Router() // ESTABLECIENDO EN INSTANCIA EL MANEJO DEL RUTERO

// 2. RUTAS DE LA URL BASE
router.get("/", (req, res) => {
	res.send("Estás en el home de teachers")
})

router.get("/mike", (req, res) => {
	res.send("Estás en la pagina de teachers de Mike")
})

// 3. EXPORTACIONES
module.exports = router