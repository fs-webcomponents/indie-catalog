(function(){if('undefined'!==typeof self&&self.Prism&&self.document&&Function.prototype.bind){var a=function(g){var h=0,i=0,j=g;if(j.parentNode){do h+=j.offsetLeft,i+=j.offsetTop;while((j=j.offsetParent)&&9>j.nodeType);j=g;do h-=j.scrollLeft,i-=j.scrollTop;while((j=j.parentNode)&&!/body/i.test(j.nodeName))}return{top:i,right:innerWidth-h-g.offsetWidth,bottom:innerHeight-i-g.offsetHeight,left:h}},b=/(?:^|\s)token(?=$|\s)/,c=/(?:^|\s)active(?=$|\s)/g,d=/(?:^|\s)flipped(?=$|\s)/g,f=function(g,h,i,j){this._elt=null,this._type=g,this._clsRegexp=RegExp('(?:^|\\s)'+g+'(?=$|\\s)'),this._token=null,this.updater=h,this._mouseout=this.mouseout.bind(this),this.initializer=j;var k=this;i||(i=['*']),'Array'!==Prism.util.type(i)&&(i=[i]),i.forEach(function(l){'string'!==typeof l&&(l=l.lang),f.byLanguages[l]||(f.byLanguages[l]=[]),0>f.byLanguages[l].indexOf(k)&&f.byLanguages[l].push(k)}),f.byType[g]=this};f.prototype.init=function(){this._elt||(this._elt=document.createElement('div'),this._elt.className='prism-previewer prism-previewer-'+this._type,document.body.appendChild(this._elt),this.initializer&&this.initializer())},f.prototype.check=function(g){do if(b.test(g.className)&&this._clsRegexp.test(g.className))break;while(g=g.parentNode);g&&g!==this._token&&(this._token=g,this.show())},f.prototype.mouseout=function(){this._token.removeEventListener('mouseout',this._mouseout,!1),this._token=null,this.hide()},f.prototype.show=function(){if(this._elt||this.init(),!!this._token)if(this.updater.call(this._elt,this._token.textContent)){this._token.addEventListener('mouseout',this._mouseout,!1);var g=a(this._token);this._elt.className+=' active',0<g.top-this._elt.offsetHeight?(this._elt.className=this._elt.className.replace(d,''),this._elt.style.top=g.top+'px',this._elt.style.bottom=''):(this._elt.className+=' flipped',this._elt.style.bottom=g.bottom+'px',this._elt.style.top=''),this._elt.style.left=g.left+Math.min(200,this._token.offsetWidth/2)+'px'}else this.hide()},f.prototype.hide=function(){this._elt.className=this._elt.className.replace(c,'')},f.byLanguages={},f.byType={},f.initEvents=function(g,h){var i=[];f.byLanguages[h]&&(i=i.concat(f.byLanguages[h])),f.byLanguages['*']&&(i=i.concat(f.byLanguages['*'])),g.addEventListener('mouseover',function(j){var k=j.target;i.forEach(function(l){l.check(k)})},!1)},Prism.plugins.Previewer=f,Prism.hooks.add('after-highlight',function(g){(f.byLanguages['*']||f.byLanguages[g.language])&&f.initEvents(g.element,g.language)})}})();