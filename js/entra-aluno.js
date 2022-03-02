var botaoAdicionaAluno = document.querySelector("#adiciona-aluno");

botaoAdicionaAluno.addEventListener('click', function(){

    var form = document.querySelector('#form-aluno');

    var aluno = adicionaAluno(form);

    let erros = validaDadosAluno(aluno);

    if (erros.length > 0){
        exibeErros(erros);
        return
    }

    var ul = document.querySelector('#erros');
    ul.innerHTML = ""

    adicionaAlunoTabela(aluno);
})


function adicionaAluno(form){

    let aluno = {
        nome: form.nome.value,
        sala:  form.sala.value,
        nota1: form.nota1.value,
        nota2: form.nota2.value,
        nota3: form.nota3.value,
        nota4: form.nota4.value,
        media: calculaMedia(Number(form.nota1.value),Number(form.nota2.value),Number(form.nota3.value),Number(form.nota4.value)),
    }
    return aluno;
}


function adicionaAlunoTabela(aluno){
    let tabela = document.querySelector(".tabela-alunos");
    let alunoTr = document.createElement('tr');
    tabela.appendChild(alunoTr);

    alunoTr.appendChild(criaTd(aluno.nome, "aluno-nome"));
    alunoTr.appendChild(criaTd(aluno.sala.toUpperCase(), "aluno-sala"));
    alunoTr.appendChild(criaTd(aluno.nota1, "aluno-nota-1"));
    alunoTr.appendChild(criaTd(aluno.nota2, "aluno-nota-2"));
    alunoTr.appendChild(criaTd(aluno.nota3, "aluno-nota-3"));
    alunoTr.appendChild(criaTd(aluno.nota4, "aluno-nota-4"));
    alunoTr.appendChild(criaTd(aluno.media, "aluno-media"));
    trSituacao(aluno, aluno.media, alunoTr)
 
}

function criaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function trSituacao(aluno, media, tr){
    var alunoSituacao = criaTd(aluno.media, "aluno-situacao");

    if (validaMedia){
        if (media >= 0 & media < 6){
            alunoSituacao.textContent = "Reprovado";
            alunoSituacao.classList.add('vermelho')
    
        } else if (media >= 6 & media <= 10){
            alunoSituacao.textContent = "Aprovado";
            alunoSituacao.classList.add('verde')   
        } else {
            alunoSituacao.textContent = 'Média Inválida';
            alunoSituacao.classList.add('vermelho')
        }
    }   
    tr.appendChild(alunoSituacao);
    return alunoSituacao;
}

function validaDadosAluno(aluno){
    let erros = [];

    if (aluno.nome.length == 0) {
        erros.push('Nome é inválido');
    }

    if (aluno.sala.length == 0) {
        erros.push('A Sala é um campo obrigatório');
    } else {
        verificaSala(aluno, erros);
    }

    if (aluno.nota1.length == 0){
        erros.push('A nota 1 é inválida');
    }

    if (aluno.nota2.length == 0){
        erros.push('A nota 2 é inválida');
    }

    if (aluno.nota3.length == 0){
        erros.push('A nota 3 é inválida');
    }

    if (aluno.nota4.length == 0){
        erros.push('A nota 4 é inválida');
    }

    return erros;
}

function exibeErros(erros){
    var ul = document.querySelector('#erros');

    ul.innerHTML = '';

    erros.forEach(erro => {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}


function verificaSala(aluno, variavelErro, ){
    const salas = ['3A','3B','3C'];

    let confereSala = salas.indexOf((aluno.sala.toUpperCase()));

    if (confereSala == -1){
        variavelErro.push('Essa sala não existe')
    }
}