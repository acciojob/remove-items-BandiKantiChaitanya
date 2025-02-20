//your JS code here. If required.
let selectElement=document.getElementById('colorSelect')
let button = document.querySelector('input[type="button"]');
 
button.onclick=function(){
	let selectedOption = selectElement.selectedIndex;
	selectElement.remove(selectedOption);
}
