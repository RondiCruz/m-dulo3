let pessoa = {
    nome: "Zezinho",
    idade: 22,
    reservista: true,
    cidade: {
        nome:"Joinville",
        estado: "Santa Catarina"
    },
    telefones: [
        "555-1234","999999999"
    ],
    geraEndereco: function(){
        return `${this.cidade.nome} - ${this.telefones[0]}`;
    },
    somaIdade:function(valorAdicional){
        return this.idade + valorAdicional;
    },
    get nomeCompleto() {
        return this.nome;
    },
    set nomeCompleto(nome){
        this.nome = nome;
    }
};
pessoa.nomeCompleto = "Zezinho Sauro";
console.log(pessoa.geranomeCompleto);

console.log(pessoa.geraEndereco());
console.log(pessoa.somaIdade(20));


console.log(typeof(pessoa));
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['nome']);
pessoa.nome = "Zezinho da Silva";
console.log(pessoa.nome);
pessoa['nome'] = "Zezinho da Silva Sauro";
console.log(pessoa['nome']);

pessoa.endereco = "Rua lalalala 100"
console.log(pessoa);

console.log(JSON.stringify(pessoa));

let objTexto = '{"nome":"mariazinha"}';
let objjs = JSON.parse(objTexto);
console.log(objjs);
