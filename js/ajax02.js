$(document).ready(function(){
	$(document).ajaxStart(function() {
        $("#loading").show();
    });
	$(document).ajaxComplete(function() {
        $("#loading").hide();
    });
$.ajax({
	//Chrome security "C:\PathTo\Chrome.exe" --allow-file-access-from-files
	url: "https://jsonplaceholder.typicode.com/comments",
	type: "GET",
	cache: false,
  dataType: "json",
		error: function() {
              alert("Failed to Load");
            },
success: function(data){
	// console.log(data);
		$('#maintable').append('<tr class=title><td>sn</td><td>body</td><td>E-mail</td><td>Name</td><td>PostID</td></tr>');
		for (var i = 0; i < data.length; i++) {
				// console.log("name=" + data[i]["body"]);
				$('#maintable').append('<tr id='+data[i]["id"]+' align=left></tr>');
				$('<td></td>').append(i+1).appendTo('#maintable tr[id='+data[i]["id"]+']');
				$('<td></td>').append(data[i]["body"]).appendTo('#maintable tr[id='+data[i]["id"]+']');
				$('<td></td>').append(data[i]["email"]).appendTo('#maintable tr[id='+data[i]["id"]+']');
				$('<td></td>').append(data[i]["name"]).appendTo('#maintable tr[id='+data[i]["id"]+']');
				$('<td></td>').append(data[i]["postId"]).appendTo('#maintable tr[id='+data[i]["id"]+']');
				$("tr:gt(0):even").addClass('myeven');
				$("tr:gt(0):odd").addClass('myodd');
		}
	}

});

});
