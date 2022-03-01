const salasAlunos = ["3A", "3B", "3C"];

var botaoAdicionaAluno = document.querySelector("#adiciona-aluno");

botaoAdicionaAluno.addEventListener('click', function(){

    var form = document.querySelector('#form-aluno');

    var aluno = adicionaAluno(form);

    console.log(aluno.nome);
    
    let recebeNomeAluno = aluno.nome; 
    let recebeSalaAluno = aluno.sala
    let recebeNota1Aluno = aluno.nota1;
    let recebeNota2Aluno = aluno.nota2;
    let recebeNota3Aluno = aluno.nota3;
    let recebeNota4Aluno = aluno.nota4;

   // let situacaoAluno = verificaSituacao(mediaAluno);

    let alunoTr = document.createElement('tr');
    
    let tdNome = document.createElement('td');
    let tdSala = document.createElement('td');
    let tdNota1 = document.createElement('td');
    let tdNota2 = document.createElement('td');
    let tdNota3 = document.createElement('td');
    let tdNota4 = document.createElement('td');
    let tdMedia = document.createElement('td');
    let tdSituacao = document.createElement('td');
    
    adicionaClasse(tdSituacao, aluno.media);

    tdNome.textContent = recebeNomeAluno;
    tdSala.textContent = recebeSalaAluno;
    tdNota1.textContent = recebeNota1Aluno;
    tdNota2.textContent = recebeNota2Aluno;
    tdNota3.textContent = recebeNota3Aluno;
    tdNota4.textContent = recebeNota4Aluno;
    tdMedia.textContent = aluno.media;

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


function adicionaAluno(form){

    let aluno = {
        nome: form.nome.value,
        sala:  form.sala.value,
        nota1: Number(form.nota1.value),
        nota2: Number(form.nota2.value),
        nota3: Number(form.nota3.value),
        nota4: Number(form.nota4.value),
        media: calculaMedia(Number(form.nota2.value),Number(form.nota2.value),Number(form.nota3.value),Number(form.nota4.value))
    }
    return aluno;
}

var formAluno = document.querySelector('#form-aluno');


function adicionaClasse (variavel, media) {
    variavel.classList.add('aluno-situacao')

    verificaSituacao(variavel, media);
}

