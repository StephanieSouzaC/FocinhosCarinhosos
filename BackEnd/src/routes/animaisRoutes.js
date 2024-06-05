import express from "express";
import animalController from "../controllers/animalController.js";

const routes = express.Router();

routes.get('/Animais', animalController.getAnimais);
routes.get('/Animais/:id', animalController.getAnimaisById);
routes.get('/Animais/nome/:nome', animalController.getAnimaisByName);
routes.get('/Animais/tipo/:tipo', animalController.getAnimaisByType);
routes.post('/Animais', animalController.cadastrarAnimal);
routes.put('/Animais/nome/:nome', animalController.alterarCadastroAnimalComNome);
routes.put('/Animais/:id', animalController.alterarCadastroAnimalComId);
routes.delete('/Animais/:id', animalController.deletarCadastroAnimalId);
// routes.get('/Animais', animalController.getAnimaisByNameAndType);

export default routes;