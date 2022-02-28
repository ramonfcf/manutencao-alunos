var alunos = document.querySelectorAll(".aluno");

for(i = 0; i < alunos.length; i++ ){
    let aluno = alunos[i];
    
    var alunoNota1 = aluno.querySelector('.aluno-nota-1');
    var nota1 = Number(alunoNota1.textContent);
    //console.log(nota1)

    var alunoNota2 = aluno.querySelector('.aluno-nota-2');
    var nota2 = Number(alunoNota2.textContent);
   // console.log(nota2)


    var alunoNota3 = aluno.querySelector('.aluno-nota-3');
    var nota3 = Number(alunoNota3.textContent);
    //    console.log(nota3)


    var alunoNota4 = aluno.querySelector('.aluno-nota-4');
    var nota4 = Number(alunoNota4.textContent);
    //console.log(nota4)

    var alunoMedia = aluno.querySelector('.aluno-media');

    var mediaNota = (nota1 + nota2 + nota3 + nota4) / 4;
    
    alunoMedia.textContent = mediaNota

    var alunoSituacao = aluno.querySelector('.aluno-situacao');

    if (mediaNota < 6){
        alunoSituacao.textContent = "Reprovado";
        alunoSituacao.classList.add('vermelho')
    } else {
        alunoSituacao.textContent = "Aprovado";
        alunoSituacao.classList.add('verde')
    }
}

