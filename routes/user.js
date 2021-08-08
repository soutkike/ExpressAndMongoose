const { Router } = require("express");
const controller = require("../controllers/users");

const router = Router();

router.get("/", controller.usuarioGet);
router.post("/", controller.usuarioPost);
router.put("/:id", controller.usuarioPut);
router.patch("/", controller.usuarioPatch);
router.delete("/", controller.usuarioDelete);

module.exports = router;
