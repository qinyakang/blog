var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(e);
    console.log(this);
    container.innerHTML = count++;
    return 'return'
};
// 第二版
function throttle(func, wait) {
    var timeout;
    return function() {
        context = this;
        args = arguments;
        if (!timeout) {
            timeout = setTimeout(function(){
                timeout = null;
                func.apply(context, args)
            }, wait)
        }

    }
}
let setUseAtion = throttle(getUserAction,1000);
container.onmousemove = setUseAtion