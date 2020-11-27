;(function(){
	$.extend({
		getData:function(){
			//搜索输入框
			$(".logo .search input").on("focus",function(){
				$(".logo .search .search_hidde").show();
			});
			$(".logo .search input").on("blur",function(){
				$(".logo .search .search_hidde").hide();
			});
			$(".logo .search a").on("mousedown",function(){
				$(".logo .search input").val($(this).html())
			})
			$(".logo .search span").on("click",function(){
				location.href = "goodsList.html"
			})
			//导航列表分类
			$(".nav .last").on("mouseover",function(){
				$(this).children().css({
					borderColor:"#c33",
					height:47
				});
				$(this).find("span").addClass("active")
				$(".nav .catergory").stop().fadeIn()
			})
			$(".nav .last").on("mouseout",function(){
				var that = $(this);
				$(".nav .catergory").on("mouseover",function(){
					that.children().css({
						borderColor:"#c33",
						height:47
					});
					$(this).find("span").addClass("active")
					$(".nav .catergory").stop().fadeIn()
				})
				$(".nav .catergory").on("mouseout",function(){
					that.children().css({
						borderColor:"#fff",
						height:45
					});
				$(this).find("span").removeClass("active")
					$(".nav .catergory").stop().fadeOut();
				})	
				that.children().css({
					borderColor:"#fff",
					height:45
				});
				$(this).find("span").removeClass("active")
				$(".nav .catergory").stop().fadeOut();
			})
			$(".nav .catergory a").on("click",function(){
				location.href = "goodsList.html"
			})
			//导航列表
			$(".index").on("click",function(){
				location.href = "index.html"
				return false;
			})
			$(".yanghuo").on("click",function(){
				location.href = "index.html"
				return false;
			})
			$(".limited").on("click",function(){
				location.href = "activityPage.html"
				return false;
			})
			$(".nav .last").on("click",function(){
				location.href = "goodsList.html"
				return false;
			})
		}
	})
})(jQuery)