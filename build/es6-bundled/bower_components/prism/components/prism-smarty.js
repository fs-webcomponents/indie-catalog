(function(a){var b=/\{\*[\s\S]+?\*\}|\{[\s\S]+?\}/g,e=!1;a.languages.smarty=a.languages.extend('markup',{smarty:{pattern:b,inside:{delimiter:{pattern:/^\{|\}$/i,alias:'punctuation'},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee][-+]?\d+)?)\b/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->)(?!\d)\w+/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],function:[{pattern:/(\|\s*)@?(?!\d)\w+/,lookbehind:!0},/^\/?(?!\d)\w+/,/(?!\d)\w+(?=\()/],"attr-name":{pattern:/\w+\s*=\s*(?:(?!\d)\w+)?/,inside:{variable:{pattern:/(=\s*)(?!\d)\w+/,lookbehind:!0},operator:/=/}},punctuation:[/[\[\]().,:`]|->/],operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],keyword:/\b(?:false|off|on|no|true|yes)\b/}}}),a.languages.insertBefore('smarty','tag',{"smarty-comment":{pattern:/\{\*[\s\S]*?\*\}/,alias:['smarty','comment']}}),a.hooks.add('before-highlight',function(f){'smarty'!==f.language||(f.tokenStack=[],f.backupCode=f.code,f.code=f.code.replace(b,function(g){if(g==='{/literal}'&&(e=!1),!e){g==='{literal}'&&(e=!0);for(var h=f.tokenStack.length;-1!==f.backupCode.indexOf('___SMARTY'+h+'___');)++h;return f.tokenStack[h]=g,'___SMARTY'+h+'___'}return g}))}),a.hooks.add('before-insert',function(f){'smarty'===f.language&&(f.code=f.backupCode,delete f.backupCode)}),a.hooks.add('after-highlight',function(f){if('smarty'===f.language){for(var g=0,h=Object.keys(f.tokenStack);g<h.length;++g){var j=h[g],l=f.tokenStack[j];f.highlightedCode=f.highlightedCode.replace('___SMARTY'+j+'___',a.highlight(l,f.grammar,'smarty').replace(/\$/g,'$$$$'))}f.element.innerHTML=f.highlightedCode}})})(Prism);