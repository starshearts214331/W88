$(document).ready(function(){
	$(document).ajaxStart(function() {
        $("#loading").show();
    });
	$(document).ajaxComplete(function() {
        $("#loading").hide();
    });
$.ajax({
	//Chrome security "C:\PathTo\Chrome.exe" --allow-file-access-from-files
	url: "books.xml",
	type: "GET",
	cache: false,
  dataType: "xml",
		error: function() {
              alert("Failed to Load");
							console.log("Failed to Load")
            },
success: function(xml){
		$('#maintable').append('<tr class=title><td>NO</td><td>Title</td><td>Author</td><td>Publisher</td><td>ISBN</td></tr>');
		$('book',xml).each(function(e){
	  var mytitle="";
	  var myauthor="";
	  var mypublisher="";
	  var myisbn="";
mytitle=$('title',this).text();
mytitle=$.trim(mytitle);
myauthor=$('author',this).text();
myauthor=$.trim(myauthor);
mypublisher=$('publisher',this).text();
mypublisher=$.trim(mypublisher);
myisbn=$('isbn',this).text();
myisbn=$.trim(myisbn);

f=e+1;
$('#maintable').append('<tr id='+e+' align=left></tr>');
$('<td></td>').append(f+'.').appendTo('#maintable tr[id='+e+']');
$('<td></td>').append(mytitle).appendTo('#maintable tr[id='+e+']');
$('<td></td>').append(myauthor).appendTo('#maintable tr[id='+e+']');
$('<td></td>').append(mypublisher).appendTo('#maintable tr[id='+e+']');
$('<td></td>').append(myisbn).appendTo('#maintable tr[id='+e+']');
$("tr:gt(0):even").addClass('myeven');
$("tr:gt(0):odd").addClass('myodd');
		});
	}
});
});
