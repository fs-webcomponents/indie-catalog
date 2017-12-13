(function(){function a(s){this.tokens=[],this.tokens.links={},this.options=s||p.defaults,this.rules=q.normal,this.options.gfm&&(this.options.tables?this.rules=q.tables:this.rules=q.gfm)}function c(s,t){if(this.options=t||p.defaults,this.links=s,this.rules=r.normal,this.renderer=this.options.renderer||new d,this.renderer.options=this.options,!this.links)throw new Error('Tokens array requires a `links` property.');this.options.gfm?this.options.breaks?this.rules=r.breaks:this.rules=r.gfm:this.options.pedantic&&(this.rules=r.pedantic)}function d(s){this.options=s||{}}function f(s){this.tokens=[],this.token=null,this.options=s||p.defaults,this.options.renderer=this.options.renderer||new d,this.renderer=this.options.renderer,this.renderer.options=this.options}function g(s,t){return s.replace(t?/&/g:/&(?!#?\w+;)/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')}function h(s){return s.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(t,u){return u=u.toLowerCase(),'colon'===u?':':'#'===u.charAt(0)?'x'===u.charAt(1)?String.fromCharCode(parseInt(u.substring(2),16)):String.fromCharCode(+u.substring(1)):''})}function k(s,t){return s=s.source,t=t||'',function u(v,w){return v?(w=w.source||w,w=w.replace(/(^|[^\[])\^/g,'$1'),s=s.replace(v,w),u):new RegExp(s,t)}}function m(){}function o(s){for(var u,v,t=1;t<arguments.length;t++)for(v in u=arguments[t],u)Object.prototype.hasOwnProperty.call(u,v)&&(s[v]=u[v]);return s}function p(s,t,u){if(u||'function'===typeof t){u||(u=t,t=null),t=o({},p.defaults,t||{});var w,x,v=t.highlight,y=0;try{w=a.lex(s,t)}catch(A){return u(A)}x=w.length;var z=function(A){if(A)return t.highlight=v,u(A);var B;try{B=f.parse(w,t)}catch(C){A=C}return t.highlight=v,A?u(A):u(null,B)};if(!v||3>v.length)return z();if(delete t.highlight,!x)return z();for(;y<w.length;y++)(function(A){return'code'===A.type?v(A.text,A.lang,function(B,C){return B?z(B):null==C||C===A.text?--x||z():void(A.text=C,A.escaped=!0,--x||z())}):--x||z()})(w[y]);return}try{return t&&(t=o({},p.defaults,t)),f.parse(a.lex(s,t),t)}catch(A){if(A.message+='\nPlease report this to https://github.com/chjj/marked.',(t||p.defaults).silent)return'<p>An error occured:</p><pre>'+g(A.message+'',!0)+'</pre>';throw A}}var q={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:m,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:m,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:m,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};q.bullet=/(?:[*+-]|\d+\.)/,q.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,q.item=k(q.item,'gm')(/bull/g,q.bullet)(),q.list=k(q.list)(/bull/g,q.bullet)('hr','\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')('def','\\n+(?='+q.def.source+')')(),q.blockquote=k(q.blockquote)('def',q.def)(),q._tag='(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b',q.html=k(q.html)('comment',/<!--[\s\S]*?-->/)('closed',/<(tag)[\s\S]+?<\/\1>/)('closing',/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,q._tag)(),q.paragraph=k(q.paragraph)('hr',q.hr)('heading',q.heading)('lheading',q.lheading)('blockquote',q.blockquote)('tag','<'+q._tag)('def',q.def)(),q.normal=o({},q),q.gfm=o({},q.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),q.gfm.paragraph=k(q.paragraph)('(?!','(?!'+q.gfm.fences.source.replace('\\1','\\2')+'|'+q.list.source.replace('\\1','\\3')+'|')(),q.tables=o({},q.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),a.rules=q,a.lex=function(s,t){var u=new a(t);return u.lex(s)},a.prototype.lex=function(s){return s=s.replace(/\r\n|\r/g,'\n').replace(/\t/g,'    ').replace(/\u00a0/g,' ').replace(/\u2424/g,'\n'),this.token(s,!0)},a.prototype.token=function(s,t,u){for(var v,w,x,y,z,A,B,C,D,s=s.replace(/^ +$/gm,'');s;){if((x=this.rules.newline.exec(s))&&(s=s.substring(x[0].length),1<x[0].length&&this.tokens.push({type:'space'})),x=this.rules.code.exec(s)){s=s.substring(x[0].length),x=x[0].replace(/^ {4}/gm,''),this.tokens.push({type:'code',text:this.options.pedantic?x:x.replace(/\n+$/,'')});continue}if(x=this.rules.fences.exec(s)){s=s.substring(x[0].length),this.tokens.push({type:'code',lang:x[2],text:x[3]||''});continue}if(x=this.rules.heading.exec(s)){s=s.substring(x[0].length),this.tokens.push({type:'heading',depth:x[1].length,text:x[2]});continue}if(t&&(x=this.rules.nptable.exec(s))){for(s=s.substring(x[0].length),A={type:'table',header:x[1].replace(/^ *| *\| *$/g,'').split(/ *\| */),align:x[2].replace(/^ *|\| *$/g,'').split(/ *\| */),cells:x[3].replace(/\n$/,'').split('\n')},C=0;C<A.align.length;C++)A.align[C]=/^ *-+: *$/.test(A.align[C])?'right':/^ *:-+: *$/.test(A.align[C])?'center':/^ *:-+ *$/.test(A.align[C])?'left':null;for(C=0;C<A.cells.length;C++)A.cells[C]=A.cells[C].split(/ *\| */);this.tokens.push(A);continue}if(x=this.rules.lheading.exec(s)){s=s.substring(x[0].length),this.tokens.push({type:'heading',depth:'='===x[2]?1:2,text:x[1]});continue}if(x=this.rules.hr.exec(s)){s=s.substring(x[0].length),this.tokens.push({type:'hr'});continue}if(x=this.rules.blockquote.exec(s)){s=s.substring(x[0].length),this.tokens.push({type:'blockquote_start'}),x=x[0].replace(/^ *> ?/gm,''),this.token(x,t,!0),this.tokens.push({type:'blockquote_end'});continue}if(x=this.rules.list.exec(s)){for(s=s.substring(x[0].length),y=x[2],this.tokens.push({type:'list_start',ordered:1<y.length}),x=x[0].match(this.rules.item),v=!1,D=x.length,C=0;C<D;C++)A=x[C],B=A.length,A=A.replace(/^ *([*+-]|\d+\.) +/,''),~A.indexOf('\n ')&&(B-=A.length,A=this.options.pedantic?A.replace(/^ {1,4}/gm,''):A.replace(new RegExp('^ {1,'+B+'}','gm'),'')),this.options.smartLists&&C!==D-1&&(z=q.bullet.exec(x[C+1])[0],y!==z&&!(1<y.length&&1<z.length)&&(s=x.slice(C+1).join('\n')+s,C=D-1)),w=v||/\n\n(?!\s*$)/.test(A),C!==D-1&&(v='\n'===A.charAt(A.length-1),!w&&(w=v)),this.tokens.push({type:w?'loose_item_start':'list_item_start'}),this.token(A,!1,u),this.tokens.push({type:'list_item_end'});this.tokens.push({type:'list_end'});continue}if(x=this.rules.html.exec(s)){s=s.substring(x[0].length),this.tokens.push({type:this.options.sanitize?'paragraph':'html',pre:!this.options.sanitizer&&('pre'===x[1]||'script'===x[1]||'style'===x[1]),text:x[0]});continue}if(!u&&t&&(x=this.rules.def.exec(s))){s=s.substring(x[0].length),this.tokens.links[x[1].toLowerCase()]={href:x[2],title:x[3]};continue}if(t&&(x=this.rules.table.exec(s))){for(s=s.substring(x[0].length),A={type:'table',header:x[1].replace(/^ *| *\| *$/g,'').split(/ *\| */),align:x[2].replace(/^ *|\| *$/g,'').split(/ *\| */),cells:x[3].replace(/(?: *\| *)?\n$/,'').split('\n')},C=0;C<A.align.length;C++)A.align[C]=/^ *-+: *$/.test(A.align[C])?'right':/^ *:-+: *$/.test(A.align[C])?'center':/^ *:-+ *$/.test(A.align[C])?'left':null;for(C=0;C<A.cells.length;C++)A.cells[C]=A.cells[C].replace(/^ *\| *| *\| *$/g,'').split(/ *\| */);this.tokens.push(A);continue}if(t&&(x=this.rules.paragraph.exec(s))){s=s.substring(x[0].length),this.tokens.push({type:'paragraph',text:'\n'===x[1].charAt(x[1].length-1)?x[1].slice(0,-1):x[1]});continue}if(x=this.rules.text.exec(s)){s=s.substring(x[0].length),this.tokens.push({type:'text',text:x[0]});continue}if(s)throw new Error('Infinite loop on byte: '+s.charCodeAt(0))}return this.tokens};var r={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:m,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:m,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};r._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,r._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,r.link=k(r.link)('inside',r._inside)('href',r._href)(),r.reflink=k(r.reflink)('inside',r._inside)(),r.normal=o({},r),r.pedantic=o({},r.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),r.gfm=o({},r.normal,{escape:k(r.escape)('])','~|])')(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:k(r.text)(']|','~]|')('|','|https?://|')()}),r.breaks=o({},r.gfm,{br:k(r.br)('{2,}','*')(),text:k(r.gfm.text)('{2,}','*')()}),c.rules=r,c.output=function(s,t,u){var v=new c(t,u);return v.output(s)},c.prototype.output=function(s){for(var u,v,w,x,t='';s;){if(x=this.rules.escape.exec(s)){s=s.substring(x[0].length),t+=x[1];continue}if(x=this.rules.autolink.exec(s)){s=s.substring(x[0].length),'@'===x[2]?(v=':'===x[1].charAt(6)?this.mangle(x[1].substring(7)):this.mangle(x[1]),w=this.mangle('mailto:')+v):(v=g(x[1]),w=v),t+=this.renderer.link(w,null,v);continue}if(!this.inLink&&(x=this.rules.url.exec(s))){s=s.substring(x[0].length),v=g(x[1]),w=v,t+=this.renderer.link(w,null,v);continue}if(x=this.rules.tag.exec(s)){!this.inLink&&/^<a /i.test(x[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(x[0])&&(this.inLink=!1),s=s.substring(x[0].length),t+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(x[0]):g(x[0]):x[0];continue}if(x=this.rules.link.exec(s)){s=s.substring(x[0].length),this.inLink=!0,t+=this.outputLink(x,{href:x[2],title:x[3]}),this.inLink=!1;continue}if((x=this.rules.reflink.exec(s))||(x=this.rules.nolink.exec(s))){if(s=s.substring(x[0].length),u=(x[2]||x[1]).replace(/\s+/g,' '),u=this.links[u.toLowerCase()],!u||!u.href){t+=x[0].charAt(0),s=x[0].substring(1)+s;continue}this.inLink=!0,t+=this.outputLink(x,u),this.inLink=!1;continue}if(x=this.rules.strong.exec(s)){s=s.substring(x[0].length),t+=this.renderer.strong(this.output(x[2]||x[1]));continue}if(x=this.rules.em.exec(s)){s=s.substring(x[0].length),t+=this.renderer.em(this.output(x[2]||x[1]));continue}if(x=this.rules.code.exec(s)){s=s.substring(x[0].length),t+=this.renderer.codespan(g(x[2],!0));continue}if(x=this.rules.br.exec(s)){s=s.substring(x[0].length),t+=this.renderer.br();continue}if(x=this.rules.del.exec(s)){s=s.substring(x[0].length),t+=this.renderer.del(this.output(x[1]));continue}if(x=this.rules.text.exec(s)){s=s.substring(x[0].length),t+=this.renderer.text(g(this.smartypants(x[0])));continue}if(s)throw new Error('Infinite loop on byte: '+s.charCodeAt(0))}return t},c.prototype.outputLink=function(s,t){var u=g(t.href),v=t.title?g(t.title):null;return'!'===s[0].charAt(0)?this.renderer.image(u,v,g(s[1])):this.renderer.link(u,v,this.output(s[1]))},c.prototype.smartypants=function(s){return this.options.smartypants?s.replace(/---/g,'\u2014').replace(/--/g,'\u2013').replace(/(^|[-\u2014/(\[{"\s])'/g,'$1\u2018').replace(/'/g,'\u2019').replace(/(^|[-\u2014/(\[{\u2018\s])"/g,'$1\u201C').replace(/"/g,'\u201D').replace(/\.{3}/g,'\u2026'):s},c.prototype.mangle=function(s){if(!this.options.mangle)return s;for(var w,t='',u=s.length,v=0;v<u;v++)w=s.charCodeAt(v),0.5<Math.random()&&(w='x'+w.toString(16)),t+='&#'+w+';';return t},d.prototype.code=function(s,t,u){if(this.options.highlight){var v=this.options.highlight(s,t);null!=v&&v!==s&&(u=!0,s=v)}return t?'<pre><code class="'+this.options.langPrefix+g(t,!0)+'">'+(u?s:g(s,!0))+'\n</code></pre>\n':'<pre><code>'+(u?s:g(s,!0))+'\n</code></pre>'},d.prototype.blockquote=function(s){return'<blockquote>\n'+s+'</blockquote>\n'},d.prototype.html=function(s){return s},d.prototype.heading=function(s,t,u){return'<h'+t+' id="'+this.options.headerPrefix+u.toLowerCase().replace(/[^\w]+/g,'-')+'">'+s+'</h'+t+'>\n'},d.prototype.hr=function(){return this.options.xhtml?'<hr/>\n':'<hr>\n'},d.prototype.list=function(s,t){var u=t?'ol':'ul';return'<'+u+'>\n'+s+'</'+u+'>\n'},d.prototype.listitem=function(s){return'<li>'+s+'</li>\n'},d.prototype.paragraph=function(s){return'<p>'+s+'</p>\n'},d.prototype.table=function(s,t){return'<table>\n<thead>\n'+s+'</thead>\n<tbody>\n'+t+'</tbody>\n</table>\n'},d.prototype.tablerow=function(s){return'<tr>\n'+s+'</tr>\n'},d.prototype.tablecell=function(s,t){var u=t.header?'th':'td',v=t.align?'<'+u+' style="text-align:'+t.align+'">':'<'+u+'>';return v+s+'</'+u+'>\n'},d.prototype.strong=function(s){return'<strong>'+s+'</strong>'},d.prototype.em=function(s){return'<em>'+s+'</em>'},d.prototype.codespan=function(s){return'<code>'+s+'</code>'},d.prototype.br=function(){return this.options.xhtml?'<br/>':'<br>'},d.prototype.del=function(s){return'<del>'+s+'</del>'},d.prototype.link=function(s,t,u){if(this.options.sanitize){try{var v=decodeURIComponent(h(s)).replace(/[^\w:]/g,'').toLowerCase()}catch(x){return''}if(0===v.indexOf('javascript:')||0===v.indexOf('vbscript:')||0===v.indexOf('data:'))return''}var w='<a href="'+s+'"';return t&&(w+=' title="'+t+'"'),w+='>'+u+'</a>',w},d.prototype.image=function(s,t,u){var v='<img src="'+s+'" alt="'+u+'"';return t&&(v+=' title="'+t+'"'),v+=this.options.xhtml?'/>':'>',v},d.prototype.text=function(s){return s},f.parse=function(s,t,u){var v=new f(t,u);return v.parse(s)},f.prototype.parse=function(s){this.inline=new c(s.links,this.options,this.renderer),this.tokens=s.reverse();for(var t='';this.next();)t+=this.tok();return t},f.prototype.next=function(){return this.token=this.tokens.pop()},f.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},f.prototype.parseText=function(){for(var s=this.token.text;'text'===this.peek().type;)s+='\n'+this.next().text;return this.inline.output(s)},f.prototype.tok=function(){switch(this.token.type){case'space':return'';case'hr':return this.renderer.hr();case'heading':return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case'code':return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case'table':{var u,v,w,x,y,s='',t='';for(w='',u=0;u<this.token.header.length;u++)x={header:!0,align:this.token.align[u]},w+=this.renderer.tablecell(this.inline.output(this.token.header[u]),{header:!0,align:this.token.align[u]});for(s+=this.renderer.tablerow(w),u=0;u<this.token.cells.length;u++){for(v=this.token.cells[u],w='',y=0;y<v.length;y++)w+=this.renderer.tablecell(this.inline.output(v[y]),{header:!1,align:this.token.align[y]});t+=this.renderer.tablerow(w)}return this.renderer.table(s,t)}case'blockquote_start':{for(var t='';'blockquote_end'!==this.next().type;)t+=this.tok();return this.renderer.blockquote(t)}case'list_start':{for(var t='',z=this.token.ordered;'list_end'!==this.next().type;)t+=this.tok();return this.renderer.list(t,z)}case'list_item_start':{for(var t='';'list_item_end'!==this.next().type;)t+='text'===this.token.type?this.parseText():this.tok();return this.renderer.listitem(t)}case'loose_item_start':{for(var t='';'list_item_end'!==this.next().type;)t+=this.tok();return this.renderer.listitem(t)}case'html':{var A=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(A)}case'paragraph':return this.renderer.paragraph(this.inline.output(this.token.text));case'text':return this.renderer.paragraph(this.parseText());}},m.exec=m,p.options=p.setOptions=function(s){return o(p.defaults,s),p},p.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:'lang-',smartypants:!1,headerPrefix:'',renderer:new d,xhtml:!1},p.Parser=f,p.parser=f.parse,p.Renderer=d,p.Lexer=a,p.lexer=a.lex,p.InlineLexer=c,p.inlineLexer=c.output,p.parse=p,'undefined'!==typeof module&&'object'===typeof exports?module.exports=p:'function'===typeof define&&define.amd?define(function(){return p}):this.marked=p}).call(function(){return this||('undefined'===typeof window?global:window)}());