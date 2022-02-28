var alunos = document.querySelectorAll(".aluno");

for(i = 0; i < alunos.length; i++ ){
    let aluno = alunos[i];
    
    var alunoNota1 = aluno.querySelector('.aluno-nota-1');
    const nota1 = Number(alunoNota1.textContent);

    var alunoNota2 = aluno.querySelector('.aluno-nota-2');
    const nota2 = Number(alunoNota2.textContent);

    var alunoNota3 = aluno.querySelector('.aluno-nota-3');
    const nota3 = Number(alunoNota3.textContent);

    var alunoNota4 = aluno.querySelector('.aluno-nota-4');
    const nota4 = Number(alunoNota4.textContent);

    var alunoMedia = aluno.querySelector('.aluno-media');

    var mediaNota = calculaMedia(nota1, nota2, nota3, nota4);
    console.log(mediaNota);

    alunoMedia.textContent = mediaNota

    var alunoSituacao = aluno.querySelector('.aluno-situacao');

    validaNota(mediaNota);
}


function calculaMedia(n1, n2, n3, n4){      /*recebe as 4 notas do aluno*/
    let media = (n1+ n2 + n3 + n4) / 4;

    return media;
}

function validaNota(media){
    if (media >= 0 & media < 6){
        alunoSituacao.textContent = "Reprovado";
        alunoSituacao.classList.add('vermelho')

    } else if (media >= 6 & media <= 10){
        alunoSituacao.textContent = "Aprovado";
        alunoSituacao.classList.add('verde')
    } else {
        alunoSituacao.textContent = 'Média Inválida';
    }
}
