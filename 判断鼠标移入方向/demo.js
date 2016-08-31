$(function(){
$(".div2_1,.div2_2").bind("mouseenter mouseleave",	//选择对象触发事件
function(e) {
	var w = $(this).width();
	var h = $(this).height();
	var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
	var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
	var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;   //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
	var eventType = e.type;
	var dirName = new Array('上方','右侧','下方','左侧');

	if(e.type == 'mouseenter'){		//如果是mouseover事件
		switch(direction){		//这里使用direction的值来判断方向
				case 0:
					$(this).find('.cover').css({
						left:0,
						top:'-'+$(this).find('.cover').width()+'px'
					}).animate({
						top:0
					},'fast')
				break;
				case 1:
					$(this).find('.cover').css({
						left:$(this).find('.cover').width()+'px',
						top:0
					}).animate({
						left:0
					},'fast')	
				break;
				case 2:			
					$(this).find('.cover').css({
						left:0,
						top:$(this).find('.cover').width()+'px'
					}).animate({
						top:0
					},'fast')
				break;
				default:
					$(this).find('.cover').css({
						left:'-'+$(this).find('.cover').width()+'px',
						top:0
					}).animate({
						left:0
					},'fast')				
		}
	}else{
		switch(direction){
				case 0:
					$(this).find('.cover').animate({
						top:'-'+$(this).find('.cover').width()+'px'
					},'fast')
				break;
				case 1:
					$(this).find('.cover').animate({
						left:$(this).find('.cover').width()+'px'
					},'fast')	
				break;
				case 2:			
					$(this).find('.cover').animate({
						top:$(this).find('.cover').width()+'px'
					},'fast')
				break;
				default:
					$(this).find('.cover').animate({
						left:'-'+$(this).find('.cover').width()+'px'
					},'fast')				
		}
	}
});

})

