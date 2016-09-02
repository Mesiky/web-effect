window.onload=function(){
	var clicentW=document.documentElement.clientWidth;//获取屏幕宽度
	var main=document.getElementById('main');//获取main元素
	//因为IE8 9 不支持ByclassName所以循环遍历所有元素，把className=**的放入一个新的数组
	// var big_box=main.getElementsByClassName('big_box');//获取到所有外框
	var big_box=getClassName(main,'big_box');
	var box_offsetW=big_box[0].offsetWidth;//获取到每个外框的宽度
	var lineNum=Math.floor(clicentW/box_offsetW);//获取每行的个数
	main.style.width=box_offsetW*lineNum+'px';//设置主体的宽度
	main.style.margin='0 auto';//设置主体居中
	var arrH=offsetH(lineNum,big_box);//获取到第一行的所有高度，并放在空数组中
	position(big_box,arrH,lineNum);//流体布局定位
	window.onscroll=function(){
	var last=big_box[big_box.length-1];//获取到最后一个div
	var lastH=last.offsetTop;//获取到最后一个相对屏幕的高度
	var clientH=document.body.clientHeight || document.documentElement.clientHeight;//获取屏幕高度
	var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;//获取到滚动条高度
		if(scrollTop+clientH>lastH+Math.floor(last.offsetHeight/2)){//判断滚动条高度+可视区高度>最后一个div相对高度+他的一半（用户体验）
			for(var j=0;j<json.length;j++){//从json中获取数据
				var obig_box=document.createElement('div');//创建元素
				obig_box.className='big_box';//添加属性
				main.appendChild(obig_box);//添加进父元素中
				var obox=document.createElement('div');
				obox.className='box';
				obig_box.appendChild(obox);
				var oImg=document.createElement('img');
				oImg.src='image/'+json[j].src;
				obox.appendChild(oImg);
			}
		big_box=getClassName(main,'big_box');//重新获取全部的div个数
		arrH=offsetH(lineNum,big_box);//数组重置为第一行，全部重新定位
		position(big_box,arrH,lineNum);//流体布局定位

		}
	}
}
//
function offsetH(num,box){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(box[i].offsetHeight);
	}
	return arr;
}
//获取最低值在数组中的位置
function getIndex(arrH,min){
	for(var i in arrH){
		if(arrH[i]==min){
			return i;
		}
	}
}
//因为IE8 9 不支持ByclassName所以循环遍历所有元素，把className=**的放入一个新的数组
function getClassName(parent,clasName){
	var b_box_arr=new Array();
	var all=parent.getElementsByTagName('*');
	for(var i=0;i<all.length;i++){
		if(all[i].className==clasName){
			b_box_arr.push(all[i]);
		}
	}
	return b_box_arr;
}
//流体布局定位
function position(big_box,array,lineNum){
	for(var i=0;i<big_box.length;i++){
	 min=Math.min.apply(null,array);//获取到数组中最小的高度
	 index=getIndex(array,min);//获取到最小高度的一个标识值
	//把min和index放在循环内部，这样能动态改变他的值；
	if(i>lineNum-1){//因为i是从0开始，所以需要减1
		big_box[i].style.position='absolute';//设置第一行后面全部使用绝对定位
		big_box[i].style.left=index*182+'px';
		big_box[i].style.top=array[index]+'px';
		array[index]+=big_box[i].offsetHeight;//数组获取到最低高度位置并定位后，把定位
		//高度加上，就不会是最小高度，下次就定位到其他最小位置了
	}
	}
}
