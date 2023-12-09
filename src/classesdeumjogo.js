class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "arqueiro":
                ataque = "usou flechas";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }

        const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

// Exemplo de uso
const heroiMago = new Heroi("Gandalf", 1000, "mago");
const heroiGuerreiro = new Heroi("Conan", 35, "guerreiro");
const heroiArqueiro = new Heroi("legolas", 32, "arqueiro");
const heroiNinja = new Heroi("Hanzo", 28, "ninja");

heroiMago.atacar();
heroiGuerreiro.atacar();
heroiArqueiro.atacar();
heroiNinja.atacar();

 