(function(){"use strict";const r={WIDGET_URL:"https://sonar-widget.realmohsin-live-demos.com",DEFAULT_POSITION:"bottom-right"},f=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#64ffda" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>`,b=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`;(function(){let o=null,t=null,e=null,i=null,l=!1,a=null,s=r.DEFAULT_POSITION;const u=document.currentScript;if(u)a=u.getAttribute("data-organization-id"),s=u.getAttribute("data-position")||r.DEFAULT_POSITION;else{const n=document.querySelectorAll('script[src*="embed"]'),d=Array.from(n).find(p=>p.hasAttribute("data-organization-id"));d&&(a=d.getAttribute("data-organization-id"),s=d.getAttribute("data-position")||r.DEFAULT_POSITION)}if(!a){console.error("Sonar Widget: data-organization-id attribute is required");return}function g(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h()}function h(){e=document.createElement("button"),e.id="sonar-widget-button",e.innerHTML=f,e.style.cssText=`
      position: fixed;
      ${s==="bottom-right"?"right: 20px;":"left: 20px;"}
      bottom: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #0a192f;
      color: #64ffda;
      border: none;
      cursor: pointer;
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 24px rgba(100, 255, 218, 0.35);
      transition: all 0.2s ease;
    `,e.addEventListener("click",v),e.addEventListener("mouseenter",()=>{e&&(e.style.transform="scale(1.05)")}),e.addEventListener("mouseleave",()=>{e&&(e.style.transform="scale(1)")}),document.body.appendChild(e),i=document.createElement("div"),i.id="sonar-widget-overlay",i.style.cssText=`
      position: fixed;
      inset: 0;
      background: rgba(10, 25, 47, 0.5);
      z-index: 999997;
      display: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    `,i.addEventListener("click",c),document.body.appendChild(i),t=document.createElement("div"),t.id="sonar-widget-container",t.style.cssText=`
      position: fixed;
      ${s==="bottom-right"?"right: 20px;":"left: 20px;"}
      bottom: 90px;
      width: 400px;
      height: 600px;
      max-width: calc(100vw - 40px);
      max-height: calc(100vh - 110px);
      z-index: 999998;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
      display: none;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.3s ease;
    `,o=document.createElement("iframe"),o.src=w(),o.style.cssText=`
      width: 100%;
      height: 100%;
      border: none;
    `,o.allow="microphone; clipboard-read; clipboard-write",t.appendChild(o),document.body.appendChild(t),window.addEventListener("message",m)}function w(){const n=new URLSearchParams;return n.append("organizationId",a),`${r.WIDGET_URL}?${n.toString()}`}function m(n){if(n.origin!==new URL(r.WIDGET_URL).origin)return;const{type:d,payload:p}=n.data;switch(d){case"close":c();break;case"resize":p.height&&t&&(t.style.height=`${p.height}px`);break}}function v(){l?c():y()}function y(){t&&e&&(l=!0,i&&(i.style.display="block"),t.style.display="block",setTimeout(()=>{i&&(i.style.opacity="1"),t&&(t.style.opacity="1",t.style.transform="translateY(0)")},10),e.innerHTML=b)}function c(){t&&e&&(l=!1,t.style.opacity="0",t.style.transform="translateY(10px)",i&&(i.style.opacity="0"),setTimeout(()=>{t&&(t.style.display="none"),i&&(i.style.display="none")},300),e.innerHTML=f,e.style.background="#0a192f")}function x(){window.removeEventListener("message",m),t&&(t.remove(),t=null,o=null),i&&(i.remove(),i=null),e&&(e.remove(),e=null),l=!1}function E(n){x(),n.organizationId&&(a=n.organizationId),n.position&&(s=n.position),g()}window.SonarWidget={init:E,show:y,hide:c,destroy:x},g()})()})();
