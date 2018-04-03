/**
 * 
 */

function doA() {
	var i = 0;
	while (i < 5) {
		alert(i + ". warninng");
		i++;
	}

}

function doB() {
	var i = 0;
	var j = 0;
	var a;
	a = prompt("ют╥б", "");

	var targetDiv = document.getElementById("printfDiv");

	while (i < a) {
	
		while (j < i + 1) {
			targetDiv.innerHTML+="*";
			j++;
		}
		j = 0;
		targetDiv.innerHTML+="<br>";
		i++;
	
	}

}
