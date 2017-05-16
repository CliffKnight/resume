/**
 * @Author   WuYuRui
 * @DateTime 2017-04-20
 * @license  [license]
 * @version  [version]
 * @param    {[string]}   name [组件的名称]
 * @param    {[object]}   cfg  [组件的配置]
 */
var H5ComponentBase = function(name, cfg) {
    var cfg = cfg || {};
    var id = ('h5_c_' + Math.random()).replace('.', '_');
    var cls = 'h5_component_' + cfg.type;

    var component = $('<div class="h5_component ' + cls + ' h5_component_name_' + name + '" id="' + id + '">');

    cfg.text && component.text(cfg.text);
    cfg.width && component.width(cfg.width);
    cfg.height && component.height(cfg.height);

    cfg.css && component.css(cfg.css);
    cfg.bg && component.css('backgroundImage', 'url(' + cfg.bg + ')');

    if (cfg.center == true) {
        component.css({
            marginLeft: '-50%',
            left: '50%'
        });
    };

    component.on('onLoad', function() {
        component.addClass(cls + '_load').removeClass(cls + '_leave');
    });
    component.on('onLeave', function() {
        component.addClass(cls + '_leave').removeClass(cls + '_load');
    });
    return component;
}
