/**
 * Created by yuanss on 2017/7/19.
 */
;(function () {
    var ipt = document.getElementById('ipt');
    var dpt = document.getElementById('dpt');
    var oa = document.getElementById('oa');
    var ob = document.getElementById('ob');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    ipt.onclick = function () {
        oa.style.display = one.style.display = 'block';
        ob.style.display = two.style.display = 'none';
    };
    dpt.onclick = function () {
        ob.style.display = two.style.display = 'block';
        oa.style.display = one.style.display = 'none';
    };
    $.ajax({
        url:'172.18.180.58/bgzs',

    })
})();