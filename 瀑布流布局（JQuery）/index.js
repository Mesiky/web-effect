$(function(){
	var main=$('#main');//获取main元素
	var obox=main.find('.big_box');//获取到每个div元素
	var boxW=main.find('.big_box').outerWidth();//获取每个div的宽
	var innerW=$(window).innerWidth();//获取可视区的宽度
	var innerH=$(window).innerHeight();
	var lineNum=Math.floor(innerW/boxW);//获取每行的行数
	var oarr=getH(obox,lineNum);//获取到第一行的所有高度
	var min=Math.min.apply(null,oarr);//获取最小高度
	var last=obox[obox.length-1];

	main.css({
		width:lineNum*boxW,
		margin:'0 auto'
	})
	position(obox,lineNum,oarr)
	$(window).on('scroll',function(){
		var getScroll=$(window).scrollTop();
		if(getScroll+innerH>$(last).offset().top+$(last).height()/2){
			$(json).each(function(index){
				main.append('<div class="big_box"><div class="box"><img src="image/'+json[index].src+'"></div></div>')
			})
		}
	oarr=getH(obox,lineNum);//获取到第一行的所有高度
	obox=main.find('.big_box');//因为每次都新增div所以数量需要跟着改变
	position(obox,lineNum,oarr);
	})


})
//获取第一行的所有div的高度
function getH(obj,lineNum){
	var arr=[];
	for(var i=0;i<lineNum;i++){
		arr.push(obj[i].offsetHeight);
	}
	return arr;
}
function index(arr,min){
	for(var i in arr){
		if(arr[i]==min){
			return i;
		}
	}
}
function position(box,lineNum,arr){
	for(var i=0;i<box.length;i++){
		min=Math.min.apply(null,arr);//获取最小高度
		if(i>lineNum-1){
			box.eq(i).css({
				position:'absolute',
				left:182*index(arr,min),
				top:min
			})
		arr[index(arr,min)]+=box.get(i).offsetHeight;
		// debugger;
		// alert(box.eq(i).height())
		}
	}
}