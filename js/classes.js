class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    infoPessoa(){
        return this.nome
    }
}

class Aluno extends Pessoa{
    constructor(nome, idade, curso){
        super(nome, idade)
        this.curso = curso;
    }

    infoAluno(){
        return "aluno "+this.nome+', tem '+this.idade+' anos e cursa '+this.curso+'.'
    }
}

class Professor extends Pessoa{
    constructor(nome, idade, departamento){
        super(nome, idade)
        this.departamento = departamento;
    }

    infoProfessor(){
        return "Professor "+this.nome+', tem '+this.idade+' anos e da aula no departamento: '+this.departamento+'.'
    }
}

