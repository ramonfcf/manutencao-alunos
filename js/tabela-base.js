var alunos = document.querySelectorAll(".aluno");

for (i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];

    let alunoNota1 = aluno.querySelector('.aluno-nota-1');
    let nota1 = Number(alunoNota1.textContent);
    let alunoNota2 = aluno.querySelector('.aluno-nota-2');
    let nota2 = Number(alunoNota2.textContent);
    let alunoNota3 = aluno.querySelector('.aluno-nota-3');
    let nota3 = Number(alunoNota3.textContent);
    let alunoNota4 = aluno.querySelector('.aluno-nota-4');
    let nota4 = Number(alunoNota4.textContent);

    var alunoMedia = aluno.querySelector('.aluno-media');

    var mediaNota = calculaMedia(nota1, nota2, nota3, nota4);
    alunoMedia.textContent = mediaNota

    var alunoSituacao = aluno.querySelector('.aluno-situacao');

    if (validaMedia) {
        if (mediaNota >= 0 & mediaNota < 6) {
            alunoSituacao.textContent = "Reprovado";
            alunoSituacao.classList.add('vermelho')

        } else if (mediaNota >= 6 & mediaNota <= 10) {
            alunoSituacao.textContent = "Aprovado";
            alunoSituacao.classList.add('verde')
        }
    } else {
        variavel.textContent = 'Média Inválida';
    }
}

function calculaMedia(n1, n2, n3, n4) { /*recebe as 4 notas do aluno*/
    let media = (n1 + n2 + n3 + n4) / 4;
    return media;
}


function validaMedia(media) {
    if (media >= 0 || media <= 10) {
        return true;
    } else {
        return false;
    }
}