var _self='undefined'===typeof window?'undefined'!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{}:window,Prism=function(){var a=/\blang(?:uage)?-(\w+)\b/i,b=0,c=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(f){return f instanceof d?new d(f.type,c.util.encode(f.content),f.alias):'Array'===c.util.type(f)?f.map(c.util.encode):f.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\u00a0/g,' ')},type:function(f){return Object.prototype.toString.call(f).match(/\[object (\w+)\]/)[1]},objId:function(f){return f.__id||Object.defineProperty(f,'__id',{value:++b}),f.__id},clone:function(f){var g=c.util.type(f);switch(g){case'Object':var h={};for(var l in f)f.hasOwnProperty(l)&&(h[l]=c.util.clone(f[l]));return h;case'Array':return f.map(function(m){return c.util.clone(m)});}return f}},languages:{extend:function(f,g){var h=c.util.clone(c.languages[f]);for(var l in g)h[l]=g[l];return h},insertBefore:function(f,g,h,l){l=l||c.languages;var m=l[f];if(2==arguments.length){for(var n in h=arguments[1],h)h.hasOwnProperty(n)&&(m[n]=h[n]);return m}var q={};for(var r in m)if(m.hasOwnProperty(r)){if(r==g)for(var n in h)h.hasOwnProperty(n)&&(q[n]=h[n]);q[r]=m[r]}return c.languages.DFS(c.languages,function(s,t){t===l[f]&&s!=f&&(this[s]=q)}),l[f]=q},DFS:function(f,g,h,l){for(var m in l=l||{},f)f.hasOwnProperty(m)&&(g.call(f,m,f[m],h||m),'Object'!==c.util.type(f[m])||l[c.util.objId(f[m])]?'Array'===c.util.type(f[m])&&!l[c.util.objId(f[m])]&&(l[c.util.objId(f[m])]=!0,c.languages.DFS(f[m],g,m,l)):(l[c.util.objId(f[m])]=!0,c.languages.DFS(f[m],g,null,l)))}},plugins:{},highlightAll:function(f,g){c.highlightAllUnder(document,f,g)},highlightAllUnder:function(f,g,h){var l={callback:h,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run('before-highlightall',l);for(var q,m=l.elements||f.querySelectorAll(l.selector),n=0;q=m[n++];)c.highlightElement(q,!0===g,l.callback)},highlightElement:function(f,g,h){for(var l,m,n=f;n&&!a.test(n.className);)n=n.parentNode;n&&(l=(n.className.match(a)||[,''])[1].toLowerCase(),m=c.languages[l]),f.className=f.className.replace(a,'').replace(/\s+/g,' ')+' language-'+l,f.parentNode&&(n=f.parentNode,/pre/i.test(n.nodeName)&&(n.className=n.className.replace(a,'').replace(/\s+/g,' ')+' language-'+l));var q=f.textContent,r={element:f,language:l,grammar:m,code:q};if(c.hooks.run('before-sanity-check',r),!r.code||!r.grammar)return r.code&&(c.hooks.run('before-highlight',r),r.element.textContent=r.code,c.hooks.run('after-highlight',r)),void c.hooks.run('complete',r);if(c.hooks.run('before-highlight',r),g&&_self.Worker){var s=new Worker(c.filename);s.onmessage=function(t){r.highlightedCode=t.data,c.hooks.run('before-insert',r),r.element.innerHTML=r.highlightedCode,h&&h.call(r.element),c.hooks.run('after-highlight',r),c.hooks.run('complete',r)},s.postMessage(JSON.stringify({language:r.language,code:r.code,immediateClose:!0}))}else r.highlightedCode=c.highlight(r.code,r.grammar,r.language),c.hooks.run('before-insert',r),r.element.innerHTML=r.highlightedCode,h&&h.call(f),c.hooks.run('after-highlight',r),c.hooks.run('complete',r)},highlight:function(f,g,h){var l=c.tokenize(f,g);return d.stringify(c.util.encode(l),h)},matchGrammar:function(f,g,h,l,m,n,q){var r=c.Token;for(var s in h)if(h.hasOwnProperty(s)&&h[s]){if(s==q)return;var t=h[s];t='Array'===c.util.type(t)?t:[t];for(var u=0;u<t.length;++u){var w=t[u],x=w.inside,y=!!w.lookbehind,z=!!w.greedy,A=0,B=w.alias;if(z&&!w.pattern.global){var C=w.pattern.toString().match(/[imuy]*$/)[0];w.pattern=RegExp(w.pattern.source,C+'g')}w=w.pattern||w;for(var F,D=l,E=m;D<g.length;E+=g[D].length,++D){if(F=g[D],g.length>f.length)return;if(!(F instanceof r)){w.lastIndex=0;var G=w.exec(F),H=1;if(!G&&z&&D!=g.length-1){if(w.lastIndex=E,G=w.exec(f),!G)break;for(var I=G.index+(y?G[1].length:0),J=G.index+G[0].length,K=D,L=E,M=g.length;K<M&&(L<J||!g[K].type&&!g[K-1].greedy);++K)L+=g[K].length,I>=L&&(++D,E=L);if(g[D]instanceof r||g[K-1].greedy)continue;H=K-D,F=f.slice(E,L),G.index-=E}if(!G){if(n)break;continue}y&&(A=G[1].length);var I=G.index+A,G=G[0].slice(A),J=I+G.length,N=F.slice(0,I),O=F.slice(J),P=[D,H];N&&(++D,E+=N.length,P.push(N));var Q=new r(s,x?c.tokenize(G,x):G,B,G,z);if(P.push(Q),O&&P.push(O),Array.prototype.splice.apply(g,P),1!=H&&c.matchGrammar(f,g,h,D,E,!0,s),n)break}}}}},tokenize:function(f,g){var l=[f],m=g.rest;if(m){for(var n in m)g[n]=m[n];delete g.rest}return c.matchGrammar(f,l,g,0,0,!1),l},hooks:{all:{},add:function(f,g){var h=c.hooks.all;h[f]=h[f]||[],h[f].push(g)},run:function(f,g){var h=c.hooks.all[f];if(h&&h.length)for(var m,l=0;m=h[l++];)m(g)}}},d=c.Token=function(f,g,h,l,m){this.type=f,this.content=g,this.alias=h,this.length=0|(l||'').length,this.greedy=!!m};if(d.stringify=function(f,g,h){if('string'==typeof f)return f;if('Array'===c.util.type(f))return f.map(function(q){return d.stringify(q,g,f)}).join('');var l={type:f.type,content:d.stringify(f.content,g,h),tag:'span',classes:['token',f.type],attributes:{},language:g,parent:h};if(f.alias){var m='Array'===c.util.type(f.alias)?f.alias:[f.alias];Array.prototype.push.apply(l.classes,m)}c.hooks.run('wrap',l);var n=Object.keys(l.attributes).map(function(q){return q+'="'+(l.attributes[q]||'').replace(/"/g,'&quot;')+'"'}).join(' ');return'<'+l.tag+' class="'+l.classes.join(' ')+'"'+(n?' '+n:'')+'>'+l.content+'</'+l.tag+'>'},!_self.document)return _self.addEventListener?(c.disableWorkerMessageHandler||_self.addEventListener('message',function(f){var g=JSON.parse(f.data),h=g.language,l=g.code,m=g.immediateClose;_self.postMessage(c.highlight(l,c.languages[h],h)),m&&_self.close()},!1),_self.Prism):_self.Prism;var e=document.currentScript||[].slice.call(document.getElementsByTagName('script')).pop();return e&&(c.filename=e.src,!c.manual&&!e.hasAttribute('data-manual')&&('loading'===document.readyState?document.addEventListener('DOMContentLoaded',c.highlightAll):window.requestAnimationFrame?window.requestAnimationFrame(c.highlightAll):window.setTimeout(c.highlightAll,16))),_self.Prism}();'undefined'!==typeof module&&module.exports&&(module.exports=Prism),'undefined'!==typeof global&&(global.Prism=Prism);