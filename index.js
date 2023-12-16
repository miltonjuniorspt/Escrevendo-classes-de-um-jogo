class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque = '';

        switch (this.tipo) {
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
                ataque = 'atacou';
                break;
        }

        console.log(`O ${this.tipo} ${this.nome} idade ${this.idade} anos, atacou usando ${ataque}`);
    }
}

let heroi = new Heroi('Giraia', 22, 'ninja');
heroi.atacar();


