// Easy Slide - jQuery plugin for easy slide by Michael Lo
// http://www.ezjquery.com
// Copyright (c) 2007 Michael Lo
// Dual licensed under the MIT and GPL licenses.
// http://www.opensource.org/licenses/mit-license.php
// http://www.gnu.org/licenses/gpl.html
// free for anyone like Jquery. Enjoy!
(function($) {
	jQuery.extend({
init_slide: function(firstname,secondname,watermark,iscover,speed,autoplay,playtime,clickable){
	
	var mywidth,myheight,timer,myend,myfirst,myfirstlink,myfirstsrc;
	 
		if (!speed){speed=1000;}
		if (!playtime){playtime=6000;}
		myfirst=$('#'+firstname+' img:eq(0)').clone();
		myfirstlink=$(myfirst).attr('rel');
		myfirstsrc=$(myfirst).attr('src');
		var myImage = new Image();
	myImage.src=$(myfirst).attr('src');
		mywidth=myImage.width;
		myheight=myImage.height;

	
		var mylink = new Array();
			var chk,mysrc,myrel,mytitle,mycover;
			$('#'+secondname).append('<table border=0 width='+mywidth+'><tr><td width='+mywidth+' height='+myheight+' id='+secondname+'show class=showbg ></td></tr><tr><td id='+secondname+'link align=center valign=top></td></tr><tr><td align=center><span id='+secondname+'dis></span></td></tr></table>');
			
			function autop(q){
						if (!q)
						{
						q=1;
						}
					 myend=$('#'+secondname+'link a').size();
					
						myend=myend-1;
							if (q > myend)
							{
								q=0;
							}
							//alert(q);
						$('#'+secondname+'link a').eq(q).click();						
						q=q+1;
					
					}
			
	
	$('#'+firstname+' img').each(function(e){
		var f=e+1;
		chk=$(this).attr('title');
		myrel=$(this).attr('rel');
		mysrc=$(this).attr('src');
			if (chk)
			{
				mytitle=chk;
					}
				if(chk===undefined){
						mytitle=$(this).attr("src");
						mytitle = mytitle.replace(new RegExp(/\.*\w*\//g),"");
							}
				mylink[e]='<a href=# rel=\"'+mysrc+'\" link=\"'+myrel+'\" title=\"'+mytitle+'\" no=\"'+f+'\" >'+f+'</a>';
				if (clickable!==1)
				{
					$('#'+secondname+'link').hide();
				}
				$('#'+secondname+'link').html(mylink.join(""));

				$('#'+secondname+'link a').addClass("link_nor");
				
					 
			});
				
			$('#'+secondname+'link a:eq(0)').addClass("link_act");
			var mydis=$(mylink[0]).attr("title");
			$('#'+secondname+'dis').html(mydis);
			if (watermark==1)
			{$('#'+secondname+'show').append('<em id='+secondname+'cc class=opa><h3>'+mydis+'</h3></em>');
						}
						
				if (myfirstlink)
				{
					$('#'+secondname+'show').append('<a href='+myfirstlink+' target=easyslide><img src='+myfirstsrc+'></a>');
										
				}			
				else{		
			$('#'+secondname+'show').append(myfirst);			
				}
			$('#'+secondname+'show img').hover(function(){	
					clearTimeout(timer);
			$(this).fadeTo("slow",0.8);				
			$('#'+secondname+'cc').append('<em>Pause Now</em>');
							},function(){
			$(this).fadeTo("slow",1);
			$('#'+secondname+'cc').html('<h3>'+mydis+'</h3>');
			clearTimeout(timer);
				timer=setTimeout(autop,100,1);			
		});					
		
		$('#'+secondname+'link a').click(function(){
			
			var mm=this.rel;
			var nn=this.title;
			var kk=$(this).attr('link');
			var mynowplaying=$(this).text();
				mynowplaying=parseInt(mynowplaying,10);
						clearTimeout(timer);
			timer=setTimeout(autop,playtime,mynowplaying);
			$('#'+secondname+'link a').removeClass("link_act");
			$(this).addClass("link_act");
				$('#'+secondname+'show img:eq(0)').fadeTo("slow", 0.33,function(){
				$('#'+secondname+'show img:eq(0)').remove();
				if (iscover==1){
					$('#'+secondname+'show').append('<div id='+secondname+'cover class=gray ></div>');
					$('#'+secondname+'cover').css({width:mywidth,height:myheight});
					}
					if (kk!== 'undefined')
					{
						$('#'+secondname+'show').append('<a href='+kk+' target=easylide ><img src='+mm +' style="display:none"></a>');
					}
					else{
						$('#'+secondname+'show').append('<img src='+mm +' style="display:none">');
					}
				

				if (iscover==1){
					$('#'+secondname+'cover').animate({ 
						height: "0px"   
						}, speed,
							function(){
						$('#'+secondname+'cover').remove();
							});
				}

				$('#'+secondname+'show img').fadeIn('slow');				
				$('#'+secondname+'dis').html(nn);
				//watermark
				if (watermark==1){$('#'+secondname+'cc').html('<h3>'+nn+'</h3>');}
				$('#'+secondname+'show img').hover(function(){	
					clearTimeout(timer);
			$(this).fadeTo("slow",0.8);				
			$('#'+secondname+'cc').append('<em>Pause Now</em>');
							},function(){
			$(this).fadeTo("slow",1);
			$('#'+secondname+'cc').html('<h3>'+nn+'</h3>');
			 myend=$('#'+secondname+'link a').size();
			if (mynowplaying>myend)
			{
				mynowplaying=0;
			}
			clearTimeout(timer);
				timer=setTimeout(autop,100,mynowplaying);			
		});						

		
	});
	
	
});


				
			
						

					if (autoplay===1)
					{	
					 timer=setTimeout(autop,playtime);
					 
						}	


					

}

});
})(jQuery);	
var _st = window.setTimeout; 
						window.setTimeout = function(fRef, mDelay) { 
							if(typeof fRef == 'function'){ 
								var argu = Array.prototype.slice.call(arguments,2); 
								var f = (function(){ fRef.apply(null, argu); }); 
								return _st(f, mDelay); 
							} 
						 return _st(fRef,mDelay); 
						}; 

 
 