$(function(){
	var num=1;
	var img=$('#box').find('.img');
	var oli=img.find('li');
	var flag=true;//设置flag，防止用户过快点击按钮，造成动画的累积
	var timer=null;
	//右键点击
	$('#box').find('.btn_r').click(function(){
		Lrun();//因为右键点击和自动滚动动作是相同的，所有可以将其封装
	})
	//左键点击
	$('#box').find('.btn_l').click(function(){

		if(flag){//判断flag是否为true
			num--;//num也要放在if里面，因为放在外面只要点击按钮就会执行，但是动画不一定执行。
			flag=false;//将flag设置为flase，表示用户点击了按钮，并且当前动画还没执行完
			img.animate({
				left:num*-490+'px'
			},function(){	
				if(num<=0){
					num=oli.length-2
					img.css('left','-2450px');
				}
						console.log(num)
				flag=true;//动画执行完之后，flag=true这个时候点击按钮才有效
			})		
		}

	})
	 timer=setInterval(function(){//定时器，循环执行
		Lrun();
	},2000)
//向左滚动
function Lrun(){
	if(flag){
		num++;//num也要放在if里面，因为放在外面只要点击按钮就会执行，但是动画不一定执行。
		flag=false;
		img.animate({
			left:num*-490+'px',
		},function(){	
			if(num>oli.length-2){
				num=1;
				img.css('left','-490px');
			}
			flag=true;
		})		
	}
}
//当鼠标放在轮播器上触发事件
$('#box').hover(function(){
	clearInterval(timer)//当鼠标覆盖的时候，就清除定时器
},function(){
	timer=setInterval(function(){
			Lrun();//当鼠标离开的时候就启动定时器
		},2000)
})
})

