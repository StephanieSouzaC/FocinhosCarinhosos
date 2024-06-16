import express from 'express';
import { login } from '../controllers/userController.js';

const routes = express.Router();

routes.post('/login', login);

export default routes;
