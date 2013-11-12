$(document).ready(function () {
	$.getJSON("http://bjin.me/api/?type=rand&count=75&format=JSON", function(json){
		for(var i in json){
			var str = "<div id='actress' class='actress'>";
			str += "<p class='image'><img src='" + json[i].thumb + "' alt='女優' width='150' height='120'></p>";
			str += "<p class='caption'>" + json[i].category + "</p>";
			str += "</div>";
			$("#result").append(str);
		}
	}).fail(function() {
		alert("女優の情報を取得することに失敗しました。");
	});
});

function search(){
	delete_search("searchAns");
	var str = "";
	$.getJSON("http://bjin.me/api/?type=search&count=10&format=JSON&query" + document.F1.T1.value, function(json){
		str = "<div style='padding: 10px; margin-bottom: 10px; border: 1px dotted #333333;'>";
		str += "<div id='searchName' class='searchName'>";
		str += "検索結果:";
		for(var i in json){
			str += "<a href='javascript:imageList(" + json[i].id + ");'>";
			str += "<p class='caption' style='display:inline;'>" + json[i].category + "</p>";
			str += "</a>";
		}
		str += "</div>";
		str += "</div>";
		$("#searchAns").append(str);
	}).fail(function() {
		str = "<div style='padding: 10px; margin-bottom: 10px; border: 1px dotted #333333;'>";
		str += "<div id='searchName' class='searchName'>見つかりませんでした</div>"
		str += "</div>";
		$("#searchAns").append(str);
	});
}

function delete_search( divName ){
	var dom_obj = document.getElementById(divName);
	if(dom_obj != null){
		var dom_obj_firstchild=dom_obj.firstChild;
		if(dom_obj_firstchild != null){
			while (dom_obj_firstchild.nextSibling){
				dom_obj.removeChild(dom_obj_firstchild.nextSibling);
			}
			dom_obj.removeChild(dom_obj_firstchild);
		}
	}
}

function imageList(actressId) {
	window.open("list.htm?actressId=" + actressId,"win1","width=880,height=1600");
}