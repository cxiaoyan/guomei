$(document).ready(function(){
	// top下拉
	$(".same-nav").hover(function(){
		$(this).find(".hidden-xiala").css("display","block")
		$(this).css({background:"#fff",borderColor:"#e6e6e6"})
		$(this).find(".zhe-xian").css("display","block")
		$(this).find("b").css("background","url(img/ui.png) -55px -433px")
	},function(){
		$(this).find(".hidden-xiala").css("display","none")
		$(this).css({background:"",borderColor:"#f8f8f8"})
		$(this).find(".zhe-xian").css("display","none")
		$(this).find("b").css("background","url(img/ui.png)")
		$(this).find("b").css("background","")
	})
	
	// top左隐藏的轮播
	var n=0;
	var nt=0;
	w=$(".li3-lis").width();
	$(".li3-left-span").on("click",function(){
		nt=n-1;
		if(nt<0){
			nt=2;
		}
		$(".li3-lis").css("left",-w);
		$(".li3-lis").eq(n).animate({left:w});
		$(".li3-lis").eq(nt).animate({left:0});
		n=nt;
	})
	$(".li3-right-span").on("click",function(){
		nt=n+1;
		if(nt==3){
			nt=0;
		}
		$(".li3-lis").eq(nt).css("left",w);
		$(".li3-lis").eq(n).animate({left:-w});
		$(".li3-lis").eq(nt).animate({left:0});
		n=nt;
	})
	
	$("#logo-right").hover(function(){
		$(this).find(".shopping").css("display","block")
		$(this).css("box-shadow","0 0 8px #E6E6E6")
	},function(){
		$(this).find(".shopping").css("display","none")
		$(this).css("box-shadow","")
	})
	
//	nav广告
	var now=0;
	var next=0;
	h=$(".nav-ad").height();
	var t=setInterval(move,2000)
	function move(){
		next=now+1;
		if(next==4){
			next=0;
		}
		$(".nav-ad").eq(next).css("top",h);
		$(".nav-ad").eq(now).animate({top:-h});
		$(".nav-ad").eq(next).animate({top:0});
		now=next;
	}
	$(".button-li").hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(move,2000)
	})
	$(".bottom-button").on("click",function(){
		next=now-1;
		if(next<0){
			next=3;
		}
		$(".nav-ad").eq(next).css("top",-h);
		$(".nav-ad").eq(now).animate({top:h});
		$(".nav-ad").eq(next).animate({top:0});
		now=next;
	})
	$(".top-button").on("click",function(){
		move();
	})
	
	// 轮播
	var a=0;
	var b=0;
	var time=setInterval(change,2000)
	function change(){
		b=a+1;
		if(b==$(".banner-img").length){
			b=0;
		}
		$(".banner-img").eq(a).fadeTo(500,0);
		$(".banner-img").eq(b).fadeTo(500,1);
		var index=$(".banner-img").eq(b).parent(".banner-big-box").index();
		$(".slide-tab-lis").eq(index).find(".slide-word").css("display","none")
		$(".slide-tab-lis").eq(index).siblings().find(".slide-word").css("display","block")
		$(".slide-tab-lis").eq(index).find(".item").css("display","block")
		$(".slide-tab-lis").eq(index).siblings().find(".item").css("display","none")
		if(b%2==0){
			$(".slide-tab-lis").eq(index).find(".item").find("i").first().addClass("cur").siblings().removeClass("cur")
		}else if(b%2==1){
			$(".slide-tab-lis").eq(index).find(".item").find("i").last().addClass("cur").siblings().removeClass("cur")
		}
		a=b;
	}
	
	$("#banner").hover(function(){
		clearInterval(time)
	},function(){
		time=setInterval(change,2000)
	})
	
	$(".ban b").on("mouseover",function(){
		var num=$(this).index();
		$(this).closest(".slide-tab-lis").find(".slide-word").css("display","none")
		$(this).closest(".slide-tab-lis").siblings().find(".slide-word").css("display","block")
		$(this).closest(".slide-tab-lis").find(".item").css("display","block")
		$(this).closest(".slide-tab-lis").siblings().find(".item").css("display","none")
		$(this).parent(".ban").prev(".item").find("i").eq(num).addClass("cur").siblings().removeClass("cur")
		var numparent=$(this).closest(".slide-tab-lis").index();
		$(this).closest("#banner").find(".banner-big-box").eq(numparent).find(".banner-img").eq(num).fadeTo(500,1).siblings().fadeTo(500,0)
		$(this).closest("#banner").find(".banner-big-box").eq(numparent).siblings().find(".banner-img").fadeTo(500,0)
		a=numparent*2+num;
	})
	
	$(".banner-left-button").on("click",function(){
		change();
	})
	$(".banner-right-button").on("click",function(){
		change();
	})
	$(".banner-left-button").hover(function(){
		$(this).css("opacity",0.5)
	},function(){
		$(this).css("opacity",0.2)
	})
	$(".banner-right-button").hover(function(){
		$(this).css("opacity",0.5)
	},function(){
		$(this).css("opacity",0.2)
	})


	// floor
	function floormove(type){
		var parent=type
		var s=0;
		var m=0;
		var flag=true;
		var t=setInterval(admove,2000)
		function admove(){
			if(!flag){
				return;
			}
			flag=false;
			m=s+1;
			if(m==3){
				m=0;
			}
			$(parent).find("a").eq(s).animate({opacity:0},400);
			$(parent).find("a").eq(m).animate({opacity:1},400,function(){
				flag=true;
			});
			// $(parent).find("a").eq(s).fadeTo(300,0);
			// $(parent).find("a").eq(m).fadeTo(300,1);
			$(parent).find(".floor1-button-lis").eq(s).removeClass("floor1-button-lis-first")
			$(parent).find(".floor1-button-lis").eq(m).addClass("floor1-button-lis-first")
			s=m
		}
	
		$(parent).hover(function(){
			$(this).find(".left-anniu").css("display","block");
			$(this).find(".right-anniu").css("display","block");
			clearInterval(t)
		},function(){
			$(this).find(".left-anniu").css("display","none");
			$(this).find(".right-anniu").css("display","none");
			t=setInterval(admove,2000);
		})


		$(parent).find(".floor1-button-lis").on("mouseover",function(){
			if(!flag){
				return;
			}
			flag=false;
			var index=$(this).index();
			m=s+1;
			if(m==3){
				m=0;
			}
			$(parent).find("a").eq(s).animate({opacity:0},400);
			$(parent).find("a").eq(index).animate({opacity:1},400,function(){
				flag=true;
			});
			// $(parent).find("a").eq(s).fadeTo(300,0);
			// $(parent).find("a").eq(index).fadeTo(300,1);
			$(parent).find(".floor1-button-lis").eq(s).removeClass("floor1-button-lis-first")
			$(parent).find(".floor1-button-lis").eq(index).addClass("floor1-button-lis-first")
			s=index
		})


		$(parent).find(".left-anniu").on("click",function(){
			admove()
		})
		$(parent).find(".right-anniu").on("click",function(){
			admove()
		})

	}

	var obj=$(".floor1-normal-lis-main").get();
	for (var i = 0; i < obj.length; i++) {
		floormove(obj[i])
	};



	// floor选项卡
	function xxka(type){
		var parent=type;
		$(parent).find(".floor1-rg-nav").on("mouseover",function(){
			var index=$(this).index();
			$(this).addClass("floor1-rg-nav-first").siblings().removeClass("floor1-rg-nav-first")
			$(parent).closest(".floor1").find(".floor1-normal-box").eq(index).addClass("floor1-normal-box-first").siblings().removeClass("floor1-normal-box-first")
		})
	}
	var pt=$(".floor1-title-rg").get();
	for (var i = 0; i < pt.length; i++) {
		xxka(pt[i])
	};



	// 楼层跳转

	var cheight=document.documentElement.clientHeight;
	var nheight;
	var now;
	for (var i = 0; i < $(".floor1").length; i++) {
		var juli=$(".floor1").eq(i).position();
		$(".floor1").eq(i).prop("h",juli.top);
	}
	$(window).on("scroll",function(){
		var top=$(window).scrollTop()
		if(top>=$(".floor1").first().prop("h")-300){
			$(".floor-nav-tiao").css("display","block")
			
		}
		if(top<$(".floor1").first().prop("h")-300){
			$(".floor-nav-tiao").css("display","none")
		}
		for (var i = 0; i < $(".floor1").length; i++) {
			if(top>=$(".floor1").eq(i).prop("h")-200){
				$(".floor-nav-lis").eq(i).find("a").css("color","#c00").end().siblings().find("a").css("color","")
				$(".floor-nav-lis").eq(i).find("span").css("color","#c00").end().siblings().find("span").css("color","#666")
				$(".floor-nav-lis").eq(i).find("b").css("display","block").end().siblings().find("b").css("display","none")
			}
		}
	})




		$(".floor-nav-lis").on("click",function(){
			var index=$(this).index();
			var hh=$(".floor1").eq(index).prop("h")
			var top=$(window).scrollTop()
			var src={aa:top}
			$(src).animate({aa:hh},{
				duration:300,
				step:function(){
					$(window).scrollTop(src.aa)
				}
			})
			$(this).find("a").css("color","#c00").end().siblings().find("a").css("color","")
			$(this).find("span").css("color","#c00").end().siblings().find("span").css("color","#666")
			$(this).find("b").css("display","block").end().siblings().find("b").css("display","none")
			now=index;
		})


		$(".floor-nav-lis").hover(function(){
			$(this).find("a").css("color","#c00")
			$(this).find("span").css("color","#c00")
			$(this).find("b").css("display","block")
		},function(){
			if($(this).index()==now){
				return;
			}else{
				$(this).find("a").css("color","")
				$(this).find("span").css("color","#666")
				$(this).find("b").css("display","none")
			}
			
		})
	


	$.backTop($(".back-top"),1000)
	$.backBottom($(".back-bottom"),500)
	


	$(".lis-nav").hover(function(){
		$(this).find(".hidden-img").css("display","block")
	},function(){
		$(this).find(".hidden-img").css("display","none")
	})
	
})
