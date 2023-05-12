// ATIVIDADE 1
let escolha = parseInt(prompt("Digite um valor entre 0 a 10"))

while (escolha < 0 || escolha > 10 || isNaN(escolha)){
    alert('valor inválido, insira um valor válido')
    escolha = parseInt(prompt("Digite um valor entre 0 a 10"))
}
alert('Aprovado!!')



// ATIVIDADE 2
let nome = prompt('Digite seu nome')
let senha = prompt('digite sua senha')

while (nome === senha){
    alert('digite uma senha diferente do seu nome')
    senha = prompt('digite sua senha, diferente do nome')
}
alert('senha aprovada!')


// ATIVIDADE 3
let soma = 0
let media = 0
let quantidadeLoop = 0
let entradaNum = parseInt(prompt('Digite um número'))

while (entradaNum >= 0 && entradaNum <= 10){
    soma += entradaNum
    quantidadeLoop++
    media = (soma / quantidadeLoop)
    entradaNum = parseInt(prompt('Digite um número'))
}
alert(`A soma é: ${soma}; E a média é: ${media}`)


// ATIVIDADE 4
let totalVotosA = 0;
let totalVotosB = 0;
let totalVotosC = 0;
let voto = prompt('Insira aqui o seu voto').toUpperCase();

while (voto != 'X'){
    if (voto === 'A'){
        totalVotosA++
        alert("Voto registrado com sucesso.")
        voto = prompt('Insira aqui o seu voto').toUpperCase();

    } else if (voto === 'B') {
        totalVotosB++
        alert("Voto registrado com sucesso.")
        voto = prompt('Insira aqui o seu voto').toUpperCase();

    } else if (voto === 'C') {
        totalVotosC++
        alert("Voto registrado com sucesso.")
        voto = prompt('Insira aqui o seu voto').toUpperCase();

    } else {
        alert("Candidato não encontrado");
        voto = prompt('Insira aqui o seu voto').toUpperCase();

    }
}
alert(`Candidato A: ${totalVotosA}; Candidato B: ${totalVotosB}; Candidato C: ${totalVotosC}.`)