(this["webpackJsonpcashcow-frontend"]=this["webpackJsonpcashcow-frontend"]||[]).push([[27],{815:function(e,t,n){"use strict";n.r(t);var r=n(8),c=n(54),i=n(0),a=n(29),o=n(3),s=n(173),b=n(43),u=n(107),d=n(4),l=n.n(d),j=n(15),x=n(23),f=n(175),h=n.n(f),p=n(666),O=n(672),g=n(665),m=n(716),v=n(651),w=n(44),k=n(128),y=n.n(k),I=n(78),S=n(39),M=n(110),z=n(667),N=n(664);function C(){var e=Object(c.a)(["\n  margin-top: 24px;\n"]);return C=function(){return e},e}function T(){var e=Object(c.a)(["\n  font-size: 28px;\n  color: #431216;\n  font-weight: 700;\n  margin-top: 6px;\n  display: flex;\n  align-items: center;\n"]);return T=function(){return e},e}function D(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n"]);return D=function(){return e},e}function F(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n  color: #694f4e;\n"]);return F=function(){return e},e}function R(){var e=Object(c.a)(["\n  padding: 16px;\n  flex: 1;\n"]);return R=function(){return e},e}function B(){var e=Object(c.a)(["\n  margin-top: 20px;\n  box-shadow: 0 6px 12px 0 rgb(0 0 0 / 6%), 0 -1px 2px 0 rgb(0 0 0 / 2%);\n  border-radius: 16px;\n  display: flex;\n"]);return B=function(){return e},e}function L(){var e=Object(c.a)(["\n  font-size: 28px;\n  font-weight: 600;\n  color: #431216;\n  word-break: break-word;\n"]);return L=function(){return e},e}function A(){var e=Object(c.a)(["\n  flex: 1;\n  min-width: 220px;\n  margin: 16px 0;\n  display: flex;\n  flex-direction: column;\n"]);return A=function(){return e},e}function P(){var e=Object(c.a)(["\n  width: 100%;\n  padding-bottom: 100%;\n  height: 0;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: auto 100%;\n"]);return P=function(){return e},e}function W(){var e=Object(c.a)(["\n  max-width: 332px;\n  max-height: 100%;\n  min-width: 240px;\n  min-height: 240px;\n  width: 46%;\n  border-radius: 16px 16px 0 0;\n  overflow: hidden;\n  margin: 16px 32px 16px 0;\n  position: relative;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);return W=function(){return e},e}function $(){var e=Object(c.a)(["\n  display: flex;\n  padding: 16px 32px;\n  flex: 1;\n  flex-wrap: wrap;\n  align-items: inherit;\n\n  @media (max-width: 768px) {\n    justify-content: center;\n  }\n"]);return $=function(){return e},e}var E=o.e.div($()),K=o.e.div(W()),U=o.e.div(P()),_=o.e.div(A()),q=o.e.div(L()),J=o.e.div(B()),Y=o.e.div(R()),H=o.e.div(F()),G=o.e.div(D()),Q=o.e.div(T()),V=o.e.div(C()),X=new y.a(y.a.givenProvider),Z=function(e){var t=e.itemId,n=Object(u.a)().isDark,c=Object(a.f)(),o=Object(v.i)().account,s=Object(i.useState)(!1),d=Object(x.a)(s,2),f=d[0],k=d[1],y=Object(i.useState)(""),C=Object(x.a)(y,2),T=C[0],D=C[1],F=Object(i.useState)(""),R=Object(x.a)(F,2),B=R[0],L=R[1],A=Object(i.useState)(""),P=Object(x.a)(A,2),W=P[0],$=P[1],Z=Object(i.useState)(0),ee=Object(x.a)(Z,2),te=ee[0],ne=ee[1],re=Object(i.useState)(""),ce=Object(x.a)(re,2),ie=ce[0],ae=ce[1],oe=Object(i.useState)(!0),se=Object(x.a)(oe,2),be=se[0],ue=se[1],de=Object(i.useState)(!1),le=Object(x.a)(de,2),je=le[0],xe=le[1],fe=Object(i.useContext)(M.a).setLoading,he=Object(I.g)(),pe=Object(i.useMemo)((function(){return new X.eth.Contract(g.abi,Object(S.c)())}),[]),Oe=Object(i.useMemo)((function(){return new X.eth.Contract(O.abi,Object(S.f)())}),[]),ge=Object(i.useMemo)((function(){return new X.eth.Contract(p.abi,Object(S.a)())}),[]),me=new X.eth.Contract(m.abi,Object(S.h)()),ve=Object(i.useCallback)(Object(j.a)(l.a.mark((function e(){var n,r,c,i,a,s,b,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe.methods.fetchMarketItems().call({from:o});case 2:n=e.sent,r=!1,c=null,i=0;case 6:if(!(i<n.length)){e.next=16;break}if(n[i].itemId!==t){e.next=13;break}return r=n[i].nftContract===Object(S.a)(),c=n[i].tokenId,$(Object(w.fromWei)(n[i].price,"ether")),n[i].seller===o&&xe(!0),e.abrupt("break",16);case 13:i++,e.next=6;break;case 16:if(c){e.next=18;break}return e.abrupt("return");case 18:if(a=null,!r){e.next=25;break}return e.next=22,ge.methods.tokenURI(Object(w.toBN)(c)).call({from:o});case 22:a=e.sent,e.next=28;break;case 25:return e.next=27,pe.methods.tokenURI(Object(w.toBN)(c)).call({from:o});case 27:a=e.sent;case 28:return e.next=30,fetch(a);case 30:return s=e.sent,e.next=33,s.json();case 33:b=e.sent,u=b.image,r?D(u):(u=u.slice(7),D("".concat(z.a).concat(u))),k(r),L(b.name),ae(b.description),ne(he.toNumber());case 40:case"end":return e.stop()}}),e)}))),[o,Oe,ge,t,pe,he]);Object(i.useEffect)((function(){ve()}),[ve]);var we=function(){var e=Object(j.a)(l.a.mark((function e(){var n,r,i,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ue(!1),fe(!0),e.prev=2,n=Object(w.toWei)(Object(w.toBN)("10000000000000000000000000000000000000000"),"ether"),e.next=6,me.methods.allowance(o,Object(S.f)()).call();case 6:if(r=e.sent,!(parseInt(r.toString())<parseInt(W))){e.next=11;break}return e.next=10,me.methods.approve(Object(S.f)(),n).send({from:o});case 10:h.a.success("Approved Milk token.");case 11:if(!f){e.next=16;break}return e.next=14,Oe.methods.createMarketSale(Object(S.a)(),t).send({from:o});case 14:e.next=18;break;case 16:return e.next=18,Oe.methods.createMarketSale(Object(S.c)(),t).send({from:o});case 18:c.push("/nft-market"),h.a.success("Successfully bought NFT."),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(2),i=e.t0,a=i.message,h.a.error(a);case 26:ue(!0),fe(!1);case 28:case"end":return e.stop()}}),e,null,[[2,22]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(E,{children:[Object(r.jsxs)(K,{children:[Object(r.jsx)(U,{style:{backgroundImage:"url(".concat(T,")")}}),Object(r.jsx)("div",{style:{paddingTop:"10px",fontSize:"17px",color:n?"white":"rgb(105, 79, 78)"},children:ie})]}),Object(r.jsxs)(_,{children:[Object(r.jsx)(q,{style:{color:n?"white":""},children:B}),Object(r.jsx)(J,{style:{background:n?"#16151a":"",boxShadow:n?"0 6px 12px 0 rgb(255 255 255 / 6%), 0 -1px 2px 0 rgb(255 255 255 / 2%)":""},children:Object(r.jsxs)(Y,{children:[Object(r.jsxs)(H,{style:{color:n?"white":""},children:["Sale Price",Object(r.jsx)(G,{children:Object(r.jsx)("div",{style:{color:"".concat("#00d86c"),fontWeight:700},children:Object(r.jsxs)("div",{style:{display:"flex",alignItems:"center",cursor:"pointer",color:n?"white":""},children:[Object(r.jsx)("img",{style:{width:"16px",height:"16px",marginRight:"5px",transform:"translateY(-.5px)"},alt:"Milk Token Icon",src:"/images/farms/dogecorn.png"}),"Milk"]})})})]}),Object(r.jsxs)(Q,{style:{color:n?"white":""},children:[Object(r.jsx)("img",{style:{width:"24px",height:"24px",marginRight:"8px"},src:"/images/farms/dogecorn.png",alt:"Token Icon"}),Object(N.c)(W),Object(r.jsxs)("span",{style:{fontSize:"14px",color:n?"white":"#694f4e",fontWeight:400,marginLeft:"4px"},children:["\u2248 $",Object(N.c)(Math.round(te*parseInt(W)*100)/100)]})]})]})}),Object(r.jsx)("div",{style:{flex:1}}),Object(r.jsx)(V,{children:Object(r.jsx)("div",{children:o&&be&&!je?Object(r.jsx)(b.d,{style:{width:"100%"},onClick:we,children:"Buy NFT"}):Object(r.jsx)(b.d,{style:{width:"100%"},disabled:!0,children:je?"Your Listing NFT":"Buy NFT"})})})]})]})};function ee(){var e=Object(c.a)(["\n  color: #431216;\n  font-weight: 500;\n  max-width: 50%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return ee=function(){return e},e}function te(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"]);return te=function(){return e},e}function ne(){var e=Object(c.a)(["\n  padding: 18px 0 0;\n  font-size: 14px;\n"]);return ne=function(){return e},e}function re(){var e=Object(c.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 15px 0;\n"]);return re=function(){return e},e}function ce(){var e=Object(c.a)(["\n  font-size: 20px;\n  font-weight: 700;\n  color: #431216;\n"]);return ce=function(){return e},e}function ie(){var e=Object(c.a)(["\n  display: flex;\n  min-width: 280px;\n  max-width: 330px;\n  width: 30%;\n  padding: 32px;\n  box-sizing: border-box;\n  flex-direction: column;\n\n  @media (max-width: 768px) {\n    max-width: unset;\n    width: 100%;\n  }\n"]);return ie=function(){return e},e}var ae=o.e.div(ie()),oe=o.e.div(ce()),se=o.e.div(re()),be=o.e.div(ne()),ue=o.e.div(te()),de=o.e.div(ee()),le=new y.a(y.a.givenProvider),je=function(e){var t=e.itemId,n=Object(u.a)().isDark,c=Object(v.i)().account,a=Object(i.useState)(!1),o=Object(x.a)(a,2),s=o[0],b=o[1],d=Object(i.useState)(""),f=Object(x.a)(d,2),h=f[0],m=f[1],k=Object(i.useState)(""),y=Object(x.a)(k,2),I=y[0],M=y[1],z=Object(i.useState)(""),N=Object(x.a)(z,2),C=N[0],T=N[1],D=Object(i.useState)([]),F=Object(x.a)(D,2),R=F[0],B=F[1],L=Object(i.useMemo)((function(){return new le.eth.Contract(O.abi,Object(S.f)())}),[]),A=Object(i.useMemo)((function(){return new le.eth.Contract(g.abi,Object(S.c)())}),[]),P=Object(i.useMemo)((function(){return new le.eth.Contract(p.abi,Object(S.a)())}),[]),W=Object(i.useCallback)(Object(j.a)(l.a.mark((function e(){var n,r,i,a,o,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.methods.fetchMarketItems().call({from:c});case 2:n=e.sent,r=0,i=!1,a=0;case 6:if(!(a<n.length)){e.next=16;break}if(n[a].itemId!==t){e.next=13;break}return i=n[a].nftContract===Object(S.a)(),m(n[a].tokenId.toString()),M(n[a].seller.toString()),r=a,e.abrupt("break",16);case 13:a++,e.next=6;break;case 16:if(o=null,!i){e.next=23;break}return e.next=20,P.methods.tokenURI(Object(w.toBN)(n[r].tokenId)).call({from:c});case 20:o=e.sent,e.next=26;break;case 23:return e.next=25,A.methods.tokenURI(Object(w.toBN)(n[r].tokenId)).call({from:c});case 25:o=e.sent;case 26:return e.next=28,fetch(o);case 28:return s=e.sent,e.next=31,s.json();case 31:u=e.sent,b(i),T(u.dna),B(u.attributes);case 35:case"end":return e.stop()}}),e)}))),[c,L,P,t,A]);return Object(i.useEffect)((function(){W()}),[t,W]),Object(r.jsxs)(ae,{children:[Object(r.jsx)(oe,{style:{color:n?"white":""},children:"Properties"}),Object(r.jsx)(se,{children:Object(r.jsxs)(be,{children:[Object(r.jsxs)(ue,{children:[Object(r.jsx)("div",{style:{color:n?"white":"#694f4e"},children:"Owner"}),Object(r.jsx)(de,{children:Object(r.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://explorer.dogechain.dog/address/".concat(I),style:{textDecoration:"underline",color:n?"white":"#431216"},children:I})})]}),Object(r.jsxs)(ue,{children:[Object(r.jsx)("div",{style:{color:n?"white":"#694f4e"},children:"Contract Address"}),Object(r.jsx)(de,{children:Object(r.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://explorer.dogechain.dog/address/".concat(s?Object(S.a)():Object(S.c)()),style:{textDecoration:"underline",color:n?"white":"#431216"},children:s?Object(S.a)():Object(S.c)()})})]}),Object(r.jsxs)(ue,{children:[Object(r.jsx)("div",{style:{color:n?"white":"#694f4e"},children:"Token ID"}),Object(r.jsx)(de,{style:{color:n?"white":""},children:"#".concat(h)})]}),C&&Object(r.jsxs)(ue,{children:[Object(r.jsx)("div",{style:{color:n?"white":"#694f4e"},children:"DNA"}),Object(r.jsx)(de,{style:{color:n?"white":""},children:C})]}),R.map((function(e){return Object(r.jsxs)(ue,{children:[Object(r.jsx)("div",{style:{color:n?"white":"#694f4e"},children:e.trait_type}),Object(r.jsx)(de,{style:{color:n?"white":""},children:e.value})]},e.trait_type)}))]})})]})};function xe(){var e=Object(c.a)(["\n    min-width: 2px;\n    position: relative;\n    background-image: url(https://jojo.fun/img/icon-ticket-line-vertical.be8361e4.svg);\n    background-repeat: repeat-y;\n    background-size: contain;\n    background-position: 50%;\n"]);return xe=function(){return e},e}function fe(){var e=Object(c.a)(["\n    background: linear-gradient( 45deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100% );\n    background-size: 300% 300%;\n    animation: ilqnTz 2s linear infinite;\n    filter: blur(10px);\n    position: absolute;\n    top:-2px;\n    right:-2px;\n    bottom:-2px;\n    left:-2px;\n    z-index: -1;\n"]);return fe=function(){return e},e}function he(){var e=Object(c.a)(["\n    position: relative;\n    display: flex;\n    background: #fff;\n    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 3%), 0 4px 6px -2px rgb(0 0 0 / 1%);\n    border-radius: 32px;\n    position: relative;\n\n    @media (max-width: 768px) {\n        flex-direction: column;\n    }\n"]);return he=function(){return e},e}var pe=o.e.div(he()),Oe=o.e.div(fe()),ge=o.e.div(xe()),me=function(e){var t=e.itemId,n=Object(u.a)().isDark;return Object(r.jsxs)(pe,{style:{background:n?"#27262c":""},children:[Object(r.jsx)(Oe,{}),Object(r.jsx)(Z,{itemId:t}),Object(r.jsx)(ge,{}),Object(r.jsx)(je,{itemId:t})]})};function ve(){var e=Object(c.a)(["\n    margin: 12px 0;\n"]);return ve=function(){return e},e}function we(){var e=Object(c.a)(["\n    font-size: 15px;\n    color: #694f4e;\n    margin-top: 0;\n"]);return we=function(){return e},e}function ke(){var e=Object(c.a)(["\n    font-weight: 700;\n    color: #431216;\n    font-size: 20px;\n    padding-bottom: 14px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid #f5f8fb;\n"]);return ke=function(){return e},e}function ye(){var e=Object(c.a)(["\n    margin-top: 40px;\n"]);return ye=function(){return e},e}var Ie=o.e.div(ye()),Se=o.e.div(ke()),Me=o.e.div(we()),ze=o.e.div(ve()),Ne=function(){var e=Object(u.a)().isDark;return Object(r.jsxs)(Ie,{children:[Object(r.jsx)(Se,{style:{color:e?"white":""},children:"Market Rules"}),Object(r.jsxs)(Me,{style:{color:e?"white":""},children:[Object(r.jsx)(ze,{children:"1. NFTs can be purchased in the NFT Market only by using $MILK;"}),Object(r.jsx)(ze,{children:"2. After NFT is listed in the trading market, operations such as transfer, auction and stake are not allowed."}),Object(r.jsx)(ze,{children:"3. The market will charge 10% of the seller his revenue as a service fee, which is used for burning both $MILK and $COW, adding $MILK liquidity and for Treasury."})]})]})},Ce=n(69);function Te(){var e=Object(c.a)(["\n  display: inline;\n"]);return Te=function(){return e},e}function De(){var e=Object(c.a)(["\n  font-size: 15px;\n  color: #694f4e;\n"]);return De=function(){return e},e}var Fe=o.e.div(De()),Re=o.e.div(Te()),Be=function(e){var t=e.collectionName,n=Object(u.a)().isDark;return Object(r.jsxs)(Fe,{children:[Object(r.jsxs)(Re,{children:[Object(r.jsx)(Ce.b,{to:"/nft-market",style:{color:n?"white":"#431216"},children:"NFT Market"}),Object(r.jsx)("span",{style:{padding:"0 8px",color:n?"white":""},children:">"})]}),Object(r.jsx)(Re,{children:Object(r.jsx)("span",{style:{fontSize:"15px",color:n?"white":"#694f4e"},children:t})})]})};function Le(){var e=Object(c.a)(["\n    margin-top: 32px;\n"]);return Le=function(){return e},e}function Ae(){var e=Object(c.a)(["\n    border-bottom: 1px solid #e8e8e8;\n    margin-bottom: 20px;\n"]);return Ae=function(){return e},e}var Pe=o.e.div(Ae()),We=o.e.div(Le());t.default=function(){var e=Object(a.h)().itemId,t=Object(o.g)().isDark;return Object(r.jsxs)(s.a,{style:{backgroundImage:t?"url(/images/cow/home-backgrounddark.png)":"url(/images/cow/home-backgroundlight.png)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:[Object(r.jsx)(Pe,{children:Object(r.jsx)(b.n,{as:"h1",size:"lg",color:"text",mb:"20px",children:"NFT MARKETPLACE"})}),Object(r.jsx)(Be,{collectionName:"HappyCow"}),Object(r.jsx)(We,{children:Object(r.jsx)(me,{itemId:e})}),Object(r.jsx)(Ne,{})]})}}}]);