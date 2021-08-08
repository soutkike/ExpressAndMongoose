const { response } = require("express");

const usuarioGet = (req, res = response) => {
  const params = req.query;
  res.json({
    params,
    msg: "controlador",
  });
};

const usuarioPost = (req, res = response) => {
  res.json({
    msg: "controlador post",
  });
};

const usuarioPut = (req, res = response) => {
  const { id } = req.params;
  res.json({
    id,
    msg: "controlador put",
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
