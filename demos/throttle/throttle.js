var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(e);
    console.log(this);
    container.innerHTML = count++;
    return 'return'
};
// 第一版
function throttle(func, wait) {
    var context, args;
    var previous = 0;

    return function() {
        var now = +new Date();
        context = this;
        args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}
let setUseAtion = throttle(getUserAction,1000);
container.onmousemove = setUseAtion