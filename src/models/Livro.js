import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: [true, "O título do livro é obrigatório"]},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: [true, "O autor é obrigatório"]},
    editora: {type: String, required: [true, "A editora é obrigatória"], enum: { values: ["Dicionario do autodidata", "Bordeslesscoding"], message: "A editora {VALUE} não é válida"}},
    numeroPaginas: {type: Number, min: [10, "O numero de paginas deve estar entre 10 e 5000 {VALUE}"], max: [5000, "O numero de paginas deve estar entre 10 e 5000 {VALUE}"]},
  }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;