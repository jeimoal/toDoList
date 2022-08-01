let btnNovaAtividade = document.querySelector('#novaAtividade');
let inputDescricaoAtividade = document.querySelector('#descricaoAtividade');
let inputAdicionarAtividade = document.querySelector('#adicionarAtividade');
let novoItemDaLista = document.querySelector('#minhaUL');
let btnLimpar = document.getElementById('btnLimpar');
let removeItem = document.getElementsByClassName("fecharItem");

inputDescricaoAtividade.hidden = true;
inputAdicionarAtividade.hidden = true;
btnLimpar.hidden = true;

//Habilita botões para adicionar nova atividade
btnNovaAtividade.addEventListener('click', novaAtividade);
function novaAtividade (){
	inputDescricaoAtividade.hidden = false;
	inputAdicionarAtividade.hidden = false;
	inputDescricaoAtividade.focus();
};

//Valida se tem atividade a ser adicionada
inputAdicionarAtividade.addEventListener('click', adicionarAtividade);
function adicionarAtividade () {
	let itemNovo = document.createElement('li');
	let descricaoTxt = document.getElementById('descricaoAtividade').value;
	let itemNovoTxt = document.createTextNode(descricaoTxt);
	itemNovo.className = "lista";
	itemNovo.appendChild(itemNovoTxt);
		if (descricaoTxt !== "") {
			document.getElementById('minhaUL').appendChild(itemNovo);
			inputDescricaoAtividade.value = "";
			inputDescricaoAtividade.focus();
			btnLimpar.hidden = false;
		} else {
			alert("Descreva a atividade!");
			inputDescricaoAtividade.focus();
		}

	let apagarItem = document.createElement('span');
	let apagarTxt = document.createTextNode('X');
	apagarItem.className = "fecharItem";
	apagarItem.appendChild(apagarTxt);
	itemNovo.appendChild(apagarItem);

	for (i = 0; i < removeItem.length; i++) {
		removeItem[i].onclick = function() {
		let div = this.parentElement;
		div.style.display = "none";
		}
	}
}

//Apaga TODA a lista
btnLimpar.onclick = function() {
	let limpezaDeLista = novoItemDaLista;
	limpezaDeLista.textContent = "";
}
