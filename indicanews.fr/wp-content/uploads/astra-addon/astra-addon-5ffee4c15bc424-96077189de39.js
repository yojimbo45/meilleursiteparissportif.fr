!function(){var e,t;function o(e){var t=(t=document.body.className).replace(e,"");document.body.className=t}function r(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function n(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),s=0;a.length>s;s++)a[s].onclick=function(e){var t,a,o;if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var n=document.querySelectorAll(".ast-search-box.header-cover"),s=0;s<n.length;s++)for(var c=n[s].parentNode.querySelectorAll("a.astra-search-icon"),l=0;l<c.length;l++)c[l]==this&&(r(n[s]),n[s].querySelector("input.search-field").focus(),t=n[s],o=a=void 0,document.body.classList.contains("ast-header-break-point")&&(a=document.querySelector(".main-navigation"),null!==(o=document.querySelector(".main-header-bar"))&&null!==a&&(a=a.offsetHeight,o=o.offsetHeight,o=a&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(a)-parseFloat(o):parseFloat(o),t.style.maxHeight=Math.abs(o)+"px")));else!this.classList.contains("full-screen")||(e=document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen")&&(r(e),document.body.className+=" full-screen",e.querySelector("input.search-field").focus())};for(var c=document.getElementsByClassName("close"),s=0,l=c.length;s<l;++s)c[s].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){n(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode){e=document.getElementById("ast-seach-full-screen-form");null!=e&&(n(e),o("full-screen"));for(var t=document.querySelectorAll(".ast-search-box.header-cover"),a=0;a<t.length;a++)n(t[a])}},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}})}();