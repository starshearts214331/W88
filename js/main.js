function t(){
	alert("test1")
}
function b(){
	alert("test2")
}
window.onload =t ;
window.onload =b ;
// function demo1() {  
//     var nd = document.createElement("div");  
//     nd.innerHTML = "New DIV";  
//     nd.style.backgroundColor = "blue";  
//     nd.style.color = "white";  
//     document.getElementById("divZone").appendChild(nd);  
// } 

// function demo2()   
// {  
//     var p = findPos(document.getElementById("divZone"));  
//     alert("Position X=" + p[0] + ",Y=" + p[1]);  
// }  
// function findPos(obj) {  
//     var curleft = curtop = 0;  
//     if (obj.offsetParent) {  
//         do {  
//             curleft += obj.offsetLeft;  
//             curtop += obj.offsetTop;  
//         } while (obj = obj.offsetParent);  
//     }  
//     return [curleft,curtop];  
// }   


function demo2()   
{  
    var p = $( "#divZone" );
	var offset = p.offset();
	alert( "Position X=" + offset.left + ", Y= " + offset.top );
}  

function demo1() {  
    $("#divZone").append("<div>New DIV</div>")  
    .children("div").css(  
        { backgroundColor: "red", color: "white" }  
    );  
}  

$(document).ready(function(){
	demo1();
	demo2();
});

$(document).ready(function(){
	alert("Hello World!");
});

//test2
$(document).ready(function(){
	alert("Hello again!");
});
