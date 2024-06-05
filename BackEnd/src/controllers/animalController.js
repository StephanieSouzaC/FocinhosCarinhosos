import animal from "../models/Animal.js";


class animalController {

    static async getAnimais(req, res){
        try{
            const getAnimais = await animal.find({});
            res.status(200).json(getAnimais);
        }catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição.`});
        };
    };

    static async getAnimaisById(req, res){
        try{
            const id = req.params.id;
            const animalEncontrado = await animal.findById(id);
            res.status(200).json(animalEncontrado);
        } catch (error){
            res.status(500).json({message: `${error.message} - Falha na busca.`});
        };
    };

    static async getAnimaisByName(req, res) {
        try {
            const nome = req.params.nome;
            const animalEncontradoNome = await animal.findOne({ nome: nome });

            if (animalEncontradoNome) {
                res.status(200).json(animalEncontradoNome);
            } else {
                res.status(404).json({ message: 'Animal não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na busca.` });
        }
    }

    static async getAnimaisByType(req, res) {
        try {
            const tipo = req.params.tipo;
            const animalEncontradoTipo = await animal.findOne({ tipo: tipo });

            if (animalEncontradoTipo) {
                res.status(200).json(animalEncontradoTipo);
            } else {
                res.status(404).json({ message: 'Animal não encontrado' });
            };
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na busca.` });
        };
    };

    static async cadastrarAnimal(req, res){
        try {
            const novoAnimal = await animal.create(req.body);
            res.status(201).json({message: "Animal cadastrado com sucesso", animal: novoAnimal}); 
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao cadastrar o animal.`});
        };
    };

    static async alterarCadastroAnimalComNome(req, res){
        try{
            const nome = req.params.nome;
            const animalEncontradoNome = await animal.findOne({ nome: nome });
            await animal.findOneAndUpdate(animalEncontradoNome, req.body);
            res.status(200).json({message:"Cadastro do animal alterado com sucesso."});
        } catch(error){
            res.status(500).json({message:`${error.message} - Falha ao alterar o cadastro.`});
        };
    };

    static async alterarCadastroAnimalComId(req, res){
        try{
            const id = req.params.id;
            await animal.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"Cadastro do animal alterado com sucesso."});
        } catch(error){
            res.status(500).json({message:`${error.message} - Falha ao alterar o cadastro.`});
        };
    };

    static async deletarCadastroAnimalId(req, res) {
        try {
            const id = req.params.id;
            await animal.findByIdAndDelete(id);
            res.status(200).json({message: "Cadastro do animal deletado"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na exclusão.`});
        };
    };

    // falta rota para pesquisar nome e tipo juntos.
};

export default animalController;
