import{j as t,c as z}from"./utils.BYJ6mHyy.js";import{r as U,g as V}from"./index.TuTmD60m.js";var b={},L;function Y(){if(L)return b;L=1;function c(i){if(typeof window>"u")return;const m=document.createElement("style");return m.setAttribute("type","text/css"),m.innerHTML=i,document.head.appendChild(m),i}Object.defineProperty(b,"__esModule",{value:!0});var e=U();function j(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var n=j(e);c(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const u=e.forwardRef(function({style:m={},className:O="",autoFill:d=!1,play:f=!0,pauseOnHover:N=!1,pauseOnClick:q=!1,direction:r="left",speed:x=50,delay:S=0,loop:R=0,gradient:G=!1,gradientColor:k="white",gradientWidth:v=200,onFinish:T,onCycleComplete:X,onMount:$,children:p},P){const[E,Z]=e.useState(0),[w,F]=e.useState(0),[y,A]=e.useState(1),[M,H]=e.useState(!1),J=e.useRef(null),o=P||J,h=e.useRef(null),g=e.useCallback(()=>{if(h.current&&o.current){const a=o.current.getBoundingClientRect(),_=h.current.getBoundingClientRect();let s=a.width,l=_.width;(r==="up"||r==="down")&&(s=a.height,l=_.height),A(d&&s&&l&&l<s?Math.ceil(s/l):1),Z(s),F(l)}},[d,o,r]);e.useEffect(()=>{if(M&&(g(),h.current&&o.current)){const a=new ResizeObserver(()=>g());return a.observe(o.current),a.observe(h.current),()=>{a&&a.disconnect()}}},[g,o,M]),e.useEffect(()=>{g()},[g,p]),e.useEffect(()=>{H(!0)},[]),e.useEffect(()=>{typeof $=="function"&&$()},[]);const B=e.useMemo(()=>d?w*y/x:w<E?E/x:w/x,[d,E,w,y,x]),K=e.useMemo(()=>Object.assign(Object.assign({},m),{"--pause-on-hover":!f||N?"paused":"running","--pause-on-click":!f||N&&!q||q?"paused":"running","--width":r==="up"||r==="down"?"100vh":"100%","--transform":r==="up"?"rotate(-90deg)":r==="down"?"rotate(90deg)":"none"}),[m,f,N,q,r]),Q=e.useMemo(()=>({"--gradient-color":k,"--gradient-width":typeof v=="number"?`${v}px`:v}),[k,v]),D=e.useMemo(()=>({"--play":f?"running":"paused","--direction":r==="left"?"normal":"reverse","--duration":`${B}s`,"--delay":`${S}s`,"--iteration-count":R?`${R}`:"infinite","--min-width":d?"auto":"100%"}),[f,r,B,S,R,d]),C=e.useMemo(()=>({"--transform":r==="up"?"rotate(90deg)":r==="down"?"rotate(-90deg)":"none"}),[r]),I=e.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map((_,s)=>n.default.createElement(e.Fragment,{key:s},e.Children.map(p,l=>n.default.createElement("div",{style:C,className:"rfm-child"},l)))),[C,p]);return M?n.default.createElement("div",{ref:o,style:K,className:"rfm-marquee-container "+O},G&&n.default.createElement("div",{style:Q,className:"rfm-overlay"}),n.default.createElement("div",{className:"rfm-marquee",style:D,onAnimationIteration:X,onAnimationEnd:T},n.default.createElement("div",{className:"rfm-initial-child-container",ref:h},e.Children.map(p,a=>n.default.createElement("div",{style:C,className:"rfm-child"},a))),I(y-1)),n.default.createElement("div",{className:"rfm-marquee",style:D},I(y))):null});return b.default=u,b}var ee=Y();const te=V(ee),ae=()=>{const c=[{name:"Communn.io",logo:"/clients/onecommunn_logo.jpeg",width:110,height:20,href:"communn.io"},{name:"Illumora",logo:"/clients/illumora_logo.jpeg",width:110,height:20,href:"Illumora.co"},{name:"BoomBooth Studios",logo:"/clients/boombooth.png",width:110,height:20,href:"boombooth.com"},{name:"Chord AI",logo:"/clients/chordai.jpeg",width:110,height:20,href:"chordai.com"}],e=[{name:"Ojas3D Creatives",logo:"/clients/ojaslogo.png",width:112,height:27,href:"ojas3d.com"},{name:"AgriGrader Global Solutions",logo:"/clients/agrigrader.png",width:112,height:30,href:"https://descript.com"}];return t.jsx("section",{className:"overflow-hidden pb-28 lg:pb-32",children:t.jsxs("div",{className:"container space-y-10 lg:space-y-16",children:[t.jsx("div",{className:"text-center",children:t.jsxs("h2",{className:"mb-4 text-xl text-balance md:text-2xl lg:text-3xl",children:["Trusted by startups and growing businesses.",t.jsx("br",{className:"max-md:hidden"}),t.jsx("span",{className:"text-gray-300",children:"From early-stage startups to growing businesses.            "})]})}),t.jsxs("div",{className:"flex w-full flex-col items-center gap-8",children:[t.jsx(W,{companies:c,logoBoxClassName:"h-20 w-20"}),t.jsx(W,{companies:e,logoBoxClassName:"h-16 w-28",direction:"right"})]})]})})},W=({companies:c,logoBoxClassName:e,direction:j})=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"hidden md:block",children:t.jsx("div",{className:"grid auto-cols-max grid-flow-col items-center justify-center justify-items-center gap-x-20 lg:gap-x-28",children:c.map((n,u)=>t.jsx("a",{href:n.href,target:"_blank",children:t.jsx("div",{className:z("flex items-center justify-center rounded-md",e),children:t.jsx("img",{src:n.logo,alt:`${n.name} logo`,width:n.width,height:n.height,className:"max-h-full max-w-full object-contain transition-opacity hover:opacity-70"})})},u))})}),t.jsx("div",{className:"md:hidden",children:t.jsx(te,{direction:j,pauseOnHover:!0,children:c.map((n,u)=>t.jsx("a",{href:n.href,target:"_blank",className:"mx-8 inline-block transition-opacity hover:opacity-70",children:t.jsx("div",{className:z("flex items-center justify-center",e),children:t.jsx("img",{src:n.logo,alt:`${n.name} logo`,width:n.width,height:n.height,className:"max-h-full max-w-full object-contain"})})},u))})})]});export{ae as Logos};
