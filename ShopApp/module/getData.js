define(function(){
	var getData = {
		init:function(){
			$.ajax("http://datainfo.duapp.com/shopdata/userinfo.php",function(res){
				console.log(res)
			})
		}
	}
	return getData;
})
