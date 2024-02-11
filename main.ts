interface dados {
    nome: string;
    cpf: string;
};

let pessoa: dados;

pessoa = {
    nome: 'Caio',
    cpf: '902.876.567-98',
};

const verificador: RegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/

if (verificador.test(pessoa.cpf)) {
    console.log(`Olá ${pessoa.nome}`);
}

else {
    console.log('Cpf inválido');
};