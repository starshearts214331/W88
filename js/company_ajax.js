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
	console.log(data);
		for (var i = 0; i < 3; i++) {
				//照片加入 myslide html
				$('#portfolio_img').append(
			    '<div class="col-sm-4">'+
			      '<div class="thumbnail">'+
			        '<img src='+data[i]["url"]+ ' alt='+data[i]["title"]+ ' width="400" height="300">'+
			        '<p><strong>'+data[i]["title"]+ ' </strong></p>'+
			      '<p>'+data[i]["title"]+ ' </p>'+
			      '</div>'+
			    '</div>');
		}
		for (var i = 0; i < 10; i++) {
			$('#hwu_h4').append('<h4>'+data[i]["title"]+ '</h4>');
		}
	}
});
});
