(this["webpackJsonpcashcow-frontend"]=this["webpackJsonpcashcow-frontend"]||[]).push([[28],{817:function(n,e,t){"use strict";t.r(e);var r=t(8),i=t(54),c=t(0),a=t(3),o=t(173),s=t(43),u=t(55),l=t(308),d=t(107),b=t(16),p=t(23),f=t(804),x=t(803);function j(){var n=Object(i.a)(["\n    list-style: none;\n    padding: 8px 16px;\n    &:hover {\n      background: ",";\n    }\n  "]);return j=function(){return n},n}function h(){var n=Object(i.a)(["\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    z-index: ",";\n  "]);return h=function(){return n},n}function g(){var n=Object(i.a)(["\n        "," {\n          border-bottom: 1px solid #e8e8e8;\n          border-radius: 16px 16px 0 0;\n        }\n\n        "," {\n          height: auto;\n          transform: scaleY(1);\n          opacity: 1;\n          border: 1px solid #e8e8e8;\n          border-top-width: 0;\n          border-radius: 0 0 16px 16px;\n          box-shadow: #e8e8e8;\n        }\n      "]);return g=function(){return n},n}function O(){var n=Object(i.a)(["\n    cursor: pointer;\n    width: 100%;\n    position: relative;\n    background: white;\n    border-radius: 16px;\n    height: 40px;\n    min-width: 136px;\n    user-select: none;\n    z-index: 20;\n\n    "," {\n      min-width: 168px;\n    }\n\n    ","\n\n    svg {\n      position: absolute;\n      right: 16px;\n      top: 50%;\n      transform: translateY(-50%);\n    }\n  "]);return O=function(){return n},n}function m(){var n=Object(i.a)(["\n    min-width: 136px;\n    height: 0;\n    position: absolute;\n    overflow: hidden;\n    background: ",";\n    z-index: ",";\n    transition: transform 0.15s, opacity 0.15s;\n    transform: scaleY(0);\n    transform-origin: top;\n    opacity: 0;\n    width: 100%;\n\n    "," {\n      min-width: 168px;\n    }\n  "]);return m=function(){return n},n}function v(){var n=Object(i.a)(["\n    width: 100%;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0px 16px;\n    box-shadow: ",";\n    border: 1px solid #e8e8e8;\n    border-radius: 16px;\n    background: ",";\n    transition: border-radius 0.15s;\n  "]);return v=function(){return n},n}var w=function(n){var e=n.options,t=n.onOptionChange,i=n.defaultOptionIndex,o=void 0===i?0:i,s=Object(f.a)(n,["options","onOptionChange","defaultOptionIndex"]),u=Object(d.a)().isDark,l=a.e.div(v(),(function(n){return n.theme.shadows.inset}),u?"rgb(39, 38, 44)":"white"),w=a.e.div(m(),u?"rgb(39, 38, 44)":"white",(function(n){return n.theme.zIndices.dropdown}),(function(n){return n.theme.mediaQueries.sm})),k=Object(a.e)(x.b)(O(),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.isOpen&&Object(a.d)(g(),l,w)})),y=a.e.ul(h(),(function(n){return n.theme.zIndices.dropdown})),C=a.e.li(j(),u?"#4e4e4e":"#e8e8e8"),I=Object(c.useRef)(null),z=Object(c.useState)(!1),R=Object(p.a)(z,2),E=R[0],L=R[1],P=Object(c.useState)(o),M=Object(p.a)(P,2),T=M[0],A=M[1],S=function(n){L(!E),n.stopPropagation()};return Object(c.useEffect)((function(){var n=function(){L(!1)};return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[]),Object(r.jsxs)(k,Object(b.a)(Object(b.a)({isOpen:E},s),{},{children:[Object(r.jsx)(l,{onClick:S,children:Object(r.jsx)(x.c,{children:e[T].label})}),Object(r.jsx)(x.a,{color:"text",onClick:S}),Object(r.jsx)(w,{children:Object(r.jsx)(y,{ref:I,children:e.map((function(n,i){return i!==T?Object(r.jsx)(C,{onClick:(c=i,function(){A(c),L(!1),t&&t(e[c])}),children:Object(r.jsx)(x.c,{children:n.label})},n.label):null;var c}))})})]}))};function k(){var n=Object(i.a)(["\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  bottom: 4px;\n  height: auto;\n  padding: 0 20px;\n  transform: translateY(0) !important;\n  border: 0 none;\n  background: #00d86c;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n"]);return k=function(){return n},n}function y(){var n=Object(i.a)(["\n  border: 1px solid #e8e8e8;\n  border-radius: 12px;\n  height: 44px;\n  line-height: 44px;\n  box-sizing: border-box;\n  font-size: 16px;\n  padding: 0 68px 0 16px;\n  display: flex;\n  outline: none;\n  width: 230px;\n  color: #431216;\n  background: transparent;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return y=function(){return n},n}function C(){var n=Object(i.a)(["\n  display: flex;\n  position: relative;\n"]);return C=function(){return n},n}function I(){var n=Object(i.a)(["\n  display: flex;\n  flex: right;\n  align-items: center;\n\n  @media (max-width: 768px) {\n    margin-top: 10px;\n    flex-wrap: wrap;\n\n    > div {\n      width: 40%;\n      margin-top: 10px;\n    }\n  }\n"]);return I=function(){return n},n}function z(){var n=Object(i.a)(["\n  flex: left;\n  align-items: center;\n"]);return z=function(){return n},n}function R(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]);return R=function(){return n},n}var E=a.e.div(R()),L=a.e.div(z()),P=a.e.div(I()),M=(a.e.div(C()),a.e.input(y()),a.e.a(k()),[{label:"Recently listed",value:{field:"RecentlyListed",direction:"desc"}},{label:"Lowest price",value:{field:"LowestPrice",direction:"asc"}},{label:"Highest price",value:{field:"HighestPrice",direction:"desc"}}]),T=[{label:"All NFTs",value:{field:"All",direction:"asc"}},{label:"HappyCows",value:{field:"HappyCows",direction:"desc"}},{label:"Genesis",value:{field:"AirNFT",direction:"asc"}}],A=function(){var n=Object(u.b)(),e=Object(d.a)().isDark;return Object(r.jsxs)(E,{children:[Object(r.jsx)(L,{style:{color:e?"white":"#035569",fontWeight:"bold"},children:"NFT MARKETPLACE"}),Object(r.jsxs)(P,{children:[Object(r.jsx)(w,{options:M,onOptionChange:function(e){return n(Object(l.c)(e.value))},style:{marginRight:"15px",background:e?"#27262c":""}}),Object(r.jsx)(w,{options:T,onOptionChange:function(e){return n(Object(l.b)(e.value))},style:{marginRight:"15px"}})]})]})},S=t(4),H=t.n(S),N=t(15),F=t(672),D=t(651),Y=t(128),K=t.n(Y),W=t(39),J=t(20),Q=t(69),U=t(44),Z=t(666),B=t(665),G=t(78),$=t(667),q=t(664);function V(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n"]);return V=function(){return n},n}function X(){var n=Object(i.a)(["\n  font-size: 22px;\n  font-weight: 700;\n"]);return X=function(){return n},n}function _(){var n=Object(i.a)(["\n  align-items: center;\n  color: #431216;\n  margin-top: 5px;\n  display: flex;\n  justify-content: space-between;\n"]);return _=function(){return n},n}function nn(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  color: #694f4e;\n"]);return nn=function(){return n},n}function en(){var n=Object(i.a)(["\n  padding: 12px 24px 20px;\n  margin: 0;\n"]);return en=function(){return n},n}function tn(){var n=Object(i.a)(["\n  height: 1px;\n  min-width: unset;\n  background-image: url(../images/line.jpg);\n  background-repeat: repeat-x;\n  position: relative;\n  background-size: contain;\n  background-position: 50%;\n"]);return tn=function(){return n},n}function rn(){var n=Object(i.a)(["\n  font-size: 18px;\n  line-height: 1.2;\n  color: #431216;\n  word-break: break-word;\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-clamp: 2;\n  display: flex;\n  align-items: center;\n"]);return rn=function(){return n},n}function cn(){var n=Object(i.a)(["\n  height: 68px;\n  padding: 0 24px;\n  display: flex;\n  align-items: center;\n"]);return cn=function(){return n},n}function an(){var n=Object(i.a)(["\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  transform-origin: center;\n  background-size: auto 100%;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  &:hover {\n    transform: scale(1.04);\n  }\n"]);return an=function(){return n},n}function on(){var n=Object(i.a)(["\n  position: relative;\n  padding-bottom: 100%;\n  height: 0;\n  border-top-right-radius: 16px;\n  border-top-left-radius: 16px;\n  overflow: hidden;\n"]);return on=function(){return n},n}function sn(){var n=Object(i.a)(["\n  paddingtop: 2px;\n"]);return sn=function(){return n},n}function un(){var n=Object(i.a)(["\n  cursor: pointer;\n  min-width: 230px;\n  max-width: calc(25% - 30px);\n  flex: 1;\n  margin: 30px 15px 0;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 3%), 0 4px 6px -2px rgb(0 0 0 / 1%);\n  position: relative;\n"]);return un=function(){return n},n}var ln=a.e.div(un()),dn=a.e.div(sn()),bn=a.e.div(on()),pn=a.e.div(an()),fn=a.e.div(cn()),xn=a.e.div(rn()),jn=a.e.div(tn()),hn=a.e.div(en()),gn=a.e.div(nn()),On=a.e.div(_()),mn=a.e.div(X()),vn=a.e.div(V()),wn=new K.a(K.a.givenProvider),kn=function(n){var e=n.nftEachItem,t=Object(D.i)().account,i=Object(d.a)().isDark,a=Object(c.useState)(!1),o=Object(p.a)(a,2),s=o[0],u=o[1],l=Object(c.useState)(""),b=Object(p.a)(l,2),f=b[0],x=b[1],j=Object(c.useState)(""),h=Object(p.a)(j,2),g=h[0],O=h[1],m=Object(c.useState)(0),v=Object(p.a)(m,2),w=v[0],k=v[1],y=Object(G.g)(),C=Object(c.useMemo)((function(){return new wn.eth.Contract(B.abi,Object(W.c)())}),[]),I=Object(c.useMemo)((function(){return new wn.eth.Contract(Z.abi,Object(W.a)())}),[]),z=Object(c.useCallback)(Object(N.a)(H.a.mark((function n(){var r,i,c,a,o;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=null,!(i=e.nftContract===Object(W.a)())){n.next=8;break}return n.next=5,I.methods.tokenURI(e.tokenId).call({from:t});case 5:r=n.sent,n.next=11;break;case 8:return n.next=10,C.methods.tokenURI(e.tokenId).call({from:t});case 10:r=n.sent;case 11:return e.seller===t&&u(!0),n.next=14,fetch(r);case 14:return c=n.sent,n.next=17,c.json();case 17:a=n.sent,o=a.image,i?O(o):(o=o.slice(7),O("".concat($.a).concat(o))),x(a.name),k(y.toNumber());case 22:case"end":return n.stop()}}),n)}))),[t,C,I,e,y]);return Object(c.useEffect)((function(){z()}),[z]),Object(r.jsx)(Q.b,{to:"/nft-market/".concat(e.itemId),children:Object(r.jsxs)(ln,{style:{background:i?"#27262c":""},children:[Object(r.jsxs)(dn,{children:[Object(r.jsx)(bn,{children:Object(r.jsx)(pn,{style:{backgroundImage:"url(".concat(g,")")}})}),Object(r.jsx)(fn,{children:Object(r.jsxs)(xn,{style:{color:i?"white":""},children:["".concat(f),s?Object(r.jsx)("svg",{width:"20",height:"20",style:{marginLeft:"15px"},viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M7 0C3.12667 0 0 3.12667 0 7C0 10.8733 3.12667 14 7 14C10.8733 14 14 10.8733 14 7C14 3.12667 10.8733 0 7 0ZM7 12.4444C5.42889 12.4444 3.99778 11.7756 3.01778 10.7022C3.04889 9.25556 3.84222 8.01111 5.02444 7.32667C5.11778 7.26444 5.22667 7.21778 5.33556 7.17111C4.51111 6.62667 3.95111 5.67778 3.95111 4.62C3.95111 2.98667 5.24222 1.64889 6.86 1.55556C6.87556 1.55556 6.89111 1.55556 6.89111 1.55556C6.93778 1.55556 6.96889 1.55556 7.01556 1.55556C7.03111 1.55556 7.06222 1.55556 7.07778 1.55556C7.17111 1.55556 7.26444 1.55556 7.37333 1.57111C8.69556 1.72667 9.8 2.75333 10.0333 4.06C10.2511 5.35111 9.67556 6.53333 8.69556 7.17111C8.80445 7.21778 8.91333 7.26444 9.00667 7.32667C10.1733 7.99556 10.9822 9.25556 11.0133 10.7022C10.0022 11.7756 8.57111 12.4444 7 12.4444Z",fill:i?"white":"#431216"})}):""]})})]}),Object(r.jsx)(jn,{}),Object(r.jsxs)(hn,{children:[Object(r.jsxs)(gn,{style:{color:i?"white":""},children:["Sale Price",Object(r.jsxs)("span",{children:[" ","\u2248 $ ",Object(q.c)(Math.floor(w*parseInt(Object(U.fromWei)(e.price,"ether"))*100)/100)]})]}),Object(r.jsxs)(On,{children:[Object(r.jsx)(mn,{style:{color:i?"white":""},children:Object(q.c)(Object(U.fromWei)(e.price,"ether"))}),Object(r.jsxs)(vn,{style:{color:i?"white":""},children:[Object(r.jsx)("img",{src:"/images/farms/dogecorn.png",alt:"token",style:{width:"18px",height:"18px",marginRight:"4px"}}),"MILK"]})]})]})]})})};function yn(){var n=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -15px;\n"]);return yn=function(){return n},n}var Cn=a.e.div(yn()),In=new K.a(K.a.givenProvider),zn=function(){var n=Object(D.i)().account,e=Object(c.useState)([]),t=Object(p.a)(e,2),i=t[0],a=t[1],o=Object(u.c)((function(n){return n.markets.sortOrder})),s=Object(u.c)((function(n){return n.markets.collectionType})),l=Object(c.useMemo)((function(){return new In.eth.Contract(F.abi,Object(W.f)())}),[]),d=Object(c.useCallback)(Object(N.a)(H.a.mark((function e(){var t,r,i,c,u,d,b,p,f,x,j,h,g,O,m,v;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.methods.fetchMarketItems().call({from:n});case 2:for(t=e.sent,r=[],i=0;i<t.length;i++)r.push(t[i]);c=[],u=0,e.t0=s.field,e.next="All"===e.t0?10:"HappyCows"===e.t0?12:"AirNFT"===e.t0?14:16;break;case 10:return c=r,e.abrupt("break",17);case 12:for(d=0;d<r.length;d++)r[d].nftContract===J.a.happycow[2e3]&&(c[u]=r[d],u++);return e.abrupt("break",17);case 14:for(b=0;b<r.length;b++)r[b].nftContract===J.a.airnft[2e3]&&(c[u]=r[b],u++);return e.abrupt("break",17);case 16:return e.abrupt("break",17);case 17:e.t1=o.field,e.next="RecentlyListed"===e.t1?20:"LowestPrice"===e.t1?22:"HighestPrice"===e.t1?24:26;break;case 20:for(p=0;p<c.length-1;p++)for(f=p+1;f<c.length;f++)parseInt(c[p].listedTime)<parseInt(c[f].listedTime)&&(x=c[p],c[p]=c[f],c[f]=x);return e.abrupt("break",27);case 22:for(j=0;j<c.length-1;j++)for(h=j+1;h<c.length;h++)parseInt(c[j].price)>parseInt(c[h].price)&&(g=c[j],c[j]=c[h],c[h]=g);return e.abrupt("break",27);case 24:for(O=0;O<c.length-1;O++)for(m=O+1;m<c.length;m++)parseInt(c[O].price)<parseInt(c[m].price)&&(v=c[O],c[O]=c[m],c[m]=v);return e.abrupt("break",27);case 26:return e.abrupt("break",27);case 27:a(c);case 28:case"end":return e.stop()}}),e)}))),[n,l,s,o]);return Object(c.useEffect)((function(){d()}),[d]),Object(r.jsx)(Cn,{children:i.map((function(n){return Object(r.jsx)(kn,{nftEachItem:n},n.itemId)}))})};function Rn(){var n=Object(i.a)(["\n  border-bottom: 1px solid #e8e8e8;\n  margin-bottom: 20px;\n"]);return Rn=function(){return n},n}var En=a.e.div(Rn());e.default=function(){var n=Object(a.g)().isDark;return Object(r.jsxs)(o.a,{style:{backgroundImage:n?"url(/images/cow/home-backgrounddark.png)":"url(/images/cow/home-backgroundlight.png)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:[Object(r.jsx)(En,{children:Object(r.jsx)(s.n,{as:"h1",size:"lg",color:"text",mb:"20px",children:"NFT MARKETPLACE"})}),Object(r.jsx)(A,{}),Object(r.jsx)(zn,{})]})}}}]);