import { Produto } from "./Produto";

export class Planta extends Produto{

    constructor(numeroProd: number,nomeProd: string, quantidade: number, preco: number,){
        super(numeroProd, nomeProd, quantidade, preco);
    }

}