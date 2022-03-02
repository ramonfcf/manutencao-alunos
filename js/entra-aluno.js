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

    form.reset();
})

// Recebe os dados do form e cria o objeto: aluno
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

// recebe os dados do aluno e cria "tr" e "td" com os dados, e adiciona na tabela.
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
    alunoTr.appendChild(criaTd(aluno.media.toFixed(2), "aluno-media"));
    trSituacao(aluno, aluno.media, alunoTr)
 
}
// automatiza a criação de "td"
function criaTd(dado, classe){                  
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

/*realiza a análise e a inserção no html da situação do aluno
 se está aprovado ou reprovado e adiciona a classe com a cor correspondente "verde" ou vermelho.*/
function trSituacao(aluno, media, tr){
    var alunoSituacao = criaTd(aluno.media, "aluno-situacao");

    if (validaMedia){
        if (media >= 0 & media < 6){
            alunoSituacao.textContent = "Reprovado";
            alunoSituacao.classList.add('vermelho')
    
        } else if (media >= 6 & media <= 10){
            alunoSituacao.textContent = "Aprovado";
            alunoSituacao.classList.add('verde')   
        }
    }   
    tr.appendChild(alunoSituacao);
    return alunoSituacao;
}

/*raliza diversas validações dos dados do aluno para que não exista a entrada de dados incorretos
e cria uma array de erros que depois será exibida para o usuário*/
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
        erros.push('Insira a nota 1');
    } else if (aluno.nota1 < 0 || aluno.nota1 > 10){
        erros.push('Nota 1: Só é possível inserir notas de 0 a 10');
    }

    if (aluno.nota2.length == 0){
        erros.push('Insira a nota 2');
    }  else if (aluno.nota2 < 0 || aluno.nota2 > 10){
        erros.push('Nota 2: Só é possível inserir notas de 0 a 10');
    }

    if (aluno.nota3.length == 0){
        erros.push('Insira a nota 3');
    }  else if (aluno.nota3 < 0 || aluno.nota3 > 10){
        erros.push('Nota 3: Só é possível inserir notas de 0 a 10');
    }

    if (aluno.nota4.length == 0){
        erros.push('Insira a nota 4');
    }  else if (aluno.nota4 < 0 || aluno.nota4 > 10){
        erros.push('Nota 4: Só é possível inserir notas de 0 a 10');
    }
    return erros;
}

//função que exibe os erros gerados para o usuário
function exibeErros(erros){
    var ul = document.querySelector('#erros');

    ul.innerHTML = '';

    erros.forEach(erro => {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

//função que verifica se a sala inseridda no input existe no cadastro, caso contrário é gerada uma mensagem de erro
function verificaSala(aluno, variavelErro, ){
    const salas = ['3A','3B','3C'];

    let confereSala = salas.indexOf((aluno.sala.toUpperCase()));

    if (confereSala == -1){
        variavelErro.push('Esta sala não existe')
    }
}

//lista alterações 1número de casas decimais limitar 2 campo de número aceitando letras 3 campo de texto aceitando números