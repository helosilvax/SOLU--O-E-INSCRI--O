/* FUNÇÃO PARA VERIFICAR PREENCHIMENTO DE LOGIN*/
function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    if (!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "Inscriçaõ.html";
    }
}
/*FUNÇÃO PARA CRIAR A LISTA DE USUÁRIOS */
/*
--->Cria o Array para armazenar os usuários
*/
var dadosLista = [];
function salvarUser() {

    let nomeUser = document.getElementById("nomeUser").value;

    if (nomeUser) {
        dadosLista.push(nomeUser);
        criarLista();
        document.getElementById("nomeUser").value = '';
    }else{
        alert("Digite um nome");
        document.getElementById("nomeUser").focus();
    }
    function criarLista() {
        let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome usuário</th><th>Ações</th></tr>";

        for (let i = 0; i <= (dadosLista.length - 1); i++) {
            tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
            document.getElementById('tabela').innerHTML = tabela;
        }
    }
}
    //FUNÇÃO PARA EDIÇÃO DE NOME

    function editar(i) {
        document.getElementById("nomeUser").value = dadosLista[(i - 1)];
        dadosLista.splice(dadosLista[(i - 1)], 1);
    }
    // FUNÇÃO PARA EXCLUIR NOME

    function excluir(i) {
        dadosLista.splice((i - 1), 1);
        document.getElementById("tabela").deleteRow(i);
    }