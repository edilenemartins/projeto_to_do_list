// adicionar ao click do botão Adicionar a função AdicionaTarefa.
document.getElementById("adicionar").addEventListener('click', adicionaTarefa);

/***
 *  Função responsável por inserir uma nova tarefa à uma lista.
***/
function adicionaTarefa() {

    // pegar o valor informado no input. 
    var texto = document.getElementById('texto').value;

    // pegar o conteúdo do elemento que irá guardar os valores informados.
    let lista_tarefas = document.getElementById('tasks').innerHTML;

    // acrescenta à lista o novo valor sem perder o que já foi informado.
    lista_tarefas += "<input type='checkbox' id='checkbox'></input><label for='checkbox'>" + texto + "</label>" + "<br>";

    // atualiza o campo que guarda as tarefas informadas com os novos valores.
    document.getElementById('tasks').innerHTML = lista_tarefas;    
}