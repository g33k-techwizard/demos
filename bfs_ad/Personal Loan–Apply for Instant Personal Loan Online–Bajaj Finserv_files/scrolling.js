var JSON,Page;JSON||(JSON={}),function(){"use strict";function i(n){return n<10?"0"+n:n}function o(n){return e.lastIndex=0,e.test(n)?'"'+n.replace(e,function(n){var t=s[n];return typeof t=="string"?t:"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+n+'"'}function u(i,f){var s,l,h,a,v=n,c,e=f[i];e&&typeof e=="object"&&typeof e.toJSON=="function"&&(e=e.toJSON(i));typeof t=="function"&&(e=t.call(f,i,e));switch(typeof e){case"string":return o(e);case"number":return isFinite(e)?String(e):"null";case"boolean":case"null":return String(e);case"object":if(!e)return"null";if(n+=r,c=[],Object.prototype.toString.apply(e)==="[object Array]"){for(a=e.length,s=0;s<a;s+=1)c[s]=u(s,e)||"null";return h=c.length===0?"[]":n?"[\n"+n+c.join(",\n"+n)+"\n"+v+"]":"["+c.join(",")+"]",n=v,h}if(t&&typeof t=="object")for(a=t.length,s=0;s<a;s+=1)typeof t[s]=="string"&&(l=t[s],h=u(l,e),h&&c.push(o(l)+(n?": ":":")+h));else for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&(h=u(l,e),h&&c.push(o(l)+(n?": ":":")+h));return h=c.length===0?"{}":n?"{\n"+n+c.join(",\n"+n)+"\n"+v+"}":"{"+c.join(",")+"}",n=v,h}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+i(this.getUTCMonth()+1)+"-"+i(this.getUTCDate())+"T"+i(this.getUTCHours())+":"+i(this.getUTCMinutes())+":"+i(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var f=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,n,r,s={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},t;typeof JSON.stringify!="function"&&(JSON.stringify=function(i,f,e){var o;if(n="",r="",typeof e=="number")for(o=0;o<e;o+=1)r+=" ";else typeof e=="string"&&(r=e);if(t=f,f&&typeof f!="function"&&(typeof f!="object"||typeof f.length!="number"))throw new Error("JSON.stringify");return u("",{"":i})});typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(n,t){var r,u,i=n[t];if(i&&typeof i=="object")for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(u=walk(i,r),u!==undefined?i[r]=u:delete i[r]);return reviver.call(n,t,i)}var j;if(text=String(text),f.lastIndex=0,f.test(text)&&(text=text.replace(f,function(n){return"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse");})}();Page={loadCall:null,isWebcat:!1,hasFade:!0,load:function(){var n,t,i,r,f=document,u=24;n=navigator.userAgent;Page.browser=document.all?"IE":n.search("Firefox")>-1?"FireFox":n.search("Opera")>-1?"Opera":n.search("Chrome")>-1?"Chrome":n.search("iPad")>-1?"iPad":n.search("iPhone")>-1?"iPhone":n.search("Safari")>-1?"Safari":"?";n.search("Windows")>-1?Page.op="win":n.search("Macintosh")>-1&&(Page.op="mac");switch(Page.browser){case"IE":if(r=n.search("MSIE"),r==-1)break;t=n.substring(r+4,n.indexOf(";",r));t=Math.floor(parseFloat(t));t==6&&(Page.IE6=!0);t<9&&(Page.IE7_8=!0);t>8&&(Page.IE9=!0);t<8&&(Page.IE6_7=!0);document.documentElement.ie8_attributes&&(typeof document.documentElement.ie8_attributes.ie8_length=="number"&&(Page.isIE8=!0),typeof document.documentElement.ie8_attributes.ie9_length=="number"&&(Page.isIE9=!0));typeof document.documentMode=="number"&&(Page.isIE8_9=!0);break;case"iPad":case"iPhone":Page.hasFade=!1}i=document.getElementsByTagName("HTML")[0];i.className=Page.browser;Page.IE9&&(i.className+=" IE9");Page.IE7_8&&(i.className+=" IE7_8");Page.IE6&&(i.className+=" IE6");typeof Graphics._fps=="number"?Graphics.fps(Graphics._fps>0?Graphics._fps:u):Graphics.fps(u);typeof Page.loadCall=="function"&&Page.loadCall();Graphics._frame()},http:function(){var n=null;try{n=new XMLHttpRequest}catch(t){try{n=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){n=new ActiveXObject("Microsoft.XMLHTTP")}}return n},getData:function(n,t,i,r,u,f,e,o){var s,h;if(typeof Page.file!="string"&&typeof n!="string"){alert("ERROR! - No file has been set!");return}if(typeof i!="function"){alert("ERROR! - The [call] is not set properly");return}if(s=new Page.http,s==null){typeof Page.httpErrorCall=="function"&&Page.httpErrorCall();return}typeof f!="number"&&(f=0);typeof r!="boolean"&&(r=!1);typeof t!="string"&&(t=null);typeof u!="string"&&(u=null);typeof e!="function"&&(e=null);typeof o!="boolean"&&(o=!1);typeof Page.file=="string"&&typeof n!="string"&&(n=Page.file);h=n;o?typeof t=="string"&&t.length&&(h+="?"+t):(h+="?sid="+Math.random(),typeof t=="string"&&t.length&&(h+="&"+t));s.open(r?"POST":"GET",h,!0);r&&s.setRequestHeader("Content-type","application/x-www-form-urlencoded");s.onreadystatechange=function(){if(s.readyState==4||s.readyState=="complete"){if(s.status==200){typeof u=="string"?(document.getElementById(u).innerHTML=s.responseText,i(u)):i(s.responseText);return}if(f++,f<Page.errorRetryAmmount){Page.getData(n,t,i,r,u,f,e,o);return}if(typeof e=="function"){e(s,f);return}typeof Page.httsStatusErrorCall=="function"?(f++,Page.httsStatusErrorCall(s,f)):(alert("HTTP Status Returned: "+s.status),alert(s.responseText));return}};s.send(r?t:null)},errorRetryAmmount:2,Head:null,JSON:{count:0},getJSON:function(n,t,i){if(typeof i=="function"){Page.Head==null&&(Page.Head=document.getElementsByTagName("head")[0]);Page.JSON.count++;var u=document.createElement("script"),r=Page.JSON.count+0;Page.JSON["call_"+r]=function(n){Page.JSON["data_"+r]=n};Page.JSON["obj_"+r]=u;n+=t.length>0?t.substr(0,1)=="?"?t+"Page.JSON.call_"+r:"?"+t+"&callback=Page.JSON.call_"+r:"?callback=Page.JSON.call_"+r;u.type="text/javascript";u.src=n;u.charset="UTF-8";Page.IE7_8?u.onreadystatechange=function(){(this.readyState=="loaded"||this.readyState=="complete")&&(i(Page.JSON["data_"+r]),u.onreadystatechange=null,delete Page.JSON["call_"+r],delete Page.JSON["data_"+r],Page.Head.removeChild(u))}:u.onload=function(){i(Page.JSON["data_"+r]);u.onload=null;delete Page.JSON["call_"+r];delete Page.JSON["data_"+r];Page.Head.removeChild(u)};Page.Head.appendChild(u)}},getWindowDimentions:function(){var n={};return n.width=0,n.height=0,typeof window.innerWidth=="number"?(n.width=window.innerWidth,n.height=window.innerHeight):document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(n.width=document.documentElement.clientWidth,n.height=document.documentElement.clientHeight):document.body&&(document.body.clientWidth||document.body.clientHeight)&&(n.width=document.body.clientWidth,n.height=document.body.clientHeight),n},httpErrorCall:null,httsStatusErrorCall:null,browser:null,op:"",IE6:!1,IE7_8:!1,IE9:!1,IE6_7:!1,isIE8_9:!1};Page.DomainData={iframe:null,dataRetriverUrl:null,id:null,hasLoaded:!1,getData:function(n,t,i){if(!document.all||typeof Page.DomainData.dataRetriverUrl!="string"){Page.getData(n,t,i);return}if(Page.DomainData.iframe!=null){Page.DomainData.hasLoaded?window[Page.DomainData.id].getData(n,t,i):setTimeout(function(){Page.DomainData.getData(n,t,i)},100);return}Page.DomainData.id="PageDataRetriverIframe_"+Math.round(Math.random()*1e4);Page.DomainData.iframe=document.createElement("iframe");Page.DomainData.iframe.id=Page.DomainData.id;Page.DomainData.iframe.name=Page.DomainData.id;Page.DomainData.iframe.style.height="0px";Page.DomainData.iframe.style.width="0px";Page.DomainData.iframe.style.border="0px";typeof Page.DomainData.iframe.onload=="object"?Page.DomainData.iframe.onload=function(){Page.DomainData.hasLoaded=!0;window[Page.DomainData.id].getData(n,t,i)}:Page.DomainData.iframe.onreadystatechange=function(){(this.readyState=="loaded"||this.readyState=="complete")&&(Page.DomainData.hasLoaded=!0,window[Page.DomainData.id].getData(n,t,i))};Page.DomainData.iframe.src=Page.DomainData.dataRetriverUrl;document.body.appendChild(Page.DomainData.iframe)}};Page.httsStatusErrorCall=function(){};var Sys={Format:{Number:{decimalPlaces:2,thousandPlaces:1,optionalDecimalPlaces:0,Separator:{thousand:",",decimal:"."},negativeFormat:"([nr])",setFormat:function(){return},_getFormatedDecimals:function(n,t){var i="",f,r,u;if(u=n>0?Math.log(n)/Math.log(10):0,u=Math.floor(u),n*=Math.pow(10,t),Sys.Format.Number.optionalDecimalPlaces)for(f=Sys.Format.Number.optionalDecimalPlaces;f;)Math.floor(n)<n&&(n*=10),f--;if(n=Math.round(n),!n&&t){for(r=0;r<t;r++)i+="0";i=Sys.Format.Number.Separator.decimal+i}else if(n&&t){for(i=n,u*=-1,r=1;r<u;r++)i="0"+i;i=Sys.Format.Number.Separator.decimal+i}return i}},date:"dd/MM/yyyy",Set:{number:function(n,t){if(typeof n!="number")return n;t=typeof t=="number"?Math.floor(t):Sys.Format.Number.decimalPlaces+Sys.Format.Number.optionalDecimalPlaces;var f,i="",u,e,r,o;if(u=Math.pow(10,t),n=Math.round(n*u,t)/u,n<0&&(n*=-1,o=!0),f=n-Math.floor(n),n=n-f,t>0?i+=Sys.Format.Number._getFormatedDecimals(f,t):f&&(n=Math.round(n)),r=0,n)for(n=String(n),e=n.length-1;e>-1;e--)r%3==0&&r&&(i=Sys.Format.Number.Separator.thousand+i),i=n.charAt(e)+i,r++;if(Sys.Format.Number.thousandPlaces>r&&Sys.Format.Number.thousandPlaces)for(u=Sys.Format.Number.thousandPlaces-r;u;)r%3==0&&r&&(i=Sys.Format.Number.Separator.thousand+i),i="0"+i,r++,u--;return o?Sys.Format.Number.negativeFormat.replace("[nr]",i):i},date:function(n,t){var r,i,u;if(typeof n!="object")return"";typeof n.day!="number"&&(r={},r.day=n.getDate(),r.month=n.getMonth()+1,r.year=n.getFullYear(),r.minutes=n.getMinutes(),r.hours=n.getHours(),n=r);i=typeof t=="string"?t:Sys.Format.date;try{i=i.replace("dd",(n.day<10?"0":"")+n.day);i=i.replace("d",n.day);i=i.replace("MM",(n.month<10?"0":"")+n.month);i=i.replace("M",n.month);i=i.replace("mm",(n.minutes<10?"0":"")+n.minutes);i=i.replace("m",n.minutes);i=i.replace("HH",(n.hours<10?"0":"")+n.hours);i=i.replace("H",n.hours);i=i.replace("yyyy",n.year);u=String(n.year);i=i.replace("yy",u.substring(u.length-2))}catch(f){i=""}return i}}},Key:{ESC:27,ARROW_RIGHT:39,ARROW_LEFT:37,ARROW_TOP:38,ARROW_BOTTOM:40,ENTER:13,NUM_MINUS:109,NUM_PLUS:107,KeyUp:{check:function(n){var r,i,t,n;for(n||(n=window.event),n.keyCode?r=n.keyCode:n.which&&(r=n.which),i=0;i<Sys.Key.KeyUp._events.length;i++)t=Sys.Key.KeyUp._events[i],t.active&&t.key==r&&typeof t.call=="function"&&t.call(t.arguments);return},_events:[],_eventIndex:[],addEvent:function(n,t,i,r,u){return n==undefined?!1:(t==undefined&&(t=null),t==undefined&&(i=null),r==undefined&&(r=null),u==undefined&&(u=!1),Sys.Key.KeyUp._eventIndex[n]=Sys.Key.KeyUp._events.length,Sys.Key.KeyUp._events.push({name:n,active:u,key:t,call:i,arguments:r}),document.onkeyup=Sys.Key.KeyUp.check,!0)},getEvent:function(n){var t=Sys.Key.KeyUp._eventIndex[n];return t==undefined?null:Sys.Key.KeyUp._events[t]}},KeyDown:{check:function(n){var r,i,t,n;for(n||(n=window.event),n.keyCode?r=n.keyCode:n.which&&(r=n.which),i=0;i<Sys.Key.KeyDown._events.length;i++)t=Sys.Key.KeyDown._events[i],t.active&&t.key==r&&typeof t.call=="function"&&t.call(t.arguments);return},_events:[],_eventIndex:[],addEvent:function(n,t,i,r,u){return n==undefined?!1:(t==undefined&&(t=null),t==undefined&&(i=null),r==undefined&&(r=null),u==undefined&&(u=!1),Sys.Key.KeyDown._eventIndex[n]=Sys.Key.KeyDown._events.length,Sys.Key.KeyDown._events.push({name:n,active:u,key:t,call:i,arguments:r}),document.onkeydown=Sys.Key.KeyDown.check,!0)},getEvent:function(n){var t=Sys.Key.KeyDown._eventIndex[n];return t==undefined?null:Sys.Key.KeyDown._events[t]}}},Mouse:{x:0,y:0,move:function(n){var n,t;if(n||(n=window.event),n.touches){if(n.touches.length>1)return;t=n.touches[0];typeof t=="object"&&(Sys.Mouse.x=t.pageX,Sys.Mouse.y=t.pageY)}else n.pageX||n.pageY?(Sys.Mouse.x=n.pageX,Sys.Mouse.y=n.pageY):(n.clientX||n.clientY)&&(Sys.Mouse.x=n.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,Sys.Mouse.y=n.clientY+document.body.scrollTop+document.documentElement.scrollTop);Sys.Mouse.checkPos()},_events:[],_eventIndex:[],checkPos:function(){for(var e,t,i,r,u,f,o=Sys.Mouse._events.length,n;o--;)if(n=Sys.Mouse._events[o],n.active){if(t=n.x1,i=n.x2,r=n.y1,u=n.y2,t==null||i==null||r==null||u==null){typeof n.call=="function"&&n.call(n.arguments);continue}if(typeof t=="object"||typeof i=="object"||typeof r=="object"||typeof u=="object")if(i.length==t.length&&r.length==t.length&&u.length==t.length)for(f=t.length,e=!1;f--&&!e;)e=Sys.Mouse.x>=t[f]&&Sys.Mouse.x<=i[f]&&Sys.Mouse.y>=r[f]&&Sys.Mouse.y<=u[f];else continue;else e=Sys.Mouse.x>=t&&Sys.Mouse.x<=i&&Sys.Mouse.y>=r&&Sys.Mouse.y<=u;e?typeof n.call=="function"&&n.call(n.arguments):typeof n.oppCall=="function"&&n.oppCall(n.arguments)}},addEvent:function(n,t,i,r,u,f,e,o,s){var h;Sys.Mouse._events.push({name:n==undefined?"":n,active:e==undefined?!1:e,arguments:o==undefined?null:o,call:t==undefined?null:t,oppCall:s==undefined?null:s,x1:i==undefined&&i!=null?0:i,x2:u==undefined&&u!=null?0:u,y1:r==undefined&&r!=null?0:r,y2:f==undefined&&f!=null?0:f});h=Sys.Mouse._events.length-1;Sys.Mouse._eventIndex[Sys.Mouse._events[h].name]=h;Sys.Mouse.activatePositionChecker();return},activatePositionChecker:function(){switch(Page.browser){case"iPad":case"iPhone":document.ontouchmove=Sys.Mouse.move;document.ontouchstart=Sys.Mouse.move;break;default:document.onmousemove=Sys.Mouse.move}},getEvent:function(n){var t=Sys.Mouse._eventIndex[n];return t==undefined?null:Sys.Mouse._events[t]},closeEvent:function(n){Sys.Mouse._events[Sys.Mouse._eventIndex[n]].active=!1;return},openEvent:function(n){Sys.Mouse._events[Sys.Mouse._eventIndex[n]].active=!0;return},updateEventXY:function(n,t,i){var r=Sys.Mouse.getEvent(n),u;if(typeof r.x1=="object")for(u=r.x1.length,offsetX=t,offsetY=i;u--;)r.x1[u]+=offsetX,r.x2[u]+=offsetX,r.y1[u]+=offsetY,r.y2[u]+=offsetY;else offsetX=t-r.x1,offsetY=i-r.y1,r.x1+=offsetX,r.x2+=offsetX,r.y1+=offsetY,r.y2+=offsetY},removeEvent:function(n){var i=Sys.Mouse._events,t=Sys.Mouse._eventIndex[n];for(Sys.Mouse._events.splice(t,1);t<i.length;t++)i[t]--},MouseUp:{_events:[],addEvent:function(n,t,i){Sys.Mouse.MouseUp._events.push({name:n,call:t,arguments:i});document.onmouseup=Sys.Mouse.MouseUp.call;document.ontouchend=Sys.Mouse.MouseUp.call},call:function(){for(var t=Sys.Mouse.MouseUp._events.length,n;t--;)n=Sys.Mouse.MouseUp._events[t],typeof n.call=="function",n.call(n.arguments)}}}},Graphics={_fps:null,_msf:null,frameCall:null,_frame:function(){typeof Graphics.frameCall=="function"&&Graphics.frameCall();var n=Page.HintText;typeof n=="object"&&n!=null&&Page.HintText.frameCall();setTimeout(Graphics._frame,Graphics._msf)},fps:function(n){Graphics._fps=n;Graphics._msf=Math.round(1e3/Graphics._fps)},Obj:{xy:function(n){var t={},i;if(t.x=0,t.y=0,t.scrollLeft=0,t.scrollTop=0,n.offsetParent)do t.x+=parseInt(n.offsetLeft),t.y+=parseInt(n.offsetTop),t.scrollLeft+=parseInt(n.scrollLeft),t.scrollTop+=parseInt(n.scrollTop);while(n=n.offsetParent);return t.x-=t.scrollLeft,t.y-=t.scrollTop,i=parseInt(document.body.scrollLeft),t.x+=i,t.scrollLeft-=i,i=parseInt(document.body.scrollTop),t.y+=i,t.scrollTop-=i,t},xyID:function(n){var t=document.getElementById(n);return Graphics.Obj.xy(t)},pos:function(n){var t=Graphics.Obj.xy(n);return t.width=parseFloat(n.offsetWidth),t.height=parseFloat(n.offsetHeight),t},posID:function(n){var t=document.getElementById(n);return Graphics.Obj.pos(t)},widthHeight:function(n){var t={};return t.width=parseFloat(n.offsetWidth),t.height=parseFloat(n.offsetHeight),t},widthHeightID:function(n){var t=document.getElementById(n);return Graphics.Obj.widthHeight(t)}},Canvas:{drawScaledImage:function(n,t,i,r){var o=.75;switch(Page.browser){case"iPad":case"iPhone":o=0}if(n>=o&&t>=o){r.save();r.scale(n,t);r.drawImage(i,0,0);r.restore();return}var s=document.createElement("canvas"),h=document.createElement("canvas"),c=s.getContext("2d"),a=h.getContext("2d"),l=Math.floor(i.width*n),v=Math.floor(i.height*t),y=0,u,f,p,e;s.width=i.width;s.height=i.height;c.drawImage(i,0,0);do y++,y%2?(u=s,p=c,f=h,e=a):(u=h,p=a,f=s,e=c),n=u.width*o,n<l&&(n=l),n=n/u.width,f.width=Math.floor(u.width*n),t=u.width*o,t<v&&(t=v),t=t/u.height,f.height=Math.floor(u.height*t),e.save(),e.scale(n,t),e.drawImage(u,0,0),e.restore();while(f.width>l);r.drawImage(f,0,0)}}},ScrollingTickerInstrumentsSetArr=[],ScrollingTickerInstrumentObject=function(n,t,i,r){function f(n,t){s.push({originalClass:n,dom:t})}function c(){typeof u.errorLogUri=="string";u.timer=setTimeout(function(){u.updateValues()},u.updateIntervall*1e3)}function l(){location.reload()}this.dom=null;this.Values=[];this.updateIntervall=60;this.timer=null;this.getDataCall=null;this.previousWidth=0;this.Settings=n;this.hasInitialInstrument=!1;var o=[],e,u=this,s=[],h=!1;this.changeIndicator=0;this.changePerIndicator=0;this.addValue=function(n,t,i,r,u){var f={name:null,isChange:!1,value:document.createTextNode(" "),dom:document.createElement("span"),format:i,originalClass:r,strValue:""};f.name=n;switch(n){case"change":f.isChange=!0;break;case"changePer":f.isChange=!0}if(this.Values.push(f),t==null){f.value=null;return}f.dom.className=f.name;typeof u=="string"&&u.length>0&&(f.dom.className+=" "+u);f.dom.appendChild(f.value);t.appendChild(f.dom)};this.addItems=function(n,r){for(var e,s,h,l=!1,a=!1,v,y,c=0;c<n.length;c++){e=n[c];e.tag=e.tag.toLowerCase();switch(e.tag){case"instrument":if(e.Settings==null)break;h=new ScrollingTickerInstrumentObject(e.Settings,t,i,!0);o.push(h);e.className.length>0&&(e.className=h.dom.className+" "+e.className,h.dom.className=e.className);e.className.indexOf("[changePer]")>-1?(a=!0,f(e.className,h.dom)):e.className.indexOf("[change]")>-1&&(l=!0,f(e.className,h.dom));r.appendChild(h.dom);break;case"graph":u.allowsGraph&&(e.instrumentID=u.Settings.instrumentID,e.isArabic=u.Settings.isArabic,v=new GraphObject(e),s=v.dom,e.className.length>0&&(s.className=e.className),e.className.indexOf("[changePer]")>-1?(a=!0,f(e.className,s)):e.className.indexOf("[change]")>-1&&(l=!0,f(e.className,s)),r.appendChild(s));break;case"br":case"div":case"table":case"tr":case"td":if(!this.allowsBreaks){e.className.indexOf("[changePer]")>-1?(a=!0,f(e.className,s)):e.className.indexOf("[change]")>-1&&(l=!0,f(e.className,s));break}case"b":case"i":case"span":case"a":s=document.createElement(e.tag);e.className.length>0&&(s.className=e.className);this.allowsBreaks||(s.style.whiteSpace="nowrap");r.appendChild(s);switch(e.tag){case"table":h=document.createElement("tbody");s.appendChild(h);s=h;break;case"a":s.href=e.href.length?e.href:"#";s.target=e.target}e.Children!=null&&e.Children.length>0&&this.addItems(e.Children,s);e.className.indexOf("[changePer]")>-1?(a=!0,f(e.className,s)):e.className.indexOf("[change]")>-1&&(l=!0,f(e.className,s));break;case"text":s=document.createTextNode(this.Settings.isArabic?this.arabic_nr(e.value):e.value);r.appendChild(s);e.hasSpace&&r.appendChild(document.createTextNode(" "));break;case"img":s=new Image;y=e.src.substring(0,2);switch(y){case"~/":case"~\\":e.src=e.src.substr(2);e.src=this.appBaseLocation+e.src}s.src=e.src;s.className=e.className;e.width>-1&&(s.width=e.width);e.height>-1&&(s.height=e.height);e.className.indexOf("[changePer]")>-1?(a=!0,f(e.className,s)):e.className.indexOf("[change]")>-1&&(l=!0,f(e.className,s));r.appendChild(s);break;case"value":e.className.indexOf("[changePer]")>-1||e.className.indexOf("[change]")>-1?this.addValue(e.value,r,e.format,e.className):this.addValue(e.value,r,e.format,null,e.className);e.hasSpace&&r.appendChild(document.createTextNode(" "))}}for(c=this.Values.length;c--;)h=this.Values[c],h.name=="change"&&(l=!1),h.name=="changePer"&&(a=!1);l&&this.addValue("change",null);a&&this.addValue("changePer",null)};this.updateValues=function(){var n=this,t;if(!this.hasInitialInstrument){if(this.Values.length==0){n.timer=setTimeout(function(){n.updateValues()},n.updateIntervall*1e3);return}t="instrumentID="+this.Settings.instrumentID+"&lang="+this.lang+"&decimalMarket="+this.decimalMarket+"&thousandGroupMarker="+this.thousandGroupMarker+"&timeZone="+this.Settings.timeZone+"&defaultNumberFormat="+encodeURIComponent(this.numberFormat)+"&companycode="+this.companyCode+"&getCleanData="+h;this.version.length&&(t+="&v="+this.version);this.getDataCall(this.dataURI,t,function(i){n.loadUpdatedValues(i,t)},t.length>1500,null,null,function(){n.timer=setTimeout(function(){n.updateValues()},n.updateIntervall*1e3)})}};this.updateChangeClassNames=function(){var t=u.Values.length,n,i,r,f,e;for(f=u.changeIndicator>0?"positive":u.changeIndicator<0?"negative":"neutral",e=u.changePerIndicator>0?"positive":u.changePerIndicator<0?"negative":"neutral",i=/\[change\]/g,r=/\[changePer\]/g;t--;)(n=u.Values[t],typeof n.originalClass=="string"&&n.dom!=null)&&(n.dom.className=n.originalClass.replace(i,f).replace(r,e));for(t=s.length;t--;)n=s[t],n.dom.className=n.originalClass.replace(i,f).replace(r,e)};this.loadUpdatedValues=function(n,t){var o,f,e,s,i,r;try{n=JSON.parse(n)}catch(h){c("ScrollingTickerInstrumentObject","JSON Phraser Error - PARMS:"+encodeURIComponent(t)+" DATA: "+encodeURIComponent(n));return}if(this.previousWidth=parseFloat(this.dom.offsetWidth),typeof n.error=="string"){n.error.length>0&&c("ScrollingTickerInstrumentObject","Controlled Error - PARMS:"+encodeURIComponent(t)+" ERROR Message: "+n.error);return}for(f=0;f<this.Values.length;f++){for(i=this.Values[f],(!i.isChange||i.isChange&&i.value!=null)&&i.dom.removeChild(i.value),i.strValue="",o=n.Values.length;o--;)if(r=n.Values[o],r.name==i.name){if(r.name=="timeZone"){i.strValue=r.isSummerTime?this.Settings.summerTimeMarker:this.Settings.winterTimeMarker;break}else if(r.changeIndicator){switch(r.name){case"change":u.changeIndicator=r.changeIndicator;break;case"changePer":u.changePerIndicator=r.changeIndicator}if(i.isChange&&i.value==null)break;i.dom.className=i.name;i.dom.className+=r.changeIndicator>0?" positive positive_"+i.name:r.changeIndicator<0?" negative negative_"+i.name:" neutral neutral_"+i.name}for(e=0;e<r.Formats.length;e++)if(s=r.Formats[e],s.format==i.format){i.strValue=s.value;break}break}this.Settings.isArabic&&(i.strValue=this.arabic_nr(i.strValue));i.value=document.createTextNode(i.strValue);(!i.isChange||i.isChange&&i.value!=null)&&i.dom.appendChild(i.value)}u.updateChangeClassNames();typeof this.loadedCall=="function"&&this.loadedCall(u);this.timer=setTimeout(function(){u.updateValues()},this.updateIntervall*1e3)};this.arabic_nr=function(n){var r,t,i;for(n=""+n,r="",t=null,i=0;i<=n.length;i++){t=n.charAt(i);switch(t){case"1":t="١";break;case"2":t="٢";break;case"3":t="٣";break;case"4":t="٤";break;case"5":t="٥";break;case"6":t="٦";break;case"7":t="٧";break;case"8":t="٨";break;case"9":t="٩";break;case"0":t="٠"}r+=t}return r};this.load=function(){this.hasInitialInstrument||this.updateValues();for(var n=o.length;n--;)o[n].load()};this.sysLoad=function(){var f,s,o,n;if(this.Settings==null||typeof this.Settings.instrumentID!="number"&&this.Settings.instrumentID<1){this.dom=document.createElement("span");return}for(typeof this.lang!="string"&&(this.lang="en-GB"),typeof this.decimalMarket!="string"&&(this.decimalMarket="."),typeof this.thousandGroupMarker!="string"&&(this.thousandGroupMarker=","),typeof this.numberFormat!="string"&&(this.numberFormat="#,##0.00"),typeof this.timeZoneOffset!="number"&&(this.timeZoneOffset=0),typeof this.dataURI!="string"&&(this.dataURI="GetOrderedData"),typeof this.isAzure!="boolean"&&(this.isAzure=!1),this.getDataCall=this.isAzure&&document.all?Page.DomainData.getData:Page.getData,typeof this.allowsBreaks!="boolean"&&(this.allowsBreaks=!1),typeof this.isDomSpan!="boolean"&&(this.isDomSpan=!0),typeof isArabic=="boolean"&&(this.isArabic=isArabic),typeof u.allowsGraph!="boolean"&&(u.allowsGraph=!1),s=new Date,u.Settings.activationDateTimestamp&&u.Settings.activationInstrumentID&&(f=u.Settings.activationDateTimestamp*1e3-s.getTime(),f>0?setTimeout(function(){l()},f):u.Settings.instrumentID!=u.Settings.activationInstrumentID&&(u.Settings.instrumentID=u.Settings.activationInstrumentID,h=!0)),typeof i!="number"&&(i=0),e=ScrollingTickerInstrumentsSetArr["set_"+i],(typeof e!="object"||e==null||typeof e.length!="number")&&(e=[],ScrollingTickerInstrumentsSetArr["set_"+i]=e),this.dom=r&&this.Settings.containerTag.length>0?document.createElement(this.Settings.containerTag):document.createElement(this.isDomSpan?"span":"div"),this.lang=encodeURIComponent(this.lang),this.decimalMarket=encodeURIComponent(this.decimalMarket),this.thousandGroupMarker=encodeURIComponent(this.thousandGroupMarker),this.dom.className="instrument instrument_"+this.Settings.instrumentID,o=e.length,n=null;o--;){if(n=e[o],n.Settings.instrumentID==this.Settings.instrumentID&&n.Settings.timeZone==this.Settings.timeZone){n.addItems(this.Settings.Layout,this.dom);this.hasInitialInstrument=!0;break}n=null}n==null&&(e.push(this),this.addItems(this.Settings.Layout,this.dom),n=this);t||delete this.Settings.Layout};this.sysLoad()},ScrollingTickerObject=function(){function rt(){n.dom.className="ScrollerMainContainer";c.className="ScrollerContainer";n.dom.appendChild(c);c.appendChild(i);i.style.position="relative";i.style.top="0px";i.style.left="0px";i.style.overflow="hidden"}function ut(){var t=location.href.split("?",2),n,i;if(t.length!=2)return!1;for(t=t[1].split("&"),i=t.length;i--;)if(n=t[i].split("=",2),n[0].toLowerCase()=="data")return n=n[1].toLowerCase(),n=="1"||n=="true";return!1}function k(t,r,u){var f=document.createElement("div"),e;f.style.backgroundColor=n.fadingEdgeBackground;f.style.width="1px";f.style.height=t+"px";f.style.zIndex="110";f.style.position="relative";u?(f.style.cssFloat="right",f.style.styleFloat="right",f.style.left="1px"):(f.style.cssFloat="left",f.style.styleFloat="left",f.style.position="relative",f.style.left="-1px");Page.IE7_8?(e=Math.floor(r*100),e<0?e=0:e>100&&(e=100),f.style.filter="progid:DXImageTransform.Microsoft.Alpha(Opacity="+e+")"):f.style.opacity=r;i.appendChild(f)}function d(r,u){var e={dom:document.createElement("div"),Instruments:[],startPosition:0,endPosition:0,x:0,isActive:!0,width:0,isDataScroller:!1},o,s;for(e.dom.style.margin="0px",e.dom.style.position="absolute",e.dom.style.whiteSpace="nowrap",e.dom.style.top="0px",e.dom.style.left="0px",r&&(e.dom.style.visibility="hidden"),Page.IE6_7?(e.dom.style.zoom=1,e.dom.style.display="inline"):e.dom.style.display="inline-block",o=0;o<n.InstrumentsSettings.length;o++)e.Instruments.push(new ScrollingTickerInstrumentObject(n.InstrumentsSettings[o],!0,t.length)),o&&e.dom.appendChild(document.createTextNode(n.instrumentSeparator)),s=e.Instruments[o],s.index=o,e.dom.appendChild(s.dom),s.loadedCall=function(n){ft(n)};if(i.appendChild(e.dom),t.length)for(o=f.Instruments.length;o--;)tt(e,f.Instruments[o]);else f=e,f.isDataScroller=!0;return i.style.height=parseFloat(e.dom.offsetHeight)+"px",e.width=parseFloat(e.dom.offsetWidth),g(e),e.x=typeof u=="number"?u:e.startPosition,e.dom.style.left=e.x+"px",t.push(e),e}function g(t){n.scrollFromRight?(t.startPosition=r,t.endPosition=0-t.width):(t.startPosition=0-t.width,t.endPosition=r)}function v(){var n=r;i.style.width="auto";r=parseFloat(i.offsetWidth);i.style.width=r+"px";nt(n);y()}function a(n){n.isActive=!1;n.x=n.startPosition;n.dom.style.left=n.x+"px"}function ft(n){var i;if(n)for(i=t.length;i--;)t[i].isDataScroller||tt(t[i],n);nt();y()}function nt(i){for(var u,s,o=[],e=t.length;e--;)u=t[e],u.oldWidth=u.width,u.width=parseFloat(u.dom.offsetWidth),g(u),u.isActive?o.push(u):(u.x=u.startPosition,u.dom.style.left=u.x+"px");if(n.scrollFromRight?o.sort(function(n,t){return n.x-t.x}):o.sort(function(n,t){return t.x-n.x}),o.length)if(s=i?r-i:0,u=o[0],n.scrollFromRight&&u.x>0)for(e=o.length;e--;)u=o[e],u.x+=s,u.dom.style.left=u.x+"px";else if(!n.scrollFromRight)for(s<0&&(s=0),e=o.length;e--;)u=o[e],u.x+=s+(u.oldWidth-u.width),u.dom.style.left=u.x+"px";switch(n.scrollingType){case h:n.spaceBetweenScrollers=r;break;case w:n.spaceBetweenScrollers=r-(t.length?f.width:0);n.spaceBetweenScrollers<10&&(n.spaceBetweenScrollers=10)}}function tt(n,t){var u,r,f,i;for(r=n.Instruments[t.index],r.changeIndicator=t.changeIndicator,r.changePerIndicator=t.changePerIndicator,u=t.Values.length;u--;)(f=t.Values[u],i=r.Values[u],i.dom.className=f.dom.className,typeof f.originalClass!="string")&&(i.dom.removeChild(i.value),i.strValue=f.strValue,i.value=document.createTextNode(i.strValue),i.dom.appendChild(i.value));r.updateChangeClassNames()}function y(){if(t.length){for(var i,s,c,e,l,h=!1,u=null,f=[],o=[],r=t.length;r--;)i=t[r],i.isActive?f.push(i):o.push(i);for(n.scrollFromRight?f.sort(function(n,t){return n.x-t.x}):f.sort(function(n,t){return t.x-n.x}),r=0;r<f.length;r++){if(i=f[r],s=i.x+i.width,r)if(n.scrollFromRight){if(e=i.x-s,n.spaceBetweenScrollers!=e&&(i.x=c+n.spaceBetweenScrollers,i.dom.style.left=i.x+"px",s=i.x+i.width),i.x>=i.startPosition){for(;r<f.length;r++)a(f[r]);return}}else if(e=s-i.x,n.spaceBetweenScrollers!=e&&(i.x=u.x-n.spaceBetweenScrollers-i.width,i.dom.style.left=i.x+"px",s=i.x+i.width),i.x<=i.startPosition){for(;r<f.length;r++)a(f[r]);return}c=s;u=i;(i.startPosition>=i.endPosition&&(i.x<i.endPosition||i.x>i.startPosition)||i.startPosition<i.endPosition&&(i.x>i.endPosition||i.x<i.startPosition))&&(o.push(i),h=!0)}if(u!=null){if(e=Math.abs(u.x-u.startPosition)-u.width,e>=n.spaceBetweenScrollers)for(l=Math.ceil(e/(u.width+n.spaceBetweenScrollers));l--;)i=o.length?o.splice(0,1)[0]:d(),n.scrollFromRight?(i.x=u.x+u.width+n.spaceBetweenScrollers,i.isActive=!0,i.dom.style.left=i.x+"px"):(i.x=u.x-n.spaceBetweenScrollers-i.width,i.isActive=!0,i.dom.style.left=i.x+"px"),u=i,(i.startPosition>=i.endPosition&&(i.x<i.endPosition||i.x>i.startPosition)||i.startPosition<i.endPosition&&(i.x>i.endPosition||i.x<i.startPosition))&&(o.push(i),h=!0);if(h)for(r=o.length;r--;)a(o[r])}}}var p=0,o=1,s=2,h=0,it=1,w=2;this.dom=document.createElement("div");this.InstrumentsSettings=[];this.fadingEdgeBackground="";this.scrollFromRight=!1;this.speed=24;this.scrollingType=h;this.spaceBetweenScrollers=100;this.isVisibleOnInitialLoad=!1;var n=this,c=document.createElement("div"),i=document.createElement("div"),t=[],r=0,e=0,b=!1,u=p,f=null,l=!1;this.load=function(){var s,a,g,p,y;if(c.style.backgroundColor=n.fadingEdgeBackground,(typeof n.speed!="number"||n.speed<1)&&(n.speed=1),e=n.speed/Graphics._fps,n.scrollFromRight&&(e*=-1),v(),s=d(!0),n.isVisibleOnInitialLoad)switch(n.scrollingType){case h:case w:s.x=Math.round(r/2)-Math.round(s.width/2);e>0?s.x+s.width>r&&(s.x=r-s.width):s.x<0&&(s.x=0);s.dom.style.left=s.x+"px";break;case it:s.x=e>0?r-s.width:0;s.dom.style.left=s.x+"px"}for(l=ut(),l&&(s.x=0,n.scrollingType=h,i.style.overflow="visible",s.dom.style.left=s.x+"px"),v(),a=f.Instruments.length;a--;)f.Instruments[a].load();for(a=t.length;a--;)t[a].dom.style.visibility="visible";if(b=!0,u=o,n.dom.onmouseover=function(){onMouseOver()},n.dom.onmouseout=function(){onMouseOff()},n.dom.onclick=function(){onMouseClick()},window.onresize=function(){v()},typeof n.fadingEdgeBackground=="string"&&n.fadingEdgeBackground.length&&!l)for(g=parseFloat(i.offsetHeight),p=1,y=0;y<10;p-=.1,y++)k(g,p,!0,y),k(g,p,!1,y)};onMouseOver=function(){u!=s&&(u=p)};onMouseOff=function(){u!=s&&(u=o)};onMouseClick=function(){u=u==s?o:s};this.frameCall=function(){if(t.length&&b&&u==o&&!l){for(var f=!0,i,s,r=t.length;r--;)(i=t[r],i.isActive)&&(i.x+=e,s=Math.abs(i.x-i.startPosition)-i.width,s<n.spaceBetweenScrollers&&(f=!1),(i.startPosition>=i.endPosition&&(i.x<i.endPosition||i.x>i.startPosition)||i.startPosition<i.endPosition&&(i.x>i.endPosition||i.x<i.startPosition))&&a(i),i.dom.style.left=i.x+"px");f&&y()}};rt()}