/* 内容管理对象 */
var H5 = function() {
    this.id = ('h5_' + Math.random()).replace('.', '_');
    this.el = $('<div class="h5" id="' + this.id + '">');
    this.page = [];
    $('body').append(this.el);

    this.addPage = function(name, text) {
        var page = $('<div class="h5_page section">');

        if (name != undefined) {
            page.addClass('h5_page_' + name);
        }
        if (text != undefined) {
            page.text(text);
        }
        this.el.append(page);
        this.page.push(page);
        return this;
    };
    this.addComponent = function(name, cfg) {
        var cfg = cfg || {};
        // 默认的component类型为base
        cfg = $.extend({
            type: 'page1'
        }, cfg);
        var component;
        var pageNow = this.page.slice(-1)[0];
        switch (cfg.type) {
            case 'welcome':
                component = new welcome(name, cfg);
                break;

            case 'informations':
                component = new informations(name, cfg);
                break;

            case 'showCode':
                component = new showCode(name, cfg);
                break;
            case 'whyCoding':
                component = new whyCoding(name, cfg);
                break;
            default:
        }
        pageNow.append(component);
        return this;
    };

    this.loader = function() {
        this.el.fullpage({
            'sectionsColor': ['#376fb7', '#4f92b1', '#258779', '#a6cfe2'],
            onLeave: function(index, nextIndex, direction) {
                $(this).find('.h5_component').trigger('onLeave');
            },
            afterLoad: function(anchorLink, index) {
                $(this).find('.h5_component').trigger('onLoad');
            }
        });
        this.page[0].find('.h5_component').trigger('onLoad');
    };

    return this;
}
