//devin87@qq.com
//build:2016/03/08 17:17:56
!function(){"use strict";function t(t){t=t||{};var n=this,a=t.context,s=t.tabs||o(".tabTitle>li",a),d=t.conts||o(".tabCont>.turn-box",a);n.tabs=s,n.conts=d,n.map_loaded={},n.map_index={},s.forEach(function(a,o){"1"==a.getAttribute("x-def")&&(t.index=o);var s=e(a);if(s){var d=s.href.split("#")[1]||"",r=i(d).nav;r&&(n.map_index[r]=o)}}),s.forEach(function(t,a){$(t).click(function(){n.showTab(a)})}),$(d).hide(),setTimeout(function(){var a=i().nav.slice(1)||t.hash,e=n.map_index[a];void 0==e&&(e=t.index||0),n.showTab(e)},20)}function n(n){return new t(n)}var a=Q.async,e=Q.getFirst,i=Q.parseHash,o=$.find;Q.factory(t).extend({getTab:function(t){return this.tabs[t]},getCont:function(t){return this.conts[t]},hasLoaded:function(t){return!!this.map_loaded[t]},showTab:function(t){var n=this,e=n.index;if(t!==e){if(void 0!==e){var i=n.getTab(e),o=n.getCont(e);$(i).removeClass("on"),$(o).hide()}var s=n.getTab(t),d=n.getCont(t),r=n.map_loaded;$(s).addClass("on"),$(d).show(),n.index=t,a(window.onTabChange,200,{index:t,tab:s,cont:d,loaded:r[t]}),r[t]||(r[t]=!0)}}}),Q.Tabs=t,Q.setTabs=n}();