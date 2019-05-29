function call(){
	//alert(document.getElementById("percentage").value);
	//val input = document.getElementById("input").value;
	
    alert(document.getElementById("input").value);
	var input = document.getElementById("input").value;   //Text Input

	var req = new XMLHttpRequest();
	// var percent = document.getElementById("percentage").value;
    req.open('GET', "http://127.0.0.1:5000/" +input, true);
    req.send(null);
	req.onload = callBack;
}