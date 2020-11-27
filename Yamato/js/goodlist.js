
$(".listPage a").on("click",function(){
	// location.href = "goodsDetails.html"
	return false;
})
//请求数据header
$.ajax({
	url:"http://localhost/Yamato/data/header.html",
	success:function(data){
		$(".header").append(data);
		//搜索隐藏
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
//请求右侧bar
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
		})
		$(".rightBar ol").children().eq(1).on("mouseleave",function(){
			$(".cart").stop().fadeOut()
		})
	}
})

/////////////////////////跳转详情页//////////////////////
//用事件委托给动态生成的元素添加事件
$(".main_body").on("click",".skip",function(){
	var id = $(this).prev().prev().attr("data-id")
	$.cookie("goods",id)
	location.href = "goodsDetails.html?"+id
})

///////////////////////分页/////////////////////////////////

function loadlsit(min,max){
   	$.ajax({
		url:"http://localhost/Yamato/data/listdata.php",
		success:function(res){
			var data = eval(res);
			var html ="";
			for (var i = min; i < max; i++) {
				if(i<data.length){
					html += `<li>
							<img class="getImg" data-id="${data[i].id}" src="${data[i].src}" alt="">
							<p>${data[i].price}<span>包邮包税</span></p>
							<p class="skip">${data[i].title}</p>
							<p>
							<a><img src="${data[i].img1}" alt="">${data[i].tip1}</a>
							<a><img src="${data[i].img2}" alt="">${data[i].tip2}</a>
							</p>
						</li>`
				}				
			}
			$(".main_body ul").html(html)
		}
	})
}

loadlsit(0,10)

$(".tcdPageCode").createPage({
    pageCount:12,
    current:1,
    backFn:function(p){
    	loadlsit((p-1)*10,10*p)
    }
});
////////////////////////加载更多///////////////////////////////
seajs.use(["./module/load"])



