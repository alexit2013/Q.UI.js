//devin87@qq.com
//build:2015/09/18 17:09:19
!function(e){"use strict";function t(e){var t=j("div","x-mask");Q.body.appendChild(t),U&&(t.style.height=Y.getScrollHeight()+"px"),this.box=t,this.set(g(e||{},P))}function i(){return R?(R.show(),R):R=new t}function n(e,t){g(P,e,!0),t&&R&&R.reset(e)}function s(e){for(var t=[],i=e||c;i.top!=i;){var n=i.parent;t.push(n),i=n}return t}function o(e){var t=this;_(e,t),t._apis=[],t.start()}function r(e,t){return new o(function(){1!=e.nodeType?(t=e,e=t.ele):(t=t||{},t.ele=e);var i,n,s,o,r=this,a=t.range||{x:0,y:0},d=t.shadow!==!1,l=e.offsetWidth,u=e.offsetHeight,c=e;d&&(J||(J=j("div","x-drag-shadow"),Q.body.appendChild(J)),c=J),r.ops=t,r.doDown=function(t){i=t.clientX-e.offsetLeft,n=t.clientY-e.offsetTop,d&&Object.forEach(k(e),function(e,t){y(c,e,t)})},r.doMove=function(e){if(E(c),s){var t=e.clientX-i;a&&(t<a.x?t=a.x:a.w&&t+l>a.x+a.w&&(t=a.x+a.w-l)),c.style.left=t+"px"}if(o){var r=e.clientY-n;a&&(r<a.y?r=a.y:a.h&&r+u>a.y+a.h&&(r=a.y+a.h-u)),c.style.top=r+"px"}},d&&(r.doUp=function(){T(c)||(L(c),e.style.left=c.style.left,e.style.top=c.style.top)}),r.setLock=function(e,t){return s=e,o=t,r.pause(!e&&!t)},r.setRange=function(e,t,i,n){return a=f(e)?e:{x:e,y:t,w:i,h:n},r},r.setLock(t.isX!==!1,t.isY!==!1)})}function a(e){this._es=[],_(e,this)}function d(e){return e=e||{},new a(function(){var n=this,s=e.width,o=e.height,a=e.maxHeight,d=e.className;n.callback=e.callback;var l='<div class="x-head"><h2 class="x-title">'+(e.title||"弹出框")+'</h2><a class="x-close" title="点击关闭">X</a></div><div class="x-main"><div class="x-view">'+(e.html||"")+"</div></div>";U&&(l+='<iframe class="x-ie-fix" style="position: absolute;top:0;left:0;z-index:-1;" scrolling="no" frameborder="0"></iframe>');var u=j("div","x-box"+(d?" "+d:""),l);Q.body.appendChild(u);var c=e.zIndex||0;G>q&&(c=Math.max(c,G)),c&&(u.style.zIndex=c);var f=I(u),v=M(f);m(s)&&C(u,s),a&&(m(o)&&o>a&&(o=a),u.offsetHeight>a&&(o=a,W(u,"x-box-auto"))),m(o)&&o>50&&H(v,o-f.offsetHeight-20),f.offsetWidth<10&&C(f,u.offsetWidth),e.mask&&(n.mbox="new"==e.mask?new t:i());var p=e.close||"hide",g=n.getEventCallback(p);n.on(".x-close","click",p),e.esc!==!1&&n.bind(h,"keyup",function(e){27==e.keyCode&&g()});var w=e.time;x(w)&&b(g,w),n.box=u,_(e.init,n,u,e),e.drag!==!1&&(n.dr=r(u,{target:f,center:e.center!==!1,onCheck:function(e){var t=e.target;return t&&"x-close"!=t.className}})),$(".x-ie-fix",u).width(u.offsetWidth-2).height(u.offsetHeight-2),n.setTitle=function(e){$(".x-title",f).html(e)}})}function l(e){e.width||(e.width=320);var t=e.width;if(e.icon||e.iconHtml){var i='<div class="fl x-ico">'+(e.iconHtml||'<img alt="" src="'+e.icon+'"/>')+'</div><div class="fl x-dialog"'+(m(t)?' style="width:'+(t-60)+'px;"':"")+">"+e.html+'</div><div class="clear"></div>';e.html=i;var n=e.init;e.init=function(e,t){var i=this,s=i.get(".x-view").offsetWidth-i.get(".x-ico").offsetWidth;$(".x-dialog",e).width(s),_(n,i,e,t)}}else e.html='<div class="x-dialog">'+e.html+"</div>";return e.bottom&&(e.html+=e.bottom),e.close||(e.close="remove"),d(e)}function u(e,t){var i="inline-block w-button w-"+(t||"dark"),n='<div class="x-bottom"><div class="'+i+' x-submit">确定</div>'+(2==e?'<div class="'+i+' x-cancel">取消</div>':"")+"</div>";return n}var c=Q.G,h=c.document,f=Q.isObject,v=Q.isFunc,m=Q.isUNum,x=Q.isUInt,p=Q.def,_=Q.fire,b=Q.async,g=Q.extend,w=Q.getStyle,y=Q.setStyle,k=Q.offset,I=Q.getFirst,M=Q.getNext,C=Q.width,H=Q.height,j=Q.createEle,S=Q.removeEle,E=Q.show,L=Q.hide,T=Q.isHidden,z=Q.toggle,W=Q.addClass,N=Q.setCssIfNot,D=Q.setCenter,F=Q.query,X=Q.clearSelection,B=Q.factory,O=Q.ie,U=7>O,Y=Q.view,A=Q.event,P={color:"#999",opacity:.3};B(t).extend({opacity:function(e){return this.set({opacity:e})},set:function(t){var i=this.box;return Object.forEach(t,function(t,n){n!==e&&y(i,"color"!=t?t:"backgroundColor",n)}),this},show:function(){return this.removed&&(Q.body.appendChild(this.box),this.removed=!1),E(this.box),this},hide:function(){return L(this.box),this},remove:function(){return S(this.box),this.removed=!0,this}});var R,K,q=1e3,G=q;B(o).extend({start:function(){var e=this,i=e.ops,n=i.scope||c,o=n.document,r=i.ele,a=i.target||r,d=i.autoIndex!==!1,l=i.autoMask!==!1,u=1==r.nodeType?+w(r,"z-index"):0,h=e.doDown,f=e.doMove,m=e.doUp,x=i.onCheck,p=i.onDown,g=i.onMove,y=i.onUp,Q=s(n),k=!!r.setCapture,I=!k&&Q.length>0;u>=G&&(G=u+1),N(r,"position","absolute"),N(a,"cursor","move"),i.center&&(D(r),e._api_resize=A.add(n,"resize",function(){D(r)}));var M=function(i){if(!v(x)||x.call(e,i)!==!1){if(d){var s=+w(r,"z-index")||0;G>s&&(G++,r.style.zIndex=G)}e._unbind(),k?(r.setCapture(),e._bind(r,"losecapture",H)):e._bind(n,"blur",H),e._bind(o,{mousemove:C,mouseup:H}),I&&e._bind(Q,"mouseup",H),l&&(K||(K=new t({color:null,opacity:null,zIndex:999999})),U&&K.set({height:Y.getScrollHeight()})),b(X,20),_(h,e,i),_(p,e,i)}},C=function(t){e._pause||(_(f,e,t),_(g,e,t))},H=function(t){e._unbind(),k&&r.releaseCapture(),l&&K&&(K.remove(),K=null),X(),_(m,e,t),_(y,e,t)};return e._up=H,e._api=A.add(a,"mousedown",M),e},_bind:function(){this._apis.push(A.add.apply(A,arguments))},_unbind:function(){var e=this._apis;e.length>0&&(e.forEach(function(e){e.off()}),this._apis=[])},pause:function(e){var t=this;return t._pause=e,t._up&&t._up(),t},stop:function(){var e=this,t=e._api;return e._unbind(),t&&(t.off(),e._api=null),e},destroy:function(){var e=this,t=e._api_resize;return e.stop(),t&&(t.off(),e._api_resize=null),e}});var J;$.fn.extend({drag:function(e){return this.each(function(t,i){r(i,e)})}}),B(a).extend({find:function(e,t){return F(e,t||this.box)},get:function(e,t){return this.find(e,t)[0]},fire:function(){return _(this.callback,this,this.data),this},getEventCallback:function(e,t){var i=this;return"hide"==e?function(){i.data=t,i.hide()}:"remove"==e?function(){i.data=t,i.remove()}:e},bind:function(){return this._es.push(A.add.apply(A,arguments)),this},on:function(e,t,i,n){var s=this,o=s.find(e);return f(t)?(n=i,Object.forEach(t,function(e,t){s.bind(o,e,s.getEventCallback(t,n))})):s.bind(o,t,s.getEventCallback(i,n)),s},show:function(){var e=this;return e.onShow&&e.onShow(),E(e.box),e.mbox&&e.mbox.show(),e},hide:function(){var e=this;return L(e.box),e.mbox&&e.mbox.hide(),e.onHide&&e.onHide(),e.fire()},toggle:function(){return z(this.box),this},remove:function(){var e=this;if(e.box)return S(e.box),e.mbox&&e.mbox.remove(),e.dr&&e.dr.destroy(),e._es.forEach(function(e){e.off()}),e.box=e.mbox=e.dr=null,e.onRemove&&e.onRemove(),e.fire()}}),a.alias("remove","destroy");var V={createDialogBox:l,alert:function(e,t,i){var i=i||{};return v(t)?i.callback=t:"object"==typeof t&&(i=t),i.title||(i.title="提示信息"),i.iconHtml='<div class="ico x-alert"></div>',i.html=e,l(i)},confirm:function(e,t,i){var i=i||{};v(t)?i.callback=t:"object"==typeof t&&(i=t),i.title||(i.title="确认信息"),i.html=e,i.bottom||(i.bottom=u(2)),i.mask=i.mask!==!1;var n=l(i);return n.on(".x-submit","click","remove",!0).on(".x-cancel","click","remove",!1),n},prompt:function(e,t,i){var i=i||{};"object"==typeof t&&(i=t),i.title||(i.title="输入信息"),i.html='<div class="x-text">'+e+'</div><div class="x-input"><input type="'+(i.pwd?"password":"text")+'" /></div>',i.width||(i.width=320),i.bottom||(i.bottom=u(2));var n=l(i),s=n.get(".x-input>input");s.focus(),s.value=p(i.value,"");var o=function(){var e=_(t,s,s.value);e!==!1?n.remove():setInputError(s)};return n.on(s,"keyup",function(e){13==e.keyCode?o():setInputDefault(this)}),n.on(".x-submit","click",o).on(".x-cancel","click","remove"),n},bottom:u,showLoading:function(e){return e=e||{html:"正在加载数据,请稍后…"},e.iconHtml='<div class="ico x-loading"></div>',e.title||(e.title="加载数据"),l(e)}};g(Q,V),g(Q,{getMaskBox:i,maskSetup:n,setDrag:r,MaskBox:t,DragX:o,Box:a,WinBox:d})}(),function(e){"use strict";function t(t,i,n){i!=e&&(t.style.left=i+"px"),n!=e&&(t.style.top=n+"px")}function i(e,t){o(this,t),this.init(e)}var n=window.document,s=Q.fire,o=Q.extend,r=Q.makeArray,a=Q.getStyle,d=Q.offset,l=Q.hasClass,u=Q.addClass,c=Q.removeClass,h=Q.createEle,f=Q.factory,v=Q.event,m=-1e4;f(i).extend({init:function(e){var t=this;return t.draw(e),t.autoHide!==!1&&(t._e0=v.add(n,"mousedown",function(){t.hide()})),t},draw:function(t){var i=this;i._menus=[],i._items=[],i._map_menu={},i._map_item={},i.i=i.j=0,i._active=e;var n,o=i._tmp=[];for(i.drawMenu(t);n=o.shift();)i.drawMenu.apply(i,n);i._tmp=null,i.i=i.j=0;var r=i._getMenu(0).node;i.box=r;var a=[];return i._menus.forEach(function(e){e&&!e.linked&&a.push(e.node)}),i._e1&&i._e1.off(),i._e1=v.add(a,{click:function(e){var t=this,n=t._j;if(l(t,"x-disabled")||i._getSubMenu(n)&&!i.isFireAll)return void v.stop(e);var o=i._getItem(n);s(o.data.click,t,e,o),s(i.onclick,t,e,o),i.hide()},mouseenter:function(e){var t=this,n=t._i,o=t._j;i._hideSub(n,o),u(t,"x-on");var r=i._getItem(o);s(r.data.mouseover,t,e,r),s(i.onmouseover,t,e,r),l(t,"x-disabled")||i._showSub(n,o,t)},mouseleave:function(e){var t=this,n=t._i,o=t._j,r=i._getSubMenu(o);l(t,"x-disabled")||!r?c(t,"x-on"):0==n&&(i._active=o);var a=i._getItem(o);s(a.data.mouseout,t,e,a),s(i.onmouseout,t,e,a)}},".x-item"),i._e2&&i._e2.off(),i._e2=v.add(a,"mousedown",v.stop),i.hide()},drawMenu:function(t,i){var s=this,o=s._menus,r=s._items,a=s._map_menu,d=s._map_item,l=t.box,u=!!l,c=s.i++;if(!l){var f=t.className,l=h("div","x-panel"+(f?" "+f:""));l.style.width=(t.width||120)+"px"}if(o[c]={node:l,linked:u,j:i,data:t},i&&(a[i]=c),u)return s;for(var v=s.subMenu!==!1,m=0,x=t.items;m<x.length;m++){var p=x[m];if(p){var _=n.createElement("div"),b=s.j++;if(_._i=c,_._j=b,r[b]={node:_,i:c,j:b,data:p},p.id&&(d[p.id]=b),p.split)_.className="x-split";else{_.className="x-item"+(p.disabled?" x-disabled":""),_.x=p.x!=e?p.x:"";var g=p.group,w=v&&g&&(g.box||g.items&&g.items.length>0),y=p.ico,k=p.html||'<div class="x-icon">'+(y?/^<.+>$/.test(y)?y:'<img alt="" src="'+y+'">':"")+'</div><div class="x-text"'+(p.title?' title="'+p.title+'"':"")+">"+p.text+"</div>"+(w?'<div class="arrow"></div>':"");_.innerHTML=k,w&&s._tmp.push([g,b])}l.appendChild(_)}}return Q.body.appendChild(l),s},_getMenu:function(e){return this._menus[e]},_getSubMenu:function(t){var i=this._map_menu[t];return i!=e?this._getMenu(i):e},_getItem:function(e){return this._items[e]},getItem:function(t){var i=this._map_item[t];return i!=e?this._items[i]:e},setItemText:function(e,t){var i=this.getItem(e);if(i){i.data.text=t;var n=i.node.childNodes[1];n&&(n.innerHTML=t)}},processItems:function(e,t){var i=this;return r(e).forEach(function(e){var n=i.getItem(e);n&&t(n.node,n)}),i},_processItems:function(e,t,i){return this.processItems(e,function(e){t(e,i)})},enableItems:function(e){return this._processItems(e,c,"x-disabled")},disableItems:function(e){return this._processItems(e,u,"x-disabled")},showItems:function(e){return this._processItems(e,c,"hide")},hideItems:function(e){return this._processItems(e,u,"hide")},_setPos:function(i,n,s,o){var r=this,a=r.rangeX,d=r.rangeY,l=i.node,u=l.offsetWidth,c=l.offsetHeight,h=i.data||{},f=h.maxHeight;if(f){var v=Math.max(c,l.scrollHeight),m=v>f;l.style.height=m?f+"px":"auto",r.fixedWidth||(l.style.width=h.width+(m?17:0)+"px"),c=l.offsetHeight}return n==e&&(n=r.x||0),s==e&&(s=r.y||0),a&&n+u>a&&(n=a-u,o&&(n=n-o.offsetWidth+3)),d&&s+c>d&&(s=d-c-1),0>n&&(n=0),0>s&&(s=0),t(l,n,s),r.x=n,r.y=s,r},_showSub:function(e,t,i){var n=this,s=n._getMenu(e),o=n._getSubMenu(t);if(o){var r=s.node,l=o.node,u=d(i),c=+a(r,"zIndex"),h=+a(l,"zIndex");c>=h&&(l.style.zIndex=c+1),n._setPos(o,u.left+u.width-2,u.top,r)}return n.i=e,n.j=t,n},_inactive:function(e){var t=this._getItem(e);return t&&c(t.node,"x-on"),this},_hideSub:function(e,t){var i=this;if(e<=i.i&&t!=i.j){var n,s=i._menus;for(n=s.length-1;n>e;n--)i._hide(s[n]);if(e<i.i)for(n=i.i;n>e;n--){var o=i._getMenu(n);i._inactive(o.j)}}return e==i.i&&t!=i.j&&i._getSubMenu(i.j)&&i._inactive(i.j),i},_hide:function(e){if(e){var i=e.node;i.style.left!=m&&t(i,m,m)}return this},show:function(e,t){return this.hide()._setPos(this._menus[0],e,t)},hide:function(){var t=this;return t._menus.forEach(function(e){t._hide(e)}),t._active!=e&&(t._inactive(t._active),t._active=e),t},isHidden:function(){var e=this,t=e.box,i=parseFloat(t.style.left),n=parseFloat(t.style.top);return i<=-t.offsetWidth||n<=-t.offsetHeight},toggle:function(){return this.isHidden()?this.show():this.hide()}}),Q.ContextMenu=i}(),function(e){"use strict";function t(e){e=e||{};var t=this;t.box=e.box,t.items=e.items||[],t.multiple=e.multiple,t.value=e.value,t.index=e.index||0,t.ops=e}var i=window.document,n=Q.def,s=Q.fire,o=Q.isObject,r=Q.getFirst,a=Q.getLast,d=Q.width,l=d,u=Q.hasClass,c=Q.addClass,h=Q.removeClass,f=Q.createEle,v=Q.factory,m=Q.ie,x=Q.event;v(t).extend({init:function(){var e=this,t=e.ops,n=e.box,o=!e.multiple,d=(o?'<div class="x-sel-tag"><div class="x-sel-text"></div><div class="x-sel-arrow"><div class="arrow arrow-down"></div></div></div>':"")+'<div class="x-panel x-sel-list"></div>';c(n,"x-sel"),n.innerHTML=d;var h,f,v,p=a(n);l(p,t.width||n.offsetWidth-2),o&&(h=r(n),f=r(h),v=a(h),e.elText=f,e.elArrow=v),e.elList=p;var _;return o?(x.add(i,"mousedown",function(){e.hide()}),x.add(n,"mousedown",function(t){e.toggle(),x.stop(t)}),_={mousedown:x.stop,mouseup:function(t){var i=this.x,n=e.items[i];e.hide(),s(e.onclick,e,n,i),i!=e.index&&e.select(i)},mouseenter:function(){var t=this;u(t,"x-disabled")||e.active(t.x)}}):(e.selectedItems=[],e.seletedMap={},_={mousedown:function(t){var i=this;if(!u(i,"x-disabled")){var n=this.x,s=e.selectedItems[0],o=t.shiftKey,r=t.ctrlKey;if((o||!r)&&e.clearSelect(),o){var a=s?s.index:n,d=n;a>d&&(d=a,a=n);for(var l=a;d>=l;l++)e.active(l)}else r&&e.seletedMap[n]?e.inactive(n):e.select(n)}}},10>m&&(_.selectstart=x.stop)),x.add(p,_,".x-item"),e.draw()},draw:function(){var e=this,t=e.ops,i=e.items,n=e.elList,s=t.hasTitle,o=t.maxHeight,r={};if(n.innerHTML="",i.forEach(function(e,t){e.index=t,r[e.value]=e;var i=e.text||"",o=f("div","x-item"+(e.group?" x-sel-group":e.disabled?" x-disabled":""),i);s&&(o.title=e.title||i.toText()),o.x=t,e.node=o,n.appendChild(o)}),e.map=r,o){var a=n.offsetHeight;a>o&&(n.style.height=o)}var d=e.value,l=e.index;if(d){var u=e.find(d);u&&(l=u.index)}return e.select(l),e.multiple?e:e.hide()},add:function(e,t,i){return this.items.push(o(e)?e:{text:e,value:t,title:i}),this},find:function(e){return this.map[e]},clearSelect:function(){var e=this,t=function(e){e.node&&h(e.node,"selected")};return e.multiple?(e.selectedItems.forEach(t),e.selectedItems=[],e.seletedMap={}):t({node:e._el}),e},active:function(e){var t=this,i=t.items[e];if(!i)return t;var n,s=i.node;return t.multiple?i.disabled||t.seletedMap[e]||(t.selectedItems.push(i),t.seletedMap[e]=!0,n=!0):(t.clearSelect(),n=!0,t._el=s),n&&c(s,"selected"),this},inactive:function(t){var i=this,n=i.items[t];return i.multiple&&(i.selectedItems=i.selectedItems.filter(function(e){return e.index!=t}),i.seletedMap[t]=e),h(n.node,"selected"),i},select:function(e,t){var i=this,o=i.items,r=o[e];return r?(i.text=n(r.text,""),i.value=n(r.value,""),i.elText&&(i.elText.innerHTML=i.text),i.active(e),t||e==i.index||s(i.onchange,i,r,e),i.index=e,i):i},show:function(){return this.elList.style.display="",this.select(this.index)},hide:function(){return this.elList.style.display="none",this},toggle:function(){return"none"==this.elList.style.display?this.show():this.hide()}}),Q.DropdownList=t}();