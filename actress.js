$(document).ready(function () {
	var target = location.search.substring(11);
	var str = "";
	$.getJSON("http://bjin.me/api/?type=detail&count=20&format=JSON&id" + parseInt(target), function(json){
		str = "<h1 align='center'>" + json[0].category + "</h><br><br><br>";
		for(var i in json){
			str += "<div id='actress' class='actress'>";
			str += "<p class='image'><img src='" + json[i].thumb + "' alt='" + json[0].category + "' width='150' height='120'></p>";
			str += "</div>";
		}
		$("#act").append(str);
	}).fail(function() {
		str = "<h1 align='center'>詳細情報の取得に失敗しました</h>";
		$("#act").append(str);
	});
});