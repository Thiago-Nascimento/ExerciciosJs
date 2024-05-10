// Fazer um menu de exercicios utilizando o exemplo dado em aula
// Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercicio ele quer visualizar.

// O usuário deverá digitar 0 para sair do menu.

// Hoisting                             - var e function
// RECOMENDADO - Prevenir o hoisting    - let e const + arrow function

function exemploRepeticao() {
    let opcao = prompt("EXERCICIO DE REPETICAO\nDigite uma opção\nDigite 0 para sair:")

    while (opcao != "0") {
        console.log("Repetiuuuuuu");

        opcao = prompt("R:Digite uma opção\nDigite 0 para sair:")
    }

    console.log("Saiuuuuu");
}


const exercicioLogin = () => {
    let username = prompt("Digite um nome de usuario:")
    let senha = prompt("Digite a senha:")


    if (username == "admin" && senha == "senha123") {
        alert("Login bem sucedido");
    } else {
        alert("Voce não tem permissão de acesso!")
    }
}


let opcaoUsuario;

do {
    opcaoUsuario = prompt("MENU\n\n1 - Exemplo de Repetição\n2 - Exercicio Usuario Senha\n\n0 - Digite 0 para sair")

    if (opcaoUsuario == "0") {
        alert("Voce escolheu sair :(")

    } else if (opcaoUsuario == "1") {
        // Mostrar exemplo de repeticao
        exemploRepeticao()

    } else if (opcaoUsuario == "2") {
        // Mostrar exercicio usuario e senha
        exercicioLogin()

    } else {
        alert("Exercicio inexistente")
    }

} while (opcaoUsuario != "0");