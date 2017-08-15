
    //左侧菜单
    //hover
    //***************************************判断某个元素是否包含有另外一个元素*************************
 $(function(){
    var oTab=document.getElementById('tab')
    var oLis=oTab.getElementsByTagName('li')
    var oSidebar=document.getElementById('tab_sidebar')
    var oDls=oSidebar.getElementsByTagName('dl')
    oSidebar.onmouseover=function(){
        oSidebar.style.display='block'
    }
    oSidebar.onmouseout=function(){
        oSidebar.style.display='none'
    }
    for(var i=0;i<oLis.length;i++){
         oLis[i].index=i
        oLis[i].onmouseover=function(){

            oSidebar.style.display='block'
            for(var i=0;i<oLis.length;i++){
                oLis[i].className=''
                oDls[i].style.display='none'
            }
            this.className='bianse'
            oDls[this.index].style.display='block'
        }
        oLis[i].onmouseout=function(){
            oSidebar.style.display='none'
        }
    }
    })
 //go-top
 $(function(){
    var oGtop=document.getElementById('go_top');
    var oGzj=document.getElementById('go_zj');
    window.onscroll=function(){
        var oScroll=document.documentElement.scrollTop||document.body.scrollTop;//处理兼容为题，获取当前的滚动高度
        if(oScroll>=700){
            oGzj.style.height='189px';
        }
        else{
            oGzj.style.height='150px';
        }
    }
    oGtop.onclick=function(){
        var time=null;
        //处理兼容为题，获取当前的滚动高度
        function move(){
            var oScroll=document.documentElement.scrollTop||document.body.scrollTop;
            var oMs=Math.floor((-oScroll)/2);
            document.documentElement.scrollTop=document.body.scrollTop=oScroll+oMs;
            if(oScroll==0){
                clearInterval(time);
            }
        }
        time=setInterval(move,30);
    }
 }
    )
 //入驻须知
 $(function(){
    var oRzxy=document.getElementById('click_rzxy');
    var oTgb=document.getElementById('title_gb');
    var oBgb=document.getElementById('button_gb');
    var oLf=document.getElementById('logo_firm');
    var oRbox=document.getElementById('rzxz');
    oRzxy.onclick=function(){
        oRbox.style.display='block';
    }
    oBgb.onclick=function(){
        oRbox.style.display='none';
    }
    oTgb.onclick=function(){
        oRbox.style.display='none';
    }

 })
 //form下拉
 $(function(){
    var oUlxiala=$('.xiala_ulxx')
    $(".form_xiala").click(function(){
   oUlxiala.toggle();


    })
    $(".click_xiala").click(function(){
        $(".xiala_ulxx").show();
    })
    $(".xiala_ulxx li").click(function(){
        $(".xiala_ulxx").hide();
    })

    $(".xiala_ulxx li").click(function(){
           var lis= $(this).html();
            $(".click_xiala").val(lis)

    })
 })
 //form_tab
$(function(){
    $(".radio_form label").click(function(){
        $(".tab_form_box").eq($(this).index()).show().siblings().hide()
    })
})

