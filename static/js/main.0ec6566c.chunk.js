(this["webpackJsonpbtcn05-redux"]=this["webpackJsonpbtcn05-redux"]||[]).push([[0],{222:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),a=r(21),i=r.n(a),o=(r(85),r(5)),c=r(6),u=r(8),l=r(7),p=r(9),h=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="square ".concat(this.props.winner);return s.a.createElement("button",{className:e,"data-pro":this.props.value,onClick:this.props.onClick},this.props.value)}}]),t}(n.Component),m=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderSquare",value:function(e){var t=this,r=this.props.winner;return s.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},winner:r&&r.includes(e)?"winner":""})}},{key:"renderBoard",value:function(){for(var e=Math.sqrt(this.props.squares.length),t=Array(e).fill(null),r=0;r<e;r++){for(var n=Array(e).fill(null),a=0;a<e;a++){var i=r*e+a;n.push(s.a.createElement("span",{key:i},this.renderSquare(i)))}t.push(s.a.createElement("div",{key:r},n))}return t}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,this.renderBoard()))}}]),t}(s.a.Component),b=(r(86),r(77));function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={history:[{squares:Array(400).fill(null),location:""}],xIsNext:!0,stepNumber:0,isReverse:!1},d=function(e,t){var r=e.history.slice(0,e.stepNumber+1),n=r[r.length-1].squares.slice();if(!O(n)&&!n[t]){var s=Math.sqrt(r[0].squares.length),a=[Math.floor(t/s)+1,t%s+1].join(",");return n[t]=e.xIsNext?"X":"O",{history:r.concat([{squares:n,location:a}]),xIsNext:!e.xIsNext,stepNumber:r.length}}},O=function(e){for(var t=Math.sqrt(e.length),r=0;r<t;r++)for(var n=0;n<t;n++){var s=r*t+n;if(s<(r+1)*t-4&&(null===e[s-1]||null===e[s+5])&&e[s]&&e[s]===e[s+1]&&e[s]===e[s+2]&&e[s]===e[s+3]&&e[s]===e[s+4])return{winLocation:[s,s+1,s+2,s+3,s+4],winPlayer:e[s]};if((null===e[s-t]||null===e[s+5*t])&&e[s]&&e[s]===e[s+1*t]&&e[s]===e[s+2*t]&&e[s]===e[s+3*t]&&e[s]===e[s+4*t])return{winLocation:[s,s+1*t,s+2*t,s+3*t,s+4*t],winPlayer:e[s]};if((null===e[s-1*t-1]||null===e[s+5*t+5])&&e[s]&&e[s]===e[s+1*t+1]&&e[s]===e[s+2*t+2]&&e[s]===e[s+3*t+3]&&e[s]===e[s+4*t+4])return{winLocation:[s,s+1*t+1,s+2*t+2,s+3*t+3,s+4*t+4],winPlayer:e[s]};if((null===e[s-1*t+1]||null===e[s+5*t-5])&&e[s]&&e[s]===e[s+1*t-1]&&e[s]===e[s+2*t-2]&&e[s]===e[s+3*t-3]&&e[s]===e[s+4*t-4])return{winLocation:[s,s+1*t-1,s+2*t-2,s+3*t-3,s+4*t-4],winPlayer:e[s]}}return null},j=function(e){return{history:[{squares:e.history.slice()[0].squares.slice()}],stepNumber:0,xIsNext:!0,isReverse:!1}},N=function(e){return document.querySelectorAll(".chosen-btn").forEach((function(e){e.classList.remove("chosen-btn")})),document.getElementById("".concat(e)).classList.add("chosen-btn"),{stepNumber:e,xIsNext:e%2===0}},E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this,r=this.props.history,n=r[this.props.stepNumber].squares.slice(),a=O(n);e=a?"Winner is: "+a.winPlayer:"Next player is: "+(this.props.xIsNext?"X":"O");var i=r.map((function(e,r){var n=r?"Go to move #".concat(r," (").concat(e.location,")"):"Go to game start!";return s.a.createElement("li",{key:r},s.a.createElement("button",{style:{marginTop:5},className:"btn btn-sm btn-outline-dark",id:r,onClick:function(){return t.props.jumpTo(r)}},n))}));return s.a.createElement("div",{className:"game"},s.a.createElement("div",{className:"game-board"},s.a.createElement(m,{squares:n,onClick:function(e){return t.props.clickSquare(e)},winner:a&&a.winLocation})),s.a.createElement("div",{className:"game-info"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6 status"},e),s.a.createElement("div",{className:"col-3"},s.a.createElement("button",{className:"btn btn-sm btn-outline-success",type:"button",onClick:function(){return t.props.restart()}},"Restart")),s.a.createElement("div",{className:"col-3"},s.a.createElement("button",{className:"btn btn-sm btn-outline-primary",onClick:function(){return t.props.sort()}},"Sort step"))),s.a.createElement("ol",{reversed:this.props.isReverse?"reverse":""},this.props.isReverse?i.reverse():i)))}}]),t}(s.a.Component),x=r(22),k=r(24),w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(E,{history:this.props.history,xIsNext:this.props.xIsNext,stepNumber:this.props.stepNumber,isReverse:this.props.isReverse,clickSquare:this.props.clickSquare,jumpTo:this.props.jumpTo,sort:this.props.sort,restart:this.props.restart})}}]),t}(n.Component),g=Object(k.b)((function(e){return{history:e.history,xIsNext:e.xIsNext,stepNumber:e.stepNumber,isReverse:e.isReverse}}),(function(e){return{clickSquare:function(t){return e(function(e){return{type:"CLICK_SQUARE",id:e}}(t))},jumpTo:function(t){return e(function(e){return{type:"JUMP_TO",id:e}}(t))},sort:function(){return e({type:"SORT"})},restart:function(){return e({type:"RESTART"})}}}))(w),q=r(79),R=r.n(q),C=Object(x.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLICK_SQUARE":return v({},e,{},d(e,t.id));case"RESTART":return v({},j(e));case"JUMP_TO":return v({},e,{},N(t.id));case"SORT":return v({},e,{isReverse:!e.isReverse});default:return e}}),R()());i.a.render(s.a.createElement(k.a,{store:C},s.a.createElement(g,null)),document.getElementById("root"))},80:function(e,t,r){e.exports=r(222)},85:function(e,t,r){},86:function(e,t,r){}},[[80,1,2]]]);
//# sourceMappingURL=main.0ec6566c.chunk.js.map