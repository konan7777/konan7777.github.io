$(document).ready(function() {
	$('#popUpMain').css('display', 'block');
});

function clk(){
	$('#popUpMain').css('display', 'none');
}

document.body.addEventListener('click', clk, true);