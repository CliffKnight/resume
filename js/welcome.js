/**
 * @Author   WuYuRui
 * @DateTime 2017-04-20
 * @license  [license]
 * @version  [version]
 * @param    {[string]}   name [组件的名称]
 * @param    {[object]}   cfg  [组件的配置]
 */
var welcome=function(name,cfg){
	var welcomeCom=new H5ComponentBase(name, cfg);
	var content=$('<h2>欢迎进入我的空间</h2>');

	welcomeCom.append(content);

    welcomeCom.on('onLoad', function() {
       console.log('welcome load');
    });
    welcomeCom.on('onLeave', function() {
       console.log('welcome leave');
    });

	return welcomeCom;
}