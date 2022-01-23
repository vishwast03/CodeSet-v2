import{j as g,r,R as j,a as k}from"./vendor.886b577f.js";const E=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}};E();const s=g.exports.jsx,c=g.exports.jsxs,V=t=>c("div",{className:"w-full h-fit bg-gray-600 flex justify-center basis-auto relative",children:[s("button",{className:`border border-black ${t.htmlDisplay?"bg-[#98f1ec]":"bg-gray-50"} rounded-md p-0.5 mx-1 my-2`,onClick:()=>{t.toggleDisplay("html")},children:"HTML"}),s("button",{className:`border border-black ${t.cssDisplay?"bg-[#98f1ec]":"bg-gray-50"} rounded-md p-0.5 mx-1 my-2`,onClick:()=>{t.toggleDisplay("css")},children:"CSS"}),s("button",{className:`border border-black ${t.jsDisplay?"bg-[#98f1ec]":"bg-gray-50"} rounded-md p-0.5 mx-1 my-2`,onClick:()=>{t.toggleDisplay("js")},children:"JavaScript"}),s("button",{className:`border border-black ${t.outputDisplay?"bg-[#98f1ec]":"bg-gray-50"} rounded-md p-0.5 mx-1 my-2`,onClick:()=>{t.toggleDisplay("output")},children:"Output"}),c("div",{className:"absolute z-10 right-4 top-2",children:[c("label",{htmlFor:"auto-run",className:"text-white mx-2",children:[s("input",{type:"checkbox",checked:t.autoRun,onChange:()=>t.setAutoRun(!t.autoRun),className:"m-1",id:"auto-run"}),"Auto Run"]}),s("button",{className:"font-bold text-lg text-white bg-[#3aafa9] hover:bg-[#27928d] transition-colors px-2 py-0.5 rounded-md",id:"run-btn",onClick:t.updateOutput,children:"Run"})]})]}),O=t=>(r.exports.useEffect(()=>{const e=ace.edit("css-editor");e.setTheme("ace/theme/chrome"),e.session.setMode("ace/mode/css"),e.session.setTabSize(2),e.session.setUseWrapMode(!0);const a=localStorage.getItem("cssCode-CodeSet");return a?(e.setValue(a,1),t.setCssCode(a)):e.setValue(t.cssCode,1),e.session.on("change",()=>{t.setCssCode(e.getValue())}),window.addEventListener("beforeunload",d=>{d.preventDefault(),localStorage.setItem("cssCode-CodeSet",e.getValue())}),()=>{localStorage.setItem("cssCode-CodeSet",e.getValue())}},[]),c("div",{className:"h-full flex-1 border border-[#3aafa9] flex flex-col",children:[s("div",{className:"text-[#3aafa9] py-1 px-4 border-b-2 border-gray-200",children:"CSS"}),s("div",{className:"w-full overflow-auto text-base flex-1",id:"css-editor",contentEditable:!0})]})),H=t=>(r.exports.useEffect(()=>{const e=ace.edit("html-editor");e.setTheme("ace/theme/chrome"),e.session.setMode("ace/mode/html"),e.session.setTabSize(2),e.session.setUseWrapMode(!0);const a=localStorage.getItem("htmlCode-CodeSet");return a?(e.setValue(a,1),t.setHtmlCode(a)):e.setValue(t.htmlCode,1),e.session.on("change",()=>{t.setHtmlCode(e.getValue())}),window.addEventListener("beforeunload",d=>{d.preventDefault(),localStorage.setItem("htmlCode-CodeSet",e.getValue())}),()=>{localStorage.setItem("htmlCode-CodeSet",e.getValue())}},[]),c("div",{className:"h-full flex-1 border border-[#3aafa9] flex flex-col",children:[s("div",{className:"text-[#3aafa9] py-1 px-4 border-b-2 border-gray-200",children:"HTML"}),s("div",{className:"w-full overflow-auto text-base flex-1",id:"html-editor",contentEditable:!0})]})),M=t=>(r.exports.useEffect(()=>{const e=ace.edit("js-editor");e.setTheme("ace/theme/chrome"),e.session.setMode("ace/mode/javascript"),e.session.setTabSize(2),e.session.setUseWrapMode(!0);const a=localStorage.getItem("jsCode-CodeSet");return a?(e.setValue(a,1),t.setJsCode(a)):e.setValue(t.jsCode,1),e.session.on("change",()=>{t.setJsCode(e.getValue())}),window.addEventListener("beforeunload",d=>{d.preventDefault(),localStorage.setItem("jsCode-CodeSet",e.getValue())}),()=>{localStorage.setItem("jsCode-CodeSet",e.getValue())}},[]),c("div",{className:"h-full flex-1 border border-[#3aafa9] flex flex-col",children:[s("div",{className:"text-[#3aafa9] py-1 px-4 border-b-2 border-gray-200",children:"JavaScript"}),s("div",{className:"w-full overflow-auto text-base flex-1",id:"js-editor",contentEditable:!0})]}));var h="/CodeSet-v2/assets/logo.bd8ba4dc.png";const I=()=>s("nav",{className:"w-full h-fit bg-gray-800 flex justify-center basis-auto",children:c("div",{className:"w-fit my-1 flex items-center cursor-default",id:"logo",children:[s("img",{src:h,className:"w-10",alt:"logo"}),c("div",{className:"text-2xl font-bold text-gray-50",children:["Code",s("span",{className:"text-[#3aafa9]",children:"Set"})]})]})}),L=t=>c("div",{className:"h-full flex-1 border border-[#3aafa9] flex flex-col",children:[s("div",{className:"text-[#3aafa9] py-1 px-4 border-b-2 border-gray-200",children:"Output"}),s("iframe",{className:"w-full overflow-auto flex-1",srcDoc:t.outputHtml,id:"output"})]}),R=()=>{const[t,e]=r.exports.useState(!1),[a,d]=r.exports.useState(!0),[o,l]=r.exports.useState(!1),[n,x]=r.exports.useState(!1),[i,p]=r.exports.useState(!0),[u,y]=r.exports.useState(`<!DOCTYPE html>
<html lang="en">
<body>

</body>
</html>
`),[m,C]=r.exports.useState(`/*
p{
  color: white;
  background-color: red;
}
*/
`),[f,S]=r.exports.useState(`/*
console.log("Hello World!");
*/
`),[v,N]=r.exports.useState(""),w=D=>{switch(D){case"html":d(!a);break;case"css":l(!o);break;case"js":x(!n);break;case"output":p(!i);break}},b=()=>{N(`
    <style>
      ${m}
    </style>
      ${u}
    <script>
      ${f}
    <\/script>
    `)};return r.exports.useEffect(()=>{t&&b()},[u,m,f]),c("main",{className:"w-screen h-screen flex flex-col",children:[s(I,{}),s(V,{toggleDisplay:w,htmlDisplay:a,cssDisplay:o,jsDisplay:n,outputDisplay:i,updateOutput:b,autoRun:t,setAutoRun:e}),c("div",{className:"w-full flex-1 flex",id:"editor",children:[a&&s(H,{htmlCode:u,setHtmlCode:y}),o&&s(O,{cssCode:m,setCssCode:C}),n&&s(M,{jsCode:f,setJsCode:S}),i&&s(L,{outputHtml:v}),a||o||n||i||s("img",{src:h,className:"w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2",alt:"logo"})]})]})};j.render(s(k.StrictMode,{children:s(R,{})}),document.getElementById("root"));
