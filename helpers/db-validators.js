const Role = require("../models/role");
const Usuario = require("../models/usuario");

const isRoleValid = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no está registrado`);
  }
};

const isEmailUnique = async (correo = "") => {
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error(`El email ${correo} ya está registrado`);
  }
};

const doesUserIDExist = async (id = "") => {
  const existeID = await Usuario.findById(id);
  if (!existeID) {
    throw new Error(`El id no existe ${id} `);
  }
};

module.exports = {
  isRoleValid,
  isEmailUnique,
  doesUserIDExist,
};
