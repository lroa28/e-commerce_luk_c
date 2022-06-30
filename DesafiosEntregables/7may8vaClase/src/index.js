import express from "express";
import { router } from "./src/router.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //index de la carpeta public expuesto en ntra ruta principal
app.use("/api/productos", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));