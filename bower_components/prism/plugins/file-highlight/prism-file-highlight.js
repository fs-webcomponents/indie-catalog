(function(){'undefined'!==typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var a={js:'javascript',py:'python',rb:'ruby',ps1:'powershell',psm1:'powershell',sh:'bash',bat:'batch',h:'c',tex:'latex'};Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function(b){for(var d,c=b.getAttribute('data-src'),e=b,f=/\blang(?:uage)?-(?!\*)(\w+)\b/i;e&&!f.test(e.className);)e=e.parentNode;if(e&&(d=(b.className.match(f)||[,''])[1]),!d){var g=(c.match(/\.(\w+)$/)||[,''])[1];d=a[g]||g}var h=document.createElement('code');h.className='language-'+d,b.textContent='',h.textContent='Loading\u2026',b.appendChild(h);var i=new XMLHttpRequest;i.open('GET',c,!0),i.onreadystatechange=function(){4==i.readyState&&(400>i.status&&i.responseText?(h.textContent=i.responseText,Prism.highlightElement(h)):400<=i.status?h.textContent='\u2716 Error '+i.status+' while fetching file: '+i.statusText:h.textContent='\u2716 Error: File does not exist or is empty')},i.send(null)})},document.addEventListener('DOMContentLoaded',self.Prism.fileHighlight))})();