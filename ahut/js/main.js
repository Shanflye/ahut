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