import{r as s,j as e}from"./index-BXlezoa9.js";import{c as i}from"./PortfolioDashboard-k_JWB2V3.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],u=i("Laugh",x);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],y=i("Sparkles",m),f=()=>{const[l,a]=s.useState(!1),n=["h","e","l","l","o"],o=s.useRef([]);return s.useEffect(()=>{const c=r=>{const d=r.key.toLowerCase(),t=o.current;if(t.push(d),t.length>n.length&&t.shift(),t.join("")===n.join("")){a(!0),o.current=[];const h=setTimeout(()=>{a(!1)},5e3);return()=>clearTimeout(h)}};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]),e.jsx(e.Fragment,{children:l&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-white",children:e.jsxs("div",{className:"text-center",children:[e.jsx(y,{className:"w-16 h-16 text-yellow-400 animate-pulse mx-auto"}),e.jsx("h1",{className:"text-3xl font-bold mt-4",children:"Secret Unlocked! 🔥"}),e.jsx("p",{className:"text-lg mt-2",children:"You have the skills of a true dev! 🚀"}),e.jsx(u,{className:"w-12 h-12 text-green-300 mt-4 mx-auto animate-spin"})]})})})};export{f as default};
