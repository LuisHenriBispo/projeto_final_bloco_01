import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class Controller implements ProdutoRepository{

    private listaProduto: Array<Produto> = [];
    private proximoNumero: number = 1;

    //Listando os produtos add ao Array<Produto>
    public listarProduto(): void {
        for (let numeroProd of this.listaProduto) {
            numeroProd.listar();
        }
    }

    //Ao cadastrar o produto, ele seta este numero do produto e soma, exemplo:(prod1, prod2)
    public cadastrarProduto(produto: Produto): void {
        produto.setnumeroProd(this.proximoNumero++);
        this.listaProduto.push(produto);
    }

    public numeroProduto(numeroProd: number): Produto | undefined {
        return this.listaProduto.find(produto => produto.getnumeroProd() === numeroProd);
    }

    public atualizarProduto(produtoAtualizado: Produto): void {
        const index = this.listaProduto.findIndex(c => c.getnumeroProd() === produtoAtualizado.getnumeroProd());
        if (index !== -1) {
            this.listaProduto[index] = produtoAtualizado;
        } else {
            console.log("Produto não encontrado para atualização.");
        }
    }

    public deletarProduto(numeroProd: number): void {
        const index = this.listaProduto.findIndex(c => c.getnumeroProd() === numeroProd);
        if (index !== -1) {
            this.listaProduto.splice(index, 1);
            console.log("Produto deletado com sucesso.");
        } else {
            console.log("Produto não encontrado para exclusão.");
        }
    }

}