//devin87@qq.com
//build:2016/03/09 13:36:08
!function(e){"use strict";function t(e){e=e||{};var t=this;t.box=e.box,t.items=e.items||[],t.multiple=e.multiple,t.value=e.value,t.index=e.index||0,t.ops=e}var i=window.document,s=Q.def,l=Q.fire,n=Q.isObject,d=Q.getFirst,a=Q.getLast,r=Q.width,o=r,c=Q.hasClass,u=Q.addClass,v=Q.removeClass,h=Q.createEle,x=Q.factory,f=Q.ie,m=Q.event;x(t).extend({init:function(){var e=this,t=e.ops,s=e.box,n=!e.multiple,r=(n?'<div class="x-sel-tag"><div class="x-sel-text"></div><div class="x-sel-arrow"><div class="arrow arrow-down"></div></div></div>':"")+'<div class="x-panel x-sel-list'+(n?"":" x-sel-multiple")+'"></div>';u(s,"x-sel"),s.innerHTML=r;var v,h,x,p=a(s);o(p,t.width||s.offsetWidth-2),n&&(v=d(s),h=d(v),x=a(v),e.elText=h,e.elArrow=x),e.elList=p;var w;return n?(t.autoHide!==!1&&m.add(i,"mousedown",function(){e.hide()}),m.add(s,"mousedown",function(t){return e.toggle(),!1}),w={mousedown:m.stop,mouseup:function(t){var i=this.x,s=e.items[i];l(e.onclick,e,s,i),s.disabled||(e.hide(),i!=e.index&&e.select(i))},mouseenter:function(){var t=this.x,i=e.items[t];i.disabled||e.active(t)}}):(e.selectedItems=[],e.seletedMap={},w={mousedown:function(t){var i=this;if(!c(i,"x-disabled")){var s=this.x,l=e.selectedItems[0],n=t.shiftKey,d=t.ctrlKey;if(!n&&d||e.clearSelect(),n){var a=l?l.index:s,r=s;a>r&&(r=a,a=s);for(var o=a;r>=o;o++)e.active(o)}else d&&e.seletedMap[s]?e.inactive(s):e.select(s)}}},10>f&&(w.selectstart=m.stop)),m.add(p,w,".x-item"),e.draw()},draw:function(){var e=this,t=e.ops,i=e.items,s=e.elList,l=t.hasTitle,n=t.maxHeight,d={};if(s.innerHTML="",i.forEach(function(e,t){e.index=t,d[e.value]=e;var i=e.text||"",n=h("div","x-item"+(e.group?" x-sel-group":e.disabled?" x-disabled":""),i);l&&(n.title=e.title||i.toText()),n.x=t,e.node=n,s.appendChild(n)}),e.map=d,n){var a=s.offsetHeight;a>n&&(s.style.height=n)}var r=e.value,o=e.index;if(r){var c=e.find(r);c&&(o=c.index)}return e.select(o),e.multiple?e:e.hide()},add:function(e,t,i){return this.items.push(n(e)?e:{text:e,value:t,title:i}),this},find:function(e){return this.map[e]},clearSelect:function(){var e=this,t=function(e){e.node&&v(e.node,"selected")};return e.multiple?(e.selectedItems.forEach(t),e.selectedItems=[],e.seletedMap={}):t({node:e._el}),e},active:function(e){var t=this,i=t.items[e];if(!i)return t;var s,l=i.node;return t.multiple?i.disabled||t.seletedMap[e]||(t.selectedItems.push(i),t.seletedMap[e]=!0,s=!0):(t.clearSelect(),s=!0,t._el=l),s&&u(l,"selected"),this},inactive:function(t){var i=this,s=i.items[t];return i.multiple&&(i.selectedItems=i.selectedItems.filter(function(e){return e.index!=t}),i.seletedMap[t]=e),v(s.node,"selected"),i},select:function(e,t){var i=this,n=i.items,d=n[e];return d?(i.text=s(d.text,""),i.value=s(d.value,""),i.elText&&(i.elText.innerHTML=i.text),i.active(e),t||e==i.index||l(i.onchange,i,d,e),i.index=e,i):i},show:function(){return this.elList.style.display="",this.select(this.index)},hide:function(){return this.elList.style.display="none",this},toggle:function(){return"none"==this.elList.style.display?this.show():this.hide()}}),Q.DropdownList=t}();