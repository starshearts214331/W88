$(document).ready(function(){
	$(document).ajaxStart(function() {
				$("#loading").show();
		});
	$(document).ajaxComplete(function() {
				$("#loading").hide();
		});
$.ajax({
	url: "https://jsonplaceholder.typicode.com/photos",
	type: "GET",
	cache: false,
  dataType: "json",
		error: function() {
              alert("Failed to Load");
            },
success: function(data){
	// console.log(data);
		for (var i = 0; i < 15; i++) {
				//照片加入 myslide html
				$('#imgstore').append('<img src='+data[i]["url"]+ ' title="'+data[i]["title"]+ '"  >');
		}
		//執行 myslide
			$.init_slide('imgstore','showhere',1,1,1000,1,5000,1);
	}
});
});
