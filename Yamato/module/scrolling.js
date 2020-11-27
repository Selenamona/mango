define(function(require,exports,module){
	class scrolling{
		constructor(){
			this.data = null;
			this.getData();
		}
		getData(){
			var that = this;
			$.ajax({
				url:"http://localhost/Yamato/data/listdata.php",
				success:function(res){
					that.data = eval(res);
				}
			})
		}
		html(){
			var html = "";
			for (var i = 0; i < this.data.length; i++) {

				html += `<li class="load">
							<a href=""><img src="${this.data[i].src}" alt=""></a>
							<p><a href="">${this.data[i].title}</a></p>	
							<span>${this.data[i].price}</span>
						</li>`;
			}
			$(".guessUlike .gl_c ul").append(html);
			$(".guessUlike .gl_c li").fadeIn()
		}
	}
	module.exports = new scrolling();
})