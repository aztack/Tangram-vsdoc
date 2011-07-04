//-------------------------------------------------------
//-* Vsdoc for Tangram 2011-04-27 11-26-07 Generated *-
//-------------------------------------------------------
T = baidu = {};

baidu.number   = baidu.number || {};
baidu.url      = baidu.url || {};
baidu.string   = baidu.string || {};
baidu.object   = baidu.object || {};
baidu.lang     = baidu.lang || {};
baidu.cookie   = baidu.cookie || {};
baidu.json     = baidu.json || {};
baidu.date     = baidu.date || {};
baidu.dom      = baidu.dom || {};
baidu.event    = baidu.event || {};
baidu.fn       = baidu.fn || {};
baidu.ajax     = baidu.ajax || {};
baidu.sio      = baidu.sio || {};
baidu.swf      = baidu.swf || {};
baidu.array    = baidu.array || {};
baidu.page     = baidu.page || {};
baidu.element  = baidu.element || {};
baidu.platform = baidu.platform || {};
baidu.browser  = baidu.browser || {};


baidu.browser.isGecko = true; //isGecko 判断是否为gecko内核
baidu.browser.isStrict = true; //isStrict 判断是否严格标准的渲染模式
baidu.browser.safari = 0; //safari safari版本号
baidu.browser.opera = 0; //opera opera版本号
baidu.browser.chrome = 0; //chrome chrome版本号
baidu.browser.ie = 0; //ie ie版本号
baidu.browser.maxthon = 0; //maxthon maxthon版本号
baidu.browser.isWebkit = true; //isWebkit 判断是否为webkit内核
baidu.browser.firefox = 0; //firefox firefox版本号
baidu.event.keyCode = null; //键盘事件的键值
baidu.ajax.onStatusCode = null; //状态码触发的全局事件，function(XMLHttpRequestxhr),注意：onStatusCode中的StatusCode需用404,320等状态码替换。如on404
baidu.swf.version = null; //浏览器支持的flash插件版本
baidu.swf.version = 0; //version 浏览器支持的flash插件版本
baidu.platform.android = 0; //android 是否为android平台
baidu.platform.ipad = 0; //ipad 是否为ipad平台
baidu.platform.iphone = 0; //iphone 是否为iphone平台
baidu.platform.macintosh = 0; //macintosh 是否为macintosh平台
baidu.platform.windows = 0; //windows 是否为windows平台
baidu.platform.x11 = 0; //x11 是否为x11平台


