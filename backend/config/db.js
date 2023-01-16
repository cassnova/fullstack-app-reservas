import mongoose from "mongoose";

const connectBD = async () => {
  try {
    const bd = await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.hhbxfb9.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const url = `${bd.connection.host}:${bd.connection.port}`;
    console.log(`MongoDB conectado en: ${url}`);
  } catch (err) {
    console.error(`error: ${err.message}`);
    process.exit(1);
  }
};

export default connectBD;
