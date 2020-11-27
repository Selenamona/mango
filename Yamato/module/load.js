define(function(require,exports,module){
	var scrolling = require("../module/scrolling");
	$(".guessUlike .more").on("click",function(){
		scrolling.html();
	})
})