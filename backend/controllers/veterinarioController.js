import Veterinario from "../models/Veterinario.js";

const register = async (req, res) => {
  // const { nombre, email, password } = req.body;
  try {
    // Guardar nuevo veterinario
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();
    res.json(veterinarioGuardado);
  } catch (err) {
    console.log(err);
  }
};

const profile = (req, res) => {
  res.json({ msg: "Mostrando perfil..." });
};

export { register, profile };
