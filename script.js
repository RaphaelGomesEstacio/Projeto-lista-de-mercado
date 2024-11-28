// Função para adicionar item à lista
function adicionarItem() {
    const itemInput = document.getElementById('itemInput');
    const itemTexto = itemInput.value.trim();
    
    if (itemTexto === "") {
        alert("Por favor, insira um item.");
        return;
    }

    const listaDeCompras = document.getElementById('listaDeCompras');
    const li = document.createElement('li');
    li.innerHTML = `
        ${itemTexto}
        <button onclick="removerItem(this)">Remover</button>
        <input type="checkbox" onclick="marcarComprado(this)">
    `;
    listaDeCompras.appendChild(li);
    itemInput.value = ""; // Limpar o campo de entrada após adicionar o item
}

// Função para marcar item como comprado
function marcarComprado(checkbox) {
    const item = checkbox.parentElement;
    if (checkbox.checked) {
        item.classList.add('completed');
    } else {
        item.classList.remove('completed');
    }
}

// Função para remover item da lista
function removerItem(button) {
    const item = button.parentElement;
    item.remove();
}
