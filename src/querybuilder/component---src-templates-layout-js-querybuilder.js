(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t);a(168),a(169),a(44),a(171),a(172),a(85),a(28),a(82),a(57);var c,n,i,o,r,s=a(8),d=a.n(s),l=a(0),m=a.n(l),h=a(159),u=a.n(h),f=a(160),b=a(166).a,v={JavaScript:"essential-js2","JavaScript (ES5)":"essential-js2",Angular:"angular",React:"react",Vue:"vue","ASP.NET Core":"aspnetcore-js2","ASP.NET MVC":"aspnetmvc-js2","ASP.NET Core Razor Components [Preview]":""},p=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){var e=this.props.platform;return m.a.createElement(g,null,m.a.createElement("div",{className:"doc-icons icon-burger_menu doc-hamburger-icon"}),m.a.createElement("a",{className:"doc-logo-link",href:"https://help.syncfusion.com/"},m.a.createElement("div",{className:"doc-logo doc-icons icon-syncfusion"})),m.a.createElement("div",{className:"doc-header-platform"},e),m.a.createElement("div",{className:"doc-header-links"+("ASP.NET Core Razor Components [Preview]"===e?" razor-doc-links":"")},m.a.createElement("a",{href:b,target:"_blank"},m.a.createElement("div",{className:"doc-header-link doc-demos-link"},"Demos")),m.a.createElement("a",{href:"https://www.syncfusion.com/support/directtrac/incidents",target:"_blank"},m.a.createElement("div",{className:"doc-header-link doc-support-link"},"Support")),m.a.createElement("a",{href:"https://www.syncfusion.com/forums/"+v[e],target:"_blank"},m.a.createElement("div",{className:"doc-header-link doc-forum-link"},"Forum")),m.a.createElement("a",{href:"https://www.syncfusion.com/downloads/"+v[e],target:"_blank"},m.a.createElement("div",{className:"doc-header-link doc-download-link"},"Download"))))},t}(m.a.Component),g=f.b.div.withConfig({displayName:"Header__SiteContainer",componentId:"qbokw-0"})(["background:",";padding:0px 20px;@media screen and (max-width:764px){padding:0px 10px;}"],function(e){return e.theme.brand}),w=p,k=a(161),E=a.n(k),y=a(151),j=a(199),N=a(197),x=a(200),S=a(198),O=a(155),B=a(12),C=a(167);a.d(t,"default",function(){return X}),a.d(t,"pageQuery",function(){return ue});var V,L,T=[],A=!0,_=!0,P=!0,D={groupBy:"component",value:"title"},M=E.a.pathPrefix,I=E.a.isApi,R=!1,q="",H={JavaScript:"essential-js2","JavaScript (ES5)":"essential-js2",Angular:"angular-js2",React:"react-js2",Vue:"vue","ASP.NET Core":"aspnetcore-js2","ASP.NET MVC":"aspnetmvc-js2","ASP.NET Core Razor Components [Preview]":""},F={JavaScript:"https://ej2.syncfusion.com/demos","JavaScript (ES5)":"https://ej2.syncfusion.com/javascript/demos",Angular:"https://ej2.syncfusion.com/angular/demos",React:"https://ej2.syncfusion.com/react/demos",Vue:"https://ej2.syncfusion.com/vue/demos","ASP.NET Core":"https://ej2.syncfusion.com/aspnetcore/","ASP.NET MVC":"https://ej2.syncfusion.com/aspnetmvc/","ASP.NET Core Razor Components [Preview]":"https://ej2.syncfusion.com/aspnet-core-razor-components/"},U={"ASP.NET Core":"https://help.syncfusion.com/cr/aspnetcore-js2/aspnetcore/","ASP.NET MVC":"https://help.syncfusion.com/cr/aspnetmvc-js2/aspnetmvc/"},J=["base","angular-base","check-box","compression","data","excel-export","file-utils","pdf-export"],z=/ASP.NET Core|ASP.NET MVC|ASP.NET Core Razor Components \[Preview\]/,W=!1,G="",Y=0,Q=null,K=!0;"undefined"!=typeof window&&(K=!y.d.isIE);var X=function(e){function t(){for(var t,a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))||this).search=void 0,t.feedBackDialog=void 0,t.emailCheckBox=void 0,t.leftSideBar=void 0,t.rightSideBar=void 0,t}d()(t,e);var a=t.prototype;return a.getRouteIndex=function(e){return c.searchArray(e)},a.setNavContent=function(){var e=this.getRouteIndex(this.getPathName()),t=0===e,a=c.length-e==1,i=document.getElementsByClassName("nav-prev-text")[0],o=document.getElementsByClassName("nav-next-text")[0],r=t?n[e]:n[--e],s=c[e],d=void 0===r,l=a?n[e]:n[e+(t?1:2)],m=a?c[e]:c[e+(t?1:2)];R&&(r=this.getMobileNavContent(r),l=this.getMobileNavContent(l));var h="/"===M?"":M;Object(y.V)("#prev-link").href=h+s||"",Object(y.V)("#next-link").href=h+m||"",i.innerText=r,o.innerText=l,i.parentElement.classList[t||d?"add":"remove"]("doc-hide"),o.parentElement.classList[a?"add":"remove"]("doc-hide")},a.getMobileNavContent=function(e){return-1!==e.indexOf("/")&&(e=e.split("/")[1].trim()),e},a.getPathName=function(){var e="";return window&&(e=window.location.pathname,"/"!==M&&(e=window.location.pathname.replace(M,""))),e},a.expandedNode=function(e){var t,a=[],c=e.split("/")[1],n=o,s=r[c],d=i[s],l=n,m=Array.isArray(l),h=0;for(l=m?l:l[Symbol.iterator]();;){var u;if(m){if(h>=l.length)break;u=l[h++]}else{if((h=l.next()).done)break;u=h.value}var f=u;f.data&&s&&f.data===s&&(t=n.indexOf(f))}if(d){var b=d,v=Array.isArray(b),p=0;for(b=v?b:b[Symbol.iterator]();;){var g;if(v){if(p>=b.length)break;g=b[p++]}else{if((p=b.next()).done)break;g=p.value}var w=g;w.expanded=w.id===c;var k=!1;if(w.child&&w.child.length){var E=[],y=w.child,j=Array.isArray(y),N=0;for(y=j?y:y[Symbol.iterator]();;){var x;if(j){if(N>=y.length)break;x=y[N++]}else{if((N=y.next()).done)break;x=N.value}var S=x;S.expanded=S.id===e,S.expanded&&(k=!0),E.push(S)}w.child=E}k&&(w.expanded=!0),a.push(w)}i[s]=a}return t},a.expandAccordion=function(e){var t=document.getElementById("toc").ej2_instances[0];(e||0===e)&&t.expandItem(!0,e),t.animation={expand:{effect:"SlideDown",duration:400,easing:"linear"},collapse:{effect:"SlideUp",duration:400,easing:"linear"}}},a.renderBreadCrumb=function(){var e=document.getElementById("bread-crumb-data").getAttribute("data"),t=e.split("/");if(!/overview/i.test(t[t.length-1])&&("/"!==e[0]||2===e.split("/").length)){var a=3===t.length,c=a?t[2]:t[1],n='<a class="doc-icons icon-home_icon" href="'+M+'"></a>'+("/"===e[0]?"":" ")+' <a class="doc-bread-nav" href="'+(a?"../../":"../")+'">'+(t[0]?"/ "+t[0]:"")+"</a>"+(a?" / "+t[1]:"")+(c?" / "+c:"");document.getElementById("doc-bread-crumb").innerHTML=n;var i=document.querySelector(".doc-bread-nav");i&&(i.onclick=function(e){e.preventDefault();var t=window.location.href;(t=t.split("/")).pop(),a&&t.pop(),window.location.href=t.join("/")})}Object(y.B)(Object(y.V)("#bread-crumb-data"))},a.componentDidMount=function(){var e=this;c=window.toc.path,n=window.toc.titles,i=window.toc.treeData,o=window.toc.accData,r=window.toc.treeMapper,this.search.dataSource=window.toc.searchData,R=window.matchMedia("(max-width:480px)").matches,window.gcseSearch=function(){Object(y.V)("#doc-body-cont").classList.add("gcse-search"),Object(y.V)("#doc-search-result").classList.remove("doc-hide");var e=Object(y.V)(".e-toc-active");e&&e.classList.remove("e-toc-active"),ce()},ce(),function(){var e=document.getElementsByClassName("doc-tab");if(e.length)for(var t=0;t<e.length;t++){var a=new O.e({created:function(){var e=this.element.querySelectorAll(".e-tab-text span")[0];"true"===e.getAttribute("data-active")&&this.select(1),ne(this.element)},selecting:ie,selected:function(e){var t=this.element.getElementsByClassName("e-content")[0].children[1];if(1===e.selectedIndex&&!t.getElementsByTagName("iframe").length){var a=e.selectedItem.querySelector(".e-tab-text span"),c=a.getAttribute("data-height"),n=c?'style="height:'+c+'"':"",i=a.getAttribute("data-sample"),o='<iframe class="doc-sample-frame" src="'+i+'"'+n+"></iframe>";t.innerHTML=o}}});a.appendTo(e[t])}else ne(document)}(),function(e){if(!e.length)return"";R&&(Object(y.V)("#doc-mobile-content-search").innerHTML=Object(y.V)("#doc-content-search").innerHTML,Object(y.V)("#doc-content-search").innerHTML="");window.__gcse={callback:oe},function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://cse.google.com/cse.js?cx="+e;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)}()}(this.props.pageContext.gcse),this.expandAccordion(this.expandedNode(this.getPathName())),this.setNavContent(),this.rightTocSelect(),this.renderBreadCrumb(),this.selectedToc(),this.configureHamburger(),this.configureRightSideBar(),this.configureMobileSearch(),Object(y.V)(".doc-toc-search-icon").addEventListener("click",function(){var e=Object(y.V)("#auto-complete");e&&e.value&&e.ej2_instances&&e.ej2_instances[0].renderPopup()}),R&&(Object(y.V)("#md-content").addEventListener("click",this.docClick),Object(y.V)("#doc-footer").addEventListener("click",this.docClick),Object(y.V)("#doc-search-result").classList.remove("doc-hide")),window.location.hash.length||(document.getElementById("md-content").scrollTop=0),K&&(V=Object(y.V)("#footer-feedback"),L=Object(y.V)(".feedback-down-response")),this.leftSideBar.mediaQuery=window.matchMedia("(min-width: 765px)"),this.setHeaderClick(),this.getUuid(),setTimeout(function(){e.ScrollToc(),window.location.hash&&Object(y.V)(window.location.hash).click(),e.removeOverlay()},300)},a.getUuid=function(){if(""!==Z("_uid"))Y=Z("_uid");else{var e=6e4*(Q=new Date).getTimezoneOffset(),t=(n=new Date(Q.getFullYear(),0,1),i=new Date(Q.getFullYear(),6,1),36e5*(Math.max(n.getTimezoneOffset(),i.getTimezoneOffset())<=Q.getTimezoneOffset()?-4:-5)),a=Q.getTime()+e,c=new Date(a+t)/1;(function(e,t){var a=new Date;if("_pageCount"!=e){a.setMonth(a.getMonth()+24);var c="expires="+a.toUTCString()}document.cookie=e+"="+t+"; "+c+"domain=.syncfusion.com;path=/"})("_uid",Y=Math.floor(1e3*Math.random())+1+c.toString())}var n,i},a.removeOverlay=function(){var e=Object(y.V)("#doc-overlay");e&&e.classList.add("doc-hide")},a.docClick=function(){Object(y.V)("#doc-left-sidebar").ej2_instances[0].hide(),Object(y.V)("#doc-mobile-right-toc").ej2_instances[0].hide(),Object(y.V)("#doc-mobile-toc").classList.remove("right-toc-active"),Object(y.V)("#doc-mobile-search").classList.remove("mobile-search-active"),Object(y.V)("#md-content").classList.remove("mobile-search-enabled"),Object(y.V)("#doc-mobile-content-search").classList.add("doc-hide")},a.setHeaderClick=function(){var e=Object(y.W)("h1, h2, h3, h4",Object(y.V)("#md-cnt")),t=Array.isArray(e),a=0;for(e=t?e:e[Symbol.iterator]();;){var c;if(t){if(a>=e.length)break;c=e[a++]}else{if((a=e.next()).done)break;c=a.value}c.addEventListener("click",function(e){(Object(y.V)("a",e.srcElement)||Object(y.V)("a",e.srcElement.parentElement)).click()})}},a.configureHamburger=function(){var e=this;Object(y.V)(".doc-hamburger-icon").addEventListener("click",function(){e.closeRightSideBar(),e.leftSideBar.toggle(),e.toggleMobileSearch(!1)})},a.configureRightSideBar=function(){var e=this;Object(y.V)(".doc-no-right-toc")||(Object(y.V)("#doc-mobile-right-toc").classList.remove("doc-hide"),Object(y.V)("#doc-mobile-toc").addEventListener("click",function(){_&&(Object(y.V)("#doc-mobile-right-toc").classList.remove("doc-no-width"),_=!1),Object(y.V)("#doc-mobile-toc").classList[e.rightSideBar.isOpen?"remove":"add"]("right-toc-active"),e.leftSideBar.hide(),e.rightSideBar.toggle(),e.toggleMobileSearch(!1)}))},a.configureMobileSearch=function(){var e=this;Object(y.V)("#doc-mobile-search").addEventListener("click",function(){var t=Object(y.V)("#doc-mobile-search");t.classList.toggle("mobile-search-active"),e.leftSideBar.hide(),e.closeRightSideBar(),e.toggleMobileSearch(t.classList.contains("mobile-search-active"))})},a.toggleMobileSearch=function(e){Object(y.V)("#doc-mobile-search").classList[e?"add":"remove"]("mobile-search-active"),Object(y.V)("#md-content").classList[e?"add":"remove"]("mobile-search-enabled"),Object(y.V)("#doc-body-cont").classList.contains("gcse-search")||Object(y.V)("#doc-mobile-content-search").classList[e?"remove":"add"]("doc-hide")},a.closeRightSideBar=function(){var e=Object(y.V)(".right-toc-active");e&&e.classList.remove("right-toc-active"),this.rightSideBar.hide()},a.selectedToc=function(){var e=this.getPathName(),t=document.getElementById("toc"),a=t.querySelector("[data-uid='"+e+"']"),c=t.querySelector("[data='"+e+"']");a&&a.classList.add("e-toc-active"),c&&Object(y.w)(c,".e-acrdn-item").classList.add("e-toc-active")},a.rightTocSelect=function(){var e=document.getElementById("doc-right-toc");if(e){var t=e.querySelector(".active");if(e){var a=e.querySelector('[href="#'+window.location.href.split("#")[1]+'"]');a&&(t&&t.classList.remove("active"),a.parentElement.classList.add("active"))}}},a.searchSelect=function(e){e.itemData&&e.itemData.id&&ee(e.itemData.id)},a.rightTocHighlight=function(){if(document.getElementById("doc-right-toc")){var e=document.getElementById("md-content"),t=document.getElementById("doc-right-toc"),a=t.querySelector(".select"),c=e.querySelectorAll("h2,h3,h4,h5,h6"),n=Array.isArray(c),i=0;for(c=n?c:c[Symbol.iterator]();;){var o;if(n){if(i>=c.length)break;o=c[i++]}else{if((i=c.next()).done)break;o=i.value}var r=o;if(this.checkVisibilty(r,e)){var s=t.querySelector("[href='#"+r.id+"']");return void(s&&(a&&a.classList.remove("select"),s.parentNode.classList.add("select")))}}}},a.checkVisibilty=function(e,t){var a=t.scrollTop,c=a+t.offsetHeight,n=e.offsetTop,i=n+parseInt(window.getComputedStyle(e).height);return n<=c&&i>=a},a.ScrollToc=function(){var e=this;setTimeout(function(){var t=Object(y.V)('[data-uid="'+e.getPathName()+'"]')||Object(y.V)("#toc .e-acrdn-item.e-active")||Object(y.V)("#toc .e-acrdn-item.e-toc-active");t&&t.scrollIntoView()},0)},a.feedBackUp=function(){V.classList.add("doc-feedback-up"),V.innerHTML="Thank you for your feedback!",new y.b({duration:3e3,name:"FadeOut",end:function(){Object(y.V)("#footer-feedback").classList.add("doc-hide")}}).animate(V)},a.resetFeedBackDown=function(){var e=Object(y.W)("#checkboxes input",L),t=Array.isArray(e),a=0;for(e=t?e:e[Symbol.iterator]();;){var c;if(t){if(a>=e.length)break;c=e[a++]}else{if((a=e.next()).done)break;c=a.value}var n=c;n.ej2_instances[0].checked=!1;var i=n.id,o=Object(y.V)("#comment"+i,this.feedBackDownResponse);o.value="",o.classList.add("doc-hide"),Object(y.V)(".error-message."+i,L).classList.add("doc-hide")}Object(y.V)(".email-input",L).value="",this.emailCheckBox.checked=!1,Object(y.w)(this.emailCheckBox.element,".e-checkbox-wrapper").classList.add("doc-hide"),Object(y.V)(".feed-submit").ej2_instances[0].disabled=!0},a.feedBackDown=function(){var e=this;A&&(Object(y.w)(this.emailCheckBox.element,".e-checkbox-wrapper").classList.add("doc-hide"),Object(y.V)(".email-input").addEventListener("keyup",function(t){Object(y.w)(e.emailCheckBox.element,".e-checkbox-wrapper").classList[t.target.value?"remove":"add"]("doc-hide")}),A=!A),this.feedBackDialog.show()},a.feedBackDownCancel=function(){L.classList.add("doc-hide"),V.classList.remove("doc-hide"),this.resetFeedBackDown()},a.feedBackSubmit=function(){var e=this;if(this.validateFeedBack()){L.classList.add("doc-hide"),Object(y.V)("#feedBackDlg .e-dlg-header-content").classList.add("doc-hide"),Object(y.V)("#feedBackDlg .e-footer-content").classList.add("doc-hide"),Object(y.V)("#feedBackDlg").classList.add("feed-thanks"),Object(y.V)("#feedBackDlg .feedback-up-response").classList.remove("doc-hide"),new y.b({duration:2500,name:"FadeOut",end:function(){Object(y.V)("#feedBackDlg").classList.add("doc-hide"),Object(y.V)("#feedBackDlg").ej2_instances[0].hide(),Object(y.V)("#footer-feedback").classList.add("doc-hide")}}).animate("#feedBackDlg");var t="",a=new y.a("https://ipinfo.io/json","GET",!0);a.send().then(),a.onSuccess=function(a){t=JSON.parse(a).ip;var c={UUID:Y,URL:window.feedbackTest?"https://ej2.syncfusion.com/javascript/documentation/grid/getting-started.html":window.location.href,IPAddress:t,IsFeedbackProvided:!0,Email:Object(y.V)(".feedback-down-response .email-input").value,Message:e.feedBackMessage(),CanContact:e.emailCheckBox.checked,Feedback:Object(y.V)("#feedback-down").innerText.trim()};console.log(JSON.stringify(c,null,4)),new y.a("https://websiteapi.syncfusion.com/feedback/doc","GET",!0,"application/json").send(JSON.stringify(c))}}},a.feedBackMessage=function(){var e="",t=1,a=Object(y.W)("#checkboxes input",L),c=Array.isArray(a),n=0;for(a=c?a:a[Symbol.iterator]();;){var i;if(c){if(n>=a.length)break;i=a[n++]}else{if((n=a.next()).done)break;i=n.value}var o=i;if(o.checked)e+=t+". <b>"+o.ej2_instances[0].label+"</b><br>&nbsp;&nbsp;&nbsp;&nbsp;"+Object(y.V)("#comment"+o.id,this.feedBackDownResponse).value+"<br><br>",t++}return e},a.validateFeedBack=function(){var e=!0,t=Object(y.W)("#checkboxes input",L),a=Array.isArray(t),c=0;for(t=a?t:t[Symbol.iterator]();;){var n;if(a){if(c>=t.length)break;n=t[c++]}else{if((c=t.next()).done)break;n=c.value}var i=n;if(i.ej2_instances[0].checked){var o=i.id;Object(y.V)("#comment"+o,this.feedBackDownResponse).value||(Object(y.V)(".error-message."+o,L).classList.remove("doc-hide"),e=!1)}}return e},a.floatFocus=function(e){e.target.parentElement.classList.add("e-input-focus")},a.floatBlur=function(e){e.target.parentElement.classList.remove("e-input-focus")},a.feedBackCheck=function(e){var t=e.event.srcElement,a=t.id;Object(y.V)("#comment"+a,L).classList[t.checked?"remove":"add"]("doc-hide"),Object(y.V)(".error-message."+a,L).classList.add("doc-hide");var c=!1,n=Object(y.W)("#checkboxes input",L),i=Array.isArray(n),o=0;for(n=i?n:n[Symbol.iterator]();;){var r;if(i){if(o>=n.length)break;r=n[o++]}else{if((o=n.next()).done)break;r=o.value}if(r.checked){c=!0;break}}Object(y.V)(".feed-submit").ej2_instances[0].disabled=!c},a.render=function(){var e=this,t=this.props.pageContext,a=t.header,c=t.breadCrumb,n=t.isReleaseNotes,i=t.seoContent,o=t.platform,r=t.isRobots,s=this.props.data.postBySlug,d="";n&&(d=" doc-release-notes");var l="e-view";a||(l+=" doc-no-right-toc");var h={name:"",content:""};return r&&(h.name="robots",h.content="nofollow"),q=F[o],W=z.test(o),G=o,m.a.createElement(C.a,null,m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement("title",null,i),m.a.createElement("meta",{name:"description",content:"Learn about the topic "+i}),m.a.createElement("meta",{name:h.name,content:h.content})),m.a.createElement("div",{id:"doc-body",className:"e-view"+d+(I?" api-docs":"")},m.a.createElement("div",{hidden:!0,id:"sync-analytics","data-queue":"EJ2 - "+("JavaScript (ES5)"===o?"JavaScript ES5":o)+" - Documentation"}),m.a.createElement(me,{className:"e-view"},m.a.createElement(w,{platform:o})),m.a.createElement("div",{id:"doc-body-container",className:"e-view"},m.a.createElement(S.a,{id:"doc-left-sidebar",enableGestures:!1,width:"265px",type:"Over",target:"#doc-body-container",ref:function(t){return e.leftSideBar=t}},m.a.createElement(he,{id:"doc-left-pane",className:"e-view"},m.a.createElement("div",{id:"left-pane-search",className:"e-view"},m.a.createElement(N.a,{id:"auto-complete",ref:function(t){return e.search=t},fields:D,dataSource:T,placeholder:"Filter by title",select:this.searchSelect.bind(this)}),m.a.createElement("div",{className:"doc-toc-search-icon"})),m.a.createElement("div",{id:"doc-left-toc",className:"e-view"},m.a.createElement("div",{id:"toc"}),m.a.createElement("div",{className:"doc-mobile-links"},m.a.createElement("div",{className:"doc-mobile-links-split"},m.a.createElement("a",{href:q,target:"_blank"},m.a.createElement("div",{className:"doc-mobile-link doc-demos-link"},"DEMOS")),m.a.createElement("a",{href:"https://www.syncfusion.com/support/directtrac/incidents",target:"_blank"},m.a.createElement("div",{className:"doc-mobile-link doc-support-link"},"SUPPORT"))),m.a.createElement("div",{className:"doc-mobile-links-split"},m.a.createElement("a",{href:"https://www.syncfusion.com/forums/"+H[o],target:"_blank"},m.a.createElement("div",{className:"doc-mobile-link doc-forum-link"},"FORUM")),m.a.createElement("a",{href:"https://www.syncfusion.com/downloads/"+(W?H[o]:"essential-js2"),target:"_blank"},m.a.createElement("div",{className:"doc-mobile-link doc-download-link"},"DOWNLOAD"))))))),m.a.createElement(le,{id:"doc-body-cont",className:l},m.a.createElement("div",{id:"bread-crumb-data",data:c}),m.a.createElement("div",{id:"doc-body-header",className:"e-view"},m.a.createElement("div",{id:"doc-bread-crumb"}),m.a.createElement("div",{id:"doc-mobile-toc",className:"doc-icons icon-toc"}),m.a.createElement("div",{id:"doc-mobile-search",className:"doc-icons icon-search doc-hide"}),m.a.createElement("div",{className:"doc-search-results-header"},"Search results"),m.a.createElement("div",{id:"doc-content-search",dangerouslySetInnerHTML:{__html:'<gcse:searchbox enableAutoComplete="true"></gcse:searchbox>'}})),m.a.createElement("div",{id:"doc-mobile-content-search",className:"doc-hide e-view"}),m.a.createElement("div",{className:"doc-body-content"},m.a.createElement("div",{id:"md-content",className:"e-view",onScroll:this.rightTocHighlight.bind(this)},m.a.createElement("div",{id:"md-cnt",dangerouslySetInnerHTML:{__html:s.html}}),m.a.createElement(se,{id:"nav-buttons"},m.a.createElement(de,{id:"prev-button"},m.a.createElement("a",{id:"prev-link"},m.a.createElement("div",{className:"doc-icons icon-prev_icon nav-prev-icon"}),m.a.createElement("div",{className:"nav-prev-text"},"Previous"))),m.a.createElement(de,{id:"next-button"},m.a.createElement("a",{id:"next-link"},m.a.createElement("div",{className:"doc-icons icon-next_icon nav-next-icon"}),m.a.createElement("div",{className:"nav-next-text"},"Next")))),m.a.createElement("div",{id:"doc-footer"},K?m.a.createElement("div",{id:"footer-feedback"},m.a.createElement("div",{className:"feedback-ques"},m.a.createElement("div",{className:"feedback-ques-text"},"Is this page helpful?"),m.a.createElement("div",{id:"feedback-down",className:"feedback",onClick:this.feedBackDown.bind(this)},m.a.createElement("div",{className:"feedback-down-icon"}),m.a.createElement("div",{className:"feedback-down-text"},"No")),m.a.createElement("div",{id:"feedback-up",className:"feedback",onClick:this.feedBackUp.bind(this)},m.a.createElement("div",{className:"feedback-up-icon"}),m.a.createElement("div",{className:"feedback-up-text"},"Yes")))):m.a.createElement("div",{id:"ie"}),m.a.createElement("div",{id:"footer-copyright"},m.a.createElement("a",{id:"copyright",target:"_blank",href:"http://www.syncfusion.com/copyright"},"Copyright © 2001 - ",m.a.createElement("span",{id:"copyright-year"}," 2019")," Syncfusion Inc. All Rights Reserved")))),m.a.createElement(re,{dangerouslySetInnerHTML:{__html:a}})),m.a.createElement(S.a,{id:"doc-mobile-right-toc",className:"doc-hide doc-no-width",isOpen:!1,enableGestures:!1,width:"260px",type:"Over",position:"Right",ref:function(t){return e.rightSideBar=t}},m.a.createElement(re,{dangerouslySetInnerHTML:{__html:a}})),m.a.createElement("div",{id:"doc-search-result",className:"doc-hide",dangerouslySetInnerHTML:{__html:"<gcse:searchresults></gcse:searchresults>"}}))),m.a.createElement("div",{id:"doc-overlay",className:"e-view"},m.a.createElement("div",{className:"doc-loading"},m.a.createElement("svg",{className:"circular",height:"40",width:"40"},m.a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"6",strokeMiterlimit:"10"})))),K?m.a.createElement(x.a,{id:"feedBackDlg",buttons:[{click:function(){e.feedBackSubmit()},buttonModel:{content:"SUBMIT",isPrimary:!0,cssClass:"e-primary feed-submit",disabled:!0}},{click:function(){e.feedBackDialog.hide()},buttonModel:{content:"CANCEL",cssClass:"e-primary feed-cancel"}}],visible:!1,isModal:!0,showCloseIcon:!0,header:"HELP US TO IMPROVE THIS PAGE",width:"50%",close:this.resetFeedBackDown.bind(this),ref:function(t){return e.feedBackDialog=t},target:"#doc-body"},m.a.createElement("div",{className:"feedback-down-response"},m.a.createElement("div",{id:"checkboxes",className:"multiselect"},m.a.createElement(j.a,{id:"one",label:"Correct inaccurate or outdated content",change:this.feedBackCheck.bind(this)}),m.a.createElement("br",null),m.a.createElement("textarea",{id:"commentone",className:"form-control message doc-hide",rows:"3",placeholder:"Please specify what content needs correction..."}),m.a.createElement("div",{className:"error-message doc-hide one"},"Please provide additional information"),m.a.createElement("br",null),m.a.createElement(j.a,{id:"two",label:"Improve illustrations or images",change:this.feedBackCheck.bind(this)}),m.a.createElement("br",null),m.a.createElement("textarea",{id:"commenttwo",className:"form-control message doc-hide",rows:"3",placeholder:"Please specify which images can be improved..."}),m.a.createElement("div",{className:"error-message doc-hide two"},"Please provide additional information"),m.a.createElement("br",null),m.a.createElement(j.a,{id:"three",label:"Fix typos or broken links",change:this.feedBackCheck.bind(this)}),m.a.createElement("br",null),m.a.createElement("textarea",{id:"commentthree",className:"form-control message doc-hide",rows:"3",placeholder:"Please specify what needs to be fixed..."}),m.a.createElement("div",{className:"error-message doc-hide three"},"Please provide additional information"),m.a.createElement("br",null),m.a.createElement(j.a,{id:"four",label:"Add more information",change:this.feedBackCheck.bind(this)}),m.a.createElement("br",null),m.a.createElement("textarea",{id:"commentfour",className:"form-control message doc-hide",rows:"3",placeholder:"Please specify what information should be added..."}),m.a.createElement("div",{className:"error-message doc-hide four"},"Please provide additional information"),m.a.createElement("br",null),m.a.createElement(j.a,{id:"five",label:"Correct inaccurate or outdated code samples",change:this.feedBackCheck.bind(this)}),m.a.createElement("br",null),m.a.createElement("textarea",{id:"commentfive",className:"form-control message doc-hide",rows:"3",placeholder:"Please specify what needs correction..."}),m.a.createElement("div",{className:"error-message doc-hide five"},"Please provide additional information"),m.a.createElement("br",null),m.a.createElement(j.a,{id:"six",label:"Other",change:this.feedBackCheck.bind(this)}),m.a.createElement("br",null),m.a.createElement("textarea",{id:"commentsix",className:"form-control message doc-hide",rows:"3",placeholder:"Please enter feedback on topics not previously listed..."}),m.a.createElement("div",{className:"error-message doc-hide six"},"Please provide additional information")),m.a.createElement("input",{className:"e-input email-input",onFocus:this.floatFocus,onBlur:this.floatBlur,type:"email",placeholder:"Email (optional)"}),m.a.createElement(j.a,{ref:function(t){return e.emailCheckBox=t},id:"emailcheckbox",label:'I agree to the creation of a Syncfusion account in my name and to be contacted regarding this message. No further action will be taken. Please see our <a href="https://www.syncfusion.com/privacy" target="_blank"> Privacy policy.</a>'}),m.a.createElement("div",{id:"email-error-message",className:"error-message doc-hide"})),m.a.createElement("div",{className:"feedback-up-response doc-hide"},"Thank you for your feedback and comments.We will rectify this as soon as possible!")):m.a.createElement("div",{class:"ie"}))))},a.shouldComponentUpdate=function(){return!1},t}(m.a.Component);function Z(e){for(var t=e+"=",a=document.cookie.split(";"),c=0;c<a.length;c++){for(var n=a[c];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return""}function $(e){if(!e.node.querySelector(".e-icons")){var t=e.nodeData.id;if(-1!==t.indexOf("/api/")){var a=window.location.origin+M+t;window.open(a,"_blank")}else ee(t)}}function ee(e){Object(y.V)("#doc-mobile-right-toc").classList.add("doc-hide"),Object(B.navigate)(e)}function te(e){var t=e.element.querySelector(".toc-tree");if("expanding"===e.name&&t&&0===t.childElementCount){var a=i;new O.g({fields:{dataSource:a[t.id],id:"id",text:"name",child:"child"},nodeSelected:$}).appendTo(t)}}function ae(e){var t=e.originalEvent.srcElement,a=t.classList.contains("e-icons");if(I&&!a&&(t.classList.contains("e-acrdn-header")||t.classList.contains("e-acrdn-header-content"))){var n=Object(y.w)(t,".e-acrdn-item"),i=Object(y.V)(".toc-tree",n);if(i){var o="/"+i.id;ee(-1!==J.indexOf(i.id)?c[c.searchArray(o)]:o)}}else{var r="acc-path"===t.id?t:t.querySelector("#acc-path");if("clicked"===e.name&&r){var s=r.getAttribute("data");if(r.classList.contains("doc-ref"))if(W&&"/api"===s)window.open(U[G],"_blank");else{var d=window.location.origin+M+s;window.open(d,"_blank")}else s&&ee(s)}}}function ce(e){new O.a({expandMode:"Single",expanding:te,clicked:ae,items:e?window.toc.accData:o,animation:{expand:{effect:"SlideDown",duration:0,easing:"linear"},collapse:{effect:"SlideUp",duration:400,easing:"linear"}}}).appendTo("#toc")}function ne(e){for(var t=e.getElementsByClassName("doc-inner-tab"),a=0;a<t.length;a++){new O.e({selecting:ie}).appendTo(t[a])}}function ie(e){e.isSwiped&&(e.cancel=!0)}function oe(){if("complete"!==document.readyState)return google.setOnLoadCallback(oe,!0);var e=Object(y.V)("#gsc-i-id1");if(e){e.placeholder="Search by content";var t=Object(y.V)("button.gsc-search-button");Object(y.B)(Object(y.V)("svg",t));var a=Object(y.z)("div",{id:"doc-content-search-icon"});t.appendChild(a),t.addEventListener("click",function(){(Object(y.V)("#doc-content-search input")||Object(y.V)("#doc-mobile-content-search input")).value&&P&&gcseSearch()}),(Object(y.V)("#doc-content-search input")||Object(y.V)("#doc-mobile-content-search input")).addEventListener("keyup",function(e){13===e.keyCode&&e.srcElement.value&&P&&gcseSearch()})}}Array.prototype.searchArray=function(e){for(var t=0;t<this.length;t++)if(0==this[t].indexOf(e))return t;return-1};var re=f.b.div.withConfig({displayName:"layout__RightToc",componentId:"sc-1t3oqgw-0"})([""]),se=f.b.div.withConfig({displayName:"layout__NavButtons",componentId:"sc-1t3oqgw-1"})([""]),de=f.b.div.withConfig({displayName:"layout__NavButton",componentId:"sc-1t3oqgw-2"})([""]),le=f.b.div.withConfig({displayName:"layout__BodyContainer",componentId:"sc-1t3oqgw-3"})(["overflow:auto;overflow-x:hidden;justify-self:center;width:100%;padding:",";@media screen and (max-width:600px){order:2;}& > div{max-width:",";margin:auto;}& > h1{color:",";}"],function(e){return e.theme.sitePadding},function(e){return e.theme.contentWidthLaptop},function(e){return e.theme.accentDark}),me=f.b.div.withConfig({displayName:"layout__HeaderContainer",componentId:"sc-1t3oqgw-4"})(["height:60px;width:100%;box-shadow:0 8px 11px -6px rgba(0,0,0,0.12);z-index:1001;opacity:100;"]),he=f.b.div.withConfig({displayName:"layout__LeftPane",componentId:"sc-1t3oqgw-5"})(["overflow:auto;overflow-x:hidden;border-right:1px solid #ddd;background:#FAFAFA;@media screen and (max-width:600px){overflow:inherit;}"]),ue="2820269620"}}]);
//# sourceMappingURL=component---src-templates-layout-js-querybuilder.js.map