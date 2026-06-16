import ErrorBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErrorBase {
    constructor(mensagem = "Um ou mais dados fornecidos são inválidos.", status = 400) {
        super(mensagem, status);
    }
}


export default RequisicaoIncorreta;