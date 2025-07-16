export abstract class Produto{
    private _numeroProd: number;
    
    private _nomeProd: string;

    private _quantidade: number;
    
    private _preco: number;

    //Construtor
    constructor(numeroProd: number, nomeProd: string, preco: number, quantidade: number){
        this._numeroProd = numeroProd;
        this._nomeProd = nomeProd;
        this._quantidade = quantidade;
        this._preco = preco;
    }

    public listar():void{
        console.log(`\nNumero do produto: ${this._numeroProd}`);
        console.log(`\nProduto: ${this._nomeProd}`);
        console.log(`\nQuantidade: ${this._quantidade}`);
        console.log(`\nPreco: ${this._preco.toFixed(2)}`);
    }

    //Metodos (GET/ SET)

    public getquantidade(): number {
        return this._quantidade;
    }

    public setquantidade(value: number): void {
        this._quantidade = value;
    }

    public getnumeroProd(): number {
        return this._numeroProd;
    }
    public setnumeroProd(value: number) {
        this._numeroProd = value;
    }

    public getnomeProd(): string {
        return this._nomeProd;
    }
    public setnomeProd(value: string) {
        this._nomeProd = value;
    }

    public getpreco(): number {
        return this._preco;
    }
    public setpreco(value: number) {
        this._preco = value;
    }
}