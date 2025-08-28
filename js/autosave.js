
auto_load();
setInterval(auto_save, 1000);

function auto_load(){
	var save = window.localStorage.getItem("autosave");
	if(save == undefined){
		var data = httpGet("/examples/misc/Welcome.txt");
		editor.setValue(data);
	}else{
		editor.setValue(save);
	}
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function auto_save(){
	console.log("auto save");
	//document.cookie = "autosave=" + btoa(encodeURIComponent(editor.getValue()));
	window.localStorage.setItem("autosave", editor.getValue());
}
