$(document).ready(function() {

function hidecreate() {
	// This adds the .hidden class to the #create div
	document.getElementById('create').classList.add('hidden');
	document.getElementById('welcome').classList.add('hidden');
	document.getElementById('subtext').classList.add('hidden');
	document.getElementById('whitesignin').classList.add('hidden');
	$("#hiddensignin").fadeIn()
}

document.getElementById("whitesignin").onclick = hidecreate;

});
