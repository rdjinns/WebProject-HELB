
if('addEventListener' in window) {
	window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-preload\b/, ''); });
	document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}
	
var slider1 = document.getElementById("motor1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;
	
slider1.oninput = function() {
	output1.innerHTML = this.value;
}

var slider2 = document.getElementById("motor2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;
	
slider2.oninput = function() {
	output2.innerHTML = this.value;
}

var slider3 = document.getElementById("motor3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;
	
slider3.oninput = function() {
	output3.innerHTML = this.value;
}

var slider4 = document.getElementById("motor4");
var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value;
	
slider4.oninput = function() {
	output4.innerHTML = this.value;
}

var slider5 = document.getElementById("motor5");
var output5 = document.getElementById("demo5");
output5.innerHTML = slider5.value;
	
slider5.oninput = function() {
	output5.innerHTML = this.value;
}

var slider6 = document.getElementById("motor6");
var output6 = document.getElementById("demo6");
output6.innerHTML = slider5.value;
	
slider6.oninput = function() {
	output6.innerHTML = this.value;
}

var tabSlideValue = [slider1, slider2, slider3, slider4, slider5, slider6]
var tabValue = [0, 0, 0, 0, 0, 0];
for (i = 0; i < 6; i++) {
	tabValue[i] = tabSlideValue[i].value;
}

//Pooling 1/2 seconde
//var oShell = new ActiveXObject("Shell.Application");


(function poll() {
	setTimeout(function envoieTram() {
		for (i = 0; i < 6; i++)
			if (tabSlideValue[i].value != tabValue[i]) {
				
				tabValue[i] = tabSlideValue[i].value;
				//oShell.ShellExecute("ping 8.8.8.8");
				EnvoieTram();
			}
		poll();
	}, 1000)

})();

function EnvoieTram() {
	$.ajax({
		type:"GET",
		url:"http://127.0.0.1/BrasRobot/EnvoieTram.php?a="+tabValue[0]+"&b="+tabValue[1]+"&c="+tabValue[2]+"&d="+tabValue[3]+"&e="+tabValue[4]+"&f="+tabValue[5],
		sucess: function(){
			alert("succes");
			}
		});
	/*var xhr = new XMLHttpRequest();
	var url = 
	//var url = "http://127.0.0.1/BrasRobot/EnvoieTram.php?a="+String(tabValue[0])+"&b="+String(tabValue[1])+"&c="+String(tabValue[2]+)"&d="+String(tabValue[3])+"&e="+String(tabValue[4])+"&f="+String(tabValue[5]);


	xhr.onreadystatechange = function () {
		//document.getElementById("motor2").innerHTML = this.responseText;
		
	
		
	}
	xhr.open("GET", url, true);
	xhr.send();*/
	
};
