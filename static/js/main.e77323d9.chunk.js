(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/brick-hex.fab879f8.png"},28:function(e,t,a){e.exports=a.p+"static/media/forest-hex.8725920d.png"},29:function(e,t,a){e.exports=a.p+"static/media/field-hex.8c773516.png"},30:function(e,t,a){e.exports=a.p+"static/media/rock-hex.a45b3e02.png"},31:function(e,t,a){e.exports=a.p+"static/media/wheat-hex.dcd53bed.png"},32:function(e,t,a){e.exports=a.p+"static/media/empty-hex.f50bee80.png"},34:function(e,t,a){e.exports=a.p+"static/media/settlement.b283507d.png"},35:function(e,t,a){e.exports=a.p+"static/media/city.68d7a430.png"},37:function(e,t,a){e.exports=a(49)},40:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);a(38),a(40);var n=a(1),l=a.n(n),i=a(13),r=a.n(i),c=a(14),s=a(36),o=a(3),u=a(4),m=a(6),d=a(5),p=a(7),h=a(53),f=a(50),b=a(52),v=a(16),g=a(15),y=a(21),O=a(17),j=a(8),E=a(27),S=a.n(E),C=a(28),N=a.n(C),k=a(29),T=a.n(k),x=a(30),w=a.n(x),U=a(31),A=a.n(U),I=[2,3,4,5,6,7,8,9,10,11,12],M={brick:S.a,field:T.a,forest:N.a,rock:w.a,wheat:A.a},B=a(32),L=a.n(B),R=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.alt,n=e.height;return l.a.createElement("img",{src:M[t]||L.a,alt:a||"Tile",height:n||90})}}]),t}(n.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.type,n=t.number,i=t.onClick,r=t.imgHeight,c=t.className;n&&(e=l.a.createElement("div",{className:"tile-number"},l.a.createElement("span",null,l.a.createElement("b",null,n))));var s="tile";return c&&(s+=" "+c),l.a.createElement("div",{className:s,onClick:i},l.a.createElement(R,{type:a,height:r}),e)}}]),t}(n.Component),z=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.color;return l.a.createElement(j.b,Object.assign({},this.props,{outline:!0,color:a||"secondary"}),t)}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.numbers,a=e.selectedNumber,n=e.onButtonClick,i=e.className,r=e.disabledNumbers;return l.a.createElement("div",{className:i},(t||I).map(function(e){var t=r&&-1!==r.indexOf(e);return l.a.createElement(z,{key:e,className:"btn-round p-2 m-2",disabled:t,active:e===a,onClick:function(){return n&&n(e)}},e)}))}}]),t}(n.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tile,a=e.isOpen,n=e.toggle,i=e.onUpdateNumber,r=e.onUpdateType,c=e.onSave,s=e.onClear;return l.a.createElement(j.g,{isOpen:a},l.a.createElement(j.j,{toggle:n},"Change Tile"),l.a.createElement(j.h,null,l.a.createElement(J,{className:"d-flex justify-content-center flex-wrap mb-3",selectedNumber:t.number,onButtonClick:i,disabledNumbers:[7]}),l.a.createElement("div",{className:"d-flex justify-content-center flex-wrap"},Object.keys(M).map(function(e){return l.a.createElement(z,{key:e,className:"tile m-1",active:e===t.type,onClick:function(){return r(e)}},l.a.createElement(R,{type:e,height:70}))}))),l.a.createElement(j.i,{className:"d-flex justify-content-between"},l.a.createElement(z,{onClick:n},"Cancel"),l.a.createElement(z,{color:"info",onClick:s},"Clear"),l.a.createElement(z,{outline:!0,color:"success",onClick:function(){return c(t)}},"Done")))}}]),t}(n.Component),D=a(34),H=a.n(D),P=a(35),q=a.n(P),G=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e;return e=this.props.settlement.isCity?{src:q.a,alt:"City",height:60}:{src:H.a,alt:"Settlement",height:50},l.a.createElement("img",{src:e.src,alt:e.alt,height:e.height})}}]),t}(n.Component);g.b.add(O.c,O.b,O.a,O.d);var K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={showTileModal:!1,activeTile:{}},a.handleTileClick=function(e){a.setState({showTileModal:!0,activeTile:Object(v.a)({},e)})},a.toggleTileModal=function(){a.setState({activeTile:{},showTileModal:!a.state.showTileModal})},a.handleActiveTileClear=function(){var e=Object.assign(Object(v.a)({},a.state.activeTile),{number:null,type:null});a.setState({activeTile:e})},a.handleActiveTileNumberUpdate=function(e){var t=Object.assign(Object(v.a)({},a.state.activeTile),{number:e});a.setState({activeTile:t})},a.handleActiveTileTypeUpdate=function(e){var t=Object.assign(Object(v.a)({},a.state.activeTile),{type:e});a.setState({activeTile:t})},a.handleTileSave=function(){a.props.onTileUpdate(a.state.activeTile),a.toggleTileModal()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"getAddButton",value:function(){var e=this.props,t=e.settlements,a=e.onSettlementAdd;return 5===t.filter(function(e){return!e.isCity}).length?l.a.createElement(j.a,{color:"info"},"Max number of settlements reached"):l.a.createElement(y.a,{icon:"plus-circle",size:"2x",onClick:function(){return a()}})}},{key:"getClearAllButton",value:function(){var e=this.props,t=e.settlements,a=e.onClearAll;if(t&&t.length)return l.a.createElement(z,{className:"mb-3",color:"warning",onClick:a},"Clear All")}},{key:"render",value:function(){var e=this,t=this.props,a=t.settlements,n=t.tiles,i=t.onSettlementUpdate,r=t.onSettlementRemove,c=this.state,s=c.showTileModal,o=c.activeTile;return l.a.createElement(l.a.Fragment,null,l.a.createElement(W,{isOpen:s,tile:o,toggle:this.toggleTileModal,onUpdateNumber:this.handleActiveTileNumberUpdate,onUpdateType:this.handleActiveTileTypeUpdate,onSave:this.handleTileSave,onClear:this.handleActiveTileClear}),l.a.createElement("div",{className:"mb-3"},this.getAddButton()),l.a.createElement("div",null,a.map(function(t){var a=n.filter(function(e){return e.settlementId===t.id});return l.a.createElement(j.c,{className:"mb-3",key:t.id},l.a.createElement(j.d,{className:"p-0"},l.a.createElement(j.e,{className:"bg-light"},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-6 text-left"},l.a.createElement(y.a,{icon:t.isCity?"angle-double-down":"angle-double-up",size:"2x",onClick:function(){return i(t)}})),l.a.createElement("div",{className:"col-6 text-right"},l.a.createElement(y.a,{icon:"times",size:"2x",onClick:function(){return r(t.id)}})))),l.a.createElement(j.f,{tag:"div"},l.a.createElement("div",{className:"row no-gutters align-items-center p-2"},l.a.createElement("div",{className:"col-3 text-center align-content-center"},l.a.createElement(G,{settlement:t})),l.a.createElement("div",{className:"col-9"},l.a.createElement("div",{className:"row no-gutters"},a.map(function(t,a){var n=0===a?"col-12":"col-6";return l.a.createElement("div",{key:t.id,className:n},l.a.createElement(F,{type:t.type,number:t.number,imgHeight:80,onClick:function(){return e.handleTileClick(t)}}))})))))))})),l.a.createElement("div",null,this.getClearAllButton()))}}]),t}(n.Component),Q=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleNumberUpdate=function(e){-1===a.state.disabledNumbers.indexOf(e)&&a.setState({selectedNumber:e})},a.calculateResourcesForRolls=function(){var e=a.props,t=e.settlements;return e.tiles.reduce(function(e,a){var n=t.find(function(e){return e.id===a.settlementId}),l=a.type,i=a.number;return e[i]||(e[i]={}),e[i][l]||(e[i][l]=0),e[i][l]+=n.isCity?2:1,e},{})};var n=a.calculateResourcesForRolls(),l=I.filter(function(e){return!n[e]});return a.state={selectedNumber:e.selectedNumber,resources:n,disabledNumbers:l},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.resources,a=e.selectedNumber,n=e.disabledNumbers,i=t[a]||[];return l.a.createElement(l.a.Fragment,null,l.a.createElement(J,{className:"d-flex justify-content-center flex-wrap mb-5",selectedNumber:a,disabledNumbers:n,onButtonClick:this.handleNumberUpdate}),l.a.createElement("div",{className:"d-flex justify-content-center bd-highlight mb-3"},Object.keys(i).map(function(e){var t=i[e];return l.a.createElement("div",{className:"p-2 bd-highlight",key:e},l.a.createElement(F,{key:e,type:e,number:t}))})))}}]),t}(n.Component),V=a(54),X=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(j.n,{className:"p-0",expand:!0,color:"dark",fixed:"top",dark:!0},l.a.createElement(j.k,{className:"w-100",navbar:!0,justified:!0,horizontal:"center"},l.a.createElement(j.l,null,l.a.createElement(j.m,{to:"/setup",activeClassName:"active",tag:V.a},"Settlements")),l.a.createElement(j.l,null,l.a.createElement(j.m,{to:"/chart",activeClassName:"active",tag:V.a},"Chart"))))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).getInitialState=function(){return{lastSettlementId:0,lastTileId:0,settlements:[],tiles:[],showTileModal:!1,activeTile:{}}},a.resetState=function(){a.setState(a.getInitialState())},a.saveStateToLocalStorage=function(){for(var e in a.state)localStorage.setItem(e,JSON.stringify(a.state[e]))},a.handleSettlementAdd=function(){for(var e=a.state.settlements.slice(),t=a.state.lastSettlementId+1,n=a.state.tiles.slice(),l=a.state.lastTileId,i=[],r=0;r<3;r++)i.push({id:++l,settlementId:t,type:null,number:null});a.setState({lastSettlementId:t,lastTileId:l,settlements:[{id:t,isCity:!1}].concat(Object(s.a)(e)),tiles:n.concat(i)})},a.handleSettlementUpdate=function(e){var t=a.state.settlements.slice();if(e.isCity?t.filter(function(e){return!e.isCity}).length<5:t.filter(function(e){return e.isCity}).length<4){var n=t.indexOf(e);t[n].isCity=!t[n].isCity,a.setState({settlements:t})}},a.handleSettlementRemove=function(e){var t=a.state,n=t.settlements,l=t.tiles,i=n.filter(function(t){return t.id!==e}),r=l.filter(function(t){return t.settlementId!==e});a.setState({settlements:i,tiles:r})},a.handleTileUpdate=function(e){if(!(e.type&&!e.number||!e.type&&e.number)){var t=a.state.tiles.slice(),n=t.findIndex(function(t){return t.id===e.id});t[n]=Object.assign(t[n],e),a.setState({tiles:t})}},a.state=a.getInitialState(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.hydrateStateWithLocalStorage(),window.addEventListener("beforeunload",this.saveStateToLocalStorage)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.saveStateToLocalStorage),this.saveStateToLocalStorage()}},{key:"hydrateStateWithLocalStorage",value:function(){for(var e in this.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{t=JSON.parse(t),this.setState(Object(c.a)({},e,t))}catch(a){this.setState(Object(c.a)({},e,t))}}}},{key:"render",value:function(){var e=this,t=this.state,a=t.settlements,n=t.tiles;return l.a.createElement(l.a.Fragment,null,l.a.createElement(X,null),l.a.createElement("main",{className:"container"},l.a.createElement("div",{className:"text-center"},l.a.createElement(h.a,null,l.a.createElement(f.a,{path:"/setup",render:function(t){return l.a.createElement(K,Object.assign({},t,{settlements:a,tiles:n,onSettlementAdd:e.handleSettlementAdd,onSettlementUpdate:e.handleSettlementUpdate,onSettlementRemove:e.handleSettlementRemove,onTileUpdate:e.handleTileUpdate,onClearAll:e.resetState}))}}),l.a.createElement(f.a,{path:"/chart",render:function(e){return l.a.createElement(Q,Object.assign({},e,{settlements:a,tiles:n.filter(function(e){return"empty"!==e.type})}))}}),l.a.createElement(b.a,{from:"/",to:"/setup"})))))}}]),t}(n.Component),Z=a(51);r.a.render(l.a.createElement(Z.a,null,l.a.createElement(Y,null)),document.getElementById("root"))}},[[37,2,1]]]);
//# sourceMappingURL=main.e77323d9.chunk.js.map