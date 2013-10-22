$(window).load(function() {
	console.log("test");
	$.ajax({
		type: "GET",
		url: "http://bjin.me/api/?type=rand&count=10&format=xml",
		dataType: "xml",
		success: function(xml) {
			alert("読み込み成功");
			console.log(xml);
			readXML(xml);
		},
		error: function(xml) {
			alert("読み込み失敗");
		} 
	});
});

$(function() {
    var topBtn = $('#pageTop');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});
