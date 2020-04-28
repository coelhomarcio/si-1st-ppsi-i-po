window.document.getElementById('name').addEventListener('focus', function(){focus('name')})
window.document.getElementById('name').addEventListener('blur', function(){blur('name')})
window.document.getElementById('email').addEventListener('focus', function(){focus('email')})
window.document.getElementById('email').addEventListener('blur', function(){blur('email')})
window.document.getElementById('phone').addEventListener('focus', function(){focus('phone')})
window.document.getElementById('phone').addEventListener('blur', function(){blur('phone')})
function focus(input) {
	switch (input) {
		case 'name':
			window.document.getElementById('nameformat').innerHTML = "Digite seu nome"
			break
		case 'email':
			window.document.getElementById('emailformat').innerHTML = "Digite seu e-mail (ex: nome@dominio.com)"
			break
		case 'phone':
			window.document.getElementById('phoneformat').innerHTML = "Digite seu telefone (apenas números)"
			break
	}
}
function blur(input) {
	switch (input) {
		case 'name':
			window.document.getElementById('nameformat').innerHTML = ""
			break
		case 'email':
			window.document.getElementById('emailformat').innerHTML = ""
			break
		case 'phone':
			window.document.getElementById('phoneformat').innerHTML = ""
			break
	}
}