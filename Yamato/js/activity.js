////////////////////////////活动页///////////////////////////////
$(".actPage a").on("click",function(){
	location.href = "goodsDetails.html"
	return false;
})
//请求数据header
$.ajax({
	url:"http://localhost/Yamato/data/header.html",
	success:function(data){
		$(".header").append(data);
		$(".nav ul li").eq(1).addClass("first")
		$.getData()
	}
})
//请求数据footer
$.ajax({
	url:"http://localhost/Yamato/data/footer.html",
	success:function(data){
		$(".act_footer").append(data);
		
	}
})
//请求bar
$.ajax({
	url:"http://localhost/Yamato/data/rightbar.html",
	success:function(data){
		$(".bar").append(data);
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
	}
})
//////////////////////活动时间切换//////////////////////////////////
$(".tab_timer .tab .pre").on("click",function(){
	$(this).siblings().removeClass("active activeC")
	$(this).addClass("active")
	$(".c_top .c_main .cover").show()
	$(".box_buy a").html("去看看")
	$(".c_main .timer").hide()
})
$(".tab_timer .tab .now").on("click",function(){
	$(this).siblings().removeClass("active")
	$(this).addClass("activeC active")
	$(".c_top .c_main .cover").hide()
	$(".box_buy a").html("立即购买")
	$(".c_main .timer").show()
	$(".c_main .timer").children().eq(0).html("距离结束")
})
$(".tab_timer .tab .nex").on("click",function(){
	$(this).siblings().removeClass("active activeC")
	$(this).addClass("active")
	$(".c_top .c_main .cover").hide()
	$(".box_buy a").html("先去看看")
	$(".c_main .timer").show()
	$(".c_main .timer").children().eq(0).html("距离开始")
})
//////////////////////倒计时时间//////////////////////////////
setInterval(function(){

	var d = new Date();
	var h = 19 - d.getHours();
	var m = 59 - d.getMinutes();
	var s = 59 - d.getSeconds();

	h = h-10>=0 ? h : "0"+ h;
	m = m-10>=0 ? m : "0"+ m;
	s = s-10>=0 ? s : "0"+ s;

	$(".c_main .timer .hour").html(h)
	$(".c_main .timer .minute").html(m)
	$(".c_main .timer .second").html(s)

},1000)
