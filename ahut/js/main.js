//页面主导航
"use strict"
+function(){
	var lis=document.querySelectorAll("#nav>ul>li");
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			this.lastElementChild.style.height='140px';
			this.className='hover';
		}
		lis[i].onmouseout=function(){
			this.lastElementChild.style.height='0';
			this.className='';
		}
	}
}();
//banner广告
+function(){
	var outer=document.querySelector('#banner>div');
	var as=outer.getElementsByTagName('a');
	var i=0;
	function task(){
		if(i<=4){
			for(var j=0,len=as.length;j<len;j++)
				as[j].className='';
			as[i].className='current';
			i++;
		}
		else i=0; 
	}
	var timer=setInterval(task,2000);
}()
//右侧滚动轮播
+function(){
	//div  id scroll_aside
	var div=document.getElementById('scroll_aside');
	var ul=div.getElementsByTagName('ul')[0];
	var li=div.getElementsByTagName('li');
	ul.innerHTML=ul.innerHTML+ul.innerHTML;
	ul.style.height=li[0].offsetHeight*li.length+'px';
	var speed=1;
	function move(){
		if(ul.offsetTop<-ul.offsetHeight/2){
			ul.style.top='0';
		}
		if(ul.offsetTop>0){
			ul.style.top=-ul.offsetHeight/2+'px';
		}
		ul.style.top=ul.offsetTop-speed+'px';
	}
	var timer=setInterval(move,100);
	div.onmouseover=function(){
		clearInterval(timer);
		timer=null;
	}
	div.onmouseout=function(){
		timer=setInterval(move,100)
	}
}()
/*新闻标签页*/
+function(){
	var lis=document.querySelectorAll('#nav_center li');
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(var j=0;j<lis.length;j++){
				lis[j].className='';
			}
			this.className='active';
			var a=this.firstElementChild;
			var href=a.getAttribute('href');
			var div=document.getElementById(href);
			var pages=document.querySelectorAll('#tag_page>div');
			console.log(pages);
			for(var i=0;i<pages.length;i++){
				pages[i].style.display='none';
			}
			div.style.display='block';
		}
	}
}()