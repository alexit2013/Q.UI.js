//devin87@qq.com
//build:2017/03/08 17:21:16
!function(a){"use strict";function t(a,t,e){var n=[1];if(1==t)return n;var i,o=2;if(a>=t)i=t;else{var r=(a-5)/2;r+3>=e?i=a-2:e>t-r-3?(o=t-a+3,i=t-1):(o=e-~~r,i=o+a-5)}o>2&&n.push(0);for(var l=o;i>=l;l++)n.push(l);return t>a&&(t-1>i&&n.push(0),n.push(t)),n}function e(t){var e=this;if(e.ops=t,e.size=t.size||9,e.cache={},t.href==a){var n=t.boxNav;n&&$(n).on("click","li",function(){e.go($(this).attr("x"),!0),e.onclick&&e.onclick.call(e,e.page)})}else t.cache=t.preload=!1;e.set(t.totalCount,t.pageSize||10).setData(t.data).go(t.page)}var n=Q.factory;n(e).extend({set:function(t,e){var n=this;return t!=a&&(n.totalCount=t),e!=a&&(n.pageSize=e),n.totalCount!=a&&(n.totalPage=Math.ceil(n.totalCount/n.pageSize)),n},setData:function(a){return a&&(this.data=a,this.set(a.length)),this},_load:function(t,e){var n=this,i=n.ops,o=n.onload;n.page=t;var r=function(a){return o&&o.call(n,a),e&&e.call(n,a),n};if(!i.load){var l=n.pageSize,s=(t-1)*l;return r(n.data.slice(s,s+l))}var c=i.cache?n.cache[t]:a;return c?r(c):(i.load(t,function(a){c=a.data||[],i.cache&&(n.cache[t]=c),n.set(a.totalCount,a.pageSize),r(c)}),n)},load:function(a){return this._load(a,this.draw)},reload:function(a){return this.load(a||this.page)},go:function(t,e){var n=this;return isNaN(t)?n:(t=+t,n.totalPage!=a&&t>n.totalPage&&(t=n.totalPage),1>t&&(t=1),t!=n.page||e?(n.load(t),n.ops.load&&n.ops.preload&&n._load(t+1),n.onchange&&n.onchange.call(n,t),n):n)},drawNav:function(){var e=this,n=e.ops,i=n.boxNav;if(!i)return e;var o=e.totalCount,r=e.pageSize,l=e.totalPage,s=e.page,c=n.href,u=n.text||{},h=t(e.size,l,s);c!=a&&(c+=-1!=c.indexOf("?")?"&":"?");var p=function(a,t,e){return e||(e=a==s?"on":a?"":"skip"),"<li"+(e?' class="'+e+'"':"")+' x="'+a+'">'+(c?"<a"+(a?' href="'+c+"page="+a+'"':"")+">"+t+"</a>":t)+"</li>"},g=n.drawSize||function(a,t,e){return t+"/"+e},d='<div class="inline-block pager-bar'+(c?" pager-link":"")+'"><ul>'+p(Math.max(s-1,1),u.prev||"&lt;上一页","prev")+h.map(function(a){return p(a,a||"…")}).join("")+p(Math.min(s+1,l),u.next||"下一页&gt;","next")+"</ul></div>"+(n.showSize!==!1?'<div class="inline-block pager-count">'+g(e,'每页<span class="page-size">'+r+"</span>条",'共<span class="total-count">'+o+"</span>条数据")+"</div>":"");$(i).html(d)},draw:function(a){return this.drawNav(),this.ops.draw.call(this,a),this}}),Q.DataPager=e}();