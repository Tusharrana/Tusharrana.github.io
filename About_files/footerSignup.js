!function(){function e(e){var t=e.html();t=t.replace(/"/g,"'"),t=t.replace(/&amp;/g,"&"),t=_W.tl(t),t=t.replace(/\\'/g,"'"),e.html(t)}function t(e){var t=[{top:""},{top:function(){return $(document).height()-f.element.offset().top-f.element.outerHeight(!0)+"px"}}];e||(t[0].width="",t[1].width=function(){return $(document).width()}),f.element.css(t[0]),f.element.offset({left:0}),f.element.css(t[1]),f.element.offset({left:0}),f.element.css({height:f.getHeight()+"px"}),window.container=f}function n(e){f.compressed&&e||(e&&f.element.toggleClass("expanded"),f.compressed=e||!f.compressed,f.element.stop().animate({height:f.getHeight()+"px"},{step:function(){t(!0)},complete:function(){t(),f.compressed||f.iframe[0].contentWindow.postMessage("expanded","*")}}),f.compressed||$("body, html").stop().animate({scrollTop:$(document).height()}))}function i(n,i,s){if($=n,$('#wsite-base-style, link[href^="//'+i+'/css/sites.css"]').length||$('<link href="//'+i+"/css/sites.css?buildtime="+s+'" rel="stylesheet">').appendTo("head"),f.element=$("#weebly-footer-signup-container"),f.iframe=$("#weebly-footer-signup-iframe"),a()&&f.element.addClass("light"),f.element.appendTo(f.element.parent()),f.element.css({height:f.getHeight()+"px"}),t(),o(),setTimeout(t,300),"en"!=_W.userLang){var r=[".start-free",".powered-by",".headline",".description"];$.each(r,function(t,n){$el=$("#weebly-footer-signup-container "+n),e($el)});var l=$("#weebly-footer-signup-iframe").attr("src");$("#weebly-footer-signup-iframe").attr("src",l+"?sitelang="+_W.userLang)}}function o(){f.element.find(".signup-container-header").click(function(e){if(c()){e.preventDefault();var t=$(this).find("a").attr("href"),i=window.open(t,"_blank");i&&i.focus()}else{if($(this).find("a").is(e.target))return;f.element.toggleClass("expanded"),n(),r()}}).on("mouseenter",function(){u.hoverTimeout=setTimeout(s,250)}).on("mouseleave",function(){clearTimeout(u.hoverTimeout)});var e;$(window).on("resize",function(){t()}).on("click",function(e){f.element.is(e.target)||0!=f.element.find(e.target).length||n(!0)}).on("scroll",function(){clearTimeout(e),e=setTimeout(t,300)})}function s(){u.hovered||(u.hovered=!0)}function r(){u.expanded||(u.expanded=!0)}function a(){var e,t=f.element.parent().css("color").match(/[\d\.]+/g);return t.length<3?!1:(e=l(t[0],t[1],t[2]),e[2]<.57)}function l(e,t,n){e/=255,t/=255,n/=255;var i,o,s=Math.max(e,t,n),r=Math.min(e,t,n),a=(s+r)/2;if(s==r)i=o=0;else{var l=s-r;switch(o=a>.5?l/(2-s-r):l/(s+r),s){case e:i=(t-n)/l+(n>t?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4}i/=6}return[i,o,a]}var c=function(){var e=window.matchMedia("(max-width: 480px)");return e?e.matches:!0},f={compressed:!0,shortHeight:58,tallHeight:333,mobileHeight:110,getHeight:function(){return c()?f.mobileHeight:f.compressed?f.shortHeight:f.tallHeight}},u={hovered:!1,expanded:!1,hoverTimeout:null};window.Weebly=window.Weebly||{},window.Weebly.footer={},window.Weebly.footer.setupContainer=i}(),_wAMD.define("site/published/footerSignup",function(){}),_wAMD.define("site/footerSignup",function(){});