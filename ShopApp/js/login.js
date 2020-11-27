/////////////////////登录//////////////////////////
$('.log')[0].addEventListener("touchstart",function(){
	var oUser = $("#user").val()
	var oPass = $("#pass").val()
	if(oUser == ""){
		$(".tip").show().html("请输入用户名!");
		setTimeout(function(){
			$(".tip").hide();
			location.reload()
		},1000);
	}else{
		if(oPass == ""){
			$(".tip").show().html("请输入密码!");
			setTimeout(function(){
				$(".tip").hide();
				location.reload()
			},1000);
		}else{
				$.ajax({
		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		data:{
			status:"login",
			userID:oUser,
			password:oPass
		},
		success:function(res){
			var r = Number(res)
			switch(r){
				case 0: $(".tip").show().html("用户名不存在!");
						setTimeout(function(){
							$(".tip").hide();
							location.reload()
						},1000);
						break;
				case 2: $(".tip").show().html("用户名密码不符！");
						setTimeout(function(){
							$(".tip").hide();
							location.reload()
						},1000);
						break;

				default: $(".tip").show().html("登陆成功，3秒后自动跳转");
						location.href = "../cao/home.html"
						localStorage.setItem('users','['+oUser+']');
						//var U = localStorage.getItem('users');
						// if(!U){
						// 	//用户第一次登录
						// 	localStorage.setItem('users','['+oUser+']')
						// }else{
						// 	JSON.parse(U).push(oUser)
						// 	localStorage.setItem('users',U)
						// }

						

						setTimeout(function(){
							$(".tip").hide();
							location.reload()
						},3000);
			}
		}
	})
		}

	}


})	
//////////////////////////注册////////////////////////////////
$(".regis")[0].addEventListener("touchstart",function(){
		location.href = "register.html"
})

$("p span").on("click",function(){
	$(this).toggleClass("check")
	if($(".show").hasClass("check")){
		$("#pass").attr("type","text")
	}else{
		$("#pass").attr("type","password")
	}
})
