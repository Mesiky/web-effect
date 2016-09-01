window.onload=function(){
	var box=document.getElementById('box');//获取box元素
	var div=box.getElementsByTagName('div');//获取所有的div元素
	var list=document.getElementsByClassName('list')[0];//获取到导航框
	var offsetTop='';
	var scrolltop=0;
	var top=0;
	var list_a=list.getElementsByTagName('a');
	function hasClass(obj,clas){//检查样式是否存在
		return obj.className.match(new RegExp("(^|\\s)"+clas+"(\\s|$)"));
	}
	function removeClass(obj,clas){
		if(hasClass(obj,clas)){//样式存在就进行删除
			obj.className=obj.className.replace(new RegExp("(^|\\s)"+clas+"(\\s|$)"),'')
		}
	}
	function addClass(obj,clas){
		obj.className+=' '+clas;//添加样式
	}
	window.onscroll=function(){//添加滚动事件
		scrolltop=document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条高度
		for(var i=0;i<div.length;i++){
			top = div[i].offsetTop;//获取每个div相对顶点的高度
			if(scrolltop>top-200){//-200设置更好的用户体验
				offsetTop='#'+div[i].getAttribute('class');
			}else{
				break;
			};
		}
		var current=list.getElementsByClassName('on')[0];//获取到on样式当前所在的区间
		if(offsetTop && offsetTop!=current.getAttribute('href')){
				removeClass(current,'on');//删除当前的样式
				for(var j=0;j<list_a.length;j++){//循环遍历所有a元素
					if(list_a[j].getAttribute('href')==offsetTop){//如果a元素的href属性值==当前区域的值
						addClass(list_a[j],'on');//给新区域添加on样式
					}
				}
		}
	};

}