import express from "express";
import SliderRoutes from "./routes/slider.routes";

//Instacia de express
const app = express();

//Puerto del servidor
app.set("port", process.env.PORT || 3000);


//Rutas
app.use(express.json());

//Ruta inicial
app.get("/", (req, res) => {
  res.json({ message: "welcome to my aplication" });
});

//Rutas slider
app.use('/api/slider',SliderRoutes);

export default app;