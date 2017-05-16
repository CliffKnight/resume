/**
 * @Author   WuYuRui
 * @DateTime 2017-04-20
 * @license  [license]
 * @version  [version]
 * @param    {[string]}   name [组件的名称]
 * @param    {[object]}   cfg  [组件的配置]
 */
var informations = function(name, cfg) {
    var informationsCom = new H5ComponentBase(name, cfg);
    var $title = $('<h2>个人信息</h2>');
    var $leftSide = $('<div class="left_side"><ul><li><span>姓名</span><span class="border"></span><span class="content">武宇瑞</span></li><li><span>学校</span><span class="border"></span><span class="content">电子科技大学</span></li><li><span>电话</span><span class="border"></span><span class="content">18500842207</span></li><li><span>邮箱</span><span class="border"></span><span class="content">mianbier@163.com</span></li><li><span>GitHub</span><span class="border"></span><a class="content" href="https://github.com/mianbier">点击进入</a></li></ul></div>')
    var $rightSide = $('<div class="right_side"><ul><li><strong>HTML&CSSS</strong><p>熟练进行切图，html+css完成遵循W3C要求的前端页面</p><p>熟练进行移动端、响应式开发</p><p>熟练使用html5，css3完成各种特效</p></li><li><strong>Javascript</strong><p>熟练使用原生javascript进行面向对象的前端开发</p><p>熟练使用jquery配合requireJS进行前端组件化开发</p></li><li><strong>框架使用</strong><p>熟练使用vue.js框架以及vue-router、vue-axios、vux进行移动端项目开发</p></li><li><strong>项目开发</strong><p>熟练使用Webpack进行前端工程化开发</p><p>熟练使用php mock数据，可以独自完成表单操作，数据获取</p><p>熟练使用第三方SDK</p></li></ul></div>');
    informationsCom.append($title).append($leftSide).append($rightSide);

    informationsCom.on('onLoad', function() {
        $title.stop().animate(cfg.animateIn.titleAnimateIn, cfg.animateTime);
        $leftSide.stop().animate( cfg.animateIn.leftSideAnimateIn , cfg.animateTime);
        $rightSide.stop().animate( cfg.animateIn.rightSideAnimateIn , cfg.animateTime);
    });
    informationsCom.on('onLeave', function() {
        $title.stop().animate( cfg.animateOut.titleAnimateOut, cfg.animateTime);
        $leftSide.stop().animate( cfg.animateOut.leftSideAnimateOut, cfg.animateTime);
        $rightSide.stop().animate( cfg.animateOut.rightSideAnimateOut, cfg.animateTime);
    });

    return informationsCom;
}
