class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar um ataque
    atacar() {
        let ataque;

        switch(this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'não possui ataque definido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias de heróis e realizando ataques
const mago = new Heroi('Merlin', 105, 'mago');
const guerreiro = new Heroi('Arthur', 35, 'guerreiro');
const monge = new Heroi('Li', 40, 'monge');
const ninja = new Heroi('Hanzo', 30, 'ninja');

mago.atacar(); 
guerreiro.atacar(); 
monge.atacar();
ninja.atacar(); 