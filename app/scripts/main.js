'use strict';
/* global Trianglify */

console.log('Mark Silverwood - marksilverwood.me');
var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
x = w.innerWidth || e.clientWidth || g.clientWidth,
y = w.innerHeight|| e.clientHeight|| g.clientHeight;
var t = new Trianglify({
  /* jshint -W106 */
  x_gradient: Trianglify.colorbrewer.YlGnBu[9],
  y_gradient: Trianglify.colorbrewer.RdPu[9],
  /* jshint +W106 */
  noiseIntensity: 0.1,
  cellpadding: 10,
  cellsize: 100});
var pattern = t.generate(x, y);
document.body.setAttribute('style', 'background-image: '+pattern.dataUrl+'; background-size: 100%; background-repeat: no-repeat');
