!function(){var t,e=document.getElementsByTagName("button")[0],n=document.getElementsByTagName("button")[1],a=document.getElementsByTagName("body")[0];function o(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}console.log(e,n),e.addEventListener("click",(function(n){e.disabled=!0,t=setInterval(o,1e3)})),n.addEventListener("click",(function(n){clearInterval(t),e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.966755c4.js.map
