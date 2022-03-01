const salasAlunos = ["3A", "3B", "3C"];

var botaoAdicionaAluno = document.querySelector("#adiciona-aluno");

botaoAdicionaAluno.addEventListener('click', function(){

    var form = document.querySelector('#form-aluno');

    var aluno = adicionaAluno(form);

    criaTr(aluno);

    let tabela = document.querySelector(".tabela-alunos");
})


function adicionaAluno(form){

    let aluno = {
        nome: form.nome.value,
        sala:  form.sala.value,
        nota1: Number(form.nota1.value),
        nota2: Number(form.nota2.value),
        nota3: Number(form.nota3.value),
        nota4: Number(form.nota4.value),
        media: calculaMedia(Number(form.nota2.value),Number(form.nota2.value),Number(form.nota3.value),Number(form.nota4.value)),
    }
    return aluno;
}


function criaTr(aluno){
    let tabela = document.querySelector(".tabela-alunos");
    let alunoTr = document.createElement('tr');
    tabela.appendChild(alunoTr);

    alunoTr.appendChild(criaTd(aluno.nome, "aluno-nome"));
    alunoTr.appendChild(criaTd(aluno.sala, "aluno-sala"));
    alunoTr.appendChild(criaTd(aluno.nota1, "aluno-nota-1"));
    alunoTr.appendChild(criaTd(aluno.nota2, "aluno-nota-2"));
    alunoTr.appendChild(criaTd(aluno.nota3, "aluno-nota-3"));
    alunoTr.appendChild(criaTd(aluno.nota4, "aluno-nota-4"));
    alunoTr.appendChild(criaTd(aluno.media, "aluno-media"));
    
    var alunoSituacao = criaTd(aluno.media, "aluno-situacao");

    if (validaMedia){
        if (mediaNota >= 0 & mediaNota < 6){
            alunoSituacao.textContent = "Reprovado";
            alunoSituacao.classList.add('vermelho')
    
        } else if (mediaNota >= 6 & mediaNota <= 10){
            alunoSituacao.textContent = "Aprovado";
            alunoSituacao.classList.add('verde')   
        } 
    }   else {
            variavel.textContent = 'Média Inválida';
    }

    alunoTr.appendChild(alunoSituacao);
}

function criaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}