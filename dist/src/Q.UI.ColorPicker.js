//devin87@qq.com
//build:2015/07/15 12:08:23
!function(t){"use strict";function r(r,o,e){o!=t&&(r.style.left=o+"px"),e!=t&&(r.style.top=e+"px")}function o(t){return"#"+("00000"+t.toString(16)).slice(-6)}function e(t,r,e){return o(65536*t+256*r+e)}function i(t){return"number"==typeof t?o(t):(t=t.replace(/\s+/g,""),b.test(t)?e(+RegExp.$1,+RegExp.$2,+RegExp.$3):t)}function l(t){if("number"==typeof t&&(t=o(t)),!g.test(t))return t;if(t=RegExp.$1,3==t.length){var r=t.charAt(0),e=t.charAt(1),i=t.charAt(2);t=r+r+e+e+i+i}return"rgb("+parseInt(t.substr(0,2),16)+","+parseInt(t.substr(2,2),16)+","+parseInt(t.substr(4,2),16)+")"}function n(t,r){var o=this;o.row=12,o.col=21,o.isColor=!0,o.set(t,r).init()}var s=window.document,a=Q.isFunc,f=Q.getFirst,c=Q.getNext,u=Q.getLast,d=Q.offset,v=Q.createEle,h=Q.factory,p=Q.event,C=-1e4,b=/^rgb\((\d+),(\d+),(\d+)\)$/i,g=/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,w=["#000000","#333333","#666666","#999999","#cccccc","#ffffff","#ff0000","#00ff00","#0000ff","#ffff00","#00ffff","#ff00ff"];h(n).extend({init:function(){var t=this,r='<div class="xp-title"><div class="xp-preview"></div><div class="xp-val"></div><div class="xp-type"><select><option value="Cube" selected="selected">立方色</option><option value="Series">连续色调</option><option value="Gray">灰度等级</option></select></div></div><div class="xp-table"><table>'+("<tr>"+"<td></td>".repeat(t.col)+"</tr>").repeat(t.row)+"</table></div>",o=v("div","x-picker",r),e=f(o),i=f(e),l=c(i),n=u(e),a=u(o),d=f(a);return Q.body.appendChild(o),t.box=o,t.table=d,t.boxPreview=i,t.boxValue=l,p.add(f(n),"change",function(){t["draw"+this.value+"Color"]()}),p.add(d,{mouseover:function(r){t.setPreview(this.style.backgroundColor)},click:function(r){var o=this.style.backgroundColor;t.fire(o).setColor(o).hide()}},"td"),p.add(o,"click",p.stop),p.add(s,"click",function(r){t.hide()}),t.drawCubeColor().hide()},mode:function(t,r){var o=this;return o.isColor=t,o.isBgColor=r,o},set:function(r,o){a(r)&&(o=r,r=t);var e=this;if(r){var i=d(r);e.show(i.left,i.top+i.height).hide(),e.target=r}return o&&(e.callback=o),e},fire:function(t){var r=this;return a(r.callback)&&r.callback.call(r,t),r},setColor:function(t){var r=this,o=r.target;return o&&(r.isColor&&(o.style.color=t),r.isBgColor&&(o.style.backgroundColor=t)),r},setPreview:function(t){var r=this;return r.boxPreview.style.backgroundColor=t,r.boxValue.innerHTML=i(t).toUpperCase(),r},fillColor:function(t,r,o){return this.table.rows[t].cells[r].style.backgroundColor=o,this},drawLeftColor:function(){for(var t=this,r=t.row,o=0;r>o;o++)t.fillColor(o,0,"#000").fillColor(o,1,w[o]).fillColor(o,2,"#000");return t},drawCubeColor:function(){var t,r=this,e=r.row,i=r.col,l=0,n=3342336;r.drawLeftColor();for(var s=0;e>s;s++){t=l=s>5?10027008+51*(s-6):0+51*s;for(var a=3;i>a;a++)r.fillColor(s,a,o(t)),t+=13056,(a-2)%6==0&&(l+=n,t=l)}return r},drawSeriesColor:function(){var t,r=this,e=r.row,i=r.col,l=13434879,n=6684672,s=1;r.drawLeftColor();for(var a=0;e>a;a++){t=l=a>5?16711935+13056*(a-6):13434879-13056*a,s=1;for(var f=3;i>f;f++)r.fillColor(a,f,o(t)),t-=51*s,(f-2)%6==0&&(s*=-1,l-=n,t=l-(s>0?0:255))}return r},drawGrayColor:function(){for(var t=this,r=t.row,e=t.col,i=16777215,l=0;r>l;l++)for(var n=0;e>n;n++)t.fillColor(l,n,o(i)),0>=i?i=0:i-=65793;return t},show:function(o,e){var i=this;return o==t?o=i.x:i.x=o,e==t?e=i.y:i.y=e,r(i.box,o,e),i},hide:function(){return r(this.box,C,C),this},isHidden:function(){var t=this,r=t.box,o=parseFloat(r.style.left),e=parseFloat(r.style.top);return o<=-r.offsetWidth||e<=-r.offsetHeight},toggle:function(){return this.isHidden()?this.show():this.hide()}}),Q.toHex=i,Q.toRGB=l,Q.ColorPicker=n}();