import ler = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Planta } from "./src/model/Planta";

//TESTES
const p1 = new Planta(1, "Girassol", 30, 3);
const p2 = new Planta(2, "Orquidea", 35, 4);

export function main() {
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
            case 1:
                console.log(colors.fg.greenstrong + "\n------- Cadastramento de produtos -------\n" + colors.reset);

                const nome = ler.question(colors.fg.greenstrong + "Digite o nome do produto: " + colors.reset);
                const preco = ler.questionInt(colors.fg.greenstrong + "Informe o preco do produto (R$): " + colors.reset);
                console.log(`Produto cadastrado: ${nome} - R$${preco.toFixed(2)}`);
                break;

            case 2:
                console.log(colors.fg.greenstrong + "\n------- Produtos cadastrados -------\n" + colors.reset);
                console.log("------------------------------");
                p1.listar();
                console.log("------------------------------");
                console.log("------------------------------");
                p2.listar();
                console.log("------------------------------");
                break;

            case 3:
                console.log(colors.fg.greenstrong + "\n------- Atualizar produto -------\n" + colors.reset);
                break;

            case 4:
                console.log(colors.fg.greenstrong + "\n------- Deletar um produto -------\n" + colors.reset);
                break;

            case 5:
                console.log(colors.fg.greenstrong + "Saindo..." + colors.reset);
                return;

            default:
                console.log("Opção inválida, tente novamente.");
        }
    }
}
main();