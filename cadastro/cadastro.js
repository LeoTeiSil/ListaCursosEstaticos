function cadastrar() {
    var emaillogin = document.getElementById("email").value;
    var senhalogin = document.getElementById("senha").value;

    const userfixos = {
        "psic@email.com": {
            senha: "psic910",
            destino: "../site/psicologia.html"
        },
        "adm@email.com": {
            senha: "adm789",
            destino: "../site/adm.html"
        },
        "ti@email.com": {
            senha: "ti321",
            destino: "../site/ti.html"
        }
    };

    if (userfixos[emaillogin] && userfixos[emaillogin].senha === senhalogin) {
        alert("Cadastrado com sucesso");
        window.location.href = "../login/login.html";
    } else {
        alert("Email ou senha inválidos.");
    }
}
