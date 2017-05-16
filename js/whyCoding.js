/**
 * @Author   WuYuRui
 * @DateTime 2017-04-20
 * @license  [license]
 * @version  [version]
 * @param    {[string]}   name [组件的名称]
 * @param    {[object]}   cfg  [组件的配置]
 */
var whyCoding = function(name, cfg) {
    var whyCodingCom = new H5ComponentBase(name, cfg);
    var $title=$('<h2>为什么CODING？</h2>');
    var $content=$('<div class="content"><p><strong>热爱</strong></p><p>爱<strong>代码</strong>，也爱<strong></strong>geek</p><p>更爱<strong>钻研交流共享</strong></p><p>没有<strong>最好</strong>的语言</p><p>只有<strong>适合的</strong>解决思路</p><p>我在<strong>向前</strong></p></div>')
    whyCodingCom.append($title);
    whyCodingCom.append($content);

    whyCodingCom.on('onLoad', function() {
        $title.stop().animate(cfg.animateIn.titleAnimateIn, cfg.animateTime);
        $content.stop().animate( cfg.animateIn.contentAnimateIn , cfg.animateTime);
    });
    whyCodingCom.on('onLeave', function() {
        $title.stop().animate( cfg.animateOut.titleAnimateOut, cfg.animateTime);
        $content.stop().animate( cfg.animateOut.contentAnimateOut, cfg.animateTime);
    });

    return whyCodingCom;
}
