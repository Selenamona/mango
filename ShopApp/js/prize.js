function getSucc(){
	console.log(1)
	$.ajax("http://datainfo.duapp.com/lottery/getsuerfr.php").then(function(res){
		var data = JSON.parse(res.split("(")[1].split(")")[0])
		console.log(data)
		var str = ''
		for (var i=0; i < data.length; i++) {
			str += `<li>
						<span>一等奖</span>
						<span>xx</span>
						<span>12月25日</span>
						<span>13:22</span>
					</li>`
		}
		
		$(".res").html(str)
	})
}
getSucc()
