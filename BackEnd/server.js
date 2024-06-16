import "dotenv/config";
import app from "./src/app.js";
import cors from "cors";

const PORT =8080;

app.use(cors());

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});