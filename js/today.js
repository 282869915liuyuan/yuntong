/**
 * Created by yuanss on 2017/7/19.
 */
// 今日安排
;(function () {
    var navbar=document.getElementsByTagName('nav')[0],
        oP=navbar.getElementsByTagName('p');
    $(oP).each(function (index,item) {
       $(this).on('click',function () {
           if(index===0){
               $('#oa').css('display','block').siblings().css('display','none');
               $('#one').css('display','block').siblings().css('display','none');
           }else {
               $('#ob').css('display','block').siblings().css('display','none');
               $('#two').css('display','block').siblings().css('display','none');
           }
       })
    });
    var data = null;
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
    // if(data && data.length){
    //     var str = '';
    //     $.each(data,function (index,item){ // item : data[i]
    //         str+='<div class="content">';
    //         str+='<p class="first">';
    //         str+='<span>'+'·'+'</span>'
    //         str += '<span>'+item.time+'</span>';
    //         str+=',';
    //         str+='<span>'+item.field+'</span>';
    //         str+='</p>';
    //         str+='</div>';
    //         str+='<p class="b"></p>'
    //     });
    //     // $('.first').each(function (index,item) {
    //     //     $(index).html(strTime)
    //     // })
    //     $('#one').html(str);
    //
    // }
})();
