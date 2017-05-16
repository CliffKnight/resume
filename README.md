<h2>内容组织类：H5</h2>
<dl>
	<dt>功能：</dt>
	<dd>组织内容结构</dd>
	<dd>设置切换效果（fullpage.js），当页面切换时，通知页内所有组件。</dd>
	<dt>方法:</dt>
	<dd>添加一个页 ：addPage</dd>
	<dd>添加一个组件 ：addComponent</dd>
	<dd>展现所有页面：loader</dd>
</dl>
<h2>单个页面组件类：H5ComponentBase</h2>
<dl>
	<dt>功能：</dt>
	<dd>输出一个DOM，包裹组件内容，统一各组件样式</dd>
	<dt>监听事件：</dt>
	<dd>当前页载入：onLoad</dd>
	<dd>当前页移除：onLeave</dd>
	<dt>内容类：</dt>
	<dd>welcome，whyCoding，showCode，informations</dd>
	<dd>动态生成DOM结构，插入当前页</dd>
	<dd>当前页载入载出onLoad，onLeave触发内容飞入，飞出动画	</dd>
</dl>	
