// adicionar ao click do botão Adicionar a função AdicionaTarefa.
document.getElementById("adicionar").addEventListener('click', adicionaTarefa);

/***
 *  Função responsável por inserir uma nova tarefa à uma lista.
***/
function adicionaTarefa() {

    // pegar o valor informado no input. 
    var texto = document.getElementById('texto').value;

    // pegar a div para inserir a lista de tarefas
    var lista = document.getElementById('tasks');

    // criando o novo elemento na página (um input checkbox + a label com o valor digitado)
    const lista_tarefas = document.createElement('div'); // cria uma nova div para colocar cada tarefa nova
    const novaTarefa = document.createElement('input');
	const novoLabel = document.createElement('label');
	const novaDescricao = document.createTextNode(texto); // insere o valor informado no input na nova tarefa

    // cria o tipo checkbox e coloca um id para o input criado acima.
    novaTarefa.setAttribute('type', 'checkbox');
    novaTarefa.setAttribute('id', texto);

    // cria o atributo da label criada acima referenciando ao input através do for 
    // e adiciona a nova descrição de tarefa ao novo label.
    novoLabel.setAttribute('for', texto); // for quer dizer que referencia ao input acima do checkbox.
    novoLabel.appendChild(novaDescricao); 
    
    // adiciona à div criada no index.html
    lista_tarefas.classList.add('task-item');
    lista_tarefas.appendChild(novaTarefa);
    lista_tarefas.appendChild(novoLabel);

    // dentro do div tasks do index.html adiciona a minha nova tarefa 
    lista.appendChild(lista_tarefas);
}