baidu.number.pad = function(source, length){
	/// <summary>
	/// 对目标数字进行0补齐处理
	/// baidu.number.pad(source, length);
	/// </summary>
	/// <param type="number" name="source">需要处理的数字</param>
	/// <param type="number" name="length">需要输出的长度</param>
	/// <returns type="string">对目标数字进行0补齐处理后的结果</returns>
};baidu.number.comma = function(source, length){
	/// <summary>
	/// 为目标数字添加逗号分隔
	/// baidu.number.comma(source[, length]);
	/// </summary>
	/// <param type="number" name="source">需要处理的数字</param>
	/// <param type="number" name="length">两次逗号之间的数字位数，默认为3位</param>
	/// <returns type="string">添加逗号分隔后的字符串</returns>
};baidu.url.escapeSymbol = function(source){
	/// <summary>
	/// 对字符串进行%&+/#=和空格七个字符进行url转义
	/// baidu.url.escapeSymbol(source);
	/// </summary>
	/// <param type="string" name="source">需要转义的字符串</param>
	/// <returns type="string">转义之后的字符串.</returns>
};baidu.string.escapeReg = function(source){
	/// <summary>
	/// 将目标字符串中可能会影响正则表达式构造的字符串进行转义。
	/// baidu.string.escapeReg(source);
	/// </summary>
	/// <param type="string" name="source">目标字符串</param>
	/// <returns type="string">转义后的字符串</returns>
};baidu.url.getQueryValue = function(url, key){
	/// <summary>
	/// 根据参数名从目标URL中获取参数值
	/// baidu.url.getQueryValue(url, key);
	/// </summary>
	/// <param type="string" name="url">目标URL</param>
	/// <param type="string" name="key">要获取的参数名</param>
	/// <returns type="string|null">获取的参数值，获取不到时返回null</returns>
};baidu.object.each = function(source, iterator){
	/// <summary>
	/// 遍历Object中所有元素，1.1.1增加
	/// baidu.object.each(source, iterator);(v1.1.1)
	/// </summary>
	/// <param type="Object" name="source">需要遍历的Object</param>
	/// <param type="Function" name="iterator">对每个Object元素进行调用的函数，function (item, key)</param>
	/// <returns type="Object">遍历的Object</returns>
};baidu.lang.isArray = function(source){
	/// <summary>
	/// 判断目标参数是否Array对象
	/// baidu.lang.isArray(source);
	/// </summary>
	/// <param type="Any" name="source">目标参数</param>
	/// <returns type="boolean">类型判断结果</returns>
};baidu.url.jsonToQuery = function(json, replacer){
	/// <summary>
	/// 将json对象解析成query字符串
	/// baidu.url.jsonToQuery(json[, replacer]);
	/// </summary>
	/// <param type="Object" name="json">需要解析的json对象</param>
	/// <param type="Function=" name="replacer_opt">对值进行特殊处理的函数，function (value, key)</param>
	/// <returns type="string">解析结果字符串</returns>
};baidu.url.queryToJson = function(url){
	/// <summary>
	/// 解析目标URL中的参数成json对象
	/// baidu.url.queryToJson(url);
	/// </summary>
	/// <param type="string" name="url">目标URL</param>
	/// <returns type="Object">解析结果对象</returns>
};baidu.cookie.setRaw = function(key, value, options){
	/// <summary>
	/// 设置cookie的值，不对值进行编码
	/// baidu.cookie.setRaw(key, value[, options]);
	/// </summary>
	/// <summary>options: 
	/// <para>string path cookie路径</para>  
	/// <para>Date|number expires cookie过期时间,如果类型是数字的话, 单位是毫秒</para>  
	/// <para>string domain cookie域名</para>  
	/// <para>string secure cookie是否安全传输</para>  
	/// </summary>
	/// <param type="string" name="key">需要设置Cookie的键名</param>
	/// <param type="string" name="value">需要设置Cookie的值</param>
	/// <param type="Object" name="options">设置Cookie的其他可选参数</param>

};baidu.cookie.getRaw = function(key){
	/// <summary>
	/// 获取cookie的值，不对值进行解码
	/// baidu.cookie.getRaw(key);
	/// </summary>
	/// <param type="string" name="key">需要获取Cookie的键名</param>
	/// <returns type="string|null">获取的Cookie值，获取不到时返回null</returns>
};baidu.cookie.get = function(key){
	/// <summary>
	/// 获取cookie的值，用decodeURIComponent进行解码
	/// baidu.cookie.get(key);
	/// </summary>
	/// <param type="string" name="key">需要获取Cookie的键名</param>
	/// <returns type="string|null">cookie的值，获取不到时返回null</returns>
};baidu.cookie.set = function(key, value, options){
	/// <summary>
	/// 设置cookie的值，用encodeURIComponent进行编码
	/// baidu.cookie.set(key, value[, options]);
	/// </summary>
	/// <summary>options: 
	/// <para>string path cookie路径</para>  
	/// <para>Date|number expires cookie过期时间,如果类型是数字的话, 单位是毫秒</para>  
	/// <para>string domain cookie域名</para>  
	/// <para>string secure cookie是否安全传输</para>  
	/// </summary>
	/// <param type="string" name="key">需要设置Cookie的键名</param>
	/// <param type="string" name="value">需要设置Cookie的值</param>
	/// <param type="Object" name="options">设置Cookie的其他可选参数</param>

};baidu.cookie.remove = function(key, options){
	/// <summary>
	/// 删除cookie的值
	/// baidu.cookie.remove(key, options);
	/// </summary>
	/// <param type="string" name="key">需要删除Cookie的键名</param>
	/// <param type="Object" name="options">需要删除的cookie对应的 path domain 等值</param>

};baidu.json.parse = function(data){
	/// <summary>
	/// 将字符串解析成json对象。注：不会自动祛除空格
	/// baidu.json.parse(data);
	/// </summary>
	/// <param type="string" name="source">需要解析的字符串</param>
	/// <returns type="JSON">解析结果json对象</returns>
};baidu.json.stringify = function(value){
	/// <summary>
	/// 将json对象序列化
	/// baidu.json.stringify(value);
	/// </summary>
	/// <param type="JSON" name="value">需要序列化的json对象</param>
	/// <returns type="string">序列化后的字符串</returns>
};baidu.json.encode = function(value){
	/// <summary>
	/// 将json对象序列化，为过时接口，今后会被baidu.json.stringify代替
	/// baidu.json.encode(value);
	/// </summary>
	/// <param type="JSON" name="value">需要序列化的json对象</param>
	/// <returns type="string">序列化后的字符串</returns>
};baidu.json.decode = function(source){
	/// <summary>
	/// 将字符串解析成json对象，为过时接口，今后会被baidu.json.parse代替
	/// baidu.json.decode(source);
	/// </summary>
	/// <param type="string" name="source">需要解析的字符串</param>
	/// <returns type="JSON">解析结果json对象</returns>
};baidu.date.format = function(source, pattern){
	/// <summary>
	/// 对目标日期对象进行格式化
	/// baidu.date.format(source, pattern);
	/// </summary>
	/// <param type="Date" name="source">目标日期对象</param>
	/// <param type="string" name="pattern">日期格式化规则</param>
	/// <returns type="string">格式化后的字符串</returns>
};baidu.date.parse = function(source){
	/// <summary>
	/// 将目标字符串转换成日期对象
	/// baidu.date.parse(source);
	/// </summary>
	/// <param type="string" name="source">目标字符串</param>
	/// <returns type="Date">转换后的日期对象</returns>
};baidu.dom.g = function(id){
	/// <summary>
	/// 从文档中获取指定的DOM元素
	/// baidu.dom.g(id);
	/// </summary>
	/// <param type="string|HTMLElement" name="id">元素的id或DOM元素</param>
	/// <returns type="HTMLElement|null">获取的元素，查找不到时返回null,如果参数不合法，直接返回参数</returns>
};baidu.lang.isString = function(source){
	/// <summary>
	/// 判断目标参数是否string类型或String对象
	/// baidu.lang.isString(source);
	/// </summary>
	/// <param type="Any" name="source">目标参数</param>
	/// <returns type="boolean">类型判断结果</returns>
};baidu.dom.getDocument = function(element){
	/// <summary>
	/// 获取目标元素所属的document对象
	/// baidu.dom.getDocument(element);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <returns type="HTMLDocument">目标元素所属的document对象</returns>
};baidu.dom.getComputedStyle = function(element, key){
	/// <summary>
	/// 获取目标元素的computed style值。如果元素的样式值不能被浏览器计算，则会返回空字符串（IE）
	/// baidu.dom.getComputedStyle(element, key);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="string" name="key">要获取的样式名</param>
	/// <returns type="string">目标元素的computed style值</returns>
};baidu.string.toCamelCase = function(source){
	/// <summary>
	/// 将目标字符串进行驼峰化处理
	/// baidu.string.toCamelCase(source);
	/// </summary>
	/// <param type="string" name="source">目标字符串</param>
	/// <returns type="string">驼峰化处理后的字符串</returns>
};baidu.dom.getStyle = function(element, key){
	/// <summary>
	/// 获取目标元素的样式值
	/// baidu.dom.getStyle(element, key);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="string" name="key">要获取的样式名</param>
	/// <returns type="string">目标元素的样式值</returns>
};baidu.dom.setAttr = function(element, key, value){
	/// <summary>
	/// 设置目标元素的attribute值
	/// baidu.dom.setAttr(element, key, value);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="string" name="key">要设置的attribute键名</param>
	/// <param type="string" name="value">要设置的attribute值</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.dom.setAttrs = function(element, attributes){
	/// <summary>
	/// 批量设置目标元素的attribute值
	/// baidu.dom.setAttrs(element, attributes);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="Object" name="attributes">要设置的attribute集合</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.dom.getAttr = function(element, key){
	/// <summary>
	/// 获取目标元素的属性值
	/// baidu.dom.getAttr(element, key);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="string" name="key">要获取的attribute键名</param>
	/// <returns type="string|null">目标元素的attribute值，获取不到时返回null</returns>
};baidu.dom.prev = function(element){
	/// <summary>
	/// 获取目标元素的上一个兄弟元素节点
	/// baidu.dom.prev(element);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <returns type="HTMLElement|null">目标元素的上一个兄弟元素节点，查找不到时返回null</returns>
};baidu.string.trim = function(source){
	/// <summary>
	/// 删除目标字符串两端的空白字符
	/// baidu.string.trim(source);
	/// </summary>
	/// <param type="string" name="source">目标字符串</param>
	/// <returns type="string">删除两端空白字符后的字符串</returns>
};baidu.dom.addClass = function(element, className){
	/// <summary>
	/// 为目标元素添加className
	/// baidu.dom.addClass(element, className);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="string" name="className">要添加的className，允许同时添加多个class，中间使用空白符分隔</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.dom.hasClass = function(element, className){
	/// <summary>
	/// 判断元素是否拥有指定的className
	/// baidu.dom.hasClass(element, className);(v1.2)
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="string" name="className">要判断的className，可以是用空格拼接的多个className</param>
	/// <returns type="Boolean">是否拥有指定的className，如果要查询的classname有一个或多个不在元素的className中，返回false</returns>
};baidu.dom.contains = function(container, contained){
	/// <summary>
	/// 判断一个元素是否包含另一个元素
	/// baidu.dom.contains(container, contained);
	/// </summary>
	/// <param type="HTMLElement|string" name="container">包含元素或元素的id</param>
	/// <param type="HTMLElement|string" name="contained">被包含元素或元素的id</param>
	/// <returns type="boolean">contained元素是否被包含于container元素的DOM节点上</returns>
};baidu.dom.removeClass = function(element, className){
	/// <summary>
	/// 移除目标元素的className
	/// baidu.dom.removeClass(element, className);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="string" name="className">要移除的className，允许同时移除多个class，中间使用空白符分隔</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.dom.children = function(element){
	/// <summary>
	/// 获取目标元素的直接子元素列表
	/// baidu.dom.children(element);
	/// </summary>
	/// <param type="HTMLElement|String" name="element">目标元素或目标元素的id</param>
	/// <returns type="Array">目标元素的子元素列表，没有子元素时返回空数组</returns>
};baidu.dom.setStyle = function(element, key, value){
	/// <summary>
	/// 设置目标元素的style样式值
	/// baidu.dom.setStyle(element, key, value);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="string" name="key">要设置的样式名</param>
	/// <param type="string" name="value">要设置的样式值</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.dom.setStyles = function(element, styles){
	/// <summary>
	/// 批量设置目标元素的style样式值
	/// baidu.dom.setStyles(element, styles);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="Object" name="styles">要设置的样式集合</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.dom.q = function(className, element, tagName){
	/// <summary>
	/// 通过className获取元素
	/// baidu.dom.q(className[, element, tagName]);
	/// </summary>
	/// <summary>
	/// 不保证返回数组中DOM节点的顺序和文档中DOM节点的顺序一致。
	/// @shortcut q,Q
	/// @meta standard
	/// @see baidu.dom.g
	/// @returns {Array} 获取的元素集合，查找不到或className参数错误时返回空数组.
	/// </summary>
	/// <param type="string" name="className">元素的class，只能指定单一的class，如果为空字符串或者纯空白的字符串，返回空数组。</param>
	/// <param type="string|HTMLElement" name="element">开始搜索的元素，默认是document。</param>
	/// <param type="string" name="tagName">要获取元素的标签名，如果没有值或者值为空字符串或者纯空白的字符串，表示不限制标签名。</param>

};baidu.dom.getPosition = function(element){
	/// <summary>
	/// 获取目标元素相对于整个文档左上角的位置
	/// baidu.dom.getPosition(element);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <returns type="Object">目标元素的位置，键值为top和left的Object。</returns>
};baidu.dom.intersect = function(element1, element2){
	/// <summary>
	/// 检查两个元素是否相交
	/// baidu.dom.intersect(element1, element2);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">1 要检查的元素或元素的id</param>
	/// <param type="HTMLElement|string" name="element">2 要检查的元素或元素的id</param>
	/// <returns type="boolean">两个元素是否相交的检查结果</returns>
};baidu.dom.last = function(element){
	/// <summary>
	/// 获取目标元素的最后一个元素节点
	/// baidu.dom.last(element);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <returns type="HTMLElement|null">目标元素的最后一个元素节点，查找不到时返回null</returns>
};baidu.dom.ready = function(callback){
	/// <summary>
	/// 使函数在页面dom节点加载完毕时调用
	/// baidu.dom.ready(callback);
	/// </summary>
	/// <param type="Function" name="callback">页面加载完毕时调用的函数.</param>

};baidu.dom.getAncestorByTag = function(element, tagName){
	/// <summary>
	/// 获取目标元素指定标签的最近的祖先元素
	/// baidu.dom.getAncestorByTag(element, tagName);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="string" name="tagName">祖先元素的标签名</param>
	/// <returns type="HTMLElement|null">指定标签的最近的祖先元素，查找不到时返回null</returns>
};baidu.dom.getWindow = function(element){
	/// <summary>
	/// 获取目标元素所属的window对象
	/// baidu.dom.getWindow(element);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <returns type="window">目标元素所属的window对象</returns>
};baidu.dom.getAncestorBy = function(element, method){
	/// <summary>
	/// 获取目标元素符合条件的最近的祖先元素
	/// baidu.dom.getAncestorBy(element, method);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="Function" name="method">判断祖先元素条件的函数，function (element)</param>
	/// <returns type="HTMLElement|null">符合条件的最近的祖先元素，查找不到时返回null</returns>
};baidu.dom.hide = function(element){
	/// <summary>
	/// 隐藏目标元素
	/// baidu.dom.hide(element);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.dom.next = function(element){
	/// <summary>
	/// 获取目标元素的下一个兄弟元素节点
	/// baidu.dom.next(element);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <returns type="HTMLElement|null">目标元素的下一个兄弟元素节点，查找不到时返回null</returns>
};baidu.dom.show = function(element){
	/// <summary>
	/// 显示目标元素，即将目标元素的display属性还原成默认值。默认值可能在stylesheet中定义，或者是继承了浏览器的默认样式值
	/// baidu.dom.show(element);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.dom.toggle = function(element){
	/// <summary>
	/// 改变目标元素的显示/隐藏状态
	/// baidu.dom.toggle(element);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.dom.insertAfter = function(newElement, existElement){
	/// <summary>
	/// 将目标元素添加到基准元素之后
	/// baidu.dom.insertAfter(newElement, existElement);
	/// </summary>
	/// <param type="HTMLElement|string" name="newElement">被添加的目标元素</param>
	/// <param type="HTMLElement|string" name="existElement">基准元素</param>
	/// <returns type="HTMLElement">被添加的目标元素</returns>
};baidu.dom.first = function(element){
	/// <summary>
	/// 获取目标元素的第一个元素节点
	/// baidu.dom.first(element);
	/// </summary>
	/// <param type="HTMLElement|String" name="element">目标元素或目标元素的id</param>
	/// <returns type="HTMLElement|null">目标元素的第一个元素节点，查找不到时返回null</returns>
};baidu.dom.insertBefore = function(newElement, existElement){
	/// <summary>
	/// 将目标元素添加到基准元素之前
	/// baidu.dom.insertBefore(newElement, existElement);
	/// </summary>
	/// <param type="HTMLElement|string" name="newElement">被添加的目标元素</param>
	/// <param type="HTMLElement|string" name="existElement">基准元素</param>
	/// <returns type="HTMLElement">被添加的目标元素</returns>
};baidu.dom.insertHTML = function(element, position, html){
	/// <summary>
	/// 在目标元素的指定位置插入HTML代码
	/// baidu.dom.insertHTML(element, position, html);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="string" name="position">插入html的位置信息，取值为beforeBegin,afterBegin,beforeEnd,afterEnd</param>
	/// <param type="string" name="html">要插入的html</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.dom.remove = function(element){
	/// <summary>
	/// 从DOM树上移除目标元素
	/// baidu.dom.remove(element);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">需要移除的元素或元素的id</param>

};baidu.dom.getAncestorByClass = function(element, className){
	/// <summary>
	/// 获取目标元素指定元素className最近的祖先元素
	/// baidu.dom.getAncestorByClass(element, className);
	/// </summary>
	/// <summary>
	/// 使用者应保证提供的className合法性，不应包含不合法字符，className合法字符参考：http://www.w3.org/TR/CSS2/syndata.html。
	/// @see baidu.dom.getAncestorBy,baidu.dom.getAncestorByTag
	/// @returns {HTMLElement|null} 指定元素className最近的祖先元素，查找不到时返回null
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="string" name="className">祖先元素的class，只支持单个class</param>

};baidu.lang.instance = function(guid){
	/// <summary>
	/// 根据参数(guid)的指定，返回对应的实例对象引用
	/// baidu.lang.instance(guid);
	/// </summary>
	/// <param type="string" name="guid">需要获取实例的guid</param>
	/// <returns type="Object|null">如果存在的话，返回;否则返回null。</returns>
};baidu.lang.isNumber = function(source){
	/// <summary>
	/// 判断目标参数是否number类型或Number对象
	/// baidu.lang.isNumber(source);
	/// </summary>
	/// <summary>
	/// 用本函数判断NaN会返回false，尽管在Javascript中是Number类型。
	/// </summary>
	/// <param type="Any" name="source">目标参数</param>
	/// <returns type="boolean">类型判断结果</returns>
};baidu.lang.guid = function(){
	/// <summary>
	/// 返回一个当前页面的唯一标识字符串。
	/// baidu.lang.guid();(v1.1.1)
	/// </summary>

	/// <returns type="String">当前页面的唯一标识字符串</returns>
};baidu.lang.isFunction = function(source){
	/// <summary>
	/// 判断目标参数是否为function或Function实例
	/// baidu.lang.isFunction(source);(v1.2)
	/// </summary>
	/// <param type="Any" name="source">目标参数</param>
	/// <returns type="boolean">类型判断结果</returns>
};baidu.lang.Class = function(guid){
	/// <summary>
	/// baidu.lang.Class(guid);
	/// </summary>
	/// <summary>
	/// baidu.lang.Class和它的子类的实例均包含一个全局唯一的标识guid。guid是在构造函数中生成的，因此，继承自baidu.lang.Class的类应该直接或者间接调用它的构造函数。<br>baidu.lang.Class的构造函数中产生guid的方式可以保证guid的唯一性，及每个实例都有一个全局唯一的guid。
	/// @meta standard
	/// @see baidu.lang.inherits,baidu.lang.Event
	/// </summary>
	/// <param type="string" name="guid">对象的唯一标识</param>

};dispose = function(){
	/// <summary>
	/// 释放对象所持有的资源，主要是自定义事件。
	/// obj.dispose();
	/// </summary>


};baidu.lang.inherits = function(subClass, superClass, className){
	/// <summary>
	/// 为类型构造器建立继承关系
	/// baidu.lang.inherits(subClass, superClass[, className]);
	/// </summary>
	/// <param type="Function" name="subClass">子类构造器</param>
	/// <param type="Function" name="superClass">父类构造器</param>
	/// <param type="string" name="className">类名标识</param>

};baidu.lang.isElement = function(source){
	/// <summary>
	/// 判断目标参数是否为Element对象
	/// baidu.lang.isElement(source);
	/// </summary>
	/// <param type="Any" name="source">目标参数</param>
	/// <returns type="boolean">类型判断结果</returns>
};baidu.lang.module = function(name, module, owner){
	/// <summary>
	/// 增加自定义模块扩展,默认创建在当前作用域
	/// baidu.lang.module(name, module[, owner]);
	/// </summary>
	/// <param type="string" name="name">需要创建的模块名.</param>
	/// <param type="Any" name="module">需要创建的模块对象.</param>
	/// <param type="Object" name="owner">模块创建的目标环境，默认为window.</param>

};baidu.lang.decontrol = function(guid){
	/// <summary>
	/// 解除instance中对指定类实例的引用关系。
	/// baidu.lang.decontrol(guid);(v1.1.1)
	/// </summary>
	/// <param type="string" name="guid">类的唯一标识</param>

};baidu.lang.Event = function(type, target){
	/// <summary>
	/// baidu.lang.Event(type[, target]);
	/// </summary>
	/// <summary>
	/// 引入该模块，会自动为Class引入3个事件扩展方法：addEventListener、removeEventListener和dispatchEvent。
	/// @meta standard
	/// @see baidu.lang.Class
	/// </summary>
	/// <param type="string" name="type">事件类型名称。为了方便区分事件和一个普通的方法，事件类型名称必须以"on"(小写)开头。</param>
	/// <param type="Object" name="target">触发事件的对象</param>

};baidu.lang.isObject = function(source){
	/// <summary>
	/// 判断目标参数是否为Object对象
	/// baidu.lang.isObject(source);
	/// </summary>
	/// <param type="Any" name="source">目标参数</param>
	/// <returns type="boolean">类型判断结果</returns>
};baidu.event.getPageX = function(event){
	/// <summary>
	/// 获取鼠标事件的鼠标x坐标
	/// baidu.event.getPageX(event);
	/// </summary>
	/// <param type="Event" name="event">事件对象</param>
	/// <returns type="number">鼠标事件的鼠标x坐标</returns>
};baidu.event.getPageY = function(event){
	/// <summary>
	/// 获取鼠标事件的鼠标y坐标
	/// baidu.event.getPageY(event);
	/// </summary>
	/// <param type="Event" name="event">事件对象</param>
	/// <returns type="number">鼠标事件的鼠标y坐标</returns>
};baidu.event.stopPropagation = function(event){
	/// <summary>
	/// 阻止事件传播
	/// baidu.event.stopPropagation(event);
	/// </summary>
	/// <param type="Event" name="event">事件对象</param>

};baidu.event.preventDefault = function(event){
	/// <summary>
	/// 阻止事件的默认行为
	/// baidu.event.preventDefault(event);
	/// </summary>
	/// <param type="Event" name="event">事件对象</param>

};baidu.event.stop = function(event){
	/// <summary>
	/// 停止事件
	/// baidu.event.stop(event);
	/// </summary>
	/// <param type="Event" name="event">事件对象</param>

};baidu.event.getTarget = function(event){
	/// <summary>
	/// 获取事件的触发元素
	/// baidu.event.getTarget(event);
	/// </summary>
	/// <param type="Event" name="event">事件对象</param>
	/// <returns type="HTMLElement">事件的触发元素</returns>
};baidu.event.EventArg = function(event, win){
	/// <summary>
	/// 事件对象构造器，屏蔽浏览器差异的事件类
	/// baidu.event.EventArg(event[, win]);
	/// </summary>
	/// <summary>
	/// 1.1.0开始支持
	/// @see baidu.event.get
	/// </summary>
	/// <param type="Event" name="event">事件对象</param>
	/// <param type="Window" name="win">窗口对象，默认为window</param>

};preventDefault = function(){
	/// <summary>
	/// 阻止事件的默认行为
	/// eventArgObj.preventDefault();
	/// </summary>

	/// <returns type="baidu.event.EventArg">EventArg对象</returns>
};stopPropagation = function(){
	/// <summary>
	/// 停止事件的传播
	/// eventArgObj.stopPropagation();
	/// </summary>

	/// <returns type="baidu.event.EventArg">EventArg对象</returns>
};stop = function(){
	/// <summary>
	/// 停止事件
	/// eventArgObj.stop();
	/// </summary>

	/// <returns type="baidu.event.EventArg">EventArg对象</returns>
};baidu.event.on = function(element, type, listener){
	/// <summary>
	/// 为目标元素添加事件监听器
	/// baidu.event.on(element, type, listener);
	/// </summary>
	/// <param type="HTMLElement|string|window" name="element">目标元素或目标元素id</param>
	/// <param type="string" name="type">事件类型</param>
	/// <param type="Function" name="listener">需要添加的监听器</param>
	/// <returns type="HTMLElement|window">目标元素</returns>
};baidu.event.get = function(event, win){
	/// <summary>
	/// 获取扩展的EventArg对象
	/// baidu.event.get(event[, win]);
	/// </summary>
	/// <param type="Event" name="event">事件对象</param>
	/// <param type="window" name="win">触发事件元素所在的window</param>
	/// <returns type="EventArg">扩展的事件对象</returns>
};baidu.event.un = function(element, type, listener){
	/// <summary>
	/// 为目标元素移除事件监听器
	/// baidu.event.un(element, type, listener);
	/// </summary>
	/// <param type="HTMLElement|string|window" name="element">目标元素或目标元素id</param>
	/// <param type="string" name="type">事件类型</param>
	/// <param type="Function" name="listener">需要移除的监听器</param>
	/// <returns type="HTMLElement|window">目标元素</returns>
};baidu.event.getKeyCode = function(event){
	/// <summary>
	/// 获取键盘事件的键值
	/// baidu.event.getKeyCode(event);
	/// </summary>
	/// <param type="Event" name="event">事件对象</param>
	/// <returns type="number">键盘事件的键值</returns>
};baidu.fn.blank = function(){
	/// <summary>
	/// 这是一个空函数，用于需要排除函数作用域链干扰的情况.
	/// baidu.fn.blank();(v1.3.3)
	/// </summary>


};baidu.ajax.request = function(url, options){
	/// <summary>
	/// 发送一个ajax请求
	/// baidu.ajax.request(url[, options]);
	/// </summary>
	/// <summary>options: 
	/// <para>String method 请求发送的类型。默认为GET</para>  
	/// <para>Boolean async 是否异步请求。默认为true（异步）</para>  
	/// <para>String data 需要发送的数据。如果是GET请求的话，不需要这个属性</para>  
	/// <para>Object headers 要设置的http request header</para>  
	/// <para>String username 用户名</para>  
	/// <para>String password 密码</para>  
	/// <para>Function onsuccess 请求成功时触发，function(XMLHttpRequest xhr, string responseText)。</para>  
	/// <para>Function onfailure 请求失败时触发，function(XMLHttpRequest xhr)。</para>  
	/// <para>Function onbeforerequest 发送请求之前触发，function(XMLHttpRequest xhr)。</para>  
	/// <para>Function onSTATUS_CODE 当请求为相应状态码时触发的事件，如on302、on404、on500，function(XMLHttpRequest xhr)。3XX的状态码浏览器无法获取，4xx的，可能因为未知问题导致获取失败。</para>  
	/// <para>Boolean noCache 是否需要缓存，默认为false（缓存），1.1.1起支持。</para>  
	/// </summary>
	/// <param type="string" name="url">发送请求的url</param>
	/// <param type="Object" name="options">发送请求的选项参数</param>
	/// <returns type="XMLHttpRequest">发送请求的XMLHttpRequest对象</returns>
};baidu.ajax.post = function(url, data, onsuccess){
	/// <summary>
	/// 发送一个post请求
	/// baidu.ajax.post(url, data[, onsuccess]);
	/// </summary>
	/// <param type="string" name="url">发送请求的url地址</param>
	/// <param type="string" name="data">发送的数据</param>
	/// <param type="Function" name="onsuccess">请求成功之后的回调函数，function(XMLHttpRequest xhr, string responseText)</param>
	/// <returns type="XMLHttpRequest">发送请求的XMLHttpRequest对象</returns>
};baidu.ajax.get = function(url, onsuccess){
	/// <summary>
	/// 发送一个get请求
	/// baidu.ajax.get(url[, onsuccess]);
	/// </summary>
	/// <param type="string" name="url">发送请求的url地址</param>
	/// <param type="Function" name="onsuccess">请求成功之后的回调函数，function(XMLHttpRequest xhr, string responseText)</param>
	/// <returns type="XMLHttpRequest">发送请求的XMLHttpRequest对象</returns>
};baidu.ajax.form = function(form, options){
	/// <summary>
	/// 将一个表单用ajax方式提交
	/// baidu.ajax.form(form[, options]);
	/// </summary>
	/// <summary>options: 
	/// <para>Boolean async 是否异步请求。默认为true（异步）</para>  
	/// <para>String username 用户名</para>  
	/// <para>String password 密码</para>  
	/// <para>Object headers 要设置的http request header</para>  
	/// <para>Function replacer 对参数值特殊处理的函数,replacer(string value, string key)</para>  
	/// <para>Function onbeforerequest 发送请求之前触发，function(XMLHttpRequest xhr)。</para>  
	/// <para>Function onsuccess 请求成功时触发，function(XMLHttpRequest xhr, string responseText)。</para>  
	/// <para>Function onfailure 请求失败时触发，function(XMLHttpRequest xhr)。</para>  
	/// <para>Function onSTATUS_CODE 当请求为相应状态码时触发的事件，如on302、on404、on500，function(XMLHttpRequest xhr)。3XX的状态码浏览器无法获取，4xx的，可能因为未知问题导致获取失败。</para>  
	/// </summary>
	/// <param type="HTMLFormElement" name="form">需要提交的表单元素</param>
	/// <param type="Object" name="options">发送请求的选项参数</param>
	/// <returns type="XMLHttpRequest">发送请求的XMLHttpRequest对象</returns>
};baidu.sio.callByBrowser = function(url, opt_callback, opt_options){
	/// <summary>
	/// 通过script标签加载数据，加载完成由浏览器端触发回调
	/// baidu.sio.callByBrowser(url, opt_callback, opt_options);
	/// </summary>
	/// <summary>options: 
	/// <para>String charset script的字符集</para>  
	/// <para>Integer timeOut 超时时间，超过这个时间将不再响应本请求，并触发onfailure函数</para>  
	/// <para>Function onfailure timeOut设定后才生效，到达超时时间时触发本函数</para>  
	/// </summary>
	/// <param type="string" name="url">加载数据的url</param>
	/// <param type="Function=" name="opt_callback">数据加载结束时调用的函数</param>
	/// <param type="Object=" name="opt_options">其他可选项</param>

};baidu.sio.callByServer = function(url, callback, opt_options){
	/// <summary>
	/// 通过script标签加载数据，加载完成由服务器端触发回调
	/// baidu.sio.callByServer(url, callback[, opt_options]);
	/// </summary>
	/// <summary>options: 
	/// <para>string charset script的字符集</para>  
	/// <para>string queryField 服务器端callback请求字段名，默认为callback</para>  
	/// <para>Integer timeOut 超时时间(单位：ms)，超过这个时间将不再响应本请求，并触发onfailure函数</para>  
	/// <para>Function onfailure timeOut设定后才生效，到达超时时间时触发本函数</para>  
	/// </summary>
	/// <param type="string" name="url">加载数据的url.</param>
	/// <param type="Function|string" name="callback">服务器端调用的函数或函数名。如果没有指定本参数，将在URL中寻找options['queryField']做为callback的方法名.</param>
	/// <param type="Object" name="opt_options">加载数据时的选项.</param>

};baidu.string.encodeHTML = function(source){
	/// <summary>
	/// 对目标字符串进行html编码
	/// baidu.string.encodeHTML(source);
	/// </summary>
	/// <param type="string" name="source">目标字符串</param>
	/// <returns type="string">html编码后的字符串</returns>
};baidu.swf.createHTML = function(options){
	/// <summary>
	/// 创建flash对象的html字符串
	/// baidu.swf.createHTML(options);
	/// </summary>
	/// <summary>options: 
	/// <para>string options.id 要创建的flash的标识</para>  
	/// <para>string options.url flash文件的url</para>  
	/// <para>String options.errorMessage 未安装flash player或flash player版本号过低时的提示</para>  
	/// <para>string options.ver 最低需要的flash player版本号</para>  
	/// <para>string options.width flash的宽度</para>  
	/// <para>string options.height flash的高度</para>  
	/// <para>string options.align flash的对齐方式，允许值：middle/left/right/top/bottom</para>  
	/// <para>string options.base 设置用于解析swf文件中的所有相对路径语句的基本目录或URL</para>  
	/// <para>string options.bgcolor swf文件的背景色</para>  
	/// <para>string options.salign 设置缩放的swf文件在由width和height设置定义的区域内的位置。允许值：l/r/t/b/tl/tr/bl/br</para>  
	/// <para>boolean options.menu 是否显示右键菜单，允许值：true/false</para>  
	/// <para>boolean options.loop 播放到最后一帧时是否重新播放，允许值： true/false</para>  
	/// <para>boolean options.play flash是否在浏览器加载时就开始播放。允许值：true/false</para>  
	/// <para>string options.quality 设置flash播放的画质，允许值：low/medium/high/autolow/autohigh/best</para>  
	/// <para>string options.scale 设置flash内容如何缩放来适应设置的宽高。允许值：showall/noborder/exactfit</para>  
	/// <para>string options.wmode 设置flash的显示模式。允许值：window/opaque/transparent</para>  
	/// <para>string options.allowscriptaccess 设置flash与页面的通信权限。允许值：always/never/sameDomain</para>  
	/// <para>string options.allownetworking 设置swf文件中允许使用的网络API。允许值：all/internal/none</para>  
	/// <para>boolean options.allowfullscreen 是否允许flash全屏。允许值：true/false</para>  
	/// <para>boolean options.seamlesstabbing 允许设置执行无缝跳格，从而使用户能跳出flash应用程序。该参数只能在安装Flash7及更高版本的Windows中使用。允许值：true/false</para>  
	/// <para>boolean options.devicefont 设置静态文本对象是否以设备字体呈现。允许值：true/false</para>  
	/// <para>boolean options.swliveconnect 第一次加载flash时浏览器是否应启动Java。允许值：true/false</para>  
	/// <para>Object options.vars 要传递给flash的参数，支持JSON或string类型。</para>  
	/// </summary>
	/// <param type="Object" name="options">创建flash的选项参数</param>
	/// <returns type="string">flash对象的html字符串</returns>
};baidu.array.remove = function(source, match){
	/// <summary>
	/// 移除数组中的项
	/// baidu.array.remove(source, match);
	/// </summary>
	/// <param type="Array" name="source">需要移除项的数组</param>
	/// <param type="Any|Function" name="match">要移除的项</param>
	/// <returns type="Array">移除后的数组</returns>
};baidu.lang.toArray = function(source){
	/// <summary>
	/// 将一个变量转换成array
	/// baidu.lang.toArray(source);(v1.3)
	/// </summary>
	/// <param type="mix" name="source">需要转换成array的变量</param>
	/// <returns type="array">转换后的array</returns>
};baidu.swf.getMovie = function(name){
	/// <summary>
	/// 获得flash对象的实例
	/// baidu.swf.getMovie(name);
	/// </summary>
	/// <param type="string" name="name">flash对象的名称</param>
	/// <returns type="HTMLElement">flash对象的实例</returns>
};baidu.swf.create = function(options, container){
	/// <summary>
	/// 在页面中创建一个flash对象
	/// baidu.swf.create(options[, container]);
	/// </summary>
	/// <summary>options: 
	/// <para>string options.id 要创建的flash的标识</para>  
	/// <para>string options.url flash文件的url</para>  
	/// <para>String options.errorMessage 未安装flash player或flash player版本号过低时的提示</para>  
	/// <para>string options.ver 最低需要的flash player版本号</para>  
	/// <para>string options.width flash的宽度</para>  
	/// <para>string options.height flash的高度</para>  
	/// <para>string options.align flash的对齐方式，允许值：middle/left/right/top/bottom</para>  
	/// <para>string options.base 设置用于解析swf文件中的所有相对路径语句的基本目录或URL</para>  
	/// <para>string options.bgcolor swf文件的背景色</para>  
	/// <para>string options.salign 设置缩放的swf文件在由width和height设置定义的区域内的位置。允许值：l/r/t/b/tl/tr/bl/br</para>  
	/// <para>boolean options.menu 是否显示右键菜单，允许值：true/false</para>  
	/// <para>boolean options.loop 播放到最后一帧时是否重新播放，允许值： true/false</para>  
	/// <para>boolean options.play flash是否在浏览器加载时就开始播放。允许值：true/false</para>  
	/// <para>string options.quality 设置flash播放的画质，允许值：low/medium/high/autolow/autohigh/best</para>  
	/// <para>string options.scale 设置flash内容如何缩放来适应设置的宽高。允许值：showall/noborder/exactfit</para>  
	/// <para>string options.wmode 设置flash的显示模式。允许值：window/opaque/transparent</para>  
	/// <para>string options.allowscriptaccess 设置flash与页面的通信权限。允许值：always/never/sameDomain</para>  
	/// <para>string options.allownetworking 设置swf文件中允许使用的网络API。允许值：all/internal/none</para>  
	/// <para>boolean options.allowfullscreen 是否允许flash全屏。允许值：true/false</para>  
	/// <para>boolean options.seamlesstabbing 允许设置执行无缝跳格，从而使用户能跳出flash应用程序。该参数只能在安装Flash7及更高版本的Windows中使用。允许值：true/false</para>  
	/// <para>boolean options.devicefont 设置静态文本对象是否以设备字体呈现。允许值：true/false</para>  
	/// <para>boolean options.swliveconnect 第一次加载flash时浏览器是否应启动Java。允许值：true/false</para>  
	/// <para>Object options.vars 要传递给flash的参数，支持JSON或string类型。</para>  
	/// </summary>
	/// <param type="Object" name="options">创建flash的选项参数</param>
	/// <param type="HTMLElement|string" name="container">flash对象的父容器元素，不传递该参数时在当前代码位置创建flash对象。</param>

};baidu.object.extend = function(target, source){
	/// <summary>
	/// 将源对象的所有属性拷贝到目标对象中
	/// baidu.object.extend(target, source);
	/// </summary>
	/// <param type="Object" name="target">目标对象</param>
	/// <param type="Object" name="source">源对象</param>
	/// <returns type="Object">目标对象</returns>
};baidu.object.keys = function(source){
	/// <summary>
	/// 获取目标对象的键名列表
	/// baidu.object.keys(source);
	/// </summary>
	/// <param type="Object" name="source">目标对象</param>
	/// <returns type="Array">键名列表</returns>
};baidu.object.values = function(source){
	/// <summary>
	/// 获取目标对象的值列表
	/// baidu.object.values(source);
	/// </summary>
	/// <param type="Object" name="source">目标对象</param>
	/// <returns type="Array">值列表</returns>
};baidu.object.isPlain = function(source){
	/// <summary>
	/// 判断一个对象是不是字面量对象，即判断这个对象是不是由{}或者new Object类似方式创建
	/// baidu.object.isPlain(source);
	/// </summary>
	/// <param type="Object" name="source">需要检查的对象</param>
	/// <returns type="Boolean">检查结果</returns>
};baidu.object.clone = function(source){
	/// <summary>
	/// 对一个object进行深度拷贝
	/// baidu.object.clone(source);
	/// </summary>
	/// <param type="Object" name="source">需要进行拷贝的对象</param>
	/// <returns type="Object">拷贝后的新对象</returns>
};baidu.string.getByteLength = function(source){
	/// <summary>
	/// 获取目标字符串在gbk编码下的字节长度
	/// baidu.string.getByteLength(source);
	/// </summary>
	/// <param type="string" name="source">目标字符串</param>
	/// <returns type="number">字节长度</returns>
};baidu.string.decodeHTML = function(source){
	/// <summary>
	/// 对目标字符串进行html解码
	/// baidu.string.decodeHTML(source);
	/// </summary>
	/// <param type="string" name="source">目标字符串</param>
	/// <returns type="string">html解码后的字符串</returns>
};baidu.string.format = function(source, opts){
	/// <summary>
	/// 对目标字符串进行格式化
	/// baidu.string.format(source, opts);
	/// </summary>
	/// <param type="string" name="source">目标字符串</param>
	/// <param type="Object|string..." name="opts">提供相应数据的对象或多个字符串</param>
	/// <returns type="string">格式化后的字符串</returns>
};baidu.string.wbr = function(source){
	/// <summary>
	/// 为目标字符串添加wbr软换行
	/// baidu.string.wbr(source);
	/// </summary>
	/// <param type="string" name="source">目标字符串</param>
	/// <returns type="string">添加软换行后的字符串</returns>
};baidu.string.subByte = function(source, length){
	/// <summary>
	/// 对目标字符串按gbk编码截取字节长度
	/// baidu.string.subByte(source, length);
	/// </summary>
	/// <param type="string" name="source">目标字符串</param>
	/// <param type="number" name="length">需要截取的字节长度</param>
	/// <param type="string" name="tail">追加字符串,可选.</param>
	/// <returns type="string">字符串截取结果</returns>
};baidu.string.toHalfWidth = function(source){
	/// <summary>
	/// 将目标字符串中常见全角字符转换成半角字符
	/// baidu.string.toHalfWidth(source);
	/// </summary>
	/// <param type="string" name="source">目标字符串</param>
	/// <returns type="string">转换后的字符串</returns>
};baidu.page.getHeight = function(){
	/// <summary>
	/// 获取页面高度
	/// baidu.page.getHeight();
	/// </summary>

	/// <returns type="number">页面高度</returns>
};baidu.page.loadCssFile = function(path){
	/// <summary>
	/// 动态在页面上加载一个外部css文件
	/// baidu.page.loadCssFile(path);
	/// </summary>
	/// <param type="string" name="path">css文件路径</param>

};baidu.page.getScrollLeft = function(){
	/// <summary>
	/// 获取横向滚动量
	/// baidu.page.getScrollLeft();
	/// </summary>

	/// <returns type="number">横向滚动量</returns>
};baidu.page.getViewWidth = function(){
	/// <summary>
	/// 获取页面视觉区域宽度
	/// baidu.page.getViewWidth();
	/// </summary>

	/// <returns type="number">页面视觉区域宽度</returns>
};baidu.page.loadJsFile = function(path){
	/// <summary>
	/// 动态在页面上加载一个外部js文件
	/// baidu.page.loadJsFile(path);
	/// </summary>
	/// <param type="string" name="path">js文件路径</param>

};baidu.page.getWidth = function(){
	/// <summary>
	/// 获取页面宽度
	/// baidu.page.getWidth();
	/// </summary>

	/// <returns type="number">页面宽度</returns>
};baidu.page.getScrollTop = function(){
	/// <summary>
	/// 获取纵向滚动量
	/// baidu.page.getScrollTop();
	/// </summary>

	/// <returns type="number">纵向滚动量</returns>
};baidu.page.getViewHeight = function(){
	/// <summary>
	/// 获取页面视觉区域高度
	/// baidu.page.getViewHeight();
	/// </summary>

	/// <returns type="number">页面视觉区域高度</returns>
};baidu.array.filter = function(source, iterator, thisObject){
	/// <summary>
	/// 从数组中筛选符合条件的元素
	/// baidu.array.filter(source, iterator[, thisObject]);
	/// </summary>
	/// <param type="Array" name="source">需要筛选的数组</param>
	/// <param type="Function" name="iterator">对每个数组元素进行筛选的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值，function (item, index)，函数需要返回true或false</param>
	/// <param type="Object" name="thisObject">函数调用时的this指针，如果没有此参数，默认是当前遍历的数组</param>
	/// <returns type="Array">符合条件的数组项集合</returns>
};baidu.array.unique = function(source, compareFn){
	/// <summary>
	/// 过滤数组中的相同项。如果两个元素相同，会删除后一个元素。
	/// baidu.array.unique(source[, compareFn]);
	/// </summary>
	/// <param type="Array" name="source">需要过滤相同项的数组</param>
	/// <param type="Function" name="compareFn">比较两个数组项是否相同的函数,两个数组项作为函数的参数。</param>
	/// <returns type="Array">过滤后的新数组</returns>
};baidu.array.indexOf = function(source, match, fromIndex){
	/// <summary>
	/// 查询数组中指定元素的索引位置
	/// baidu.array.indexOf(source, match[, fromIndex]);
	/// </summary>
	/// <param type="Array" name="source">需要查询的数组</param>
	/// <param type="Any|Function" name="match">查询项</param>
	/// <param type="number" name="fromIndex">查询的起始位索引位置，如果为负数，则从source.length+fromIndex往后开始查找</param>
	/// <returns type="number">指定元素的索引位置，查询不到时返回-1</returns>
};baidu.array.each = function(source, iterator, thisObject){
	/// <summary>
	/// 遍历数组中所有元素
	/// baidu.array.each(source, iterator[, thisObject]);
	/// </summary>
	/// <param type="Array" name="source">需要遍历的数组</param>
	/// <param type="Function" name="iterator">对每个数组元素进行调用的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值，function (item, index)。</param>
	/// <param type="Object" name="thisObject">函数调用时的this指针，如果没有此参数，默认是当前遍历的数组</param>
	/// <returns type="Array">遍历的数组</returns>
};baidu.array.find = function(source, iterator){
	/// <summary>
	/// 从数组中寻找符合条件的第一个元素
	/// baidu.array.find(source, iterator);
	/// </summary>
	/// <param type="Array" name="source">需要查找的数组</param>
	/// <param type="Function" name="iterator">对每个数组元素进行查找的函数，该函数有两个参数，第一个为数组元素，第二个为数组索引值，function (item, index)，函数需要返回true或false</param>
	/// <returns type="Any|null">符合条件的第一个元素，找不到时返回null</returns>
};baidu.array.lastIndexOf = function(source, match){
	/// <summary>
	/// 从后往前，查询数组中指定元素的索引位置
	/// baidu.array.lastIndexOf(source, match);
	/// </summary>
	/// <param type="Array" name="source">需要查询的数组</param>
	/// <param type="Any|Function" name="match">查询项</param>
	/// <param type="number" name="fromIndex">查询的起始位索引位置，如果为负数，则从source.length+fromIndex往前开始查找</param>
	/// <returns type="number">指定元素的索引位置，查询不到时返回-1</returns>
};baidu.array.removeAt = function(source, index){
	/// <summary>
	/// 移除数组中的项
	/// baidu.array.removeAt(source, index);
	/// </summary>
	/// <param type="Array" name="source">需要移除项的数组</param>
	/// <param type="number" name="index">要移除项的索引位置</param>
	/// <returns type="Any">被移除的数组项</returns>
};baidu.lang.createClass = function(constructor, options){
	/// <summary>
	/// 创建一个类，包括创造类的构造器、继承基类Class
	/// baidu.lang.createClass(constructor[, options]);(v1.2)
	/// </summary>
	/// <summary>options: 
	/// <para>string className 类名</para>  
	/// <para>Function superClass 父类，默认为baidu.lang.Class</para>  
	/// </summary>
	/// <param type="Function" name="constructor">类的构造器函数</param>
	/// <param type="Object" name="options"></param>
	/// <returns type="Object">一个类对象</returns>
};baidu.lang.createSingle = function(json){
	/// <summary>
	/// 创建一个baidu.lang.Class的单例实例
	/// baidu.lang.createSingle(json);(v1.2)
	/// </summary>
	/// <param type="Object" name="json">直接挂载到这个单例里的预定属性/方法</param>
	/// <returns type="Object">一个实例</returns>
};baidu.string.filterFormat = function(source, opts){
	/// <summary>
	/// 对目标字符串进行格式化,支持过滤
	/// baidu.string.filterFormat(source, opts);(v1.2)
	/// </summary>
	/// <param type="string" name="source">目标字符串</param>
	/// <param type="Object|string..." name="opts">提供相应数据的对象</param>
	/// <returns type="string">格式化后的字符串</returns>
};baidu.string.filterFormat.escapeJs = function(source){
	/// <summary>
	/// 对js片段的字符做安全转义,编码低于255的都将转换成\x加16进制数
	/// baidu.string.filterFormat.escapeJs(source);(v1.2)
	/// </summary>
	/// <param type="String" name="source">待转义字符串</param>
	/// <returns type="String">转义之后的字符串</returns>
};baidu.string.filterFormat.escapeString = function(source){
	/// <summary>
	/// 对字符串做安全转义,转义字符包括: 单引号,双引号,左右小括号,斜杠,反斜杠,上引号.
	/// baidu.string.filterFormat.escapeString(source);(v1.2)
	/// </summary>
	/// <param type="String" name="source">待转义字符串</param>
	/// <returns type="String">转义之后的字符串</returns>
};baidu.string.filterFormat.toInt = function(source){
	/// <summary>
	/// 对数字做安全转义,确保是十进制数字;否则返回0.
	/// baidu.string.filterFormat.toInt(source);(v1.2)
	/// </summary>
	/// <param type="String" name="source">待转义字符串</param>
	/// <returns type="Number">转义之后的数字</returns>
};baidu.page.getMousePosition = function(){
	/// <summary>
	/// 获得页面里的目前鼠标所在的坐标
	/// baidu.page.getMousePosition();(v1.2)
	/// </summary>

	/// <returns type="object">鼠标坐标值{x:[Number], y:[Number]}</returns>
};baidu.dom.drag = function(element, options){
	/// <summary>
	/// 拖动指定的DOM元素
	/// baidu.dom.drag(element, options);(v1.2)
	/// </summary>
	/// <summary>options: 
	/// <para>Array options.range 限制drag的拖拽范围，数组中必须包含四个值，分别是上、右、下、左边缘相对上方或左方的像素距离。默认无限制</para>  
	/// <para>Number options.interval 拖曳行为的触发频度（时间：毫秒）</para>  
	/// <para>Boolean options.capture 鼠标拖曳粘滞</para>  
	/// <para>Object options.mouseEvent 键名为clientX和clientY的object，若不设置此项，默认会获取当前鼠标位置</para>  
	/// <para>Function options.ondragstart drag开始时触发</para>  
	/// <para>Function options.ondrag drag进行中触发</para>  
	/// <para>Function options.ondragend drag结束时触发</para>  
	/// <para>function options.autoStop 是否在onmouseup时自动停止拖拽。默认为true</para>  
	/// </summary>
	/// <param type="HTMLElement|string" name="element">元素或者元素的id</param>
	/// <param type="Object" name="options">拖曳配置项</param>

};baidu.dom.draggable = function(element, options){
	/// <summary>
	/// 让一个DOM元素可拖拽
	/// baidu.dom.draggable(element[, options]);(v1.2)
	/// </summary>
	/// <summary>
	/// 要拖拽的元素必须事先设定样式的postion值，如果postion为absloute，并且没有设定top和left，拖拽开始时，无法取得元素的top和left值，这时会从[0,0]点开始拖拽<br>如果要拖拽的元素是static定位，会被改成relative定位方式。
	/// @see baidu.dom.drag
	/// @return {Draggable Instance} 拖拽实例，包含cancel方法，可以停止拖拽.
	/// </summary>
	/// <summary>options: 
	/// <para>Array range 限制drag的拖拽范围，数组中必须包含四个值，分别是上、右、下、左边缘相对上方或左方的像素距离。默认无限制.</para>  
	/// <para>Number interval 拖曳行为的触发频度（时间：毫秒）.</para>  
	/// <para>Boolean capture 鼠标拖曳粘滞.</para>  
	/// <para>Object mouseEvent 键名为clientX和clientY的object，若不设置此项，默认会获取当前鼠标位置.</para>  
	/// <para>Function onbeforedragstart drag开始前触发（即鼠标按下时）.</para>  
	/// <para>Function ondragstart drag开始时触发.</para>  
	/// <para>Function ondrag drag进行中触发.</para>  
	/// <para>Function ondragend drag结束时触发.</para>  
	/// <para>HTMLElement handler 用于拖拽的手柄，比如dialog的title.</para>  
	/// <para>Function toggle 在每次ondrag的时候，会调用这个方法判断是否应该停止拖拽。如果此函数返回值为false，则停止拖拽.</para>  
	/// </summary>
	/// <param type="string|HTMLElement" name="element">元素或者元素的ID.</param>
	/// <param type="Object" name="options">选项.</param>

};baidu.dom.query = function(selector, context, results){
	/// <summary>
	/// 提供css选择器功能
	/// baidu.dom.query(selector[, context, results]);(v1.2)
	/// </summary>
	/// <param type="String" name="selector">选择器定义</param>
	/// <param type="HTMLElement | DOMDocument" name="context">查找的上下文</param>
	/// <param type="Array" name="results">查找的结果会追加到这个数组中</param>
	/// <returns type="Array">包含所有筛选出的DOM元素的数组</returns>
};baidu.page.createStyleSheet = function(options){
	/// <summary>
	/// 在页面中创建样式表对象
	/// baidu.page.createStyleSheet(options);(v1.2)
	/// </summary>
	/// <summary>options: 
	/// <para>Document options.document 指定在哪个document下创建，默认是当前文档</para>  
	/// <para>String options.url css文件的URL</para>  
	/// <para>Number options.index 在文档里的排序索引（注意，仅IE下有效）</para>  
	/// </summary>
	/// <param type="Object" name="options">配置信息</param>
	/// <returns type="baidu.page.createStyleSheet.StyleSheet">styleSheet对象(注意: 仅IE下,其他浏览器均返回null)</returns>
};baidu.dom.create = function(tagName, options){
	/// <summary>
	/// 创建 Element 对象。
	/// baidu.dom.create(tagName[, options]);(v1.3)
	/// </summary>
	/// <param type="string" name="tagName">标签名称.</param>
	/// <param type="Object" name="opt_attributes">元素创建时拥有的属性，如style和className.</param>
	/// <returns type="HTMLElement">创建的 Element 对象</returns>
};baidu.dom.empty = function(element){
	/// <summary>
	/// 删除一个节点下面的所有子节点。
	/// baidu.dom.empty(element);(v1.3)
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.dom.getText = function(element){
	/// <summary>
	/// 获得元素中的文本内容。
	/// baidu.dom.getText(element);(v1.3)
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <returns type="String">元素中文本的内容</returns>
};baidu.dom.hasAttr = function(element, name){
	/// <summary>
	/// 查询一个元素是否包含指定的属性
	/// baidu.dom.hasAttr(element, name);(v1.3)
	/// </summary>
	/// <param type="DOMElement|string" name="element">DOM元素或元素的id</param>
	/// <param type="string" name="name">要查找的属性名</param>
	/// <returns type="Boolean">是否包含此属性</returns>
};baidu.dom.toggleClass = function(element, className){
	/// <summary>
	/// 添加或者删除一个节点中的指定class，如果已经有就删除，否则添加
	/// baidu.dom.toggleClass(element, className);(v1.3)
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="String" name="className">指定的className。允许同时添加多个class，中间使用空白符分隔</param>

};baidu.fn.methodize = function(func, attr){
	/// <summary>
	/// 将一个静态函数变换成一个对象的方法，使其的第一个参数为this，或this[attr
	/// baidu.fn.methodize(func[, attr]);(v1.3)
	/// </summary>
	/// <param type="Function" name="func">要方法化的函数</param>
	/// <param type="string" name="attr">属性</param>
	/// <returns type="Function">已方法化的函数</returns>
};baidu.fn.wrapReturnValue = function(func, wrapper, mode){
	/// <summary>
	/// 包装函数的返回值，使其在能按照index指定的方式返回。<br/>如果其值为-1，直接返回返回值。 <br/>如果其值为0，返回"返回值"的包装结果。<br/> 如果其值大于0，返回第i个位置的参数的包装结果（从1开始计数）
	/// baidu.fn.wrapReturnValue(func, wrapper, mode);(v1.3.5)
	/// </summary>
	/// <param type="function" name="func">需要包装的函数</param>
	/// <param type="function" name="wrapper">包装器</param>
	/// <param type="number" name="param">包装第几个参数</param>
	/// <returns type="function">包装后的函数</returns>
};baidu.fn.multize = function(func, recursive){
	/// <summary>
	/// 对函数进行集化，使其在第一个参数为array时，结果也返回一个数组
	/// baidu.fn.multize(func[, recursive]);(v1.3)
	/// </summary>
	/// <param type="Function" name="func">需要包装的函数</param>
	/// <param type="Boolean" name="recursive">是否递归包装（如果数组里面一项仍然是数组，递归），可选</param>
	/// <returns type="Function">已集化的函数</returns>
};baidu.element.Element = function(node){
	/// <summary>
	/// Element类，所有扩展到链条上的方法都会被放在这里面
	/// baidu.element.Element(node);(v1.3)
	/// </summary>
	/// <param type="DOMElement|NodeList" name="node">目标元素，可以是数组或者单个node节点</param>
	/// <returns type="ElementObj">包装后的DOM对象</returns>
};baidu.element.each = function(node){
	/// <summary>
	/// 以每一个匹配的元素作为上下文执行传递进来的函数，方便用户自行遍历dom。
	/// baidu.element(node).each(iterator);(v1.3)
	/// </summary>
	/// <param type="Function" name="iterator">遍历Dom时调用的方法</param>

};baidu.element.doms = function(node){
	/// <summary>
	/// element对象包装了dom包下的除了drag和ready,create,ddManager之外的大部分方法。这样做的目的是提供更为方便的链式调用操作。其中doms代指dom包下的方法名。
	/// baidu.element(node).doms;(v1.3)
	/// </summary>
	/// <param type="" name="dom">详见包下相应方法的参数。</param>

};baidu.element.events = function(node){
	/// <summary>
	/// 方法提供了事件绑定的快捷方式，事件发生时会触发传递进来的函数。events代指事件方法的总和。
	/// baidu.element(node).events(fn);(v1.3)
	/// </summary>
	/// <summary>
	/// 包装event的快捷方式具体包括blur、focus、focusin、focusout、load 、resize 、scroll 、unload 、click、 dblclick、mousedown 、mouseup 、mousemove、 mouseover 、mouseout 、mouseenter、 mouseleave、change 、select 、submit 、keydown、 keypress 、keyup、 error。
	/// @shortcut e
	/// @returns {baidu.element} Element对象
	/// </summary>
	/// <param type="Function" name="fn">事件触发时要调用的方法</param>

};baidu.array.hash = function(keys, values){
	/// <summary>
	/// 将两个数组参数合并成一个类似hashMap结构的对象，这个对象使用第一个数组做为key，使用第二个数组做为值，如果第二个参数未指定，则把对象的所有值置为true。
	/// baidu.array.hash(keys[, values]);
	/// </summary>
	/// <param type="Array" name="keys">作为key的数组</param>
	/// <param type="Array" name="values">作为value的数组，未指定此参数时，默认值将对象的值都设为true。</param>
	/// <returns type="Object">合并后的对象{key : value}</returns>
};baidu.dom.droppable = function(element, options){
	/// <summary>
	/// 让一个DOM元素可以容纳被拖拽的DOM元素
	/// baidu.dom.droppable(element[, options]);(v1.3)
	/// </summary>
	/// <summary>options: 
	/// <para>Function ondrop 当元素放到容器元素内部触发</para>  
	/// <para>Function ondropover 当元素在容器元素上方时触发</para>  
	/// <para>Function ondropout 当元素移除容器元素时触发</para>  
	/// </summary>
	/// <param type="HTMLElement|string" name="element">容器元素或者容器元素的ID</param>
	/// <param type="Object" name="options">选项，拖拽元素对于容器元素的事件</param>
	/// <returns type="Function">cancel取消拖拽</returns>
};baidu.dom.removeStyle = function(element, styleName){
	/// <summary>
	/// 删除元素的某个样式
	/// baidu.dom.removeStyle(element, styleName);(v1.3)
	/// </summary>
	/// <param type="HTMLElement|String" name="element">需要删除样式的元素或者元素id</param>
	/// <param type="string" name="styleName">需要删除的样式名字</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.dom.setBorderBoxSize = function(element, size){
	/// <summary>
	/// 按照border-box模型设置元素的height和width值。只支持元素的padding/border/height/width使用同一种计量单位的情况。<br/> 不支持：<br/> 1. 非数字值(medium)<br/> 2. em/px在不同的属性中混用
	/// baidu.dom.setBorderBoxSize(element, size);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">元素或DOM元素的id</param>
	/// <param type="object" name="size">包含height和width键名的对象</param>
	/// <returns type="HTMLElement">设置好的元素</returns>
};baidu.dom.setBorderBoxHeight = function(element, height){
	/// <summary>
	/// 按照border-box模型设置元素的height值
	/// baidu.dom.setBorderBoxHeight(element, height);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">DOM元素或元素的id</param>
	/// <param type="number|string" name="height">要设置的height</param>
	/// <returns type="HTMLElement">设置好的元素</returns>
};baidu.dom.setBorderBoxWidth = function(element, width){
	/// <summary>
	/// 按照border-box模型设置元素的width值
	/// baidu.dom.setBorderBoxWidth(element, width);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">DOM元素或元素的id</param>
	/// <param type="number|string" name="width">要设置的width</param>
	/// <returns type="HTMLElement">设置好的元素</returns>
};baidu.dom.resizable = function(element, options){
	/// <summary>
	/// 绘制可以根据鼠标行为改变HTMLElement大小的resize handle
	/// baidu.dom.resizable(element[, options]);
	/// </summary>
	/// <summary>
	/// 需要将元素的定位设置为absolute
	/// @author lixiaopeng
	/// @version 1.3
	/// </summary>
	/// <summary>options: 
	/// <para>Array direction 可以改变的方向e,se,s,ws,w,wn,n,en</para>  
	/// <para>Function onresizestart 开始改变大小时触发</para>  
	/// <para>Function onresizeend 大小改变结束时触发</para>  
	/// <para>Function onresize 大小改变后时触发</para>  
	/// <para>Number|String maxWidth 可改变的最大宽度</para>  
	/// <para>Number|String maxHeight 可改变的最大高度</para>  
	/// <para>Number|String minWidth 可改变的最小宽度</para>  
	/// <para>Number|String minHeight 可改变的最小高度</para>  
	/// <para>String classPrefix className 前缀</para>  
	/// <para>Object directionHandlePosition resizHandle的位置参数</para>  
	/// </summary>
	/// <param type="HTMLElement|string" name="element">需要改变大小的元素或者元素的id.</param>
	/// <param type="Object" name="options">resizable参数配置</param>
	/// <returns type="Object">{cancel:Function} cancel函数</returns>
};baidu.fn.bind = function(handler, obj, args){
	/// <summary>
	/// 为对象绑定方法和作用域
	/// baidu.fn.bind(handler[, obj, args]);(v1.3)
	/// </summary>
	/// <param type="Function|String" name="handler">要绑定的函数，或者一个在作用域下可用的函数名</param>
	/// <param type="Object" name="obj">执行运行时this，如果不传入则运行时this为函数本身</param>
	/// <param type="args* 0..n" name="args">函数执行时附加到执行时函数前面的参数</param>
	/// <returns type="Function">封装后的函数</returns>
};baidu.lang.isBoolean = function(source){
	/// <summary>
	/// 判断目标参数是否Boolean对象
	/// baidu.lang.isBoolean(source);(v1.3)
	/// </summary>
	/// <param type="Any" name="source">目标参数</param>
	/// <returns type="boolean">类型判断结果</returns>
};baidu.lang.isDate = function(source){
	/// <summary>
	/// 判断目标参数是否为Date对象
	/// baidu.lang.isDate(source);(v1.3)
	/// </summary>
	/// <param type="Any" name="source">目标参数</param>
	/// <returns type="boolean">类型判断结果</returns>
};baidu.event.fire = function(element, type, options){
	/// <summary>
	/// 触发已经注册的事件。注：在ie下不支持load和unload事件
	/// baidu.event.fire(element, type, options);(v1.3)
	/// </summary>
	/// <summary>options: 
	/// <para>Boolean options.bubbles 是否冒泡</para>  
	/// <para>Boolean options.cancelable 是否可以阻止事件的默认操作</para>  
	/// <para>window|null options.view 指定 Event 的 AbstractView</para>  
	/// <para>1|Number options.detail 指定 Event 的鼠标单击量</para>  
	/// <para>Number options.screenX 指定 Event 的屏幕 x 坐标</para>  
	/// <para>Number options.screenY number 指定 Event 的屏幕 y 坐标</para>  
	/// <para>Number options.clientX 指定 Event 的客户端 x 坐标</para>  
	/// <para>Number options.clientY 指定 Event 的客户端 y 坐标</para>  
	/// <para>Boolean options.ctrlKey 指定是否在 Event 期间按下 ctrl 键</para>  
	/// <para>Boolean options.altKey 指定是否在 Event 期间按下 alt 键</para>  
	/// <para>Boolean options.shiftKey 指定是否在 Event 期间按下 shift 键</para>  
	/// <para>Boolean options.metaKey 指定是否在 Event 期间按下 meta 键</para>  
	/// <para>Number options.button 指定 Event 的鼠标按键</para>  
	/// <para>Number options.keyCode 指定 Event 的键盘按键</para>  
	/// <para>Number options.charCode 指定 Event 的字符编码</para>  
	/// <para>HTMLElement options.relatedTarget 指定 Event 的相关 EventTarget</para>  
	/// </summary>
	/// <param type="HTMLElement|string|window" name="element">目标元素或目标元素id</param>
	/// <param type="string" name="type">事件类型</param>
	/// <param type="Object" name="options">触发的选项</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.event.once = function(element, type, listener){
	/// <summary>
	/// 为目标元素添加一次事件绑定
	/// baidu.event.once(element, type, listener);(v1.3)
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素id</param>
	/// <param type="string" name="type">事件类型</param>
	/// <param type="Function" name="listener">需要添加的监听器</param>
	/// <returns type="HTMLElement">目标元素</returns>
};baidu.string.formatColor = function(color){
	/// <summary>
	/// 将各种浏览器里的颜色值转换成 #RRGGBB 的格式
	/// baidu.string.formatColor(color);(v1.3)
	/// </summary>
	/// <param type="string" name="color">颜色值字符串</param>
	/// <returns type="string">#RRGGBB格式的字符串或空</returns>
};baidu.array.map = function(source, iterator, thisObject){
	/// <summary>
	/// 遍历数组中所有元素，将每一个元素应用方法进行转换，并返回转换后的新数组。
	/// baidu.array.map(source, iterator[, thisObject]);
	/// </summary>
	/// <param type="Array" name="source">需要遍历的数组.</param>
	/// <param type="Function" name="iterator">对每个数组元素进行处理的函数.</param>
	/// <param type="Object" name="thisObject">函数调用时的this指针，如果没有此参数，默认是当前遍历的数组</param>
	/// <returns type="Array">map后的数组.</returns>
};baidu.dom.getParent = function(element){
	/// <summary>
	/// 获得元素的父节点
	/// baidu.dom.getParent(element);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <returns type="HTMLElement|null">父元素，如果找不到父元素，返回null</returns>
};baidu.dom.setPosition = function(element, position){
	/// <summary>
	/// 设置目标元素的top和left值到用户指定的位置
	/// baidu.dom.setPosition(element, position);
	/// </summary>
	/// <param type="HTMLElement|string" name="element">目标元素或目标元素的id</param>
	/// <param type="object" name="position">位置对象 {top: {number}, left : {number}}</param>
	/// <returns type="HTMLElement">进行设置的元素</returns>
};baidu.element.extend = function(json){
	/// <summary>
	/// 为element对象扩展一个方法。
	/// baidu.element.extend(json);(v1.3)
	/// </summary>
	/// <param type="Object" name="json">要扩展的方法名以及方法</param>
	/// <returns type="baidu.element.Element">Element对象</returns>
};baidu.number.randomInt = function(min, max){
	/// <summary>
	/// 生成随机整数，范围是[min, max
	/// baidu.number.randomInt(min, max);
	/// </summary>
	/// <param type="number" name="min">随机整数的最小值</param>
	/// <param type="number" name="max">随机整数的最大值</param>
	/// <returns type="number">生成的随机整数</returns>
};baidu.object.map = function(source, iterator){
	/// <summary>
	/// 遍历object中所有元素，将每一个元素应用方法进行转换，返回转换后的新object。
	/// baidu.object.map(source, iterator);
	/// </summary>
	/// <param type="Array" name="source">需要遍历的object</param>
	/// <param type="Function" name="iterator">对每个object元素进行处理的函数</param>
	/// <returns type="Array">map后的object</returns>
};baidu.array.contains = function(source, obj){
	/// <summary>
	/// 判断一个数组中是否包含给定元素
	/// baidu.array.contains(source, obj);
	/// </summary>
	/// <param type="Array" name="source">需要判断的数组.</param>
	/// <param type="Any" name="obj">要查找的元素.</param>
	/// <returns type="boolean">判断结果.</returns>
};baidu.array.empty = function(source){
	/// <summary>
	/// 清空一个数组
	/// baidu.array.empty(source);
	/// </summary>
	/// <param type="Array" name="source">需要清空的数组.</param>

};baidu.array.every = function(source, iterator,thisObject){
	/// <summary>
	/// 判断一个数组中是否所有元素都满足给定条件
	/// baidu.array.every(source, iterator[,thisObject]);
	/// </summary>
	/// <param type="Array" name="source">需要判断的数组.</param>
	/// <param type="Function" name="iterator">判断函数.</param>
	/// <param type="Object" name="thisObject">函数调用时的this指针，如果没有此参数，默认是当前遍历的数组</param>
	/// <returns type="boolean">判断结果.</returns>
};baidu.array.reduce = function(source, iterator, initializer){
	/// <summary>
	/// 遍历数组中所有元素，将每一个元素应用方法进行合并，并返回合并后的结果。
	/// baidu.array.reduce(source, iterator[, initializer]);(v1.3.4)
	/// </summary>
	/// <param type="Array" name="source">需要遍历的数组.</param>
	/// <param type="Function" name="iterator">对每个数组元素进行处理的函数，函数接受四个参数：上一次reduce的结果（或初始值），当前元素值，索引值，整个数组.</param>
	/// <param type="Object" name="initializer">合并的初始项，如果没有此参数，默认用数组中的第一个值作为初始值.</param>
	/// <returns type="Array">reduce后的值.</returns>
};baidu.array.some = function(source, iterator,thisObject){
	/// <summary>
	/// 判断一个数组中是否有部分元素满足给定条件
	/// baidu.array.some(source, iterator[,thisObject]);
	/// </summary>
	/// <param type="Array" name="source">需要判断的数组.</param>
	/// <param type="Function" name="iterator">判断函数.</param>
	/// <param type="Object" name="thisObject">函数调用时的this指针，如果没有此参数，默认是当前遍历的数组</param>
	/// <returns type="boolean">判断结果.</returns>
};baidu.page.load = function(resources, options){
	/// <summary>
	/// 加载一组资源，支持多种格式资源的串/并行加载，支持每个文件有单独回调函数。
	/// baidu.page.load(resources[, options]);
	/// </summary>
	/// <summary>options: 
	/// <para>Function options.onload 资源全部加载完成的回调函数，无参数。.</para>  
	/// <para>Boolean options.parallel 是否并行加载，默认为false，串行。.</para>  
	/// </summary>
	/// <param type="Array" name="resources">资源描述数组，单个resource含如下属性.</param>
	/// <param type="String" name="resources.url">链接地址.</param>
	/// <param type="String" name="resources.type">取值["css","js","html"]，默认参考文件后缀.</param>
	/// <param type="String" name="resources.requestType">取值["dom","ajax"]，默认js和css用dom标签，html用ajax.</param>
	/// <param type="Function" name="resources.onload">当前resource加载完成的回调函数，若requestType为ajax，参数为xhr(可能失效)，responseText；若requestType为dom，无参数，执行时this为相应dom标签。.</param>
	/// <param type="Object" name="options">可选参数.</param>
	/// <param type="Boolean" name="ignoreAllLoaded">全部加载之后不触发回调事件.主要用于内部实现.</param>

};baidu.page.lazyLoadImage = function(options){
	/// <summary>
	/// 延迟加载图片. 默认只加载可见高度以上的图片, 随着窗口滚动加载剩余图片.注意: 仅支持垂直方向.
	/// baidu.page.lazyLoadImage([options]);
	/// </summary>
	/// <summary>options: 
	/// <para>String options.className 延迟加载的IMG的className,如果不传入该值将延迟加载所有IMG.</para>  
	/// <para>Number options.preloadHeight 预加载的高度, 可见窗口下该高度内的图片将被加载.</para>  
	/// <para>String options.placeHolder 占位图url.</para>  
	/// <para>Function options.onlazyload 延迟加载回调函数,在实际加载时触发.</para>  
	/// </summary>
	/// <param type="Object" name="options"></param>

};baidu.object.merge = function(target, source, opt_options){
	/// <summary>
	/// 合并源对象的属性到目标对象。
	/// baidu.object.merge(target, source[, opt_options]);
	/// </summary>
	/// <summary>options: 
	/// <para>boolean overwrite optional 如果为真，源对象属性会覆盖掉目标对象上的已有属性，默认为假.</para>  
	/// <para>string whiteList optional 白名单，默认为空，如果存在，只有在这里的属性才会被处理.</para>  
	/// <para>boolean recursive optional 是否递归合并对象里面的object，默认为否.</para>  
	/// </summary>
	/// <param type="Function" name="target">目标对象.</param>
	/// <param type="Function" name="source">源对象.</param>
	/// <param type="Object" name="opt_options">optional merge选项.</param>
	/// <returns type="object">merge后的object.</returns>
};
