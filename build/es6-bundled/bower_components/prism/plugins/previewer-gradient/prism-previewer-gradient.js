(function(){if(('undefined'===typeof self||self.Prism)&&('undefined'===typeof global||global.Prism)){var a={css:!0,less:!0,sass:[{lang:'sass',before:'punctuation',inside:'inside',root:Prism.languages.sass&&Prism.languages.sass['variable-line']},{lang:'sass',before:'punctuation',inside:'inside',root:Prism.languages.sass&&Prism.languages.sass['property-line']}],scss:!0,stylus:[{lang:'stylus',before:'func',inside:'rest',root:Prism.languages.stylus&&Prism.languages.stylus['property-declaration'].inside},{lang:'stylus',before:'func',inside:'rest',root:Prism.languages.stylus&&Prism.languages.stylus['variable-declaration'].inside}]};Prism.hooks.add('before-highlight',function(f){if(f.language&&a[f.language]&&!a[f.language].initialized){var g=a[f.language];'Array'!==Prism.util.type(g)&&(g=[g]),g.forEach(function(h){var i,j,k,l;!0===h?(i=Prism.plugins.Previewer&&Prism.plugins.Previewer.byType.color?'color':'important',j=f.language,h=f.language):(i=h.before||'important',j=h.inside||h.lang,k=h.root||Prism.languages,l=h.skip,h=f.language),!l&&Prism.languages[h]&&(Prism.languages.insertBefore(j,i,{gradient:{pattern:/(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,inside:{function:/[\w-]+(?=\()/,punctuation:/[(),]/}}},k),f.grammar=Prism.languages[h],a[f.language]={initialized:!0})})}});var b={},c=function(f,g,h){var i='180deg';return /^(?:-?\d*\.?\d+(?:deg|rad)|to\b|top|right|bottom|left)/.test(h[0])&&(i=h.shift(),0>i.indexOf('to ')&&(0<=i.indexOf('top')?0<=i.indexOf('left')?i='to bottom right':0<=i.indexOf('right')?i='to bottom left':i='to bottom':0<=i.indexOf('bottom')?0<=i.indexOf('left')?i='to top right':0<=i.indexOf('right')?i='to top left':i='to top':0<=i.indexOf('left')?i='to right':0<=i.indexOf('right')?i='to left':f&&(0<=i.indexOf('deg')?i=90-parseFloat(i)+'deg':0<=i.indexOf('rad')&&(i=Math.PI/2-parseFloat(i)+'rad')))),g+'('+i+','+h.join(',')+')'},d=function(f,g,h){if(0>h[0].indexOf('at')){var i='center',j='ellipse',k='farthest-corner';if(/\bcenter|top|right|bottom|left\b|^\d+/.test(h[0])&&(i=h.shift().replace(/\s*-?\d+(?:rad|deg)\s*/,'')),/\bcircle|ellipse|closest|farthest|contain|cover\b/.test(h[0])){var l=h.shift().split(/\s+/);l[0]&&('circle'===l[0]||'ellipse'===l[0])&&(j=l.shift()),l[0]&&(k=l.shift()),'cover'===k?k='farthest-corner':'contain'===k&&(k='clothest-side')}return g+'('+j+' '+k+' at '+i+','+h.join(',')+')'}return g+'('+h.join(',')+')'},e=function(f){if(b[f])return b[f];var g=f.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/),h=g&&g[1],i=g&&g[2],j=f.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g,'').split(/\s*,\s*/);return 0<=i.indexOf('linear')?b[f]=c(h,i,j):0<=i.indexOf('radial')?b[f]=d(h,i,j):b[f]=i+'('+j.join(',')+')'};Prism.plugins.Previewer&&new Prism.plugins.Previewer('gradient',function(f){return this.firstChild.style.backgroundImage='',this.firstChild.style.backgroundImage=e(f),!!this.firstChild.style.backgroundImage},'*',function(){this._elt.innerHTML='<div></div>'})}})();