$(document).ready(function () {
   var baseStyle = (function(){
	   	return{
	   		baseStructural:function(cover){
                                        var $cover = $(cover);
										$("#background").fullBg();
								        var $screenH = $(window).height();//浏览器目前的可视区域的高度
								        var $screenW = $(window).width();
								        $(".nav-trigger").css('top', $screenH / 2 - 13);
								        var $contW = $screenW-350;
								        var $contH = $screenH;
								        $("#Contenter").css({
								            "width": $contW,
								            "height": $contH
								        });
                                        $cover.css({ 
								        	"width": $contW,
								            "height": $contH
								        });
                                        $(".prev").css("top",$screenH/2-57)
                                        $(".next").css("top",$screenH/2-57)
			}
	    }
   })();

    $(window).load(function () {
       var coverArr = ["#cover-1","#cover-2","#cover-3","#cover-4","#cover-5","#cover-6"];
       baseStyle.baseStructural(coverArr[0]);

    });

    $(window).resize(function () {
        var coverArr = ["#cover-1","#cover-2","#cover-3","#cover-4","#cover-5","#cover-6"];
       baseStyle.baseStructural(coverArr[0]);
    });


    setH(".author", 350);  //定义作者内容块的高度
    //最小高度的方法
    function setH(ele, h) {
        var $ele = $(ele);
        if ($ele.height() > h - 1) {
            return $ele.css('height', h);
        } else {
            return $ele.css('height', "auto");
        }
    }


   //翻页操作
    var  $prev = $(".prev");
    var  $next = $(".next");
    var  $coverBox = $(".cover-box");
    var $liList = $coverBox.find("li");

    $prev.click(function(){
        var $prevNum = $(this).attr("data-mark");
        var prvNum = new Number($prevNum);
        if(prvNum == $liList.length){
            var start = 0;
            $liList.eq(start).show().siblings("li").hide();
            $prev.attr("data-mark",start+1);
            $next.attr("data-mark",start+2);
            return false;
        }else{
            $liList.eq(prvNum).show().siblings("li").hide();
            $(this).attr("data-mark",prvNum+1);
            $next.attr("data-mark",prvNum+2);
        }
    })

    $next.click(function(){
        var $nextNum = $(this).attr("data-mark");
        var nextNum = new Number($nextNum);
       if(nextNum-1 == $liList.length){
           var temp = 0;
           $liList.eq(temp).show().siblings("li").hide();
           $prev.attr("data-mark",temp+1);
           $next.attr("data-mark",temp+2);
           return false;
        }else{
            $liList.eq(nextNum-1).show().siblings("li").hide();
            $(this).attr("data-mark",nextNum+1);
            $prev.attr("data-mark",nextNum-2);
        }

    })














})