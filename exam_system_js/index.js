var allAnimateElements = {
	 'screen1':'screen-1__pointer screen-1__pointer2 screen-1__pointer3 screen-1__pointer__words screen-1__pointer__words2 screen-1__pointer__words3 screen-1__paper screen-1__title screen-1__subtitle',
	 'screen2':'screen-2__title screen-2__subtitle screen-2__photo1 screen-2__photo2 screen-2__photo3 screen-2__photo4 screen-2__photo5 screen-2__photo6 screen-2__photo1-words screen-2__photo2-words screen-2__photo3-words screen-2__photo4-words screen-2__photo5-words screen-2__photo6-words',
	 'screen3':'screen-3__title screen-3__subtitle screen-3__photo1 screen-3__photo2 screen-3__photo3 screen-3__photo4 screen-3__photo5 screen-3__words1 screen-3__words2 screen-3__words3 screen-3__words4 screen-3__words5 screen-3__more',
}


var ScreenAnimate01 = allAnimateElements['screen1'].split(' ');

for(var i=0;i<ScreenAnimate01.length;i++){
		var tag = document.getElementsByClassName(ScreenAnimate01[i])[0];
	 	var beforeClass = tag.getAttribute("class");
	 	var afterClass = beforeClass + ' ' + beforeClass + '_animate_init';
	 	tag.setAttribute('class',afterClass);
}
 



var ScreenAnimate02 = allAnimateElements['screen2'].split(' ');

for(var i=0;i<ScreenAnimate02.length;i++){
		var tag = document.getElementsByClassName(ScreenAnimate02[i])[0];
	 	var beforeClass = tag.getAttribute("class");
	 	var afterClass = beforeClass + ' ' + beforeClass + '_animate_init';
	 	tag.setAttribute('class',afterClass);
}
var ScreenAnimate03 = allAnimateElements['screen3'].split(' ');

for(var i=0;i<ScreenAnimate03.length;i++){
		var tag = document.getElementsByClassName(ScreenAnimate03[i])[0];
	 	var beforeClass = tag.getAttribute("class");
	 	var afterClass = beforeClass + ' ' + beforeClass + '_animate_init';
	 	tag.setAttribute('class',afterClass);
}

 
 window.onscroll = function () {
 	 var top  = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
 	 if(top<100){
 	 	var header = document.getElementsByClassName('header')[0];
 	 	header.style.opacity = 1;
 	 	header.style.backgroundColor= 'white';
 	 	var logo = document.getElementsByClassName('header__logo-a')[0];
 	 	logo.style.color = 'black';
 	 		var item = document.getElementsByClassName('header__nav-item');
	  	for(var j=0;j<item.length-1;j++){
	  		item[j].style.color = 'black';
	  	}
	  		var button = document.getElementsByClassName('header__nav-item_custom_button')[0];
	  	button.style.color = 'white';
	  	button.style.backgroundColor = 'black';
 	 }
 	 if(top>100){
 	 	var header = document.getElementsByClassName('header')[0];
 	 	header.style.opacity = .8;
 	 	header.style.backgroundColor= 'black';
 	 	var logo = document.getElementsByClassName('header__logo-a')[0];
 	 	logo.style.color = 'white';
 	 		var item = document.getElementsByClassName('header__nav-item');
	  	for(var j=0;j<item.length-1;j++){
	  		item[j].style.color = 'white';
	  	}
	  	var button = document.getElementsByClassName('header__nav-item_custom_button')[0];
	  	button.style.color = 'black';
	  	button.style.backgroundColor = 'white';
 	 }
 	 if(top>600){
 	 	for(var i=0;i<ScreenAnimate02.length;i++){
		var tag = document.getElementsByClassName(ScreenAnimate02[i])[0];
	 	var beforeClass = tag.getAttribute("class");
	 	var afterClass = beforeClass.replace('_animate_init','_animate_done');
	 	tag.setAttribute('class',afterClass);
	  
 		}

 	}

 	if(top>1300){
 		for(var i=0;i<ScreenAnimate03.length;i++){
		var tag = document.getElementsByClassName(ScreenAnimate03[i])[0];
	 	var beforeClass = tag.getAttribute("class");
	 	var afterClass = beforeClass.replace('_animate_init','_animate_done');
	 	tag.setAttribute('class',afterClass);
	  
 		}
 	}
 }

 window.onload = function (){
	 setTimeout(init,300);

 }
function init(){
	for(var i=0;i<ScreenAnimate01.length;i++){
		var tag = document.getElementsByClassName(ScreenAnimate01[i])[0];
	 	var beforeClass = tag.getAttribute("class");
	 	var afterClass = beforeClass.replace('_animate_init','_animate_done');
	 	tag.setAttribute('class',afterClass);
	  
 }
}
function to(tag){
	var that = document.getElementsByClassName("header__nav-item header__nav-item_status_active")[0];
	that.setAttribute('class','header__nav-item');
	tag.setAttribute('class','header__nav-item header__nav-item_status_active');
}



