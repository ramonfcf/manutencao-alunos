const salasAlunos = ["3A", "3B", "3C"];

var botaoAdicionaAluno = document.querySelector("#adiciona-aluno");

botaoAdicionaAluno.addEventListener('click', function(){
 
    let recebeNomeAluno = document.querySelector(".input-nome").value; 
    let recebeSalaAluno = document.querySelector(".input-sala").value; 
    let recebeNota1Aluno = Number(document.querySelector(".input-nota-1").value);
    let recebeNota2Aluno = Number(document.querySelector(".input-nota-2").value);
    let recebeNota3Aluno = Number(document.querySelector(".input-nota-3").value);
    let recebeNota4Aluno = Number(document.querySelector(".input-nota-4").value);

    let mediaAluno = calculaMedia(recebeNota1Aluno, recebeNota2Aluno, recebeNota3Aluno, recebeNota4Aluno);
    let situacaoAluno = validaNota(mediaAluno);

    let alunoTr = document.createElement('tr');
    
    let tdNome = document.createElement('td');
    let tdSala = document.createElement('td');
    let tdNota1 = document.createElement('td');
    let tdNota2 = document.createElement('td');
    let tdNota3 = document.createElement('td');
    let tdNota4 = document.createElement('td');
    let tdMedia = document.createElement('td');
    let tdSituacao  = document.createElement('td');
    
    tdNome.textContent = recebeNomeAluno;
    tdSala.textContent = recebeSalaAluno;
    tdNota1.textContent = recebeNota1Aluno;
    tdNota2.textContent = recebeNota2Aluno;
    tdNota3.textContent = recebeNota3Aluno;
    tdNota4.textContent = recebeNota4Aluno;
    tdMedia.textContent = mediaAluno;
    tdSituacao.textContent = situacaoAluno;

    alunoTr.appendChild(tdNome);
    alunoTr.appendChild(tdSala);
    alunoTr.appendChild(tdNota1);
    alunoTr.appendChild(tdNota2);
    alunoTr.appendChild(tdNota3);
    alunoTr.appendChild(tdNota4);
    alunoTr.appendChild(tdMedia);
    alunoTr.appendChild(tdSituacao);

    let tabela = document.querySelector(".tabela-alunos");

    tabela.appendChild(alunoTr);
})
