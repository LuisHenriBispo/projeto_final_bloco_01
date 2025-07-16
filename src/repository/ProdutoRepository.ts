import { Produto } from "../model/Produto";

export interface ProdutoRepository{

    //CRUD
    numeroProduto(numeroProd: number): void;
    cadastrarProduto(produto: Produto): void;
    listarProduto(): void;
    atualizarProduto(produto: Produto): void;
    deletarProduto(numeroProd: number): void;
}