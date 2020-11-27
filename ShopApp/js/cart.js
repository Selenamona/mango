// $.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:"用户名"},function(res){
// 	console.log(res)
// })

var data = JSON.parse(localStorage.getItem("goods"));
console.log(data)

var str = '';
for (var i = 0; i < data.length; i++) {
	str += `<li>
				<div class="img"><img src=${data[i].goods.goodsListImg} alt="" /></div>
				<dl>
					<dt>${data[i].goods.goodsName}</dt>
					<dd>单价：<span class="fee">￥${data[i].goods.price}</span></dd>
					<dd><p>数量：</p>
						<p><span class="min">-</span>
							<input type="text" value="${data[i].number}"/>
							<span class="max">+</span>
						</p>
					</dd>
				</dl>
				<div class="del" data-id="${data[i].goods.goodsID}"><i class="iconfont">&#xe63d;</i></div>
			</li>`
}
$(".main ul").html(str)

$(".money .num")

$(".main").on("click",".del",function(){
	$(this).parent().remove()
	//console.log($(this))
})

$(".main").on("click",".max",function(){
	var value  = $(this).prev().val()
	value++
	$(this).prev().val(value)
})

$(".main").on("click",".min",function(){
	var value = $(this).next().val();
	if(value == 1){
		$(this).parentsUntil("ul").remove();
	}else{
		value--
	}
	$(this).next().val(value)
})

$(".f_list").on("click",function(){
	location.href = "../cao/home.html"
})
