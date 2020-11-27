//////////////////////////注册////////////////////////////////
$('button')[0].addEventListener('touchstart',function(){
	var user = $("#user").val()
	var pass = $("#pass").val()
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		data:{
			status:"register",
			userID:user,
	        password:pass
		},
		success:function(res){
			var r = Number(res)
			console.log(r)
			switch(r){
				case 0 : $(".tip").show().html("用户名重名！");
						setTimeout(function(){
							$(".tip").hide()
							location.reload()
						},1000)
				break;
				case 1 : $(".tip").show().html("注册成功,3秒后自动跳转");
						setTimeout(function(){
							$(".tip").hide()
							location.href="login.html"
						},3000)
				break;
				case 2 : $(".tip").show().html("稍后再试！");
						setTimeout(function(){
							$(".tip").hide()
							location.reload()
						},1000)
			}
		}
	})
})




