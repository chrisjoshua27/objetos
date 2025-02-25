class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }

    fazerSom() {
        console.log("Este animal faz um som.");
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome, "Cachorro");
        this.raca = raca;
    }

    fazerSom() {
        console.log("Au au!");
    }
}

class Gato extends Animal {
    constructor(nome, cor) {
        super(nome, "Gato");
        this.cor = cor;
    }

    fazerSom() {
        console.log("Miau!");
    }
}

const cachorro1 = new Cachorro("Rex", "Labrador");
const gato1 = new Gato("Mia", "Preto");
const cachorro2 = new Cachorro("Thor", "Pastor Alemão");

cachorro1.fazerSom(); 
gato1.fazerSom(); 
cachorro2.fazerSom(); 

console.log(cachorro1);
console.log(gato1);
console.log(cachorro2);