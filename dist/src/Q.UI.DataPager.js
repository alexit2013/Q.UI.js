//devin87@qq.com
//build:2015/10/12 11:19:21
!function(a){"use strict";function t(a,t,e){var n=[1];if(1==t)return n;var o,i=2;if(a>=t)o=t;else{var r=(a-5)/2;r+3>=e?o=a-2:e>t-r-3?(i=t-a+3,o=t-1):(i=e-~~r,o=i+a-5)}i>2&&n.push(0);for(var l=i;o>=l;l++)n.push(l);return t>a&&(t-1>o&&n.push(0),n.push(t)),n}function e(t){var e=this;if(e.ops=t,e.size=t.size||9,e.cache={},t.href==a){var n=t.boxNav;n&&$(n).on("click","li",function(){e.go($(this).attr("x"),!0)})}else t.cache=t.preload=!1;e.set(t.totalCount,t.pageSize||10).setData(t.data).go(t.page)}var n=Q.factory;n(e).extend({set:function(t,e){var n=this;return t!=a&&(n.totalCount=t),e!=a&&(n.pageSize=e),n.totalCount!=a&&(n.totalPage=Math.ceil(n.totalCount/n.pageSize)),n},setData:function(a){return a&&(this.data=a,this.set(a.length)),this},_load:function(t,e){var n=this,o=n.ops,i=n.onload,r=function(a){return i&&i.call(n,a),e&&e.call(n,a),n};if(!o.load){var l=n.pageSize,s=(t-1)*l;return r(n.data.slice(s,s+l))}var c=o.cache?n.cache[t]:a;return c?r(c):(o.load(t,function(a){c=a.data||[],o.cache&&(n.cache[t]=c),n.set(a.totalCount,a.pageSize),r(c)}),n)},load:function(a){return this._load(a,this.draw)},reload:function(){return this.load(this.page)},go:function(t,e){var n=this;return isNaN(t)?n:(t=+t,n.totalPage!=a&&t>n.totalPage&&(t=n.totalPage),1>t&&(t=1),t==n.page?n:(n.page=t,n.load(t),n.ops.load&&n.ops.preload&&n._load(t+1),e&&n.onclick&&n.onclick.call(n,t),n.onchange&&n.onchange.call(n,t),n))},drawNav:function(){var e=this,n=e.ops,o=n.boxNav;if(!o)return e;var i=e.totalCount,r=e.pageSize,l=e.totalPage,s=e.page,c=n.href,u=n.text||{},h=t(e.size,l,s);c!=a&&(c+=-1!=c.indexOf("?")?"&":"?");var p=function(a,t,e){return e||(e=a==s?"on":a?"":"skip"),"<li"+(e?' class="'+e+'"':"")+' x="'+a+'">'+(c?"<a"+(a?' href="'+c+"page="+a+'"':"")+">"+t+"</a>":t)+"</li>"},d=n.drawSize||function(a,t,e){return t+"/"+e},g='<div class="inline-block pager-bar'+(c?" pager-link":"")+'"><ul>'+p(Math.max(s-1,1),u.prev||"&lt;上一页","prev")+h.map(function(a){return p(a,a||"…")}).join("")+p(Math.min(s+1,l),u.next||"下一页&gt;","next")+"</ul></div>"+(n.showSize!==!1?'<div class="inline-block pager-count">'+d(e,'每页<span class="page-size">'+r+"</span>条",'共<span class="total-count">'+i+"</span>条数据")+"</div>":"");$(o).html(g)},draw:function(a){return this.drawNav(),this.ops.draw(a),this}}),Q.DataPager=e}();