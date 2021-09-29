const { Router } = require("express");
const controller = require("../controllers/users");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  isRoleValid,
  isEmailUnique,
  doesUserIDExist,
} = require("../helpers/db-validators");

const router = Router();

router.get("/", controller.usuarioGet);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("correo", "El correo ingresado no es válido").isEmail(),
    check("correo").custom(isEmailUnique),
    check("password", "La contraseña es muy corta").isLength({ min: 6 }),
    check("rol").custom(isRoleValid),
    validarCampos,
  ],
  controller.usuarioPost
);
router.put(
  "/:id",
  [
    check("id", "El ID no es valido").isMongoId(),
    check("id").custom(doesUserIDExist),
  ],
  validarCampos,
  controller.usuarioPut
);
router.patch("/", controller.usuarioPatch);
router.delete("/", controller.usuarioDelete);

module.exports = router;
