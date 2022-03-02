var alunosTabela = document.querySelector('.tabela-alunos');

alunosTabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.remove();
});