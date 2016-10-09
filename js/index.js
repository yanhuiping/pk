/*$(function(){
	var poker=[];
	var colors=['h','s','c','d'];
	var biao={};
	while(poker.length!=52){
		var n=Math.ceil(Math.random()*13);
		var index=Math.floor(Math.random()*4);
		var c=colors[index];
		var v={
			color:c,
			number:n
		}
		if(!biao[c+n]){
			poker.push(v);
			biao[c+n]=true;
		}
	}
var	dict={
	1:'A',
	2:'2',
	3:'3',
	4:'4',
	5:'5',
	6:'6',
	7:'7',
	8:'8',
	9:'9',
	10:'T',
	11:'J',
	12:'Q',
	13:'K',
}
	$(poker).each(function(i,v){
	$('<div>').addClass('pai').css('background-image','url(./img/'+dict[v.number]+v.color+'.png)').appendTo('.scene');

	})
})*/
/*$(function(){
	var poker=[];
	var colors=['h','c','d','s'];
	var biao={};
	// biao={n+c:true}
	while(poker.length!=52){
		var n=Math.ceil(Math.random()*13);
		var index=Math.floor(Math.random()*4);
		var c=colors[index];
		var v={
			color:c,
			number:n
		}
		if(!biao[n+c]){
			poker.push(v);
			biao[n+c]=true;
		}
	}
	var dict={
		1:'A',
		2:2,
		3:3,
		4:4,
		5:5,
		6:6,
		7:7,
		8:8,
		9:9,
		10:'T',
		11:'J',
		12:'Q',
		13:'K',

	}
	$(poker).each(function(i,v){
		
$('<div>').addClass('pai').css({
				backgroundImage:'url(./img/'+dict[v.number]+v.color+'.png)'
			})
			.appendTo('.scene');

	})

})*/
$(function(){
	function makePoker(){
		var poker=[];
	var biao={};
	var colors=['h','s','d','c'];
	while(poker.length!=52){
		var n=Math.ceil(Math.random()*13);
		var index=Math.floor(Math.random()*4);
		var c=colors[index];
		var v={
			color:c,
			number:n
		}
		if(!biao[c+n]){
			poker.push(v)
			biao[c+n]=true;
		}
	}
	return poker;
	}
	
	function setPoker(poker){
		var dict={
		1:'A',
		2:2,
		3:3,
		4:4,
		5:5,
		6:6,
		7:7,
		8:8,
		9:9,
		10:'T',
		11:'J',
		12:'Q',
		13:'K',

	}
	var index=0;
	for(var i=0,poke;i<7;i++){
		for(var j=0;j<i+1;j++){
		poke=poker[index];
		index+=1;
		$('<div>').attr('id',i+'_'+j)
		.attr('color',poke.color)
		.attr('data-number',poke.number)
		.addClass('pai')
		.css({
			backgroundImage:'url(./img/'+dict[poke.number]+poke.color+'.png)'
		})
		.appendTo('.scene')
		.delay(index*30)
		.animate({
			top:i*40,
			left:j*146+(6-i)*73,
			opacity:1
		})
		}
	}
	for(;index<poker.length;index++){
	// for(;index<32;index++){


		var v=poker[index];
		$('<div>').attr('data-number',v.number)
		.attr('color',v.color)
		.addClass('pai left').css({
			backgroundImage:'url(./img/'+dict[v.number]+v.color+'.png)'
		})
		.appendTo('.scene').delay(index*30).animate({
			top:432,
			left:190,
			opacity:1
		})
	}

	}
	var moveRight=$('.scene .move-right');
	var moveLeft=$('.scene .move-left');
	var fenshu=$('.fenshu');
	var a=fenshu.text();
	var paishu=$('.paishu');
	var b=paishu.text();
	var numb=paishu.text();
	var start=$('.start');
	var restart=$('.restart');
	var end=$('.end');
	var js=$('.js');
	var s=0;
	var m=0;
	var f=0;
	var ff=0;
	setPoker(makePoker());

	moveRight.delay(400).animate({
			opacity:1
		})
		moveLeft.delay(400).animate({
			opacity:1
		});
		var t=setInterval(move,1000)
 function move(){
 	s+=1;
if(s>9){
	s=0;
	m+=1;
}
if(m>5){
	m=0;
	f+=1;
}
if(f>9){
	f=0;
	ff+=1;
}
/*if(s==9){
	alert('时间到，游戏结束');
	$('.scene .pai').detach();
	clearInterval(t);
	js.text(''+0+0+':'+0+0+'');
	$('.fenshu').text(a);
	$('.paishu').text(b);
	moveRight.animate({
			opacity:0
		})
		moveLeft.animate({
			opacity:0
		});
	// t=setInterval(move,1000)
	// setPoker(makePoker());

}*/
js.text(''+ff+f+':'+m+s+'')
 }
	restart.on('click',function(){
		$('.scene .pai').detach();
		moveRight.css('opacity','0');
		moveLeft.css('opacity','0');

		setPoker(makePoker());
		moveRight.delay(400).animate({
			opacity:1
		})
		moveLeft.delay(400).animate({
			opacity:1
		});
		$('.fenshu').text(a);
				$('.paishu').text(b);
				clearInterval(t);
				js.text(''+0+0+':'+0+0+'');
				t=setInterval(move,1000);



	})
	end.on('click',function(){
		$('.scene .pai').detach();
				clearInterval(t);
				var s=0;
				var m=0;
				var f=0;
				var ff=0;
				js.text(''+0+0+':'+0+0+'');

		moveRight.animate({
			opacity:0
		})
		moveLeft.animate({
			opacity:0
		});
	})
	//点击左右
	

	moveRight.on('click',(function(){
		var zIndex=1;

		return function(){
		if($('.left').length){
			$('.left').last().css('z-index',zIndex++).animate({
			left:690
		}).queue(function(){
			$(this).removeClass('left').addClass('right');
			$(this).dequeue();
		})
		}	
	console.log(zIndex);

	}
	}())
	)
	moveLeft.on('click',(function(){
	var number=0;
	return	function(){
		if($('.left').length){
			return;
		}
		number++;
		if(number>=3){
			alert('多于三次')
			$('.scene .pai').detach();
				
				setPoker(makePoker());
				$('.fenshu').text(a);
				$('.paishu').text(b);
			// return;
		}
		$('.right').each(function(i){
			// console.log($(this))
			// console.log($(this).arguments)

			$(this).delay(i*100).animate({
			left:190,
			zIndex:0
		}).queue(function(){
			$(this).removeClass('right').addClass('left');
			$(this).dequeue();
		})
		})
	// console.log(zIndex);


	}
	}())
		
	)

	
	//点击的效果
	function getColor(el){
		return $(el).attr('color');
	}
	function getNumber(el){
		return parseInt($(el).attr('data-number'));
	}
	function isCanClick(el){
		var x=parseInt($(el).attr('id').split('_')[0]);
		var y=parseInt($(el).attr('id').split('_')[1]);
		if($('#'+(x+1)+'_'+y).length||$('#'+(x+1)+'_'+(y+1)).length){
			return false;
		}else{
			return true;
		}
	}
	var prev=null;
	var num=0;
	$('.scene').on('mousedown',false);
	$('.scene').on('click','.pai',function(){
		
		var number=getNumber(this);
		if($(this).attr('id')&&!(isCanClick(this))){
			return;
		}
		//点击的是13的状态 直接消除 函数返回
		//第一张 吧这张存储
		//第二章 上次存储的和现在的点击的这个拿出来判断
		if(number==13){
			num++;
			numb--;
			$(this).animate({
				top:0,
				left:700
			}).queue(function(){
				$(this).detach().dequeue();
			})
		fenshu.text(num);
			paishu.text(numb);	

		}else{
			if(prev){
			if(getNumber(prev)+getNumber(this)==13){
				num++;
				numb-=2;
				prev.add(this).animate({
					top:0,
					left:700
				}).queue(function(){
					$(this).detach().dequeue();
				})
			paishu.text(numb);	
		fenshu.text(num);

			}else{
				// console.dir(prev)
				if(getNumber(prev)==getNumber(this)&&(getColor(prev)==getColor(this))){
					$(this).animate({
						top:'+=20'
					})
				}else{
				// console.log($(this))
				$(this).animate({
					top:'-=20'
				})
				.animate({
					top:'+=20'
				})
				prev.delay(400)
				.animate({
					top:'+=20'})
			}	
			}
			prev=null;
		}else{
			prev=$(this);
			prev.animate({
				top:'-=20'
			})
			// alert(1)
				// numb--;

		}
		}
		
		if(numb<0){
					alert('重新开始');
				$('.scene .pai').detach();
				$('.fenshu').text(a);
				$('.paishu').text(b);
				js.text(''+0+0+':'+0+0+'');

				setPoker(makePoker());
				}
		// console.log(numb);

	})
var gz=$('.gz');
var sm=$('.shuoming');
gz.on('click',function(){
	sm.slideToggle('normal');
})

})