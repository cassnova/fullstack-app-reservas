const register = (req, res) => {
  res.send("Desde API/VETERINARIOS");
};

const profile = (req, res) => {
  res.send("Desde API/VETERINARIOS/perfil");
};

export { register, profile };
