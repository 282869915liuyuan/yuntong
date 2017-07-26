/**
 * Created by yuanss on 2017/7/20.
 */
// 开票
;(function () {
var data=null;
    $.ajax({
        type : 'get',
        url  : 'data.txt',
        async : false,
        cache : false,
        dataType : 'json',
        success : function (res){
            data = res
        }
    });
    // 绑定数据
    if(data && data.length){
        var str = '';
        $.each(data,function (index,item){ // item : data[i]
            str+='<ul>';
            str+='<li class="name">单位全称</li>';
            str+='<li class="details">'+item.capital+'</li>';
            str += '</ul>';
            str+='<ul>';
            str+='<li class="name">纳税人识别号</li>';
            str+='<li class="details">'+item.develop+'</li>';
            str += '</ul>';
            str+='<ul>';
            str+='<li class="name">地址</li>';
            str+='<li class="details address">'+item.country+'</li>';
            str+='<li class="details address1">'+item.countryy+'</li>';
            str+='<li class="details address2">'+item.country+'</li>';
            str += '</ul>';
            str+='<ul>';
            str+='<li class="name">电话</li>';
            str+='<li class="details">'+item.population+'</li>';
            str += '</ul>';
            str+='<ul>';
            str+='<li class="name">开户行</li>';
            str+='<li class="details">'+item.k+'</li>';
            str += '</ul>';
            str+='<ul>';
            str+='<li class="name">账号</li>';
            str+='<li class="details">'+item.z+'</li>';
            str += '</ul>';
            str+='<ul>';
            str+='<li class="name">联系人</li>';
            str+='<li class="details">'+item.l+'</li>';
            str += '</ul>';
            str+='<ul>';
            str+='<li class="name">联系人电话</li>';
            str+='<li class="details">'+item.h+'</li>';
            str += '</ul>';
        });
        $('#o1').html(str);
        $('#t2').html(str);
        $('#t3').html(str);
        $('.address').addClass('c')
        $('.address1').addClass('c1')
        $('.address2').addClass('c2')
}
     $.each($('.oS'),function (index,item) {
          $(item).on('click',function () {
              if(index===0){
                  $('#oa').css('display','block').siblings().css('display','none');
                  $('#o1').css('display','block').siblings().css('display','none');
              }else if(index===1){
                  $('#ob').css('display','block').siblings().css('display','none');
                  $('#t2').css('display','block').siblings().css('display','none');
              }else {
                  $('#oc').css('display','block').siblings().css('display','none');
                  $('#t3').css('display','block').siblings().css('display','none');
              }
          })
     });
    //左右滑动（1）
    var startPosition, endPosition, deltaX, deltaY, moveLength;
    $(".c").bind('touchstart', function(e){
        var touch = e.touches[0];
        startPosition = {
            x: touch.pageX,
            y: touch.pageY
        }
    }) .bind('touchmove', function(e){
        var touch = e.touches[0];
        endPosition = {
            x: touch.pageX,
            y: touch.pageY
        };

        deltaX = endPosition.x - startPosition.x;
        deltaY = endPosition.y - startPosition.y;
        moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
    }).bind('touchend', function(e){
        if(deltaX < 0) { // 向左划动
            $('.c1').css('display','block');
            $('.c').css('display','none');
            $('.c2').css('display','none');
        } else if (deltaX > 0) { // 向右划动

            $('.c1').css('display','none');
            $('.c').css('display','block');
            $('.c2').css('display','none');

        }
    });
    $(".c1").bind('touchstart', function(e){
        var touch = e.touches[0];
        startPosition = {
            x: touch.pageX,
            y: touch.pageY
        }
    }) .bind('touchmove', function(e){
        var touch = e.touches[0];
        endPosition = {
            x: touch.pageX,
            y: touch.pageY
        };

        deltaX = endPosition.x - startPosition.x;
        deltaY = endPosition.y - startPosition.y;
        moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
    }).bind('touchend', function(e){
        if(deltaX < 0) { // 向左划动
            $('.c1').css('display','none');
            $('.c').css('display','none');
            $('.c2').css('display','block');
        } else if (deltaX > 0) { // 向右划动
            $('.c1').css('display','none');
            $('.c').css('display','block');
            $('.c2').css('display','none');

        }
    });
    $(".c2").bind('touchstart', function(e){
        var touch = e.touches[0];
        startPosition = {
            x: touch.pageX,
            y: touch.pageY
        }
    }) .bind('touchmove', function(e){
        var touch = e.touches[0];
        endPosition = {
            x: touch.pageX,
            y: touch.pageY
        };

        deltaX = endPosition.x - startPosition.x;
        deltaY = endPosition.y - startPosition.y;
        moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
    }).bind('touchend', function(e){
        if(deltaX < 0) { // 向左划动

        } else if (deltaX > 0) { // 向右划动
            $('.c1').css('display','block');
            $('.c').css('display','none');
            $('.c2').css('display','none');

        }
    });
    // 左右滑动（2）
    // $(".b").bind('touchstart', function(e){
    //     var touch = e.touches[0];
    //     startPosition = {
    //         x: touch.pageX,
    //         y: touch.pageY
    //     }
    // }) .bind('touchmove', function(e){
    //     var touch = e.touches[0];
    //     endPosition = {
    //         x: touch.pageX,
    //         y: touch.pageY
    //     };
    //
    //     deltaX = endPosition.x - startPosition.x;
    //     deltaY = endPosition.y - startPosition.y;
    //     moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
    // }).bind('touchend', function(e){
    //     if(deltaX < 0) { // 向左划动
    //         $('.b2').css('display','none');
    //         $('.b').css('display','none');
    //         $('.b1').css('display','block');
    //     } else if (deltaX > 0) { // 向右划动
    //         $('.b1').css('display','none');
    //         $('.b').css('display','block');
    //         $('.b2').css('display','none');
    //
    //     }
    // });
    // $(".b1").bind('touchstart', function(e){
    //     var touch = e.touches[0];
    //     startPosition = {
    //         x: touch.pageX,
    //         y: touch.pageY
    //     }
    // }) .bind('touchmove', function(e){
    //     var touch = e.touches[0];
    //     endPosition = {
    //         x: touch.pageX,
    //         y: touch.pageY
    //     };
    //
    //     deltaX = endPosition.x - startPosition.x;
    //     deltaY = endPosition.y - startPosition.y;
    //     moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
    // }).bind('touchend', function(e){
    //     if(deltaX < 0) { // 向左划动
    //         $('.b1').css('display','none');
    //         $('.b').css('display','none');
    //         $('.b2').css('display','block');
    //     } else if (deltaX > 0) { // 向右划动
    //         $('.b1').css('display','none');
    //         $('.b').css('display','block');
    //         $('.b2').css('display','none');
    //
    //     }
    // });
    // $(".b2").bind('touchstart', function(e){
    //     var touch = e.touches[0];
    //     startPosition = {
    //         x: touch.pageX,
    //         y: touch.pageY
    //     }
    // }) .bind('touchmove', function(e){
    //     var touch = e.touches[0];
    //     endPosition = {
    //         x: touch.pageX,
    //         y: touch.pageY
    //     };
    //
    //     deltaX = endPosition.x - startPosition.x;
    //     deltaY = endPosition.y - startPosition.y;
    //     moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
    // }).bind('touchend', function(e){
    //     if(deltaX < 0) { // 向左划动
    //
    //     } else if (deltaX > 0) { // 向右划动
    //         $('.b1').css('display','block');
    //         $('.b').css('display','none');
    //         $('.b2').css('display','none');
    //
    //     }
    // });
    // //左右滑动（3）
    // $(".a").bind('touchstart', function(e){
    //     var touch = e.touches[0];
    //     startPosition = {
    //         x: touch.pageX,
    //         y: touch.pageY
    //     }
    // }) .bind('touchmove', function(e){
    //     var touch = e.touches[0];
    //     endPosition = {
    //         x: touch.pageX,
    //         y: touch.pageY
    //     };
    //
    //     deltaX = endPosition.x - startPosition.x;
    //     deltaY = endPosition.y - startPosition.y;
    //     moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
    // }).bind('touchend', function(e){
    //     if(deltaX < 0) { // 向左划动
    //         $('.a2').css('display','none');
    //         $('.a').css('display','none');
    //         $('.a1').css('display','block');
    //     } else if (deltaX > 0) { // 向右划动
    //         $('.a1').css('display','none');
    //         $('.a').css('display','block');
    //         $('.a2').css('display','none');
    //
    //     }
    // });
    // $(".a1").bind('touchstart', function(e){
    //     var touch = e.touches[0];
    //     startPosition = {
    //         x: touch.pageX,
    //         y: touch.pageY
    //     }
    // }) .bind('touchmove', function(e){
    //     var touch = e.touches[0];
    //     endPosition = {
    //         x: touch.pageX,
    //         y: touch.pageY
    //     };
    //
    //     deltaX = endPosition.x - startPosition.x;
    //     deltaY = endPosition.y - startPosition.y;
    //     moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
    // }).bind('touchend', function(e){
    //     if(deltaX < 0) { // 向左划动
    //         $('.a1').css('display','none');
    //         $('.a').css('display','none');
    //         $('.a2').css('display','block');
    //     } else if (deltaX > 0) { // 向右划动
    //         $('.a1').css('display','none');
    //         $('.a').css('display','block');
    //         $('.a2').css('display','none');
    //
    //     }
    // });
    // $(".a2").bind('touchstart', function(e){
    //     var touch = e.touches[0];
    //     startPosition = {
    //         x: touch.pageX,
    //         y: touch.pageY
    //     }
    // }) .bind('touchmove', function(e){
    //     var touch = e.touches[0];
    //     endPosition = {
    //         x: touch.pageX,
    //         y: touch.pageY
    //     };
    //
    //     deltaX = endPosition.x - startPosition.x;
    //     deltaY = endPosition.y - startPosition.y;
    //     moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));
    // }).bind('touchend', function(e){
    //     if(deltaX < 0) { // 向左划动
    //
    //     } else if (deltaX > 0) { // 向右划动
    //         $('.a1').css('display','block');
    //         $('.a').css('display','none');
    //         $('.a2').css('display','none');
    //
    //     }
    // });
})();