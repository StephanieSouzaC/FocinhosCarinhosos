import express from "express";
import Animais from './animaisRoutes.js';
import Funcionarios from "./funcionariosRoutes.js";



const routes = (app) =>{
    app.route("/").get((req, res) => res.status(200).send("teste"));;
    app.use(express.json(), Animais, Funcionarios);

};

export default routes;