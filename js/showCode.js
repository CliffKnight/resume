/**
 * @Author   WuYuRui
 * @DateTime 2017-04-20
 * @license  [license]
 * @version  [version]
 * @param    {[string]}   name [组件的名称]
 * @param    {[object]}   cfg  [组件的配置]
 */
var showCode = function(name, cfg) {
    var showCodeCom = new H5ComponentBase(name, cfg);
    var $title = $('<h2>SHOW MY CODE</h2>');
    var $leftSide = $('<ul class="side_left"><li><p class="title">微型调查问卷平台</p><p>使用JQ实现编辑表单、生成表单等DOM操作</p><p>用localstorage实现跨页面访问数据</p><p>面向对象的开发方式</p><p>对象根据接口传入的参数动态生成DOM结构</p><p><a href="http://1.wuyurui.applinzi.com/baiduQ/index.html">查看效果</a><a href="https://github.com/mianbier/baiduQ">代码地址</a></p></li><li><p class="title">移动端豆瓣</p><p>使用豆瓣提供的公开api</p><p>用rem+less实现移动端页面布局，可适配绝大多数移动端设备</p><p>跨域获取jsonp数据</p><p>面向对象的开发方式</p><p><a href="http://1.wuyurui.applinzi.com/doubanMobile/index.html">查看效果</a><a href="https://github.com/mianbier/doubanMobile">代码地址</a></p></li></ul>');
    var $rightSide =$('<ul class="side_right"><li><p class="title">个人简历</p><p>jquery+fullpage插件实现</p><p>组件化的开发方式</p><p>jquery+fullpage插件实现页面切换效果</p><p>利用自定义事件，对于项目中事件触发顺序进行管理</p><p><a href="http://1.wuyurui.applinzi.com/resume/myResume.html">查看效果</a><a href="https://github.com/mianbier/resume/">代码地址</a></p></li><li><p class="title">2048游戏</p><p>一个仿2048游戏的例子</p><p>随机方块生成，分数统计</p><p>即时的交互响应</p><p><a href="http://1.wuyurui.applinzi.com/2048/index.html">查看效果</a><a href="https://github.com/mianbier/2048">代码地址</a></p></li></ul>');
    showCodeCom.append($title).append($leftSide).append($rightSide);

    showCodeCom.on('onLoad', function() {
        $title.stop().animate(cfg.animateIn.titleAnimateIn, cfg.animateTime);
        $leftSide.stop().animate( cfg.animateIn.leftSideAnimateIn , cfg.animateTime);
        $rightSide.stop().animate( cfg.animateIn.rightSideAnimateIn , cfg.animateTime);
    });
    showCodeCom.on('onLeave', function() {
        $title.stop().animate( cfg.animateOut.titleAnimateOut, cfg.animateTime);
        $leftSide.stop().animate( cfg.animateOut.leftSideAnimateOut, cfg.animateTime);
        $rightSide.stop().animate( cfg.animateOut.rightSideAnimateOut, cfg.animateTime);
    });

    return showCodeCom;
}
