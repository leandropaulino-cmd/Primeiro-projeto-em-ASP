const formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = parseInt(document.getElementById("idade").value);
    const campoErro = document.getElementById("erro");
    
    campoErro.textContent = "";
    
    if (nome === "") {
        event.preventDefault();
        campoErro.textContent = "O nome não pode estar vazio.";
        return;
    }
    if (!email.includes("@")) {
        event.preventDefault();
        campoErro.textContent = "O email deve conter '@'.";
        return;
    }
    if (isNaN(idade) || idade <= 0) {
        event.preventDefault();
        campoErro.textContent = "A idade deve ser maior que 0.";
        return;
    }
    alert("Formulário enviado com sucesso!");
});