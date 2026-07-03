import{j as A,a as l,b as nA}from"./vendor-react-CpPiCM6v.js";import{c as Ee}from"./vendor-react-dom-DZkjRFWO.js";import{Q as De}from"./vendor-tanstack-query-core-UCBGiVNw.js";import{Q as Se}from"./vendor-tanstack-react-query-BxH3BCPg.js";import{L as c,u as ke,B as Te}from"./vendor-react-router-dom-qfD169su.js";import{j as Qe}from"./vendor-next-themes-DZkRX55m.js";import{$ as He,u as rA}from"./vendor-sonner-D6DxOT9r.js";import{V as ie,R as ae,A as se,C as ne,T as re,D as oe,P as Oe}from"./vendor-radix-ui-react-toast-D0wE8IxY.js";import{c as Pe}from"./vendor-class-variance-authority-5VPnzWs2.js";import{c as ze}from"./vendor-clsx-B-dksMZM.js";import{t as Le}from"./vendor-tailwind-merge-Ct8u8BPc.js";import{X as HA,C as _A,a as lA,M as Me,A as O,S as M,U as AA,b as pA,Z as U,c as OA,P as PA,N as bA,E as zA,d as oA,e as wA,f as K,g as Q,h as yA,i as Fe,W as le,Q as Ge,T as sA,j as Y,k as ce,l as V,m as fA,n as de,o as BA,G as CA,p as W,L as Re,q as cA,r as LA,s as MA,t as j,F as We,u as Ue,v as JA,H as Ye,w as IA,x as Je,D as EA,y as pe,z as Ke,B as J,I as ge,J as xe,R as gA,K as Ve,V as Ze,O as Xe,Y as $e,_ as me,$ as he,a0 as At,a1 as et,a2 as tt,a3 as it,a4 as at,a5 as KA,a6 as VA,a7 as FA,a8 as ZA,a9 as ue,aa as GA,ab as XA,ac as st,ad as nt,ae as rt,af as ot,ag as lt,ah as ct,ai as dt,aj as pt,ak as gt,al as xt,am as mt,an as ht,ao as $A,ap as ut,aq as ft}from"./vendor-lucide-react-AKvfHyhY.js";import{C as fe,P as qt}from"./vendor-radix-ui-react-tooltip-DYSkeDJK.js";import{F as DA,a as SA,b as Ae,c as kA,d as TA}from"./vendor-react-icons-DfSbBfUs.js";import{a as xA,d as bt,e as wt,f as y}from"./vendor-react-router-CCT6Cl0p.js";import{m as t,A as R}from"./vendor-framer-motion-YDI22ZEQ.js";import"./vendor-scheduler-CWG1rEj-.js";import"./vendor-remix-run-router-Dr5p47Wl.js";import"./vendor-radix-ui-primitive-Dc_FVRD7.js";import"./vendor-radix-ui-react-compose-refs-Dbpy8wyI.js";import"./vendor-radix-ui-react-collection-V9uVsX4e.js";import"./vendor-radix-ui-react-context-DahgZt-N.js";import"./vendor-radix-ui-react-dismissable-layer-DmU0RMj4.js";import"./vendor-radix-ui-react-primitive-DjMxABBQ.js";import"./vendor-radix-ui-react-use-callback-ref-ByXG8lno.js";import"./vendor-radix-ui-react-use-escape-keydown-DnJB5kEo.js";import"./vendor-radix-ui-react-portal-xcrgu9HX.js";import"./vendor-radix-ui-react-use-layout-effect-BXSm1zcD.js";import"./vendor-radix-ui-react-presence-DUIFpjZf.js";import"./vendor-radix-ui-react-use-controllable-state-FAI012WX.js";import"./vendor-radix-ui-react-visually-hidden-DZhAc1Dl.js";import"./vendor-radix-ui-react-popper-BLjjlnAb.js";import"./vendor-floating-ui-react-dom-DX6nU18p.js";import"./vendor-floating-ui-dom-B05hC6ee.js";import"./vendor-floating-ui-core-X4vNhrfm.js";import"./vendor-floating-ui-utils-C1Ez6IfT.js";import"./vendor-radix-ui-react-arrow-NzWQcdYU.js";import"./vendor-radix-ui-react-use-size-C9ugG8bA.js";import"./vendor-motion-dom-BPK2Sc3z.js";import"./vendor-motion-utils-DF2Khz3i.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))n(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const w of h.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&n(w)}).observe(document,{childList:!0,subtree:!0});function s(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function n(d){if(d.ep)return;d.ep=!0;const h=s(d);fetch(d.href,h)}})();const Ct=({...e})=>{const{theme:i="system"}=Qe();return A.jsx(He,{theme:i,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})},_t=1,yt=1e6;let vA=0;function vt(){return vA=(vA+1)%Number.MAX_SAFE_INTEGER,vA.toString()}const NA=new Map,ee=e=>{if(NA.has(e))return;const i=setTimeout(()=>{NA.delete(e),dA({type:"REMOVE_TOAST",toastId:e})},yt);NA.set(e,i)},Nt=(e,i)=>{switch(i.type){case"ADD_TOAST":return{...e,toasts:[i.toast,...e.toasts].slice(0,_t)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(s=>s.id===i.toast.id?{...s,...i.toast}:s)};case"DISMISS_TOAST":{const{toastId:s}=i;return s?ee(s):e.toasts.forEach(n=>{ee(n.id)}),{...e,toasts:e.toasts.map(n=>n.id===s||s===void 0?{...n,open:!1}:n)}}case"REMOVE_TOAST":return i.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==i.toastId)}}},hA=[];let uA={toasts:[]};function dA(e){uA=Nt(uA,e),hA.forEach(i=>{i(uA)})}function jt({...e}){const i=vt(),s=d=>dA({type:"UPDATE_TOAST",toast:{...d,id:i}}),n=()=>dA({type:"DISMISS_TOAST",toastId:i});return dA({type:"ADD_TOAST",toast:{...e,id:i,open:!0,onOpenChange:d=>{d||n()}}}),{id:i,dismiss:n,update:s}}function Bt(){const[e,i]=l.useState(uA);return l.useEffect(()=>(hA.push(i),()=>{const s=hA.indexOf(i);s>-1&&hA.splice(s,1)}),[e]),{...e,toast:jt,dismiss:s=>dA({type:"DISMISS_TOAST",toastId:s})}}function eA(...e){return Le(ze(e))}const It=Oe,qe=l.forwardRef(({className:e,...i},s)=>A.jsx(ie,{ref:s,className:eA("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...i}));qe.displayName=ie.displayName;const Et=Pe("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),be=l.forwardRef(({className:e,variant:i,...s},n)=>A.jsx(ae,{ref:n,className:eA(Et({variant:i}),e),...s}));be.displayName=ae.displayName;const Dt=l.forwardRef(({className:e,...i},s)=>A.jsx(se,{ref:s,className:eA("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...i}));Dt.displayName=se.displayName;const we=l.forwardRef(({className:e,...i},s)=>A.jsx(ne,{ref:s,className:eA("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...i,children:A.jsx(HA,{className:"h-4 w-4"})}));we.displayName=ne.displayName;const Ce=l.forwardRef(({className:e,...i},s)=>A.jsx(re,{ref:s,className:eA("text-sm font-semibold",e),...i}));Ce.displayName=re.displayName;const _e=l.forwardRef(({className:e,...i},s)=>A.jsx(oe,{ref:s,className:eA("text-sm opacity-90",e),...i}));_e.displayName=oe.displayName;function St(){const{toasts:e}=Bt();return A.jsxs(It,{children:[e.map(function({id:i,title:s,description:n,action:d,...h}){return A.jsxs(be,{...h,children:[A.jsxs("div",{className:"grid gap-1",children:[s&&A.jsx(Ce,{children:s}),n&&A.jsx(_e,{children:n})]}),d,A.jsx(we,{})]},i)}),A.jsx(qe,{})]})}const kt=qt,Tt=l.forwardRef(({className:e,sideOffset:i=4,...s},n)=>A.jsx(fe,{ref:n,sideOffset:i,className:eA("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...s}));Tt.displayName=fe.displayName;const Qt="/assets/chn-logo-DlFuQEFp.png",Ht=()=>{const[e,i]=l.useState(!1),[s,n]=l.useState(!1),[d,h]=l.useState(new Set),w=o=>{h(b=>{const B=new Set(b);return B.has(o)?B.delete(o):B.add(o),B})},I=()=>{n(!1),h(new Set),u(null),v(null)},[p,u]=l.useState(null),[x,v]=l.useState(null),z=o=>{switch(o){case"IT Infrastructure":return A.jsx(bA,{size:18,strokeWidth:2.5});case"Technology":return A.jsx(PA,{size:18,strokeWidth:2.5});case"Software Solutions":return A.jsx(OA,{size:18,strokeWidth:2.5});case"Digital Solutions":return A.jsx(U,{size:18,strokeWidth:2.5});case"Consulting":return A.jsx(AA,{size:18,strokeWidth:2.5});case"Cyber Security":return A.jsx(M,{size:16,strokeWidth:2.5});case"Network Management":return A.jsx(pA,{size:16,strokeWidth:2.5});case"Analytics":return A.jsx(O,{size:16,strokeWidth:2.5});case"Workforce Management":return A.jsx(AA,{size:18,strokeWidth:2.5});case"Payroll & Compliance":return A.jsx(M,{size:18,strokeWidth:2.5});case"Training & Development":return A.jsx(O,{size:18,strokeWidth:2.5});default:return A.jsx("div",{className:"w-4 h-4 rounded-full bg-blue-100"})}},[k,L]=l.useState({left:0,width:0,opacity:0}),P=l.useRef(null),q=l.useRef(null),E=l.useRef(null),g=xA(),m=o=>{E.current&&clearTimeout(E.current),E.current=setTimeout(()=>{v(o)},350)};l.useEffect(()=>{const o=()=>{i(window.scrollY>20)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const C=o=>{if(o.link&&o.link!=="#"&&g.pathname===o.link)return!0;const b=o.children||o.dropdown;return b?b.some(B=>C(B)):!1},H=o=>{if(o){const b=P.current?.getBoundingClientRect(),B=o.getBoundingClientRect();b&&L({left:B.left-b.left,width:B.width,opacity:1})}else L(b=>({...b,opacity:0}))},tA=(o,b)=>{q.current&&clearTimeout(q.current),u(o),v(null),H(b.currentTarget)},Z=()=>{q.current=setTimeout(()=>{u(null),v(null);const o=P.current?.querySelector(".active-nav-link");o?H(o):L(b=>({...b,opacity:0}))},500)};l.useEffect(()=>{setTimeout(()=>{const o=P.current?.querySelector(".active-nav-link");o?H(o):L(b=>({...b,opacity:0}))},500)},[g.pathname]);const X=[{name:"About CHN",link:"/about"},{name:"Technology",link:"",children:[{name:"IT Infrastructure",children:[{name:"Network Management",link:"/network"},{name:"End User Computing",link:"/enduser"},{name:"Cyber Security",link:"/cybersecurity"},{name:"Server Administration",link:"/server"},{name:"LAN Cabling & Surveillance",link:"/lancabling"}]},{name:"Software Solutions",children:[{name:"Web Design & Development",link:"/webdesign"},{name:"Application Development",link:"/application"}]},{name:"Digital Solutions",children:[{name:"Data Analytics",link:"/dataanalytics"},{name:"Automation",link:"/automation"}]}]},{name:"Consulting",link:"",layout:"cluster",children:[{name:"Workforce Management",link:"/workforce"},{name:"Payroll & Compliance",link:"/payroll"},{name:"Training & Development",link:"/training"}]},{name:"Careers",link:"/careers"},{name:"Contact Us",link:"/contact"},{name:"Blogs",link:"/blogs"}];return A.jsx(A.Fragment,{children:A.jsxs("nav",{className:`w-full z-[100] transition-all duration-300 fixed top-0 ${e?"bg-white shadow-md h-[70px]":"bg-white shadow-sm border-b border-slate-100 h-[80px]"}`,children:[A.jsxs("div",{className:"max-w-7xl mx-auto w-full px-6 lg:px-12 flex items-center justify-between h-full",children:[A.jsx("div",{className:"flex-1 flex items-center justify-start",children:A.jsx(c,{to:"/",className:"flex items-center no-underline group translate-y-[-2px]",children:A.jsx("img",{src:Qt,alt:"CHN Technologies Logo",className:"h-[46px] w-auto object-contain"})})}),A.jsxs("ul",{ref:P,className:"hidden lg:flex flex-none items-center justify-center lg:gap-4 xl:gap-8 m-0 p-0 list-none font-sans h-full relative",children:[A.jsx(t.div,{className:"absolute bottom-[20px] h-[3px] bg-blue-600 rounded-full z-10",initial:!1,animate:{left:k.left,width:k.width,opacity:k.opacity},transition:{type:"spring",stiffness:450,damping:35}}),X.map(o=>{const b=C(o),B=o.children,F=B&&(o.layout==="cluster"||o.children.some(f=>f.children)),T=p===o.name;return F&&o.children[0]?.name,F&&(o.children.find(f=>f.name===x)||o.children[0]),A.jsx("li",{className:"relative h-full flex items-center",children:A.jsxs("div",{className:"relative h-full flex items-center",onMouseEnter:()=>{q.current&&clearTimeout(q.current)},onMouseLeave:Z,children:[A.jsxs(c,{to:o.link,onMouseEnter:f=>tA(o.name,f),className:`flex items-center text-[15px] font-bold tracking-tight transition-all duration-300 no-underline outline-none focus:outline-none px-4 py-2 rounded-xl relative z-20 ${b?"text-blue-600 active-nav-link":"text-[#1a2b4b] hover:text-blue-600 hover:bg-blue-50/50"}`,children:[o.name,B&&A.jsx(_A,{size:14,className:`ml-1 transition-transform duration-500 ${T?"rotate-180":""}`})]}),A.jsx(R,{children:B&&T&&A.jsx(t.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:4},transition:{duration:.4},onMouseEnter:()=>{q.current&&clearTimeout(q.current)},onMouseLeave:Z,className:"absolute top-[100%] left-[-10px] mt-[-6px] pt-[22px] z-[110]",children:F?A.jsx("div",{className:"relative",children:A.jsx("div",{className:"bg-white/95 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-100 rounded-[24px] min-w-[280px]",children:A.jsx("div",{className:"py-4",children:o.children.map(f=>{const G=x===f.name;return A.jsxs("div",{className:"relative",children:[f.children&&f.children.length>0?A.jsx("button",{type:"button",onMouseEnter:()=>m(f.name),onFocus:()=>m(f.name),className:`w-full text-left px-4 py-3 transition-all duration-200 ${G?"bg-blue-600 text-white":"text-slate-700 hover:bg-slate-50"}`,children:A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("span",{className:`transition-colors duration-200 ${G?"text-white":"text-blue-600"}`,children:z(f.name)}),A.jsx("span",{className:"text-[15px] font-semibold tracking-wide",children:f.name}),A.jsx(lA,{size:16,className:`ml-auto transition-transform ${G?"rotate-90 text-white":"text-slate-400"}`})]})}):A.jsx(c,{to:f.link||"#",onClick:I,onMouseEnter:()=>{E.current&&clearTimeout(E.current),v(null)},className:"block w-full text-left px-4 py-3 transition-all duration-200 no-underline hover:bg-slate-50",children:A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("span",{className:"transition-colors duration-200 text-blue-600",children:z(f.name)}),A.jsx("span",{className:"text-[15px] font-semibold tracking-wide text-slate-700",children:f.name})]})}),A.jsx(R,{children:G&&f.children&&f.children.length>0&&A.jsx(t.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.4},onMouseEnter:()=>{E.current&&clearTimeout(E.current),v(f.name)},className:"absolute top-0 left-[calc(100%+12px)] before:absolute before:inset-y-0 before:-left-[12px] before:w-[12px] bg-white/95 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-100 rounded-[24px] py-4 px-4 min-w-[320px] z-[120]",children:f.children.map(D=>A.jsx(c,{to:D.link,onClick:I,className:"block rounded-2xl px-4 py-3 mb-2 text-[15px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200 no-underline last:mb-0",children:D.name},D.name))})})]},f.name)})})})}):A.jsxs("div",{className:"bg-slate-950 text-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] rounded-[24px] border border-slate-800 py-4 px-4 overflow-hidden min-w-[320px]",children:[A.jsx("div",{className:"px-2 pb-2 text-sm uppercase tracking-[0.2em] font-semibold text-slate-400 border-b border-slate-800 mb-2",children:o.name}),A.jsx("div",{className:"flex flex-col gap-2",children:o.children.map((f,G)=>{const D=C(f);return A.jsx(t.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:G*.07+.1},className:"px-2",children:A.jsxs(c,{to:f.link||"#",onClick:I,className:`group flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold tracking-tight no-underline transition-all duration-200 ${D?"text-white bg-blue-600 shadow-md":"text-slate-200 hover:bg-slate-900 hover:text-white"}`,children:[f.name,A.jsx(lA,{size:14,className:`transition-all duration-300 ${D?"opacity-100 translate-x-0":"opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}`})]})},f.name)})})]})})})]})},o.name)})]}),A.jsxs("div",{className:"flex-1 flex items-center justify-end gap-6 text-slate-600",children:[A.jsx("div",{className:"hidden lg:flex items-center gap-4",children:[{icon:A.jsx(DA,{size:14}),link:"https://www.facebook.com/people/CHN-Technologies/100068692698660/"},{icon:A.jsx(SA,{size:14}),link:"https://www.linkedin.com/company/chn-technologies/"},{icon:A.jsx(Ae,{size:14}),link:"https://x.com/chn_india70840"},{icon:A.jsx(kA,{size:14}),link:"https://www.instagram.com/chntech_india/"},{icon:A.jsx(TA,{size:14}),link:"https://www.youtube.com/channel/UCX3GW4PtNMIOogEMdyhB_mw"}].map((o,b)=>A.jsx("a",{href:o.link,target:"_blank",rel:"noopener noreferrer",className:"hover:text-blue-600 transition-all hover:-translate-y-0.5 opacity-80 hover:opacity-100",children:o.icon},b))}),A.jsx("button",{className:"lg:hidden text-[#002e5b] p-2 hover:bg-slate-100 rounded-lg transition-colors border-none bg-transparent cursor-pointer relative z-[110]",onClick:()=>s?I():n(!0),"aria-label":s?"Close menu":"Open menu",children:s?A.jsx(HA,{size:24}):A.jsx(Me,{size:24})})]})]}),A.jsx(R,{children:s&&A.jsx(t.div,{initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"},transition:{type:"spring",damping:25,stiffness:200},className:"fixed inset-0 top-0 pt-[80px] w-full bg-white lg:hidden z-[95] overflow-y-auto",children:A.jsxs("div",{className:"p-8 pb-32",children:[A.jsxs("div",{className:"mb-10",children:[A.jsx("span",{className:"text-[12px] font-extrabold text-blue-600 tracking-widest block mb-4",children:"Navigation"}),A.jsx("ul",{className:"flex flex-col gap-6 m-0 list-none p-0",children:X.map(o=>{const b=C(o),B=o.children,F=d.has(o.name);return A.jsxs("li",{className:"border-b border-slate-50 pb-4 last:border-0",children:[A.jsxs("div",{className:"flex items-center justify-between group",children:[A.jsx(c,{to:o.link,className:`text-2xl font-bold no-underline transition-colors flex items-center gap-3 ${b?"text-blue-600":"text-[#1a2b4b]"}`,onClick:()=>{B||I()},children:o.name}),B&&A.jsx("button",{onClick:()=>w(o.name),className:`text-slate-400 hover:text-blue-600 transition-transform w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 ${F?"rotate-180 bg-blue-50 text-blue-600":""}`,children:A.jsx(_A,{size:22})})]}),A.jsx(R,{children:B&&F&&A.jsx(t.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"overflow-hidden",children:A.jsx("ul",{className:"flex flex-col gap-5 pl-4 mt-6 border-l-2 border-blue-100 list-none",children:o.children.map((T,f)=>{const G=C(T),D=d.has(`${o.name}-${T.name}`);return A.jsxs("li",{children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsx(c,{to:T.link||"#",className:`text-[17px] font-semibold no-underline block flex-1 ${G?"text-blue-600":"text-slate-600"}`,onClick:()=>{T.children||I()},children:T.name}),T.children&&A.jsx("button",{onClick:()=>w(`${o.name}-${T.name}`),className:`text-slate-400 transition-transform p-2 ${D?"rotate-180 text-blue-600":""}`,children:A.jsx(_A,{size:18})})]}),T.children&&D&&A.jsx("ul",{className:"flex flex-col gap-3 pl-4 mt-4 list-none border-l border-slate-200",children:T.children.map(a=>{const r=C(a);return A.jsxs("li",{children:[A.jsx(c,{to:a.link||"#",className:`text-[15px] font-medium no-underline block py-1 ${r?"text-blue-600":"text-slate-500"}`,onClick:()=>I(),children:a.name}),a.children&&A.jsx("ul",{className:"flex flex-col gap-2 pl-4 mt-2 list-none border-l border-slate-100",children:a.children.map(_=>A.jsx("li",{children:A.jsx(c,{to:_.link,className:`text-[14px] font-medium no-underline block py-1 ${g.pathname===_.link?"text-blue-600 font-bold":"text-slate-400"}`,onClick:()=>I(),children:_.name})},_.name))})]},a.name)})})]},T.name)})})})})]},o.name)})})]}),A.jsxs("div",{className:"pt-8 mt-10 border-t border-slate-100",children:[A.jsx("span",{className:"text-[12px] font-extrabold text-blue-600 tracking-widest block mb-6",children:"Connect With Us"}),A.jsx("div",{className:"flex gap-4",children:[{icon:A.jsx(DA,{size:20}),link:"https://www.facebook.com/people/CHN-Technologies/100068692698660/"},{icon:A.jsx(SA,{size:20}),link:"https://www.linkedin.com/company/chn-technologies/"},{icon:A.jsx(Ae,{size:20}),link:"https://x.com/chn_india70840"},{icon:A.jsx(kA,{size:20}),link:"https://www.instagram.com/chntech_india/"},{icon:A.jsx(TA,{size:20}),link:"https://www.youtube.com/channel/UCX3GW4PtNMIOogEMdyhB_mw"}].map((o,b)=>A.jsx("a",{href:o.link,target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1a2b4b] hover:bg-blue-600 hover:text-white transition-all",children:o.icon},b))})]})]})})})]})})},ye=()=>A.jsx("footer",{className:"w-full bg-[#0a1122] text-white pt-16 pb-8",children:A.jsxs("div",{className:"container mx-auto px-6 lg:px-12",children:[A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8",children:[A.jsxs("div",{className:"space-y-6 text-center md:text-left",children:[A.jsx("h3",{className:"text-2xl font-bold tracking-tight text-white/85",children:"CHN Technologies"}),A.jsxs("p",{className:"text-[#00c2ff] text-sm font-semibold tracking-wide mx-auto md:mx-0",children:["Empowering Businesses Through",A.jsx("br",{}),"Technology & Expertise"]}),A.jsx("p",{className:"text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0",children:"CHN Technologies is a leading provider of technology and consulting solutions delivering IT, HR, and business services with innovation and trust."}),A.jsxs("div",{className:"pt-4",children:[A.jsx("h4",{className:"text-lg font-bold mb-4 text-white/85",children:"Follow Us"}),A.jsxs("div",{className:"flex gap-3 justify-center md:justify-start",children:[A.jsx("a",{href:"https://www.linkedin.com/company/chn-technologies/",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-[#0077b5] flex items-center justify-center rounded-lg hover:opacity-80 transition-all",children:A.jsx(SA,{size:20})}),A.jsx("a",{href:"https://www.facebook.com/people/CHN-Technologies/100068692698660/",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-[#3b5998] flex items-center justify-center rounded-lg hover:opacity-80 transition-all",children:A.jsx(DA,{size:20})}),A.jsx("a",{href:"https://www.instagram.com/chntech_india/",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center rounded-lg hover:opacity-80 transition-all",children:A.jsx(kA,{size:20})}),A.jsx("a",{href:"https://www.youtube.com/channel/UCX3GW4PtNMIOogEMdyhB_mw",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-[#ff0000] flex items-center justify-center rounded-lg hover:opacity-80 transition-all",children:A.jsx(TA,{size:20})})]})]})]}),A.jsxs("div",{className:"space-y-6 text-center md:text-left",children:[A.jsx("h3",{className:"text-xl font-bold text-white/85",children:"Quick Links"}),A.jsx("ul",{className:"space-y-4",children:[{label:"About CHN",to:"/about"},{label:"Careers",to:"/careers"},{label:"Contacts",to:"/contact"},{label:"Blogs",to:"/blogs"}].map(e=>A.jsx("li",{children:A.jsxs(c,{to:e.to,className:"group flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-white transition-colors",children:[A.jsx(zA,{size:16,className:"text-gray-500 group-hover:text-white"}),A.jsx("span",{className:"text-sm font-medium",children:e.label})]})},e.label))})]}),A.jsxs("div",{className:"space-y-6 text-center md:text-left",children:[A.jsx("h3",{className:"text-xl font-bold text-white/85",children:"Contact Information"}),A.jsxs("div",{className:"space-y-5",children:[A.jsxs("div",{className:"flex gap-4 justify-center md:justify-start",children:[A.jsx(oA,{size:20,className:"text-[#00c2ff] shrink-0 mt-1"}),A.jsxs("p",{className:"text-gray-400 text-sm leading-relaxed",children:["Chennai (Head Office)",A.jsx("br",{}),"Coimbatore",A.jsx("br",{})]})]}),A.jsxs("div",{className:"flex gap-4 justify-center md:justify-start",children:[A.jsx(wA,{size:20,className:"text-[#00c2ff] shrink-0 mt-1"}),A.jsxs("p",{className:"text-gray-400 text-sm leading-relaxed",children:["+91-7010203031",A.jsx("br",{})]})]}),A.jsxs("div",{className:"flex gap-4 justify-center md:justify-start",children:[A.jsx(K,{size:20,className:"text-[#00c2ff] shrink-0 mt-1"}),A.jsxs("p",{className:"text-gray-400 text-sm leading-relaxed",children:["sales@chnindia.com",A.jsx("br",{}),"info@chnindia.com"]})]})]})]}),A.jsxs("div",{className:"space-y-6 text-center md:text-left",children:[A.jsx("h3",{className:"text-xl font-bold text-white/85",children:"Legal & Compliance"}),A.jsxs("ul",{className:"space-y-4 text-gray-400",children:[A.jsx("li",{children:A.jsx(c,{to:"/privacy-policy",className:"text-sm hover:text-white transition-colors",children:"Privacy Policy"})}),A.jsx("li",{children:A.jsx(c,{to:"/terms-and-conditions",className:"text-sm hover:text-white transition-colors",children:"Terms & Conditions"})})]})]})]}),A.jsxs("div",{className:"mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4  text-sm",children:[A.jsx("p",{className:"text-white/65",children:"© 2026 CHN Technologies. All rights reserved."}),A.jsx("p",{className:"flex items-center gap-1 text-white/65",children:"Building Smart Solutions for Modern Businesses — CHN Technologies"})]})]})}),Ot=()=>{const{pathname:e}=xA();return l.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[e]),null},Pt="/assets/index_bg%20(1)-BNrXscfe.jpg",zt="/assets/index_bg%20(5)-CSOi1AMa.jpg",Lt="/assets/hero-bg-2-CCj79o3g.jpg",Mt="/assets/indian_modern_workforce-DmbcM-Jq.png",Ft="/assets/indian_modern_finance-CSZjN4oa.png",Gt="/assets/about-team-meeting-f_FGXIE5.png",RA="/assets/casestudy-cloud-BhdTKPRd.jpg",Rt="/assets/casestudy-security-CDMOYmGD.jpg",Wt="/assets/logo1-DlcJ_g8I.png",Ut="/assets/logo2-C1USgVJW.png",Yt="/assets/logo3-BjNOqV-H.png",Jt="/assets/logo4-BgP9ame9.png",Kt="/assets/logo5-DKQB3J00.png",Vt="/assets/logo6-DkbJW3DL.png",Zt="/assets/logo7-Csp66Dh-.png",Xt="/assets/logo8-DlDyEUS3.png",$t="/assets/logo9-DLRA3iP2.png",Ai="/assets/logo10-B12-HPkL.png",ei="/assets/logo11-qX48kaqo.png",ti="/assets/logo12-DpsVVnJ8.png",ii="/assets/logo13-CZLHiO4a.png",ai="/assets/logo14-DESR6QYq.png",si="/assets/logo15-wkcIDmcX.png",ni="/assets/logo15_2-C9gZDiNS.png",ri="/assets/logo16-BV_OdyPJ.png",oi="/assets/logo18-BUV2Bm6g.png",li="/assets/logo19-DD7W4E43.png",ci="/assets/logo20-BGW86R9y.png",di="/assets/logo21-Mde_YXU8.png",pi="/assets/logo22-Dtx2Co_V.png",gi="/assets/logo23-CemTQnuK.png",xi="/assets/logo24-yI5xWA8Q.png",mi="/assets/logo25-DZcZII7u.png",hi="/assets/logo26-BDvb-9IU.png",ui="/assets/logo27-DtWceqiI.png",fi="/assets/logo28-BCptmWG-.png",qi="/assets/logo29-FPVVN1RV.png",bi="/assets/logo30-t_lKEmm9.png",wi="/assets/logo31-B-i-jzfU.png",Ci="/assets/logo32-CX4znmH2.png",_i="/assets/logo33-smJMGm3S.png",yi="/assets/logo34-CwTF90d9.png",vi="/assets/logo35-BB4ZLxlX.png",Ni="/assets/logo36-DmlSpACN.png",ji="/assets/logo37-DuSi5aVO.png",Bi="/assets/tech-services-D0NxPCXx.jpg",ve="/assets/analytics-viz-B9arG7xR.jpg",Ne="/assets/service-consulting-BNS7PycJ.jpg",Ii="/assets/cloud-transformation-BxmaD8sZ.jpg",Ei="/assets/cyber-security-CljQO4a_.jpg",jA=[{id:1,title:"Technology services",image:Bi,desc:"End-to-end IT management, networks, and security ensuring operational continuity.",date:"29 Mar 2026"},{id:2,title:"Software solutions",image:RA,desc:"Custom scalable software for workflows, integration, and long-term usability.",date:"29 Mar 2026"},{id:3,title:"Digital solutions",image:ve,desc:"Data-driven capabilities to enhance visibility and automate processes.",date:"29 Mar 2026"},{id:4,title:"Consulting & advisory",image:Ne,desc:"Workforce management and payroll compliance aligned with business goals.",date:"29 Mar 2026"},{id:5,title:"Cloud transformation",image:Ii,desc:"Strategy and migration services for hybrid and multi-cloud environments.",date:"29 Mar 2026"},{id:6,title:"Cyber security",image:Ei,desc:"Advanced threat detection, incident response, and continuous compliance monitoring.",date:"29 Mar 2026"}],Di=()=>{const e=[{image:Wt},{image:Ut},{image:Yt},{image:Jt},{image:Kt},{image:Vt},{image:Zt},{image:Xt},{image:$t},{image:Ai},{image:ei},{image:ti},{image:ii},{image:ai},{image:si},{image:ni},{image:ri},{image:oi},{image:li},{image:ci},{image:di},{image:pi},{image:gi},{image:xi},{image:mi},{image:hi},{image:ui},{image:fi},{image:qi},{image:bi},{image:wi},{image:Ci},{image:_i},{image:yi},{image:vi},{image:Ni},{image:ji}],[i,s]=l.useState(0),[n,d]=l.useState(0),[h,w]=l.useState(!1),[I,p]=l.useState(1),u=[...jA,...jA,...jA],x=l.useRef(null),[v,z]=l.useState(!0),[k,L]=l.useState(!1),P=l.useRef(0),q=l.useRef(0),E=l.useRef(0),g=l.useRef(null),m=()=>{z(!1),g.current&&clearTimeout(g.current)},C=()=>{g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{z(!0)},5e3)};l.useEffect(()=>()=>{g.current&&clearTimeout(g.current)},[]),l.useEffect(()=>{let a,r=performance.now();const _=.04,N=S=>{if(x.current){const $=x.current;if(v&&!k){const iA=S-r;E.current+=_*iA;const mA=$.scrollWidth-$.clientWidth;E.current>=mA&&(E.current=0),$.scrollLeft=E.current}else E.current=$.scrollLeft}r=S,a=requestAnimationFrame(N)};return a=requestAnimationFrame(N),()=>cancelAnimationFrame(a)},[v,k]);const H=[{bg:Pt,subtitle:"Integrated Technology & Consulting",title:A.jsxs(A.Fragment,{children:["Run Technology Like ",A.jsx("br",{}),"a Business System"]}),desc:"Integrated technology and consulting services built for stability, security, and scalable growth. We help you reduce risk and maintain control."},{bg:Mt,subtitle:"Workforce & Talent Strategy",title:A.jsxs(A.Fragment,{children:["Empower Your People ",A.jsx("br",{}),"for Future Growth"]}),desc:"Comprehensive workforce management, talent acquisition, and HR consulting to build resilient teams that drive your business forward."},{bg:Ft,subtitle:"Compliance & Payroll Accuracy",title:A.jsxs(A.Fragment,{children:["Simplify Operations ",A.jsx("br",{}),"Ensure Compliance"]}),desc:"Streamlined payroll processing and rigorous statutory compliance advisory, designed to minimize risk and optimize your administrative efficiency."},{bg:zt,subtitle:"We Are Dedicated",title:A.jsxs(A.Fragment,{children:["Inspired and Passionate",A.jsx("br",{}),"about Innovation"]}),desc:"End-to-end management of IT infrastructure, software solutions, digital analytics, and workforce consulting — all under one roof."},{bg:Lt,subtitle:"Operational Excellence",title:A.jsxs(A.Fragment,{children:["Reliability Built on",A.jsx("br",{}),"Structured Excellence"]}),desc:"We align systems, people, and processes to ensure your business remains resilient in a changing digital landscape. Experience long-term stability."}];l.useEffect(()=>{const a=setInterval(()=>{p(1),s(r=>(r+1)%H.length)},4e3);return()=>clearInterval(a)},[H.length]),l.useEffect(()=>{const a=setInterval(()=>{F()},8e3);return()=>clearInterval(a)},[]);const tA=a=>{p(a),s(r=>(r+a+H.length)%H.length)},Z=a=>{if(m(),x.current){const r=x.current,_=r.querySelector(".capability-card");if(_){const N=_.clientWidth+24,S=a==="left"?-N:N;r.scrollBy({left:S,behavior:"smooth"})}else r.scrollBy({left:a==="left"?-350:350,behavior:"smooth"})}C()},X=()=>{if(x.current){const a=x.current;v&&!k&&Math.abs(a.scrollLeft-E.current)>2&&(m(),C())}},o=a=>{x.current&&(L(!0),P.current=a.pageX-x.current.offsetLeft,q.current=x.current.scrollLeft)},b=()=>{L(!1)},B=a=>{if(!k||!x.current)return;a.preventDefault();const _=(a.pageX-x.current.offsetLeft-P.current)*1.5;x.current.scrollLeft=q.current-_},F=()=>{d(a=>(a+1)%D.length)},T=()=>{d(a=>(a-1+D.length)%D.length)},f=[{phaseNumber:"01",heading:"Assess Current State",description:"Evaluate existing systems and risks to establish a baseline and identify key priorities.",icon:Fe},{phaseNumber:"02",heading:"Design the Roadmap",description:"Develop a strategic roadmap aligned with business goals, compliance, and long-term scalability",icon:le},{phaseNumber:"03",heading:"Implement with Control",description:"Deploy secure, high-performing solutions using a phased approach to minimize business disruption.",icon:pA},{phaseNumber:"04",heading:"Run, Monitor and Improve",description:"Deliver continuous monitoring, support, and optimisation to keep systems aligned with evolving business needs.",icon:O}],G=[{title:"Growth & Scale",desc:"Businesses expanding operations while handling disconnected IT, software, and operational tools that require structure and consolidation.",icon:A.jsx(sA,{strokeWidth:1,className:"w-14 h-14 text-[#0060ff]"})},{title:"Security & Compliance",desc:"Organisations operating in regulated or risk-sensitive environments that need stronger controls, visibility, and policy alignment.",icon:A.jsx(Y,{strokeWidth:1,className:"w-14 h-14 text-[#0060ff]"})},{title:"Multi-Location Operations",desc:"Companies managing infrastructure, people, and processes across multiple offices or sites with a need for standardisation.",icon:A.jsx(bA,{strokeWidth:1,className:"w-14 h-14 text-[#0060ff]"})},{title:"Leadership Visibility",desc:"Decision-makers seek clear insights into system performance, operational efficiency, and workforce effectiveness.",icon:A.jsx(ce,{strokeWidth:1,className:"w-14 h-14 text-[#0060ff]"})},{title:"Technology Integration",desc:"Seamless integration of legacy systems with modern technologies to create unified, future-ready IT ecosystems.",icon:A.jsx(V,{strokeWidth:1,className:"w-14 h-14 text-[#0060ff]"})}],D=[{id:1,quote:"CHN Technologies re-engineered our entire network for maximum resilience. Our uptime is at an all-time high, providing the stability we needed to scale confidently.",name:"Reliability Foundation",designation:"Infrastructure & Stability"},{id:2,quote:"Partnering with them transformed our multi-site infrastructure from a source of friction into a resilient environment. We now focus on expansion, not repairs.",name:"Operational Excellence",designation:"Network Engineering"}];return A.jsxs("div",{className:"min-h-screen overflow-y-auto scroll-smooth overflow-x-hidden",children:[A.jsxs("section",{className:"relative h-screen pt-[65px] overflow-hidden",children:[A.jsxs(t.div,{initial:{scale:1.1,opacity:0},animate:{scale:1,opacity:1},transition:{duration:1.5,ease:[.22,1,.36,1]},className:"absolute inset-0 z-0",children:[A.jsx("img",{src:H[i].bg,alt:"",className:"w-full h-full object-cover"}),A.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-slate-900/20"})]},i),A.jsx("div",{className:"relative z-10 h-full flex items-center",children:A.jsxs("div",{className:"hero mx-auto px-4",children:[A.jsx(t.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"text-sm md:text-base font-bold text-white/80 mb-4 tracking-[0.1em]",children:H[i].subtitle},`sub-${i}`),A.jsx(t.h1,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.7,delay:.4},className:"text-white leading-[1.15] max-w-3xl font-light",children:H[i].title},`title-${i}`),A.jsx(t.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},className:"mt-6 text-white/70 max-w-2xl leading-relaxed subtitle",children:H[i].desc},`desc-${i}`),A.jsx(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.9},className:"mt-8 flex items-center gap-6",children:A.jsxs(c,{to:"/contact",className:"inline-flex items-center gap-2 px-10 py-4 bg-[#0060ff] text-white font-semibold rounded-full hover:bg-[#0050d5] transition-all duration-300 group shadow-lg",children:[A.jsx(Q,{className:"w-4 h-4 transition-transform group-hover:translate-x-1"}),"Read More"]})},`btn-${i}`)]})}),A.jsx("button",{onClick:()=>tA(-1),className:"absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-transparent border border-white/30 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all",children:A.jsx(yA,{className:"w-5 h-5"})}),A.jsx("button",{onClick:()=>tA(1),className:"absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-transparent border border-white/30 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all",children:A.jsx(lA,{className:"w-5 h-5"})})]}),A.jsx("section",{className:"flex flex-col justify-center bg-[#fafafa] scroll-mt-[90px] py-12 md:py-16",children:A.jsxs("div",{className:"max-w-7xl mx-auto px-4 w-full",children:[A.jsxs("div",{className:"text-center mb-12",children:[A.jsx("span",{className:"text-[#0060ff] uppercase text-md font-bold tracking-[0.10em] mb-4 block ",children:"Operational Capacity"}),A.jsx("h2",{className:"NET_Hero_H1 text-[#002e5b]",children:"Designed to Support Systems"})]}),A.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6",children:G.map((a,r)=>A.jsxs("div",{className:"group relative bg-white border border-gray-100 p-8 text-center transition-all hover:-translate-y-3 hover:shadow-2xl rounded-xl overflow-hidden cursor-pointer",children:[A.jsx("div",{className:"absolute top-0 left-0 h-full w-0 bg-[#f4f5f7] group-hover:w-full transition-all duration-500 ease-in-out z-0 pointer-events-none"}),A.jsxs("div",{className:"relative z-10 flex flex-col items-center h-full w-full",children:[A.jsx("div",{className:"w-[100px] h-[100px] rounded-full border border-gray-100 flex items-center justify-center mx-auto mb-6 bg-transparent group-hover:bg-white group-hover:border-transparent group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500",children:A.jsx("div",{className:"transition-transform duration-500 ease-out group-hover:scale-125",children:a.icon})}),A.jsx("h3",{className:"text-xl font-bold mb-4",children:a.title}),A.jsx("p",{className:"text-gray-500 text-sm leading-relaxed mb-8",children:a.desc})]})]},r))})]})}),A.jsx("section",{className:"flex flex-col justify-center bg-white scroll-mt-[90px] py-12 md:py-16",children:A.jsxs("div",{className:"max-w-6xl mx-auto px-4 grid xl:grid-cols-2 gap-12 xl:gap-16 items-center",children:[A.jsx("div",{className:"relative",children:A.jsx("img",{src:Gt,alt:"About CHN",className:"rounded-2xl shadow-2xl"})}),A.jsxs("div",{children:[A.jsx("span",{className:"text-[#0060ff] text-md font-bold tracking-[0.10em] mb-4 block uppercase",children:"Measurable Outcomes"}),A.jsx("h2",{className:"NET_Hero_H1 text-[#002e5b] mb-6",children:"Outcomes That Matter"}),A.jsx("p",{className:"text-lg text-blue-600  mb-6",children:"Delivering measurable outcomes that improve stability and reliability."}),A.jsx("p",{className:"text-gray-500 leading-relaxed mb-8",children:"We engineer resilient environments that evolve alongside your business, ensuring sustainable impact."}),A.jsx("div",{className:"bg-gray-100 h-12 rounded-lg overflow-hidden",children:A.jsx(t.div,{initial:{width:0},whileInView:{width:"95%"},transition:{duration:1.5},className:"bg-[#0060ff] h-full flex items-center px-4 text-white font-bold text-sm",children:"99.00% Work Success"})})]})]})}),A.jsxs("section",{className:"flex flex-col justify-center bg-[#22314f] py-20 overflow-hidden relative",children:[A.jsx("style",{children:`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}),A.jsxs("div",{className:"max-w-7xl mx-auto px-4 w-full flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12",children:[A.jsxs("div",{className:"mb-6 sm:mb-0",children:[A.jsx("span",{className:"text-blue-400 text-md font-bold tracking-[0.10em] mb-3 block uppercase",children:"Innovation Stream"}),A.jsx("h2",{className:"NET_Hero_H1 text-white m-0",children:"Capabilities Overview"})]}),A.jsxs("div",{className:"flex gap-3",children:[A.jsx("button",{onClick:()=>Z("left"),className:"w-12 h-12 rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all duration-300","aria-label":"Previous slide",children:A.jsx(yA,{size:20})}),A.jsx("button",{onClick:()=>Z("right"),className:"w-12 h-12 rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all duration-300","aria-label":"Next slide",children:A.jsx(lA,{size:20})})]})]}),A.jsx("div",{className:"relative max-w-7xl mx-auto px-4 w-full",children:A.jsx("div",{ref:x,onScroll:X,onMouseDown:a=>{m(),o(a)},onMouseUp:()=>{b(),C()},onMouseLeave:()=>{k&&(b(),C())},onTouchStart:m,onTouchEnd:C,onMouseMove:B,className:`flex overflow-x-auto gap-6 no-scrollbar py-4 px-1 ${k?"cursor-grabbing select-none":"cursor-grab"}`,style:{scrollPaddingLeft:"4px"},children:u.map((a,r)=>A.jsxs("div",{className:"capability-card flex-shrink-0 w-[300px] sm:w-[350px] bg-white rounded-2xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",children:[A.jsxs("div",{className:"relative aspect-[16/10] overflow-hidden",children:[A.jsx("img",{src:a.image,alt:a.title,className:"w-full h-full object-cover transition-transform [transition-duration:3000ms] ease-out group-hover:scale-110"}),A.jsx("div",{className:"absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"})]}),A.jsxs("div",{className:"p-6 flex flex-col flex-1",children:[A.jsx("h3",{className:"text-lg font-bold text-[#22314f] mb-2 group-hover:text-[#0060ff] transition-colors duration-300 tracking-tight",children:a.title}),A.jsx("p",{className:"text-gray-500 text-sm line-clamp-3 leading-relaxed mb-6",children:a.desc}),A.jsx("div",{className:"mt-auto h-[2.5px] w-0 bg-[#0060ff] group-hover:w-16 transition-all duration-700 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)]"})]})]},r))})})]}),A.jsx("section",{className:"flex flex-col justify-center bg-white py-20",children:A.jsxs("div",{className:"max-w-6xl mx-auto px-4",children:[A.jsxs("div",{className:"text-center mb-16",children:[A.jsx("span",{className:"text-[#0060ff] text-md font-bold tracking-[0.10em] mb-4 block uppercase",children:"Operational Excellence"}),A.jsx("h2",{className:"NET_Hero_H1 text-[#002e5b]",children:" Structured Delivery Model"})]}),A.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8",children:f.map((a,r)=>{const _=a.icon;return A.jsxs("div",{className:"group relative bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 cursor-default",children:[A.jsx("div",{className:"absolute inset-1.5 rounded-[calc(0.75rem-6px)] overflow-hidden z-0",children:A.jsx("div",{className:"absolute inset-0  translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out",style:{background:"linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%)"}})}),A.jsxs("div",{className:"relative z-10 flex flex-col h-full p-8",children:[A.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[A.jsx("div",{className:"w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300",children:A.jsx(_,{className:"w-8 h-8 text-[#002e5b] group-hover:text-white transition-colors duration-300",strokeWidth:1.5})}),A.jsx("span",{className:"text-4xl font-black text-gray-100 group-hover:text-white/10 transition-colors duration-300",children:a.phaseNumber})]}),A.jsx("h3",{className:"text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-4",children:a.heading}),A.jsx("p",{className:"text-base text-gray-600 leading-relaxed group-hover:text-blue-50/80 transition-colors duration-300  text-md font-medium tracking-widest",children:a.description})]})]},r)})})]})}),A.jsxs("section",{className:"flex flex-col justify-center py-4 relative overflow-hidden bg-white",children:[A.jsx("style",{children:`
          .CHNP_Logo_Marquee_Track {
            display: flex;
            gap: 100px; 
            animation: CHNP_Logo_Scroll 160s linear infinite; 
            width: fit-content;
            align-items: center;
          }
          @keyframes CHNP_Logo_Scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .CHNP_Logo_Marquee_Track:hover { animation-play-state: paused; }
          
          .partner-logo-img {
            filter: none;
            opacity: 1;
            height: 60px; 
            width: auto;
            max-width: 300px; 
            object-fit: contain;
            transition: all 0.3s ease;
          }
          .partner-logo-img:hover {
            transform: scale(1.1);
          }

          .Logo_Row_1 { animation-duration: 180s; }
          .Logo_Row_2 { animation-duration: 140s; animation-direction: reverse; }
        `}),A.jsxs("div",{className:"w-full px-6 mb-16 text-center",children:[A.jsx("span",{className:"text-[#0060ff] text-md font-bold tracking-[0.10em] mb-4 block uppercase",children:"Global Partner Network"}),A.jsx("h2",{className:"NET_Hero_H1 text-[#002e5b]",children:"Our Partners"})]}),A.jsxs("div",{className:"relative w-full overflow-hidden flex flex-col gap-8 pb-20",children:[A.jsx("div",{className:"flex overflow-hidden",children:A.jsx("div",{className:"CHNP_Logo_Marquee_Track Logo_Row_1",children:[...e.slice(0,19),...e.slice(0,19)].map((a,r)=>A.jsx("div",{className:"flex-shrink-0",children:A.jsx("img",{src:a.image,alt:"Partner",className:"partner-logo-img"})},`logo-r1-${r}`))})}),A.jsx("div",{className:"flex overflow-hidden",children:A.jsx("div",{className:"CHNP_Logo_Marquee_Track Logo_Row_2",children:[...e.slice(19),...e.slice(19)].map((a,r)=>A.jsx("div",{className:"flex-shrink-0",children:A.jsx("img",{src:a.image,alt:"Partner",className:"partner-logo-img"})},`logo-r2-${r}`))})})]}),A.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8 text-center",children:[A.jsx(Ge,{className:"w-16 h-16 text-[#0060ff] mx-auto mb-8 opacity-20"}),A.jsx(R,{mode:"wait",children:A.jsxs(t.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"md:text-2xl text-2xl text-navy font-medium  leading-relaxed mb-10",children:['"',D[n].quote,'"']},n)}),A.jsxs("div",{className:"flex items-center justify-center gap-6",children:[A.jsx("button",{onClick:T,className:"w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all",children:A.jsx(yA,{size:20})}),A.jsxs("div",{children:[A.jsx("h4",{className:"font-bold text-navy",children:D[n].name}),A.jsx("p",{className:"text-xs text-[#0060ff] uppercase font-bold tracking-widest",children:D[n].designation})]}),A.jsx("button",{onClick:F,className:"w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all",children:A.jsx(lA,{size:20})})]})]})]}),A.jsx("section",{className:"snap-end",children:A.jsx(ye,{})}),A.jsx(R,{children:h&&A.jsx(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>w(!1),className:"fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4",children:A.jsxs(t.div,{initial:{scale:.95},animate:{scale:1},exit:{scale:.95},onClick:a=>a.stopPropagation(),className:"relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden",children:[A.jsx("button",{onClick:()=>w(!1),className:"absolute top-4 right-4 text-white z-10",children:A.jsx(HA,{size:32})}),A.jsx("iframe",{className:"w-full h-full",src:"https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1",frameBorder:"0",allowFullScreen:!0})]})})})]})},Si="/assets/contact-main-CvbHzKlz.jpg",WA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAEtAAAAm0CAYAAACGw5rhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAABFTpJREFUeNrswQEBAAAAgJD+r+4ICgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgNm7t+S2cQQMo5iu2ZcwC+AysA6C6+AysABDK+sBTXfsJIpvTUq8nFMFSk7ykPrzYEWSPwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEwkAHtwIAAAAAAA5P/aCKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqirtwSEBAAAAgKD/r/1gBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgCAXBnFB6Uy9EAAAAAElFTkSuQmCC",ki=()=>{const[e]=ke(),{hash:i}=xA(),s=nA.useRef(null);l.useEffect(()=>{if(i){const g=i.replace("#",""),m=document.getElementById(g);m&&(window.innerWidth>=1025&&s.current?s.current.scrollTo({top:m.offsetTop,behavior:"smooth"}):m.scrollIntoView({behavior:"smooth"}))}},[i]);const[n,d]=l.useState({name:"",org:"",email:"",phone:"",interest:"Area of Interest",message:""}),[h,w]=l.useState(!1),[I,p]=l.useState(!1),u=void 0,x=void 0,v="info@chnindia.com".trim(),z=(g=!1)=>`
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 0 16px 0;">
            <tr>
                <td align="center">
                    <a href="https://www.chnindia.com" target="_blank" style="display:inline-block; text-decoration:none;">
                        <img class="responsive-logo" src="${g?WA.trim():"cid:chnLogo"}" alt="CHN Technologies" width="180" border="0" style="display:block; width:180px; max-width:180px; height:auto; border:0; outline:none; text-decoration:none;">
                    </a>
                </td>
            </tr>
        </table>
    `,[k,L]=nA.useState(!1);l.useEffect(()=>{const g=e.get("interest"),m=e.get("job");(g||m)&&d(C=>({...C,interest:g||C.interest,message:m?`Interested in position: ${decodeURIComponent(m)}`:C.message}))},[e]);const P=async g=>{g.preventDefault(),w(!0);try{const m=`New Requirement: ${n.interest}`,C=`
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${m}</title>
                <style>
                  @media only screen and (max-width: 600px) {
                    .responsive-cell {
                      display: block !important;
                      width: 100% !important;
                      padding-right: 0 !important;
                      padding-bottom: 20px !important;
                      box-sizing: border-box;
                    }
                    .responsive-cell-last {
                      display: block !important;
                      width: 100% !important;
                      padding-bottom: 0 !important;
                      box-sizing: border-box;
                    }
                    .responsive-padding {
                      padding: 30px 20px 20px !important;
                    }
                    .responsive-inner-padding {
                      padding: 24px 20px !important;
                    }
                    .responsive-logo {
                      width: 140px !important;
                    }
                    .responsive-title {
                      font-size: 22px !important;
                    }
                  }
                </style>
              </head>
              <body style="margin: 0; padding: 0; background-color: #f8fafc;">
                <div style="background-color: #f8fafc; padding: 40px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin:0;">
                  <!--[if mso]>
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="width: 600px;">
                  <tr>
                  <td>
                  <![endif]-->
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; box-shadow: 0 40px 100px rgba(0,46,91,0.06); border: 1px solid #e2e8f0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                    <tr>
                      <td height="6" style="height: 6px; background-color: #2563eb; font-size: 1px; line-height: 1px; border-radius: 24px 24px 0 0;">&nbsp;</td>
                    </tr>
                    <tr>
                      <td class="responsive-padding" align="center" style="padding: 50px 40px 30px; text-align: center;">
                        ${z(!1)}
                        <h1 class="responsive-title" style="color: #002e5b; margin: 16px 0 0 0; font-size: 26px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">New Inquiry Received</h1>
                        <p style="color: #64748b; margin: 8px 0 0 0; font-size: 12px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;">Digital Flagship Center</p>
                      </td>
                    </tr>
                    <tr>
                      <td class="responsive-padding" style="padding: 0 40px 30px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                          <tr>
                            <td class="responsive-inner-padding" style="background-color: #ffffff; border: 1px solid #f1f5f9; border-radius: 20px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                                <tr>
                                  <td class="responsive-cell" width="50%" style="padding-bottom: 24px; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                                    <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Client Name</span>
                                    <strong style="color: #1e293b; font-size: 15px;">${n.name}</strong>
                                  </td>
                                  <td class="responsive-cell-last" width="50%" style="padding-bottom: 24px; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                                    <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Organisation</span>
                                    <strong style="color: #1e293b; font-size: 15px;">${n.org||"Not Specified"}</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="responsive-cell" width="50%" style="padding-bottom: 24px; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                                    <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Email Identity</span>
                                    <strong style="color: #1e293b; font-size: 15px; word-break: break-all;">${n.email}</strong>
                                  </td>
                                  <td class="responsive-cell-last" width="50%" style="padding-bottom: 24px; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                                    <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Contact Phone</span>
                                    <strong style="color: #1e293b; font-size: 15px;">${n.phone||"Not Provided"}</strong>
                                  </td>
                                </tr>
                              </table>
                              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; border-top: 1px solid #f1f5f9;">
                                <tr>
                                  <td style="padding-top: 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                                    <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 12px;">Area of Interest</span>
                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                                      <tr>
                                        <td bgcolor="#eff6ff" style="background-color: #eff6ff; border: 1px solid #dbeafe; padding: 10px 24px; border-radius: 100px; color: #2563eb; font-weight: bold; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; letter-spacing: 0.5px;">
                                          ${n.interest}
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 24px;">
                          <tr>
                            <td class="responsive-inner-padding" bgcolor="#fafafa" style="background-color: #fafafa; border: 1px solid #f1f5f9; border-left: 4px solid #2563eb; border-radius: 12px; padding: 32px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                              <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 16px;">Requirement Brief</span>
                              <p style="color: #334155; font-size: 15px; line-height: 1.8; margin: 0; font-weight: 500; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">${n.message.replace(/\n/g,"<br>")}</p>
                            </td>
                          </tr>
                        </table>

                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 40px;">
                          <tr>
                            <td align="center">
                              <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin: 0 auto;">
                                <tr>
                                  <td align="center" bgcolor="#2563eb" style="border-radius: 100px; background-color: #2563eb; padding: 16px 40px;">
                                    <a href="mailto:${n.email}?subject=Re: ${encodeURIComponent(n.interest)}" style="font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; font-weight: bold; letter-spacing: 1px; display: inline-block;">REPLY TO CLIENT</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td class="responsive-padding" style="padding: 40px; text-align: center; background-color: #fafafa; border-top: 1px solid #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border-radius: 0 0 24px 24px;">
                        <p style="color: #94a3b8; font-size: 12px; margin: 0; font-weight: 700; letter-spacing: 0.5px;">&copy; ${new Date().getFullYear()} CHN TECHNOLOGIES • DIGITAL FLAGSHIP HUB</p>
                        <div style="margin-top: 12px;">
                          <span style="color: #cbd5e1; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Encrypted Submission • Fast Response Protocol</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                  <!--[if mso]>
                  </td>
                  </tr>
                  </table>
                  <![endif]-->
                </div>
              </body>
              </html>
            `;await fetch(u,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify({recipient:v,subject:m,htmlContent:C,secret:x})}),w(!1),p(!0),rA.success("Message sent successfully!"),d({name:"",org:"",email:"",phone:"",interest:"Area of Interest",message:""})}catch(m){console.error("Apps Script submission error:",m),w(!1),rA.error("Failed to send message. Please try again or contact us directly at info@chnindia.com")}},q=g=>{const{name:m,value:C}=g.target;d(H=>({...H,[m]:C}))},E=()=>`
        <div style="background-color: #f8fafc; padding: 40px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin:0;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; box-shadow: 0 40px 100px rgba(0,46,91,0.06); border: 1px solid #e2e8f0; border-collapse: collapse;">
            <tr>
              <td height="6" style="height: 6px; background-color: #2563eb; font-size: 1px; line-height: 1px; border-radius: 24px 24px 0 0;">&nbsp;</td>
            </tr>
            <tr>
              <td align="center" style="padding: 50px 40px 30px; text-align: center;">
                ${z(!0)}
                <h1 style="color: #002e5b; margin: 16px 0 0 0; font-size: 26px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">New Inquiry Received</h1>
                <p style="color: #64748b; margin: 8px 0 0 0; font-size: 12px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;">Digital Flagship Center</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 40px 30px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                  <tr>
                    <td style="background-color: #ffffff; border: 1px solid #f1f5f9; border-radius: 20px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                        <tr>
                          <td width="50%" style="padding-bottom: 24px; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                            <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Client Name</span>
                            <strong style="color: #1e293b; font-size: 15px;">${n.name||"John Doe"}</strong>
                          </td>
                          <td width="50%" style="padding-bottom: 24px; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                            <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Organisation</span>
                            <strong style="color: #1e293b; font-size: 15px;">${n.org||"Acme Corp"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td width="50%" style="padding-bottom: 24px; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                            <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Email Identity</span>
                            <strong style="color: #1e293b; font-size: 15px; word-break: break-all;">${n.email||"john@example.com"}</strong>
                          </td>
                          <td width="50%" style="padding-bottom: 24px; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                            <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Contact Phone</span>
                            <strong style="color: #1e293b; font-size: 15px;">${n.phone||"+91 9876543210"}</strong>
                          </td>
                        </tr>
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; border-top: 1px solid #f1f5f9;">
                        <tr>
                          <td style="padding-top: 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                            <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 12px;">Area of Interest</span>
                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                              <tr>
                                <td bgcolor="#eff6ff" style="background-color: #eff6ff; border: 1px solid #dbeafe; padding: 10px 24px; border-radius: 100px; color: #2563eb; font-weight: bold; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; letter-spacing: 0.5px;">
                                  ${n.interest}
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 24px;">
                  <tr>
                    <td bgcolor="#fafafa" style="background-color: #fafafa; border: 1px solid #f1f5f9; border-left: 4px solid #2563eb; border-radius: 12px; padding: 32px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 16px;">Requirement Brief</span>
                      <p style="color: #334155; font-size: 15px; line-height: 1.8; margin: 0; font-weight: 500; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">${n.message||"Sample message preview text here..."}</p>
                    </td>
                  </tr>
                </table>

                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 40px;">
                  <tr>
                    <td align="center">
                      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin: 0 auto;">
                        <tr>
                          <td align="center" bgcolor="#2563eb" style="border-radius: 100px; background-color: #2563eb; padding: 16px 40px;">
                            <a href="#" style="font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; font-weight: bold; letter-spacing: 1px; display: inline-block;">REPLY TO CLIENT</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 40px; text-align: center; background-color: #fafafa; border-top: 1px solid #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border-radius: 0 0 24px 24px;">
                <p style="color: #94a3b8; font-size: 12px; margin: 0; font-weight: 700; letter-spacing: 0.5px;">&copy; ${new Date().getFullYear()} CHN TECHNOLOGIES • DIGITAL FLAGSHIP HUB</p>
                <div style="margin-top: 12px;">
                  <span style="color: #cbd5e1; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Encrypted Submission • Fast Response Protocol</span>
                </div>
              </td>
            </tr>
          </table>
        </div>
    `;return A.jsxs("div",{className:"CN_WRAPPER",ref:s,children:[A.jsx("style",{children:`
                .CN_WRAPPER {
                  font-family: 'Outfit', 'Inter', sans-serif;
                  color: #1a2b4b;
                  background: #ffffff;
                }

                /* Layout Snap Configuration (Desktop only for better usability) */
                @media (min-width: 1025px) {
                  .CN_WRAPPER {
                    height: 100vh;
                    overflow-y: auto;
                    scroll-snap-type: y mandatory;
                    scroll-behavior: smooth;
                  }
                  .CN_Hero, .CN_Main_Grid, .CN_Expectation, .CN_Map_Section, .CN_Final {
                    scroll-snap-align: start;
                    scroll-snap-stop: always;
                  }
                }

                /* --- SECTION 1: HERO (EXACT SAMPLE DESIGN) --- */
                .CN_Hero {
                  padding: 100px 5% 60px;
                  background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
                  position: relative;
                  overflow: hidden;
                  display: flex;
                  justify-content: center;
                  min-height: 100vh;
                  align-items: center;
                }
                @media (max-width: 1024px) {
                  .CN_Hero { padding-top: 140px; }
                }

                .CN_Hero_Inner {
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  gap: 60px;
                  width: 100%;
                  max-width: 1300px;
                  position: relative;
                  z-index: 10;
                }
                @media (max-width: 1024px) {
                  .CN_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
                  .CN_Hero_Content { max-width: 100%; order: 1; }
                  .CN_Hero_Img { order: 2; width: 100%; padding: 0 20px; }
                  .CN_Circle_Img { width: min(300px, 85vw); height: min(300px, 85vw); border-width: 8px; }
                }

                .CN_Hero::after {
                  content: "";
                  position: absolute;
                  top: 0; right: 0; 
                  width: 50%; 
                  height: 100%; 
                  background: #0060ff; 
                  clip-path: polygon(35% 0%, 100% 0%, 100% 100%, 0% 100%);
                  opacity: 0.1;
                }

                .CN_Hero_Content { flex: 1.2; max-width: 650px; z-index: 10; }
                .CN_Hero_Title
                 { color: #002e5b; line-height: 1.1; margin-bottom: 15px; letter-spacing: -0.03em;}
                .CN_Hero_Subtitle { color: #0060ff; font-weight: 700; margin-bottom: 30px; line-height: 1.3; }
                .CN_Hero_Desc { color: #475569; line-height: 1.8; margin-bottom: 40px; font-weight: 450; }
.CN_Hero_P{font-size: 1.2rem;
    color: #64748b;
    font-weight: 500;
}
                .CN_Hero_Img {
                  flex: 1;
                  position: relative;
                  display: flex;
                  justify-content: center;
                  z-index: 5;
                }
                
                .CN_Circle_Img {
                  width: 480px;
                  height: 480px;
                  border-radius: 50%;
                  border: 15px solid #fff;
                  box-shadow: 0 40px 100px rgba(0,46,91,0.12);
                  overflow: hidden;
                  background: #fff;
                }
                .CN_Circle_Img img { width: 100%; height: 100%; object-fit: cover; }

                .CN_Triangle_Bg {
                  position: absolute;
                  top: 0; right: 0;
                  width: 45%; height: 100%;
                  background: linear-gradient(135deg, #1e3a8a 0%, #002e5b 100%);
                  clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%);
                  z-index: -1;
                  opacity: 1;
                }

                .CN_Triangle_Bg::before {
                  content: "";
                  position: absolute;
                  top: 0; left: 0;
                  width: 2px; height: 100%;
                  background: linear-gradient(180deg, transparent, #3b82f6, transparent);
                  opacity: 0.5;
                }

                .CN_Graphic_Orb {
                  position: absolute;
                  width: 600px;
                  height: 600px;
                  background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%);
                  filter: blur(80px);
                  border-radius: 50%;
                  z-index: -1;
                  pointer-events: none;
                }

                .CN_Floating_Box {
                  position: absolute;
                  border: 1px solid rgba(255,255,255,0.1);
                  background: rgba(255,255,255,0.03);
                  backdrop-filter: blur(5px);
                  border-radius: 20px;
                  z-index: 15;
                  pointer-events: none;
                }

                .CN_Dot_Pattern {
                  position: absolute;
                  width: 200px;
                  height: 200px;
                  background-image: radial-gradient(rgba(59,130,246,0.2) 1px, transparent 1px);
                  background-size: 20px 20px;
                  z-index: 0;
                  opacity: 0.6;
                }

                .CN_Vertical_Label {
                  position: absolute;
                  font-size: 0.7rem;
                  font-weight: 800;
                  text-transform: uppercase;
                  letter-spacing: 5px;
                  color: rgba(59,130,246,0.4);
                  writing-mode: vertical-rl;
                  z-index: 10;
                  pointer-events: none;
                }

                /* --- SECTION 2: WHY CONTACT --- */
                .CN_WhyReach { padding: 100px 5%; background: #ffffff; text-align: center; }
                .CN_Section_Title { color: #002e5b; margin-bottom: 25px; letter-spacing: -0.02em; }
                .CN_Section_Desc { max-width: 800px; margin: 0 auto 60px; color: #64748b; line-height: 1.7; font-weight: 450; }
                
                .CN_Bullet_Grid { 
                  display: grid; 
                  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
                  gap: 30px; 
                  max-width: 1200px; margin: 0 auto;
                }
                .CN_Bullet_Item { 
                  background: #f8fafc; padding: 40px 30px; border-radius: 30px; border: 1px solid #f1f5f9; text-align: left;
                  display: flex; gap: 20px; align-items: flex-start; transition: 0.4s;
                }
                .CN_Bullet_Item:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,96,255,0.06); border-color: #0060ff; }
                .CN_Bullet_Icon { color: #0060ff; background: #fff; padding: 12px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.03); }
                .CN_Bullet_Text { color: #1a2b4b; font-weight: 600; line-height: 1.4; }

                /* --- SECTION 3: SPLIT MAIN (FORM vs INFO) --- */
                .CN_Main_Grid { 
                  padding: 80px 5% 120px; 
                  display: grid; 
                  grid-template-columns: 1.2fr 1fr; 
                  gap: 40px; 
                  max-width: 1400px; 
                  margin: 0 auto; 
                  min-height: 100vh;
                  align-items: center;
                }
                @media (max-width: 1024px) { .CN_Main_Grid { grid-template-columns: 1fr; } }

                /* FORM (DARK COLOR FROM SAMPLE) */
                .CN_Form_Box { background: #0d1117; color: white; padding: 60px; border-radius: 50px; box-shadow: 0 40px 100px rgba(0,0,0,0.15); }
                @media (max-width: 640px) { .CN_Form_Box { padding: 30px; border-radius: 30px; } }
                .CN_Form_H {  margin-bottom: 15px; letter-spacing: -0.02em; color:white; }
                .CN_Form_P { color: #94a3b8; margin-bottom: 45px; line-height: 1.6; font-size: 1rem; }

                .CN_Input { 
                  width: 100%; border: none; outline: none; background: #1a202c; color: white; border-radius: 15px; 
                  padding: 20px 25px; margin-bottom: 20px; font-size: 1rem; transition: 0.3s;
                }
                .CN_Input:focus { background: #2d3748; box-shadow: 0 0 0 2px #0060ff; }
                .CN_Select { 
                  width: 100%; border: none; outline: none; background: #1a202c; color: #94a3b8; border-radius: 15px; 
                  padding: 20px 25px; margin-bottom: 20px; font-size: 1rem; cursor: pointer;
                }

                .CN_Primary_Btn {
                  width: 100%; background: #0060ff; color: white; padding: 22px; border-radius: 100px; 
                  font-weight: 600; font-size: 1.1rem; border: none; letter-spacing: 2px;
                  cursor: pointer; transition: all 0.4s; box-shadow: 0 20px 40px rgba(0,96,255,0.25);
                  display: flex; align-items: center; justify-content: center; gap: 15px;
                }
                .CN_Primary_Btn:hover { transform: translateY(-5px); background: #0050d5; box-shadow: 0 25px 50px rgba(0,96,255,0.35); }

                /* INFO BOX (WHITE) */
                .CN_Info_Box { background: white; padding: 60px; border-radius: 50px; border: 1px solid #f1f5f9; box-shadow: 0 20px 60px rgba(0,0,0,0.03); }
                @media (max-width: 640px) { .CN_Info_Box { padding: 30px; border-radius: 30px; } }
                .CN_Info_Item { display: flex; gap: 20px; margin-bottom: 40px; align-items: flex-start; }
                .CN_Info_Icon { color: #0060ff; background: #eff6ff; padding: 15px; border-radius: 20px; flex-shrink: 0; }
                .CN_Info_H { color: #002e5b; margin-bottom: 10px; letter-spacing: -0.01em; font-size:1.1rem;}
                .CN_Info_Text { color: #64748b; font-size: 1.05rem; line-height: 1.6; font-weight: 450; }

                /* --- SECTION 4: RESPONSE EXPECTATION --- */
                .CN_Expectation { padding: 100px 5%; background: #fdfdfd; border-top: 1px solid #f1f5f9; text-align: center; }
                .CN_Flow { 
                  display: grid; 
                  grid-template-columns: 1fr; 
                  gap: 40px; 
                  max-width: 1200px; 
                  margin: 80px auto 0; 
                }
                @media (min-width: 768px) { .CN_Flow { grid-template-columns: repeat(2, 1fr); } }
                @media (min-width: 1024px) { .CN_Flow { grid-template-columns: repeat(3, 1fr); } }
                .CN_Step { position: relative; }
                .CN_Step_Icon { 
                  width: 80px; height: 80px; background: white; color: #0060ff; border-radius: 25px; 
                  display: flex; align-items: center; justify-content: center; margin: 0 auto 30px;
                  box-shadow: 0 15px 30px rgba(0,96,255,0.1); border: 1px solid #eff6ff; 
                }
                .CN_Step_H { color: #002e5b; margin-bottom: 15px; font-weight: 800;}
                .CN_Step_P { color: #64748b; line-height: 1.6; font-weight: 450; }
                
                /* --- SECTION 5: MAPS (WIDE) --- */
                .CN_Map_Section { padding: 0 5% 100px; }
                .CN_Map_Box { 
                  width: 100%; height: 500px; border-radius: 30px; overflow: hidden; 
                  box-shadow: 0 40px 100px rgba(0,0,0,0.12); border: 1px solid #f1f5f9;
                  position: relative;
                  transform-style: preserve-3d;
                  will-change: transform;
                  transition: box-shadow 0.4s ease;
                }
                .CN_Map_Box:hover {
                  box-shadow: 0 60px 120px rgba(0,96,255,0.15);
                }
                .CN_Map_Overlay {
                  position: absolute; bottom: 40px; left: 40px; right: 40px;
                  background: rgba(255,255,255,0.92); backdrop-filter: blur(20px);
                  padding: 20px 30px; border-radius: 20px; display: flex; align-items: center; justify-content: space-between;
                  border: 1px solid rgba(0,96,255,0.1); z-index: 10;
                  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
                }
                @media (max-width: 768px) { .CN_Map_Overlay { flex-direction: column; text-align: center; gap: 20px; bottom: 20px; left: 20px; right: 20px; } }

                /* --- FINAL CTA --- */
                .CN_Final { padding:50px 20px; text-align: center; background: #fff; }
                .CN_Final_Max { max-width: 800px; margin: 0 auto; }
                .CN_Final_H { color: #1a2b4b; line-height: 1.1; margin-bottom: 30px;  }
                .CN_Final_P { color: #64748b; margin-bottom: 50px; font-weight: 500; }
                .CN_Btn { 
                  background: #3b82f6; color: white; padding: 15px 30px; border-radius: 100px; 
                  font-weight: 800; font-size: 1.1rem; border: none; cursor: pointer; transition: 0.3s;
                  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4); display: inline-flex; align-items: center; justify-content: center; gap: 15px; margin: 0 auto;
                }
                .CN_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(59, 130, 246, 0.5); background: #1e3a8a; }
            `}),A.jsx(R,{children:k&&A.jsxs(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[500] flex items-center justify-center p-4",onClick:()=>L(!1),children:[A.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm"}),A.jsxs(t.div,{initial:{scale:.9,y:30},animate:{scale:1,y:0},exit:{scale:.9,y:30},className:"relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[30px] bg-white shadow-2xl",onClick:g=>g.stopPropagation(),children:[A.jsxs("div",{className:"sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm border-b border-slate-100 rounded-t-[30px]",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"}),A.jsx("span",{className:"text-sm font-black text-slate-700 uppercase tracking-[2px]",children:"Email Preview — Contact Form"})]}),A.jsx("button",{onClick:()=>L(!1),className:"w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-red-100 hover:text-red-500 transition-all text-slate-400 font-black text-lg",children:"×"})]}),A.jsx("div",{dangerouslySetInnerHTML:{__html:E()}})]})]})}),A.jsxs("section",{className:"CN_Hero",children:[A.jsx("div",{className:"CN_Triangle_Bg"}),A.jsx(t.div,{animate:{x:[0,50,0],y:[0,30,0]},transition:{duration:15,repeat:1/0,ease:"linear"},className:"CN_Graphic_Orb top-[-10%] right-[-10%]"}),A.jsx(t.div,{animate:{x:[0,-30,0],y:[0,-50,0]},transition:{duration:18,repeat:1/0,ease:"linear"},className:"CN_Graphic_Orb bottom-[-20%] left-[10%]"}),A.jsx("div",{className:"CN_Dot_Pattern top-20 right-[20%]"}),A.jsx("div",{className:"CN_Dot_Pattern bottom-40 left-[5%]"}),A.jsxs("div",{className:"CN_Hero_Inner",children:[A.jsxs(t.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:1},className:"CN_Hero_Content",children:[A.jsx("span",{className:"text-[#0060ff] font-bold tracking-[0.1em] uppercase mb-6 block",children:"Strategic Engagement"}),A.jsx("h1",{className:" CN_Hero_Title",children:"Contact Us"}),A.jsx("p",{className:"CN_Hero_Subtitle subtitle",children:"Conversations Lead to Clarity. Let’s Start With Yours"}),A.jsx("p",{className:"CN_Hero_P",children:"               Whether you need digital solutions, expert consulting, or a new career path, CHN Technologies is ready to help. Reach out today to solve your challenges and start a structured engagement."}),A.jsx(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},className:"flex items-center justify-center lg:justify-start gap-5 mt-10",children:A.jsxs("a",{href:"#our-presence",style:{display:"inline-flex",alignItems:"center",gap:12,background:"#0060ff",color:"#fff",padding:"16px 36px",borderRadius:100,fontWeight:600,fontSize:"1rem",textDecoration:"none",letterSpacing:"0.02em",boxShadow:"0 12px 40px rgba(0,96,255,0.35)",transition:"all 0.3s"},children:[A.jsx(Q,{size:18}),"Our Presence"]})})]}),A.jsx("div",{className:"CN_Hero_Img",children:A.jsxs(t.div,{whileHover:{scale:1.02},transition:{duration:.6,ease:"easeOut"},className:"relative",children:[A.jsx(t.div,{animate:{y:[0,-20,0],rotate:[0,5,0]},transition:{duration:6,repeat:1/0},className:"CN_Floating_Box w-32 h-32 -top-10 -right-10 flex items-center justify-center",children:A.jsx(O,{className:"text-blue-500",size:40})}),A.jsx(t.div,{animate:{y:[0,20,0],rotate:[0,-5,0]},transition:{duration:5,repeat:1/0,delay:.5},className:"CN_Floating_Box w-24 h-24 -bottom-6 -left-12 flex items-center justify-center border-blue-500/30",children:A.jsx(fA,{className:"text-blue-400",size:30})}),A.jsxs("div",{className:"relative z-10",children:[A.jsx("div",{className:"absolute top-[8%] -right-7 w-full h-full bg-blue-100/10 rounded-full rotate-6 border border-white/20"}),A.jsx("div",{className:"absolute top-[5%] -right-3 w-full h-full bg-blue-500/10 rounded-full rotate-3 border border-blue-500/20 shadow-2xl"}),A.jsx(t.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:1.2},className:"CN_Circle_Img relative z-20",children:A.jsx("img",{src:Si,alt:"Contact CHN Technologies"})})]})]})})]})]}),A.jsxs("section",{className:"CN_Main_Grid",id:"contact-form",children:[A.jsx(t.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"CN_Form_Box",children:A.jsx(R,{mode:"wait",children:I?A.jsxs(t.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"h-[400px] flex flex-col items-center justify-center text-center space-y-6",children:[A.jsx("div",{className:"w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400",children:A.jsx(BA,{size:60})}),A.jsx("h3",{className:"text-3xl font-black",children:"Intake confirmed"}),A.jsx("p",{className:"text-slate-400 font-medium",children:"Requirement logged. Our strategic response team will review and contact you shortly."}),A.jsx("button",{onClick:()=>p(!1),className:"text-blue-500 font-bold text-sm underline underline-offset-8",children:"Send new intake"})]},"success"):A.jsxs(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[A.jsx("h2",{className:"NET_Hero_H1 CN_Form_H",children:"Share Your Requirement"}),A.jsx("p",{className:"CN_Form_P subtitle",children:"Provide a brief overview of your requirement, and our team will connect with you to understand next steps. Clear information helps us respond faster and more effectively."}),A.jsxs("form",{onSubmit:P,className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[A.jsx("input",{name:"name",type:"text",placeholder:"Full Name",required:!0,className:"CN_Input",value:n.name,onChange:q}),A.jsx("input",{name:"org",type:"text",placeholder:"Organisation",className:"CN_Input",value:n.org,onChange:q}),A.jsx("input",{name:"email",type:"email",placeholder:"Email Address",required:!0,className:"CN_Input md:col-span-1",value:n.email,onChange:q}),A.jsx("input",{name:"phone",type:"text",placeholder:"Contact Number",className:"CN_Input",value:n.phone,onChange:q}),A.jsxs("select",{name:"interest",className:"CN_Select md:col-span-2",value:n.interest,onChange:q,children:[A.jsx("option",{disabled:!0,children:"Area of Interest"}),A.jsx("option",{children:"Technology Services"}),A.jsx("option",{children:"Software & Digital Solutions"}),A.jsx("option",{children:"Consulting & Advisory"}),A.jsx("option",{children:"Careers"})]}),A.jsx("textarea",{name:"message",placeholder:"Requirement Details",rows:5,required:!0,className:"CN_Input md:col-span-2",value:n.message,onChange:q}),A.jsxs("button",{type:"submit",disabled:h,className:"CN_Primary_Btn md:col-span-2",children:[h?"Processing intake...":"Send Message"," ",A.jsx(de,{size:20})]})]})]},"form")})}),A.jsxs("div",{className:"CN_Info_Box",children:[A.jsx("h2",{className:"NET_Hero_H1 CN_Hero_Subtitle subtitle",style:{marginBottom:"50px"},children:"How to connect with us"}),A.jsx("div",{className:"space-y-4",children:[{icon:A.jsx(CA,{size:28}),title:"Business Enquiries",text:"For technology, digital, and consulting discussions."},{icon:A.jsx(AA,{size:28}),title:"Consulting & Advisory",text:"For workforce management, payroll & compliance, and training-related discussions."},{icon:A.jsx(O,{size:28}),title:"Careers",text:"For job applications, internships, and collaboration enquiries."},{icon:A.jsx(oA,{size:28}),title:"Head Office",text:"CHN Technologies Pvt Ltd, No. 28, 4th Main Rd, CIT Nagar East, Chennai - 600035"},{icon:A.jsx(oA,{size:28}),title:"Branch Office",text:"AAA Towers, Avinashi Rd, Near Hope College, Coimbatore - 641 004"}].map((g,m)=>A.jsxs(t.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},transition:{delay:m*.1},viewport:{once:!0},className:"CN_Info_Item",children:[A.jsx("div",{className:"CN_Info_Icon",children:g.icon}),A.jsxs("div",{children:[A.jsx("h4",{className:"CN_Info_H",children:g.title}),A.jsx("p",{className:"CN_Info_Text",children:g.text})]})]},m))})]})]}),A.jsxs("section",{className:"CN_Expectation",children:[A.jsx("span",{className:"text-[#0060ff] font-bold tracking-[0.3em] uppercase mb-6 block",children:"Structured Response"}),A.jsx("h2",{className:"NET_Hero_H1 CN_Section_Title",children:"Here’s What Happens Next After You Contact Us"}),A.jsx("div",{className:"CN_Flow",children:[{icon:A.jsx(W,{size:30}),head:"Strategic Review",p:"Your requirement is analyzed by the relevant sector leads for technical and business alignment."},{icon:A.jsx(Re,{size:30}),head:"Contextual Audit",p:"We may reach out to gather deeper context to ensure our response is Purposeful and precise."},{icon:A.jsx(BA,{size:30}),head:"Structured Response",p:"A formal proposal, consultation, or discussion is scheduled to define the roadmap forward."}].map((g,m)=>A.jsxs("div",{className:"CN_Step",children:[A.jsx("div",{className:"CN_Step_Icon",children:g.icon}),A.jsx("h4",{className:"CN_Step_H",children:g.head}),A.jsx("p",{className:"CN_Step_P",children:g.p})]},m))})]}),A.jsxs("section",{className:"CN_Map_Section",id:"our-presence",children:[A.jsxs("div",{style:{padding:"80px 0",textAlign:"center"},children:[A.jsxs("h2",{className:"NET_Hero_H1 CN_Section_Title",children:["Our ",A.jsx("span",{className:"text-blue-500",children:"presence"})]}),A.jsx("p",{className:"CN_Section_Desc",style:{marginBottom:0},children:"Discover stability and expertise at our key operational hubs."})]}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto",children:[A.jsxs(t.div,{initial:{opacity:0,rotateX:15,y:40},whileInView:{opacity:1,rotateX:0,y:0},whileHover:{rotateX:-2,rotateY:2,scale:1.01},transition:{duration:.8,ease:[.22,1,.36,1]},viewport:{once:!0},style:{perspective:1200,transformStyle:"preserve-3d"},className:"CN_Map_Box",children:[A.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.46!2d80.2328973!3d13.0279111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267bb3ff0c96b%3A0x754b928c48673319!2sCHN%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1712310000003!5m2!1sen!2sin",title:"Head Office - Chennai",width:"100%",height:"100%",style:{border:0},loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),A.jsxs("div",{className:"CN_Map_Overlay",children:[A.jsxs("div",{className:"text-left",children:[A.jsx("p",{className:"text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-0.5",children:"Corporate HQ"}),A.jsx("h3",{className:"text-base font-black text-[#002e5b]",children:"CHN Technologies – Chennai"}),A.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5",children:"No. 28, 4th Main Rd, CIT Nagar, Chennai 600035"})]}),A.jsx("a",{href:"https://www.google.com/maps/dir//CHN+Technologies+Private+Limited,+No.+28,+4th+Main+Rd,+CIT+Nagar+East,+CIT+Nagar,+Chennai,+Tamil+Nadu+600035",target:"_blank",rel:"noreferrer",className:"ml-4 flex-shrink-0 w-10 h-10 bg-[#002e5b] text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all",children:A.jsx(cA,{size:18})})]})]}),A.jsxs(t.div,{initial:{opacity:0,rotateX:15,y:40},whileInView:{opacity:1,rotateX:0,y:0},whileHover:{rotateX:-2,rotateY:-2,scale:1.01},transition:{duration:.8,delay:.15,ease:[.22,1,.36,1]},viewport:{once:!0},style:{perspective:1200,transformStyle:"preserve-3d"},className:"CN_Map_Box",children:[A.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.67!2d77.0206077!3d11.0266952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85700288537d1%3A0x2f08f25d9cfd98ba!2sCHN%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1712310000002!5m2!1sen!2sin",title:"Branch Office - Coimbatore",width:"100%",height:"100%",style:{border:0},loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),A.jsxs("div",{className:"CN_Map_Overlay",children:[A.jsxs("div",{className:"text-left",children:[A.jsx("p",{className:"text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-0.5",children:"Regional Center"}),A.jsx("h3",{className:"text-base font-black text-[#002e5b]",children:"CHN Technologies – Coimbatore"}),A.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5",children:"AAA Towers, Avinashi Rd, Near Hope College, CBE 641004"})]}),A.jsx("a",{href:"https://www.google.com/maps/place/CHN+Technologies+Private+Limited/@11.0267005,77.0180328,17z",target:"_blank",rel:"noreferrer",className:"ml-4 flex-shrink-0 w-10 h-10 bg-[#002e5b] text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all",children:A.jsx(cA,{size:18})})]})]})]})]}),A.jsx("section",{className:"CN_Final",children:A.jsx("div",{className:"CN_Final_Max",children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[A.jsxs("h2",{className:"NET_Hero_H1 CN_Final_H",children:["Start the ",A.jsx("span",{className:"text-blue-500",children:"Conversation"})]}),A.jsx("p",{className:"CN_Final_P",children:"Contact CHN Technologies to discuss how we can support your organisation or career goals."}),A.jsx("a",{href:"#contact-form",style:{textDecoration:"none"},children:A.jsxs("button",{className:"CN_Btn",children:["Get in Touch ",A.jsx(Q,{size:24})]})})]})})})]})},qA="/assets/corporate-flagship-_Lw3ushl.jpg",Ti="/assets/about_tech_services-3RnqaGH9.png",Qi="/assets/about_software_digital-BKrxrSlb.png",Hi="/assets/about_consulting_advisory-Bd-fPn7-.png",je="/assets/about-main-COO96Nzg.jpg",Oi=()=>A.jsxs("div",{className:"ABOUT_WRAPPER",children:[A.jsx("style",{children:`
        .ABOUT_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .ABOUT_Hero {
          position: relative;
          background: #002e5b;
          min-height: 70vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 140px 5% 60px;
        }

        .ABOUT_Hero_Bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          transform: scale(1.1);
        }

        .ABOUT_Hero_Content {
          position: relative;
          z-index: 10;
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
        }

        .ABOUT_Badge {
          color: #3b82f6;
          font-weight: 800;
          letter-spacing: 3px;
          font-size: 0.85rem;
          margin-bottom: 25px;
          display: block;
        }

        .ABOUT_Hero_H1 {
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 25px;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
        }

        .ABOUT_Hero_P {
          color: #b9d1ff;
          max-width: 700px;
          font-weight: 500;
          line-height: 1.4;
          font-size: 1.1rem;
        }

        @media (max-width: 1024px) {
          .ABOUT_Hero { padding-top: 140px; text-align: center; }
          .ABOUT_Hero_Content { display: flex; flex-direction: column; align-items: center; }
          .ABOUT_Hero_P { margin: 0 auto; }
        }

        /* --- SECTION 2: IDENTITY --- */
        .ABOUT_Identity { background: #ffffff; padding: 100px 5%; }
        .ABOUT_Identity_Grid { 
          max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: center; 
        }

        @media (max-width: 1024px) {
          .ABOUT_Identity_Grid { grid-template-columns: 1fr; gap: 60px; text-align: center; }
          .ABOUT_Identity_Img { order: -1; width: 100%; max-width: 600px; margin: 0 auto; }
          .ABOUT_Identity_Badge { position: static !important; margin-top: 20px !important; padding: 30px !important; width: fit-content; margin: 20px auto 0 !important; }
        }

        .ABOUT_Identity_Img { position: relative; }
        .ABOUT_Identity_Img img { width: 100%; border-radius: 50px; box-shadow: 0 40px 100px rgba(0,0,0,0.1); }
        .ABOUT_Identity_Badge { 
          position: absolute; bottom: -30px; right: -30px; 
          background: #3b82f6; color: #fff; padding: 30px; border-radius: 30px;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); text-align: center;
          z-index: 20;
        }

        .ABOUT_Identity_H2 { 
          line-height: 1.2; 
          color: #1a2b4b;
          margin-bottom: 25px;
        }
        .ABOUT_Identity_P { color: #64748b; line-height: 1.8; margin-bottom: 40px; font-size: 1.1rem; }

        .ABOUT_Feature_Box { 
          display: flex; align-items: center; gap: 25px; background: #f8fafc; 
          padding: 30px; border-radius: 30px; border-left: 8px solid #3b82f6; 
          text-align: left;
        }
        .ABOUT_Feature_Icon { width: 60px; height: 60px; background: #fff; color: #3b82f6; border-radius: 18px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(0,0,0,0.05); min-width: 60px; }

        /* --- SECTION 3: FOCUS GRID --- */
        .ABOUT_Focus { background: #fdfdfd; padding: 50px 5%; }
        .ABOUT_Focus_Grid { 
          display: grid; 
          grid-template-columns: 1fr;
          gap: 30px; 
          max-width: 1300px; 
          margin: 80px auto 0;
        }
        @media (min-width: 768px) { .ABOUT_Focus_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .ABOUT_Focus_Grid { grid-template-columns: repeat(3, 1fr); } }

        .ABOUT_Card {
          background: #ffffff; padding: 15px; border-radius: 40px; border: 1px solid #f1f5f9; transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1); text-align: left; position: relative; z-index: 10; overflow: hidden;
        }

        .ABOUT_Card_Inner { padding: 30px 25px; }
        .ABOUT_Card_Img { 
          height: 240px; border-radius: 30px; overflow: hidden; margin-bottom: 10px; position: relative; 
        }
        .ABOUT_Card_Img img { width: 100%; height: 100%; object-fit: cover; transition: 0.7s; }
        .ABOUT_Card:hover .ABOUT_Card_Img img { transform: scale(1.1); }
        
        .ABOUT_Card_H { font-weight: 700; color: #1a2b4b; margin-bottom: 20px; transition: 0.3s; font-size: 1.5rem; }

        .ABOUT_Approach { padding: 100px 5%; background: #0f1e3c; color: #fff; position: relative; overflow: hidden; }
        .ABOUT_Approach::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 60%),
                            radial-gradient(circle at 80% 20%, rgba(0,96,255,0.06) 0%, transparent 50%);
          pointer-events: none;
        }
        .ABOUT_Approach_Container { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: center; position: relative; z-index: 1; }

        @media (max-width: 1024px) {
          .ABOUT_Approach_Container { grid-template-columns: 1fr; text-align: center; gap: 60px; }
          .ABOUT_Approach_Left { order: -1; display: flex; flex-direction: column; align-items: center; }
          .ABOUT_Philosophy_Grid { justify-content: center; }
        }

        .ABOUT_Approach_H { line-height: 1.1; margin-bottom: 40px; color: #fff; }
        .ABOUT_Philosophy_Grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 640px) { .ABOUT_Philosophy_Grid { grid-template-columns: repeat(2, 1fr); } }

        .ABOUT_Phil_Card {
          background: rgba(255,255,255,0.03); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.08); padding: 40px; border-radius: 40px; transition: 0.4s;
          text-align: left;
        }
        .ABOUT_Phil_Card:hover { background: rgba(255,255,255,0.06); transform: translateY(-5px); border-color: #3b82f6; }
        .ABOUT_Phil_Icon { width: 50px; height: 50px; background: #3b82f6; color: #fff; border-radius: 15px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; }

        /* --- FINAL --- */
        .ABOUT_Final { padding: 100px 5%; text-align: center; background: #fff; }
        .ABOUT_Final_H { line-height: 1.1; color: #1a2b4b; margin-bottom: 25px; }
        .ABOUT_Btn { 
          background: #3b82f6; color: #fff; padding: 16px 36px; border-radius: 100px; font-weight: 800; font-size: 1.1rem; display: inline-flex; align-items: center; gap: 15px; transition: 0.3s; box-shadow: 0 20px 50px rgba(59, 130, 246, 0.4); border: none; cursor: pointer;
        }
        .ABOUT_Btn:hover { transform: translateY(-5px); background: #1e3a8a; }
      `}),A.jsxs("section",{className:"ABOUT_Hero",children:[A.jsx(t.div,{initial:{scale:1.1,opacity:0},animate:{scale:1,opacity:.15},transition:{duration:1.5},className:"ABOUT_Hero_Bg",style:{backgroundImage:`url(${qA})`}}),A.jsxs("div",{className:"ABOUT_Hero_Content",children:[A.jsxs(t.h2,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"ABOUT_Hero_H1 NET_Hero_H1",children:["About CHN ",A.jsx("br",{})," ",A.jsx("span",{className:"text-blue-500",children:"Technologies"})]}),A.jsx(t.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},className:"ABOUT_Hero_P",children:"We build the resilient foundations that empower global enterprises to navigate the complexities of technology, people, and digital change."}),A.jsx(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},className:"flex items-center gap-5 mt-10",children:A.jsxs("a",{href:"#chn-overview",style:{display:"inline-flex",alignItems:"center",gap:12,background:"#0060ff",color:"#fff",padding:"16px 36px",borderRadius:100,fontWeight:600,fontSize:"1rem",textDecoration:"none",letterSpacing:"0.02em",boxShadow:"0 12px 40px rgba(0,96,255,0.35)",transition:"all 0.3s"},children:[A.jsx(Q,{size:18}),"Read More"]})})]})]}),A.jsx("section",{id:"chn-overview",className:"ABOUT_Identity",children:A.jsxs("div",{className:"ABOUT_Identity_Grid",children:[A.jsxs(t.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"ABOUT_Identity_Img",children:[A.jsx("img",{src:qA,alt:"Corporate Flagship"}),A.jsxs("div",{className:"ABOUT_Identity_Badge",children:[A.jsx("h4",{className:"text-3xl font-black",children:"5+"}),A.jsx("p",{className:"text-[10px] font-bold tracking-widest text-blue-100",children:"Years of discipline"})]})]}),A.jsxs(t.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"ABOUT_Identity_Content text-left",children:[A.jsx("span",{className:"ABOUT_Badge",children:"OVERVIEW"}),A.jsx("h2",{className:"NET_Hero_H1 ABOUT_Identity_H2",children:"Strengthening Operations Through Structured Solutions"}),A.jsx("p",{className:"ABOUT_Identity_P",children:"CHN Technologies helps businesses strengthen operations through structured technology services, digital solutions, and workforce-focused consulting. Our work is centred on creating stable systems and long-term operational confidence."}),A.jsxs("div",{className:"ABOUT_Feature_Box",children:[A.jsx("div",{className:"ABOUT_Feature_Icon",children:A.jsx(M,{size:30})}),A.jsxs("div",{className:"text-left",children:[A.jsx("h4",{className:"text-xl font-black text-[#1a2b4b]",children:"Long-term operational confidence"}),A.jsx("p",{className:"text-slate-500 font-medium",children:"Supporting organisations as they scale, transform, and adapt."})]})]})]})]})}),A.jsxs("section",{className:"ABOUT_Focus",children:[A.jsxs("div",{className:"max-w-7xl mx-auto text-center lg:text-left",children:[A.jsx("span",{className:"ABOUT_Badge",children:"CORE ECOSYSTEM"}),A.jsx("h2",{className:"NET_Hero_H1 ABOUT_Identity_H2",style:{marginBottom:0},children:"What We Work On"})]}),A.jsx("div",{className:"ABOUT_Focus_Grid",children:[{title:"Technology Services",icon:A.jsx(pA,{}),img:Ti,tag:"Enterprise IT",desc:"Network management, cyber security, and physical infrastructure for stable IT environments."},{title:"Software & Digital",icon:A.jsx(LA,{}),img:Qi,tag:"Digital Dev",desc:"Developing scalable web platforms, applications, and automated business process solutions."},{title:"Consulting & Advisory",icon:A.jsx(AA,{}),img:Hi,tag:"Advisory",desc:"Workforce management, payroll compliance, and structured operational governance."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},viewport:{once:!0},className:"ABOUT_Card group",children:[A.jsxs("div",{className:"ABOUT_Card_Img",children:[A.jsx("img",{src:e.img,alt:e.title}),A.jsxs("div",{className:"absolute bottom-4 left-4 z-10 bg-white/95 px-4 py-2 rounded-xl flex items-center gap-2 text-[#3b82f6] shadow-lg font-black text-[10px] tracking-widest",children:[nA.cloneElement(e.icon,{size:14})," ",e.tag]})]}),A.jsxs("div",{className:"ABOUT_Card_Inner",children:[A.jsx("h3",{className:"ABOUT_Card_H",children:e.title}),A.jsx("p",{className:"text-slate-500 font-medium leading-relaxed mb-3",children:e.desc})]})]},i))})]}),A.jsx("section",{className:"ABOUT_Approach",children:A.jsxs("div",{className:"ABOUT_Approach_Container",children:[A.jsxs(t.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"text-left ABOUT_Approach_Left",children:[A.jsx("span",{className:"ABOUT_Badge",children:"OUR APPROACH"}),A.jsxs("h2",{className:"NET_Hero_H1 ABOUT_Approach_H",children:["How CHN Approaches ",A.jsx("span",{className:"text-white",children:"Business Problems"})]}),A.jsx("p",{className:"text-blue-100/50 text-lg font-medium leading-relaxed mb-10 max-w-lg",children:"We focus on how systems, processes, and teams interact in real operational environments rather than isolated issues."}),A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.7,delay:.2},viewport:{once:!0},style:{position:"relative",borderRadius:"24px",overflow:"hidden",boxShadow:"0 20px 50px rgba(0,0,0,0.35)",marginTop:"8px",width:"100%",aspectRatio:"16 / 9"},children:[A.jsx("img",{src:je,alt:"CHN Approach",style:{width:"100%",height:"100%",display:"block",objectFit:"cover",objectPosition:"center center"}}),A.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(15,30,60,0.75) 0%, transparent 60%)"}}),A.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"3px",background:"linear-gradient(90deg, #3b82f6, #0060ff)"}}),A.jsx("div",{style:{position:"absolute",bottom:"18px",left:"20px"},children:A.jsx("span",{style:{fontSize:"0.68rem",fontWeight:700,color:"rgba(255,255,255,0.7)",letterSpacing:"0.12em",background:"rgba(255,255,255,0.07)",backdropFilter:"blur(10px)",padding:"8px 14px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)"},children:"People · Process · Technology"})})]})]}),A.jsx("div",{className:"ABOUT_Philosophy_Grid",children:[{title:"Delivery Philosophy",icon:A.jsx(MA,{}),desc:"Understand the environment, define ownership, and execute with control."},{title:"Accountability",icon:A.jsx(M,{}),desc:"Clear ownership and responsibility in every single engagement."},{title:"Practical Execution",icon:A.jsx(U,{}),desc:"Prioritising practical results over theory and long-term stability."},{title:"Reliability",icon:A.jsx(j,{}),desc:"Stable solutions that perform over time and evolve with needs."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},viewport:{once:!0},className:"ABOUT_Phil_Card",children:[A.jsx("div",{className:"ABOUT_Phil_Icon",children:nA.cloneElement(e.icon,{size:24})}),A.jsx("h4",{className:"text-xl font-bold text-blue-500 mb-3",children:e.title}),A.jsx("p",{className:"text-md font-black tracking-widest text-blue-100/50 leading-relaxed",children:e.desc})]},i))})]})}),A.jsx("section",{className:"ABOUT_Final",children:A.jsx("div",{className:"max-w-4xl mx-auto",children:A.jsxs(t.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[A.jsxs("h2",{className:"NET_Hero_H1 ABOUT_Final_H",children:["Work With a Partner That Values ",A.jsx("br",{})," Structure and Stability"]}),A.jsxs("p",{className:"ABOUT_Identity_P text-center mb-12",children:["Connect with CHN Technologies to learn how our capabilities ",A.jsx("br",{})," can support your organisation's long-term objectives."]}),A.jsx(c,{to:"/contact",children:A.jsxs("button",{className:"ABOUT_Btn",children:["Contact Our Team ",A.jsx(Q,{size:24})]})})]})})})]}),Pi="/assets/blog-office-CyZJaxCp.jpg",UA="/assets/blog-collaboration-CJSPfHo6.jpg",QA="/assets/blog-featured-DmUEBYsz.jpg",zi=()=>{const[e,i]=l.useState("All"),[s,n]=l.useState(""),d=l.useRef(null),h=["All","Operations","Software","Governance","Workforce","Strategy","Quality"],I=[{id:1,image:RA,tag:"Operations",title:"Technology Operations & Management",desc:"Deep-dives into managing enterprise networks, systems, security, and infrastructure effectively for long-term scalability and operational stability.",author:"IT Strategy Lead",date:"Oct 24, 2026"},{id:2,image:Pi,tag:"Software",title:"Digital & Software Practices in Enterprise",desc:"Perspectives on modern web platforms, applications, analytics, and automation systems tailored for real-world business environments and high performance.",author:"Digital Architect",date:"Oct 15, 2026"},{id:3,image:Rt,tag:"Governance",title:"Execution & Governance for Modern Firm",desc:"Detailed articles focused on operational control, process maturity, and establishing reliable system structures to ensure corporate governance and asset protection.",author:"Compliance Director",date:"Sep 28, 2026"},{id:4,image:UA,tag:"Workforce",title:"Workforce & Global Compliance Standards",desc:"Understanding workforce structures, payroll practices, and statutory compliance for HR leaders managing complex multinational operations and regulatory shifts.",author:"HR Advisory Lead",date:"Sep 12, 2026"},{id:5,image:Ne,tag:"Strategy",title:"Sustainable Strategy and Future-Fit Growth",desc:"Analysing how business owners, IT decision-makers, and professionals can leverage practical technology strategies to drive sustainable organisational expansion.",author:"Operations Lead",date:"Aug 30, 2026"},{id:6,image:QA,tag:"Quality",title:"Knowledge Over Frequency: An Editorial",desc:"Why we prioritise relevance and clarity over volume, ensuring every piece of content remains useful and actionable over long-term strategic horizons.",author:"Editorial Board",date:"Aug 22, 2026"}].filter(u=>{const x=e==="All"||u.tag===e,v=u.title.toLowerCase().includes(s.toLowerCase())||u.desc.toLowerCase().includes(s.toLowerCase());return x&&v}),p=u=>{u.current?.scrollIntoView({behavior:"smooth"})};return A.jsxs("div",{className:"BLOG_WRAPPER",children:[A.jsx("style",{children:`
        .BLOG_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .BLOG_Hero {
          position: relative;
          height: 60vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #002e5b;
          overflow: hidden;
          padding: 100px 5% 60px;
        }

        .BLOG_Hero_Bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          transform: scale(1.1);
        }

        .BLOG_Hero_Content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          width: 100%;
        }

        .BLOG_Badge {
          display: inline-block;
          color: #3b82f6;
          font-weight: 700;
          letter-spacing: 3px;
          font-size: 0.85rem;
          margin-bottom: 25px;
        }

        .BLOG_Hero_H1 {
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 35px;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
        }

        .BLOG_Search_Box {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          max-width: 650px;
          margin: 0 auto;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        }

        @media (max-width: 640px) {
          .BLOG_Search_Box { 
            border-radius: 100px; 
            padding: 6px 8px; 
            gap: 10px;
          }
          .BLOG_Search_Box input { 
            font-size: 1rem;
            padding: 10px 5px;
            text-align: left;
          }
          .BLOG_Search_Btn { 
            width: 44px; 
            height: 44px;
            border-radius: 50%;
          }
          .BLOG_Search_Icon { width: 20px !important; height: 20px !important; margin-left: 10px !important; }
        }

        .BLOG_Search_Icon { margin-left: 15px; flex-shrink: 0; opacity: 0.5; }

        .BLOG_Search_Box input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-size: 1.1rem;
          padding: 10px 20px;
          font-weight: 500;
        }
        .BLOG_Search_Box input::placeholder { color: rgba(255,255,255,0.4); }

        .BLOG_Search_Btn {
           width: 50px; height: 50px; background: #3b82f6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer;
        }

        /* --- SECTION 2: FILTER --- */
        .BLOG_Filter_Bar {
          position: sticky;
          top: 80px;
          z-index: 50;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid #f1f5f9;
          padding: 25px 5%;
        }

        @media (max-width: 768px) {
          .BLOG_Filter_Bar { position: relative; top: 0; padding: 15px 5%; }
        }

        .BLOG_Filter_Flex {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 12px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .BLOG_Filter_Flex::-webkit-scrollbar { display: none; }

        @media (max-width: 768px) {
          .BLOG_Filter_Flex { flex-wrap: wrap; justify-content: center; }
          .BLOG_Filter_Btn { flex: 1 1 auto; min-width: 120px; text-align: center; }
        }

        @media (max-width: 480px) {
          .BLOG_Filter_Btn { width: 100%; flex: 1 0 100%; }
        }

        .BLOG_Filter_Btn {
          white-space: nowrap;
          padding: 12px 30px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.9rem;
          transition: 0.4s;
          border: 1px solid #f1f5f9;
          background: #fff;
          color: #1a2b4b;
          letter-spacing: 1px;
          cursor: pointer;
        }
        .BLOG_Filter_Btn:hover { border-color: #3b82f6; color: #3b82f6; }
        .BLOG_Filter_Btn.active { 
          background: #3b82f6; color: white; border-color: #3b82f6; 
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }

        /* --- SECTION 3: INSIGHTS GRID --- */
        .BLOG_Grid_Section {
          padding: 100px 5%;
          background: #fdfdfd;
        }

        .BLOG_Grid_Container { max-width: 1300px; margin: 0 auto; }

        /* FEATURED SECTION */
        .BLOG_Featured_Card {
          background: #fff;
          border-radius: 50px;
          border: 1px solid #f1f5f9;
          padding: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 100px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.03);
          overflow: hidden;
        }
.BLOG_Btn{
                  background: #3b82f6; color: white; padding: 15px 30px; border-radius: 100px; 
                  font-weight: 800; font-size: 1.1rem; border: none; cursor: pointer; transition: 0.3s;
                  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4); display: inline-flex; align-items: center; justify-content: center; gap: 15px; margin: 0 auto;

}
        @media (max-width: 1024px) {
          .BLOG_Featured_Card { grid-template-columns: 1fr; gap: 40px; padding: 40px; }
          .BLOG_Featured_Img { height: 350px; }
          .BLOG_Featured_H { font-size: 2.2rem; }
          .BLOG_Featured_Content { padding: 0; text-align: center; }
          .BLOG_Featured_Content .flex { justify-content: center; }
        }

        .BLOG_Featured_Img { border-radius: 40px; overflow: hidden; height: 500px; }
        .BLOG_Featured_Img img { width: 100%; height: 100%; object-fit: cover; }

        .BLOG_Featured_Content { padding: 40px; text-align: left; }
        .BLOG_Featured_H { line-height: 1.1; margin-bottom: 25px; color: #1a2b4b; }

        /* GRID */
        .BLOG_Grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }
        @media (min-width: 768px) { .BLOG_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .BLOG_Grid { grid-template-columns: repeat(3, 1fr); } }

        .BLOG_Card {
          background: #ffffff;
          padding: 15px;
          border-radius: 40px;
          border: 1px solid #f1f5f9;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
          position: relative;
          z-index: 10;
          overflow: hidden;
        }

        .BLOG_Card_Img_Box { 
          height: 250px; border-radius: 30px; overflow: hidden; margin-bottom: 30px; 
          position: relative; 
        }
        .BLOG_Card_Img_Box img { width: 100%; height: 100%; object-fit: cover; transition: 0.7s; }
        .BLOG_Card:hover .BLOG_Card_Img_Box img { transform: scale(1.1); }

        .BLOG_Card_Content { padding: 0 20px 25px; }
        .BLOG_Card_Tag { 
          color: #3b82f6; font-weight: 800; font-size: 0.75rem; 
          margin-bottom: 12px; display: block; letter-spacing: 1px; 
        }
        .BLOG_Card_H { font-size: 1.5rem; font-weight: 800; color: #1a2b4b; margin-bottom: 15px; line-height: 1.3; }
        .BLOG_Card_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; font-weight: 500; margin-bottom: 25px; }

        .BLOG_Card_Footer { border-top: 1px solid #f8fafc; padding-top: 20px; display: flex; align-items: center; justify-content: space-between; }
        .BLOG_Author { display: flex; align-items: center; gap: 10px; }
        .BLOG_Author_Dot { width: 8px; height: 8px; background: #3b82f6; border-radius: 50%; }

        /* EMPTY STATE */
        .BLOG_Empty { padding: 120px 0; text-align: center; }
        .BLOG_Empty_Icon { width: 100px; height: 100px; background: #f1f5f9; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 30px; color: #cbd5e1; }
      `}),A.jsxs("section",{className:"BLOG_Hero",children:[A.jsx(t.div,{initial:{scale:1.1,opacity:0},animate:{scale:1,opacity:.15},transition:{duration:1.5},className:"BLOG_Hero_Bg",style:{backgroundImage:`url(${qA})`}}),A.jsxs("div",{className:"BLOG_Hero_Content",children:[A.jsx(t.span,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"BLOG_Badge uppercase",children:"Corporate Insights"}),A.jsxs(t.h2,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"BLOG_Hero_H1 NET_Hero_H1",children:["Knowledge-Led ",A.jsx("br",{})," ",A.jsx("span",{className:"text-blue-500",children:"Perspectives"})]}),A.jsxs(t.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.4},className:"BLOG_Search_Box",children:[A.jsx(W,{className:"BLOG_Search_Icon",size:24,color:"white"}),A.jsx("input",{type:"text",placeholder:"Search Insights...",value:s,onChange:u=>n(u.target.value)}),A.jsx("button",{className:"BLOG_Search_Btn",onClick:()=>p(d),children:A.jsx(Q,{size:24})})]})]})]}),A.jsx("section",{className:"BLOG_Filter_Bar",children:A.jsxs("div",{className:"BLOG_Filter_Flex",children:[A.jsxs("div",{className:"flex items-center gap-4 mr-10",children:[A.jsx(We,{size:18,className:"text-slate-400"}),A.jsx("span",{className:"text-slate-400 font-bold text-md tracking-widest hidden md:block",children:"Refine Area:"})]}),h.map(u=>A.jsx("button",{onClick:()=>i(u),className:`BLOG_Filter_Btn ${e===u?"active":""}`,children:u},u))]})}),A.jsx("section",{ref:d,className:"BLOG_Grid_Section",children:A.jsxs("div",{className:"BLOG_Grid_Container",children:[!s&&e==="All"&&A.jsxs(t.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"BLOG_Featured_Card",children:[A.jsx("div",{className:"BLOG_Featured_Img",children:A.jsx("img",{src:QA,alt:"Featured Article"})}),A.jsxs("div",{className:"BLOG_Featured_Content",children:[A.jsx("span",{className:"BLOG_Badge uppercase",children:"Editorial Focus"}),A.jsx("h2",{className:"NET_Hero_H1 BLOG_Featured_H",children:"Insights From Our Strategic Advisors"}),A.jsx("p",{className:"text-slate-500 font-medium text-lg leading-relaxed mb-10",children:"Comprehensive perspectives on technology, people, and unified corporate processes drawn from real-world digital flagship engagements."}),A.jsxs("div",{className:"flex items-center gap-6 pt-10 border-t border-slate-100",children:[A.jsx("div",{className:"w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600",children:A.jsx(Ue,{size:30})}),A.jsxs("div",{children:[A.jsx("h4",{className:"font-bold text-[#1a2b4b]",children:"CHN Strategic Board"}),A.jsx("p",{className:"text-xs font-bold text-slate-400 tracking-widest",children:"Industry Knowledge Directors"})]})]})]})]}),A.jsxs("div",{className:"flex items-center justify-between mb-12",children:[A.jsxs("h3",{className:"text-2xl font-bold text-[#1a2b4b] tracking-tight",children:[e," Insights"]}),A.jsxs("p",{className:"text-slate-400 font-bold text-xs tracking-widest",children:["Showing ",I.length," results"]})]}),A.jsx(t.div,{layout:!0,className:"BLOG_Grid",children:A.jsx(R,{mode:"popLayout",children:I.map(u=>A.jsx(t.div,{layout:!0,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.4},children:A.jsxs("div",{className:"BLOG_Card",children:[A.jsx("div",{className:"BLOG_Card_Img_Box",children:A.jsx("img",{src:u.image,alt:u.title})}),A.jsxs("div",{className:"BLOG_Card_Content text-left",children:[A.jsx("span",{className:"BLOG_Card_Tag",children:u.tag}),A.jsx("h3",{className:"BLOG_Card_H",children:u.title}),A.jsx("p",{className:"BLOG_Card_P line-clamp-3",children:u.desc}),A.jsx("div",{className:"BLOG_Card_Footer",children:A.jsxs("div",{className:"BLOG_Author",children:[A.jsx("div",{className:"BLOG_Author_Dot"}),A.jsx("span",{className:"text-[11px] font-bold text-slate-400 tracking-widest",children:u.author})]})})]})]})},u.id))})}),I.length===0&&A.jsxs("div",{className:"BLOG_Empty",children:[A.jsx("div",{className:"BLOG_Empty_Icon",children:A.jsx(W,{size:40})}),A.jsx("h4",{className:"text-2xl font-bold text-[#1a2b4b] mb-4",children:"No results found"}),A.jsx("p",{className:"text-slate-400 font-medium mb-8",children:"Refine your search term or select a different category."}),A.jsx("button",{className:"text-blue-500 font-bold text-sm tracking-widest",onClick:()=>{i("All"),n("")},children:"Reset all filters"})]})]})}),A.jsxs("section",{style:{padding:"50px 5%",textAlign:"center",background:"#f8fafc"},children:[A.jsxs("h2",{className:"NET_Hero_H1",style:{color:"#1a2b4b"},children:["Stay Informed With ",A.jsx("span",{className:"text-blue-500",children:"Expert Clarity"})]}),A.jsx("p",{className:"text-slate-500 font-medium text-lg max-w-2xl mx-auto mb-12",children:"Gain access to refined perspectives that matter to business owners, IT decision-makers, and industry professionals."}),A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"BLOG_Btn",children:"Inquire for Insights"})})]})]})},Li="/assets/careers-env-CpDJGspn.png",Mi="/assets/careers-excellence-BZkfa6Nh.jpg",Fi="/assets/about-office-BOfQ9or7.jpg",Gi="/assets/culture-collaboration-B4Bh4L1T.png",Ri="/assets/corporate-leader-9fBv3lIY.png",Wi=()=>{const[e,i]=l.useState({title:"",department:"All Departments",experience:"All Experience",qualification:"All Qualifications"}),[s,n]=l.useState(!1),d=l.useRef(null),h=l.useRef(null),[w,I]=l.useState(null),[p,u]=l.useState({name:"",email:"",interest:"General Inquiry",otherInterest:"",message:""}),[x,v]=l.useState({name:"",email:"",phone:"",position:"Select Job Position",otherPosition:"",message:""}),[z,k]=l.useState(!1),[L,P]=l.useState(!1),[q,E]=l.useState(!1),g=a=>{if(a.target.files&&a.target.files.length>0){const r=a.target.files[0];if(r.size>10*1024*1024){rA.error("File is too large. Maximum size allowed is 10MB."),a.target.value="";return}I(r)}},m=void 0,C=void 0,H="hrd@chnindia.com".trim(),tA=(a=!1)=>`
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 0 16px 0;">
      <tr>
        <td align="center">
          <a href="https://www.chnindia.com" target="_blank" style="display:inline-block; text-decoration:none;">
            <img class="responsive-logo" src="${a?WA.trim():"cid:chnLogo"}" alt="CHN Technologies" width="180" border="0" style="display:block; width:180px; max-width:180px; height:auto; border:0; outline:none; text-decoration:none;">
          </a>
        </td>
      </tr>
    </table>
  `,[Z,X]=nA.useState(!1),[o,b]=nA.useState("apply"),B=[{id:1,title:"Marketing Expert",dept:"Software Solutions",exp:"2-5 Years",qual:"MBA",tags:["Strategy","Ads"]},{id:2,title:"Graphic Designer",dept:"Software Solutions",exp:"0-2 Years",qual:"Graduate",tags:["Figma","UI"]},{id:3,title:"Project Manager",dept:"Consulting",exp:"5+ Years",qual:"PMP",tags:["Agile","Scrum"]},{id:4,title:"SEO Specialist",dept:"Digital Solutions",exp:"2-5 Years",qual:"Graduate",tags:["SEM","Content"]},{id:5,title:"Senior Developer",dept:"Software Solutions",exp:"5+ Years",qual:"B.Tech",tags:["Stack","Cloud"]},{id:6,title:"UI Designer",dept:"Digital Solutions",exp:"2-5 Years",qual:"Graduate",tags:["Design","UX"]},{id:7,title:"Digital Marketing Analyst",dept:"Digital Solutions",exp:"2-5 Years",qual:"B.Tech",tags:["Data","SEO"]},{id:8,title:"Full Stack Developer",dept:"Software Solutions",exp:"3-5 Years",qual:"B.Tech",tags:["React","Node"]},{id:9,title:"L1 Network Engineer",dept:"Tech Services",exp:"1-3 Years",qual:"B.E",tags:["Cisco","IP"]},{id:10,title:"HR Generalist",dept:"Consulting",exp:"2-5 Years",qual:"MBA",tags:["Payroll","Recruit"]},{id:11,title:"Finance Executive",dept:"Corporate Services",exp:"3-5 Years",qual:"CA / MBA",tags:["Tax","Audit"]},{id:12,title:"Sales Coordinator",dept:"Business Development",exp:"1-3 Years",qual:"Graduate",tags:["Leads","CRM"]},{id:13,title:"Other / Not Listed",dept:"General Interest",exp:"N/A",qual:"N/A",tags:["General"]}];B.filter(a=>{const r=a.title.toLowerCase().includes(e.title.toLowerCase()),_=e.department==="All Departments"||a.dept===e.department,N=e.experience==="All Experience"||a.exp===e.experience;return r&&_&&N});const F=(a,r,_)=>{const N=new Date().getFullYear(),S=tA(_),iA=`
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${a==="apply"?`[Job Application] ${r.position||""}`:`[Careers Inquiry] ${r.interest||""}`}</title>
        <style>
          @media only screen and (max-width: 600px) {
            .responsive-padding {
              padding: 30px 20px 20px !important;
            }
            .responsive-inner-padding {
              padding: 24px 20px !important;
            }
            .responsive-logo {
              width: 140px !important;
            }
            .responsive-title {
              font-size: 20px !important;
            }
          }
        </style>
      </head>
    `;return a==="apply"?`
        <!DOCTYPE html>
        <html>
        ${iA}
        <body style="margin: 0; padding: 0; background-color: #f1f5f9;">
          <div style="background-color: #f1f5f9; padding: 40px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin:0;">
            <!--[if mso]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="width: 600px;">
            <tr>
            <td>
            <![endif]-->
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; box-shadow: 0 40px 100px rgba(0,46,91,0.08); border: 1px solid #e2e8f0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tr>
                <td height="6" style="height: 6px; background-color: #3b82f6; font-size: 1px; line-height: 1px; border-radius: 24px 24px 0 0;">&nbsp;</td>
              </tr>
              <tr>
                <td class="responsive-padding" align="center" style="padding: 50px 40px 30px; text-align: center; border-bottom: 1px solid #f1f5f9;">
                  ${S}
                  <h1 class="responsive-title" style="color: #002e5b; margin: 16px 0 0 0; font-size: 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">New Job Application</h1>
                  <p style="color: #64748b; margin: 8px 0 0 0; font-size: 11px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 700; letter-spacing: 2px;">CHN TECHNOLOGIES CAREERS</p>
                </td>
              </tr>
              <tr>
                <td class="responsive-padding" style="padding: 40px 40px 30px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                    <tr>
                      <td style="padding-bottom: 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        <h2 style="color: #0f172a; font-size: 18px; font-weight: 900; margin: 0 0 8px 0; letter-spacing: -0.5px;">Candidate Information</h2>
                        <div style="height: 4px; width: 40px; background-color: #3b82f6; border-radius: 10px;"></div>
                      </td>
                    </tr>
                  </table>
                  
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                    <tr>
                      <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Full Name</span>
                        <strong style="color: #1e293b; font-size: 16px;">${r.name||"Jane Smith"}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Email Identity</span>
                        <strong style="color: #1e293b; font-size: 16px; word-break: break-all;">${r.email||"jane@example.com"}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Mobile Contact</span>
                        <strong style="color: #1e293b; font-size: 16px;">${r.phone||"N/A"}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Uploaded Resume</span>
                        <strong style="color: #10b981; font-size: 15px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">[Attached File] ${r.fileName||"No file uploaded"}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 20px 0; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Target Position</span>
                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                          <tr>
                            <td bgcolor="#eff6ff" style="background-color: #eff6ff; border: 1px solid #dbeafe; padding: 10px 22px; border-radius: 12px; color: #3b82f6; font-weight: bold; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; letter-spacing: 0.5px;">
                              ${r.position||"Full Stack Developer"}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 24px;">
                    <tr>
                      <td class="responsive-inner-padding" bgcolor="#fafbfc" style="background-color: #fafbfc; border: 1px solid #f1f5f9; border-radius: 20px; padding: 30px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 12px;">Statement of Interest</span>
                        <p style="color: #475569; font-size: 14px; line-height: 1.8; margin: 0; font-weight: 500; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">${(r.message||"Sample career submission message preview...").replace(/\n/g,"<br>")}</p>
                      </td>
                    </tr>
                  </table>
  
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 40px;">
                    <tr>
                      <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin: 0 auto;">
                          <tr>
                            <td align="center" bgcolor="#3b82f6" style="border-radius: 100px; background-color: #3b82f6; padding: 16px 40px;">
                              <a href="mailto:${r.email||"jane@example.com"}?subject=Re: Application for ${encodeURIComponent(r.position||"Full Stack Developer")}" style="font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; font-weight: bold; letter-spacing: 1px; display: inline-block;">REPLY DIRECTLY</a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td class="responsive-padding" style="padding: 30px; text-align: center; background-color: #fafbfc; border-top: 1px solid #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border-radius: 0 0 24px 24px;">
                  <p style="color: #94a3b8; font-size: 11px; margin: 0; font-weight: 600;">&copy; ${N} CHN Technologies Digital Recruitment Engine</p>
                </td>
              </tr>
            </table>
            <!--[if mso]>
            </td>
            </tr>
            </table>
            <![endif]-->
          </div>
        </body>
        </html>
      `:a==="inquiry"?`
        <!DOCTYPE html>
        <html>
        ${iA}
        <body style="margin: 0; padding: 0; background-color: #f1f5f9;">
          <div style="background-color: #f1f5f9; padding: 40px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin:0;">
            <!--[if mso]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="width: 600px;">
            <tr>
            <td>
            <![endif]-->
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; box-shadow: 0 40px 100px rgba(0,46,91,0.08); border: 1px solid #e2e8f0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tr>
                <td height="6" style="height: 6px; background-color: #8b5cf6; font-size: 1px; line-height: 1px; border-radius: 24px 24px 0 0;">&nbsp;</td>
              </tr>
              <tr>
                <td class="responsive-padding" align="center" style="padding: 50px 40px 30px; text-align: center; border-bottom: 1px solid #f1f5f9;">
                  ${S}
                  <h1 class="responsive-title" style="color: #002e5b; margin: 16px 0 0 0; font-size: 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">Careers Inquiry</h1>
                  <p style="color: #64748b; margin: 8px 0 0 0; font-size: 12px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 700; letter-spacing: 2px;">CHN TECHNOLOGIES CAREERS</p>
                </td>
              </tr>
              <tr>
                <td class="responsive-padding" style="padding: 40px 40px 30px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                    <tr>
                      <td style="padding-bottom: 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        <h2 style="color: #0f172a; font-size: 18px; font-weight: 900; margin: 0 0 8px 0; letter-spacing: -0.5px;">Inquiry Information</h2>
                        <div style="height: 4px; width: 40px; background-color: #8b5cf6; border-radius: 10px;"></div>
                      </td>
                    </tr>
                  </table>
                  
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                    <tr>
                      <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Candidate Name</span>
                        <strong style="color: #1e293b; font-size: 16px;">${r.name||"Jane Smith"}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Email Identity</span>
                        <strong style="color: #1e293b; font-size: 16px; word-break: break-all;">${r.email||"jane@example.com"}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 20px 0; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Inquiry Interest</span>
                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                          <tr>
                            <td bgcolor="#f5f3ff" style="background-color: #f5f3ff; border: 1px solid #dbeafe; padding: 10px 22px; border-radius: 12px; color: #8b5cf6; font-weight: bold; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; letter-spacing: 0.5px;">
                              ${r.interest||"General Inquiry"}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 24px;">
                    <tr>
                      <td class="responsive-inner-padding" bgcolor="#fafbfc" style="background-color: #fafbfc; border: 1px solid #f1f5f9; border-radius: 20px; padding: 30px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 12px;">Statement of Interest</span>
                        <p style="color: #475569; font-size: 14px; line-height: 1.8; margin: 0; font-weight: 500; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">${(r.message||"Sample career submission message preview...").replace(/\n/g,"<br>")}</p>
                      </td>
                    </tr>
                  </table>
  
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 40px;">
                    <tr>
                      <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin: 0 auto;">
                          <tr>
                            <td align="center" bgcolor="#8b5cf6" style="border-radius: 100px; background-color: #8b5cf6; padding: 16px 40px;">
                              <a href="mailto:${r.email||"jane@example.com"}?subject=Re: Inquiry on ${encodeURIComponent(r.interest||"General Inquiry")}" style="font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; font-weight: bold; letter-spacing: 1px; display: inline-block;">REPLY DIRECTLY</a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td class="responsive-padding" style="padding: 30px; text-align: center; background-color: #fafbfc; border-top: 1px solid #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border-radius: 0 0 24px 24px;">
                  <p style="color: #94a3b8; font-size: 11px; margin: 0; font-weight: 600;">&copy; ${N} CHN Technologies Digital Recruitment Engine</p>
                </td>
              </tr>
            </table>
            <!--[if mso]>
            </td>
            </tr>
            </table>
            <![endif]-->
          </div>
        </body>
        </html>
      `:""},T=a=>new Promise((r,_)=>{const N=new FileReader;N.readAsDataURL(a),N.onload=()=>{const S=N.result.split(",")[1];r(S)},N.onerror=S=>_(S)}),f=a=>F(a,a==="apply"?x:p,!0),G=async(a,r,_)=>{a.preventDefault(),k(!0);try{const N={...r};let S=null;if(_==="apply"&&(r.position==="Other / Not Listed"&&(N.position=`Other: ${r.otherPosition}`),N.fileName=w?w.name:"No file uploaded",w))try{S={data:await T(w),mimeType:w.type||"application/octet-stream",name:w.name}}catch(YA){console.error("Failed to read attachment file:",YA)}_==="inquiry"&&r.interest;const $=_==="apply"?`[Job Application] ${N.position}`:`[Careers Inquiry] ${N.interest}`,iA=F(_,N,!1),mA={recipient:H,subject:$,htmlContent:iA,secret:C,attachment:S};S?console.log("[CHN Mail] Attachment detected:",{name:S.name,mimeType:S.mimeType,dataLength:S.data?.length||0}):console.log("[CHN Mail] No attachment in this submission"),console.log("[CHN Mail] Total payload size:",JSON.stringify(mA).length,"bytes"),await fetch(m,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain"},body:JSON.stringify(mA)}),P(!0),_==="inquiry"||(v({name:"",email:"",phone:"",position:"Select Job Position",otherPosition:"",message:""}),I(null)),setTimeout(()=>P(!1),6e3)}catch(N){console.error("Transmission Error:",N),rA.error(`Transmission Error: ${N.message||"Verification Required"}`)}finally{k(!1)}},D=a=>{v(r=>({...r,position:a})),d.current?.scrollIntoView({behavior:"smooth"})};return A.jsxs("div",{className:"CR_WRAPPER",children:[A.jsx(R,{children:Z&&A.jsxs(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[600] flex items-center justify-center p-4",onClick:()=>X(!1),children:[A.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm"}),A.jsxs(t.div,{initial:{scale:.9,y:30},animate:{scale:1,y:0},exit:{scale:.9,y:30},className:"relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[30px] bg-white shadow-2xl",onClick:a=>a.stopPropagation(),children:[A.jsxs("div",{className:"sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm border-b border-slate-100 rounded-t-[30px]",children:[A.jsxs("div",{className:"flex items-center gap-4",children:[A.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"}),A.jsx("span",{className:"text-sm font-black text-slate-700 uppercase tracking-[2px]",children:"Email Preview"}),A.jsxs("div",{className:"flex gap-2",children:[A.jsx("button",{onClick:()=>b("apply"),className:`px-3 py-1 rounded-full text-xs font-black transition-all ${o==="apply"?"bg-blue-600 text-white":"bg-slate-100 text-slate-500 hover:bg-slate-200"}`,children:"Application"}),A.jsx("button",{onClick:()=>b("inquiry"),className:`px-3 py-1 rounded-full text-xs font-black transition-all ${o==="inquiry"?"bg-blue-600 text-white":"bg-slate-100 text-slate-500 hover:bg-slate-200"}`,children:"Inquiry"})]})]}),A.jsx("button",{onClick:()=>X(!1),className:"w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-red-100 hover:text-red-500 transition-all text-slate-400 font-black text-lg",children:"×"})]}),A.jsx("div",{dangerouslySetInnerHTML:{__html:f(o)}})]})]})}),A.jsx(R,{children:A.jsx(R,{children:L&&A.jsxs(t.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[400] flex flex-col items-center justify-center p-4 md:p-8",children:[A.jsx("div",{className:"absolute inset-0 z-0 bg-slate-950/20 backdrop-blur-2xl"}),A.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden pointer-events-none",children:[A.jsx(t.div,{animate:{scale:[1,1.2,1],rotate:[0,90,0],opacity:[.1,.2,.1]},transition:{duration:10,repeat:1/0,ease:"linear"},className:"absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-blue-500/20 blur-[120px] rounded-full"}),A.jsx(t.div,{animate:{scale:[1.2,1,1.2],rotate:[0,-90,0],opacity:[.1,.2,.1]},transition:{duration:15,repeat:1/0,ease:"linear"},className:"absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[100px] rounded-full"})]}),A.jsxs(t.div,{initial:{scale:.95,opacity:0,y:30},animate:{scale:1,opacity:1,y:0},exit:{scale:.95,opacity:0,y:-20},className:"relative z-10 w-full max-w-lg bg-white rounded-[40px] md:rounded-[50px] overflow-hidden shadow-[0_80px_150px_-30px_rgba(0,46,91,0.25)] flex flex-col items-center text-center p-8 md:p-16 pb-12 md:pb-20 border border-white/50",children:[A.jsx("div",{className:"absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"}),A.jsx("div",{className:"relative mb-8 md:mb-10",children:A.jsxs("div",{className:"w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-50 flex items-center justify-center relative overflow-hidden",children:[A.jsx(t.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:200,damping:20,delay:.1},className:"w-full h-full bg-blue-600 rounded-full flex items-center justify-center shadow-lg",children:A.jsx(t.svg,{viewBox:"0 0 24 24",className:"w-12 h-12 md:w-16 md:h-16 text-white",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:A.jsx(t.path,{initial:{pathLength:0},animate:{pathLength:1},transition:{duration:.6,delay:.4,ease:"easeInOut"},d:"M20 6L9 17L4 12"})})}),A.jsx(t.div,{animate:{scale:[1,1.5],opacity:[.5,0]},transition:{duration:1.5,repeat:1/0,ease:"easeOut"},className:"absolute inset-0 border-4 border-blue-400 rounded-full"})]})}),A.jsxs("div",{className:"inline-flex items-center gap-2 px-10 py-1 bg-slate-100 rounded-full mb-6 border border-slate-200",children:[A.jsx("div",{className:"w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"}),A.jsx("span",{className:"text-[10px] md:text-xs font-black uppercase text-slate-600 tracking-[0.2em]",children:"Uplink Verified"})]}),A.jsxs("h3",{className:"text-3xl md:text-5xl font-black text-[#002e5b] tracking-tighter mb-4 leading-tight",children:["Application ",A.jsx("span",{className:"text-blue-600",children:"Secure"})]}),A.jsx("p",{className:"text-slate-500 font-bold text-sm md:text-base leading-relaxed max-w-xs mx-auto mb-10",children:"Your profile is now live in our recruitment engine. Expect a strategic response shortly."}),A.jsxs("button",{onClick:()=>P(!1),className:"group relative w-full flex items-center justify-center py-5 md:py-6 bg-[#002e5b] text-white rounded-2xl md:rounded-[30px] font-black text-sm tracking-widest uppercase overflow-hidden shadow-2xl transition-all duration-500 hover:bg-blue-600 hover:scale-[1.02] active:scale-95 mb-6",children:[A.jsx("span",{className:"relative z-10",children:"Proceed to Portal"}),A.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]}),A.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1 md:h-1.5 bg-slate-50",children:A.jsx(t.div,{initial:{width:"100%"},animate:{width:"0%"},transition:{duration:6,ease:"linear"},className:"h-full bg-blue-600"})})]})]})})}),A.jsx("style",{children:`
        .CR_WRAPPER { font-family: 'Outfit', 'Inter', sans-serif; color: #1a2b4b; background: #ffffff; }
        
        /* --- INNOVATIVE HERO (OLD DESIGN RESTORED) --- */
        .CR_Hero { position: relative; background: #f1f6ff; min-height: 90vh; overflow: hidden; display: flex; align-items: center; padding: 120px 5% 60px; }
        .CR_Hero_Navy_Shape { position: absolute; top: 0; right: 0; height: 100%; width: 45%; background: linear-gradient(135deg, #1e3a8a 0%, #002e5b 100%); z-index: 0; clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%); }
        .CR_Graphic_Orb { position: absolute; width: 600px; height: 600px; background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%); filter: blur(80px); border-radius: 50%; z-index: 0; pointer-events: none; }
        .CR_Floating_Box { position: absolute; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); backdrop-filter: blur(5px); border-radius: 20px; z-index: 15; pointer-events: none; }
        .CR_Hero_Content { position: relative; z-index: 10; max-width: 1300px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center; }
        @media (max-width: 1024px) { .CR_Hero_Content { grid-template-columns: 1fr; text-align: center; } .CR_Hero_Navy_Shape { display: none; } }
        
        .CR_Hero_H1 { font-weight: 800; color: #1a1a1a; line-height: 1.1; margin-bottom: 25px; font-size:3.5rem; letter-spacing: -2px; }
        .CR_Hero_P { font-size: 1.1rem; color: #64748b; font-weight: 500; margin-bottom: 45px; line-height: 1.8; max-width: 600px; }

        .CR_Image_Stack { 
          position: relative; width: 100%; max-width: 280px; height: 350px; margin: 0 auto; 
          display: flex; align-items: center; justify-content: center;
          perspective: 2000px;
        }
        
        .CR_Fan_Box {
          width: 260px; height: 300px; position: absolute;
          border-radius: 40px; overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,46,91,0.12);
          transition: 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          border: 4px solid white;
        }
        .CR_Fan_Box img { width: 100%; height: 100%; object-fit: cover; }
        
        /* Straight Staggered Layout (Right-Sided) - Exact Design Sync */
        .CR_Fan_90 { transform: translate(60px, -30px) rotate(30deg); z-index: 10; opacity: 1; }
        .CR_Fan_60 { transform: translate(30px, -30px) rotate(15deg); z-index: 15; opacity: 1; }
        .CR_Fan_30 { transform: translate(0, 0) scale(1.1); z-index: 20; }

        @media (max-width: 640px) {
          .CR_Image_Stack { transform: scale(0.85); height: 320px; }
          .CR_Fan_90 { transform: translate(30px, -15px) rotate(20deg); }
          .CR_Fan_60 { transform: translate(15px, -15px) rotate(10deg); }
        }

        .CR_Stats_Card {
          position: absolute; right: -80px; bottom: 40px;
          background: white; border-radius: 24px; padding: 25px;
          box-shadow: 0 40px 100px rgba(0,46,91,0.12);
          z-index: 30; width: 220px;
          border: 1px solid rgba(0,46,91,0.04);
        }
        .CR_Stat_Row { margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
        .CR_Stat_Row:last-child { margin-bottom: 0; border-bottom: none; padding-bottom: 0; }
        .CR_Stat_Value { display: flex; align-items: baseline; gap: 5px; }
        .CR_Stat_Num { font-size: 1.4rem; font-weight: 950; color: #0f172a; line-height: 1; }
        .CR_Stat_Label { font-size: 0.65rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
        .CR_Stat_Sub { font-size: 0.6rem; font-weight: 700; color: #94a3b8; display: block; margin-top: 2px; }

        .CR_Value_Item { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
        .CR_Value_Icon { width: 40px; height: 40px; background: rgba(59,130,246,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #60a5fa; }
        .CR_Value_Text { font-weight: 800; color: white; font-size: 1.1rem; letter-spacing: -0.5px; }
        

        .CR_Begin_Section { 
          padding: 80px 5%; background: white; position: relative; 
        }
        .CR_Begin_Grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 60px; max-width: 1400px; margin: 0 auto; position: relative; z-index: 10; }
        @media (max-width: 1024px) { .CR_Begin_Grid { grid-template-columns: 1fr; gap: 80px; } }
        
        .CR_Job_Item { 
          background: #ffffff; padding: 25px 0; border-bottom: 2px solid #f8fafc;
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
          transition: 0.3s; cursor: pointer;
        }
        .CR_Job_Item:hover { padding-left: 15px; border-color: #3b82f6; }
        .CR_Job_Item:hover h4 { color: #3b82f6; }
        
        .CR_Hiring_Tag { color: #3b82f6; font-size: 0.65rem; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; display: block; opacity: 0.6; }

        .CR_Sidebar_Wrap { position: relative; padding-top: 40px; }
        .CR_Side_Img_Box { width: 100%; height: 350px; border-radius: 40px; overflow: hidden; margin-bottom: 40px; box-shadow: 0 40px 100px rgba(0,0,0,0.08); }
        .CR_Side_Img_Box img { width: 100%; height: 100%; object-fit: cover; }
        
        .CR_Side_Form_Card { 
          background: #ffffff; border-radius: 35px; border: 1px solid #f1f5f9; padding: 40px; 
          box-shadow: 0 20px 60px rgba(0,46,91,0.04);
        }
        .CR_Side_H { font-size: 1.8rem; font-weight: 950; margin-bottom: 15px; color: #0f172a; }
        .CR_Side_P { color: #64748b; font-weight: 500; font-size: 0.95rem; line-height: 1.6; margin-bottom: 30px; }

        .CR_Apply_Split_Grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; max-width: 1400px; margin: 0 auto; align-items: stretch; }
        @media (max-width: 1024px) { .CR_Apply_Split_Grid { grid-template-columns: 1fr; } }
        
        .CR_Apply_Photo { border-radius: 40px; overflow: hidden; height: 100%; min-height: 500px; }
        .CR_Apply_Photo img { width: 100%; height: 100%; object-fit: cover; }
        
        .CR_Upload_Area { 
          border: 2px dashed #e2e8f0; border-radius: 24px; padding: 25px; text-align: center; 
          background: #f8fafc; transition: 0.3s; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 15px;
        }
        .CR_Upload_Area:hover { border-color: #3b82f6; background: #eff6ff; }
        
        .CR_Icon_Box { width: 44px; height: 44px; background: #3b82f6; color: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; shrink-0; }
        .CR_Side_Input { 
          width: 100%; background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 16px; 
          padding: 18px 20px; margin-bottom: 15px; font-size: 1rem; outline: none; transition: 0.3s;
        }
        .CR_Side_Input:focus { border-color: #3b82f6; background: white; box-shadow: 0 10px 20px rgba(59,130,246,0.05); }
        .CR_Side_Btn { width: 100%; background: #3b82f6; color: white; padding: 18px; border-radius: 100px; font-weight: 800; border: none; cursor: pointer; transition: 0.3s; box-shadow: 0 10px 30px rgba(59,130,246,0.2); }
        .CR_Side_Btn:hover { background: #1e3a8a; transform: translateY(-3px); }

        .CR_Apply_Section { padding: 50px 5%; background: #fafbfc; }
        .CR_Apply_Grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 80px; max-width: 1300px; margin: 0 auto; align-items: center; }
        @media (max-width: 1024px) { .CR_Apply_Grid { grid-template-columns: 1fr; } }
        
        .CR_Apply_Img { border-radius: 40px; overflow: hidden; box-shadow: 0 40px 100px rgba(0,0,0,0.1); height: 550px; border: 10px solid white; }
        .CR_Apply_Img img { width: 100%; height: 100%; object-fit: cover; transition: 1s; }
        .CR_Apply_Img:hover img { transform: scale(1.05); }
        
        .CR_Form_Grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .CR_Form_Input { 
          width: 100%; background: white; border: 1px solid #e2e8f0; border-radius: 20px; 
          padding: 20px 25px; font-size: 1rem; outline: none; transition: 0.3s; font-weight: 500;
        }
        .CR_Apply_Submit { background: #3b82f6; color: white; padding: 16px 36px; border-radius: 100px; font-weight: 800; font-size: 1.1rem; border: none; cursor: pointer; margin-top: 30px; box-shadow: 0 20px 40px rgba(59,130,246,0.25); transition: 0.4s; }
        .CR_Apply_Submit:hover { background: #1e3a8a; transform: translateY(-5px); box-shadow: 0 30px 60px rgba(59,130,246,0.35); }

        .CR_Roadmap { padding: 120px 5%; background: #002e5b; color: white; position: relative; overflow: hidden; }
        .CR_Roadmap::after { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%); pointer-events: none; }
        
        .CR_Step_Grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; max-width: 1400px; margin: 80px auto 0; perspective: 2000px; }
        @media (max-width: 1200px) { .CR_Step_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .CR_Step_Grid { grid-template-columns: 1fr; } }
        
        .CR_Step_Box { 
          padding: 35px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 35px; 
          backdrop-filter: blur(15px); display: flex; flex-direction: column; height: 100%; transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1); 
          position: relative; overflow: hidden;
        }
        .CR_Step_Box::before { 
          content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(59,130,246,0.1) 0%, transparent 100%); 
          opacity: 0; transition: 0.5s; z-index: 0;
        }
        .CR_Step_Box:hover { border-color: #3b82f6; box-shadow: 0 30px 60px rgba(0,0,0,0.3), 0 0 20px rgba(59,130,246,0.2); }
        .CR_Step_Box:hover::before { opacity: 1; }
        
        .CR_Step_Num { 
          font-size: 2.8rem; font-weight: 900; color: #3b82f6; margin-bottom: 25px; position: relative; z-index: 10;
          text-shadow: 0 0 15px rgba(59,130,246,0.5); animation: CR_Neon_Pulse 3s infinite;
        }
        
        @keyframes CR_Neon_Pulse {
          0%, 100% { opacity: 0.7; text-shadow: 0 0 10px rgba(59,130,246,0.4); }
          50% { opacity: 1; text-shadow: 0 0 25px rgba(59,130,246,0.8); scale: 1.05; }
        }

        .CR_Step_H4 { font-size: 1.6rem; font-weight: 700; color: white; margin-bottom: 18px; position: relative; z-index: 10; }
        .CR_Step_P { font-size: 1rem; color: rgba(191, 219, 254, 0.7); font-weight: 500; line-height: 1.6; position: relative; z-index: 10; }
        
        .CR_Final { padding: 120px 5%; text-align: center; background: white; }
        .CR_Btn { background: #3b82f6; color: white; padding: 16px 36px; border-radius: 100px; font-weight: 800; font-size: 1.1rem; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 15px; box-shadow: 0 20px 50px rgba(59,130,246,0.25); transition: 0.4s; }
        .CR_Float_Badge {
          position: absolute; right: -50px; top: 120px; background: white; padding: 25px; border-radius: 30px;
          box-shadow: 0 40px 100px rgba(0,96,255,0.15); border: 1px solid rgba(59,130,246,0.1); z-index: 20;
          display: flex; flex-direction: column; align-items: center; gap: 10px; width: 180px;
        }
        @media (max-width: 1280px) { .CR_Float_Badge { display: none; } }
        
        .CR_Counter_Num { font-size: 2.2rem; font-weight: 900; color: #3b82f6; line-height: 1; }
        .CR_Counter_Label { font-size: 0.7rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; }

        .CR_Side_H { font-size: 1.8rem; font-weight: 900; margin-bottom: 20px; }
      `}),A.jsxs("section",{className:"CR_Hero",children:[A.jsx("div",{className:"CR_Hero_Navy_Shape"}),A.jsx(t.div,{animate:{x:[0,50,0],y:[0,30,0]},transition:{duration:15,repeat:1/0,ease:"linear"},className:"CR_Graphic_Orb top-[-10%] right-[-10%]"}),A.jsxs("div",{className:"CR_Hero_Content",children:[A.jsxs(t.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.8},children:[A.jsxs("h1",{className:"CR_Hero_H1",children:["Advance Your ",A.jsx("br",{})," ",A.jsx("span",{className:"text-blue-600",children:"Career Here"})]}),A.jsx("p",{className:"CR_Hero_P",children:"Join a leading tech-consulting force where your expertise meets strategic enterprise transformation."}),A.jsxs(t.button,{whileHover:{scale:1.05,x:10},whileTap:{scale:.95},className:"CR_Btn",onClick:()=>h.current?.scrollIntoView({behavior:"smooth"}),children:["Explore Vacancies ",A.jsx(Q,{size:24,className:"ml-2"})]})]}),A.jsx(t.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:1.2,ease:"easeOut"},className:"relative flex justify-center lg:justify-end",children:A.jsxs("div",{className:"CR_Image_Stack",children:[A.jsx("div",{className:"absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full"}),A.jsx("div",{className:"CR_Fan_Box CR_Fan_90",children:A.jsx("img",{src:Mi,alt:"CHN Excellence"})}),A.jsx("div",{className:"CR_Fan_Box CR_Fan_60",children:A.jsx("img",{src:Li,alt:"CHN Environment"})}),A.jsx("div",{className:"CR_Fan_Box CR_Fan_30",children:A.jsx("img",{src:Ri,alt:"Career Excellence"})}),A.jsx(t.div,{animate:{scale:[1,1.2,1]},transition:{duration:4,repeat:1/0},className:"absolute -top-10 right-0 w-16 h-16 bg-blue-600/20 rounded-full blur-xl z-0"}),A.jsx(t.div,{animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"},className:"absolute -bottom-10 -left-10 w-32 h-32 border border-blue-500/10 rounded-full z-0"})]})})]})]}),A.jsxs("section",{className:"CR_Begin_Section",id:"begin-career",ref:h,children:[A.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 max-w-[1400px] mx-auto border-b border-slate-100 pb-12",children:[A.jsxs("div",{children:[A.jsx("span",{className:"text-blue-500 font-extrabold tracking-[4px] uppercase mb-4 block",children:"Hiring Positions Available"}),A.jsxs("h1",{className:"text-5xl font-black tracking-tighter leading-tight",children:["Begin Your ",A.jsx("span",{className:"text-blue-600",children:"Career Here"})]})]}),A.jsx("div",{className:"max-w-md border-l-4 border-blue-600 pl-8",children:A.jsx("p",{className:"text-slate-500 font-medium leading-relaxed",children:"Join a domain-specific workforce dedicated to enterprise-scale technology transformation and long-term operational success."})})]}),A.jsxs("div",{className:"CR_Begin_Grid",children:[A.jsx("div",{className:"CR_Job_List",children:B.map((a,r)=>A.jsxs(t.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:r*.05},className:"CR_Job_Item group",onClick:()=>D(a.title),children:[A.jsxs("div",{className:"flex-1",children:[A.jsx("h4",{className:"text-2xl font-black tracking-tight mb-2 transition-colors",children:a.title}),A.jsxs("p",{className:"text-slate-400 font-bold text-sm tracking-wide",children:[a.dept," — ",a.exp," — Full Time"]})]}),A.jsx("div",{className:"text-slate-300 group-hover:text-blue-600 transition-all",children:A.jsx(Q,{size:38,strokeWidth:1})})]},a.id))}),A.jsxs("div",{className:"CR_Sidebar_Wrap",children:[A.jsx("div",{className:"CR_Side_Img_Box",children:A.jsx("img",{src:Fi,alt:"CHN Office Interior"})}),A.jsxs("div",{className:"CR_Side_Form_Card",children:[A.jsx("h4",{className:"text-sm font-black uppercase tracking-[3px] text-slate-400 mb-8 pb-4 border-b border-slate-100",children:"Get In Touch With Us"}),A.jsxs("div",{className:"space-y-6",children:[A.jsxs("div",{className:"flex items-start gap-4",children:[A.jsx("div",{className:"CR_Icon_Box",children:A.jsx(oA,{size:22})}),A.jsxs("div",{children:[A.jsx("h5",{className:"font-extrabold text-slate-900 leading-tight",children:"Our Location"}),A.jsx("p",{className:"text-sm text-slate-400 font-medium leading-relaxed",children:"No. 28, CIT Nagar, Chennai, TN - 600035"})]})]}),A.jsxs("div",{className:"flex items-start gap-4",children:[A.jsx("div",{className:"CR_Icon_Box",children:A.jsx(K,{size:22})}),A.jsxs("div",{children:[A.jsx("h5",{className:"font-extrabold text-slate-900 leading-tight",children:"Email"}),A.jsx("p",{className:"text-sm text-slate-400 font-medium leading-relaxed",children:"hrd@chnindia.com"})]})]}),A.jsxs("div",{className:"flex items-start gap-4",children:[A.jsx("div",{className:"CR_Icon_Box",children:A.jsx(wA,{size:22})}),A.jsxs("div",{children:[A.jsx("h5",{className:"font-extrabold text-slate-900 leading-tight",children:"Phone Number"}),A.jsx("p",{className:"text-sm text-slate-400 font-medium leading-relaxed",children:"+91-7010203031"})]})]})]})]})]})]})]}),A.jsx("section",{className:"bg-white  md:px-12 px-6 py-6 md:px-3  ",ref:d,children:A.jsxs("div",{className:"CR_Apply_Split_Grid",children:[A.jsx(t.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"CR_Apply_Photo",children:A.jsx("img",{src:Gi,alt:"CHN Team Collaboration"})}),A.jsxs("div",{className:"flex flex-col justify-center p-6  md:p-10",children:[A.jsxs("h2",{className:"text-5xl font-black mb-6 tracking-tighter leading-tight",children:["Our Team Will Respond ",A.jsx("br",{})," To You Within ",A.jsx("span",{className:"text-blue-600",children:"24 Hrs"})]}),A.jsxs("form",{onSubmit:a=>G(a,x,"apply"),className:"mt-10 space-y-6",children:[A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[A.jsx("input",{type:"text",placeholder:"Your Name*",required:!0,className:"CR_Form_Input",value:x.name,onChange:a=>v(r=>({...r,name:a.target.value}))}),A.jsx("input",{type:"email",placeholder:"Your Email*",required:!0,className:"CR_Form_Input",value:x.email,onChange:a=>v(r=>({...r,email:a.target.value}))}),A.jsx("input",{type:"text",placeholder:"Mobile Number*",required:!0,className:"CR_Form_Input",value:x.phone,onChange:a=>v(r=>({...r,phone:a.target.value}))}),A.jsxs("select",{className:"CR_Form_Input bg-white",value:x.position,onChange:a=>v(r=>({...r,position:a.target.value})),children:[A.jsx("option",{disabled:!0,children:"Select Job Position"}),B.map(a=>A.jsx("option",{children:a.title},a.id))]})]}),A.jsx("textarea",{placeholder:"Additional Message",rows:4,className:"CR_Form_Input w-full",value:x.message,onChange:a=>v(r=>({...r,message:a.target.value}))}),A.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-6",children:[A.jsxs("div",{className:`CR_Upload_Area flex-1 w-full relative transition-all ${w?"border-emerald-500 bg-emerald-50/50":""}`,children:[A.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png,.doc,.docx",onChange:g,className:"absolute inset-0 opacity-0 cursor-pointer"}),w?A.jsxs("div",{className:"flex items-center gap-4 w-full text-emerald-800",children:[A.jsx(BA,{className:"text-emerald-600 shrink-0",size:24}),A.jsxs("div",{className:"text-left flex-1 min-w-0",children:[A.jsx("p",{className:"text-xs uppercase font-black tracking-wider text-emerald-600",children:"Resume Loaded"}),A.jsx("p",{className:"text-sm font-bold truncate",children:w.name})]}),A.jsx("button",{type:"button",onClick:a=>{a.stopPropagation(),a.preventDefault(),I(null)},className:"text-xs font-black text-rose-500 hover:text-rose-700 hover:underline relative z-10",children:"Remove"})]}):A.jsxs("div",{className:"flex items-center gap-4 w-full",children:[A.jsx("span",{className:"bg-blue-600 text-white px-5 py-2 rounded-xl text-xs font-black shadow-lg shadow-blue-200",children:"Browse Files"}),A.jsx("span",{className:"text-slate-400 font-bold text-sm",children:"Drag & Drop Files Here"}),A.jsx(Q,{size:20,className:"text-slate-300 ml-auto"})]})]}),A.jsx("button",{type:"submit",disabled:z,className:"CR_Btn w-full md:w-auto min-w-[180px] justify-center",children:z?"Processing...":"Submit"})]}),A.jsx("p",{className:"text-[10px] uppercase font-black tracking-[3px] text-blue-600 mt-2",children:"Upload your Resume in pdf, jpg, png or doc format"})]})]})]})}),A.jsxs("section",{className:"CR_Roadmap",children:[A.jsxs("div",{className:"text-center mb-20 relative z-10 px-4",children:[A.jsx("span",{className:"text-blue-400 font-black tracking-[0.4em] uppercase mb-4 block",children:"Strategic Onboarding"}),A.jsx("h2",{className:"text-5xl font-black text-white tracking-tighter leading-tight",children:"Our Recruitment Roadmap"})]}),A.jsx("div",{className:"CR_Step_Grid",children:[{n:"01",h:"Strategic Application",p:"Identify a role that aligns with your domain expertise and submit your contextual profile through our internal hub."},{n:"02",h:"Technical Alignment",p:"Engage in technical discussions with our sector leads to evaluate practical competency and problem-solving skills."},{n:"03",h:"Culture & Values",p:"A deep-dive into our professional ecosystem to ensure alignment with CHN's core values and strategic mission."},{n:"04",h:"Structured Onboarding",p:"Formal integration into our workforce with a structured 90-day roadmap tailored for your technical growth."}].map((a,r)=>A.jsxs(t.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},whileHover:{rotateX:6,rotateY:-6,y:-10,transition:{duration:.4}},transition:{delay:r*.1},viewport:{once:!0},className:"CR_Step_Box",children:[A.jsx("div",{className:"CR_Step_Num",children:a.n}),A.jsxs("div",{children:[A.jsx("h4",{className:"CR_Step_H4",children:a.h}),A.jsx("p",{className:"CR_Step_P",children:a.p})]}),A.jsx(t.div,{className:"absolute inset-0 z-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-[-20deg]",animate:{x:["-100%","200%"]},transition:{duration:4,repeat:1/0,delay:r*1}})]},r))})]}),A.jsx("section",{className:"CR_Final",children:A.jsxs(t.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"max-w-4xl mx-auto",children:[A.jsxs("h2",{className:"NET_Hero_H1 text-6xl font-black mb-10 tracking-tighter leading-tight",children:["Start Your Career ",A.jsx("br",{})," ",A.jsx("span",{className:"text-blue-500",children:"with Purpose."})]}),A.jsx("p",{className:"text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed",children:"Click below to explore current strategic openings and begin your application process today."}),A.jsxs("button",{className:"CR_Btn",onClick:()=>d.current?.scrollIntoView({behavior:"smooth"}),children:["Apply Now ",A.jsx(de,{size:26})]})]})})]})},Ui=()=>{const e=[{title:"Integrity",desc:"Acting with complete transparency, ensuring clients' interests are always protected through structured accountability.",icon:A.jsx(M,{size:28})},{title:"Innovation",desc:"Embracing change and thinking ahead to deliver future-ready solutions that solve complex business challenges.",icon:A.jsx(JA,{size:28})},{title:"Client-Centricity",desc:"Your goals are our mission. We build every solution with your unique business constraints and objectives in mind.",icon:A.jsx(fA,{size:28})},{title:"Accountability",desc:"Owning our outcomes and promises, delivering consistency that builds long-term institutional trust.",icon:A.jsx(sA,{size:28})},{title:"Collaboration",desc:"Working as a unified force with clients and partners to ensure shared success and operational harmony.",icon:A.jsx(Ye,{size:28})},{title:"People-First",desc:"Prioritising workforce empowerment and human-centric design in every technology-driven solution we deploy.",icon:A.jsx(AA,{size:28})}];return A.jsxs("div",{className:"WT_WRAPPER",children:[A.jsx("style",{children:`
        .WT_WRAPPER {
          font-family: 'Figtree', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .WT_Hero {
          position: relative;
          height: 75vh;
          min-height: 550px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #002e5b;
          padding: 100px 5% 60px;
        }

        .WT_Hero_Bg {
          position: absolute;
          inset: 0;
          background-image: url('${qA}');
          background-size: cover;
          background-position: center;
          opacity: 0.3;
          transform: scale(1.1);
        }

        .WT_Hero_Overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,46,91,0.9) 0%, rgba(0,46,91,0.7) 100%);
        }

        .WT_Hero_Content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
        }

        .WT_Badge {
          display: inline-block;
          color: #3b82f6;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 0.85rem;
          margin-bottom: 25px;
        }

        .WT_Hero_H1 {
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 30px;
          font-size: clamp(2.5rem, 6vw, 5rem);
        }

        .WT_Hero_P {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: rgba(255,255,255,0.8);
          line-height: 1.8;
          font-weight: 500;
        }

        /* --- SECTION 2: CONTEXT --- */
        .WT_Context {
          padding: 100px 5%;
          background: #22314f;
          color: #fff;
          text-align: center;
        }

        .WT_Context_H1 {
          margin-bottom: 30px;
          color: #fff;
        }

        .WT_Context_P {
          max-width: 950px;
          margin: 0 auto;
          color: rgba(255,255,255,0.7);
          font-size: 1.2rem;
          line-height: 1.8;
          font-weight: 400;
        }

        /* --- SECTION 3: VALUES GRID --- */
        .WT_Values {
          padding: 100px 5%;
          background: #f8fafc;
          text-align: center;
        }

        .WT_Values_Grid {
          display: grid;
          grid-template_columns: 1fr;
          gap: 30px;
          margin-top: 80px;
          max-width: 1300px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 768px) { .WT_Values_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .WT_Values_Grid { grid-template-columns: repeat(3, 1fr); } }

        .WT_Value_Card {
          background: white;
          padding: 60px 40px;
          border-radius: 40px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e2e8f0;
          z-index: 1;
        }

        .WT_Value_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #1e3a8a 0%, #22314f 100%);
          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .WT_Value_Card:hover::before { height: 100%; }
        .WT_Value_Card:hover h3, 
        .WT_Value_Card:hover p,
        .WT_Value_Card:hover .WT_Icon { color: #ffffff !important; }

        .WT_Icon {
          width: 70px;
          height: 70px;
          background: #eff6ff;
          color: #3b82f6;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          transition: 0.3s;
        }

        .WT_Value_Card:hover .WT_Icon { background: rgba(255,255,255,0.1); }
        .WT_Value_Card h3 { font-size: 1.6rem; font-weight: 800; margin-bottom: 15px; color: #1a2b4b; transition: 0.3s; letter-spacing: 0.5px; }
        .WT_Value_Card p { color: #64748b; line-height: 1.7; font-size: 1.05rem; transition: 0.3s; }

        /* --- SECTION 4: STRATEGIC FRAMEWORK --- */
        .WT_Framework {
          padding: 100px 5%;
          display: flex;
          align-items: center;
          gap: 60px;
          background: #ffffff;
        }

        .WT_Framework_Content { flex: 1; }
        .WT_Framework_Img { flex: 1; position: relative; }
        .WT_Framework_Img img { 
          width: 100%; border-radius: 50px; 
          box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
          border: 15px solid #fff;
        }

        @media (max-width: 1024px) {
          .WT_Framework { flex-direction: column; text-align: center; gap: 40px; }
          .WT_Framework_Img { order: -1; width: 100%; max-width: 600px; margin: 0 auto; }
          .WT_Block_Title { justify-content: center; }
          .WT_Block_P { margin-left: 0; }
          .WT_Framework_Content button { margin: 0 auto; }
        }

        .WT_Block { margin-bottom: 60px; }
        .WT_Block_Title { font-size: 2rem; font-weight: 900; color: #1a2b4b; margin-bottom: 20px; display: flex; align-items: center; gap: 15px; }
        .WT_Block_Circle { width: 45px; height: 45px; background: #3b82f6; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; min-width: 45px; }
        .WT_Block_P { color: #64748b; font-size: 1.1rem; line-height: 1.8; margin-left: 60px; }

        @media (max-width: 1024px) {
           .WT_Hero { height: auto; min-height: 400px; }
        }
      `}),A.jsxs("section",{className:"WT_Hero",children:[A.jsx(t.div,{initial:{scale:1.1,opacity:0},animate:{scale:1,opacity:.3},transition:{duration:1.5},className:"WT_Hero_Bg"}),A.jsx("div",{className:"WT_Hero_Overlay"}),A.jsxs("div",{className:"WT_Hero_Content",children:[A.jsx(t.span,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"WT_Badge",children:"Our Philosophy"}),A.jsxs(t.h2,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"WT_Hero_H1 NET_Hero_H1",children:["Empowering enterprises with ",A.jsx("span",{className:"text-blue-500",children:"smart tech"})]}),A.jsx(t.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"WT_Hero_P",children:"A consistent, accountability-driven approach to solving complex business challenges through structured technology and strategy."})]})]}),A.jsx("section",{className:"WT_Context",children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 WT_Context_H1",children:"Simplifying operations, driving measurable growth"}),A.jsx("p",{className:"WT_Context_P",children:"At CHN Technologies, we believe that clear thinking leads to better results. We combine innovation, strategy, and execution to bridge the gap between technical potential and real-world business success. We focus on long-term stability and people-first solutions."})]})}),A.jsxs("section",{className:"WT_Values",children:[A.jsx("span",{className:"WT_Badge",style:{marginBottom:"15px"},children:"Foundational Pillars"}),A.jsx("h2",{className:"NET_Hero_H1",style:{color:"#1a2b4b",margin:0},children:"Values that drive us"}),A.jsx("div",{className:"WT_Values_Grid",children:e.map((i,s)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:s*.1},viewport:{once:!0},className:"WT_Value_Card",children:[A.jsx("div",{className:"WT_Icon",children:i.icon}),A.jsx("h3",{children:i.title}),A.jsx("p",{children:i.desc})]},s))})]}),A.jsxs("section",{className:"WT_Framework",children:[A.jsx("div",{className:"WT_Framework_Img",children:A.jsx("img",{src:UA,alt:"Strategic Collaboration"})}),A.jsxs("div",{className:"WT_Framework_Content",children:[A.jsx("span",{className:"WT_Badge",children:"OUR VISION & MISSION"}),A.jsxs("h2",{className:"NET_Hero_H1",style:{color:"#1a2b4b"},children:["Strategic long-term ",A.jsx("br",{})," objectives"]}),A.jsxs("div",{className:"WT_Block",children:[A.jsxs("h3",{className:"WT_Block_Title",children:[A.jsx("div",{className:"WT_Block_Circle",children:A.jsx(fA,{size:22})}),"Our mission"]}),A.jsx("p",{className:"WT_Block_P",children:"To simplify operations, enrich workforce capabilities, and drive organisational growth by offering tailored consulting and tech solutions that deliver real-world impact and measurable financial clarity."})]}),A.jsxs("div",{className:"WT_Block",children:[A.jsxs("h3",{className:"WT_Block_Title",children:[A.jsx("div",{className:"WT_Block_Circle",children:A.jsx(JA,{size:22})}),"Our vision"]}),A.jsx("p",{className:"WT_Block_P",children:"To become a leading force in empowering businesses through people-first consulting and technology-driven solutions that allow organisations to focus on expansion rather than technical friction."})]}),A.jsx(c,{to:"/contact",children:A.jsxs("button",{className:"bg-[#3b82f6] text-white px-10 py-5 rounded-full font-bold shadow-xl hover:bg-[#1a2b4b] transition-all flex items-center gap-3",children:["Explore our services ",A.jsx(Q,{size:20})]})})]})]})]})},aA={hidden:{opacity:0,y:30},visible:e=>({opacity:1,y:0,transition:{delay:e*.1,duration:.5,ease:"easeOut"}})},Yi=({title:e,subtitle:i,description:s,features:n})=>A.jsxs("div",{children:[A.jsxs("section",{className:"relative pt-[160px] pb-24 overflow-hidden",style:{background:"var(--gradient-hero)"},children:[A.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",backgroundSize:"30px 30px"}}),A.jsxs("div",{className:"container mx-auto px-4 relative z-10 text-center",children:[A.jsx(t.div,{initial:"hidden",animate:"visible",variants:aA,custom:0,className:"inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs font-semibold tracking-widest text-white/80 mb-4 border border-white/20",children:i}),A.jsx(t.h2,{initial:"hidden",animate:"visible",variants:aA,custom:1,className:"text-4xl md:text-5xl lg:text-6xl font-bold text-white NET_Hero_H1",children:e}),A.jsxs(t.div,{initial:"hidden",animate:"visible",variants:aA,custom:2,className:"mt-4 flex items-center justify-center gap-2 text-sm text-white/60",children:[A.jsx(c,{to:"/",className:"hover:text-white transition-colors",children:"Home"}),A.jsx("span",{children:"/"}),A.jsx("span",{className:"text-white",children:e})]})]})]}),A.jsx("section",{className:"py-20 md:py-28 bg-background",children:A.jsxs("div",{className:"container mx-auto px-4 max-w-4xl",children:[A.jsx(t.p,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:aA,custom:0,className:"text-lg text-muted-foreground leading-relaxed mb-12",children:s}),A.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:n.map((d,h)=>A.jsxs(t.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:aA,custom:h%4,className:"flex items-start gap-3 p-5 bg-card rounded-sm border border-border hover:border-primary/30 hover:shadow-sm transition-all",children:[A.jsx(j,{className:"w-5 h-5 text-primary mt-0.5 flex-shrink-0"}),A.jsx("span",{className:"text-sm text-foreground",children:d})]},h))}),A.jsx(t.div,{initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:aA,custom:0,className:"mt-14 text-center",children:A.jsxs(c,{to:"/contact",className:"inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-all group",children:["Discuss Your Requirements ",A.jsx(Q,{className:"w-4 h-4 transition-transform group-hover:translate-x-1"})]})})]})})]}),Ji={"software-development":{title:"Software development",subtitle:"Technology | CHN India",description:"Custom software development solutions tailored to enterprise needs, with full lifecycle support including requirement analysis, design, development, QA and deployment.",features:["Agile development delivery","Cloud-native microservices architecture","End-to-end security and compliance","Scalable APIs and integration","Ongoing maintenance and DevOps support"],content:"We build robust, scalable applications from backend to frontend, with deep focus on performance, usability, and maintainability."},"application-development":{title:"Application development",subtitle:"Technology | CHN India",description:"Modern application development that accelerates business operations with extensible solutions, API-first design, and seamless user experiences.",features:["Full-stack development","Mobile application platforms","API and third-party integration","CI/CD pipelines","Quality assurance and testing"],content:"Our team delivers project-based and support-based application services, ensuring a strong product-market fit and high-impact outcomes."},"data-analytics":{title:"Data analytics",subtitle:"Digital Solutions | CHN India",description:"Data analytics and business intelligence services that provide actionable insight from enterprise data through dashboards, ML models, and reporting.",features:["Data pipeline development","Dashboard & visualization","Predictive analytics","Data governance and quality","Advanced machine learning"],content:"Turn raw data into strategic decision-making assets through end-to-end analytics services and data engineering best practices."},technology:{title:"Technology",subtitle:"What We Do",description:"Comprehensive technology services that include software development, application development, data analytics, cloud solutions, and enterprise IT architecture.",features:["Enterprise-grade software solutions","Scalable cloud architecture","Data intelligence and analytics","Agile delivery model","24/7 operational support"],content:"CHN India delivers full-stack technology transformation programs that help companies increase agility while reducing cost and risk."},"what-we-think":{title:"What we think",subtitle:"Strategic insights for future-ready enterprise transformation",description:"CHN India’s thought leadership for Technology, Consulting, and Resource Services—framing the next wave of innovation with practical, scalable, and security-first thinking.",features:["Future-ready IT infrastructure strategy","Business-driven software and digital innovation","Resilient cybersecurity and risk management","Operational excellence through consulting leadership","Talent enablement and sustainable workforce planning"],content:"Explore CHN’s perspective on delivering value through strategic IT, consulting, and resources. Our approach centers on innovation, trusted governance, and measurable business outcomes."},"it-support":{title:"IT support",subtitle:"What We Do",description:"End-to-end IT support service delivery with hardware support, network management, and system maintenance ensuring high availability and productivity.",features:["Proactive hardware support","Network monitoring and optimisation","System uptime and patch management","Helpdesk and remote support","Disaster recovery planning"],content:"Our IT Support practice serves enterprises with a combination of on-site engineers and remote operations centers for rapid issue resolution."},biometric:{title:"Biometric solutions",subtitle:"What We Do",description:"Advanced biometric security systems and access control solutions for safe and user-friendly authentication across enterprises.",features:["Fingerprint and face recognition","Access management integration","Scalable and secure deployments","Compliance-ready data handling","Real-time reporting and surveillance"],content:"From physical security to identity assurance, CHN India's biometric solutions deliver modern security with minimal friction."},"network-management":{title:"Network management services",subtitle:"IT Infrastructure | CHN India",description:"CHN Technologies provides structured network management services that ensure stable connectivity, controlled access, and continuous performance across business environments. Our approach focuses on visibility, security, and proactive management rather than reactive fixes.",features:["Network architecture design and planning","LAN/WAN setup and configuration","Network monitoring and troubleshooting","Performance optimisation and capacity planning","Firewall and security configuration","24/7 network support and maintenance"],content:"Reliable, secure, and high-performance networks built for uninterrupted business operations."}},Ki=()=>{const{slug:e}=bt(),i=e?Ji[e]:void 0;return i?A.jsxs("div",{className:"container mx-auto px-4 py-24",children:[A.jsx("h2",{className:"text-4xl font-bold mb-4 NET_Hero_H1",children:i.title}),A.jsx("p",{className:"text-slate-700 mb-6",children:i.description}),A.jsx("p",{className:"text-sm text-slate-500",children:"This is a simplified page view; previous advanced template logic has been removed."}),A.jsx("div",{className:"mt-8",children:A.jsx(c,{to:"/",className:"text-blue-600 hover:text-blue-800",children:"Back to home"})})]}):A.jsxs("div",{className:"container mx-auto px-4 py-24 text-center",children:[A.jsx("h2",{className:"text-3xl font-bold NET_Hero_H1",children:"Page Not Found"}),A.jsx("p",{className:"mt-4 text-slate-600",children:"The requested section does not exist. Please choose a valid service."}),A.jsx(c,{to:"/",className:"mt-8 inline-block text-blue-600 hover:text-blue-800",children:"Return to homepage"})]})},Vi="/assets/network_management_hero-B3W_x5rT.png",Be="/assets/network_dashboard-CtP458h_.png",Zi=()=>A.jsxs("div",{className:"NET_WRAPPER",children:[A.jsx("style",{children:`
        .NET_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;


          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .NET_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%);
          min-height: 85vh;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .NET_Hero { padding-top: 140px; }
        }

        .NET_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
          position: relative;
          z-index: 10;
        }
        @media (max-width: 1024px) {
          .NET_Hero_Inner { flex-direction: column; text-align: center; }
          .NET_Hero_Content { max-width: 100%; order: 1; }
          .NET_Hero_Img { order: -1; width: 100%; margin-bottom: 40px; }
          .NET_Hero_Img img { max-width: 320px; border-width: 10px; }
        }

        .NET_Hero_Content { flex: 1.2; max-width: 700px; }
        .NET_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: inline-block;
          background: rgba(59, 130, 246, 0.06); padding: 6px 16px; border-radius: 100px;
        }
        .NET_Hero_H1 { 
          margin-bottom: 15px; 
        }
        .NET_Tagline { font-size: 1.2rem; color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .NET_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .NET_Btn_Group { display: flex; gap: 20px; }
        .NET_Primary_Btn { 
          background: #3b82f6; color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 600; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
        }
        .NET_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .NET_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .NET_Hero_Img img { 
          width: 100%; 
          max-width: 500px; 
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 500px; 
          border: 15px solid #fff; 
          box-shadow: 0 40px 100px rgba(59,130,246,0.1); 
        }

        /* --- SECTION 2: CAPABILITIES --- */
        .NET_Cap_Section { 
          padding: 50px 5%; 
          background: #f8fafc; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .NET_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .NET_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 20px; 
          margin-top: 60px; 
          width: 100%;
        }

        .NET_Cap_Card {
          background: white;
          padding: 30px 20px;
          border-radius: 20px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e2e8f0;
          z-index: 1;
        }

        .NET_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);
          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .NET_Cap_Card:hover::before { height: 100%; }

        .NET_Cap_Card:hover h3, 
        .NET_Cap_Card:hover p,
        .NET_Cap_Card:hover .NET_Cap_Icon { color: #ffffff !important; }
        
        .NET_Cap_Icon { width: 50px; height: 50px; background: #eff6ff; color: #3b82f6; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; transition: 0.3s; }
        .NET_Cap_Card:hover .NET_Cap_Icon { background: rgba(255,255,255,0.15); }
        .NET_Cap_Card h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .NET_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        @media (min-width: 640px) {
          .NET_Cap_Grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .NET_Cap_Grid { grid-template-columns: repeat(4, 1fr); gap: 30px; }
          .NET_Cap_Card { padding: 45px 35px; border-radius: 30px; }
          .NET_Cap_Icon { width: 60px; height: 60px; border-radius: 16px; margin-bottom: 25px; }
          .NET_Cap_Icon svg { width: 28px; height: 28px; }
        }

        /* --- SECTION 3: OUTCOMES --- */
        .NET_Outcome { 
          padding: 50px 5%; 
          display: flex; 
          justify-content: center;
          background: #fff;
        }
        .NET_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        
        .NET_Outcome_Content { flex: 1.2; }
        .NET_Outcome_Img { flex: 1; display: flex; justify-content: center; }
        .NET_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 40px; box-shadow: 0 30px 60px rgba(0,0,0,0.06); border: 1px solid #f1f5f9; }
        
        @media (max-width: 1024px) {
          .NET_Outcome_Inner { flex-direction: column; text-align: center; }
          .NET_Outcome_Img { order: -1; width: 100%; }
        }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; text-align: left; }
        .Outcome_Check { background: #3b82f6; color: white; border-radius: 50%; padding: 6px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.15rem; margin-bottom: 4px; }
        .Outcome_Desc { color: #64748b; font-size: 1rem; line-height: 1.6; }

        /* --- SECTION 4: FLOW (STEPS) --- */
        .NET_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center; 
          display: flex;
          justify-content: center;
        }
        .NET_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .NET_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 20px; 
          margin-top: 80px; 
          width: 100%;
          font-size:1.5rem;
        }

        .NET_Step_Card {
          background: white;
          border-radius: 20px;
          padding: 60px 30px 40px;
          position: relative;
          box-shadow: 0 15px 40px rgba(0,0,0,0.04);
          border: 1px solid #f1f5f9;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .NET_Step_Card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.08);
          border-color: #3b82f6;
        }

        @media (min-width: 640px) {
          .NET_Flow_Grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .NET_Flow_Grid { grid-template-columns: repeat(4, 1fr); gap: 30px; }
        }

        .NET_Step_Header {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          padding: 8px 30px;
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 1px;
          border-radius: 8px;
          min-width: 140px;
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
          background: #1d4ed8;
        }

        .NET_Step_Icon {
          color: #3b82f6;
          margin-bottom: 25px;
          background: #eff6ff;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
        }

        .NET_Step_H {
          font-size: 1.25rem;
          font-weight: 800;
          color: #22314f;
          margin-bottom: 15px;
        }

        .NET_Step_P {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .NET_Step_Footer {
          width: 40px;
          height: 4px;
          background: #3b82f6;
          border-radius: 10px;
          margin-top: 25px;
          opacity: 0.3;
        }

        .NET_Trust {
          padding: 50px 5%;
          text-align: center;
          background: #fff;
          display: flex;
          justify-content: center;
        }
        .NET_Trust_Inner {
          max-width: 800px;
          width: 100%;
        }
      `}),A.jsx("section",{className:"NET_Hero",children:A.jsxs("div",{className:"NET_Hero_Inner",children:[A.jsxs(t.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.8},className:"NET_Hero_Content",children:[A.jsx("span",{className:"NET_Badge",children:"Technology Services"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Network Management Services"}),A.jsx("p",{className:"NET_Tagline",children:"Reliable, Secure, and High-Performance Networks"}),A.jsx("p",{className:"NET_Hero_P",children:"CHN Technologies provides structured network management services that ensure stable connectivity, controlled access, and continuous performance across business environments."}),A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"NET_Primary_Btn",children:"Talk to a Specialist"})})]}),A.jsx(t.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:1},className:"NET_Hero_Img",children:A.jsx("img",{src:Vi,alt:"Network Experts"})})]})}),A.jsx("section",{className:"NET_Cap_Section",children:A.jsxs("div",{className:"NET_Cap_Inner",children:[A.jsx("span",{className:"NET_Badge",children:"What Our Network Management Covers"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Structured Connectivity for Business Continuity"}),A.jsx("div",{className:"NET_Cap_Grid",children:[{title:"Monitoring & Performance",icon:A.jsx(O,{size:28}),desc:"Continuous monitoring to detect issues early and maintain optimal network performance."},{title:"Security & Access Control",icon:A.jsx(M,{size:28}),desc:"Implementation of secure access policies, firewalls, and segmentation to reduce risk."},{title:"Infrastructure Maintenance",icon:A.jsx(IA,{size:28}),desc:"Structured configuration and maintenance of routers, switches, and components."},{title:"Incident Management",icon:A.jsx(U,{size:28}),desc:"Rapid identification and resolution of network disruptions to minimise downtime."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},className:"NET_Cap_Card",children:[A.jsx("div",{className:"NET_Cap_Icon",children:e.icon}),A.jsx("h3",{children:e.title}),A.jsx("p",{children:e.desc})]},i))})]})}),A.jsx("section",{className:"NET_Outcome",children:A.jsxs("div",{className:"NET_Outcome_Inner",children:[A.jsx("div",{className:"NET_Outcome_Img",children:A.jsx("img",{src:Be,alt:"Network Dashboard"})}),A.jsxs("div",{className:"NET_Outcome_Content",style:{textAlign:"left"},children:[A.jsx("span",{className:"NET_Badge",children:"Business Benefits"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Outcomes of Structured Management"}),A.jsx("div",{className:"Outcome_List",children:[{title:"Improved Network Stability",desc:"Reduced disruptions and consistent connectivity across systems."},{title:"Enhanced Security Posture",desc:"Controlled access and monitored traffic reduce exposure to threats."},{title:"Operational Efficiency",desc:"Reliable networks support productivity and reduce IT firefighting."},{title:"Scalable Architecture",desc:"Network designs that grow alongside business requirements."}].map((e,i)=>A.jsxs("div",{className:"Outcome_Item",children:[A.jsx("div",{className:"Outcome_Check",children:A.jsx(j,{size:16})}),A.jsxs("div",{children:[A.jsx("span",{className:"Outcome_Title",children:e.title}),A.jsx("p",{className:"Outcome_Desc",children:e.desc})]})]},i))})]})]})}),A.jsx("section",{className:"NET_Flow",children:A.jsxs("div",{className:"NET_Flow_Inner",children:[A.jsx("span",{className:"NET_Badge",children:"Execution Model"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Our Network Management Approach"}),A.jsx(t.div,{initial:"hidden",whileInView:"show",viewport:{once:!0},variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.2}}},className:"NET_Flow_Grid",children:[{num:"01",h:"Assess",icon:A.jsx(Je,{size:32}),p:"Review existing architecture, performance gaps, and security risks.",class:"Step_01"},{num:"02",h:"Design",icon:A.jsx(EA,{size:32}),p:"Define structured network policies and monitoring standards.",class:"Step_02"},{num:"03",h:"Implement",icon:A.jsx(IA,{size:32}),p:"Deploy and configure components with minimal disruption.",class:"Step_03"},{num:"04",h:"Monitor",icon:A.jsx(O,{size:32}),p:"Ongoing performance tracking and continuous improvement.",class:"Step_04"}].map((e,i)=>A.jsxs(t.div,{variants:{hidden:{opacity:0,y:30},show:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},className:"NET_Step_Card",children:[A.jsxs("div",{className:`NET_Step_Header ${e.class}`,children:["STEP ",e.num]}),A.jsx("div",{className:"NET_Step_Icon",children:e.icon}),A.jsx("h3",{className:"NET_Step_H",children:e.h}),A.jsx("p",{className:"NET_Step_P",children:e.p}),A.jsx("div",{className:"NET_Step_Footer"})]},i))})]})}),A.jsx("section",{className:"NET_Trust",children:A.jsxs("div",{className:"NET_Trust_Inner",children:[A.jsx("h2",{className:"NET_Hero_H1",children:"Built for Reliability and Control"}),A.jsx("p",{className:"NET_Hero_P",children:"CHN Technologies manages networks with a focus on predictability, accountability, and long-term stability. Our services align with operational requirements and compliance needs."}),A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"NET_Primary_Btn",style:{marginTop:"20px"},children:"Contact a Network Specialist"})})]})})]}),Xi="/assets/hero_team_cyber-DN2EwXCU.png",$i="/assets/dashboard_cyber-BndJNJN8.png",Aa=()=>A.jsxs("div",{className:"CS_WRAPPER",children:[A.jsx("style",{children:`
        .CS_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .CS_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(0, 96, 255, 0.03) 0%, transparent 60%);
          min-height: 90vh;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .CS_Hero { padding-top: 140px; }
        }

        .CS_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
          position: relative;
          z-index: 10;
        }
        @media (max-width: 1024px) {
          .CS_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .CS_Hero_Content { max-width: 100%; order: 1; }
          .CS_Hero_Img { height:450px; order: -1; width: 100%; margin-bottom: 40px; }
          .CS_Hero_Img img { max-width: 380px; border-width: 10px; border-radius: 30px; }
          .CS_Hero_Floating_Card { display: none; }
        }

        .CS_Hero_Content { flex: 1.2; max-width: 700px; }
        .CS_Badge { 
          font-weight: 800; letter-spacing: 3px; 
          color: #2563eb;
          font-size: 0.8rem; margin-bottom: 25px; display: inline-block;
          background: rgba(0, 96, 255, 0.08); padding: 8px 16px; border-radius: 100px;
        }
        .CS_Hero_H1 { line-height: 1.05; color: #0f172a; margin-bottom: 15px; letter-spacing: -0.02em; }
        .CS_Tagline { font-size: 1.2rem; color: #0060ff; font-weight: 700; margin-bottom: 25px; line-height: 1.3; }
        .CS_Hero_P { font-size: 1.15rem; color: #475569; line-height: 1.8; margin-bottom: 45px; font-weight: 450; }

        .CS_Btn_Group { display: flex; gap: 20px; align-items: center; }
        @media (max-width: 1024px) { .CS_Btn_Group { justify-content: center; } }
        
        .CS_Primary_Btn { 
          background: linear-gradient(135deg, #0060ff 0%, #0044cc 100%); 
          color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 600; font-size: 1.05rem;
          box-shadow: 0 20px 40px rgba(0, 96, 255, 0.25); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none; cursor: pointer; display: flex; align-items: center; gap: 10px;
        }
        .CS_Primary_Btn:hover { transform: translateY(-3px); box-shadow: 0 25px 50px rgba(0, 96, 255, 0.35); }
.CS_Secondary_Btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
padding: 10px 20px;  border-radius: 9999px; /* Rounded pill shape */
  border: 2px solid #e2e8f0; /* Light border */
  background-color: #ffffff;
  color: #1a2840; /* Deep slate/blue */
          font-weight: 800; font-size: 1.05rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.CS_Secondary_Btn:hover {
  border-color: #0060ff;
  color: #0060ff;
  box-shadow: 0 10px 15px -3px rgba(0, 96, 255, 0.1);
}
        .CS_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; height:450px;}
        .CS_Hero_Img img { 
            width: 500px; 
            max-width: 500px;
            border-radius: 60px; 
            border: 20px solid #fff; 
            box-shadow: 0 60px 120px rgba(0,0,0,0.12); 
            object-fit: cover;
            aspect-ratio: 4/5;
        }
        .CS_Hero_Floating_Card {
          position: absolute; top: 40px; right: -40px;
          background: white; padding: 25px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 15px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }

        /* --- SECTION 2: CAPABILITIES --- */
        .CS_Cap_Section {
          padding: 50px 5%; 
          background: #f8fafc; 
          text-align: left;
          display: flex;
          justify-content: center;
        }
        .CS_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .CS_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .CS_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .CS_Cap_Grid { grid-template-columns: repeat(4, 1fr); gap: 35px; } }

        .CS_Cap_Card {
          background: white;
          padding: 55px 45px;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
          transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0,0,0,0.04);
          z-index: 1;
        }

        .CS_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(135deg, #0060ff 0%, #002e5b 100%);
          z-index: -1;
          transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .CS_Cap_Card:hover::before { height: 100%; }
        .CS_Cap_Card:hover h3, 
        .CS_Cap_Card:hover p,
        .CS_Cap_Card:hover .CS_Cap_Icon { color: #ffffff !important; }
        
        .CS_Cap_Icon { width: 70px; height: 70px; background: #f0f7ff; color: #0060ff; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px; transition: 0.4s; }
        .CS_Cap_Card:hover .CS_Cap_Icon { background: rgba(255,255,255,0.1); }
        .CS_Cap_Card h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 20px; color: #0f172a; transition: 0.3s; letter-spacing: -0.01em; }
        .CS_Cap_Card p { color: #64748b; line-height: 1.7; font-size: 1rem; transition: 0.3s; font-weight: 450; }

        /* --- SECTION 3: OUTCOMES --- */
        .CS_Outcome { 
          padding: 50px 5%; 
          display: flex; 
          justify-content: center;
          background: white; 
        }
        .CS_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 100px;
          width: 100%;
          max-width: 1300px;
        }
        
        .CS_Outcome_Content { flex: 1.2; text-align: left; }
        .CS_Outcome_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .CS_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 50px; box-shadow: 0 40px 100px rgba(0,0,0,0.15); border: 1px solid rgba(0,0,0,0.05); }
        
        .Outcome_List { margin-top: 50px; }
        .Outcome_Item { display: flex; gap: 20px; margin-bottom: 35px; align-items: flex-start; }
        .Outcome_Check { background: #0060ff; color: white; border-radius: 12px; padding: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(0, 96, 255, 0.2); }
        .Outcome_Title { font-weight: 800; color: #0f172a; display: block; font-size: 1.25rem; margin-bottom: 5px; letter-spacing: -0.01em; }
        .Outcome_Desc { color: #64748b; font-size: 1.05rem; line-height: 1.6; font-weight: 450; }

        @media (max-width: 1024px) {
          .CS_Outcome_Inner { flex-direction: column; text-align: center; gap: 60px; }
          .CS_Outcome_Img { order: -1; width: 100%; }
          .Outcome_Item { text-align: left; }
        }
        
        .CS_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .CS_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .CS_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 80px; 
          width: 100%;
        }
        @media (min-width: 768px) { .CS_Flow_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .CS_Flow_Grid { grid-template-columns: repeat(4, 1fr); } }
        
        .CS_Step_Card {
           background: white; border-radius: 30px;           padding: 60px 30px 40px;
 position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.03); transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
        }
        .CS_Step_Card:hover { transform: translateY(-15px); box-shadow: 0 40px 80px rgba(0,0,0,0.08); border-color: #0060ff; }
        .CS_Step_Num { 
          position: absolute; top: -20px; left: 40px;
          background: #0f172a; color: white; padding: 6px 25px; border-radius: 100px; font-weight: 900; font-size: 0.85rem; letter-spacing: 1px;
        }
        .CS_Step_Icon { color: #0060ff; margin-bottom: 30px; }
        .CS_Step_H {  font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 15px; letter-spacing: -0.01em; }
        .CS_Step_P { color: #64748b; font-size: 1rem; line-height: 1.7; font-weight: 450; }

        .CS_Trust {
          padding: 50px 5%; text-align: center; background: #002e5b; color: #fff; position: relative; overflow: hidden;
          display: flex; justify-content: center;
        }
        .CS_Trust_Inner {
          max-width: 1000px; width: 100%; position: relative; z-index: 10;
        }
      `}),A.jsx("section",{className:"CS_Hero",children:A.jsxs("div",{className:"CS_Hero_Inner",children:[A.jsxs(t.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:1,ease:"easeOut"},className:"CS_Hero_Content",children:[A.jsx("span",{className:"CS_Badge uppercase",children:"Digital Fortress"}),A.jsx("h2",{className:"CS_Hero_H1 NET_Hero_H1",children:"Elite Cyber Resilience"}),A.jsx("p",{className:"CS_Tagline",children:"Safeguarding Enterprise Intelligence With Proactive Defense Ecosystems."}),A.jsx("p",{className:"CS_Hero_P",children:"CHN Technologies engineers structured security frameworks that neutralize threats before they materialize. Our Zero-Trust architecture ensures your operations remain immutable, compliant, and consistently secure."}),A.jsxs("div",{className:"CS_Btn_Group",children:[A.jsx(c,{to:"/contact",children:A.jsxs(t.button,{whileHover:{scale:1.02},whileTap:{scale:.98},className:"CS_Primary_Btn flex items-center gap-2",children:["Consult a Defender ",A.jsx(Y,{size:20})]})}),A.jsx(c,{to:"/network",children:A.jsxs(t.button,{whileHover:{scale:1.02},whileTap:{scale:.98},className:"CS_Secondary_Btn flex items-center gap-2",children:["Network Hardening ",A.jsx(O,{size:18,className:"text-[#0060ff]"})]})})]})]}),A.jsxs(t.div,{initial:{opacity:0,scale:.95,y:30},animate:{opacity:1,scale:1,y:0},transition:{duration:1.2,ease:"easeOut"},className:"CS_Hero_Img",children:[A.jsx("img",{src:Xi,alt:"Cyber Security Infrastructure"}),A.jsxs(t.div,{initial:{opacity:0,x:50,scale:.9},animate:{opacity:1,x:0,scale:1,y:[0,-10,0]},transition:{opacity:{delay:.8,duration:.5},x:{delay:.8,duration:.5},y:{repeat:1/0,duration:4,ease:"easeInOut"}},className:"CS_Hero_Floating_Card flex items-center gap-4 bg-white p-4 rounded-2xl shadow-xl border border-blue-50 relative",children:[A.jsxs("div",{className:"relative",children:[A.jsx(t.div,{animate:{scale:[1,1.2,1],opacity:[.5,.2,.5]},transition:{repeat:1/0,duration:2},className:"absolute inset-0 bg-blue-400 rounded-xl blur-md"}),A.jsx("div",{className:"relative bg-blue-100 p-3 rounded-xl z-10",children:A.jsx(pe,{size:24,className:"text-[#0060ff]"})})]}),A.jsxs("div",{children:[A.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400",children:"Threat Level"}),A.jsx(t.p,{animate:{opacity:[1,.7,1]},transition:{repeat:1/0,duration:2,ease:"easeInOut"},className:"text-lg font-black text-slate-900 tracking-tight",children:"NEUTRALIZED"})]}),A.jsx("div",{className:"absolute top-3 right-3 h-2 w-2 bg-blue-500 rounded-full animate-ping"})]})]})]})}),A.jsx("section",{className:"CS_Cap_Section",children:A.jsxs("div",{className:"CS_Cap_Inner",children:[A.jsxs("div",{style:{marginBottom:"100px"},children:[A.jsx("span",{className:"CS_Badge uppercase",children:"Defensive Authority"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Built for Absolute Immunity"}),A.jsx("p",{className:"CS_Hero_P",style:{fontSize:"1.25rem"},children:"In a digital-first economy, proximity to risk is constant. CHN Technologies eliminates vulnerability by implementing multi-layered security protocols, continuous monitoring, and rapid identification systems across your enterprise."})]}),A.jsx("div",{className:"CS_Cap_Grid",children:[{title:"Unified Threat Mgmt",icon:A.jsx(O,{size:32}),desc:"Predictive threat hunting and real-time monitoring to neutralize advanced persistent threats before they enter your perimeter."},{title:"Zero-Trust Architecture",icon:A.jsx(Ke,{size:32}),desc:"Never trust, always verify. We implement granular access controls and identity protection for every single user and device."},{title:"Endpoint Orchestration",icon:A.jsx(bA,{size:32}),desc:"Hardening every point of entry—from mobile devices to global servers—ensuring your entire surface is under active protection."},{title:"Rapid Countermeasures",icon:A.jsx(U,{size:32}),desc:"Automated incident response protocols that contain and isolate threats in milliseconds, preserving core operational integrity."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{delay:i*.1,duration:.8},viewport:{once:!0},className:"CS_Cap_Card",children:[A.jsx("div",{className:"CS_Cap_Icon",children:e.icon}),A.jsx("h3",{children:e.title}),A.jsx("p",{children:e.desc})]},i))})]})}),A.jsx("section",{className:"CS_Outcome",children:A.jsxs("div",{className:"CS_Outcome_Inner",children:[A.jsx(t.div,{initial:{opacity:0,x:-40},whileInView:{opacity:1,x:0},transition:{duration:1},viewport:{once:!0},className:"CS_Outcome_Img",children:A.jsx("img",{src:$i,alt:"Security Dashboard"})}),A.jsxs("div",{className:"CS_Outcome_Content",children:[A.jsx("span",{className:"CS_Badge uppercase",children:"Digital Impact"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Strategic Outcomes of Secure Governance"}),A.jsx("div",{className:"Outcome_List",children:[{title:"Immutable Data Privacy",desc:"Enterprise-grade encryption and privacy controls ensure your proprietary intelligence remains yours alone."},{title:"Operational Continuity",desc:"Eliminate downtime caused by security breaches, ransomware, or unauthorized access attempts."},{title:"Regulatory Superiority",desc:"Seamlessly meet and exceed ISO, SOC2, and GDPR requirements with pre-configured compliance frameworks."},{title:"Brand Authority",desc:"Build unshakeable trust with clients and partners by demonstrating the highest level of security discipline."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},viewport:{once:!0},className:"Outcome_Item",children:[A.jsx("div",{className:"Outcome_Check",children:A.jsx(j,{size:22})}),A.jsxs("div",{children:[A.jsx("span",{className:"Outcome_Title",children:e.title}),A.jsx("p",{className:"Outcome_Desc",children:e.desc})]})]},i))})]})]})}),A.jsx("section",{className:"CS_Flow",children:A.jsxs("div",{className:"CS_Flow_Inner",children:[A.jsx("span",{className:"CS_Badge uppercase",children:"Security Lifecycle"}),A.jsx("h2",{className:"NET_Hero_H1",children:"The CHN Guardian Framework"}),A.jsx("div",{className:"CS_Flow_Grid",children:[{num:"PHASE 01",h:"Vulnerability Audit",icon:A.jsx(W,{size:35}),p:"Exposing invisible weaknesses through ethical hacking, stress tests, and environmental audits."},{num:"PHASE 02",h:"Hardened Design",icon:A.jsx(J,{size:35}),p:"Drafting a bespoke security architecture that integrates with your existing business flows."},{num:"PHASE 03",h:"Active Deployment",icon:A.jsx(V,{size:35}),p:"Implementing the firewall, encryption, and access controls with precision calibration."},{num:"PHASE 04",h:"Infinite Watch",icon:A.jsx(ge,{size:35}),p:"24/7 global SOC monitoring, threat intel sharing, and continuous defense evolution."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{delay:i*.1,duration:.8},viewport:{once:!0},className:"CS_Step_Card",children:[A.jsx("div",{className:"CS_Step_Num",children:e.num}),A.jsx("div",{className:"CS_Step_Icon",children:e.icon}),A.jsx("h3",{className:"CS_Step_H",children:e.h}),A.jsx("p",{className:"CS_Step_P",children:e.p})]},i))})]})}),A.jsxs("section",{style:{padding:"50px 5%",textAlign:"center",background:"#0f172a",color:"#fff",position:"relative",overflow:"hidden"},children:[A.jsx("div",{style:{position:"absolute",inset:0,opacity:.1,backgroundImage:"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",backgroundSize:"40px 40px"}}),A.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:10},children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 text-white",children:"Is Your Enterprise Truly Secure?"}),A.jsx("p",{className:"EUC_Hero_P",style:{margin:"30px auto 50px",color:"rgba(255,255,255,0.7)",fontSize:"1.3rem"},children:"Don't wait for a breach to discover your weaknesses. Secure your future with a structured defense ecosystem built by experts."}),A.jsx("div",{className:"flex flex-col md:flex-row gap-6 justify-center items-center",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"CS_Primary_Btn",children:"Launch Security Audit"})})})]})})]})]}),ea="/assets/enduser-hero-A5Fhceda.png",ta="/assets/elite_endpoint_outcomes-DKpwBDsy.png",ia=()=>A.jsxs("div",{className:"EUC_WRAPPER",children:[A.jsx("style",{children:`
        .EUC_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .EUC_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.04) 0%, transparent 60%);
          min-height: 90vh;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .EUC_Hero { padding-top: 140px; }
        }

        .EUC_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
          position: relative;
          z-index: 10;
        }
        @media (max-width: 1024px) {
          .EUC_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .EUC_Hero_Content { max-width: 100%; order: 1; }
          .EUC_Hero_Img { order: -1; width: 100%; margin-bottom: 40px; }
          .EUC_Hero_Img img { max-width: 380px; border-width: 10px; border-radius: 30px; }
          .EUC_Hero_Floating_Card { display: none; }
        }

        .EUC_Hero_Content { flex: 1.2; max-width: 700px; }
        .EUC_Badge { 
          color: #2563eb; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; 
          font-size: 0.8rem; margin-bottom: 25px; display: inline-block;
          background: rgba(37, 99, 235, 0.08); padding: 8px 16px; border-radius: 100px;
        }
        .EUC_Hero_H1 
        { 
         margin-bottom: 15px;
        }
        .EUC_Tagline { font-size: 1.2rem; color: #2563eb; font-weight: 700; margin-bottom: 25px; line-height: 1.0; }
        .EUC_Hero_P { font-size: 1.15rem; color: #475569; line-height: 1.7; margin-bottom: 45px; font-weight: 450; }

        .EUC_Btn_Group { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
        @media (max-width: 1024px) { .EUC_Btn_Group { justify-content: center; } }
        
        .EUC_Primary_Btn { 
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); 
          color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 600; font-size: 1.05rem;
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.25); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none; cursor: pointer; display: flex; align-items: center; gap: 10px;
        }
        .EUC_Primary_Btn:hover { transform: translateY(-3px); box-shadow: 0 25px 50px rgba(37, 99, 235, 0.35); }

        .EUC_Hero_Img { height:450px; flex: 1; position: relative; display: flex; justify-content: center; }
        .EUC_Hero_Img img { 
            width: 100%; 
            max-width: 500px;
            border-radius: 60px; 
            border: 20px solid #fff; 
            box-shadow: 0 60px 120px rgba(0,0,0,0.12); 
            object-fit: cover;
            aspect-ratio: 4/5;
        }
        .EUC_Hero_Floating_Card {
          position: absolute;
          background: white; padding: 20px 25px; border-radius: 24px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.12);
          display: flex; gap: 16px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
          width: 260px;
        }

        .EUC_Status_Dot {
          width: 10px; height: 10px; border-radius: 50%; display: inline-block;
          margin-right: 8px;
        }

        /* --- SECTION 2: CAPABILITIES --- */
        .EUC_Cap_Section { 
          padding: 50px 5%; 
          background: #f8fafc; 
          text-align: left;
          display: flex;
          justify-content: center;
        }
        .EUC_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .EUC_Cap_Grid { 
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
          margin-top: 80px;
          width: 100%;
        }
        @media (min-width: 768px) { .EUC_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .EUC_Cap_Grid { grid-template-columns: repeat(4, 1fr); } }

        .EUC_Cap_Card {
          background: white;
          padding: 55px 45px;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
          transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0,0,0,0.04);
          z-index: 1;
        }

        .EUC_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);
          z-index: -1;
          transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .EUC_Cap_Card:hover::before { height: 100%; }
        .EUC_Cap_Card:hover h3, 
        .EUC_Cap_Card:hover p,
        .EUC_Cap_Card:hover .EUC_Cap_Icon { color: #ffffff !important; }
        
        .EUC_Cap_Icon { width: 70px; height: 70px; background: #eff6ff; color: #2563eb; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px; transition: 0.4s; }
        .EUC_Cap_Card:hover .EUC_Cap_Icon { background: rgba(255,255,255,0.1); }
        .EUC_Cap_Card h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 20px; color: #0f172a; transition: 0.3s; letter-spacing: -0.01em; }
        .EUC_Cap_Card p { color: #64748b; line-height: 1.7; font-size: 1rem; transition: 0.3s; font-weight: 450; }

        /* --- SECTION 3: OUTCOMES --- */
        .EUC_Outcome { 
          padding:50px 5%; 
          display: flex; 
          justify-content: center;
          background: white; 
        }
        .EUC_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        
        .EUC_Outcome_Content { flex: 1.2; text-align: left; }
        .EUC_Outcome_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .EUC_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 10px; box-shadow: 0 40px 100px rgba(0,0,0,0.15); border: 1px solid rgba(0,0,0,0.05); }
        
        @media (max-width: 1024px) {
          .EUC_Outcome_Inner { flex-direction: column; text-align: center; gap: 60px; }
          .EUC_Outcome_Img { order: -1; width: 100%; }
        }
        
         .Outcome_List { display: flex; flex-direction: column; gap: 40px; margin-top: 50px; }
         .Outcome_Item { display: flex; gap: 20px; align-items: flex-start; text-align: left; }
         .Outcome_Check { 
            background: #2563eb; color: white; border-radius: 12px; width: 44px; height: 44px; min-width: 44px;
            display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); 
            margin-top: 4px;
         }
         .Outcome_Title { font-weight: 800; color: #0f172a; display: block; font-size: 1.3rem; margin-bottom: 8px; letter-spacing: -0.01em; }
         .Outcome_Desc { color: #64748b; font-size: 1.1rem; line-height: 1.7; font-weight: 450; margin: 0; }

        /* --- SECTION 4: APPROACH --- */
        .EUC_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .EUC_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .EUC_Flow_Grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          gap: 30px; 
          margin-top: 80px; 
          width: 100%;
        }
        
        .EUC_Step_Card {
          background: white; border-radius: 30px;           padding: 60px 30px 40px;
 position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.03); transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
        }
        .EUC_Step_Card:hover { transform: translateY(-15px); box-shadow: 0 40px 80px rgba(0,0,0,0.08); border-color: #2563eb; }
        .EUC_Step_Num { 
          position: absolute; top: -20px; left: 40px;
          background: #0f172a; color: white; padding: 6px 25px; border-radius: 100px; font-weight: 900; font-size: 0.85rem; letter-spacing: 1px;
        }
        .EUC_Step_Icon { color: #2563eb; margin-bottom: 30px; }
        .EUC_Step_H { font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 15px; letter-spacing: -0.01em; 
        }
        .EUC_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.7; font-weight: 450; }

        @media (max-width: 1024px) {
          .EUC_Hero, .EUC_Outcome { flex-direction: column; text-align: center; padding-top: 140px; }
          .EUC_Hero_Content { text-align: center; }
          .EUC_Badge { margin-bottom: 30px; }
          .EUC_Btn_Group { justify-content: center; }
          .Outcome_Item { text-align: left; }
          .EUC_Hero_Img img { max-width: 100%; border-radius: 40px; }
          .EUC_Hero_Floating_Card { left: 50%; transform: translateX(-50%); bottom: -20px; }
        }
      `}),A.jsx("section",{className:"EUC_Hero",children:A.jsxs("div",{className:"EUC_Hero_Inner",children:[A.jsxs(t.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:1,ease:"easeOut"},className:"EUC_Hero_Content",children:[A.jsx("span",{className:"EUC_Badge",children:"Cognitive Workspace"}),A.jsx("h2",{className:"EUC_Hero_H1 NET_Hero_H1",children:"Seamless User Computing"}),A.jsx("p",{className:"EUC_Tagline",children:"Frictionless Productivity Through Elite Endpoint Orchestration."}),A.jsx("p",{className:"EUC_Hero_P",children:"CHN Technologies delivers structured end-user computing services that ensure your workforce stays agile, secure, and consistently productive across any device, anywhere in the world."}),A.jsx("div",{className:"EUC_Btn_Group",children:A.jsx(c,{to:"/contact",children:A.jsxs("button",{className:"EUC_Primary_Btn",children:["Talk to an EUC Expert ",A.jsx(Q,{size:20})]})})})]}),A.jsxs(t.div,{initial:{opacity:0,scale:.95,y:30},animate:{opacity:1,scale:1,y:0},transition:{duration:1.2,ease:"easeOut"},className:"EUC_Hero_Img",children:[A.jsx("img",{src:ea,alt:"Modern End-User Workspace"}),A.jsxs(t.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:260,damping:20,delay:1.5},className:"EUC_Hero_Floating_Card",style:{bottom:"40px",left:"-60px"},children:[A.jsx("div",{className:"bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center shrink-0",children:A.jsx(U,{className:"text-[#2563eb]",size:24,fill:"#2563eb",fillOpacity:.1})}),A.jsxs("div",{children:[A.jsxs("p",{className:"text-[11px] font-bold tracking-wider text-slate-400 uppercase flex items-center",children:[A.jsx("span",{className:"EUC_Status_Dot bg-[#2563eb] animate-pulse"}),"Performance"]}),A.jsx("p",{className:"text-xl font-black text-slate-800",children:"99+ Score"})]})]})]})]})}),A.jsx("section",{className:"EUC_Cap_Section",children:A.jsxs("div",{className:"EUC_Cap_Inner",children:[A.jsxs("div",{style:{marginBottom:"100px"},children:[A.jsx("span",{className:"EUC_Badge",children:"Operational Freedom"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Modernizing the Human-System Interface"}),A.jsx("p",{className:"EUC_Hero_P",style:{fontSize:"1.25rem"},children:"The bottleneck of enterprise growth is often the endpoint. CHN Technologies standardizes the user experience, eliminating technical debt and support firefighting with automated lifecycle management."})]}),A.jsx("div",{className:"EUC_Cap_Grid",children:[{title:"Unified Device Lifecycle",icon:A.jsx(xe,{size:32}),desc:"Zero-touch provisioning and automated decommissioning, ensuring your hardware fleet is always current, patched, and performing."},{title:"Virtualized Desktops",icon:A.jsx(OA,{size:32}),desc:"High-performance VDI solutions that deliver secure corporate environments to any machine, reducing hardware dependency."},{title:"Cognitive Application Hub",icon:A.jsx(PA,{size:32}),desc:"Centralized application management with automated updates and role-based delivery, keeping teams in a flow-state."},{title:"Identity Protection",icon:A.jsx(Y,{size:32}),desc:"Biometric authentication and multi-factor identity governance that moves with the user, not just the machine."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{delay:i*.1,duration:.8},viewport:{once:!0},className:"EUC_Cap_Card group relative overflow-hidden p-8 rounded-3xl transition-colors duration-500",children:[A.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#3b82f6] to-[#1e3a8a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10"}),A.jsxs("div",{className:"relative z-10",children:[A.jsx("div",{className:"EUC_Cap_Icon mb-6 text-[#002e5b] group-hover:text-white transition-colors duration-500",children:e.icon}),A.jsx("h3",{className:"text-xl font-bold mb-4 text-[#002e5b] group-hover:text-white transition-colors duration-500",children:e.title}),A.jsx("p",{className:"text-gray-600 group-hover:text-white/90 transition-colors duration-500 leading-relaxed",children:e.desc})]})]},i))})]})}),A.jsx("section",{className:"EUC_Outcome",children:A.jsxs("div",{className:"EUC_Outcome_Inner",children:[A.jsx(t.div,{initial:{opacity:0,x:-40},whileInView:{opacity:1,x:0},transition:{duration:1},viewport:{once:!0},className:"EUC_Outcome_Img",children:A.jsx("img",{src:ta,alt:"Productivity Operations"})}),A.jsxs("div",{className:"EUC_Outcome_Content",children:[A.jsx("span",{className:"EUC_Badge",children:"Workforce Impact"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Strategic Outcomes of Elite Endpoint Management"}),A.jsx("div",{className:"Outcome_List",children:[{title:"Universal Consistency",desc:"A unified user experience across mobile, tablet, and desktop, reducing learning curves and support tickets."},{title:"Peak Workforce Mobility",desc:"Empower remote and hybrid teams with secure, high-speed access to every corporate asset from any location."},{title:"Aggressive Cost Reduction",desc:"Consolidate hardware spend and automate L1 support tasks, redirecting IT budget toward innovation."},{title:"Absolute Compliance",desc:"Automated auditing and remote-wipe capabilities ensure corporate data never leaves your control plane."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},viewport:{once:!0},className:"Outcome_Item",children:[A.jsx("div",{className:"Outcome_Check",children:A.jsx(j,{size:22})}),A.jsxs("div",{children:[A.jsx("span",{className:"Outcome_Title",children:e.title}),A.jsx("p",{className:"Outcome_Desc",children:e.desc})]})]},i))})]})]})}),A.jsx("section",{className:"EUC_Flow",children:A.jsxs("div",{className:"EUC_Flow_Inner",children:[A.jsx("span",{className:"EUC_Badge",children:"Transformation Lifecycle"}),A.jsx("h2",{className:"NET_Hero_H1",children:"The CHN Productivity Framework"}),A.jsx("div",{className:"EUC_Flow_Grid",children:[{num:"PHASE 01",h:"User Analytics",icon:A.jsx(W,{size:35}),p:"Mapping user personas and application dependencies to identify friction points in your current workflow."},{num:"PHASE 02",h:"Experience Design",icon:A.jsx(J,{size:35}),p:"Drafting a unified computing architecture that balances absolute security with maximum usability."},{num:"PHASE 03",h:"Global Rollout",icon:A.jsx(V,{size:35}),p:"Rapid integration of new endpoint standards with zero-touch configuration and migration."},{num:"PHASE 04",h:"Adaptive Tuning",icon:A.jsx(gA,{size:35}),p:"Continuous performance monitoring and proactive UX refinements to keep your workforce ahead."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{delay:i*.1,duration:.8},viewport:{once:!0},className:"EUC_Step_Card",children:[A.jsx("div",{className:"EUC_Step_Num",children:e.num}),A.jsx("div",{className:"EUC_Step_Icon",children:e.icon}),A.jsx("h3",{className:"EUC_Step_H",children:e.h}),A.jsx("p",{className:"EUC_Step_P",children:e.p})]},i))})]})}),A.jsxs("section",{style:{padding:"50px 5%",textAlign:"center",background:"#0f172a",color:"#fff",position:"relative",overflow:"hidden"},children:[A.jsx("div",{style:{position:"absolute",inset:0,opacity:.1,backgroundImage:"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",backgroundSize:"40px 40px"}}),A.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:10},children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 text-white",children:"Ready to Liberate Your Workforce?"}),A.jsx("p",{className:"EUC_Hero_P",style:{margin:"30px auto 50px",color:"rgba(255,255,255,0.7)",fontSize:"1.3rem"},children:"Stop managing devices. Start empowering people. Join the enterprises shifting to elite end-user computing with CHN Technologies."}),A.jsx("div",{className:"flex flex-col md:flex-row gap-6 justify-center items-center",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"EUC_Primary_Btn",children:"Launch Workforce Audit"})})})]})})]})]}),aa="/assets/servers-DKOgRiiv.jpg",Ie="/assets/workspace-ChUhlDH8.jpg",sa=()=>A.jsxs("div",{className:"SA_WRAPPER",children:[A.jsx("style",{children:`
        .SA_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .SA_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.04) 0%, transparent 60%);
          min-height: 90vh;
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .SA_Hero { padding-top: 140px; }
        }

        .SA_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
          position: relative;
          z-index: 10;
        }
        @media (max-width: 1024px) {
          .SA_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .SA_Hero_Content { max-width: 100%; order: 1; }
          .SA_Hero_Img { order: -1; width: 100%; margin-bottom: 40px; display: flex; justify-content: center; }
          .SA_Hero_Img img { max-width: 400px; border-width: 10px; border-radius: 30px; }
          .SA_Hero_Floating_Card { display: none; }
        }

        .SA_Hero_Content { flex: 1.2; max-width: 700px; }
        .SA_Badge { 
          color: #2563eb; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; 
          font-size: 0.8rem; margin-bottom: 25px; display: inline-block;
          background: rgba(37, 99, 235, 0.08); padding: 8px 16px; border-radius: 100px;
        }
        .SA_Hero_H1 
        { 
         margin-bottom: 15px; 
          }
        .SA_Tagline { font-size: 1.2rem; color: #2563eb; font-weight: 700; margin-bottom: 25px; line-height: 1.3; }
        .SA_Hero_P { font-size: 1.15rem; color: #475569; line-height: 1.8; margin-bottom: 45px; font-weight: 450; }

        .SA_Btn_Group { display: flex; gap: 20px; align-items: center; }
        @media (max-width: 1024px) { .SA_Btn_Group { justify-content: center; flex-wrap: wrap; } }

        .SA_Primary_Btn { 
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); 
          color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 600; font-size: 1.05rem;
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.25); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none; cursor: pointer; display: flex; align-items: center; gap: 10px;
        }
        .SA_Primary_Btn:hover { transform: translateY(-3px); box-shadow: 0 25px 50px rgba(37, 99, 235, 0.35); }

        .SA_Hero_Img { height:450px; flex: 1; position: relative; display: flex; justify-content: center; }
        .SA_Hero_Img img { 
            width: 100%; 
            max-width: 500px;
            border-radius: 60px; 
            border: 20px solid #fff; 
            box-shadow: 0 60px 120px rgba(0,0,0,0.12); 
            object-fit: cover;
            aspect-ratio: 4/5;
        }
        .SA_Hero_Floating_Card {
          position: absolute; bottom: 40px; left: -40px;
          background: white; padding: 25px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 15px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }

        /* --- SECTION 2: CAPABILITIES --- */
        .SA_Cap_Section { 
          padding: 50px 5%; 
          background: #f8fafc; 
          text-align: left;
          display: flex;
          justify-content: center;
        }
        .SA_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .SA_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr;
          gap: 35px; 
          margin-top: 80px; 
          width: 100%;
        }
        @media (min-width: 768px) { .SA_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .SA_Cap_Grid { grid-template-columns: repeat(4, 1fr); } }

        .SA_Cap_Card {
          background: white;
          padding: 55px 45px;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
          transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0,0,0,0.04);
          z-index: 1;
        }

        .SA_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);
          z-index: -1;
          transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .SA_Cap_Card:hover::before { height: 100%; }
        .SA_Cap_Card:hover h3, 
        .SA_Cap_Card:hover p,
        .SA_Cap_Card:hover .SA_Cap_Icon { color: #ffffff !important; }
        
        .SA_Cap_Icon { width: 70px; height: 70px; background: #eff6ff; color: #2563eb; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px; transition: 0.4s; }
        .SA_Cap_Card:hover .SA_Cap_Icon { background: rgba(255,255,255,0.1); }
        .SA_Cap_Card h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 20px; color: #0f172a; transition: 0.3s; letter-spacing: -0.01em;}
        .SA_Cap_Card p { color: #64748b; line-height: 1.7; font-size: 1rem; transition: 0.3s; font-weight: 450; }

        /* --- SECTION 3: OUTCOMES --- */
        .SA_Outcome { 
          padding: 50px 5%; 
          display: flex; 
          justify-content: center;
          background: white; 
        }
        .SA_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        
        .SA_Outcome_Content { flex: 1.2; text-align: left; }
        .SA_Outcome_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .SA_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 50px; box-shadow: 0 40px 100px rgba(0,0,0,0.15); border: 1px solid rgba(0,0,0,0.05); }
        @media (max-width: 1024px) {
          .SA_Outcome_Inner { flex-direction: column; text-align: center; gap: 60px; }
          .SA_Outcome_Img { order: -1; width: 100%; }
          .Outcome_Item { text-align: left; }
        }
        
        .Outcome_List { margin-top: 50px; }
        .Outcome_Item { display: flex; gap: 20px; margin-bottom: 35px; align-items: flex-start; }
        .Outcome_Check { background: #2563eb; color: white; border-radius: 12px; padding: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); }
        .Outcome_Title { font-weight: 800; color: #0f172a; display: block; font-size: 1.25rem; margin-bottom: 5px; letter-spacing: -0.01em; }
        .Outcome_Desc { color: #64748b; font-size: 1.05rem; line-height: 1.6; font-weight: 450; }

        /* --- SECTION 4: APPROACH --- */
        .SA_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .SA_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .SA_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 80px; 
          width: 100%;
        }
        @media (min-width: 768px) { .SA_Flow_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .SA_Flow_Grid { grid-template-columns: repeat(4, 1fr); } }

        .SA_Step_Card {
          background: white; border-radius: 30px; padding: 60px 40px; position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.04); border: 1px solid rgba(0,0,0,0.03); transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
        }
        .SA_Step_Card:hover { transform: translateY(-15px); box-shadow: 0 40px 80px rgba(0,0,0,0.08); border-color: #2563eb; }
        .SA_Step_Num { 
          position: absolute; top: -20px; left: 40px;
          background: #0f172a; color: white; padding: 6px 25px; border-radius: 100px; font-weight: 900; font-size: 0.85rem; letter-spacing: 1px;
        }
        .SA_Step_Icon { color: #2563eb; margin-bottom: 30px; }
        .SA_Step_H { font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 15px; letter-spacing: -0.01em;}
        .SA_Step_P { color: #64748b; font-size: 1rem; line-height: 1.7; font-weight: 450; }

        .SA_Trust {
          padding: 50px 5%; text-align: center; background: #0f172a; color: #fff; position: relative; overflow: hidden;
          display: flex; justify-content: center;
        }
        .SA_Trust_Inner {
          max-width: 1000px; width: 100%; position: relative; z-index: 10;
        }

        @media (max-width: 1024px) {
          .SA_Hero, .SA_Outcome { flex-direction: column; text-align: center; }
          .SA_Btn_Group { justify-content: center; }
        }
      `}),A.jsx("section",{className:"SA_Hero",children:A.jsxs("div",{className:"SA_Hero_Inner",children:[A.jsxs(t.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:1,ease:"easeOut"},className:"SA_Hero_Content",children:[A.jsx("span",{className:"SA_Badge",children:"Infrastructure Lifecycle"}),A.jsx("h2",{className:"SA_Hero_H1 NET_Hero_H1",children:"Elite Server Management"}),A.jsx("p",{className:"SA_Tagline",children:"Stabilizing Mission-Critical Environments With Precision Administration."}),A.jsx("p",{className:"SA_Hero_P",children:"CHN Technologies engineers resilient server frameworks designed for 99.9% availability, absolute security, and elastic global scalability. We manage the backbone so you can lead the business."}),A.jsx("div",{className:"SA_Btn_Group",children:A.jsx(c,{to:"/contact",children:A.jsxs("button",{className:"SA_Primary_Btn",children:["Consult an Architect ",A.jsx(Q,{size:20})]})})})]}),A.jsxs(t.div,{initial:{opacity:0,scale:.95,y:30},animate:{opacity:1,scale:1,y:0},transition:{duration:1.2,ease:"easeOut"},className:"SA_Hero_Img",children:[A.jsx("img",{src:aa,alt:"Server Infrastructure"}),A.jsxs(t.div,{initial:{opacity:0,x:-30,scale:.85,rotate:-2},animate:{opacity:1,x:0,scale:1,rotate:0,y:[0,-8,0]},transition:{duration:.6,delay:.8,ease:"easeOut",y:{repeat:1/0,duration:5,ease:"easeInOut"}},className:"SA_Hero_Floating_Card flex items-center gap-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-blue-100 relative overflow-hidden",children:[A.jsx(t.div,{animate:{x:["-100%","200%"]},transition:{repeat:1/0,duration:3,ease:"linear",delay:2},className:"absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -skew-x-12"}),A.jsxs("div",{className:"relative shrink-0",children:[A.jsx(t.div,{animate:{scale:[1,1.3,1],opacity:[.3,.1,.3]},transition:{repeat:1/0,duration:2},className:"absolute inset-0 bg-blue-500 rounded-full blur-lg"}),A.jsx("div",{className:"relative bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200",children:A.jsx(Y,{className:"text-white",size:24})})]}),A.jsxs("div",{children:[A.jsx("p",{className:"text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase",children:"Security Index"}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("p",{className:"text-lg font-black text-slate-800 tracking-tight",children:"Security & Reliability focused"}),A.jsx("div",{className:"h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center",children:A.jsx("div",{className:"h-1.5 w-1.5 bg-white rounded-full animate-pulse"})})]})]})]})]})]})}),A.jsx("section",{className:"SA_Cap_Section",children:A.jsxs("div",{className:"SA_Cap_Inner",children:[A.jsxs("div",{style:{marginBottom:"100px"},children:[A.jsx("span",{className:"SA_Badge",children:"Technical Authority"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Engineered for Reliability"}),A.jsx("p",{className:"SA_Hero_P",style:{fontSize:"1.25rem"},children:"Downtime isn't just a delay; it's a deficit. CHN Technologies replaces fragile legacy setups with audited server governance models designed for 99.999% uptime across hybrid ecosystems."})]}),A.jsx("div",{className:"SA_Cap_Grid",children:[{title:"Performance Optimization",icon:A.jsx(O,{size:32}),desc:"Fine-tuning kernel parameters, I/O scheduling, and resource allocation to squeeze maximum performance from your hardware."},{title:"Hybrid-Cloud Governance",icon:A.jsx(Ve,{size:32}),desc:"Seamless administration of on-premise iron and distributed cloud instances under a single, unified control plane."},{title:"Automated Continuity",icon:A.jsx(gA,{size:32}),desc:"Self-healing infrastructures with automated backup orchestration and zero-latency failover protocols."},{title:"Hardened Security",icon:A.jsx(M,{size:32}),desc:"Military-grade hardening of server OS, real-time threat detection, and continuous compliance auditing."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{delay:i*.1,duration:.8},viewport:{once:!0},className:"SA_Cap_Card",children:[A.jsx("div",{className:"SA_Cap_Icon",children:e.icon}),A.jsx("h3",{children:e.title}),A.jsx("p",{children:e.desc})]},i))})]})}),A.jsx("section",{className:"SA_Outcome",children:A.jsxs("div",{className:"SA_Outcome_Inner",children:[A.jsx(t.div,{initial:{opacity:0,x:-40},whileInView:{opacity:1,x:0},transition:{duration:1},viewport:{once:!0},className:"SA_Outcome_Img",children:A.jsx("img",{src:Ie,alt:"Technical Operations"})}),A.jsxs("div",{className:"SA_Outcome_Content",children:[A.jsx("span",{className:"SA_Badge",children:"Value Delivery"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Strategic Outcomes of Elite Management"}),A.jsx("div",{className:"Outcome_List",children:[{title:"Zero-Lag Operations",desc:"Optimised server stacks ensure application response times remain consistent even under peak transactional loads."},{title:"Immutable Data Integrity",desc:"Enterprise-grade redundancy and encryption ensure your most valuable data assets are never compromised or lost."},{title:"Predictable Cost Scaling",desc:"Optimized resource utilization reduces cloud sprawl and hardware waste, aligning IT spend with literal business value."},{title:"Future-Proof Stability",desc:"Infrastructures designed with modularity, allowing for rapid adoption of new technologies without technical debt."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},viewport:{once:!0},className:"Outcome_Item",children:[A.jsx("div",{className:"Outcome_Check",children:A.jsx(j,{size:22})}),A.jsxs("div",{children:[A.jsx("span",{className:"Outcome_Title",children:e.title}),A.jsx("p",{className:"Outcome_Desc",children:e.desc})]})]},i))})]})]})}),A.jsx("section",{className:"SA_Flow",children:A.jsxs("div",{className:"SA_Flow_Inner",children:[A.jsx("span",{className:"SA_Badge",children:"Operational Lifecycle"}),A.jsx("h2",{className:"NET_Hero_H1",children:"The CHN execution framework"}),A.jsx("div",{className:"SA_Flow_Grid",children:[{num:"PHASE 01",h:"Audit & Assess",icon:A.jsx(W,{size:35}),p:"A deep-dive analysis of your current iron and cloud footprint to identify bottlenecks and risk vectors."},{num:"PHASE 02",h:"Strategic Blueprint",icon:A.jsx(J,{size:35}),p:"Drafting an architecture that aligns specialized server roles with high-availability business requirements."},{num:"PHASE 03",h:"Active Hardening",icon:A.jsx(V,{size:35}),p:"Deploying the stack with full automation, security hardening, and performance fine-tuning."},{num:"PHASE 04",h:"Infinite Loop",icon:A.jsx(pA,{size:35}),p:"24/7 proactive orchestration, predictive maintenance, and continuous resource optimization."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{delay:i*.1,duration:.8},viewport:{once:!0},className:"SA_Step_Card",children:[A.jsx("div",{className:"SA_Step_Num",children:e.num}),A.jsx("div",{className:"SA_Step_Icon",children:e.icon}),A.jsx("h3",{className:"SA_Step_H",children:e.h}),A.jsx("p",{className:"SA_Step_P",children:e.p})]},i))})]})}),A.jsxs("section",{style:{padding:"50px 5%",textAlign:"center",background:"#0f172a",color:"#fff",position:"relative",overflow:"hidden"},children:[A.jsx("div",{style:{position:"absolute",inset:0,opacity:.1,backgroundImage:"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",backgroundSize:"40px 40px"}}),A.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:10},children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 text-white",children:"Ready for a More Reliable Server Infrastructure?"}),A.jsx("p",{className:"EUC_Hero_P",style:{margin:"30px auto 50px",color:"rgba(255,255,255,0.7)",fontSize:"1.3rem"},children:"Stop managing servers. Start scaling your business with infrastructure that thinks ahead."}),A.jsx("div",{className:"flex flex-col md:flex-row gap-6 justify-center items-center",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"SA_Primary_Btn",children:"Launch Security Audit"})})})]})})]})]}),na="/assets/camera_images-D4mvz105.jpg",ra=()=>A.jsxs("div",{className:"LCS_WRAPPER",children:[A.jsx("style",{children:`
        .LCS_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .LCS_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          min-height: 85vh;
        }

        .LCS_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          width: 100%;
          max-width: 1300px;
        }
        @media (max-width: 1024px) {
          .LCS_Hero { padding-top: 140px; }
          .LCS_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .LCS_Hero_Content { max-width: 100%; order: 1; }
          .LCS_Hero_Img { width: 100%; order: -1; margin-bottom: 40px; display: flex; justify-content: center; }
          .LCS_Hero_Img img { max-width: 400px; border-width: 10px; }
        }

        .LCS_Hero_Content { flex: 1.2; max-width: 650px; }
        .LCS_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .LCS_Hero_H1 { 
      
        margin-bottom: 15px;
         }
        .LCS_Tagline { font-size: 1.2rem; color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .LCS_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .LCS_Btn_Group { display: flex; gap: 20px; }
        @media (max-width: 1024px) { .LCS_Btn_Group { justify-content: center; } }

        .LCS_Primary_Btn { 
          background: #3b82f6; color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 600; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
          border: none; cursor: pointer;
        }
        .LCS_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .LCS_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .LCS_Hero_Img img { 
            width: 100%; 
            max-width: 550px; 
            border-radius: 40px; 
            border: 15px solid #fff; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
            object-fit: cover;
        }
        .LCS_Hero_Floating_Card {
          position: absolute; bottom: 30px; left: -30px;
          background: white; padding: 20px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 12px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }
        @media (max-width: 1024px) {
          .LCS_Hero_Floating_Card { display: none; }
        }

        /* --- SECTION 2: CAPABILITIES --- */
        .LCS_Cap_Section { 
          padding: 50px 5%; 
          background: #f8fafc; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .LCS_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .LCS_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .LCS_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .LCS_Cap_Grid { grid-template-columns: repeat(4, 1fr); } }

        .LCS_Cap_Card {
          background: white;
          padding: 45px 35px;
          border-radius: 30px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e2e8f0;
          z-index: 1;
        }

        .LCS_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);
          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .LCS_Cap_Card:hover::before { height: 100%; }
        .LCS_Cap_Card:hover h3, 
        .LCS_Cap_Card:hover p,
        .LCS_Cap_Card:hover .LCS_Cap_Icon { color: #ffffff !important; }
        
        .LCS_Cap_Icon { width: 60px; height: 60px; background: #eff6ff; color: #3b82f6; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; transition: 0.3s; }
        .LCS_Cap_Card:hover .LCS_Cap_Icon { background: rgba(255,255,255,0.1); }
        .LCS_Cap_Card h3 { font-size: 1.3rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .LCS_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        /* --- SECTION 3: OUTCOMES --- */
        .LCS_Outcome { 
          padding: 100px 5%; 
          display: flex; 
          justify-content: center;
          background: white;
        }
        .LCS_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        
        .LCS_Outcome_Content { flex: 1.2; text-align: left; }
        .LCS_Outcome_Img { flex: 1; display: flex; justify-content: center; }
        .LCS_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        @media (max-width: 1024px) {
          .LCS_Outcome_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .LCS_Outcome_Img { order: -1; width: 100%; }
          .Outcome_Item { text-align: left; }
        }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
        .Outcome_Check { background: #3b82f6; color: white; border-radius: 50%; padding: 4px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; margin-bottom: 2px;}
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- SECTION 4: APPROACH --- */
        .LCS_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .LCS_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        
        .LCS_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .LCS_Flow_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .LCS_Flow_Grid { grid-template-columns: repeat(4, 1fr); } }

        .LCS_Step_Card {
          background: white; border-radius: 20px; padding: 50px 30px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; transition: 0.4s;
          display: flex;
  flex-direction: column;
  align-items: center; /* Centers items horizontally */
  text-align: center;    /* Centers text */
        }
          

.LCS_Step_Icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  color: #0060ff; /* Matches your brand blue */
}
        .LCS_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .LCS_Step_Num { 
          position: absolute; top: -15px; left: 30px;
          background: #22314f; color: white; padding: 5px 20px; border-radius: 50px; font-weight: 900; font-size: 0.8rem;
        }
        // .LCS_Step_Icon { color: #3b82f6; margin-bottom: 20px;}
        .LCS_Step_H {
         font-size: 1.25rem; font-weight: 800; 
         color: #22314f;
         text-align:center;
          margin-bottom: 12px; }
        .LCS_Step_P { color: #64748b; text-align:center; font-size: 0.95rem; line-height: 1.6; }

        .LCS_Trust {
          padding: 140px 5%; text-align: center; background: #22314f; color: #fff;
          display: flex; justify-content: center;
        }
        .LCS_Trust_Inner {
          max-width: 900px; width: 100%;
        }

        @media (max-width: 1024px) {
          .LCS_Hero, .LCS_Outcome { flex-direction: column; text-align: center; }
          .LCS_Btn_Group { justify-content: center; }
        }

        .LAN_Badge{
         color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: inline-block;
          background: rgba(59, 130, 246, 0.06); padding: 6px 16px; border-radius: 100px;
        }
      `}),A.jsx("section",{className:"LCS_Hero",children:A.jsxs("div",{className:"LCS_Hero_Inner",children:[A.jsxs(t.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.8},className:"LCS_Hero_Content",children:[A.jsx("div",{className:"LAN_Badge",children:"Physical Infrastructure"}),A.jsx("h2",{className:"LCS_Hero_H1",children:"LAN Cabling & Surveillance"}),A.jsx("p",{className:"LCS_Tagline",children:"Structured Cabling and Intelligent Surveillance Systems Built for Secure and Reliable Operations."}),A.jsx("p",{className:"LCS_Hero_P",children:"CHN Technologies delivers professional LAN cabling and surveillance solutions that support stable connectivity, visibility, and physical security across business environments. Our services ensure organised infrastructure and long-term reliability."}),A.jsx("div",{className:"LCS_Btn_Group",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"LCS_Primary_Btn",children:"Talk to an Infrastructure Specialist"})})})]}),A.jsxs(t.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:1},className:"LCS_Hero_Img",children:[A.jsx("img",{src:na,alt:"Structured LAN Cabling"}),A.jsxs(t.div,{initial:{opacity:0,x:-20,scale:.9},animate:{opacity:1,x:0,scale:1,y:[0,-10,0]},transition:{duration:.8,delay:.5,y:{repeat:1/0,duration:4,ease:"easeInOut"}},className:"LCS_Hero_Floating_Card bg-white/90 backdrop-blur-md",children:[A.jsx("div",{className:"bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200 shrink-0",children:A.jsx(M,{className:"text-white",size:24})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase",children:"Quality Standards"}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("p",{className:"text-lg font-black text-slate-800 tracking-tight",children:"CERTIFIED L1"}),A.jsx("div",{className:"h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center",children:A.jsx("div",{className:"h-1.5 w-1.5 bg-white rounded-full animate-pulse"})})]})]})]})]})]})}),A.jsx("section",{className:"LCS_Cap_Section",children:A.jsxs("div",{className:"LCS_Cap_Inner",children:[A.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto 60px"},children:[A.jsx("h2",{className:"NET_Hero_H1",children:"Physical Infrastructure Plays a Critical Role"}),A.jsx("p",{className:"LCS_Hero_P",children:"Network performance and security depend heavily on physical infrastructure quality. Poor cabling and unstructured surveillance lead to connectivity issues and security blind spots. We help implement systems that support dependable operations and scalability."})]}),A.jsx("span",{className:"LCS_Badge",children:"Core Capabilities"}),A.jsx("h2",{className:"NET_Hero_H1",children:"What Our Services Cover"}),A.jsx("div",{className:"LCS_Cap_Grid",children:[{title:"Structured LAN Cabling",icon:A.jsx(bA,{size:28}),desc:"Design and implementation of organised cabling frameworks for high-speed data and network connectivity."},{title:"Rack & Patch Management",icon:A.jsx(MA,{size:28}),desc:"Clean and standardised rack layouts that simplify ongoing maintenance and future hardware expansion."},{title:"CCTV & Surveillance",icon:A.jsx(Ze,{size:28}),desc:"Deployment of intelligent surveillance systems to monitor facilities and enhance physical premises security."},{title:"Monitoring & Support",icon:A.jsx(O,{size:28}),desc:"Ongoing support to ensure cabling integrity and the continuous reliability of surveillance hardware."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},className:"LCS_Cap_Card",children:[A.jsx("div",{className:"LCS_Cap_Icon",children:e.icon}),A.jsx("h3",{children:e.title}),A.jsx("p",{children:e.desc})]},i))})]})}),A.jsx("section",{className:"LCS_Outcome",children:A.jsxs("div",{className:"LCS_Outcome_Inner",children:[A.jsx("div",{className:"LCS_Outcome_Img",children:A.jsx("img",{src:Be,alt:"Surveillance Monitoring Center"})}),A.jsxs("div",{className:"LCS_Outcome_Content",children:[A.jsx("span",{className:"LCS_Badge",children:"Operational Outcomes"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Benefits of Structured Physical Infrastructure"}),A.jsx("div",{className:"Outcome_List",children:[{title:"Improved Connectivity Stability",desc:"Reliable physical infrastructure significantly reduces network interruptions and drops."},{title:"Enhanced Facility Security",desc:"Clear visibility across your premises improves safety and enables rapid incident response."},{title:"Simplified Maintenance",desc:"Structured layouts reduce troubleshooting time and prevent operational disruptions."},{title:"Infrastructure Scalability",desc:"Cabling and surveillance systems designed to grow seamlessly with your business needs."}].map((e,i)=>A.jsxs("div",{className:"Outcome_Item",children:[A.jsx("div",{className:"Outcome_Check",children:A.jsx(j,{size:16})}),A.jsxs("div",{children:[A.jsx("span",{className:"Outcome_Title",children:e.title}),A.jsx("p",{className:"Outcome_Desc",children:e.desc})]})]},i))})]})]})}),A.jsx("section",{className:"LCS_Flow",children:A.jsxs("div",{className:"LCS_Flow_Inner",children:[A.jsx("span",{className:"LCS_Badge",children:"Delivery Model"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Our Delivery Approach"}),A.jsx("div",{className:"LCS_Flow_Grid",children:[{num:"01",h:"Assess",icon:A.jsx(W,{size:30}),p:"Review site layout, physical infrastructure requirements, and security objectives."},{num:"02",h:"Design",icon:A.jsx(J,{size:30}),p:"Create structured cabling plans and surveillance layouts aligned with needs."},{num:"03",h:"Implement",icon:A.jsx(V,{size:30}),p:"Install cabling and surveillance systems with minimal business disruption."},{num:"04",h:"Test & Support",icon:A.jsx(Xe,{size:30}),p:"Validate performance and provide ongoing professional maintenance support."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},className:"LCS_Step_Card flex flex-col items-center text-center",children:[A.jsxs("div",{className:"LCS_Step_Num",children:["STAGE ",e.num]}),A.jsx("div",{className:"LCS_Step_Icon flex justify-center items-center w-full mb-4",children:e.icon}),A.jsx("h3",{className:"LCS_Step_H font-bold text-[#1a2840]",children:e.h}),A.jsx("p",{className:"LCS_Step_P",children:e.p})]},i))})]})}),A.jsxs("section",{style:{padding:"50px 5%",textAlign:"center",background:"#0f172a",color:"#fff",position:"relative",overflow:"hidden"},children:[A.jsx("div",{style:{position:"absolute",inset:0,opacity:.1,backgroundImage:"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",backgroundSize:"40px 40px"}}),A.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:10},children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 text-white",children:"Build a Strong Physical Foundation"}),A.jsx("p",{className:"EUC_Hero_P",style:{margin:"30px auto 50px",color:"rgba(255,255,255,0.7)",fontSize:"1.3rem"},children:"Connect with CHN Technologies to understand how structured cabling and surveillance solutions can support secure, reliable, and scalable business environments. Built for order, visibility, and control."}),A.jsx("div",{className:"flex flex-col md:flex-row gap-6 justify-center items-center",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"LCS_Primary_Btn",style:{background:"#3b82f6",color:"#fff"},children:"Request a Consultation"})})})]})})]})]}),oa="/assets/workspace_laptop-DvajdVMb.png",la=()=>{const e={initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"}},i=[{title:"Business Website Design",desc:"Design of professional, brand-aligned websites that clearly communicate offerings and value propositions.",icon:A.jsx(PA,{size:24})},{title:"Custom Web Development",desc:"Development of scalable, secure, and maintainable web applications tailored to business needs.",icon:A.jsx(me,{size:24})},{title:"Responsive & Mobile-First",desc:"Web experiences optimised for performance and usability across all devices and screen sizes.",icon:A.jsx(he,{size:24})},{title:"CMS Implementation",desc:"Structured Content Management Systems for easy updates, allowing you full control over your digital narrative.",icon:A.jsx(V,{size:24})},{title:"Performance & Security",desc:"Rigorous optimisation of site speed, security controls, and technical stability to ensure long-term value.",icon:A.jsx(Y,{size:24})}];return A.jsxs("div",{className:"bg-white font-sans text-slate-900 overflow-x-hidden",children:[A.jsx("style",{children:`
        .web-gradient-bg {
          background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.08), transparent 40%),
                      radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.05), transparent 40%);
        }
        .card-hover-effect {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover-effect:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.15);
        }

        .WD_Step_H{
        font-size: 1.3rem;
    font-weight: 800;
    color: #22314f;
    color: #22314f;
    margin-bottom: 12px;
        }

        .WD_Marquee_Container {
          width: 100%;
          overflow: hidden;
          padding: 20px 0 60px;
        }
        .WD_Marquee_Track {
          display: flex;
          gap: 30px;
          width: fit-content;
          animation: WD_Scroll 50s linear infinite;
        }
        .WD_Marquee_Track:hover {
          animation-play-state: paused;
        }
        @keyframes WD_Scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 15px)); }
        }
        .WD_Card {
          min-width: 320px;
          max-width: 320px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }
        .WD_Card_Title {
          height: 4.5rem;
          display: flex;
          align-items: flex-start;
        }
      `}),A.jsx("section",{className:"relative web-gradient-bg pt-24 pb-20 lg:pt-32 lg:pb-40",children:A.jsxs("div",{className:"container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16",children:[A.jsxs(t.div,{className:"lg:w-1/2",initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.8},children:[A.jsx("div",{className:"flex items-center gap-3 mb-6",children:A.jsx("span",{className:"px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest border border-blue-100 uppercase",children:"Design & Development"})}),A.jsx("h2",{className:"font-black mb-4 leading-[1.1] text-slate-900 tracking-tight",children:"Web Design & Development"}),A.jsxs("p",{className:"font-bold text-slate-800 mb-6 flex items-center gap-2 subtitle",children:[A.jsx(U,{size:24,className:"text-blue-600"}),"Built for Performance, Scale, and Results"]}),A.jsx("p",{className:"text-slate-600 mb-10 leading-relaxed max-w-xl",children:"CHN Technologies delivers professional web design and development services focused on usability, performance, and long-term maintainability. Our solutions support business objectives and digital growth."}),A.jsx("div",{className:"flex flex-col sm:flex-row gap-5",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-2xl shadow-blue-200 transition-all transform hover:-translate-y-1 active:scale-95",children:"Start Your Project"})})})]}),A.jsx(t.div,{className:"lg:w-1/2 relative",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.2},children:A.jsxs("div",{className:"relative z-10",children:[A.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[2.5rem] blur opacity-20"}),A.jsx("img",{src:oa,alt:"Web Development Workspace",className:"relative rounded-[2rem] shadow-2xl border-[12px] border-white object-cover w-full h-[400px] lg:h-[550px]"}),A.jsx(t.div,{animate:{y:[0,-15,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},className:"absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden xl:block",children:A.jsxs("div",{className:"flex items-center gap-4",children:[A.jsx("div",{className:"w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center",children:A.jsx($e,{size:24})}),A.jsxs("div",{children:[A.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[A.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500"}),A.jsx("p",{className:"text-xs text-slate-500 font-bold tracking-wider",children:"Performance"})]}),A.jsx("p",{className:"text-xl font-black text-slate-900",children:"99+ Score"})]})]})})]})})]})}),A.jsxs("section",{className:"py-24 bg-slate-900 text-white relative overflow-hidden",children:[A.jsx("div",{className:"absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/2"}),A.jsx("div",{className:"container mx-auto px-6 relative z-10",children:A.jsxs(t.div,{className:"max-w-4xl mx-auto text-center",...e,children:[A.jsxs("div",{className:"text-left",children:[A.jsx("span",{className:"text-blue-400 font-black tracking-[0.3em] text-sm mb-6 block uppercase text-center",children:"Strategic Impact"}),A.jsx("h2",{className:"NET_Hero_H1 text-white text-center",children:"Scale Beyond Aesthetics"})]}),A.jsx("div",{className:"w-20 h-1 bg-blue-600 mx-auto mb-10"}),A.jsx("p",{className:"text-slate-400 leading-relaxed mb-8 subtitle",children:"A website often forms the first point of interaction between a business and its customers. Poorly designed or unstructured websites can affect credibility, user experience, and conversion potential."}),A.jsx("p",{className:"text-slate-200 font-medium border-t border-slate-800 pt-10 max-w-2xl mx-auto",children:"CHN Technologies helps organisations develop web platforms that align with business goals, support user journeys, and adapt to evolving digital requirements."})]})})]}),A.jsxs("section",{className:"py-20 bg-slate-50 overflow-hidden",children:[A.jsx("div",{className:"container mx-auto px-6 mb-16",children:A.jsxs("div",{className:"text-center",children:[A.jsx("h2",{className:"NET_Hero_H1 text-slate-900",children:"What Our Web Services Cover"}),A.jsx("div",{className:"h-2 w-24 bg-blue-600 mx-auto mt-6 rounded-full"})]})}),A.jsx("div",{className:"WD_Marquee_Container",children:A.jsx("div",{className:"WD_Marquee_Track",children:[...i,...i].map((s,n)=>A.jsxs(t.div,{className:"WD_Card p-10 border border-slate-200 rounded-[2.5rem] bg-white card-hover-effect group flex flex-col",...e,transition:{delay:n%i.length*.1},children:[A.jsx("div",{className:"w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-6 shadow-sm shrink-0",children:s.icon}),A.jsx("div",{className:"WD_Card_Title mb-2",children:A.jsx("h3",{className:"text-xl font-black text-slate-900 leading-tight tracking-tight",children:s.title})}),A.jsx("p",{className:"text-slate-500 text-sm leading-relaxed min-h-[4.5rem]",children:s.desc})]},n))})})]}),A.jsx("section",{className:"py-12 bg-white relative",children:A.jsx("div",{className:"container mx-auto px-6",children:A.jsxs("div",{className:"flex flex-col lg:flex-row gap-20 items-center max-w-7xl mx-auto",children:[A.jsxs(t.div,{className:"lg:w-1/2",...e,children:[A.jsxs("div",{className:"text-center mb-16",children:[A.jsx("span",{className:"text-blue-600 font-bold tracking-widest text-sm mb-4 block uppercase",children:"Measurable Results"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Business Outcomes"})]}),A.jsx("div",{className:"grid gap-8",children:[{label:"Stronger Brand Credibility",text:"Well-designed websites reinforce professionalism and trust.",icon:A.jsx(j,{size:16})},{label:"Improved User Engagement",text:"Clear navigation and intuitive interfaces support better user interaction.",icon:A.jsx(j,{size:16})},{label:"Higher Conversion Potential",text:"Structured layouts and content flows support lead generation and enquiries.",icon:A.jsx(j,{size:16})},{label:"Scalable Digital Foundation",text:"Web platforms designed to evolve with business growth and digital initiatives.",icon:A.jsx(j,{size:16})}].map((s,n)=>A.jsxs("div",{className:"flex gap-6 items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors",children:[A.jsx("div",{className:"bg-blue-600 text-white rounded-full p-1 flex items-center justify-center shrink-0 w-7 h-7 mt-1",children:s.icon}),A.jsxs("div",{children:[A.jsx("h4",{className:"font-black text-slate-900 text-lg mb-2",children:s.label}),A.jsx("p",{className:"text-slate-600 leading-relaxed",children:s.text})]})]},n))})]}),A.jsxs(t.div,{className:"lg:w-1/2 relative",initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[A.jsx("div",{className:"absolute -inset-4 bg-blue-600 rounded-[3rem] rotate-3 opacity-5"}),A.jsx("img",{src:Ie,className:"relative rounded-[2.5rem] shadow-3xl z-10 w-full h-[600px] object-cover",alt:"Business Growth Illustration"})]})]})})}),A.jsx("section",{className:"py-24 bg-[#fafafc] overflow-hidden relative",children:A.jsxs("div",{className:"container mx-auto px-6",children:[A.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[A.jsx("span",{className:"text-blue-600 font-bold tracking-[0.1em] mb-4 block text-sm uppercase",children:"How We Design & Develop Web Platforms"}),A.jsx("h2",{className:"NET_Hero_H1 mb-16",children:"The Web Design Lifecycle"})]}),A.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-7xl mx-auto text-left",children:[{step:"01",label:"Discover & Assess",icon:A.jsx(W,{size:36,strokeWidth:1.5}),desc:"Understand business objectives, audience expectations, and existing digital assets."},{step:"02",label:"Design & Structure",icon:A.jsx(J,{size:36,strokeWidth:1.5}),desc:"Create user-focused designs, information architecture, and visual systems."},{step:"03",label:"Develop & Integrate",icon:A.jsx(V,{size:36,strokeWidth:1.5}),desc:"Build secure, scalable web platforms and integrate required functionalities."},{step:"04",label:"Test, Launch & Support",icon:A.jsx(O,{size:36,strokeWidth:1.5}),desc:"Thorough testing, deployment, and ongoing optimisation support."}].map((s,n)=>A.jsxs(t.div,{className:"relative bg-white p-10 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group z-10 flex flex-col h-full",...e,transition:{delay:n*.1},children:[A.jsxs("div",{className:"absolute -top-3 left-8 bg-[#1e293b] text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-wider shadow-lg",children:["Phase ",n+1]}),A.jsx("div",{className:"text-blue-600 mb-8 transition-transform duration-500 group-hover:scale-110",children:s.icon}),A.jsx("div",{className:"h-[3.5rem] flex items-start mb-2",children:A.jsx("h3",{className:"WD_Step_H",style:{marginBottom:0},children:s.label})}),A.jsx("p",{className:"text-slate-500 text-sm leading-relaxed",children:s.desc})]},n))})]})}),A.jsxs("section",{style:{padding:"50px 5%",textAlign:"center",background:"#0f172a",color:"#fff",position:"relative",overflow:"hidden"},children:[A.jsx("div",{style:{position:"absolute",inset:0,opacity:.1,backgroundImage:"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",backgroundSize:"40px 40px"}}),A.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:10},children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 text-white",children:"Build a Website That Works for Your Business"}),A.jsx("p",{className:"EUC_Hero_P",style:{margin:"30px auto 50px",color:"rgba(255,255,255,0.7)",fontSize:"1.3rem"},children:"Connect with CHN Technologies to understand how structured web design and development solutions can support brand growth, user engagement, and business objectives."}),A.jsx("div",{className:"flex flex-col md:flex-row gap-6 justify-center items-center",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{style:{background:"#3b82f6",color:"#fff",padding:"10px 20px",borderRadius:"100px",fontWeight:800,fontSize:"1.05rem",border:"none",cursor:"pointer",boxShadow:"0 20px 40px rgba(37, 99, 235, 0.25)",transition:"all 0.4s",display:"inline-flex",alignItems:"center",gap:"10px"},children:"Get Your Free Consultation"})})})]})})]})]})},ca="/assets/application_development_hero-D8XErBKM.png",da="/assets/appdev-team-2Vab-XXK.jpg",pa=()=>A.jsxs("div",{className:"AD_WRAPPER",children:[A.jsx("style",{children:`
        .AD_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .AD_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          min-height: 85vh;
        }

        .AD_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          width: 100%;
          max-width: 1300px;
        }
        @media (max-width: 1024px) {
          .AD_Hero { padding-top: 140px; }
          .AD_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .AD_Hero_Content { max-width: 100%; }
          .AD_Hero_Img { width: 100%; order: -1; margin-bottom: 40px; display: flex; justify-content: center; }
          .AD_Hero_Img img { max-width: 400px; border-width: 10px; }
        }

        .AD_Hero_Content { flex: 1.2; max-width: 650px; }
        .AD_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .AD_Hero_H1 {
         margin-bottom: 5px; }
        .AD_Tagline { font-size: 1.4rem; color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .AD_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .AD_Btn_Group { display: flex; gap: 20px; }
        @media (max-width: 1024px) { .AD_Btn_Group { justify-content: center; } }
        .AD_Primary_Btn { 
          background: #3b82f6; color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 600; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
          border: none; cursor: pointer;
        }
        .AD_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .AD_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .AD_Hero_Img img { 
            width: 100%; 
            max-width: 550px; 
            border-radius: 40px; 
            border: 15px solid #fff; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
            object-fit: cover;
        }
        .AD_Hero_Floating_Card {
          position: absolute; bottom: 30px; left: -30px;
          background: white; padding: 20px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 12px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }
        @media (max-width: 1024px) {
          .AD_Hero_Floating_Card { display: none; }
        }

        /* --- SECTION 2: CONTEXT --- */
        .AD_Context { 
          padding: 100px 5%; 
          background: #0f172a; 
          color: #fff; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .AD_Context_Inner {
          width: 100%;
          max-width: 1000px;
        }
        .AD_Context_H1 { font-weight: 900; margin-bottom: 30px; color: #fff; }
        .AD_Context_P { color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; }

        /* --- SECTION 3: CAPABILITIES --- */
        .AD_Cap_Section { 
          padding: 100px 5%; 
          background: #f8fafc; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .AD_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .AD_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 20px; 
          margin-top: 60px; 
          width: 100%;
        }

        .AD_Cap_Card {
          background: white;
          padding: 30px 20px;
          border-radius: 20px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e2e8f0;
          z-index: 1;
        }

        .AD_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .AD_Cap_Card:hover::before { height: 100%; }
        .AD_Cap_Card:hover h3, 
        .AD_Cap_Card:hover p,
        .AD_Cap_Card:hover .AD_Cap_Icon { color: #ffffff !important; }
        
        .AD_Cap_Icon { width: 50px; height: 50px; background: #eff6ff; color: #3b82f6; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; transition: 0.3s; }
        .AD_Cap_Card:hover .AD_Cap_Icon { background: rgba(255,255,255,0.1); }
        .AD_Cap_Card h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .AD_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        @media (min-width: 640px) {
          .AD_Cap_Grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
        }
        @media (min-width: 1024px) {
          .AD_Cap_Grid { grid-template-columns: repeat(5, 1fr); gap: 30px; }
          .AD_Cap_Card { padding: 45px 35px; border-radius: 30px; }
          .AD_Cap_Icon { width: 60px; height: 60px; border-radius: 16px; margin-bottom: 25px; }
          .AD_Cap_Icon svg { width: 28px; height: 28px; }
          .AD_Cap_Card h3 { font-size: 1.4rem; margin-bottom: 15px; }
          .AD_Cap_Card p { font-size: 0.95rem; line-height: 1.6; }
        }

        /* --- SECTION 4: OUTCOMES --- */
        .AD_Outcome { 
          padding: 100px 5%; 
          display: flex; 
          justify-content: center;
          background: white;
        }
        .AD_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        .AD_Outcome_Content { flex: 1.2; text-align: left; }
        .AD_Outcome_Img { flex: 1; display: flex; justify-content: center; }
        .AD_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        @media (max-width: 1024px) {
          .AD_Outcome_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .AD_Outcome_Img { order: -1; width: 100%; }
          .Outcome_Item { text-align: left; }
        }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
        .Outcome_Check { background: #10b981; color: white; border-radius: 50%; padding: 4px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; margin-bottom: 2px;}
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- SECTION 5: APPROACH --- */
        .AD_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .AD_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .AD_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 20px; 
          margin-top: 60px; 
          width: 100%;
        }
        .AD_Step_Card {
          background: white; border-radius: 20px; padding: 40px 20px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; transition: 0.4s;
          text-align: left;
        }
        .AD_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .AD_Step_Num { 
          position: absolute; top: -15px; left: 30px;
          background: #22314f; color: white; padding: 5px 20px; border-radius: 50px; font-weight: 900; font-size: 0.8rem; white-space: nowrap;
        }
        .AD_Step_Icon { color: #3b82f6; margin-bottom: 20px; }
        .AD_Step_H { font-size: 1.3rem; font-weight: 800; color: #22314f; margin-bottom: 12px; }
        .AD_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; }

        @media (min-width: 640px) {
          .AD_Flow_Grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (min-width: 1024px) {
          .AD_Flow_Grid { grid-template-columns: repeat(4, 1fr); gap: 30px; }
          .AD_Step_Card { padding: 50px 30px; border-radius: 20px; }
          .AD_Step_Icon svg { width: 30px; height: 30px; }
        }


        
        .AD_Trust {
          padding: 50px 5%; text-align: center; background: #22314f; color: #fff;
          display: flex; justify-content: center;
        }
        .AD_Trust_Inner { max-width: 900px; width: 100%; }

        @media (max-width: 1024px) {
          .AD_Hero, .AD_Outcome { flex-direction: column; text-align: center; }
          .AD_Btn_Group { justify-content: center; }
        }
      `}),A.jsx("section",{className:"AD_Hero",children:A.jsxs("div",{className:"AD_Hero_Inner",children:[A.jsxs(t.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.8},className:"AD_Hero_Content",children:[A.jsx("div",{className:"flex items-center gap-3 mb-6",children:A.jsx("span",{className:"px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100",children:"Application Development"})}),A.jsx("h2",{className:"AD_Hero_H1 NET_Hero_H1",children:"Application Development"}),A.jsxs("p",{className:"font-bold text-slate-800 mb-6 flex items-center gap-2 subtitle",style:{fontSize:"1.4rem",color:"#3b82f6"},children:[A.jsx(U,{size:24,className:"text-blue-600"}),"Custom Software Built for Scale and Efficiency"]}),A.jsx("p",{className:"AD_Hero_P",children:"CHN Technologies delivers professional application development services focused on performance, security, and scalability. Our software solutions support mission-critical workflows and organisational growth through structured engineering."}),A.jsx("div",{className:"AD_Btn_Group",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"AD_Primary_Btn",children:"Start Your Application Project"})})})]}),A.jsxs(t.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:1},className:"AD_Hero_Img",children:[A.jsx("img",{src:ca,alt:"Premium Application Development Architecture"}),A.jsxs(t.div,{initial:{opacity:0,x:-20,scale:.9},animate:{opacity:1,x:0,scale:1,y:[0,-10,0]},transition:{duration:.8,delay:.5,y:{repeat:1/0,duration:4,ease:"easeInOut"}},className:"AD_Hero_Floating_Card bg-white/90 backdrop-blur-md",children:[A.jsx("div",{className:"bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200 shrink-0",children:A.jsx(me,{className:"text-white",size:24})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase",children:"Architecture Score"}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("p",{className:"text-lg font-black text-slate-800 tracking-tight",children:"HIGH PERFORMANCE"}),A.jsx("div",{className:"h-4 w-4 bg-green-500 rounded-full flex items-center justify-center",children:A.jsx("div",{className:"h-1.5 w-1.5 bg-white rounded-full animate-pulse"})})]})]})]})]})]})}),A.jsx("section",{className:"AD_Context",children:A.jsx("div",{className:"AD_Context_Inner",children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 AD_Context_H1",children:"Applications Are Core to Business Operations"}),A.jsx("p",{className:"AD_Context_P",children:"Modern organisations rely on applications to manage processes, data, and customer interactions. Off-the-shelf tools often fail to align fully with unique workflows, leading to inefficiencies and limitations. CHN Technologies helps organisations design and develop custom applications that fit operational needs, improve productivity, and support digital transformation initiatives with clarity and control."})]})})}),A.jsx("section",{className:"AD_Cap_Section",children:A.jsxs("div",{className:"AD_Cap_Inner",children:[A.jsx("span",{className:"AD_Badge",children:"Core Capabilities"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Our Application Development Services Cover"}),A.jsx("div",{className:"AD_Cap_Grid",children:[{title:"Custom Business Apps",icon:A.jsx(At,{size:28}),desc:"Design and development of applications tailored to specific operational and business requirements."},{title:"Enterprise Solutions",icon:A.jsx(et,{size:28}),desc:"Development of scalable applications that support complex workflows and multi-user environments."},{title:"System Integration & APIs",icon:A.jsx(tt,{size:28}),desc:"Integration of applications with existing systems, databases, and third-party platforms."},{title:"Application Modernisation",icon:A.jsx(gA,{size:28}),desc:"Enhancement or re-engineering of legacy applications to improve performance and usability."},{title:"Testing & Quality Assurance",icon:A.jsx(Y,{size:28}),desc:"Structured testing to ensure reliability, security, and functional accuracy across all units."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},className:"AD_Cap_Card",children:[A.jsx("div",{className:"AD_Cap_Icon",children:e.icon}),A.jsx("h3",{children:e.title}),A.jsx("p",{children:e.desc})]},i))})]})}),A.jsx("section",{className:"AD_Outcome",children:A.jsxs("div",{className:"AD_Outcome_Inner",children:[A.jsx("div",{className:"AD_Outcome_Img",children:A.jsx("img",{src:da,alt:"Software Development Team"})}),A.jsxs("div",{className:"AD_Outcome_Content",children:[A.jsx("span",{className:"AD_Badge",children:"Business Benefits"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Benefits of Structured Application Development"}),A.jsx("div",{className:"Outcome_List",children:[{title:"Operational Efficiency",desc:"Applications designed around workflows reduce manual effort and process gaps."},{title:"Improved Data Accuracy",desc:"Centralised applications ensure consistent data handling and reporting."},{title:"Scalable Digital Capabilities",desc:"Applications that grow with business needs and system complexity."},{title:"Long-Term Cost Effectiveness",desc:"Well-architected applications reduce maintenance and rework costs."}].map((e,i)=>A.jsxs("div",{className:"Outcome_Item",children:[A.jsx("div",{className:"Outcome_Check",children:A.jsx(j,{size:16})}),A.jsxs("div",{children:[A.jsx("span",{className:"Outcome_Title",children:e.title}),A.jsx("p",{className:"Outcome_Desc",children:e.desc})]})]},i))})]})]})}),A.jsx("section",{className:"AD_Flow",children:A.jsxs("div",{className:"AD_Flow_Inner",children:[A.jsx("span",{className:"AD_Badge",children:"Strategic Approach"}),A.jsx("h2",{className:"NET_Hero_H1",children:"How We Build Applications"}),A.jsx("div",{className:"AD_Flow_Grid",children:[{num:"01",h:"Discover & Assess",icon:A.jsx(W,{size:30}),p:"Understand business processes, technical requirements, and integration needs."},{num:"02",h:"Design & Architect",icon:A.jsx(J,{size:30}),p:"Define application architecture, data models, and user flows."},{num:"03",h:"Develop & Integrate",icon:A.jsx(V,{size:30}),p:"Build secure applications and integrate with required systems and services."},{num:"04",h:"Test & Deploy",icon:A.jsx(O,{size:30}),p:"Comprehensive testing, deployment, and ongoing optimisation support."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},className:"AD_Step_Card",children:[A.jsxs("div",{className:"AD_Step_Num",children:["STAGE ",e.num]}),A.jsx("div",{className:"AD_Step_Icon",children:e.icon}),A.jsx("h3",{className:"AD_Step_H",children:e.h}),A.jsx("p",{className:"AD_Step_P",children:e.p})]},i))})]})}),A.jsx("section",{className:"AD_Trust",children:A.jsxs("div",{className:"AD_Trust_Inner",children:[A.jsx("h2",{className:"NET_Hero_H1 text-white",children:"Build Applications That Support Your Business"}),A.jsx("p",{className:"AD_Hero_P",style:{margin:"20px auto 40px",color:"rgba(255,255,255,0.7)"},children:"Connect with CHN Technologies to understand how structured application development solutions can support operational efficiency and digital growth."}),A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"AD_Primary_Btn",style:{background:"#3b82f6",color:"#fff"},children:"Request a Consultation"})})]})})]}),ga="/assets/trading_analytics_hero-C1Pz7d35.png",xa=()=>A.jsxs("div",{className:"DA_WRAPPER",children:[A.jsx("style",{children:`
        .DA_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .DA_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          min-height: 85vh;
        }

        .DA_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          width: 100%;
          max-width: 1300px;
        }
        @media (max-width: 1024px) {
          .DA_Hero { padding-top: 140px; }
          .DA_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .DA_Hero_Content { max-width: 100%; }
          .DA_Hero_Img { width: 100%; order: -1; margin-bottom: 40px; display: flex; justify-content: center; }
          .DA_Hero_Img img { max-width: 400px; border-width: 10px; }
        }

        .DA_Hero_Content { flex: 1.2; max-width: 650px; }
        .DA_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .DA_Hero_H1 { 
         margin-bottom: 15px; }
        .DA_Tagline { font-size: clamp(1.1rem, 2vw, 1.4rem); color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .DA_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .DA_Btn_Group { display: flex; gap: 20px; }
        @media (max-width: 1024px) { .DA_Btn_Group { justify-content: center; } }
        .DA_Primary_Btn { 
          background: #3b82f6; color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 600; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
          border: none; cursor: pointer;
        }
        .DA_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .DA_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .DA_Hero_Img img { 
            width: 100%; 
            max-width: 550px; 
            border-radius: 40px; 
            border: 15px solid #fff; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
            object-fit: cover;
        }
        .DA_Hero_Floating_Card {
          position: absolute; bottom: 30px; left: -30px;
          background: white; padding: 20px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 12px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }
        @media (max-width: 1024px) {
          .DA_Hero_Floating_Card { display: none; }
        }

        /* --- SECTION 2: CONTEXT --- */
        .DA_Context { 
          padding: 100px 5%; 
          background: #0f172a; 
          color: #fff; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .DA_Context_Inner {
          width: 100%;
          max-width: 1000px;
        }
        .DA_Context_H1 { color: #fff; }
        .DA_Context_P { color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; }

        /* --- SECTION 3: CAPABILITIES --- */
        .DA_Cap_Section { 
          padding: 100px 5%; 
          background: #f8fafc; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .DA_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .DA_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 25px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .DA_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .DA_Cap_Grid { grid-template-columns: repeat(4, 1fr); } }

        .DA_Cap_Card {
          background: white;
          padding: 45px 35px;
          border-radius: 30px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e2e8f0;
          z-index: 1;
        }

        .DA_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
   background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .DA_Cap_Card:hover::before { height: 100%; }
        .DA_Cap_Card:hover h3, 
        .DA_Cap_Card:hover p,
        .DA_Cap_Card:hover .DA_Cap_Icon { color: #ffffff !important; }
        
        .DA_Cap_Icon { width: 60px; height: 60px; background: #eff6ff; color: #3b82f6; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; transition: 0.3s; }
        .DA_Cap_Card:hover .DA_Cap_Icon { background: rgba(255,255,255,0.1); }
        .DA_Cap_Card h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .DA_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        /* --- SECTION 4: OUTCOMES --- */
        .DA_Outcome { 
          padding: 50px 5%; 
          display: flex; 
          justify-content: center;
          background: white;
        }
        .DA_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        .DA_Outcome_Content { flex: 1.2; text-align: left; }
        .DA_Outcome_Img { flex: 1; display: flex; justify-content: center; }
        .DA_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        @media (max-width: 1024px) {
          .DA_Outcome_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .DA_Outcome_Img { order: -1; width: 100%; }
          .Outcome_Item { text-align: left; }
        }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
        .Outcome_Check { background: #10b981; color: white; border-radius: 50%; padding: 4px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; margin-bottom: 2px;}
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- SECTION 5: APPROACH --- */
        .DA_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .DA_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .DA_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .DA_Flow_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .DA_Flow_Grid { grid-template-columns: repeat(4, 1fr); } }

        .DA_Step_Card {
          background: white; border-radius: 20px; padding: 50px 30px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; transition: 0.4s;
          text-align: left;
        }
        .DA_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .DA_Step_Num { 
          position: absolute; top: -15px; left: 30px;
          background: #22314f; color: white; padding: 5px 20px; border-radius: 50px; font-weight: 900; font-size: 0.8rem;
        }
        .DA_Step_Icon { color: #3b82f6; margin-bottom: 20px; }
        .DA_Step_H { font-size: 1.3rem; font-weight: 800; color: #22314f; margin-bottom: 12px; }
        .DA_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; }

        .DA_Trust {
          padding: 120px 5%; text-align: center; background: #22314f; color: #fff;
          display: flex; justify-content: center;
        }
        .DA_Trust_Inner { max-width: 900px; width: 100%; }

        @media (max-width: 1024px) {
          .DA_Hero, .DA_Outcome { flex-direction: column; text-align: center; }
          .DA_Btn_Group { justify-content: center; }
        }
      `}),A.jsx("section",{className:"DA_Hero",children:A.jsxs("div",{className:"DA_Hero_Inner",children:[A.jsxs(t.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.8},className:"DA_Hero_Content",children:[A.jsx("div",{className:"flex items-center gap-3 mb-6",children:A.jsx("span",{className:"px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest border border-blue-100 uppercase",children:"Digital Intelligence              "})}),A.jsx("h2",{className:"DA_Hero_H1 NET_Hero_H1",children:"Data Analytics Services"}),A.jsx("p",{className:"DA_Tagline",children:"Mission-Critical Insights Driven by High-Fidelity Data and Predictable Modeling."}),A.jsx("p",{className:"DA_Hero_P",children:"CHN Technologies provides structured data analytics services that ensure visibility, accountability, and strategic oversight across business environments. Our approach focuses on data integrity, scalable modeling, and real-world impact."}),A.jsx("div",{className:"DA_Btn_Group",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"DA_Primary_Btn",children:"Consult a Data Strategist"})})})]}),A.jsxs(t.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:1},className:"DA_Hero_Img",children:[A.jsx("img",{src:ga,alt:"Premium Trading Analytics Dashboard"}),A.jsxs(t.div,{initial:{opacity:0,x:-20,scale:.9},animate:{opacity:1,x:0,scale:1,y:[0,-10,0]},transition:{duration:.8,delay:.5,y:{repeat:1/0,duration:4,ease:"easeInOut"}},className:"DA_Hero_Floating_Card bg-white/90 backdrop-blur-md",children:[A.jsx("div",{className:"bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200 shrink-0",children:A.jsx(sA,{className:"text-white",size:24})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase",children:"Predictive Index"}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("p",{className:"text-lg font-black text-slate-800 tracking-tight",children:"99.9% PRECISION"}),A.jsx("div",{className:"h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center",children:A.jsx("div",{className:"h-1.5 w-1.5 bg-white rounded-full animate-pulse"})})]})]})]})]})]})}),A.jsx("section",{className:"DA_Context",children:A.jsx("div",{className:"DA_Context_Inner",children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 DA_Context_H1",children:"Data Is the Primary Driver of Strategic Competitive Advantage"}),A.jsx("p",{className:"DA_Context_P",children:"Business productivity depends on how much of your resource capacity is focused on high-value strategy versus low-value manual processing. Poorly automated or manual workflows lead to operational debt, human error, and reduced organizational speed. CHN Technologies helps organisations maintain structured, secure, and highly visible data ecosystems."})]})})}),A.jsx("section",{className:"DA_Cap_Section",children:A.jsxs("div",{className:"DA_Cap_Inner",children:[A.jsx("span",{className:"DA_Badge",children:"Analytical Domains"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Full Cycle Analytical Capabilities"}),A.jsx("div",{className:"DA_Cap_Grid",children:[{title:"Predictive Analytics",icon:A.jsx(sA,{size:28}),desc:"Using historical data and AI models to forecast business trends and operational shifts."},{title:"Business Intelligence",icon:A.jsx(ce,{size:28}),desc:"Customized dashboarding and reporting systems for real-time visibility into mission-critical KPIs."},{title:"Data Warehousing",icon:A.jsx(EA,{size:28}),desc:"Structured data storage and management that ensures large-scale information remains accessible."},{title:"Integration Services",icon:A.jsx(MA,{size:28}),desc:"Consolidating data from disparate business systems to provide a single, unified source of truth."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},className:"DA_Cap_Card",children:[A.jsx("div",{className:"DA_Cap_Icon",children:e.icon}),A.jsx("h3",{children:e.title}),A.jsx("p",{children:e.desc})]},i))})]})}),A.jsx("section",{className:"DA_Outcome",children:A.jsxs("div",{className:"DA_Outcome_Inner",children:[A.jsx("div",{className:"DA_Outcome_Img",children:A.jsx("img",{src:RA,alt:"Strategic Insight"})}),A.jsxs("div",{className:"DA_Outcome_Content",children:[A.jsx("span",{className:"DA_Badge",children:"Strategic Benefits"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Improved Decision Precision and Velocity"}),A.jsx("div",{className:"Outcome_List",children:[{title:"Improved Decision Precision",desc:"Empirical insights that reduce reliance on intuition and drive predictable outcomes."},{title:"Optimal Strategic Scaling",desc:"Data-driven models that group operational growth with measurable market opportunities."},{title:"Enhanced Real-Time Visibility",desc:"Dashboarding systems that provide continuous oversight across mission-critical systems."},{title:"Predictable Future Modeling",desc:"Forecasting methods that ensure organisations are ready for evolving business cycles."}].map((e,i)=>A.jsxs("div",{className:"Outcome_Item",children:[A.jsx("div",{className:"Outcome_Check",children:A.jsx(j,{size:16})}),A.jsxs("div",{children:[A.jsx("span",{className:"Outcome_Title",children:e.title}),A.jsx("p",{className:"Outcome_Desc",children:e.desc})]})]},i))})]})]})}),A.jsx("section",{className:"DA_Flow",children:A.jsxs("div",{className:"DA_Flow_Inner",children:[A.jsx("span",{className:"DA_Badge",children:"Insight Framework"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Data-to-Insight Journey"}),A.jsx("div",{className:"DA_Flow_Grid",children:[{num:"01",h:"Data Ingestion",icon:A.jsx(EA,{size:30}),p:"Consolidating raw data from disparate business sources into a unified hub."},{num:"02",h:"Strategic Modeling",icon:A.jsx(it,{size:30}),p:"Creating mathematical models that represent your operational business logic."},{num:"03",h:"Visualization",icon:A.jsx(at,{size:30}),p:"Building high-fidelity dashboards that translate data into human-readable insight."},{num:"04",h:"Decision Support",icon:A.jsx(sA,{size:30}),p:"Continuous analytical refinement to support mission-critical decision making."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},className:"DA_Step_Card",children:[A.jsxs("div",{className:"DA_Step_Num",children:["STAGE ",e.num]}),A.jsx("div",{className:"DA_Step_Icon",children:e.icon}),A.jsx("h3",{className:"DA_Step_H",children:e.h}),A.jsx("p",{className:"DA_Step_P",children:e.p})]},i))})]})}),A.jsxs("section",{style:{padding:"50px 5%",textAlign:"center",background:"#0f172a",color:"#fff",position:"relative",overflow:"hidden"},children:[A.jsx("div",{style:{position:"absolute",inset:0,opacity:.1,backgroundImage:"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",backgroundSize:"40px 40px"}}),A.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:10},children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 text-white",children:"Convert Your Data Into Strategic Revenue"}),A.jsx("p",{className:"EUC_Hero_P",style:{margin:"30px auto 50px",color:"rgba(255,255,255,0.7)",fontSize:"1.3rem"},children:"Connect with CHN Technologies to understand how high-fidelity analytical models can optimize your enterprise decision-making and operational growth."}),A.jsx("div",{className:"flex flex-col md:flex-row gap-6 justify-center items-center",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"DA_Primary_Btn",style:{background:"#3b82f6",color:"#fff"},children:"Contact a Data Strategist"})})})]})})]})]}),ma="/assets/automation-process-Dr59Veqz.jpg",ha="/assets/automation-robotic-Dl9MiGOS.jpg",ua=()=>A.jsxs("div",{className:"AU_WRAPPER",children:[A.jsx("style",{children:`
        .AU_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .AU_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          min-height: 85vh;
        }

        .AU_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          width: 100%;
          max-width: 1300px;
        }
        @media (max-width: 1024px) {
          .AU_Hero { padding-top: 140px; }
          .AU_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .AU_Hero_Content { max-width: 100%; }
          .AU_Hero_Img { width: 100%; order: -1; margin-bottom: 40px; display: flex; justify-content: center; }
          .AU_Hero_Img img { max-width: 400px; border-width: 10px; }
        }

        .AU_Hero_Content { flex: 1.2; max-width: 650px; }
        .AU_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .AU_Hero_H1 {  margin-bottom: 15px; }
        .AU_Tagline { font-size:1.2rem; color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .AU_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .AU_Btn_Group { display: flex; gap: 20px; }
        @media (max-width: 1024px) { .AU_Btn_Group { justify-content: center; } }
        .AU_Primary_Btn { 
          background: #3b82f6; color: white; padding: 18px 35px; border-radius: 100px; 
          font-weight: 600; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
          border: none; cursor: pointer;
        }
        .AU_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .AU_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .AU_Hero_Img img { 
            width: 100%; 
            max-width: 550px; 
            border-radius: 40px; 
            border: 15px solid #fff; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
            object-fit: cover;
        }

        /* --- SECTION 2: CONTEXT --- */
        .AU_Context { 
          padding: 100px 5%; 
          background: #0f172a; 
          color: #fff; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .AU_Context_Inner {
          width: 100%;
          max-width: 1000px;
        }
        .AU_Context_H1 { color: #fff; }
        .AU_Context_P { color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; }

        /* --- SECTION 3: CAPABILITIES --- */
        .AU_Cap_Section { 
          padding: 100px 5%; 
          background: #f8fafc; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .AU_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .AU_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 25px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .AU_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .AU_Cap_Grid { grid-template-columns: repeat(4, 1fr); } }

        .AU_Cap_Card {
          background: white;
          padding: 45px 35px;
          border-radius: 30px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e2e8f0;
          z-index: 1;
        }

        .AU_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
          background: linear-gradient(180deg, #1e3a8a 0%, #0f172a 100%);
          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .AU_Cap_Card:hover::before { height: 100%; }
        .AU_Cap_Card:hover h3, 
        .AU_Cap_Card:hover p,
        .AU_Cap_Card:hover .AU_Cap_Icon { color: #ffffff !important; }
        
        .AU_Cap_Icon { width: 60px; height: 60px; background: #eff6ff; color: #3b82f6; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; transition: 0.3s; }
        .AU_Cap_Card:hover .AU_Cap_Icon { background: rgba(255,255,255,0.1); }
        .AU_Cap_Card h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .AU_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        /* --- SECTION 4: OUTCOMES --- */
        .AU_Outcome { 
          padding: 50px 5%; 
          display: flex; 
          justify-content: center;
          background: white;
        }
        .AU_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        .AU_Outcome_Content { flex: 1.2; text-align: left; }
        .AU_Outcome_Img { flex: 1; display: flex; justify-content: center; }
        .AU_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        @media (max-width: 1024px) {
          .AU_Outcome_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .AU_Outcome_Img { order: -1; width: 100%; }
          .Outcome_Item { text-align: left; }
        }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
        .Outcome_Check { background: #10b981; color: white; border-radius: 50%; padding: 4px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; margin-bottom: 2px;}
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- SECTION 5: APPROACH --- */
        .AU_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .AU_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .AU_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .AU_Flow_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .AU_Flow_Grid { grid-template-columns: repeat(4, 1fr); } }

        .AU_Step_Card {
          background: white; border-radius: 20px; padding: 50px 30px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; transition: 0.4s;
          text-align: left;
        }
        .AU_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .AU_Step_Num { 
          position: absolute; top: -15px; left: 30px;
          background: #22314f; color: white; padding: 5px 20px; border-radius: 50px; font-weight: 900; font-size: 0.8rem;
        }
        .AU_Step_Icon { color: #3b82f6; margin-bottom: 20px; }
        .AU_Step_H { font-size: 1.3rem; font-weight: 800; color: #22314f; margin-bottom: 12px; }
        .AU_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; }

        .AU_Trust {
          padding: 120px 5%; text-align: center; background: #22314f; color: #fff;
          display: flex; justify-content: center;
        }
        .AU_Trust_Inner { max-width: 900px; width: 100%; }
      `}),A.jsx("section",{className:"AU_Hero",children:A.jsxs("div",{className:"AU_Hero_Inner",children:[A.jsxs(t.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.8},className:"AU_Hero_Content",children:[A.jsx("div",{className:"flex items-center gap-3 mb-6",children:A.jsx("span",{className:"px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-widest border border-blue-100 uppercase",children:"Digital Transformation             "})}),A.jsx("h2",{className:"AU_Hero_H1",children:"Process Automation Services"}),A.jsx("p",{className:"AU_Tagline",children:"Eliminating Operational Friction Through Intelligent, High-Fidelity Automation."}),A.jsx("p",{className:"AU_Hero_P",children:"CHN Technologies provides structured automation services that ensure speed, reliability, and resource optimization across business environments. Our approach focuses on process integrity, scalable logic, and measurable impact."}),A.jsx("div",{className:"AU_Btn_Group",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"AU_Primary_Btn",children:"Consult an Automation Specialist"})})})]}),A.jsx(t.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:1},className:"AU_Hero_Img",children:A.jsx("img",{src:ma,alt:"Process Automation Cog"})})]})}),A.jsx("section",{className:"AU_Context",children:A.jsx("div",{className:"AU_Context_Inner",children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 AU_Context_H1",children:"Repetitive Manual Work Is a Silent Tax on Enterprise Growth"}),A.jsx("p",{className:"AU_Context_P",children:"Business productivity depends on how much of your resource capacity is focused on high-value strategy versus low-value manual processing. Poorly automated or manual workflows lead to operational debt, human error, and reduced organizational speed. CHN Technologies helps organisations maintain structured, secure, and highly autonomous business environments."})]})})}),A.jsx("section",{className:"AU_Cap_Section",children:A.jsxs("div",{className:"AU_Cap_Inner",children:[A.jsx("span",{className:"AU_Badge",children:"Core Capabilities"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Full-Spectrum Digital Automation"}),A.jsx("div",{className:"AU_Cap_Grid",children:[{title:"RPA Solutions",icon:A.jsx(KA,{size:28}),desc:"Robotic Process Automation to handle repetitive, manual tasks with high speed and zero error."},{title:"Workflow Automation",icon:A.jsx(le,{size:28}),desc:"Streamlining end-to-end business processes through intelligent digital sequencing."},{title:"IT Automation",icon:A.jsx(gA,{size:28}),desc:"Automating infrastructure management, scaling, and recovery for high-performance uptime."},{title:"AI-Driven Logic",icon:A.jsx(pA,{size:28}),desc:"Integrating machine learning models to provide semi-autonomous decision-making at scale."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},className:"AU_Cap_Card",children:[A.jsx("div",{className:"AU_Cap_Icon",children:e.icon}),A.jsx("h3",{children:e.title}),A.jsx("p",{children:e.desc})]},i))})]})}),A.jsx("section",{className:"AU_Outcome",children:A.jsxs("div",{className:"AU_Outcome_Inner",children:[A.jsx("div",{className:"AU_Outcome_Img",children:A.jsx("img",{src:ha,alt:"Robotic Precision"})}),A.jsxs("div",{className:"AU_Outcome_Content",children:[A.jsx("span",{className:"AU_Badge",children:"Strategic Outcomes"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Benefits of High-Fidelity Automation"}),A.jsx("div",{className:"Outcome_List",children:[{title:"Improved Process Velocity",desc:"Drastic reduction in process completion times through parallel multi-thread automation."},{title:"Optimal Resource Reallocation",desc:"Free up workforce capacity for high-value strategic work rather than data entry."},{title:"Predictable Operational Accuracy",desc:"Systematic elimination of manual and human errors in mission-critical workflows."},{title:"Scalable Task Architecture",desc:"Automation environments that grow with your organizational complexity and volume."}].map((e,i)=>A.jsxs("div",{className:"Outcome_Item",children:[A.jsx("div",{className:"Outcome_Check",children:A.jsx(j,{size:16})}),A.jsxs("div",{children:[A.jsx("span",{className:"Outcome_Title",children:e.title}),A.jsx("p",{className:"Outcome_Desc",children:e.desc})]})]},i))})]})]})}),A.jsx("section",{className:"AU_Flow",children:A.jsxs("div",{className:"AU_Flow_Inner",children:[A.jsx("span",{className:"AU_Badge",children:"Productivity Framework"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Strategic Approach"}),A.jsx("div",{className:"AU_Flow_Grid",children:[{num:"01",h:"Discovery",icon:A.jsx(W,{size:30}),p:"Mapping manual processes and identifying high-impact automation candidates."},{num:"02",h:"System Design",icon:A.jsx(J,{size:30}),p:"Creating the logic and sequencing models for autonomous execution."},{num:"03",h:"Build",icon:A.jsx(KA,{size:30}),p:"Implementation of robotics and workflow scripts in a secure environment."},{num:"04",h:"Optimize",icon:A.jsx(O,{size:30}),p:"Continuous monitoring and refinement of automation threads for maximum ROI."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},className:"AU_Step_Card",children:[A.jsxs("div",{className:"AU_Step_Num",children:["STAGE ",e.num]}),A.jsx("div",{className:"AU_Step_Icon",children:e.icon}),A.jsx("h3",{className:"AU_Step_H",children:e.h}),A.jsx("p",{className:"AU_Step_P",children:e.p})]},i))})]})}),A.jsxs("section",{style:{padding:"50px 5%",textAlign:"center",background:"#0f172a",color:"#fff",position:"relative",overflow:"hidden"},children:[A.jsx("div",{style:{position:"absolute",inset:0,opacity:.1,backgroundImage:"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",backgroundSize:"40px 40px"}}),A.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:10},children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 text-white",children:"Eliminate Operational Friction Today"}),A.jsx("p",{className:"EUC_Hero_P",style:{margin:"30px auto 50px",color:"rgba(255,255,255,0.7)",fontSize:"1.3rem"},children:"Connect with CHN Technologies to understand how intelligent automation solutions can optimize your enterprise resource allocation and operational speed."}),A.jsx("div",{className:"flex flex-col md:flex-row gap-6 justify-center items-center",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"AU_Primary_Btn",style:{background:"#3b82f6",color:"#fff"},children:"Contact an Automation Specialist"})})})]})})]})]}),fa=()=>A.jsxs("div",{className:"WM_WRAPPER",children:[A.jsx("style",{children:`
        .WM_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .WM_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          min-height: 85vh;
        }

        .WM_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          width: 100%;
          max-width: 1300px;
        }
        @media (max-width: 1024px) {
          .WM_Hero { padding-top: 140px; }
          .WM_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .WM_Hero_Content { max-width: 100%; order: 1; }
          .WM_Hero_Img { width: 100%; order: -1; margin-bottom: 40px; display: flex; justify-content: center; }
          .WM_Hero_Img img { max-width: 400px; border-width: 10px; }
        }

        .WM_Hero_Content { flex: 1.2; max-width: 650px; }
        .WM_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .WM_Hero_H1 { margin-bottom: 25px; }
        .WM_Tagline { 
        
       font-size: 1.2rem; color: #64748b; font-weight: 500; line-height: 1.6; margin-bottom: 50px;
          }
       
       
       
        .WM_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .WM_Btn_Group { display: flex; gap: 20px; }
        @media (max-width: 1024px) { .WM_Btn_Group { justify-content: center; } }
        .WM_Primary_Btn { 
          background: #3b82f6; color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 600; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
          border: none; cursor: pointer;
        }
        .WM_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .WM_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .WM_Hero_Img img { 
            width: 100%; 
            max-width: 550px; 
            border-radius: 40px; 
            border: 15px solid #fff; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
            object-fit: cover;
        }
        .WM_Hero_Floating_Card {
          position: absolute; bottom: 30px; left: -30px;
          background: white; padding: 20px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 12px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }
        @media (max-width: 1024px) {
          .WM_Hero_Floating_Card { display: none; }
        }

        /* --- SECTION 2: CONTEXT --- */
        .WM_Context { 
          padding: 100px 5%; 
          background: #0f172a; 
          color: #fff; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .WM_Context_Inner {
          width: 100%;
          max-width: 1000px;
        }
        .WM_Context_H1 { color: #fff; }
        .WM_Context_P { color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; }

        /* --- SECTION 3: CAPABILITIES --- */
        .WM_Cap_Section { 
          padding: 100px 5%; 
          background: #f8fafc; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .WM_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .WM_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 25px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .WM_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .WM_Cap_Grid { grid-template-columns: repeat(4, 1fr); } }

        .WM_Cap_Card {
          background: white;
          padding: 45px 35px;
          border-radius: 30px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e2e8f0;
          z-index: 1;
        }

        .WM_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
    background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .WM_Cap_Card:hover::before { height: 100%; }
        .WM_Cap_Card:hover h3, 
        .WM_Cap_Card:hover p,
        .WM_Cap_Card:hover .WM_Cap_Icon { color: #ffffff !important; }
        
        .WM_Cap_Icon { width: 60px; height: 60px; background: #eff6ff; color: #3b82f6; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; transition: 0.3s; }
        .WM_Cap_Card:hover .WM_Cap_Icon { background: rgba(255,255,255,0.1); }
        .WM_Cap_Card h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .WM_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        /* --- SECTION 4: OUTCOMES --- */
        .WM_Outcome { 
          padding: 50px 5%; 
          display: flex; 
          justify-content: center;
          background: white;
        }
        .WM_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        .WM_Outcome_Content { flex: 1.2; text-align: left; }
        .WM_Outcome_Img { flex: 1; display: flex; justify-content: center; }
        .WM_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        @media (max-width: 1024px) {
          .WM_Outcome_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .WM_Outcome_Img { order: -1; width: 100%; }
          .Outcome_Item { text-align: left; }
        }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
        .Outcome_Check { background: #10b981; color: white; border-radius: 50%; padding: 4px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; margin-bottom: 2px;}
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- SECTION 5: APPROACH --- */
        .WM_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .WM_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .WM_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .WM_Flow_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .WM_Flow_Grid { grid-template-columns: repeat(4, 1fr); } }

        .WM_Step_Card {
          background: white; border-radius: 20px; padding: 50px 30px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; transition: 0.4s;
          text-align: left;
        }
        .WM_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .WM_Step_Num { 
          position: absolute; top: -15px; left: 30px;
          background: #22314f; color: white; padding: 5px 20px; border-radius: 50px; font-weight: 900; font-size: 0.8rem; white-space: nowrap;
        }
        .WM_Step_Icon { color: #3b82f6; margin-bottom: 20px; }
        .WM_Step_H { font-size: 1.3rem; font-weight: 800; color: #22314f; margin-bottom: 12px; }
        .WM_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; }

        /* --- SECTION 6: FINAL --- */
        .WM_Final { 
          padding: 100px 5%; 
          background: #002e5b; color: #ffffff; text-align: center;
          display: flex;
          justify-content: center;
        }
        .WM_Final_Inner { max-width: 900px; width: 100%; }
        .WM_Final_H { font-weight: 900; line-height: 1.1; margin-bottom: 30px; color:#ffffff; }
      `}),A.jsx("section",{className:"WM_Hero",children:A.jsxs("div",{className:"WM_Hero_Inner",children:[A.jsxs(t.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.8},className:"WM_Hero_Content",children:[A.jsx("div",{className:"flex items-center gap-3 mb-6",children:A.jsx("span",{className:"px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100",children:"Workforce Management"})}),A.jsx("h2",{className:"WM_Hero_H1 NET_Hero_H1",children:"Workforce Management"}),A.jsxs("p",{className:"font-bold text-slate-800 mb-6 flex items-center gap-2 subtitle",style:{fontSize:"1.2rem",color:"#3b82f6"},children:[A.jsx(U,{size:24,className:"text-blue-600"}),"Built for Efficiency, Scale, and Results"]}),A.jsx("p",{className:"WM_Hero_P",children:"CHN Technologies delivers professional workforce management services focused on strategic acquisition, performance optimization, and long-term organizational stability. Our solutions support mission-critical workflows and business growth through structured human capital engineering."}),A.jsx("div",{className:"WM_Btn_Group",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"WM_Primary_Btn",children:"Consult on Workforce Strategy"})})})]}),A.jsxs(t.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:1},className:"WM_Hero_Img",children:[A.jsx("img",{src:QA,alt:"Workforce Team Strategy"}),A.jsxs(t.div,{initial:{opacity:0,x:-20,scale:.9},animate:{opacity:1,x:0,scale:1,y:[0,-10,0]},transition:{duration:.8,delay:.5,y:{repeat:1/0,duration:4,ease:"easeInOut"}},className:"WM_Hero_Floating_Card bg-white/90 backdrop-blur-md",children:[A.jsx("div",{className:"bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200 shrink-0",children:A.jsx(AA,{className:"text-white",size:24})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase",children:"Talent Integrity"}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("p",{className:"text-lg font-black text-slate-800 tracking-tight",children:"ASSURED QUALITY"}),A.jsx("div",{className:"h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center",children:A.jsx("div",{className:"h-1.5 w-1.5 bg-white rounded-full animate-pulse"})})]})]})]})]})]})}),A.jsx("section",{className:"WM_Context",children:A.jsx("div",{className:"WM_Context_Inner",children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 WM_Context_H1",children:"Your Workforce Is the Primary Architecture of Operational Success"}),A.jsx("p",{className:"WM_Context_P",children:"Business performance depends on how consistently and predictably you can manage and expand your human capital. Poorly managed workforce environments lead to internal debt, high hiring overhead, and reduced organizational speed. CHN Technologies helps organisations maintain structured, secure, and highly productive business teams."})]})})}),A.jsx("section",{className:"WM_Cap_Section",children:A.jsxs("div",{className:"WM_Cap_Inner",children:[A.jsx("span",{className:"WM_Badge",children:"Core Domains"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Workforce Consulting Capabilities"}),A.jsx("div",{className:"WM_Cap_Grid",children:[{title:"Talent Acquisition",icon:A.jsx(VA,{size:28}),desc:"Structured recruitment processes that focus on both technical proficiency and organizational fit."},{title:"Workforce Planning",icon:A.jsx(FA,{size:28}),desc:"Strategic resource modeling for anticipating operational shifts and staffing requirements."},{title:"Performance Strategy",icon:A.jsx(sA,{size:28}),desc:"Developing frameworks that align individual workforce goals with enterprise business outcomes."},{title:"Compliance & Integrity",icon:A.jsx(Y,{size:28}),desc:"Ensuring all workforce practices are aligned with regional labor laws and internal ethics standards."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},className:"WM_Cap_Card",children:[A.jsx("div",{className:"WM_Cap_Icon",children:e.icon}),A.jsx("h3",{children:e.title}),A.jsx("p",{children:e.desc})]},i))})]})}),A.jsx("section",{className:"WM_Outcome",children:A.jsxs("div",{className:"WM_Outcome_Inner",children:[A.jsx("div",{className:"WM_Outcome_Img",children:A.jsx("img",{src:je,alt:"Business Growth"})}),A.jsxs("div",{className:"WM_Outcome_Content",children:[A.jsx("span",{className:"WM_Badge",children:"Business Benefits"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Benefits of Structured Workforce Management"}),A.jsx("div",{className:"Outcome_List",children:[{title:"Predictable Retention Rates",desc:"Workforce strategies that ensure long-term stability and reduce institutional knowledge debt."},{title:"Optimal Resource Utilization",desc:"Balanced workforce loads that ensure maximum productivity from every team member."},{title:"Reduced Internal Overhead",desc:"Structured management environments that minimize friction and improve internal speed."},{title:"Scalable Talent Architecture",desc:"External and internal talent pipelines that grow smoothly with organisational cycle."}].map((e,i)=>A.jsxs("div",{className:"Outcome_Item",children:[A.jsx("div",{className:"Outcome_Check",children:A.jsx(j,{size:16})}),A.jsxs("div",{children:[A.jsx("span",{className:"Outcome_Title",children:e.title}),A.jsx("p",{className:"Outcome_Desc",children:e.desc})]})]},i))})]})]})}),A.jsx("section",{className:"WM_Flow",children:A.jsxs("div",{className:"WM_Flow_Inner",children:[A.jsx("span",{className:"WM_Badge",children:"Consulting Framework"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Workforce Lifecycle Approach"}),A.jsx("div",{className:"WM_Flow_Grid",children:[{num:"01",h:"Talent Acquisition",icon:A.jsx(VA,{size:30}),p:"Sourcing and evaluating human capital based on technical and cultural parameters."},{num:"02",h:"Strategic Planning",icon:A.jsx(J,{size:30}),p:"Forecasting operational needs and structural staffing requirements."},{num:"03",h:"Performance Audit",icon:A.jsx(O,{size:30}),p:"Analysing workforce output and aligning goals with digital outcomes."},{num:"04",h:"Policy Compliance",icon:A.jsx(Y,{size:30}),p:"Stabilising legal and ethical integrity through structured workforce policy."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},className:"WM_Step_Card",children:[A.jsxs("div",{className:"WM_Step_Num",children:["STAGE ",e.num]}),A.jsx("div",{className:"WM_Step_Icon",children:e.icon}),A.jsx("h3",{className:"WM_Step_H",children:e.h}),A.jsx("p",{className:"WM_Step_P",children:e.p})]},i))})]})}),A.jsxs("section",{style:{padding:"50px 5%",textAlign:"center",background:"#0f172a",color:"#fff",position:"relative",overflow:"hidden"},children:[A.jsx("div",{style:{position:"absolute",inset:0,opacity:.1,backgroundImage:"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",backgroundSize:"40px 40px"}}),A.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:10},children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 text-white",children:"Optimise Your Revenue Through Workforce Stability"}),A.jsxs("p",{className:"EUC_Hero_P",style:{margin:"30px auto 50px",color:"rgba(255,255,255,0.7)",fontSize:"1.3rem"},children:["Connect with CHN Technologies to understand how structured workforce management solutions ",A.jsx("br",{}),"can support operational efficiency and organizational scalability."]}),A.jsx("div",{className:"flex flex-col md:flex-row gap-6 justify-center items-center",children:A.jsx(c,{to:"/contact",children:A.jsxs("button",{className:"WM_Primary_Btn",style:{margin:"0 auto",display:"flex",alignItems:"center",gap:"15px"},children:["Contact a Workforce Specialist ",A.jsx(Q,{size:24})]})})})]})})]})]}),qa="/assets/payroll_compliance_hero-FTVudrVG.png",ba="/assets/payroll-governance-BFCN03jq.jpg",wa=()=>A.jsxs("div",{className:"PC_WRAPPER",children:[A.jsx("style",{children:`
        .PC_WRAPPER {
          font-family: 'Figtree', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .PC_Hero {
          position: relative;
          background: #f1f6ff;
          min-height: 85vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 100px 5% 60px;
        }

        .PC_Hero_Shape {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 40%;
          background: #002e5b;
          z-index: 0;
          clip-path: polygon(16% 0%, 100% 0%, 100% 100%, -6% 100%);
        }

        .PC_Hero_Content {
          position: relative;
          z-index: 10;
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .PC_Hero { padding-top: 140px; }
          .PC_Hero_Content { grid-template-columns: 1fr; text-align: center; gap: 40px; }
          .PC_Hero_Shape { display: none; }
          .PC_Hero_Right { order: -1; width: 100%; display: flex; justify-content: center; }
          .PC_Hero_Img_Box { width: 100%; max-width: 400px; height: auto; margin: 0 auto; }
          .PC_Hero_Img_Box img { aspect-ratio: 4/5; }
          .PC_Btn { margin: 0 auto;}
        }

        .PC_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 25px; display: block;
        }

        .PC_Hero_H1 { margin-bottom: 30px; }
        .PC_Hero_P { font-size: 1.2rem; color: #64748b; font-weight: 500; line-height: 1.6; margin-bottom: 50px; }

        .PC_Btn { 
          background: #3b82f6; color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 600; font-size: 1.1rem; border: none; cursor: pointer; transition: 0.3s;
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4); display: flex; align-items: center; gap: 15px;
          width: fit-content;
        }
        .PC_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(59, 130, 246, 0.5); background: #1e3a8a; }

        .PC_Hero_Img_Box { 
          position: relative; width: 450px; height: 580px; margin-left: auto;
        }
        .PC_Hero_Img_Box img { width: 100%; height: 100%; object-fit: cover; border-radius: 40px; box-shadow: 0 50px 100px rgba(0,0,0,0.2); border: 4px solid #fff; }
        .PC_Hero_Floating_Card {
          position: absolute; bottom: 40px; left: -40px;
          background: white; padding: 25px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 15px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }
        @media (max-width: 1024px) {
          .PC_Hero_Floating_Card { display: none; }
        }

        /* --- SECTION 2: CONTEXT --- */
        .PC_Context { padding: 100px 5%; background: #22314f; color: #fff; }
        .PC_Context_Grid { 
          max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: center; 
        }

        @media (max-width: 1024px) {
          .PC_Context_Grid { grid-template-columns: 1fr; text-align: center; }
          .PC_Context_Img { order: -1; width: 100%; max-width: 600px; margin: 0 auto; }
        }

        .PC_Context_H { font-weight: 900; line-height: 1.2; margin-bottom: 40px; color:#ffffff;}
        .PC_Context_P { font-size: 1.15rem; color: #b9d1ff; line-height: 1.8; margin-bottom: 0; }
        .PC_Context_Img img { width: 100%; border-radius: 40px; box-shadow: 0 40px 100px rgba(0,0,0,0.3); border: 12px solid #2a3a5a; }

        /* --- SECTION 3: DOMAINS --- */
        .PC_Domains { padding: 100px 5%; background: #ffffff; text-align: center; }
        .PC_Domains_Grid { 
          display: grid; 
          grid-template_columns: 1fr;
          gap: 25px; 
          max-width: 1300px; 
          margin: 80px auto 0;
        }
        @media (min-width: 768px) { .PC_Domains_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .PC_Domains_Grid { grid-template-columns: repeat(4, 1fr); } }

        .PC_Card {
          background: #f8fafc; padding: 60px 35px; border-radius: 40px; text-align: left;
          position: relative; overflow: hidden; transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #f1f5f9; z-index: 1;
        }

        .PC_Card::before {
          content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 0;
 background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);           z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .PC_Card:hover::before { height: 100%; }
        .PC_Card:hover h3, .PC_Card:hover p, .PC_Card_Icon { color: #3b82f6; transition: 0.3s; }
        .PC_Card:hover h3, .PC_Card:hover p { color: #fff !important; }
        .PC_Card:hover .PC_Card_Icon_Box { background: rgba(255,255,255,0.1); color: #fff; }
 
        .PC_Card_Icon_Box { 
          width: 70px; height: 70px; background: #fff; color: #3b82f6; border-radius: 22px; 
          display: flex; align-items: center; justify-content: center; margin-bottom: 35px; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); transition: 0.3s;
        }
        .PC_Card_H { font-size: 1.5rem; font-weight: 800; color: #1a2b4b; margin-bottom: 15px; }

        /* --- SECTION 4: OUTCOMES --- */
        .PC_Outcome { padding: 50px 5%; background: #fdfdfd; }
        .PC_Outcome_Grid { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: center; }

        @media (max-width: 1024px) {
          .PC_Outcome_Grid { grid-template-columns: 1fr; text-align: center; }
          .PC_Outcome_Img_Container { order: -1; width: 100%; max-width: 600px; margin: 0 auto; }
          .PC_Check_Item { text-align: left; }
        }

        .PC_Check_Item { display: flex; gap: 20px; align-items: flex-start; margin-bottom: 30px; }
        .PC_Check_Icon { min-width: 30px; height: 30px; background: #3b82f6; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .PC_Check_H { font-size: 1.25rem; font-weight: 900; color: #1a2b4b; display: block; margin-bottom: 5px; }
        .PC_Check_P { color: #64748b; font-size: 1rem; line-height: 1.6; }

        /* --- SECTION 5: FRAMEWORK --- */
        .PC_Framework { padding: 50px 5%; background: #ffffff; text-align: center; }
        .PC_Framework_Grid { 
          display: grid; 
          grid-template_columns: 1fr;
          gap: 30px; 
          max-width: 1300px; 
          margin: 80px auto 0; 
        }
        @media (min-width: 768px) { .PC_Framework_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .PC_Framework_Grid { grid-template-columns: repeat(4, 1fr); } }

        .PC_Step_Card {
          background: #f8fafc; padding: 60px 40px; border-radius: 40px; position: relative; border: 1px solid #f1f5f9; transition: 0.4s;
        }
        .PC_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 40px 80px rgba(0,0,0,0.05); }
        .PC_Step_Stage { 
           background: #22314f; color: #fff; font-weight: 900; font-size: 0.75rem; 
           padding: 6px 15px; border-radius: 100px; margin-bottom: 30px; display: inline-block;
        }

        /* --- FINAL --- */
        .PC_Final { 
          padding: 100px 5%; 
          background: #002e5b; color: #ffffff; text-align: center; 
        }
        .PC_Final_H { font-weight: 900; line-height: 1.1; margin-bottom: 50px; color:#ffffff; }
      `}),A.jsxs("section",{className:"PC_Hero",children:[A.jsx("div",{className:"PC_Hero_Shape"}),A.jsxs("div",{className:"PC_Hero_Content",children:[A.jsxs(t.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.8},children:[A.jsx("div",{className:"flex items-center gap-3 mb-6",children:A.jsx("span",{className:"px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100",children:"Payroll & Compliance"})}),A.jsx("h2",{className:"PC_Hero_H1 NET_Hero_H1",children:"Payroll & Compliance"}),A.jsxs("p",{className:"font-bold mb-6 flex items-center gap-2 subtitle",style:{fontSize:"1.2rem",color:"#3b82f6"},children:[A.jsx(U,{size:24,className:"text-blue-600"}),"Built for Efficiency, Scale, and Results"]}),A.jsx("p",{className:"PC_Hero_P",children:"CHN Technologies delivers professional payroll and compliance services focused on financial integrity, regulatory accuracy, and long-term corporate stability. Our solutions support zero-error processing and organizational security through structured financial engineering."}),A.jsx(c,{to:"/contact",children:A.jsxs("button",{className:"PC_Btn",children:["Consult on Payroll Strategy ",A.jsx(Q,{size:24})]})})]}),A.jsx(t.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:1},className:"PC_Hero_Right",children:A.jsxs("div",{className:"PC_Hero_Img_Box",children:[A.jsx("img",{src:qa,alt:"Premium Financial Compliance Architecture"}),A.jsxs(t.div,{initial:{opacity:0,x:-30,scale:.85,rotate:-2},animate:{opacity:1,x:0,scale:1,rotate:0,y:[0,-8,0]},transition:{duration:.6,delay:.8,ease:"easeOut",y:{repeat:1/0,duration:5,ease:"easeInOut"}},className:"PC_Hero_Floating_Card flex items-center gap-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-blue-100 relative overflow-hidden",children:[A.jsx("div",{className:"bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200",children:A.jsx(Y,{className:"text-white",size:24})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase",children:"Compliance Index"}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("p",{className:"text-lg font-black text-slate-800 tracking-tight",children:"ZERO DEFECT"}),A.jsx("div",{className:"h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center",children:A.jsx("div",{className:"h-1.5 w-1.5 bg-white rounded-full animate-pulse"})})]})]})]})]})})]})]}),A.jsx("section",{className:"PC_Context",children:A.jsxs("div",{className:"PC_Context_Grid",children:[A.jsxs(t.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[A.jsx("span",{className:"PC_Badge",children:"Strategic Foundation"}),A.jsx("h2",{className:"NET_Hero_H1 PC_Context_H",children:"Financial Accuracy Protects Corporate Assets"}),A.jsx("p",{className:"PC_Context_P",children:"Business security and credibility depend on predictable management of regional labor laws and financial processing. Poorly managed systems lead to legal debt, financial penalty, and loss of trust. CHN helps maintain structured, secure, and highly accurate business environments."})]}),A.jsx(t.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"PC_Context_Img",children:A.jsx("img",{src:ba,alt:"Governance"})})]})}),A.jsxs("section",{className:"PC_Domains",children:[A.jsx("span",{className:"PC_Badge",children:"Core Domains"}),A.jsx("h2",{className:"NET_Hero_H1",style:{color:"#1a2b4b"},children:"Consolidated Management"}),A.jsx("div",{className:"PC_Domains_Grid",children:[{title:"End-to-End Payroll",icon:A.jsx(ZA,{size:30}),desc:"Structured management of payroll processes that ensure financial integrity and timely execution."},{title:"Statutory Compliance",icon:A.jsx(ue,{size:30}),desc:"Comprehensive oversight of labor regulations and regional standards to minimize organisational risk."},{title:"Secure Data Governance",icon:A.jsx(Y,{size:30}),desc:"High-integrity management of sensitive financial data with state-of-the-art encryption protocols."},{title:"Audit Readiness",icon:A.jsx(GA,{size:30}),desc:"Continuous internal monitoring to ensure your ecosystem is always audit-ready and legally secure."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},viewport:{once:!0},className:"PC_Card group",children:[A.jsx("div",{className:"PC_Card_Icon_Box",children:e.icon}),A.jsx("h3",{className:"PC_Card_H",children:e.title}),A.jsx("p",{className:"text-slate-500 font-medium leading-relaxed",children:e.desc})]},i))})]}),A.jsx("section",{className:"PC_Outcome",children:A.jsxs("div",{className:"PC_Outcome_Grid",children:[A.jsx(t.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"PC_Outcome_Img_Container",children:A.jsx("img",{src:ve,alt:"Outcomes",style:{borderRadius:"40px",boxShadow:"0 40px 80px rgba(0,0,0,0.1)",width:"100%"}})}),A.jsxs(t.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"text-left",children:[A.jsx("span",{className:"PC_Badge",children:"Business Impact"}),A.jsx("h2",{className:"NET_Hero_H1",style:{color:"#1a2b4b"},children:"Benefits Of Structured Control"}),A.jsx("div",{className:"mt-12",children:[{title:"Predictable Tax Management",desc:"Error-free tax processing and institutional institutional health."},{title:"Optimal Resource Efficiency",desc:"Automated systems allowing workforce to focus on primary work."},{title:"Reduced Internal Risk",desc:"Frameworks that minimize exposure to regional legal penalty."},{title:"Scalable Architecture",desc:"Systems designed to grow with workforce and organizational complexity."}].map((e,i)=>A.jsxs("div",{className:"PC_Check_Item",children:[A.jsx("div",{className:"PC_Check_Icon",children:A.jsx(j,{size:18})}),A.jsxs("div",{className:"text-left",children:[A.jsx("span",{className:"PC_Check_H",children:e.title}),A.jsx("p",{className:"PC_Check_P",children:e.desc})]})]},i))})]})]})}),A.jsxs("section",{className:"PC_Framework",children:[A.jsx("span",{className:"PC_Badge",children:"Compliance Framework"}),A.jsx("h2",{className:"NET_Hero_H1",style:{color:"#1a2b4b"},children:"Strategic Stages"}),A.jsx("div",{className:"PC_Framework_Grid",children:[{num:"01",h:"Audit & Scoping",icon:A.jsx(W,{size:30}),p:"Review existing payroll logs, compliance status, and obligations."},{num:"02",h:"Process Design",icon:A.jsx(J,{size:30}),p:"Structuring zero-error processing models and reporting hierarchies."},{num:"03",h:"Execution",icon:A.jsx(ZA,{size:30}),p:"Implementation of recurring payroll processing and filing protocols."},{num:"04",h:"Governance",icon:A.jsx(M,{size:30}),p:"Continuous monitoring, internal audits, and regulatory updates."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},viewport:{once:!0},className:"PC_Step_Card",children:[A.jsxs("span",{className:"PC_Step_Stage",children:["STAGE ",e.num]}),A.jsx("div",{className:"text-blue-500 mb-6 flex justify-center",children:e.icon}),A.jsx("h3",{className:"text-xl font-black text-[#1a2b4b] mb-4",children:e.h}),A.jsx("p",{className:"text-slate-500 font-medium text-sm leading-relaxed",children:e.p})]},i))})]}),A.jsxs("section",{style:{padding:"50px 5%",textAlign:"center",background:"#0f172a",color:"#fff",position:"relative",overflow:"hidden"},children:[A.jsx("div",{style:{position:"absolute",inset:0,opacity:.1,backgroundImage:"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",backgroundSize:"40px 40px"}}),A.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:10},children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 text-white",children:"Ensure Financial Integrity and Corporate Control"}),A.jsxs("p",{className:"EUC_Hero_P",style:{margin:"30px auto 50px",color:"rgba(255,255,255,0.7)",fontSize:"1.3rem"},children:["Connect with us to understand how structured systems ",A.jsx("br",{})," support long-term financial scalability.            "]}),A.jsx("div",{className:"flex flex-col md:flex-row gap-6 justify-center items-center",children:A.jsx(c,{to:"/contact",children:A.jsxs("button",{className:"PC_Btn",style:{margin:"0 auto"},children:["Contact for Strategy ",A.jsx(Q,{size:24})]})})})]})})]})]}),Ca="/assets/training-session-7cddDdyZ.jpg",_a=()=>A.jsxs("div",{className:"TD_WRAPPER",children:[A.jsx("style",{children:`
        .TD_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1e293b;
          background: #ffffff;
        }

        /* --- SECTION 1: HERO --- */
        .TD_Hero {
          padding: 120px 5% 80px;
          display: flex;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
          min-height: 85vh;
        }

        .TD_Hero_Inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          width: 100%;
          max-width: 1300px;
        }
        @media (max-width: 1024px) {
          .TD_Hero { padding-top: 140px; }
          .TD_Hero_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .TD_Hero_Content { max-width: 100%; order: 1; }
          .TD_Hero_Img { width: 100%; order: -1; margin-bottom: 40px; display: flex; justify-content: center; }
          .TD_Hero_Img img { max-width: 400px; border-width: 10px; }
        }

        .TD_Hero_Content { flex: 1.2; max-width: 650px; }
        .TD_Badge { 
          color: #3b82f6; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; 
          font-size: 0.85rem; margin-bottom: 20px; display: block;
        }
        .TD_Hero_H1 { 
         margin-bottom: 25px; }
        .TD_Tagline { font-size: 1.4rem; color: #3b82f6; font-weight: 600; margin-bottom: 20px; }
        .TD_Hero_P { font-size: 1.1rem; color: #64748b; line-height: 1.8; margin-bottom: 40px; }

        .TD_Btn_Group { display: flex; gap: 20px; }
        @media (max-width: 1024px) { .TD_Btn_Group { justify-content: center; } }
        .TD_Primary_Btn { 
          background: #3b82f6; color: white; padding: 10px 20px; border-radius: 100px; 
          font-weight: 600; box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3); transition: 0.3s;
          border: none; cursor: pointer;
        }
        .TD_Primary_Btn:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(59, 130, 246, 0.4); }

        .TD_Hero_Img { flex: 1; position: relative; display: flex; justify-content: center; }
        .TD_Hero_Img img { 
            width: 100%; 
            max-width: 550px; 
            border-radius: 40px; 
            border: 15px solid #fff; 
            box-shadow: 0 40px 100px rgba(0,0,0,0.1); 
            object-fit: cover;
        }
        .TD_Hero_Floating_Card {
          position: absolute; bottom: 30px; left: -30px;
          background: white; padding: 20px; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          display: flex; gap: 12px; align-items: center; z-index: 20;
          border: 1px solid rgba(0,0,0,0.05);
        }
        @media (max-width: 1024px) {
          .TD_Hero_Floating_Card { display: none; }
        }

        /* --- SECTION 2: CONTEXT --- */
        .TD_Context { 
          padding: 100px 5%; 
          background: #0f172a; 
          color: #fff; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .TD_Context_Inner {
          width: 100%;
          max-width: 1000px;
        }
        .TD_Context_H1 { color: #fff; }
        .TD_Context_P { color: rgba(255,255,255,0.7); font-size: 1.1rem; line-height: 1.8; }

        /* --- SECTION 3: CAPABILITIES --- */
        .TD_Cap_Section { 
          padding: 100px 5%; 
          background: #f8fafc; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .TD_Cap_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .TD_Cap_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 25px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .TD_Cap_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .TD_Cap_Grid { grid-template-columns: repeat(4, 1fr); } }

        .TD_Cap_Card {
          background: white;
          padding: 45px 35px;
          border-radius: 30px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e2e8f0;
          z-index: 1;
        }

        .TD_Cap_Card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 0;
    background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%);          z-index: -1;
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .TD_Cap_Card:hover::before { height: 100%; }
        .TD_Cap_Card:hover h3, 
        .TD_Cap_Card:hover p,
        .TD_Cap_Card:hover .TD_Cap_Icon { color: #ffffff !important; }
        
        .TD_Cap_Icon { width: 60px; height: 60px; background: #eff6ff; color: #3b82f6; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; transition: 0.3s; }
        .TD_Cap_Card:hover .TD_Cap_Icon { background: rgba(255,255,255,0.1); }
        .TD_Cap_Card h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; color: #22314f; transition: 0.3s; }
        .TD_Cap_Card p { color: #64748b; line-height: 1.6; font-size: 0.95rem; transition: 0.3s; }

        /* --- SECTION 4: OUTCOMES --- */
        .TD_Outcome { 
          padding: 50px 5%; 
          display: flex; 
          justify-content: center;
          background: white;
        }
        .TD_Outcome_Inner {
          display: flex;
          align-items: center;
          gap: 60px;
          width: 100%;
          max-width: 1300px;
        }
        .TD_Outcome_Content { flex: 1.2; text-align: left; }
        .TD_Outcome_Img { flex: 1; display: flex; justify-content: center; }
        .TD_Outcome_Img img { width: 100%; max-width: 600px; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.15); }
        @media (max-width: 1024px) {
          .TD_Outcome_Inner { flex-direction: column; text-align: center; gap: 40px; }
          .TD_Outcome_Img { order: -1; width: 100%; }
          .Outcome_Item { text-align: left; }
        }
        
        .Outcome_List { margin-top: 40px; }
        .Outcome_Item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
        .Outcome_Check { background: #10b981; color: white; border-radius: 50%; padding: 4px; display: flex; align-items: center; justify-content: center; }
        .Outcome_Title { font-weight: 800; color: #22314f; display: block; font-size: 1.1rem; margin-bottom: 2px;}
        .Outcome_Desc { color: #64748b; font-size: 0.95rem; line-height: 1.5; }

        /* --- SECTION 5: APPROACH --- */
        .TD_Flow { 
          padding: 50px 5%; 
          background: #fdfdfd; 
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .TD_Flow_Inner {
          width: 100%;
          max-width: 1300px;
        }
        .TD_Flow_Grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 30px; 
          margin-top: 60px; 
          width: 100%;
        }
        @media (min-width: 768px) { .TD_Flow_Grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .TD_Flow_Grid { grid-template-columns: repeat(4, 1fr); } }

        .TD_Step_Card {
          background: white; border-radius: 20px; padding: 50px 30px; position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f1f5f9; transition: 0.4s;
          text-align: left;
        }
        .TD_Step_Card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .TD_Step_Num { 
          position: absolute; top: -15px; left: 30px;
          background: #22314f; color: white; padding: 5px 20px; border-radius: 50px; font-weight: 900; font-size: 0.8rem;
        }
        .TD_Step_Icon { color: #3b82f6; margin-bottom: 20px; }
        .TD_Step_H { font-size: 1.3rem; font-weight: 800; color: #22314f; margin-bottom: 12px; }
        .TD_Step_P { color: #64748b; font-size: 0.95rem; line-height: 1.6; }

        /* --- FINAL --- */
        .TD_Final { 
          padding: 100px 5%; 
          background: #002e5b; color: #ffffff; text-align: center;
          display: flex;
          justify-content: center;
        }
        .TD_Final_Inner { max-width: 900px; width: 100%; }
        .TD_Final_H { font-weight: 900; line-height: 1.1; margin-bottom: 30px; color:#ffffff; }
      `}),A.jsx("section",{className:"TD_Hero",children:A.jsxs("div",{className:"TD_Hero_Inner",children:[A.jsxs(t.div,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.8},className:"TD_Hero_Content",children:[A.jsx("div",{className:"flex items-center gap-3 mb-6",children:A.jsx("span",{className:"px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-100",children:"Training & Development"})}),A.jsx("h2",{className:"TD_Hero_H1 NET_Hero_H1",children:"Training & Development"}),A.jsxs("p",{className:"font-bold mb-6 flex items-center gap-2 subtitle",style:{fontSize:"1.2rem",color:"#3b82f6"},children:[A.jsx(U,{size:24,className:"text-blue-600"}),"Building a High-Performance Workforce Through Structured Enterprise Learning Systems."]}),A.jsx("p",{className:"TD_Hero_P",children:"CHN Technologies delivers professional training and development services focused on workforce performance, technical proficiency, and long-term organizational stability. Our solutions support institutional knowledge growth and operational reliability through structured learning paths."}),A.jsx("div",{className:"TD_Btn_Group",children:A.jsx(c,{to:"/contact",children:A.jsx("button",{className:"TD_Primary_Btn",children:"Customize Your Learning Plan"})})})]}),A.jsxs(t.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:1},className:"TD_Hero_Img",children:[A.jsx("img",{src:Ca,alt:"Corporate Training Session"}),A.jsxs(t.div,{initial:{opacity:0,x:-20,scale:.9},animate:{opacity:1,x:0,scale:1,y:[0,-10,0]},transition:{duration:.8,delay:.5,y:{repeat:1/0,duration:4,ease:"easeInOut"}},className:"TD_Hero_Floating_Card bg-white/90 backdrop-blur-md",children:[A.jsx("div",{className:"bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-200 shrink-0",children:A.jsx(XA,{className:"text-white",size:24})}),A.jsxs("div",{children:[A.jsx("p",{className:"text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase",children:"Technical Proficiency"}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("p",{className:"text-lg font-black text-slate-800 tracking-tight",children:"GLOBAL STANDARDS"}),A.jsx("div",{className:"h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center",children:A.jsx("div",{className:"h-1.5 w-1.5 bg-white rounded-full animate-pulse"})})]})]})]})]})]})}),A.jsx("section",{className:"TD_Context",children:A.jsx("div",{className:"TD_Context_Inner",children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 TD_Context_H1",children:"Reduced Institutional Knowledge Is a Silent Tax on Enterprise Growth"}),A.jsx("p",{className:"TD_Context_P",children:"Business performance and innovation depend on how predictably you can manage and expand your institutional workforce knowledge. Poorly trained teams lead to technical debt, high turnover, and reduced organizational speed. CHN Technologies helps organisations maintain structured, secure, and highly skilled business environments."})]})})}),A.jsx("section",{className:"TD_Cap_Section",children:A.jsxs("div",{className:"TD_Cap_Inner",children:[A.jsx("span",{className:"TD_Badge",children:"Core Domains"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Strategic Enterprise Learning Capabilities"}),A.jsx("div",{className:"TD_Cap_Grid",children:[{title:"Skills Assessment",icon:A.jsx(fA,{size:28}),desc:"Identifying technical and soft skill gaps within your workforce to ensure targeted and high-impact training."},{title:"Custom Learning Paths",icon:A.jsx(st,{size:28}),desc:"Designing tailored curriculum modules aligned with your business technologies and organizational goals."},{title:"Leadership Development",icon:A.jsx(XA,{size:28}),desc:"Structured programs designed to elevate high-potential employees into mission-critical management roles."},{title:"Technical Certifications",icon:A.jsx(nt,{size:28}),desc:"Preparing your engineering and IT teams for globally recognized certifications to ensure technical excellence."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},className:"TD_Cap_Card",children:[A.jsx("div",{className:"TD_Cap_Icon",children:e.icon}),A.jsx("h3",{children:e.title}),A.jsx("p",{children:e.desc})]},i))})]})}),A.jsx("section",{className:"TD_Outcome",children:A.jsxs("div",{className:"TD_Outcome_Inner",children:[A.jsx("div",{className:"TD_Outcome_Img",children:A.jsx("img",{src:UA,alt:"Workforce Collaboration"})}),A.jsxs("div",{className:"TD_Outcome_Content",children:[A.jsx("span",{className:"TD_Badge",children:"Business Benefits"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Business Benefits of Structured Enterprise Learning"}),A.jsx("div",{className:"Outcome_List",children:[{title:"Optimal Strategic Scaling",desc:"Training systems that ensure institutional knowledge grows with organisational goals."},{title:"Predictable Performance Growth",desc:"Structured learning outcomes ensure measurable improvement in workforce productivity."},{title:"High-Stability Workforce",desc:"Investing in employees increases retention and reduces institutional knowledge debt."}].map((e,i)=>A.jsxs("div",{className:"Outcome_Item",children:[A.jsx("div",{className:"Outcome_Check",children:A.jsx(j,{size:16})}),A.jsxs("div",{children:[A.jsx("span",{className:"Outcome_Title",children:e.title}),A.jsx("p",{className:"Outcome_Desc",children:e.desc})]})]},i))})]})]})}),A.jsx("section",{className:"TD_Flow",children:A.jsxs("div",{className:"TD_Flow_Inner",children:[A.jsx("span",{className:"TD_Badge",children:"Strategic Framework"}),A.jsx("h2",{className:"NET_Hero_H1",children:"Our Strategic Approach"}),A.jsx("div",{className:"TD_Flow_Grid",children:[{num:"01",h:"Assess",icon:A.jsx(W,{size:30}),p:"Review workforce capabilities, existing knowledge gaps, and enterprise learning objectives."},{num:"02",h:"Design",icon:A.jsx(J,{size:30}),p:"Create tailored training paths, curriculum modules, and internal development policies."},{num:"03",h:"Deliver",icon:A.jsx(AA,{size:30}),p:"Implement high-fidelity training sessions and workshops with technical process integrity."},{num:"04",h:"Evaluate",icon:A.jsx(O,{size:30}),p:"Measurement of skill acquisition, workforce productivity, and long-term business impact."}].map((e,i)=>A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},className:"TD_Step_Card",children:[A.jsxs("div",{className:"TD_Step_Num",children:["STAGE ",e.num]}),A.jsx("div",{className:"TD_Step_Icon",children:e.icon}),A.jsx("h3",{className:"TD_Step_H",children:e.h}),A.jsx("p",{className:"TD_Step_P",children:e.p})]},i))})]})}),A.jsxs("section",{style:{padding:"50px 5%",textAlign:"center",background:"#0f172a",color:"#fff",position:"relative",overflow:"hidden"},children:[A.jsx("div",{style:{position:"absolute",inset:0,opacity:.1,backgroundImage:"radial-gradient(circle at 2px 2px, white 1px, transparent 0)",backgroundSize:"40px 40px"}}),A.jsx("div",{style:{maxWidth:"1000px",margin:"0 auto",position:"relative",zIndex:10},children:A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:1},viewport:{once:!0},children:[A.jsx("h2",{className:"NET_Hero_H1 text-white",children:"Build a High-Performance Workforce"}),A.jsxs("p",{className:"EUC_Hero_P",style:{margin:"30px auto 50px",color:"rgba(255,255,255,0.7)",fontSize:"1.3rem"},children:["Connect with CHN Technologies to understand how structured training and development consulting ",A.jsx("br",{}),"can support workforce growth and operational reliability."]}),A.jsx("div",{className:"flex flex-col md:flex-row gap-6 justify-center items-center",children:A.jsx(c,{to:"/contact",children:A.jsxs("button",{className:"TD_Primary_Btn",style:{margin:"0 auto",display:"flex",alignItems:"center",gap:"15px"},children:["Contact a Training Specialist ",A.jsx(Q,{size:24})]})})})]})})]})]}),ya=()=>A.jsxs("div",{className:"PP_WRAPPER",children:[A.jsx("style",{children:`
        .PP_WRAPPER {
          font-family: 'Outfit', 'Inter', sans-serif;
          color: #1a2b4b;
          background: #ffffff;
        }

        .PP_Hero {
          padding: 160px 5% 80px;
          background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
          text-align: center;
        }

        @media (max-width: 768px) {
          .PP_Hero { padding-top: 140px; }
        }

        .PP_Badge { 
          color: #2563eb; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; 
          font-size: 0.8rem; margin-bottom: 20px; display: inline-block;
          background: rgba(37, 99, 235, 0.08); padding: 8px 16px; border-radius: 100px;
        }

        .PP_Title { font-weight: 900; color: #0f172a; margin-bottom: 20px; letter-spacing: -0.02em; font-size: clamp(2.5rem, 5vw, 4rem); }
        .PP_Subtitle { color: #64748b; font-weight: 500; }

        .PP_Content {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 5% 140px;
        }

        .PP_Section { margin-bottom: 60px; }
        .PP_Section_H { 
          color: #0f172a; margin-bottom: 25px; 
          display: flex; align-items: center; gap: 15px; letter-spacing: -0.01em;
        }
        .PP_Section_Icon { color: #2563eb; background: rgba(37, 99, 235, 0.08); padding: 10px; border-radius: 12px; min-width: 44px; display: flex; justify-content: center; }
        
        .PP_P { color: #475569; line-height: 1.8; margin-bottom: 20px; font-size: 1.1rem; }
        .PP_List { list-style: none; padding: 0; }
        .PP_Item { display: flex; gap: 15px; margin-bottom: 15px; align-items: flex-start; text-align: left; }
        .PP_Check { color: #2563eb; margin-top: 4px; flex-shrink: 0; }

        .PP_Contact_Box {
          background: #f8fafc;
          padding: 40px;
          border-radius: 30px;
          border: 1px solid rgba(0,0,0,0.04);
          margin-top: 40px;
          text-align: left;
        }
        .PP_Contact_Item { display: flex; gap: 15px; margin-bottom: 20px; align-items: center; color: #475569; font-weight: 500; }
        .PP_Contact_Icon { color: #2563eb; min-width: 20px; }

        .PP_Footer_Note {
           text-align: center; color: #94a3b8; font-size: 0.9rem; padding: 40px; border-top: 1px solid #f1f5f9;
        }

        @media (max-width: 640px) {
          .PP_Contact_Box { padding: 30px 20px; }
          .PP_Section_H { flex-direction: column; text-align: center; }
          .PP_Item { font-size: 0.95rem; }
        }
      `}),A.jsx("section",{className:"PP_Hero",children:A.jsxs(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[A.jsx("span",{className:"PP_Badge",children:"Trust & Transparency"}),A.jsx("h2",{className:"PP_Title NET_Hero_H1",children:"Privacy Policy"}),A.jsx("p",{className:"PP_Subtitle",children:"Last Updated: July 5, 2025"})]})}),A.jsxs("section",{className:"PP_Content",children:[A.jsxs("div",{className:"PP_Section",children:[A.jsxs("h2",{className:"NET_Hero_H1 PP_Section_H",children:[A.jsx("span",{className:"PP_Section_Icon",children:A.jsx(M,{size:24})}),"1. Information collection"]}),A.jsx("p",{className:"PP_P",children:"We collect information to provide better services to all our users. The types of information we collect include:"}),A.jsxs("ul",{className:"PP_List",children:[A.jsxs("li",{className:"PP_Item",children:[A.jsx(j,{size:18,className:"PP_Check"})," ",A.jsxs("span",{children:[A.jsx("strong",{children:"Personal Data:"})," Name, email address, phone number, and company name shared via forms."]})]}),A.jsxs("li",{className:"PP_Item",children:[A.jsx(j,{size:18,className:"PP_Check"})," ",A.jsxs("span",{children:[A.jsx("strong",{children:"Usage Data:"})," Device information, IP addresses, and behavioral data on how you interact with our site."]})]}),A.jsxs("li",{className:"PP_Item",children:[A.jsx(j,{size:18,className:"PP_Check"})," ",A.jsxs("span",{children:[A.jsx("strong",{children:"Communication:"})," Records of any correspondence you have with our team."]})]})]})]}),A.jsxs("div",{className:"PP_Section",children:[A.jsxs("h2",{className:"NET_Hero_H1 PP_Section_H",children:[A.jsx("span",{className:"PP_Section_Icon",children:A.jsx(ge,{size:24})}),"2. How we use information"]}),A.jsx("p",{className:"PP_P",children:"The data we collect is used strictly for operational and improvement purposes:"}),A.jsxs("ul",{className:"PP_List",children:[A.jsxs("li",{className:"PP_Item",children:[A.jsx(j,{size:18,className:"PP_Check"})," ",A.jsx("span",{children:"To provide and maintain our suite of IT and consulting services."})]}),A.jsxs("li",{className:"PP_Item",children:[A.jsx(j,{size:18,className:"PP_Check"})," ",A.jsx("span",{children:"To notify you about changes to our services or upcoming technical updates."})]}),A.jsxs("li",{className:"PP_Item",children:[A.jsx(j,{size:18,className:"PP_Check"})," ",A.jsx("span",{children:"To provide customer support and respond to your inquiries effectively."})]}),A.jsxs("li",{className:"PP_Item",children:[A.jsx(j,{size:18,className:"PP_Check"})," ",A.jsx("span",{children:"To monitor the usage of our website and detect/prevent technical issues."})]})]})]}),A.jsxs("div",{className:"PP_Section",children:[A.jsxs("h2",{className:"NET_Hero_H1 PP_Section_H",children:[A.jsx("span",{className:"PP_Section_Icon",children:A.jsx(pe,{size:24})}),"3. Data security & protection"]}),A.jsx("p",{className:"PP_P",children:"The security of your data is important to us. We implement a variety of security measures to maintain the safety of your personal information:"}),A.jsx("p",{className:"PP_P",children:"We use SSL encryption to protect data transmitted between your browser and our servers. Access to personal data is restricted to authorized employees and partners who need the information to perform their duties."})]}),A.jsxs("div",{className:"PP_Section",children:[A.jsxs("h2",{className:"NET_Hero_H1 PP_Section_H",children:[A.jsx("span",{className:"PP_Section_Icon",children:A.jsx(GA,{size:24})}),"4. Your rights"]}),A.jsx("p",{className:"PP_P",children:"You have certain rights regarding your personal data, including the right to access, correct, or request the deletion of the information we hold about you. You may also opt-out of receiving marketing communications at any time."})]}),A.jsxs("div",{className:"PP_Section",children:[A.jsxs("h2",{className:"NET_Hero_H1 PP_Section_H",children:[A.jsx("span",{className:"PP_Section_Icon",children:A.jsx(K,{size:24})}),"7. Contact information"]}),A.jsx("p",{className:"PP_P",children:"If you have any questions about this Privacy Policy, please contact us at:"}),A.jsxs("div",{className:"PP_Contact_Box",children:[A.jsxs("div",{className:"PP_Contact_Item",children:[A.jsx(K,{size:20,className:"PP_Contact_Icon"}),A.jsx("span",{children:"info@chnindia.com"})]}),A.jsxs("div",{className:"PP_Contact_Item",children:[A.jsx(wA,{size:20,className:"PP_Contact_Icon"}),A.jsx("span",{children:"+91 7010203031"})]}),A.jsxs("div",{className:"PP_Contact_Item",children:[A.jsx(oA,{size:20,className:"PP_Contact_Icon"}),A.jsx("span",{children:"No. 28, Fourth Main Road, CIT Nagar, Chennai - 600035"})]})]})]}),A.jsx("div",{className:"PP_Footer_Note",children:"© 2025 CHN Technologies. All rights reserved. Continued use of our website implies acceptance of this policy."})]})]}),te=[{number:"01",icon:GA,title:"Definitions",content:`"Company", "We", "Us" refers to CHN Technologies. "You" refers to any user accessing our website or services. "Services" include all CHN's offerings such as IT, software, workforce consulting, and more.`,type:"text"},{number:"02",icon:CA,title:"Use of website",bullets:["Use only for lawful purposes","Do not disrupt or interfere with site operation","No unauthorized access or misuse of our systems"],footer:"We reserve the right to restrict or revoke access at any time.",type:"bullets"},{number:"03",icon:M,title:"Intellectual property",content:"All content including graphics, code, and media is the property of CHN Technologies and protected by law. You may not reproduce or republish content without permission.",type:"text"},{number:"04",icon:FA,title:"Service engagement",bullets:["Deliverables and fees will be mutually agreed upon","Clients must provide accurate information and feedback","We may terminate service due to misuse, breach, or non-payment"],type:"bullets"},{number:"05",icon:rt,title:"Payments",content:"All payments follow agreed contracts or invoices. Delays may incur interest or penalties.",type:"text"},{number:"06",icon:ot,title:"No refund policy",content:"Payments are non-refundable unless otherwise stated in a signed agreement. Access to services or products indicates acceptance of the no-refund policy.",type:"text",highlight:!0},{number:"07",icon:lt,title:"Disclaimers",content:'Website content is provided "as is" without warranties. We do not guarantee completeness, accuracy, or specific outcomes.',type:"text"},{number:"08",icon:U,title:"Limitation of liability",bullets:["We are not liable for inability to use the site","No responsibility for data loss or unauthorized access","No liability for delays caused by third-party providers"],type:"bullets"},{number:"09",icon:zA,title:"Third-party links",content:"Our website may link to external sites. We are not responsible for their content or privacy practices.",type:"text"},{number:"10",icon:ct,title:"Indemnification",content:"You agree to indemnify CHN Technologies from any claims, damages, or expenses arising from your use of our services or violation of these terms.",type:"text"},{number:"11",icon:dt,title:"Termination",content:"We may suspend or terminate access without notice if you violate these terms.",type:"text"},{number:"12",icon:ue,title:"Governing law",content:"All matters are governed by the laws of India. Any dispute will be resolved in courts of Chennai, India.",type:"text"},{number:"13",icon:gA,title:"Changes to terms",content:"We may update these terms at any time. Continued use of our website means you accept the revised terms.",type:"text"}],va=()=>A.jsxs("div",{className:"TC_WRAPPER",children:[A.jsx("style",{children:`
                .TC_WRAPPER {
                  font-family: 'Outfit', 'Inter', sans-serif;
                  background: #ffffff;
                  color: #1a2b4b;
                  overflow-x: hidden;
                }
                .TC_Hero {
                    background: linear-gradient(135deg, #001a3a 0%, #002e5b 50%, #0050a0 100%);
                    padding: 160px 5% 100px;
                    position: relative;
                    overflow: hidden;
                }
                .TC_Hero::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -20%;
                    width: 700px; height: 700px;
                    background: radial-gradient(circle, rgba(0,96,255,0.15) 0%, transparent 70%);
                    pointer-events: none;
                }
                .TC_Hero_Grid {
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
                    background-size: 60px 60px;
                    pointer-events: none;
                }
                .TC_Badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(0,96,255,0.2);
                    border: 1px solid rgba(0,96,255,0.4);
                    color: #60a5fa;
                    padding: 8px 20px;
                    border-radius: 100px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    margin-bottom: 30px;
                }
                .TC_Title {
                    font-size: clamp(2.5rem, 6vw, 5rem);
                    font-weight: 900;
                    color: #ffffff;
                    line-height: 1.05;
                    letter-spacing: -0.03em;
                    margin-bottom: 20px;
                }
                .TC_Meta {
                    color: rgba(255,255,255,0.5);
                    font-size: 0.95rem;
                    font-weight: 500;
                }
                .TC_Intro_Text {
                    color: rgba(255,255,255,0.7);
                    font-size: 1.1rem;
                    line-height: 1.8;
                    max-width: 750px;
                    margin-top: 30px;
                    font-weight: 400;
                }

                @media (max-width: 1024px) {
                  .TC_Hero { padding: 140px 5% 80px; text-align: center; }
                  .TC_Intro_Text { margin: 30px auto 0; }
                }

                /* TOC sidebar */
                .TC_Layout {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    gap: 60px;
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 80px 5% 120px;
                    align-items: start;
                }
                @media (max-width: 1024px) {
                    .TC_Layout { grid-template-columns: 1fr; gap: 40px; }
                    .TC_TOC { display: none; }
                    .TC_Section { text-align: center; }
                    .TC_Section_Header { flex-direction: column; text-align: center; align-items: center; }
                    .TC_Section_Text, .TC_Highlight_Box, .TC_Bullet_List, .TC_Footer_Note { margin-left: 0 !important; }
                    .TC_Bullet_Item { justify-content: center; text-align: center; }
                }
                .TC_TOC {
                    position: sticky;
                    top: 100px;
                    background: #f8fafc;
                    border-radius: 24px;
                    padding: 30px;
                    border: 1px solid #e2e8f0;
                }
                .TC_TOC_Title {
                    font-size: 0.72rem;
                    font-weight: 800;
                    color: #0060ff;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    margin-bottom: 20px;
                }
                .TC_TOC_Item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 0;
                    border-bottom: 1px solid #f1f5f9;
                    text-decoration: none;
                    color: #475569;
                    font-size: 0.85rem;
                    font-weight: 500;
                    transition: color 0.2s;
                }
                .TC_TOC_Item:hover { color: #0060ff; }
                .TC_TOC_Num {
                    font-size: 0.72rem;
                    font-weight: 800;
                    color: #0060ff;
                    background: #eff6ff;
                    width: 24px; height: 24px;
                    border-radius: 6px;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }

                /* Sections */
                .TC_Section {
                    border-bottom: 1px solid #f1f5f9;
                    padding: 50px 0;
                    scroll-margin-top: 100px;
                }
                .TC_Section:first-child { padding-top: 0; }
                .TC_Section_Header {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                    margin-bottom: 24px;
                }
                .TC_Section_Num {
                    font-size: 0.72rem;
                    font-weight: 900;
                    color: #0060ff;
                    background: #eff6ff;
                    padding: 6px 12px;
                    border-radius: 10px;
                    letter-spacing: 0.05em;
                    flex-shrink: 0;
                }
                .TC_Section_Icon {
                    width: 48px; height: 48px;
                    background: linear-gradient(135deg, #eff6ff, #dbeafe);
                    color: #0060ff;
                    border-radius: 14px;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }
                .TC_Section_Title {
                    color: #002e5b;
                    letter-spacing: -0.01em;
                }
                .TC_Section_Text {
                    color: #475569;
                    font-size: 1.05rem;
                    line-height: 1.8;
                    margin-left: 66px;
                }
                .TC_Highlight_Box {
                    background: linear-gradient(135deg, #fff7ed, #fef3c7);
                    border: 1px solid #fbbf24;
                    border-radius: 20px;
                    padding: 24px 30px;
                    margin-left: 66px;
                    margin-top: 10px;
                }
                .TC_Highlight_Box p {
                    color: #92400e;
                    font-size: 1rem;
                    line-height: 1.7;
                    font-weight: 500;
                    margin: 0;
                }
                .TC_Bullet_List {
                    margin-left: 66px;
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .TC_Bullet_Item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    color: #475569;
                    font-size: 1.05rem;
                    line-height: 1.6;
                }
                .TC_Bullet_Dot {
                    width: 8px; height: 8px;
                    background: #0060ff;
                    border-radius: 50%;
                    flex-shrink: 0;
                    margin-top: 10px;
                }
                .TC_Footer_Note {
                    margin-left: 66px;
                    margin-top: 16px;
                    color: #64748b;
                    font-size: 0.95rem;
                    font-style: italic;
                }

                /* Contact card */
                .TC_Contact_Card {
                    background: linear-gradient(135deg, #002e5b 0%, #0050a0 100%);
                    border-radius: 40px;
                    padding: 50px;
                    color: white;
                    margin-top: 60px;
                }
                .TC_Contact_Title {
                    font-size: clamp(1.5rem, 4vw, 2rem);
                    font-weight: 900;
                    margin-bottom: 12px;
                    letter-spacing: -0.01em;
                }
                .TC_Contact_Subtitle {
                    color: rgba(255,255,255,0.6);
                    margin-bottom: 40px;
                    font-size: 1rem;
                }
                .TC_Contact_Grid {
                    display: grid;
                    grid-template_columns: 1fr;
                    gap: 24px;
                }
                @media (min-width: 640px) { .TC_Contact_Grid { grid-template-columns: repeat(2, 1fr); } }

                .TC_Contact_Item {
                    background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 20px;
                    padding: 24px;
                    display: flex;
                    gap: 16px;
                    align-items: flex-start;
                    text-align: left;
                }
                .TC_Contact_Icon {
                    color: #60a5fa;
                    flex-shrink: 0;
                    margin-top: 4px;
                }
                .TC_Contact_Label {
                    font-size: 0.72rem;
                    color: rgba(255,255,255,0.5);
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 6px;
                }
                .TC_Contact_Value {
                    font-size: 1rem;
                    color: #fff;
                    font-weight: 500;
                    line-height: 1.5;
                }

                @media (max-width: 640px) {
                  .TC_Contact_Card { padding: 40px 20px; }
                  .TC_Contact_Item { padding: 20px; }
                }
            `}),A.jsxs("section",{className:"TC_Hero",children:[A.jsx("div",{className:"TC_Hero_Grid"}),A.jsxs(t.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},style:{position:"relative",zIndex:10},children:[A.jsxs("div",{className:"TC_Badge",children:[A.jsx(M,{size:12}),"Legal Document"]}),A.jsxs("h2",{className:"TC_Title NET_Hero_H1",children:["Terms & ",A.jsx("span",{style:{color:"#60a5fa"},children:"Conditions"})]}),A.jsx("p",{className:"TC_Meta",children:"Last updated: July 5, 2025"}),A.jsx("p",{className:"TC_Intro_Text",children:"Welcome to CHN Technologies. By using our website (www.chntechs.com) and services, you agree to comply with the following terms. If you do not agree, please discontinue use of our website and services."})]})]}),A.jsxs("div",{className:"TC_Layout",children:[A.jsxs("aside",{className:"TC_TOC",children:[A.jsx("p",{className:"TC_TOC_Title",children:"Table of Contents"}),te.map(e=>A.jsxs("a",{href:`#section-${e.number}`,className:"TC_TOC_Item",children:[A.jsx("span",{className:"TC_TOC_Num",children:e.number}),e.title]},e.number)),A.jsxs("a",{href:"#section-contact",className:"TC_TOC_Item",children:[A.jsx("span",{className:"TC_TOC_Num",children:"14"}),"Contact Us"]})]}),A.jsxs("div",{children:[te.map((e,i)=>{const s=e.icon;return A.jsxs(t.div,{id:`section-${e.number}`,className:"TC_Section",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.05},viewport:{once:!0,margin:"-60px"},children:[A.jsxs("div",{className:"TC_Section_Header",children:[A.jsx("span",{className:"TC_Section_Num",children:e.number}),A.jsx("div",{className:"TC_Section_Icon",children:A.jsx(s,{size:20})}),A.jsx("h2",{className:"NET_Hero_H1 TC_Section_Title",children:e.title})]}),e.type==="text"&&(e.highlight?A.jsx("div",{className:"TC_Highlight_Box",children:A.jsx("p",{children:e.content})}):A.jsx("p",{className:"TC_Section_Text",children:e.content})),e.type==="bullets"&&A.jsxs(A.Fragment,{children:[A.jsx("ul",{className:"TC_Bullet_List",children:e.bullets?.map((n,d)=>A.jsxs("li",{className:"TC_Bullet_Item",children:[A.jsx("span",{className:"TC_Bullet_Dot"}),n]},d))}),e.footer&&A.jsx("p",{className:"TC_Footer_Note",children:e.footer})]})]},e.number)}),A.jsxs(t.div,{id:"section-contact",className:"TC_Section",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:[A.jsxs("div",{className:"TC_Section_Header",children:[A.jsx("span",{className:"TC_Section_Num",children:"14"}),A.jsx("div",{className:"TC_Section_Icon",children:A.jsx(K,{size:20})}),A.jsx("h2",{className:"NET_Hero_H1 TC_Section_Title",children:"Contact Us"})]}),A.jsxs("div",{className:"TC_Contact_Card",children:[A.jsx("p",{className:"TC_Contact_Title",children:"CHN Technologies"}),A.jsx("p",{className:"TC_Contact_Subtitle",children:"For queries about these terms, reach us through any channel below."}),A.jsxs("div",{className:"TC_Contact_Grid",children:[A.jsxs("div",{className:"TC_Contact_Item",children:[A.jsx(K,{size:18,className:"TC_Contact_Icon"}),A.jsxs("div",{children:[A.jsx("p",{className:"TC_Contact_Label",children:"Email"}),A.jsx("p",{className:"TC_Contact_Value",children:"info@chntechs.com"})]})]}),A.jsxs("div",{className:"TC_Contact_Item",children:[A.jsx(wA,{size:18,className:"TC_Contact_Icon"}),A.jsxs("div",{children:[A.jsx("p",{className:"TC_Contact_Label",children:"Phone"}),A.jsx("p",{className:"TC_Contact_Value",children:"+91 70102 00001"})]})]}),A.jsxs("div",{className:"TC_Contact_Item",children:[A.jsx(CA,{size:18,className:"TC_Contact_Icon"}),A.jsxs("div",{children:[A.jsx("p",{className:"TC_Contact_Label",children:"Website"}),A.jsx("p",{className:"TC_Contact_Value",children:"www.chntechs.com"})]})]}),A.jsxs("div",{className:"TC_Contact_Item",children:[A.jsx(oA,{size:18,className:"TC_Contact_Icon"}),A.jsxs("div",{children:[A.jsx("p",{className:"TC_Contact_Label",children:"Address"}),A.jsxs("p",{className:"TC_Contact_Value",children:["No. 28, Fourth Main Road,",A.jsx("br",{}),"CIT Nagar, Chennai – 600035"]})]})]})]})]})]}),A.jsxs("div",{style:{marginTop:"50px",display:"flex",gap:"16px",flexWrap:"wrap",justifyContent:"center"},className:"related_links",children:[A.jsxs(c,{to:"/privacy-policy",style:{display:"inline-flex",alignItems:"center",gap:8,background:"#eff6ff",color:"#0060ff",padding:"12px 24px",borderRadius:100,fontWeight:700,fontSize:"0.85rem",textDecoration:"none",border:"1px solid #bfdbfe",transition:"all 0.3s"},children:[A.jsx(M,{size:15})," Privacy Policy"]}),A.jsxs(c,{to:"/contact",style:{display:"inline-flex",alignItems:"center",gap:8,background:"#002e5b",color:"#fff",padding:"12px 24px",borderRadius:100,fontWeight:700,fontSize:"0.85rem",textDecoration:"none",transition:"all 0.3s"},children:[A.jsx(K,{size:15})," Contact Us"]})]})]})]})]}),Na=[{id:"it-infrastructure",label:"IT Infrastructure",color:"#0060ff",bg:"#eff6ff",description:"End-to-end infrastructure services that keep your operations stable, secure, and connected.",services:[{name:"Network Management",link:"/network",icon:pt,desc:"Network design, monitoring, and performance optimisation."},{name:"Cyber Security",link:"/cybersecurity",icon:M,desc:"Threat detection, compliance, and access management."},{name:"End User Computing",link:"/enduser",icon:OA,desc:"Provisioning, VDI, device lifecycle, and helpdesk."},{name:"Server Administration",link:"/server",icon:IA,desc:"Server setup, OS patching, and disaster recovery."},{name:"LAN Cabling & Surveillance",link:"/lancabling",icon:gt,desc:"Structured cabling, CCTV, and access control systems."}]},{id:"software-solutions",label:"Software Solutions",color:"#7c3aed",bg:"#f5f3ff",description:"Custom-built digital products and web platforms tailored to your business workflows.",services:[{name:"Web Design & Development",link:"/webdesign",icon:CA,desc:"Responsive websites, CMS implementation, and UI/UX design."},{name:"Application Development",link:"/application",icon:LA,desc:"Scalable apps, mobile solutions, and API integrations."}]},{id:"digital-solutions",label:"Digital Solutions",color:"#059669",bg:"#ecfdf5",description:"Data-driven processes and intelligent automation to improve efficiency and visibility.",services:[{name:"Data Analytics",link:"/dataanalytics",icon:xt,desc:"BI dashboards, predictive analytics, and data warehousing."},{name:"Automation",link:"/automation",icon:U,desc:"RPA, workflow automation, and process integration."}]}],ja=()=>A.jsxs("div",{className:"TECH_WRAPPER",children:[A.jsx("style",{children:`
                .TECH_WRAPPER {
                  font-family: 'Outfit', 'Inter', sans-serif;
                  background: #fff;
                  color: #1a2b4b;
                  overflow-x: hidden;
                }
                .TECH_Hero {
                    background: linear-gradient(135deg, #001a3a 0%, #002e5b 60%, #003f80 100%);
                    padding: 160px 5% 100px;
                    position: relative;
                    overflow: hidden;
                }
                .TECH_Hero::before {
                    content: '';
                    position: absolute;
                    top: -200px; right: -200px;
                    width: 700px; height: 700px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(0,96,255,0.12) 0%, transparent 70%);
                    pointer-events: none;
                }
                .TECH_Hero_Grid {
                    position: absolute; inset: 0;
                    background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
                    background-size: 50px 50px;
                    pointer-events: none;
                }
                .TECH_Badge {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(0,96,255,0.18); border: 1px solid rgba(0,96,255,0.35);
                    color: #60a5fa; padding: 7px 18px; border-radius: 100px;
                    font-size: 0.72rem; font-weight: 700; letter-spacing: 0.15em;
                    text-transform: uppercase; margin-bottom: 28px;
                }
                .TECH_Hero_Title {
                    font-size: clamp(2.5rem, 6vw, 5.5rem);
                    font-weight: 900; color: #fff;
                    line-height: 1.05; letter-spacing: -0.03em;
                    margin-bottom: 20px;
                }
                .TECH_Hero_desc {
                    font-size: 1.1rem; color: rgba(255,255,255,0.7);
                    max-width: 700px; line-height: 1.6;
                }

                @media (max-width: 1024px) {
                    .TECH_Hero { padding: 140px 5% 80px; text-align: center; }
                    .TECH_Hero_desc { margin: 0 auto; }
                    .TECH_Breadcrumb { justify-content: center; }
                }

                /* Body */
                .TECH_Body { max-width: 1300px; margin: 0 auto; padding: 80px 5% 120px; }

                .TECH_Category { margin-bottom: 80px; }
                .TECH_Category_Header {
                    display: flex; align-items: flex-start; gap: 40px;
                    margin-bottom: 40px; padding-bottom: 24px;
                    border-bottom: 1px solid #f1f5f9;
                }
                @media (max-width: 1024px) {
                    .TECH_Category_Header { flex-direction: column; gap: 30px; text-align: center; align-items: center; }
                    .TECH_Category_Desc { margin: 0 auto; }
                }
                .TECH_Category_Label {
                    color: #002e5b; letter-spacing: -0.01em; margin-bottom: 10px;
                }
                .TECH_Category_Desc {
                    font-size: 1rem; color: #64748b;
                    max-width: 700px; line-height: 1.6;
                }
                .TECH_Category_Badge {
                    padding: 6px 16px; border-radius: 100px;
                    font-size: 0.72rem; font-weight: 800;
                    text-transform: uppercase; letter-spacing: 0.1em;
                    white-space: nowrap; flex-shrink: 0;
                }

                .TECH_Grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 20px;
                }
                @media (min-width: 768px) { .TECH_Grid { grid-template-columns: repeat(2, 1fr); } }
                @media (min-width: 1024px) { .TECH_Grid { grid-template-columns: repeat(3, 1fr); } }

                .TECH_Card {
                    background: #fafafa;
                    border: 1px solid #f1f5f9;
                    border-radius: 24px;
                    padding: 30px;
                    text-decoration: none;
                    color: inherit;
                    display: flex; flex-direction: column;
                    transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
                    position: relative; overflow: hidden;
                    height: 100%;
                }
                .TECH_Card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 24px 60px rgba(0,0,0,0.08);
                    border-color: transparent;
                }

                .TECH_Card_Icon {
                    width: 50px; height: 50px; border-radius: 16px;
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 20px; flex-shrink: 0;
                    transition: transform 0.3s;
                }
                .TECH_Card:hover .TECH_Card_Icon { transform: scale(1.1); }

                .TECH_Card_Name {
                    font-size: 1.2rem; font-weight: 800; margin-bottom: 10px;
                    color: #1a2b4b;
                }
                .TECH_Card_Desc {
                    font-size: 0.95rem; color: #64748b; line-height: 1.6;
                    flex: 1;
                }
                .TECH_Card_Arrow {
                    margin-top: 20px; align-self: flex-end;
                    width: 36px; height: 36px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    transition: all 0.3s;
                }
                .TECH_Card:hover .TECH_Card_Arrow { transform: translate(2px, -2px); }

                /* Breadcrumb */
                .TECH_Breadcrumb {
                    display: flex; align-items: center; gap: 10px;
                    font-size: 0.8rem; color: rgba(255,255,255,0.45);
                    margin-bottom: 24px;
                    text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700;
                }
                .TECH_Breadcrumb a { color: rgba(255,255,255,0.45); text-decoration: none; }
                .TECH_Breadcrumb a:hover { color: #fff; }

                /* Bottom CTA */
                .TECH_CTA {
                    background: linear-gradient(135deg, #002e5b, #0060ff);
                    border-radius: 40px; padding: 60px;
                    display: flex; align-items: center; justify-content: space-between;
                    gap: 40px; margin-top: 40px;
                }
                @media (max-width: 1024px) {
                    .TECH_CTA { flex-direction: column; text-align: center; padding: 50px 30px; }
                    .TECH_CTA_Content { width: 100%; }
                    .TECH_CTA_Btn { margin: 0 auto; width: 100%; justify-content: center; }
                }
            `}),A.jsxs("section",{className:"TECH_Hero",children:[A.jsx("div",{className:"TECH_Hero_Grid"}),A.jsxs(t.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},style:{position:"relative",zIndex:10},children:[A.jsxs("div",{className:"TECH_Breadcrumb",children:[A.jsx(c,{to:"/",children:"Home"}),A.jsx("span",{children:"/"}),A.jsx("span",{style:{color:"#60a5fa"},children:"Technology"})]}),A.jsx("div",{className:"TECH_Badge",children:"What we do"}),A.jsxs("h2",{className:"TECH_Hero_Title NET_Hero_H1",children:["Technology",A.jsx("br",{}),A.jsx("span",{style:{color:"#60a5fa"},children:"Services"})]}),A.jsx("p",{className:"TECH_Hero_desc",children:"Integrated technology capabilities across infrastructure, software, and digital solutions — built to strengthen operations and drive long-term performance."})]})]}),A.jsxs("div",{className:"TECH_Body",children:[Na.map((e,i)=>A.jsxs(t.div,{className:"TECH_Category",initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:i*.1},viewport:{once:!0,margin:"-60px"},children:[A.jsxs("div",{className:"TECH_Category_Header",children:[A.jsxs("div",{style:{flex:1},children:[A.jsx("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:12},className:"header_top",children:A.jsx("span",{className:"TECH_Category_Badge",style:{background:e.bg,color:e.color},children:e.label})}),A.jsx("h2",{className:"NET_Hero_H1 TECH_Category_Label",children:e.label}),A.jsx("p",{className:"TECH_Category_Desc",children:e.description})]}),A.jsxs(c,{to:`/${e.id}`,className:"category_link",style:{display:"inline-flex",alignItems:"center",gap:8,color:e.color,fontWeight:700,fontSize:"0.85rem",textDecoration:"none",whiteSpace:"nowrap",flexShrink:0,padding:"12px 24px",border:`1px solid ${e.color}30`,borderRadius:100,background:e.bg,transition:"all 0.3s"},children:["View All ",A.jsx(cA,{size:14})]})]}),A.jsx("div",{className:"TECH_Grid",children:e.services.map((s,n)=>{const d=s.icon;return A.jsx(t.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},transition:{duration:.4,delay:n*.07},viewport:{once:!0},children:A.jsxs(c,{to:s.link,className:"TECH_Card",children:[A.jsx("div",{className:"TECH_Card_Icon",style:{background:e.bg,color:e.color},children:A.jsx(d,{size:22})}),A.jsx("p",{className:"TECH_Card_Name",children:s.name}),A.jsx("p",{className:"TECH_Card_Desc",children:s.desc}),A.jsx("div",{className:"TECH_Card_Arrow",style:{background:e.bg,color:e.color},children:A.jsx(cA,{size:16})})]})},s.link)})})]},e.id)),A.jsxs(t.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"TECH_CTA",children:[A.jsxs("div",{className:"TECH_CTA_Content",children:[A.jsx("p",{style:{color:"rgba(255,255,255,0.5)",fontSize:"0.8rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:12},children:"Not sure where to start?"}),A.jsx("h3",{style:{color:"#fff",fontSize:"1.8rem",fontWeight:900,margin:0,lineHeight:1.2},children:"Let's Find the Right Solution for Your Business"})]}),A.jsxs(c,{to:"/contact",className:"TECH_CTA_Btn",style:{display:"inline-flex",alignItems:"center",gap:10,background:"#fff",color:"#002e5b",padding:"16px 36px",borderRadius:100,fontWeight:800,fontSize:"0.95rem",textDecoration:"none",whiteSpace:"nowrap",flexShrink:0,transition:"all 0.3s"},children:["Talk to Us ",A.jsx(cA,{size:16})]})]})]})]});function Ba(){const[e,i]=l.useState("contact"),[s,n]=l.useState("desktop"),[d,h]=l.useState(!1),[w,I]=l.useState(!1),[p,u]=l.useState({name:"Johnathan Doe",org:"CHN Tech Consulting",email:"johnathan.doe@example.com",phone:"+91 98765 43210",interest:"Custom Software & AI Solutions",message:"Hello CHN Team, we are looking for a reliable software partner to build our next-generation digital flagship hub and integrate Google Workspace APIs. We would like to schedule a consulting call next Tuesday to discuss workforce scaling and compliance requirements. Looking forward to your response.",position:"Senior Full Stack Developer",statement:`Dear HR Team,

I am writing to express my strong interest in the Senior Full Stack Developer position at CHN Technologies. With over 6 years of experience building modern React/Node.js web applications, optimizing database queries, and leading agile teams, I am confident in my ability to deliver immediate value to your Digital Solutions division.

Thank you for considering my application.

Best regards,
Johnathan Doe`,fileName:"resume_johnathan_doe.pdf"}),x=q=>{const{name:E,value:g}=q.target;u(m=>({...m,[E]:g}))},v=q=>`
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 0 16px 0;">
        <tr>
          <td align="center">
            <a href="https://www.chnindia.com" target="_blank" style="display:inline-block; text-decoration:none;">
              <img class="responsive-logo" src="${q?WA.trim():"cid:chnLogo"}" alt="CHN Technologies" width="180" border="0" style="display:block; width:180px; max-width:180px; height:auto; border:0; outline:none; text-decoration:none;">
            </a>
          </td>
        </tr>
      </table>
    `,z=(q,E=!1)=>{const g=new Date().getFullYear(),m=v(E),C=`
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @media only screen and (max-width: 600px) {
            .responsive-cell {
              display: block !important;
              width: 100% !important;
              padding-right: 0 !important;
              padding-bottom: 20px !important;
              box-sizing: border-box;
            }
            .responsive-cell-last {
              display: block !important;
              width: 100% !important;
              padding-bottom: 0 !important;
              box-sizing: border-box;
            }
            .responsive-padding {
              padding: 30px 20px 20px !important;
            }
            .responsive-inner-padding {
              padding: 24px 20px !important;
            }
            .responsive-logo {
              width: 140px !important;
            }
            .responsive-title {
              font-size: 22px !important;
            }
          }
        </style>
      </head>
    `;return q==="contact"?`
        <!DOCTYPE html>
        <html>
        ${C}
        <body style="margin: 0; padding: 0; background-color: #f8fafc;">
          <div style="background-color: #f8fafc; padding: 40px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin:0;">
            <!--[if mso]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="width: 600px;">
            <tr>
            <td>
            <![endif]-->
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; box-shadow: 0 40px 100px rgba(0,46,91,0.06); border: 1px solid #e2e8f0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tr>
                <td height="6" style="height: 6px; background-color: #2563eb; font-size: 1px; line-height: 1px; border-radius: 24px 24px 0 0;">&nbsp;</td>
              </tr>
              <tr>
                <td class="responsive-padding" align="center" style="padding: 50px 40px 30px; text-align: center;">
                  ${m}
                  <h1 class="responsive-title" style="color: #002e5b; margin: 16px 0 0 0; font-size: 26px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">New Inquiry Received</h1>
                  <p style="color: #64748b; margin: 8px 0 0 0; font-size: 12px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;">Digital Flagship Center</p>
                </td>
              </tr>
              <tr>
              <td class="responsive-padding" style="padding: 0 40px 30px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                  <tr>
                    <td class="responsive-inner-padding" style="background-color: #ffffff; border: 1px solid #f1f5f9; border-radius: 20px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                        <tr>
                          <td class="responsive-cell" width="50%" style="padding-bottom: 24px; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                            <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Client Name</span>
                            <strong style="color: #1e293b; font-size: 15px;">${p.name}</strong>
                          </td>
                          <td class="responsive-cell-last" width="50%" style="padding-bottom: 24px; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                            <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Organisation</span>
                            <strong style="color: #1e293b; font-size: 15px;">${p.org||"Not Specified"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td class="responsive-cell" width="50%" style="padding-bottom: 24px; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                            <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Email Identity</span>
                            <strong style="color: #1e293b; font-size: 15px; word-break: break-all;">${p.email}</strong>
                          </td>
                          <td class="responsive-cell-last" width="50%" style="padding-bottom: 24px; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                            <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 6px;">Contact Phone</span>
                            <strong style="color: #1e293b; font-size: 15px;">${p.phone||"Not Provided"}</strong>
                          </td>
                        </tr>
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; border-top: 1px solid #f1f5f9;">
                        <tr>
                          <td style="padding-top: 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                            <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 12px;">Area of Interest</span>
                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                              <tr>
                                <td bgcolor="#eff6ff" style="background-color: #eff6ff; border: 1px solid #dbeafe; padding: 10px 24px; border-radius: 100px; color: #2563eb; font-weight: bold; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; letter-spacing: 0.5px;">
                                  ${p.interest}
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 24px;">
                  <tr>
                    <td class="responsive-inner-padding" bgcolor="#fafafa" style="background-color: #fafafa; border: 1px solid #f1f5f9; border-left: 4px solid #2563eb; border-radius: 12px; padding: 32px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 16px;">Requirement Brief</span>
                      <p style="color: #334155; font-size: 15px; line-height: 1.8; margin: 0; font-weight: 500; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">${p.message.replace(/\n/g,"<br>")}</p>
                    </td>
                  </tr>
                </table>

                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 40px;">
                  <tr>
                    <td align="center">
                      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin: 0 auto;">
                        <tr>
                          <td align="center" bgcolor="#2563eb" style="border-radius: 100px; background-color: #2563eb; padding: 16px 40px;">
                            <a href="mailto:${p.email}?subject=Re: ${encodeURIComponent(p.interest)}" style="font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; font-weight: bold; letter-spacing: 1px; display: inline-block;">REPLY TO CLIENT</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="responsive-padding" style="padding: 40px; text-align: center; background-color: #fafafa; border-top: 1px solid #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border-radius: 0 0 24px 24px;">
                <p style="color: #94a3b8; font-size: 12px; margin: 0; font-weight: 700; letter-spacing: 0.5px;">&copy; ${g} CHN TECHNOLOGIES • DIGITAL FLAGSHIP HUB</p>
                <div style="margin-top: 12px;">
                  <span style="color: #cbd5e1; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Encrypted Submission • Fast Response Protocol</span>
                </div>
              </td>
            </tr>
          </table>
          <!--[if mso]>
          </td>
          </tr>
          </table>
          <![endif]-->
        </div>
      `:q==="careers_apply"?`
        <!DOCTYPE html>
        <html>
        ${C}
        <body style="margin: 0; padding: 0; background-color: #f1f5f9;">
          <div style="background-color: #f1f5f9; padding: 40px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin:0;">
            <!--[if mso]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="width: 600px;">
            <tr>
            <td>
            <![endif]-->
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; box-shadow: 0 40px 100px rgba(0,46,91,0.08); border: 1px solid #e2e8f0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tr>
                <td height="6" style="height: 6px; background-color: #3b82f6; font-size: 1px; line-height: 1px; border-radius: 24px 24px 0 0;">&nbsp;</td>
              </tr>
              <tr>
                <td class="responsive-padding" align="center" style="padding: 50px 40px 30px; text-align: center; border-bottom: 1px solid #f1f5f9;">
                  ${m}
                  <h1 class="responsive-title" style="color: #002e5b; margin: 16px 0 0 0; font-size: 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">New Job Application</h1>
                  <p style="color: #64748b; margin: 8px 0 0 0; font-size: 11px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 700; letter-spacing: 2px;">CHN TECHNOLOGIES CAREERS</p>
                </td>
              </tr>
              <tr>
                <td class="responsive-padding" style="padding: 40px 40px 30px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                  <tr>
                    <td style="padding-bottom: 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <h2 style="color: #0f172a; font-size: 18px; font-weight: 900; margin: 0 0 8px 0; letter-spacing: -0.5px;">Candidate Information</h2>
                      <div style="height: 4px; width: 40px; background-color: #3b82f6; border-radius: 10px;"></div>
                    </td>
                  </tr>
                </table>
                
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                  <tr>
                    <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Full Name</span>
                      <strong style="color: #1e293b; font-size: 16px;">${p.name}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Email Identity</span>
                      <strong style="color: #1e293b; font-size: 16px; word-break: break-all;">${p.email}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Mobile Contact</span>
                      <strong style="color: #1e293b; font-size: 16px;">${p.phone||"N/A"}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Uploaded Resume</span>
                      <strong style="color: #10b981; font-size: 15px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">[Attached File] ${p.fileName||"No file uploaded"}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 0; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Target Position</span>
                      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                        <tr>
                          <td bgcolor="#eff6ff" style="background-color: #eff6ff; border: 1px solid #dbeafe; padding: 10px 22px; border-radius: 12px; color: #3b82f6; font-weight: bold; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; letter-spacing: 0.5px;">
                            ${p.position}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                
                 <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 24px;">
                  <tr>
                    <td class="responsive-inner-padding" bgcolor="#fafbfc" style="background-color: #fafbfc; border: 1px solid #f1f5f9; border-radius: 20px; padding: 30px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 12px;">Statement of Interest</span>
                      <p style="color: #475569; font-size: 14px; line-height: 1.8; margin: 0; font-weight: 500; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">${p.statement.replace(/\n/g,"<br>")}</p>
                    </td>
                  </tr>
                </table>

                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 40px;">
                  <tr>
                    <td align="center">
                      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin: 0 auto;">
                        <tr>
                          <td align="center" bgcolor="#3b82f6" style="border-radius: 100px; background-color: #3b82f6; padding: 16px 40px;">
                            <a href="mailto:${p.email}?subject=Re: Application for ${encodeURIComponent(p.position)}" style="font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; font-weight: bold; letter-spacing: 1px; display: inline-block;">REPLY DIRECTLY</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="responsive-padding" style="padding: 30px; text-align: center; background-color: #fafbfc; border-top: 1px solid #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border-radius: 0 0 24px 24px;">
                <p style="color: #94a3b8; font-size: 11px; margin: 0; font-weight: 600;">&copy; ${g} CHN Technologies Digital Recruitment Engine</p>
              </td>
            </tr>
          </table>
          <!--[if mso]>
          </td>
          </tr>
          </table>
          <![endif]-->
        </div>
      `:q==="careers_inquiry"?`
        <!DOCTYPE html>
        <html>
        ${C}
        <body style="margin: 0; padding: 0; background-color: #f1f5f9;">
          <div style="background-color: #f1f5f9; padding: 40px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin:0;">
            <!--[if mso]>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="width: 600px;">
            <tr>
            <td>
            <![endif]-->
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; box-shadow: 0 40px 100px rgba(0,46,91,0.08); border: 1px solid #e2e8f0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tr>
                <td height="6" style="height: 6px; background-color: #8b5cf6; font-size: 1px; line-height: 1px; border-radius: 24px 24px 0 0;">&nbsp;</td>
              </tr>
              <tr>
                <td class="responsive-padding" align="center" style="padding: 50px 40px 30px; text-align: center; border-bottom: 1px solid #f1f5f9;">
                  ${m}
                  <h1 class="responsive-title" style="color: #002e5b; margin: 16px 0 0 0; font-size: 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">Careers Inquiry</h1>
                  <p style="color: #64748b; margin: 8px 0 0 0; font-size: 12px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 700; letter-spacing: 2px;">CHN TECHNOLOGIES CAREERS</p>
                </td>
              </tr>
              <tr>
                <td class="responsive-padding" style="padding: 40px 40px 30px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                  <tr>
                    <td style="padding-bottom: 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <h2 style="color: #0f172a; font-size: 18px; font-weight: 900; margin: 0 0 8px 0; letter-spacing: -0.5px;">Inquiry Information</h2>
                      <div style="height: 4px; width: 40px; background-color: #8b5cf6; border-radius: 10px;"></div>
                    </td>
                  </tr>
                </table>
                
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
                  <tr>
                    <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Candidate Name</span>
                      <strong style="color: #1e293b; font-size: 16px;">${p.name}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Email Identity</span>
                      <strong style="color: #1e293b; font-size: 16px; word-break: break-all;">${p.email}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px 0; vertical-align: top; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Inquiry Interest</span>
                      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                        <tr>
                          <td bgcolor="#f5f3ff" style="background-color: #f5f3ff; border: 1px solid #dbeafe; padding: 10px 22px; border-radius: 12px; color: #8b5cf6; font-weight: bold; font-size: 13px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; letter-spacing: 0.5px;">
                            ${p.interest}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 24px;">
                  <tr>
                    <td class="responsive-inner-padding" bgcolor="#fafbfc" style="background-color: #fafbfc; border: 1px solid #f1f5f9; border-radius: 20px; padding: 30px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      <span style="color: #94a3b8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 12px;">Statement of Interest</span>
                      <p style="color: #475569; font-size: 14px; line-height: 1.8; margin: 0; font-weight: 500; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">${p.message.replace(/\n/g,"<br>")}</p>
                    </td>
                  </tr>
                </table>

                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; margin-top: 40px;">
                  <tr>
                    <td align="center">
                      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin: 0 auto;">
                        <tr>
                          <td align="center" bgcolor="#8b5cf6" style="border-radius: 100px; background-color: #8b5cf6; padding: 16px 40px;">
                            <a href="mailto:${p.email}?subject=Re: Inquiry on ${encodeURIComponent(p.interest)}" style="font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; font-weight: bold; letter-spacing: 1px; display: inline-block;">REPLY DIRECTLY</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="responsive-padding" style="padding: 30px; text-align: center; background-color: #fafbfc; border-top: 1px solid #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; border-radius: 0 0 24px 24px;">
                <p style="color: #94a3b8; font-size: 11px; margin: 0; font-weight: 600;">&copy; ${g} CHN Technologies Digital Recruitment Engine</p>
              </td>
            </tr>
          </table>
          <!--[if mso]>
          </td>
          </tr>
          </table>
          <![endif]-->
        </div>
      `:""},k=()=>{const q=z(e,!1);navigator.clipboard.writeText(q),h(!0),rA.success("Production HTML copied to clipboard!"),setTimeout(()=>h(!1),2e3)},L=()=>`/**
 * Google Apps Script Email Proxy
 * CHN Technologies Digital Flagship Hub
 */

// Embed the base64 encoded CHN logo (statically stored to save API request bandwidth)
var CHN_LOGO_BASE64 = "YOUR_LOGO_BASE64_DATA_HERE"; // Embedded automatically in code.gs

// Security secret passphrase for authorization
var SCRIPT_SECRET = "chn_secret_passphrase_2026";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // Security Secret Check
    if (!data.secret || data.secret !== SCRIPT_SECRET) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Unauthorized: Invalid security passphrase."
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }

    var recipient = data.recipient || "";
    var subject = data.subject || "New Inquiry";
    var htmlContent = data.htmlContent || "";
    
    var logoBlob = Utilities.newBlob(
      Utilities.base64Decode(CHN_LOGO_BASE64),
      "image/png",
      "chnLogo"
    );
    
    // Process attachment if provided
    var attachments = [];
    if (data.attachment && data.attachment.data && data.attachment.data.length > 0) {
      try {
        var fileBlob = Utilities.newBlob(
          Utilities.base64Decode(data.attachment.data),
          data.attachment.mimeType || "application/pdf",
          data.attachment.name || "resume.pdf"
        );
        attachments.push(fileBlob);
      } catch (attachError) {
        Logger.log("Attachment processing error: " + attachError.toString());
      }
    }
    
    GmailApp.sendEmail(recipient, subject, "Please view this email in HTML-compatible client.", {
      name: "CHN WEBSITE NOTIFICATION MANAGER",
      htmlBody: htmlContent,
      inlineImages: {
        chnLogo: logoBlob
      },
      attachments: attachments
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Email sent successfully",
      attachmentCount: attachments.length
    }))
    .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    message: "CHN Technologies Mail API is active and authorized."
  }))
  .setMimeType(ContentService.MimeType.JSON);
}

function triggerAuthorizationPrompt() {
  var email = Session.getActiveUser().getEmail();
  if (!email) {
    email = Session.getEffectiveUser().getEmail();
  }
  Logger.log("Triggering authorization prompt for email: " + email);
  GmailApp.sendEmail(
    email,
    "CHN Website Email Gateway - Authorization Verified",
    "Congratulations! The Google Apps Script proxy has been successfully authorized and is ready to send emails."
  );
  Logger.log("Authorization prompt triggered successfully!");
}
`,P=()=>{navigator.clipboard.writeText(L()),I(!0),rA.success("Apps Script code template copied!"),setTimeout(()=>I(!1),2e3)};return A.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans",children:[A.jsxs("header",{className:"border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex items-center justify-between",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx(c,{to:"/",className:"text-slate-400 hover:text-slate-100 transition-colors",children:A.jsx(mt,{className:"w-5 h-5"})}),A.jsx("div",{className:"h-6 w-px bg-slate-800"}),A.jsxs("div",{children:[A.jsxs("h1",{className:"text-xl font-bold tracking-tight text-white flex items-center gap-2",children:[A.jsx(K,{className:"w-5 h-5 text-blue-500"}),"CHN Email Template Suite"]}),A.jsx("p",{className:"text-xs text-slate-400",children:"Live preview & deployment dashboard"})]})]}),A.jsxs("div",{className:"flex items-center gap-2 bg-slate-950/80 border border-slate-800 p-1 rounded-lg",children:[A.jsxs("button",{onClick:()=>n("desktop"),className:`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${s==="desktop"?"bg-blue-600 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[A.jsx(xe,{className:"w-3.5 h-3.5"}),"Desktop"]}),A.jsxs("button",{onClick:()=>n("mobile"),className:`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${s==="mobile"?"bg-blue-600 text-white shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[A.jsx(he,{className:"w-3.5 h-3.5"}),"Mobile"]})]})]}),A.jsxs("div",{className:"flex-1 flex flex-col lg:flex-row overflow-hidden",children:[A.jsxs("aside",{className:"w-full lg:w-[450px] border-r border-slate-800 bg-slate-900 flex flex-col h-auto lg:h-[calc(100vh-73px)] overflow-y-auto p-6 gap-6",children:[A.jsxs("div",{children:[A.jsx("label",{className:"text-xs font-bold uppercase text-slate-400 tracking-wider block mb-3",children:"Select Email Template"}),A.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[A.jsxs("button",{onClick:()=>i("contact"),className:`flex items-center gap-3 p-4 rounded-xl text-left border transition-all ${e==="contact"?"border-blue-500/50 bg-blue-950/20 text-white ring-1 ring-blue-500/20":"border-slate-800 bg-slate-950/30 text-slate-400 hover:bg-slate-950/60"}`,children:[A.jsx("div",{className:`p-2.5 rounded-lg ${e==="contact"?"bg-blue-600/10 text-blue-400":"bg-slate-800 text-slate-500"}`,children:A.jsx(K,{className:"w-5 h-5"})}),A.jsxs("div",{children:[A.jsx("h3",{className:"font-semibold text-sm",children:"Contact Form Inquiry"}),A.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"Sent when clients request services"})]})]}),A.jsxs("button",{onClick:()=>i("careers_apply"),className:`flex items-center gap-3 p-4 rounded-xl text-left border transition-all ${e==="careers_apply"?"border-indigo-500/50 bg-indigo-950/20 text-white ring-1 ring-indigo-500/20":"border-slate-800 bg-slate-950/30 text-slate-400 hover:bg-slate-950/60"}`,children:[A.jsx("div",{className:`p-2.5 rounded-lg ${e==="careers_apply"?"bg-indigo-600/10 text-indigo-400":"bg-slate-800 text-slate-500"}`,children:A.jsx(FA,{className:"w-5 h-5"})}),A.jsxs("div",{children:[A.jsx("h3",{className:"font-semibold text-sm",children:"Careers: Job Application"}),A.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"Candidates applying for listed positions"})]})]}),A.jsxs("button",{onClick:()=>i("careers_inquiry"),className:`flex items-center gap-3 p-4 rounded-xl text-left border transition-all ${e==="careers_inquiry"?"border-purple-500/50 bg-purple-950/20 text-white ring-1 ring-purple-500/20":"border-slate-800 bg-slate-950/30 text-slate-400 hover:bg-slate-950/60"}`,children:[A.jsx("div",{className:`p-2.5 rounded-lg ${e==="careers_inquiry"?"bg-purple-600/10 text-purple-400":"bg-slate-800 text-slate-500"}`,children:A.jsx(ht,{className:"w-5 h-5"})}),A.jsxs("div",{children:[A.jsx("h3",{className:"font-semibold text-sm",children:"Careers: General Inquiry"}),A.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:"General questions regarding job roles"})]})]})]})]}),A.jsx("hr",{className:"border-slate-800"}),A.jsxs("div",{children:[A.jsx("label",{className:"text-xs font-bold uppercase text-slate-400 tracking-wider block mb-3",children:"Customize Content Fields (Live Preview)"}),A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{children:[A.jsx("label",{className:"text-xs text-slate-400 block mb-1",children:"Full Name"}),A.jsx("input",{type:"text",name:"name",value:p.name,onChange:x,className:"w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"text-xs text-slate-400 block mb-1",children:"Email Address"}),A.jsx("input",{type:"email",name:"email",value:p.email,onChange:x,className:"w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500"})]}),e!=="careers_inquiry"&&A.jsxs("div",{children:[A.jsx("label",{className:"text-xs text-slate-400 block mb-1",children:"Mobile Contact"}),A.jsx("input",{type:"text",name:"phone",value:p.phone,onChange:x,className:"w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500"})]}),e==="contact"&&A.jsxs("div",{children:[A.jsx("label",{className:"text-xs text-slate-400 block mb-1",children:"Organisation"}),A.jsx("input",{type:"text",name:"org",value:p.org,onChange:x,className:"w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500"})]}),e==="careers_apply"?A.jsxs("div",{children:[A.jsx("label",{className:"text-xs text-slate-400 block mb-1",children:"Target Position"}),A.jsx("input",{type:"text",name:"position",value:p.position,onChange:x,className:"w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500"})]}):A.jsxs("div",{children:[A.jsx("label",{className:"text-xs text-slate-400 block mb-1",children:e==="contact"?"Area of Interest":"Inquiry Interest"}),A.jsx("input",{type:"text",name:"interest",value:p.interest,onChange:x,className:"w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500"})]}),e==="careers_apply"?A.jsxs("div",{children:[A.jsx("label",{className:"text-xs text-slate-400 block mb-1",children:"Statement of Interest"}),A.jsx("textarea",{name:"statement",value:p.statement,onChange:x,rows:4,className:"w-full bg-slate-950 border border-slate-800 rounded-lg p-3.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 font-mono text-xs"})]}):A.jsxs("div",{children:[A.jsx("label",{className:"text-xs text-slate-400 block mb-1",children:"Requirement Brief / Message"}),A.jsx("textarea",{name:"message",value:p.message,onChange:x,rows:4,className:"w-full bg-slate-950 border border-slate-800 rounded-lg p-3.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 font-mono text-xs"})]})]})]}),A.jsx("hr",{className:"border-slate-800"}),A.jsxs("div",{className:"space-y-3",children:[A.jsxs("button",{onClick:k,className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/10",children:[d?A.jsx($A,{className:"w-4 h-4"}):A.jsx(ut,{className:"w-4 h-4"}),"Copy Production HTML Code"]}),A.jsxs("button",{onClick:P,className:"w-full bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 hover:text-white font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all",children:[w?A.jsx($A,{className:"w-4 h-4"}):A.jsx(LA,{className:"w-4 h-4"}),"Copy Apps Script Template"]})]}),A.jsx("hr",{className:"border-slate-800"}),A.jsxs("div",{className:"bg-slate-950/40 border border-slate-800 rounded-xl p-4",children:[A.jsxs("h4",{className:"text-xs font-bold text-slate-300 flex items-center gap-1.5 mb-2.5",children:[A.jsx(ft,{className:"w-3.5 h-3.5 text-blue-400"}),"Apps Script Setup Instructions"]}),A.jsxs("ol",{className:"text-xs text-slate-400 space-y-2 list-decimal list-inside pl-1",children:[A.jsxs("li",{children:["Open Google Apps Script: ",A.jsxs("a",{href:"https://script.google.com",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:underline inline-flex items-center gap-0.5",children:["script.google.com ",A.jsx(zA,{className:"w-2.5 h-2.5"})]})]}),A.jsx("li",{children:"Create a new project."}),A.jsxs("li",{children:["Replace default code with the contents of ",A.jsx("code",{className:"text-blue-300 bg-slate-900 px-1 rounded",children:"code.gs"})," found in your workspace root."]}),A.jsxs("li",{children:["Ensure the ",A.jsx("code",{className:"text-blue-300 bg-slate-900 px-1 rounded",children:"SCRIPT_SECRET"})," variable matches the secret in your ",A.jsx("code",{className:"text-blue-300 bg-slate-900 px-1 rounded",children:".env"}),"."]}),A.jsx("li",{children:"Select **triggerAuthorizationPrompt** in the function toolbar dropdown and click **Run** to authorize the Gmail API."}),A.jsx("li",{children:"Click **Deploy** > **New deployment**."}),A.jsx("li",{children:"Select **Web app** as configuration type."}),A.jsx("li",{children:"Set **Execute as** to `Me` and **Who has access** to `Anyone`."}),A.jsx("li",{children:"Copy deployment URL and save it in `.env` as `VITE_SCRIPT_URL`."})]})]})]}),A.jsx("main",{className:"flex-1 bg-slate-950 flex items-center justify-center p-6 lg:p-8 overflow-y-auto",children:A.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center max-w-4xl",children:[A.jsxs("div",{className:"w-full max-w-[680px] bg-slate-900 border border-slate-800 rounded-t-2xl px-4 py-3 flex items-center justify-between shadow-xl",children:[A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx("span",{className:"w-3 h-3 rounded-full bg-red-500/70"}),A.jsx("span",{className:"w-3 h-3 rounded-full bg-yellow-500/70"}),A.jsx("span",{className:"w-3 h-3 rounded-full bg-green-500/70"})]}),A.jsxs("div",{className:"text-[11px] text-slate-500 bg-slate-950 px-6 py-1 rounded-md border border-slate-800 truncate max-w-[280px]",children:[e==="contact"&&`subject: New Requirement: ${p.interest}`,e==="careers_apply"&&`subject: [Job Application] ${p.position}`,e==="careers_inquiry"&&`subject: [Careers Inquiry] ${p.interest}`]}),A.jsx("div",{className:"w-12 text-right",children:A.jsx("span",{className:"text-[10px] text-slate-500 bg-slate-950/40 border border-slate-800/80 px-2 py-0.5 rounded",children:"HTML"})})]}),A.jsx("div",{className:`w-full bg-slate-900 border-x border-b border-slate-800 rounded-b-2xl shadow-2xl flex justify-center p-4 transition-all duration-300 ${s==="mobile"?"max-w-[400px] h-[550px]":"max-w-[680px] h-[650px]"}`,children:A.jsx("div",{className:"w-full h-full bg-white rounded-lg overflow-y-auto scrollbar-thin",children:A.jsx("div",{className:"w-full h-full",dangerouslySetInnerHTML:{__html:z(e,!0)}})})})]})})]})]})}const Ia=()=>{const e=xA();return l.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),A.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:A.jsxs("div",{className:"text-center",children:[A.jsx("h2",{className:"mb-4 text-4xl font-bold NET_Hero_H1",children:"404"}),A.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),A.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})},Ea=new De,Da={network:{title:"Network Management",subtitle:"IT Infrastructure",description:"End-to-end network design, deployment, and management services ensuring reliable connectivity and optimal performance across your organisation.",features:["Network architecture design and planning","LAN/WAN setup and configuration","Network monitoring and troubleshooting","Performance optimisation","Firewall and security configuration"]},enduser:{title:"End User Computing",subtitle:"IT Infrastructure",description:"Comprehensive end-user computing solutions that empower your workforce with reliable, secure, and efficient desktop environments.",features:["Desktop and laptop provisioning","Virtual desktop infrastructure (VDI)","Device lifecycle management","Help desk and support services","Software deployment and updates"]},cybersecurity:{title:"Cyber Security",subtitle:"IT Infrastructure",description:"Proactive cybersecurity services to protect your organisation against evolving threats and ensure compliance with industry standards.",features:["Security assessments and audits","Threat detection and response","Identity and access management","Security awareness training","Compliance and governance"]},server:{title:"Server Administration",subtitle:"IT Infrastructure",description:"Expert server administration services ensuring your infrastructure runs reliably, securely, and at peak performance.",features:["Server setup and configuration","OS patching and updates","Performance monitoring","Backup and disaster recovery","Capacity planning"]},lancabling:{title:"LAN Cabling & Surveillance",subtitle:"IT Infrastructure",description:"Professional structured cabling and surveillance solutions for modern workplaces.",features:["Structured cabling design","Cat6/Cat6a installation","CCTV and surveillance systems","Access control systems","Cable management and testing"]},webdesign:{title:"Web Design & Development",subtitle:"Software Solutions",description:"Custom web solutions designed to represent your brand and drive engagement.",features:["Responsive web design","Custom web application development","CMS implementation","E-commerce solutions","UI/UX design"]},application:{title:"Application Development",subtitle:"Software Solutions",description:"Scalable application development tailored to your business workflows and requirements.",features:["Custom application development","Mobile app development","API design and integration","Legacy application modernisation","Quality assurance and testing"]},dataanalytics:{title:"Data Analytics",subtitle:"Digital Solutions",description:"Data-driven insights and analytics capabilities to enhance visibility and operational efficiency.",features:["Business intelligence dashboards","Data warehousing","Predictive analytics","Report automation","Data integration"]},automation:{title:"Automation",subtitle:"Digital Solutions",description:"Process automation solutions to improve efficiency, reduce errors, and free up valuable resources.",features:["Robotic process automation (RPA)","Workflow automation","Document processing automation","Integration automation","Monitoring and alerts"]},consulting:{title:"Consulting Services",subtitle:"Consulting",description:"Structured consulting services that help organisations optimise workforce planning, payroll compliance, and training development for stronger business performance.",features:["Workforce planning and talent acquisition","Payroll and statutory compliance support","Leadership and technical training programs","Operational process optimisation","Advisory and change management support"]},workforce:{title:"Workforce Management",subtitle:"Consulting",description:"Build high-performing teams and reduce hiring overhead with our workforce consulting services.",features:["Talent acquisition strategy","Workforce planning","Contract staffing","HR process optimisation","Employee engagement programs"]},payroll:{title:"Payroll & Compliance",subtitle:"Consulting",description:"Error-free payroll processing with expert support and structured compliance systems.",features:["Payroll processing and management","Tax compliance","Statutory compliance","Payroll audits","Employee benefits administration"]},training:{title:"Training & Development",subtitle:"Consulting",description:"Custom learning programs aligned with your business goals and workforce development needs.",features:["Corporate training programs","Skill development workshops","Leadership development","Technical certifications","Learning management systems"]}},Sa=()=>{const i=xA().pathname==="/";return A.jsx(A.Fragment,{children:A.jsxs(kt,{children:[A.jsx(St,{}),A.jsx(Ct,{}),A.jsx(Ht,{}),A.jsx(Ot,{}),A.jsx("main",{children:A.jsxs(wt,{children:[A.jsx(y,{path:"/",element:A.jsx(Di,{})}),A.jsx(y,{path:"/contact",element:A.jsx(ki,{})}),A.jsx(y,{path:"/about",element:A.jsx(Oi,{})}),A.jsx(y,{path:"/blogs",element:A.jsx(zi,{})}),A.jsx(y,{path:"/careers",element:A.jsx(Wi,{})}),A.jsx(y,{path:"/whatwethink",element:A.jsx(Ui,{})}),A.jsx(y,{path:"/network",element:A.jsx(Zi,{})}),A.jsx(y,{path:"/cybersecurity",element:A.jsx(Aa,{})}),A.jsx(y,{path:"/enduser",element:A.jsx(ia,{})}),A.jsx(y,{path:"/server",element:A.jsx(sa,{})}),A.jsx(y,{path:"/lancabling",element:A.jsx(ra,{})}),A.jsx(y,{path:"/webdesign",element:A.jsx(la,{})}),A.jsx(y,{path:"/application",element:A.jsx(pa,{})}),A.jsx(y,{path:"/dataanalytics",element:A.jsx(xa,{})}),A.jsx(y,{path:"/automation",element:A.jsx(ua,{})}),A.jsx(y,{path:"/workforce",element:A.jsx(fa,{})}),A.jsx(y,{path:"/payroll",element:A.jsx(wa,{})}),A.jsx(y,{path:"/training",element:A.jsx(_a,{})}),A.jsx(y,{path:"/privacy-policy",element:A.jsx(ya,{})}),A.jsx(y,{path:"/terms-and-conditions",element:A.jsx(va,{})}),A.jsx(y,{path:"/technology",element:A.jsx(ja,{})}),A.jsx(y,{path:"/email-preview",element:A.jsx(Ba,{})}),Object.entries(Da).map(([s,n])=>A.jsx(y,{path:`/${s}`,element:A.jsx(Yi,{...n})},s)),A.jsx(y,{path:"/:slug",element:A.jsx(Ki,{})}),A.jsx(y,{path:"*",element:A.jsx(Ia,{})})]})}),!i&&A.jsx(ye,{})]})})},ka=()=>A.jsx(Se,{client:Ea,children:A.jsx(Te,{children:A.jsx(Sa,{})})});Ee.createRoot(document.getElementById("root")).render(A.jsx(ka,{}));
