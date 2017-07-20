/**
 * Created by yuanss on 2017/7/20.
 */
~(function (devW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = 100 / devW * winW + 'px';
})(750);
