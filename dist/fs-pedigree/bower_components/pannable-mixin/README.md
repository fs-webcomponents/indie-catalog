# pannable-mixin

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/fs-webcomponents/pannable-mixin)

Web Component mixin that makes elements pannable. By default it will add mouse
event listeners to the host element and apply a CSS transform to it whenever it's
dragged. You can change the element that the tranform is applied to by calling
`setPanningElement()`. Note that this doesn't change where the mouse event
listeners are applied.

You may reset the panning position (i.e. return the element to it's regular
position) by calling `resetPanning()`.