$(function(){
	$(window).scroll(function(){	//滚动条触发事件
		var scrollTop=$(window).scrollTop()+200;	//获取滚动条高度 因为锚点会碰顶才会条，所以提前高度跳
		var offsetTop='';
		var top=0;
		$('#box').find('div').each(function(){//循环遍历每个div
				// console.log($(this).offset().top)//获取每个div相对顶部的距离
				top=$(this).offset().top;
				if(scrollTop>top){//当滚动条高度大于div相对位置就能获取滚动条在哪个区间
					offsetTop='#'+$(this).attr('class');//offsetTop会被重复覆盖，获取到最后一个
				}else{
					return false;//不是没有在后面的区间可以直接停止后面的遍历
				}
									
		})
		var current = $('.list').find('.on');//获取到当前on样式的所在地方
 		if(offsetTop && current.attr('href')!=offsetTop ){//如果offset为空就说明区间没有动，不用改变
 			//判断on所在的地方和当前的区间是否相同，相同就没必要改变，不相等就改变
 			current.removeClass('on');//删除掉当前on所在的地方的样式
 			$('.list').find("[href="+offsetTop+"]").addClass('on')//将on添加到现在的新地方
 		}
	})
})