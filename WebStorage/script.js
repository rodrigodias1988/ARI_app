var registro = window.prompt("Entre com seu nome: ");
var endereco = window.prompt("Indique seu enderço: ");
var cpf = window.prompt("Indique seu CPF: ");
var numDepen = window.prompt("Indique seu nuemro de dependentes: ");

//Chamar o localStorage. Ele vem do window. No caso vamos usar o setItem

window.localStorage.setItem("Nome", registro); //localStorage.setItem("Nome",nome)
window.localStorage.setItem("endereço", endereco);
window.localStorage.setItem("cpf", cpf);
window.localStorage.setItem("NumeroDependentes", numDepen);

//Para recuperar o vlor armazenado em uma key do localStorage usamos o getItem

alert(localStorage.getItem("Nome"));
alert(localStorage.getItem("endereço"));
alert(localStorage.getItem("cpf"));
alert(localStorage.getItem("NumeroDependentes"));

//Se ao invés de apresentar a key em uma janela alert, quiser apresentar na pagina, podemos usar o document.write

//document.write("O seu nome é: "+ registro);

//Utilize o mesmo procedimiento e crie variaveis para endereço, CPF e numero de dependentes

