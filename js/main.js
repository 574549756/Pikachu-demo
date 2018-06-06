!function () {
    var duration = 50
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function runCode() {
            n += 1
            container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(runCode, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)    // button
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
    let code = `
/*我需要一点代码高亮*/
#code{
    background: rgb(30,30,30);
    padding: 16px;
    font-family: Arial, Helvetica, sans-serif;
}
.token.selector{
    color: #690;
}
.token.property{
    color: #906;
}
.token.function{
    color: #DD4A68;
}
#code{
    color: #727298;
}
/*
* 首先，需要准备皮卡丘的皮
*/
.preview{
    height: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fee433;
}
.wrapper{
  width: 100%;
    height: 165px;
    position: relative;
}
/*
* 接下来，画皮卡丘的鼻子
*/
.nose{
    width: 0px;
    height: 0px;
    border-style:solid;
    border-width: 10px 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%)
}
/*
* 然后画两只眼睛
*/
.eye{
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
}
/*
* 眼睛里的高光
*/
.eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000000;
}
/*
* 左眼在左（这不是废话吗）
*/
.eye.left{
    right: 50%;
    transform: translateX(-183%)
}
/*
* 右眼在右（同上）
*/
.eye.right{
    left: 50%;
    transform: translateX(183%)
}
/*
* 传说中的腮红，嗯，就是腮红。
* 不然能是高原红吗
*/
.face{
    width: 68px;
    height: 68px;
    background: #fc0d1c;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
/*
* 把腮红涂在正确的位置
*/
.face.left{
    right: 50%;
    transform: translateX(-170%);
}
.face.right{
    left: 50%;
    transform: translateX(170%);
}
/*
* 上嘴唇
*/
.upperLip{
    height: 25px;
    width: 80px;
    border: 3px solid black;
    position: absolute;
    top: 50px;
    background: #fde348;
}
.upperLip.left{
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
.upperLip.right{
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
/*
* 下嘴唇
*/
.lowerLipwrapper{
    bottom: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%,30px);
    border: 1px;
    height: 136px;
    overflow: hidden;
    width: 320px;
}
.lowerLip{
    width: 320px;
    height: 4000px;
    background: #990513;
    border-radius: 300px/3000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
/*
* 小舌头
*/
.lowerLip::after{
    content:'';
    position: absolute;
    bottom: 0;
    width: 120px;
    height: 140px;
    border-radius: 240px/190px;
    background: #FC4A62;
    border: 1px solid red;
    position: absolute;
    left: 50%;
    transform: translate(-50%,30px);
}
/*
* 好了，这只皮卡丘送给你
*/`
    writeCode('', code)
}.call()

