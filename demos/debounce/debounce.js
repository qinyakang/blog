var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(e);
    console.log(this);
    container.innerHTML = count++;
    return 'return'
};
//第一版
/* function debiunce(fn,wait=1000){
    let timeout
    return function(){
        clearTimeout(timeout)
        timeout=setTimeout(fn,wait)
    }
} */
//第二版
/* function debiunce(fn,wait=1000){
    let timeout
    return function(){
        let context=this
        clearTimeout(timeout)
        timeout=setTimeout(function(){
            fn.apply(context)
        },wait)
    }
} */
// 第三版
/* function debiunce(fn,wait=1000){
    let timeout
    return function(){
        let context=this
        let arge=arguments
        clearTimeout(timeout)
        timeout=setTimeout(function(){
            fn.apply(context,arge)
        },wait)
    }
} */
//第四版
/* function debiunce(fn,wait=1000,immediate=true){
    let timeout
    return function(){
        let context=this
        let arge=arguments
        timeout&&clearTimeout(timeout)
        if(immediate){
            !timeout&&fn.apply(context,arge)
            timeout=setTimeout(function(){
                timeout=null
            },wait)
            
        }else{
            timeout = setTimeout(function () {
                fn.apply(context, arge)
            }, wait)
        }
        
    }
} */
//第五版
/* function debiunce(fn,wait=1000,immediate=true){
    let timeout,result
    return function(){
        let context=this
        let arge=arguments
        timeout&&clearTimeout(timeout)
        if(immediate){
            !timeout&&(resule=fn.apply(context,arge))
            timeout=setTimeout(function(){
                timeout=null
            },wait)
            
        }else{
            timeout = setTimeout(function () {
                fn.apply(context, arge)
            }, wait)
        }
        return result
    }
} */
//第六版
function debiunce(fn,wait=1000,immediate=true){
    let timeout,result
    const debiunced= function(){
        let context=this
        let arge=arguments
        timeout&&clearTimeout(timeout)
        if(immediate){
            !timeout&&(resule=fn.apply(context,arge))
            timeout=setTimeout(function(){
                timeout=null
            },wait)
            
        }else{
            timeout = setTimeout(function () {
                fn.apply(context, arge)
            }, wait)
        }
        return result
    }
    debiunced.cancel=function(){
        clearTimeout(timeout)
        timeout=null
    }
    return debiunced
}

// container.onmousemove = getUserAction;
let setUseAtion = debiunce(getUserAction,10000,true);
container.onmousemove = setUseAtion
let btn=document.querySelector('#btn')
btn,addEventListener('click',function(){
    setUseAtion.cancel()
})