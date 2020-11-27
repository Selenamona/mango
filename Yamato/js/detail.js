//请求数据header
$.ajax({
	url:"http://localhost/Yamato/data/header.html",
	success:function(data){
		$(".header").append(data);
		$.getData();
	}
})
//请求数据footer
$.ajax({
	url:"http://localhost/Yamato/data/footer.html",
	success:function(data){
		$(".footer").append(data);
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
		$(".rightBar ol").children().eq(1).on("mouseenter",function(){
			$(".cart").stop().fadeIn()
			renderingCart()
		})
		$(".rightBar ol").children().eq(1).on("mouseleave",function(){
			$(".cart").stop().fadeOut()
		})
	}
})
///////////////////////不同商品的跳转////////////////
$.ajax({
	url:"http://localhost/Yamato/data/listdata.php",
}).then(function(res){
	var data = eval(res)[$.cookie("goods")];
	var oImg = `<img class="smallimg" src="${data.src}" alt="">`
	$(".gLeft .bigImg").html(oImg)
	$(".gLeft .view").html(oImg)
	$(".gCenter h4").html(data.title)
	$(".gCenter .price dd").html(data.price)
})
////////////////////////放大镜///////////////////////////////
function Magnifier(selector){
	this.ele = selector;
	this.cover = this.ele.prev().prev();
	this.view = this.ele.prev();
	this.init();
}
Magnifier.prototype.init = function(){
	var that = this;
	this.ele.on("mouseover",function(){
		that.cover.show();
		that.view.show();
	})
	this.ele.on("mousemove",function(event){
		var evt = event || window.event;
		that.left = evt.offsetX;
		that.top = evt.offsetY;
		that.move();
	})
	this.ele.on("mouseout",function(){
		that.cover.hide();
		that.view.hide();
	})
}
Magnifier.prototype.move = function(){
	var left = this.left - this.cover.outerWidth()/2;
	var top = this.top - this.cover.outerHeight()/2;
	//边界检测
	left = left <= 0 ? 0 : left;
	top = top <= 0 ? 0 : top;
	left = left >= this.ele.outerWidth() - this.cover.outerWidth() ? this.ele.outerWidth() - this.cover.outerWidth() : left;
	top = top >= this.ele.outerWidth() - this.cover.outerHeight() ? this.ele.outerHeight() - this.cover.outerHeight() : top;

	this.cover[0].style.left = left +"px";
	this.cover[0].style.top = top + "px";

	//计算比例
	this.x = left / this.ele.outerWidth();
	this.y = top / this.ele.outerHeight();
	this.Magnify();
}
Magnifier.prototype.Magnify = function(){
	var mL = this.x * this.view.children().outerWidth()
	var mT = this.y * this.view.children().outerHeight()
	this.view.children().css({
		marginLeft:-mL,
		marginTop:-mT
	})
}
new Magnifier($(".main_img .bCover"))

////////////////////小图轮播点击///////////////////////////////////
$(".gLeft li").on("mouseover",function(){
	$(this).siblings().removeClass("active");
	$(this).addClass("active");
	$(".bigImg").html($(this).html());
	$(".view").html($(this).html());
})
$(".btnright").on("click",function(){
	$(".gLeft ul")[0].style.marginLeft = "-360px"
})
$(".btnleft").on("click",function(){
	$(".gLeft ul")[0].style.marginLeft = "0"
})
//////////////////选择购买/////////////////////////////////
//拼邮
$(".send .pinyou").on("mouseover",function(){
	$(this).next().show()
})
$(".send .pinyou").on("mouseout",function(){
	$(this).next().hide()
})
//颜色
$(".gCenter .color dd").on("click",function(){
	$(this).toggleClass("active")
	$(this).children().toggleClass("active")
})
//二维码
$(".buy .sao").on("mouseover",function(){
	$(".buy article").show()
})
$(".buy .sao").on("mouseout",function(){
	$(".buy article").hide()
})
//添加购物车
var n = 1;
var surplus = $(".surplus span").html()
$(".num p span").on("click",function(){
	if($(this).index()==0){
		if(n<=1){
			n=1
		}else{
			n--
		}
	}else{
		if(n>=surplus){
			n=surplus
		}else{
			n++
		}	
	}
	$(".num p input").val(n)
})

$(".add").on("click",function(){
	var num = Number($(".num p input").val());
	var xx = $.cookie("goods");
	if(!$.cookie("good")){
		$.cookie("good",'[{"id":'+xx+',"number":'+num+'}]')
		//console.log("第一次购买这件商品")
		//console.log($.cookie("good"));
	}else{
		var arrCookie = eval($.cookie("good"))
		var hasSameGoods = false;
		for (var i = 0; i < arrCookie.length; i++) {
			if(xx == arrCookie[i].id){
				//console.log("买相同产品")
				arrCookie[i].number = arrCookie[i].number +num;
				hasSameGoods = true;
				break;
			}
		}
		if(!hasSameGoods){
			//console.log("买不同商品")
			var obj = {"id":xx,"number":num}
			arrCookie.push(obj)
		}
		var strGoods = JSON.stringify(arrCookie)
		$.cookie("good",strGoods)
		//console.log($.cookie("good"))
	}
	getAllGoods()
})
//获取总的购物数量
function getAllGoods(){
	var alnum = 0;
	var arrC = eval($.cookie("good"))
	for (var i = 0; i < arrC.length; i++) {
		alnum += arrC[i].number
	}
	$(".allnum").html(alnum);
}
//渲染购物车页面
function renderingCart(){
	$.ajax({
		url:"http://localhost/Yamato/data/listdata.php"
	}).then(function(res){
		var data = eval(res)
		var arrC = eval($.cookie("good"))
		var html = ""
		for (var i = 0; i < arrC.length; i++) {
			// console.log($.cookie("goods"))
			html += `<li>
						<img src="${data[arrC[i].id].src}" alt="">
						<dl>
							<dt>${data[arrC[i].id].title}</dt>
							<dd><a href="">购买</a>商品数量 <span>${arrC[i].number}</span></dd>
						</dl>       
					</li>`
		}
		$(".cart ul").html(html)
	})
}
//收藏商品
$(".buy p i").on("click",function(){
	$(this).toggleClass("active")
})
//买家评论//评论与商品详情切换
$(".pb_right .r_top").children().on("click",function(){
	$(this).siblings().removeClass("active")
	$(this).addClass("active")
	$(".r_con").children().eq($(this).index()).show()
	$(".r_con").children().eq($(this).index()).siblings().hide()
})







