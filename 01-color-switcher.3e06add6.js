const t=document.getElementsByTagName("button")[0],e=document.getElementsByTagName("button")[1],n=document.getElementsByTagName("body")[0];let o;function a(){n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}console.log(t,e),t.addEventListener("click",(function(e){t.disabled=!0,o=setInterval(a,1e3)})),e.addEventListener("click",(function(e){clearInterval(o),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.3e06add6.js.map