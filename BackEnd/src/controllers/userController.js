import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import funcionario from '../models/Funcionario.js';
import validarCPF from '../services/validadorCpf.js';

const secret = 'your_jwt_secret';

export const login = async (req, res) => {
  const { cpf, senha } = req.body;

  if (!validarCPF(cpf)) {
    console.log('Invalid CPF format:', cpf); 
    return res.status(400).send({ error: 'Invalid CPF format' });
  }

  try {
    const Funcionario = await funcionario.findOne({ cpf });
    if (!Funcionario) {
      console.log('Funcionario not found for CPF:', cpf);
      return res.status(401).send({ error: 'Invalid CPF or password' });
    }
    
    console.log('Funcionario found:', Funcionario);

    const isPasswordValid = bcrypt.compareSync(senha, Funcionario.senha);
    if (!isPasswordValid) {
      console.log('Invalid password for CPF:', cpf);
      return res.status(401).send({ error: 'Invalid CPF or password' });
    }
    
    const token = jwt.sign({ userId: Funcionario._id }, secret, { expiresIn: '1h' });
    res.send({ token });
  } catch (error) {
    console.log('Error during login:', error);
    res.status(500).send({ error: 'Login failed' });
  }
};
