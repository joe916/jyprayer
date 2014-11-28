/*!
 * Add to Homescreen v2.0.1 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
var addToHome=(function(n){var i=n.navigator,j="platform" in i&&(/iphone|ipod|ipad/gi).test(i.platform),y,o,A,q,D,e,z=0,v=0,x=0,f,b,E,a,l,k,m,d={autostart:true,
/*! Automatically open the balloon */
returningVisitor:false,
/*! Show the balloon to returning visitors only (setting this to true is HIGHLY RECCOMENDED) */
animationIn:"drop",
/*! drop || bubble || fade */
animationOut:"fade",
/*! drop || bubble || fade */
startDelay:2000,
/*! 2 seconds from page load before the balloon appears */
lifespan:15000,
/*! 15 seconds before it is automatically destroyed */
bottomOffset:14,
/*! Distance of the balloon from bottom */
expire:0,
/*! Minutes to wait before showing the popup again (0 = always displayed) */
message:"",
/*! Customize your message or force a language ('' = automatic) */
touchIcon:false,
/*! Display the touch icon */
arrow:true,
/*! Display the balloon arrow */
hookOnLoad:true,
/*! Should we hook to onload event? (really advanced usage) */
iterations:100
/*! Internal/debug use */
},r={ca_es:"Per instal·lar aquesta aplicació al vostre %device premeu %icon i llavors <strong>Afegir a pantalla d'inici</strong>.",cs_cz:"Pro instalaci aplikace na Váš %device, stiskněte %icon a v nab�dce <strong>Přidat na plochu</strong>.",da_dk:"Tilføj denne side til din %device: tryk på %icon og derefter <strong>Føj til hjemmeskærm</strong>.",de_de:"Installieren Sie diese App auf Ihrem %device: %icon antippen und dann <strong>Zum Home-Bildschirm</strong>.",el_gr:"Εγκαταστήσετε αυτήν την Εφα� μογή στήν συσκευή σας %device: %icon μετά πατάτε <strong>� � οσθήκη σε Αφετη� ία</strong>.",en_us:"Install this web app on your %device: tap %icon and then <strong>Add to Home Screen</strong>.",es_es:"Para instalar esta app en su %device, pulse %icon y seleccione <strong>Añadir a pantalla de inicio</strong>.",fi_fi:"Asenna tämä web-sovellus laitteeseesi %device: paina %icon ja sen jälkeen valitse <strong>Lisää Koti-valikkoon</strong>.",fr_fr:"Ajoutez cette application sur votre %device en cliquant sur %icon, puis <strong>Ajouter �  l'écran d'accueil</strong>.",he_il:'<span dir="rtl">התקן � פליקציה זו על ה-%device שלך: הקש %icon ו� ז <strong>הוסף למסך הבית</strong>.</span>',hu_hu:"Telep�tse ezt a web-alkalmazást az Ön %device-jára: nyomjon a %icon-ra majd a <strong>Főképernyőhöz adás</strong> gombra.",it_it:"Installa questa applicazione sul tuo %device: premi su %icon e poi <strong>Aggiungi a Home</strong>.",ja_jp:"� �� �ウェブアプリを� �� �� �� �%device� �インストール� �る� �� �%iconをタップ� �� �<strong>ホー� 画� �� �追� </strong>を� �ん� ��  �  � �� �。",ko_kr:'%device�  웹앱� � 설치하� �면 %icon� � 터치 후 "홈화면�  추가"를 � � 하세요',nb_no:"Installer denne appen på din %device: trykk på %icon og deretter <strong>Legg til på Hjem-skjerm</strong>",nl_nl:"Installeer deze webapp op uw %device: tik %icon en dan <strong>Zet in beginscherm</strong>.",pl_pl:"Aby zainstalować tę aplikacje na %device: naciśnij %icon a następnie <strong>Dodaj jako ikonę</strong>.",pt_br:"Instale este web app em seu %device: aperte %icon e selecione <strong>Adicionar �  Tela Inicio</strong>.",pt_pt:"Para instalar esta aplicação no seu %device, prima o %icon e depois o <strong>Adicionar ao ecrã principal</strong>.",ru_ru:"У� тановите � то веб-приложение на ваш %device: нажмите %icon, затем <strong>Добавить в «Домой»</strong>.",sv_se:"Lägg till denna webbapplikation på din %device: tryck på %icon och därefter <strong>Lägg till på hemskärmen</strong>.",th_th:"ติดตั้งเว็บ� �พฯ นี้บน %device ข�งคุณ: � ตะ %icon � ละ <strong>เพิ่มที่หน้าจ�โฮม</strong>",tr_tr:"%device için bu uygulamayı kurduktan sonra %icon simgesine dokunarak <strong>Ana Ekrana Ekle</strong>yin.",zh_cn:"您� �以将�应用程� 安装到您的 %device 上。请按 %icon 然� �点选<strong>添� 至主� 幕</strong>。",zh_tw:"您� �以將�應用程� 安� 到您的 %device 上。請按 %icon 然後點� �<strong>� 入主畫� �螢幕</strong>。"};function u(){
/*! Preliminary check, prevents all further checks to be performed on iDevices only */
if(!j){return}var w=Date.now(),F;
/*! Merge local with global options */
if(n.addToHomeConfig){for(F in n.addToHomeConfig){d[F]=n.addToHomeConfig[F]}}if(!d.autostart){d.hookOnLoad=false}y=(/ipad/gi).test(i.platform);o=n.devicePixelRatio&&n.devicePixelRatio>1;A=i.appVersion.match(/Safari/gi);q=i.appVersion.match(/CriOS/gi);D=i.standalone;e=i.appVersion.match(/OS (\d+_\d+)/i);e=e[1]?+e[1].replace("_","."):0;x=+n.localStorage.getItem("addToHome");b=n.sessionStorage.getItem("addToHomeSession");E=d.returningVisitor?x&&x+28*24*60*60*1000>w:true;if(!x){x=w;
/*! If it is expired we need to reissue a new balloon */
}f=E&&x<=w;if(d.hookOnLoad){n.addEventListener("load",t,false)}else{if(!d.hookOnLoad&&d.autostart){t()}}}function t(){n.removeEventListener("load",t,false);if(!E){n.localStorage.setItem("addToHome",Date.now())}else{if(d.expire&&f){n.localStorage.setItem("addToHome",Date.now()+d.expire*60000)}}if(!l&&(!A||!f||b||q||D||!E)){return}var J=d.touchIcon?document.querySelectorAll("head link[rel=apple-touch-icon],head link[rel=apple-touch-icon-precomposed]"):[],K,H="",G,w=i.platform.split(" ")[0],L=i.language.replace("-","_"),I,F;a=document.createElement("div");a.id="addToHomeScreen";a.style.cssText+="left:-9999px;-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0;-webkit-transform:translate3d(0,0,0);position:"+(e<5?"absolute":"fixed");
/*! Localize message */
if(d.message in r){
/*! You may force a language despite the user's locale */
L=d.message;d.message=""}if(d.message===""){
/*! We look for a suitable language (defaulted to en_us) */
d.message=L in r?r[L]:r.en_us;
/*! Search for the apple-touch-icon */
}if(J.length){for(I=0,F=J.length;I<F;I++){K=J[I].getAttribute("sizes");if(K){if(o&&K=="114x114"){H=J[I].href;break}}else{H=J[I].href}}H='<span style="background-image:url('+H+')" class="addToHomeTouchIcon"></span>'}a.className=(y?"addToHomeIpad":"addToHomeIphone")+(H?" addToHomeWide":"");a.innerHTML=H+d.message.replace("%device",w).replace("%icon",e>=4.2?'<span class="addToHomeShare"></span>':'<span class="addToHomePlus">+</span>')+(d.arrow?'<span class="addToHomeArrow"></span>':"")+'<span class="addToHomeClose">\u00D7</span>';document.body.appendChild(a);
/*! Add the close action */
G=a.querySelector(".addToHomeClose");if(G){G.addEventListener("click",g,false)}setTimeout(C,d.startDelay)}function C(){var F,w=160;
/*! Set the initial position */
if(y){if(e<5){v=n.scrollY;z=n.scrollX;w=208}a.style.top=v+d.bottomOffset+"px";a.style.left=z+w-Math.round(a.offsetWidth/2)+"px";switch(d.animationIn){case"drop":F="0.6s";a.style.webkitTransform="translate3d(0,"+-(n.scrollY+d.bottomOffset+a.offsetHeight)+"px,0)";break;case"bubble":F="0.6s";a.style.opacity="0";a.style.webkitTransform="translate3d(0,"+(v+50)+"px,0)";break;default:F="1s";a.style.opacity="0"}}else{v=n.innerHeight+n.scrollY;if(e<5){z=Math.round((n.innerWidth-a.offsetWidth)/2)+n.scrollX;a.style.left=z+"px";a.style.top=v-a.offsetHeight-d.bottomOffset+"px"}else{a.style.left="50%";a.style.marginLeft=-Math.round(a.offsetWidth/2)+"px";a.style.bottom=d.bottomOffset+"px"}switch(d.animationIn){case"drop":F="1s";a.style.webkitTransform="translate3d(0,"+-(v+d.bottomOffset)+"px,0)";break;case"bubble":F="0.6s";a.style.webkitTransform="translate3d(0,"+(a.offsetHeight+d.bottomOffset+50)+"px,0)";break;default:F="1s";a.style.opacity="0"}}a.offsetHeight;
/*! repaint trick */
a.style.webkitTransitionDuration=F;a.style.opacity="1";a.style.webkitTransform="translate3d(0,0,0)";a.addEventListener("webkitTransitionEnd",h,false);m=setTimeout(p,d.lifespan)}function s(w){if(!j||a){return}l=w;t()}function p(){clearInterval(k);clearTimeout(m);m=null;var H=0,I=0,F="1",G="0",w=a.querySelector(".addToHomeClose");if(w){w.removeEventListener("click",p,false)}if(e<5){H=y?n.scrollY-v:n.scrollY+n.innerHeight-v;I=y?n.scrollX-z:n.scrollX+Math.round((n.innerWidth-a.offsetWidth)/2)-z}a.style.webkitTransitionProperty="-webkit-transform,opacity";switch(d.animationOut){case"drop":if(y){G="0.4s";F="0";H=H+50}else{G="0.6s";H=H+a.offsetHeight+d.bottomOffset+50}break;case"bubble":if(y){G="0.8s";H=H-a.offsetHeight-d.bottomOffset-50}else{G="0.4s";F="0";H=H-50}break;default:G="0.8s";F="0"}a.addEventListener("webkitTransitionEnd",h,false);a.style.opacity=F;a.style.webkitTransitionDuration=G;a.style.webkitTransform="translate3d("+I+"px,"+H+"px,0)"}function g(){n.sessionStorage.setItem("addToHomeSession","1");b=true;p()}function h(){a.removeEventListener("webkitTransitionEnd",h,false);a.style.webkitTransitionProperty="-webkit-transform";a.style.webkitTransitionDuration="0.2s";
/*! We reached the end! */
if(!m){a.parentNode.removeChild(a);a=null;return;
/*! On iOS 4 we start checking the element position */
}if(e<5&&m){k=setInterval(c,d.iterations)}}function c(){var w=new WebKitCSSMatrix(n.getComputedStyle(a,null).webkitTransform),F=y?n.scrollY-v:n.scrollY+n.innerHeight-v,G=y?n.scrollX-z:n.scrollX+Math.round((n.innerWidth-a.offsetWidth)/2)-z;
/*! Screen didn't move */
if(F==w.m42&&G==w.m41){return}a.style.webkitTransform="translate3d("+G+"px,"+F+"px,0)"}
/*! Clear local and session storages (this is useful primarily in development) */
function B(){n.localStorage.removeItem("addToHome");n.sessionStorage.removeItem("addToHomeSession")}
/*! Bootstrap! */
u();return{show:s,close:p,reset:B}})(this);