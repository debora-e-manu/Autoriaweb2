function gravardados() {
    let nome = document.getElementById("nome").value.trim();
    let animal = document.getElementById("animal").value.trim();
    let unidade = document.getElementById("unidade").value.trim();
    let telefone = document.getElementById("telefone").value.trim();

    if (nome === "" || animal === "" || unidade === "" || telefone === "") {
        alert ("preencha todos os campos");
        return;
    }
     
    let tabela = document.getElementById("tabela-tbody");

        let novaLinha = tabela.insertRow();
        let colunaNome = novaLinha.insertCell(0);
        let colunaAnimal = novaLinha.insertCell(1);
        let colunaUnidade = novaLinha.insertCell(2);
        let colunaTelefone = novaLinha.insertCell(3);

        colunaNome.textContent = nome;
        colunaAnimal.textContent = animal;
        colunaUnidade.textContent = unidade;
        colunaTelefone.textContent =telefone;
 

        document.getElementById("nome").value = "";
        document.getElementById("animal").value = "";
        document.getElementById("unidade").value = "";
        document.getElementById("telefone").value = "";
    }



