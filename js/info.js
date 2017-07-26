/**
 * Created by yuanss on 2017/7/21.
 */
;(function () {
  window.onload=function () {
      var oI=document.getElementsByTagName('i'),
          oM=document.getElementsByTagName('main');
      // 跳转页面
      $(oM).on('click',function () {
          window.location.href='Details.html'
      });
      //控制分类，显示分类对应的列表信息
      $.each($(oI),function (index,item) {
          $(this).on('click',function () {
              $.each($('main'),function (indexM,itemM) {
                  if(index==0){
                      $('#m1').css('display','block').siblings().css('display','none');
                      $('#oa').css('display','block').siblings().css('display','none');
                  }else if(index==1){
                      $('#m2').css('display','block').siblings().css('display','none');
                      $('#ob').css('display','block').siblings().css('display','none');
                  }else if(index==2){
                      $('#m3').css('display','block').siblings().css('display','none');
                      $('#oc').css('display','block').siblings().css('display','none');
                  }else {
                      $('#m4').css('display','block').siblings().css('display','none');
                      $('#od').css('display','block').siblings().css('display','none');
                  }
              });
          })
      })
  }
})();