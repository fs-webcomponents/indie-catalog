(function(){if("undefined"!==typeof self&&self.Prism&&self.document&&document.createElement){var a={javascript:"clike",actionscript:"javascript",arduino:"cpp",aspnet:"markup",bison:"c",c:"clike",csharp:"clike",cpp:"c",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",django:"markup",fsharp:"clike",flow:"javascript",glsl:"clike",go:"clike",groovy:"clike",haml:"ruby",handlebars:"markup",haxe:"clike",java:"clike",jolie:"clike",kotlin:"clike",less:"css",markdown:"markup",n4js:"javascript",nginx:"clike",objectivec:"c",opencl:"cpp",parser:"markup",php:"clike","php-extras":"php",processing:"clike",protobuf:"clike",pug:"javascript",qore:"clike",jsx:["markup","javascript"],reason:"clike",ruby:"clike",sass:"css",scss:"css",scala:"java",smarty:"markup",swift:"clike",textile:"markup",twig:"markup",typescript:"javascript",vbnet:"basic",wiki:"markup"},b={},d=Prism.plugins.autoloader={languages_path:"components/",use_minified:!0},e=function(o,p,q){var r=document.createElement("script");r.src=o,r.async=!0,r.onload=function(){document.body.removeChild(r),p&&p()},r.onerror=function(){document.body.removeChild(r),q&&q()},document.body.appendChild(r)},g=function(o){return d.languages_path+"prism-"+o+(d.use_minified?".min":"")+".js"},h=function(o,p){var q=b[o];q||(q=b[o]={});var r=p.getAttribute("data-dependencies");!r&&p.parentNode&&"pre"===p.parentNode.tagName.toLowerCase()&&(r=p.parentNode.getAttribute("data-dependencies")),r=r?r.split(/\s*,\s*/g):[],j(r,function(){k(o,function(){Prism.highlightElement(p)})})},j=function(o,p,q){"string"===typeof o&&(o=[o]);var r=0,t=o.length,u=function(){r<t?k(o[r],function(){r++,u()},function(){q&&q(o[r])}):r===t&&p&&p(o)};u()},k=function(o,p,q){var r=function(){var u=!1;0<=o.indexOf("!")&&(u=!0,o=o.replace("!",""));var v=b[o];if(v||(v=b[o]={}),p&&(!v.success_callbacks&&(v.success_callbacks=[]),v.success_callbacks.push(p)),q&&(!v.error_callbacks&&(v.error_callbacks=[]),v.error_callbacks.push(q)),!u&&Prism.languages[o])m(o);else if(!u&&v.error)n(o);else if(u||!v.loading){v.loading=!0;var w=g(o);e(w,function(){v.loading=!1,m(o)},function(){v.loading=!1,v.error=!0,n(o)})}},t=a[o];t&&t.length?j(t,r):r()},m=function(o){b[o]&&b[o].success_callbacks&&b[o].success_callbacks.length&&b[o].success_callbacks.forEach(function(p){p(o)})},n=function(o){b[o]&&b[o].error_callbacks&&b[o].error_callbacks.length&&b[o].error_callbacks.forEach(function(p){p(o)})};Prism.hooks.add("complete",function(o){o.element&&o.language&&!o.grammar&&o.language!=="none"&&h(o.language,o.element)})}})();