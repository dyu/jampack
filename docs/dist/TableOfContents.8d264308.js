import{_ as o,p as c,h as a}from"./chunks/hooks.module.4edf7895.js";import{o as t}from"./chunks/jsxRuntime.module.c99b2cda.js";import{p as d}from"./chunks/preact.module.cab965c7.js";const p=({headings:n=[]})=>{const s=o([]),[r]=c("");return a(()=>{const e=()=>{const l=document.querySelectorAll("article :is(h1, h2, h3, h4)");s.current=Array.from(l).map(i=>({id:i.id,topOffset:i.getBoundingClientRect().top+window.scrollY}))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),t(d,{children:[t("h2",{className:"heading",children:"On this page"}),t("ul",{children:[t("li",{className:`heading-link depth-2 ${r==="overview"?"active":""}`.trim(),children:t("a",{href:"#overview",children:"Overview"})}),n.filter(({depth:e})=>e>1&&e<4).map(e=>t("li",{className:`heading-link depth-${e.depth} ${r===e.slug?"active":""}`.trim(),children:t("a",{href:`#${e.slug}`,children:e.text})}))]})]})};export{p as default};
