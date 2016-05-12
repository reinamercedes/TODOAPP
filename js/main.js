function getInputValue() {
	var inputBox = document.getElementById("inputBox");
	return inputBox.value;
}

function tweet() {
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		doTweet(inputBoxValue);
		clean();
	}
}

function doTweet(tweetText) {
	var tweets = document.getElementById("tweets");

//Crear el elemento
	var elemento = document.createElement("div");
	elemento.className = "tweet";
	elemento.innerHTML =  '<div class="checkbox inline">' + '<label><input type="checkbox" onclick="tachado(this)"></label>' + '</div>' + tweetText + '<a class="btn btn-default pull-right" href="#" role="button" onclick="eliminar(this)">' + '<i class="fa fa-trash" aria-hidden="true"></i>' + '</a>';

//Agregar elementos a tweets
	tweets.appendChild(elemento);

	// var ex = tweets.lastChild;
	// alert(ex.innerHTML);
}

function tachado(elemento) {
	var tachar = elemento.parentElement.parentElement.parentElement;
	tachar.classList.add("tacharTask");
	
}

function clean() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}

function eliminar(elemento) {
	var borrar = elemento.parentElement;
	borrar.remove();
}
