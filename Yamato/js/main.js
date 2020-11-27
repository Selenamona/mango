//1.插件封装2.SASS 3.模块化  4.面向对象.
///////////////////首页//////////////////////////////

$(".homePage a").attr("href","javascript:return false;")
$(".homePage a").on("click",function(){
	location.href = "goodsDetails.html"
})
////////////////搜索隐藏/////////////////////////////////////
$(".logo .search input").on("focus",function(){
	$(".logo .search .search_hidde").show();
});
$(".logo .search input").on("blur",function(){
	$(".logo .search .search_hidde").hide();
});
$(".logo .search a").on("mousedown",function(){
	$(".logo .search input").val($(this).html())
})
$(".logo .search span").on("click",function(){
	location.href = "goodsList.html"
})
////////////////导航列表/////////////////////////////////////////
$(".nav .last").on("mouseover",function(){
	$(this).children().css({
		borderColor:"#c33",
		height:47
	});
	$(this).find("span").addClass("active")
	$(".nav .catergory").stop().fadeIn()
})
$(".nav .last").on("mouseout",function(){
	var that = $(this);
	$(".nav .catergory").on("mouseover",function(){
		that.children().css({
			borderColor:"#c33",
			height:47
		});
		$(this).find("span").addClass("active")
		$(".nav .catergory").stop().fadeIn()
	})
	$(".nav .catergory").on("mouseout",function(){
		that.children().css({
			borderColor:"#fff",
			height:45
		});
	$(this).find("span").removeClass("active")
		$(".nav .catergory").stop().fadeOut();
	})	
	that.children().css({
		borderColor:"#fff",
		height:45
	});
	$(this).find("span").removeClass("active")
	$(".nav .catergory").stop().fadeOut();
})
$(".nav .catergory a").on("click",function(){
	location.href = "goodsList.html"
})
//////////焦点轮播图///////////////////////////////////////////
var posterTvGrid86804 = new posterTvGrid('posterTvGrid86804',{className: "posterTvGrid"},[
		{"img":"img/1.jpg","title":"","url":""},

		{"img":"img/2.jpg","title":"","url":""},

		{"img":"img/3.jpg","title":"","url":""},

		{"img":"img/4.jpg","title":"","url":""},

		{"img":"img/5.jpg","title":"","url":""},

		{"img":"img/6.jpg","title":"","url":""},

		{"img":"img/7.jpg","title":"","url":""}	
	]
);
//////////////////距离结束倒计时///////////////////////////////////
setInterval(function(){

	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	h = h-10>=0 ? h : "0"+ h;
	m = m-10>=0 ? m : "0"+ m;
	s = s-10>=0 ? s : "0"+ s;

	$(".flashSale .hour").html(h)
	$(".flashSale .minute").html(m)
	$(".flashSale .second").html(s)

},1000)

//////////////////////分类品牌切换///////////////////////////////

$(".cf_bottom article").on("mouseover",function(){
	$(this).children(".cf_left").show()
	$(this).children(".cf_right").show()
	$(this).css({
		borderLeft:"1px solid #ccc",
		borderRight:"1px solid #ccc",
		boxShadow:"0 0 5px #ccc"
	})
})

$(".cf_bottom article").on("mouseout",function(){
	$(this).children(".cf_left").hide()
	$(this).children(".cf_right").hide()
	$(this).css({
		borderLeft:"1px solid #fff",
		borderRight:"1px solid #fff",
		boxShadow:"0 0 0 #fff"
	})
})
var n = 0;
$('.cf_bottom .cf_right').on("click",function(){
	var UL = $(this).prev().prev().children();
	if(n==UL.length-1){
		n=0;
	}else{
		n++;
	}
	UL.hide();
	UL[n].style.display = "block";
})
$('.cf_bottom .cf_left').on("click",function(){
	var UL = $(this).prev().children();
	if(n==0){
		n=UL.length-1;
	}else{
		n--
	}
	UL.hide();
	UL[n].style.display = "block";
})
/////////////////////猜你喜欢瀑布流/////////////////////////////////
seajs.use(["./module/load.js"])

////////链接列表页////////////
$(".title a").on("click",function(){
	location.href = "goodsList.html"
	return false;
})
$(".flas_t a").on("click",function(){
	location.href = "activityPage.html"
	return false;
})
///////////洋货集///////////////
$(".yanghuo").on("click",function(){
	$("html,body").stop().animate({
		scrollTop:$(".foreignGoods").offset().top
	})
	return false;
})
$(".limited").on("click",function(){
	$("html,body").stop().animate({
		scrollTop:$(".flashSale").offset().top
	})
	return false;
})
$(".nav .last").on("click",function(){
	$("html,body").stop().animate({
		scrollTop:$(".classify").offset().top
	})
	return false;
})
$(".elementLink").on("click",function(){
	location.href = "activityPage.html"
	return false;
})
////////右侧bar///////////////////////////
$(".goback").on("click",function(){
	$("html,body").stop().animate({
		scrollTop:0
	})
})
$(".rightBar ol").children().eq(0).on("click",function(){
	location.href= "login.html"
})
$(".rightBar ol").children().eq(1).on("click",function(){
	location.href= "login.html"
})
/////////////////封装功能区域///////////////////////////////////////
function randomInt(){
	return Math.round(Math.random()*8999)+1000;
}

function randomColor(){
	var r = Math.round(Math.random()*255);
	var g = Math.round(Math.random()*255);
	var b = Math.round(Math.random()*255);
	return "rgb("+r+","+g+","+b+")"
}




