(this["webpackJsonppmaa-app"]=this["webpackJsonppmaa-app"]||[]).push([[0],{115:function(e,n,a){"use strict";a.r(n);var i=a(2),t=a(0),c=a.n(t),l=a(18),r=a.n(l),m=(a(69),a(5)),o=a(16),p=a(17),g=a(148),u="#434343",s=function(e,n){return e.map((function(e){return n.name===e.name&&n.linkage===e.linkage?n:e}))},k=function(e,n){return e.name===n.name&&e.linkage===n.linkage};function d(){return"#"+Math.floor(16777215*Math.random()).toString(16)}var j=function(e){return Array(e).fill(1).map((function(e,n){var a=n+1;return Math.floor(100*Math.random())<10?{x:a,y:Math.floor(200*Math.random())}:{x:a,y:0}}))};var b=[{groupName:"Non-Branched Hexopyranosyl Residues ",items:[{name:"Galp",linkage:"T"},{name:"Glcp",linkage:"T"},{name:"Manp",linkage:"T"},{name:"Fucp",linkage:"T"},{name:"Rhap",linkage:"T"},{name:"GalpNAc",linkage:"T"},{name:"GlcpNAc",linkage:"T"},{name:"ManpNAc",linkage:"T"},{name:"Galp",linkage:"2"},{name:"Glcp",linkage:"2"},{name:"Manp",linkage:"2"},{name:"Fucp",linkage:"2"},{name:"Rhap",linkage:"2"},{name:"GalpNAc",linkage:"2"},{name:"GlcpNAc",linkage:"2"},{name:"ManpNAc",linkage:"2"},{name:"Galp",linkage:"3"},{name:"Glcp",linkage:"3"},{name:"Manp",linkage:"3"},{name:"Fucp",linkage:"3"},{name:"Rhap",linkage:"3"},{name:"GalpNAc",linkage:"3"},{name:"GlcpNAc",linkage:"3"},{name:"ManpNAc",linkage:"3"},{name:"Galp",linkage:"4"},{name:"Glcp",linkage:"4"},{name:"Manp",linkage:"4"},{name:"Fucp",linkage:"4"},{name:"Rhap",linkage:"4"},{name:"GalpNAc",linkage:"4"},{name:"GlcpNAc",linkage:"4"},{name:"ManpNAc",linkage:"4"},{name:"Galp",linkage:"6"},{name:"Glcp",linkage:"6"},{name:"Manp",linkage:"6"},{name:"Fucp",linkage:"6"},{name:"Rhap",linkage:"6"},{name:"GalpNAc",linkage:"6"},{name:"GlcpNAc",linkage:"6"},{name:"ManpNAc",linkage:"6"}]},{groupName:"Singly Branched Hexopyranosyl Residues",items:[{name:"Galp",linkage:"2,3"},{name:"Glcp",linkage:"2,3"},{name:"Manp",linkage:"2,3"},{name:"Fucp",linkage:"2,3"},{name:"Rhap",linkage:"2,3"},{name:"GalpNAc",linkage:"2,3"},{name:"GlcpNAc",linkage:"2,3"},{name:"ManpNAc",linkage:"2,3"},{name:"Galp",linkage:"2,4"},{name:"Glcp",linkage:"2,4"},{name:"Manp",linkage:"2,4"},{name:"Fucp",linkage:"2,4"},{name:"Rhap",linkage:"2,4"},{name:"GalpNAc",linkage:"2,4"},{name:"GlcpNAc",linkage:"2,4"},{name:"ManpNAc",linkage:"2,4"},{name:"Galp",linkage:"2,6"},{name:"Glcp",linkage:"2,6"},{name:"Manp",linkage:"2,6"},{name:"Fucp",linkage:"2,6"},{name:"Rhap",linkage:"2,6"},{name:"GalpNAc",linkage:"2,6"},{name:"GlcpNAc",linkage:"2,6"},{name:"ManpNAc",linkage:"2,6"},{name:"Galp",linkage:"3,4"},{name:"Glcp",linkage:"3,4"},{name:"Manp",linkage:"3,4"},{name:"Fucp",linkage:"3,4"},{name:"Rhap",linkage:"3,4"},{name:"GalpNAc",linkage:"3,4"},{name:"GlcpNAc",linkage:"3,4"},{name:"ManpNAc",linkage:"3,4"},{name:"Galp",linkage:"3,6"},{name:"Glcp",linkage:"3,6"},{name:"Manp",linkage:"3,6"},{name:"Fucp",linkage:"3,6"},{name:"Rhap",linkage:"3,6"},{name:"GalpNAc",linkage:"3,6"},{name:"GlcpNAc",linkage:"3,6"},{name:"ManpNAc",linkage:"3,6"},{name:"Galp",linkage:"4,6"},{name:"Glcp",linkage:"4,6"},{name:"Manp",linkage:"4,6"},{name:"Fucp",linkage:"4,6"},{name:"Rhap",linkage:"4,6"},{name:"GalpNAc",linkage:"4,6"},{name:"GlcpNAc",linkage:"4,6"},{name:"ManpNAc",linkage:"4,6"}]},{groupName:"Multiply Branched Hexopyranosyl Residues",items:[{name:"Galp",linkage:"2,3,4"},{name:"Glcp",linkage:"2,3,4"},{name:"Manp",linkage:"2,3,4"},{name:"Fucp",linkage:"2,3,4"},{name:"Rhap",linkage:"2,3,4"},{name:"GalpNAc",linkage:"2,3,4"},{name:"GlcpNAc",linkage:"2,3,4"},{name:"ManpNAc",linkage:"2,3,4"},{name:"Galp",linkage:"2,3,6"},{name:"Glcp",linkage:"2,3,6"},{name:"Manp",linkage:"2,3,6"},{name:"Fucp",linkage:"2,3,6"},{name:"Rhap",linkage:"2,3,6"},{name:"GalpNAc",linkage:"2,3,6"},{name:"GlcpNAc",linkage:"2,3,6"},{name:"ManpNAc",linkage:"2,3,6"},{name:"Galp",linkage:"2,4,6"},{name:"Glcp",linkage:"2,4,6"},{name:"Manp",linkage:"2,4,6"},{name:"Fucp",linkage:"2,4,6"},{name:"Rhap",linkage:"2,4,6"},{name:"GalpNAc",linkage:"2,4,6"},{name:"GlcpNAc",linkage:"2,4,6"},{name:"ManpNAc",linkage:"2,4,6"},{name:"Galp",linkage:"3,4,6"},{name:"Glcp",linkage:"3,4,6"},{name:"Manp",linkage:"3,4,6"},{name:"Fucp",linkage:"3,4,6"},{name:"Rhap",linkage:"3,4,6"},{name:"GalpNAc",linkage:"3,4,6"},{name:"GlcpNAc",linkage:"3,4,6"},{name:"ManpNAc",linkage:"3,4,6"}]},{groupName:"Non-Branched Pentopyranosyl and Pentofuranosyl Residues",items:[{name:"Arap",linkage:"T"},{name:"Ribp",linkage:"T"},{name:"Xylp",linkage:"T"},{name:"Araf",linkage:"T"},{name:"Ribf",linkage:"T"},{name:"Arap",linkage:"2"},{name:"Ribp",linkage:"2"},{name:"Xylp",linkage:"2"},{name:"Araf",linkage:"2"},{name:"Ribf",linkage:"2"},{name:"Arap",linkage:"3"},{name:"Ribp",linkage:"3"},{name:"Xylp",linkage:"3"},{name:"Araf",linkage:"3"},{name:"Ribf",linkage:"3"},{name:"Arap",linkage:"4"},{name:"Ribp",linkage:"4"},{name:"Xylp",linkage:"4"},{name:"Araf",linkage:"4"},{name:"Ribf",linkage:"4"},{name:"Arap",linkage:"5"},{name:"Ribp",linkage:"5"},{name:"Xylp",linkage:"5"},{name:"Araf",linkage:"5"},{name:"Ribf",linkage:"5"}]},{groupName:"Branched Pentopyranosyl And Pentofuranosyl Residues",items:[{name:"Arap",linkage:"2,3"},{name:"Ribp",linkage:"2,3"},{name:"Xylp",linkage:"2,3"},{name:"Araf",linkage:"2,3"},{name:"Ribf",linkage:"2,3"},{name:"Arap",linkage:"2,4"},{name:"Ribp",linkage:"2,4"},{name:"Xylp",linkage:"2,4"},{name:"Araf",linkage:"2,4"},{name:"Ribf",linkage:"2,4"},{name:"Arap",linkage:"2,5"},{name:"Ribp",linkage:"2,5"},{name:"Xylp",linkage:"2,5"},{name:"Araf",linkage:"2,5"},{name:"Ribf",linkage:"2,5"},{name:"Arap",linkage:"3,4"},{name:"Ribp",linkage:"3,4"},{name:"Xylp",linkage:"3,4"},{name:"Araf",linkage:"3,4"},{name:"Ribf",linkage:"3,4"},{name:"Arap",linkage:"3,5"},{name:"Ribp",linkage:"3,5"},{name:"Xylp",linkage:"3,5"},{name:"Araf",linkage:"3,5"},{name:"Ribf",linkage:"3,5"},{name:"Arap",linkage:"2,3,4"},{name:"Ribp",linkage:"2,3,4"},{name:"Xylp",linkage:"2,3,4"},{name:"Araf",linkage:"2,3,4"},{name:"Ribf",linkage:"2,3,4"},{name:"Arap",linkage:"2,3,5"},{name:"Ribp",linkage:"2,3,5"},{name:"Xylp",linkage:"2,3,5"},{name:"Araf",linkage:"2,3,5"},{name:"Ribf",linkage:"2,3,5"}]}].map((function(e){return Object(m.a)(Object(m.a)({},e),{},{items:e.items.map((function(n){return Object(m.a)(Object(m.a)({},function(e){var n=j(200),a=d();return Object(m.a)(Object(m.a)({},e),{},{data:n,color:a})}(n)),{},{groupName:e.groupName})}))})})),f=a(142),h=a(149),x=function(){return Object(i.jsx)("svg",{display:"block",fill:"black",viewBox:"0 0 24 24",width:18,children:Object(i.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})})},O=function(){return Object(i.jsx)("svg",{display:"block",fill:"black",viewBox:"0 0 24 24",width:18,children:Object(i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})})},A=function(){return Object(i.jsx)("svg",{display:"block",fill:"black",viewBox:"0 0 24 24",width:18,children:Object(i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})})},N=Object(g.a)({container:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},actionContainer:{}}),y=function(e){var n=e.onDataZoomBack,a=e.onRefreshView,t=e.onClearView,c=N({});return Object(i.jsxs)("div",{className:c.container,children:[Object(i.jsx)(f.a,{children:"Click and drag to zoom"}),Object(i.jsxs)("div",{className:c.actionContainer,children:[Object(i.jsx)(h.a,{size:"small",onClick:n,children:Object(i.jsx)(O,{})}),Object(i.jsx)(h.a,{size:"small",onClick:a,children:Object(i.jsx)(x,{})}),Object(i.jsx)(h.a,{size:"small",onClick:t,children:Object(i.jsx)(A,{})})]})]})},v=a(146),G=a(144),R=a(145),C=a(143),M=a(147),X=Object(g.a)({graphContainer:{display:"flex",justifyContent:"center"},zoomBox:{zIndex:100,position:"absolute",border:"black 1px solid",backgroundColor:"blue",opacity:.4}}),w=30,F=60,T=80,I=80,Y={initialX:0,dragX:0,rectX:0,rectY:0,width:0,height:0},P=function(e){var n=e.dataSets,a=e.onDataZoom,c=X({}),l=n.map((function(e){return e.data})),r=Object(t.useRef)(null),g=Object(t.useRef)(null),u=Object(t.useState)(!1),s=Object(p.a)(u,2),k=s[0],d=s[1],j=Object(t.useRef)(Y),b=Object(t.useState)(Y),f=Object(p.a)(b,2),h=f[0],x=f[1],O=Object(t.useRef)(),A=750-T-50,N=300-w-50,y=function(e){return e.reduce((function(e,n){return[].concat(Object(o.a)(e),Object(o.a)(n))}),[]).reduce((function(e,n){var a=e.minX,i=e.maxX,t=e.minY,c=e.maxY,l=n.x,r=n.y;return{minX:l<a?l:a,maxX:l>i?l:i,minY:r<t?r:t,maxY:r>c?r:c}}),{minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0})}(l),F=y.minX,I=y.maxX,P=y.minY,B=y.maxY,S=Object(M.a)({domain:[F,I],range:[0,A],round:!0}),D=Object(M.a)({domain:[0,A],range:[F,I],round:!0}),z=Object(M.a)({domain:[P,B],range:[N,0],round:!0}),H=Object(M.a)({domain:[N,0],range:[P,B],round:!0}),L=function(e,n){var a=e-T-n;return a<0&&(a=0),a>A&&(a=A),a},V=function(e,n){var a=e-w-n;return a<0&&(a=0),a>N&&(a=N),a},Z=function(){var e,n=j.current,a=n.dragX,i=n.initialX,t=n.rectX,c=n.rectY;e=a<i?i-t:a-i;var l=N-c;j.current=Object(m.a)(Object(m.a)({},j.current),{},{width:e}),x(Object(m.a)(Object(m.a)({},j.current),{},{width:e,height:l}))};return Object(i.jsx)("div",{ref:r,className:c.graphContainer,onClick:function(e){var n=e.clientX,i=e.clientY;if(g.current){var t=g.current.getBoundingClientRect(),c=t.left,l=t.top,r=L(n,c),o=V(i,l);k?(a({minX:D(j.current.rectX),maxX:D(j.current.rectX+j.current.width),maxY:H(j.current.rectY)}),d(!1),j.current=Y,x(Y),window.cancelAnimationFrame(O.current)):(j.current=Object(m.a)(Object(m.a)({},j.current),{},{rectX:r,rectY:o,initialX:r}),d(!0))}},onMouseMove:function(e){var n=e.clientX,a=e.clientY;if(k&&g.current){var i=g.current.getBoundingClientRect(),t=i.left,c=i.top,l=L(n,t),r=V(a,c);l<j.current.initialX?j.current=Object(m.a)(Object(m.a)({},j.current),{},{rectX:l,dragX:l}):j.current=Object(m.a)(Object(m.a)({},j.current),{},{rectX:j.current.initialX,dragX:l}),j.current=Object(m.a)(Object(m.a)({},j.current),{},{rectY:r}),O.current=requestAnimationFrame(Z)}},children:Object(i.jsx)("svg",{ref:g,height:300,width:750,children:Object(i.jsxs)(C.a,{top:w,left:T,children:[Object(i.jsx)(G.a,{scale:z,top:0,left:0,stroke:"#1b1a1e"}),Object(i.jsx)(R.a,{scale:S,top:N,stroke:"#1b1a1e"}),n.map((function(e,n){var a=e.color;return e.data.map((function(e){var t=e.x,c=e.y,l=S(t),r=z(c),m=N-z(c);return Object(i.jsx)(v.a,{x:l,y:r,width:2,height:m,opacity:.6,fill:a},"".concat(n,"-").concat(t))}))})),k&&Object(i.jsx)("rect",{x:h.rectX,y:h.rectY,width:h.width,height:h.height,fill:"blue",opacity:.4})]})})})},B=Object(g.a)({legendContainer:{textAlign:"center",fontSize:"12px",overflowy:"scroll",flex:1},legendItem:{display:"inline-block",borderRadius:"6px",border:"1px solid #d3d3d3",margin:"2px",padding:"1px",width:"90px","&:hover":{backgroundColor:"#d3d3d3"}}}),S=function(e){var n=e.pmaas,a=e.handlePmaaColorChange,t=B();return Object(i.jsx)("div",{className:t.legendContainer,children:n.map((function(e){return Object(i.jsx)("div",{className:t.legendItem,style:{backgroundColor:"".concat(e.color),color:(n=e.color,/^#([A-Fa-f0-9]{6}$)/.test(n)?(299*parseInt(n.substr(1,2),16)+587*parseInt(n.substr(3,2),16)+114*parseInt(n.substr(5,2),16))/1e3>=128?u:"#FFFFFF":u)},onClick:function(){return a(e)},children:"".concat(e.linkage,"-").concat(e.name)},"".concat(e.linkage,"-").concat(e.name));var n}))})},D=Object(g.a)({container:{padding:"10px"},gridHeader:{paddingTop:"10px",paddingBottom:"10px"},columnTitleItem:{display:"flex",justifyContent:"center",width:"80px"},rowtitleItem:{display:"flex",justifyContent:"center",width:"80px"},contentItem:{borderRadius:"6px",border:"1px solid #d3d3d3",margin:"2px",padding:"1px",width:"80px","&:hover":{backgroundColor:"#d3d3d3"}}}),z=function(e){var n=e.pmaaGroup,a=e.columns,t=e.rows,c=e.selectedPmaas,l=e.onPmaaClick,r=D({});return Object(i.jsxs)("div",{className:r.container,children:[Object(i.jsx)("div",{className:r.gridHeader,children:Object(i.jsx)(f.a,{variant:"subtitle1",children:Object(i.jsx)("b",{children:n.groupName})})}),Object(i.jsxs)("table",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:Object(i.jsx)("div",{className:r.columnTitleItem,children:"Linkage"})}),a.map((function(e){return Object(i.jsx)("th",{children:Object(i.jsx)("div",{className:r.columnTitleItem,children:Object(i.jsx)(f.a,{noWrap:!0,children:e})})},e)}))]}),t.map((function(e){var a,t=n.items.filter((function(n){return n.linkage===e}));return a=t,Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("div",{className:r.rowtitleItem,children:a[0].linkage})}),a.map((function(e){return Object(i.jsx)("td",{children:Object(i.jsx)("div",{className:r.contentItem,style:(n=e,c.some((function(e){return k(n,e)}))?{backgroundColor:"".concat(e.color)}:{}),onClick:function(){return l(e)},children:"\xa0"})},"".concat(e.linkage,"-").concat(e.name));var n}))]})}))]})]})},H=Object(g.a)({gridContainer:{display:"flex",flexDirection:"column",overflowY:"scroll",marginTop:"16px"}}),L=function(e){var n=e.pmaaData,a=e.selectedPmaas,t=e.handlePmaaClick,c=H();return Object(i.jsx)("div",{className:c.gridContainer,children:n.map((function(e){var n=new Set(e.items.map((function(e){return e.name}))),c=new Set(e.items.map((function(e){return e.linkage})));return Object(i.jsx)(z,{pmaaGroup:e,columns:Array.from(n),rows:Array.from(c),selectedPmaas:a,onPmaaClick:t},e.groupName)}))})},V=324+w+F,Z=Object(g.a)({container:{display:"flex",flexDirection:"column",alignItems:"center",height:"100vh"},graphContainer:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"10px",height:V,width:750+T+I},emptyTextContainer:{display:"flex",justifyContent:"center",alignItems:"center",border:"0.5px dashed grey",padding:"16px",flex:1},pickerContainer:{height:"calc(100% - ".concat(V,"px)")}}),E=function(){var e=Z({}),n=Object(t.useState)([]),a=Object(p.a)(n,2),c=a[0],l=a[1],r=Object(t.useState)([]),g=Object(p.a)(r,2),u=g[0],j=g[1],f=Object(t.useState)(b),h=Object(p.a)(f,2),x=h[0],O=h[1];Object(t.useEffect)((function(){l([u])}),[u]);var A=function(e){return e[e.length-1]||[]},N=c.length>0&&c.some((function(e){return e.length>0}));return Object(i.jsxs)("div",{className:e.container,children:[Object(i.jsx)("div",{className:e.graphContainer,children:N?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(y,{onDataZoomBack:function(){c.length>1&&l((function(e){return e.slice(0,e.length-1)}))},onRefreshView:function(){l((function(e){return e.slice(0,1)}))},onClearView:function(){j([])}}),Object(i.jsx)(P,{dataSets:A(c),onDataZoom:function(e){var n=e.minX,a=e.maxX,i=e.maxY,t=A(c).map((function(e){return Object(m.a)(Object(m.a)({},e),{},{data:e.data.filter((function(e){var i=e.x;return i>=n&&i<=a})).map((function(e){var n=e.x,a=e.y;return{x:n,y:a>i?i:a}}))})}));l((function(e){return[].concat(Object(o.a)(e),[Object(o.a)(t)])}))}}),Object(i.jsx)(S,{pmaas:u,handlePmaaColorChange:function(e){var n=Object(m.a)(Object(m.a)({},e),{},{color:d()});j((function(e){return s(e,n)})),O((function(e){return e.map((function(e){return e.groupName===n.groupName?Object(m.a)(Object(m.a)({},e),{},{items:s(e.items,n)}):e}))}))}})]}):Object(i.jsx)("div",{className:e.emptyTextContainer,children:"Click any number of PMAAs to see their electron-impact mass spectrum (EI-MS)"})}),Object(i.jsx)("div",{className:e.pickerContainer,children:Object(i.jsx)(L,{pmaaData:x,selectedPmaas:u,handlePmaaClick:function(e){!function(e){return u.some((function(n){return k(e,n)}))}(e)?j((function(n){return[].concat(Object(o.a)(n),[e])})):j((function(n){return n.filter((function(n){return!k(e,n)}))}))}})})]})};var J=function(){return Object(i.jsx)(E,{})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,150)).then((function(n){var a=n.getCLS,i=n.getFID,t=n.getFCP,c=n.getLCP,l=n.getTTFB;a(e),i(e),t(e),c(e),l(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(J,{})}),document.getElementById("root")),q()},69:function(e,n,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.eb093793.chunk.js.map