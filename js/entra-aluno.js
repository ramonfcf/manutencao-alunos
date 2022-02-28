const salasAlunos = ["3A", "3B", "3C"];

var botaoAdicionaAluno = document.querySelector("#adiciona-aluno");

botaoAdicionaAluno.addEventListener('click', function(){
 
    let recebeNomeAluno = document.querySelector(".input-nome").value; 
    let recebeSalaAluno = document.querySelector(".input-sala").value; 
    let recebeNota1Aluno = Number(document.querySelector(".input-nota-1").value);
    let recebeNota2Aluno = Number(document.querySelector(".input-nota-2").value);
    let recebeNota3Aluno = Number(document.querySelector(".input-nota-3").value);
    let recebeNota4Aluno = Number(document.querySelector(".input-nota-4").value);

    console.log(recebeNota1Aluno);
    console.log(recebeNomeAluno, recebeSalaAluno, recebeNota1Aluno, recebeNota2Aluno, recebeNota3Aluno, recebeNota4Aluno,);


})