import mongoose from "mongoose";
import Veterinario from "./Veterinario";

const pacientesSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    propietario: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fechaDeAlta: {
      type: Date,
      required: true,
    },
    sintomas: {
      type: String,
      required: true,
    },
    veterinario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Veterinario",
    },
  },
  {
    timestamps: true,
  }
);

const Paciente = mongoose.model("Paciente", pacientesSchema);

export default Paciente;