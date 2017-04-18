// select_texte - jQuery plugin for demo by Michael Lo
// http://jquery.000webhost.info
// free for anyone like jquery. Enjoy!

jQuery.fn.select_text = function(divname) {
	this.each(function() {
		var mytext=$(this).text()
		$('#'+divname).show().html(mytext).fadeOut(9000);
	});
}
