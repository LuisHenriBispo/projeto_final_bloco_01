import ler = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Planta } from "./src/model/Planta";
import { Controller } from "./src/controller/Controller";

//TESTES
//const p1 = new Planta(1, "Girassol", 30, 3);
//const p2 = new Planta(2, "Orquidea", 35, 4);

export function main() {
    let controller : Controller = new Controller();
    let opcao: number;

    while (true) {
        console.log(colors.fg.greenstrong + "-------------------------------------------------------------------------------");
        console.log("                                                                               ");
        console.log(colors.fg.greenstrong + "                                  PLANTAVIDA                                    ");
        console.log("                  O melhor quando se fala de cuidados com seu jardim" + colors.reset);
        console.log("                                                                               ");
        console.log(colors.fg.greenstrong + "-------------------------------------------------------------------------------");
        console.log("                                                                               ");
        console.log(`${colors.reset}                            1 - Cadastrar produto                     `);
        console.log("                            2 - Listar produtos cadastrados                         ");
        console.log("                            3 - Atualizar produto          ");
        console.log("                            4 - Deletar produto                       ");
        console.log(`                            5 - Sair${colors.reset}                            `);
        console.log("                                                                               ");
        console.log(colors.fg.greenstrong + "-------------------------------------------------------------------------------");
        console.log("                                                                               ");

        console.log(colors.fg.greenstrong + "Opção escolhida: " + colors.reset);
        opcao = ler.questionInt("");

        switch (opcao) {
            case 1: //Cadastro de produtos
                console.log(colors.fg.greenstrong + "\n------- Cadastramento de produtos -------\n" + colors.reset);

                const nome = ler.question(colors.fg.greenstrong + "Digite o nome do produto: " + colors.reset);

                const quantidade = ler.questionInt(colors.fg.greenstrong + "Quantidade em estoque: " + colors.reset);
                const preco = ler.questionInt(colors.fg.greenstrong + "Informe o preco do produto (R$): " + colors.reset);

                const novoProduto = new Planta(0, nome, preco, quantidade);

                controller.cadastrarProduto(novoProduto);
                console.log(`Produto ${nome} cadastrado com sucesso!`);
                break;

            case 2: // Listando os produtos
                console.log(colors.fg.greenstrong + "\n------- Produtos cadastrados -------\n" + colors.reset);
                console.log(colors.fg.green + "-------------------------------------------------------------------------------");
                controller.listarProduto();
                console.log(colors.fg.green + "-------------------------------------------------------------------------------");
                break;

            case 3: //Atualiza se tiver um produto com esse numero
                console.log(colors.fg.greenstrong + "\n------- Atualizar produto -------\n" + colors.reset);
                
                const numeroAtualizar = ler.questionInt("Informe o número do produto: ");
                const ProdutoAtualizar = controller.numeroProduto(numeroAtualizar);

                if (ProdutoAtualizar) {
                    const novoNome = ler.question("Novo nome do produto: ");
                    ProdutoAtualizar.setnomeProd(novoNome);
                    controller.atualizarProduto(ProdutoAtualizar);
                    console.log("produto atualizado com sucesso.");
                } else {
                    console.log("produto não encontrado.");
                }
                break;

            case 4: // Exclui se tiver aquele numero de produto
                console.log(colors.fg.greenstrong + "\n------- Deletar um produto -------\n" + colors.reset);
                const numeroExcluir = ler.questionInt("Informe o número da produto que deseja excluir: ");
                controller.deletarProduto(numeroExcluir);
                break;

            case 5: //Sai do programa
                console.log(colors.fg.greenstrong + "Saindo..." + colors.reset);
                return;

            default:
                console.log("Opção inválida, tente novamente.");
        }
    }
}
main();