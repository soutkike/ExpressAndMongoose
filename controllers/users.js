const { response } = require("express");
const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const usuarioGet = (req, res = response) => {
  const params = req.query;
  res.json({
    params,
    msg: "controlador",
  });
};

const usuarioPost = async (req, res = response) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });
  const salt = bcrypt.genSaltSync();
  usuario.password = bcrypt.hashSync(password, salt);
  await usuario.save();
  res.json({
    usuario,
  });
};

const usuarioPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, correo, ...userData } = req.body;

  if (password) {
    const salt = bcrypt.genSaltSync();
    userData.password = bcrypt.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, userData);

  res.json({
    usuario,
  });
};

const usuarioPatch = (req, res = response) => {
  res.json({
    msg: "controlador patch",
  });
};

const usuarioDelete = (req, res = response) => {
  res.json({
    msg: "controlador delete",
  });
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioPatch,
  usuarioDelete,
};
