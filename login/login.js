function logar() {
    var emaillogin = document.getElementById("email").value;
    var senhalogin = document.getElementById("senha").value;

    const usuarios = {
        "ti@email.com": {
            senha: "ti321",
            destino: "../site/ti.html"
        },
        "psic@email.com": {
            senha: "psic910",
            destino: "../site/psicologia.html"
        },
        "adm@email.com": {
            senha: "adm789",
            destino: "../site/adm.html"
        }
    };

    if (usuarios[emaillogin] && usuarios[emaillogin].senha === senhalogin) {
        localStorage.setItem("email", emaillogin);
        window.location.href = usuarios[emaillogin].destino;
    } else {
        alert("email ou senha incorretos.");
    }
}
