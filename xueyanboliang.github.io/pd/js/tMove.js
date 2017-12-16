/**
 * Created by Administrator on 2017-08-21.
 */
// JavaScript Document

function tMove(obj,iTarget){
    var timer = null;
    var iSpeed = 0;

    clearInterval(timer);
    timer = setInterval(function(){

        iSpeed += 3;

        var T = obj.offsetTop + iSpeed;

        if(T>iTarget){
            T =iTarget;
            iSpeed *= -1;
            iSpeed *= 0.65;
        }

        obj.style.top = T + 'px';

    },30);
}






























