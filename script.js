function LoadPage(pageName){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', './pages/' + pageName + '.html');
	
	xhr.onload = function(e){
		var contentNode = document.getElementById('contentNode');
		contentNode.innerHTML = e.target.response;
	};
	xhr.send();
}

document.addEventListener('DOMContentLoaded', function(){
	LoadPage('Главная');
});