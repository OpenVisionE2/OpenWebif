parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Tkyz":[function(require,module,exports) {
function e(e){return r(e)||n(e)||h(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function r(e){if(Array.isArray(e))return g(e)}function o(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){function i(e){o(u,r,a,i,c,"next",e)}function c(e){o(u,r,a,i,c,"throw",e)}var u=e.apply(t,n);i(void 0)})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return d(e)||m(e,t)||h(e,t)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}function d(e){if(Array.isArray(e))return e}function p(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=h(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,e},f:function e(){try{a||null==n.return||n.return()}finally{if(i)throw e}}}}function h(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}!function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=document.createElement("textarea");return t.innerHTML=e,t.value}function n(e){return Array.isArray(e)?e:[e]}function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"asc";return function(n,r){if(!n.hasOwnProperty(e)||!r.hasOwnProperty(e))return 0;var o="string"==typeof n[e]?n[e].toUpperCase():n[e],a="string"==typeof r[e]?r[e].toUpperCase():r[e],i=0;return o>a?i=1:o<a&&(i=-1),"desc"===t?-1*i:i}}function o(e,t){var n=t.hours,r=void 0===n?0:n,o=t.minutes,a=void 0===o?0:o;try{var i=e.split(":"),c=parseInt(i[0]),u=parseInt(i[1]),s=new Date(0,0,0,c,u);return s.setHours(c+r),s.setMinutes(u+a),s.toLocaleTimeString([],{hour12:!1,hour:"2-digit",minute:"2-digit"})}catch(t){return e}}function c(e){document.querySelectorAll(e).forEach(function(e){e.remove()})}function f(e,t,n,r){var o=t.namedItem(n);if(o)if(owif.utils.debugLog("[".concat(o.type,"]"),o,n,r),o instanceof RadioNodeList){var a,i=r.split(","),c=p(o.entries());try{for(c.s();!(a=c.n()).done;){var u=l(a.value,2),f=u[0],m=u[1];m.value=i[f]||"";try{m.dispatchEvent(new Event("change"))}catch(e){owif.utils.debugLog(n,r,e)}}}catch(e){c.e(e)}finally{c.f()}}else{switch(o.type){case"checkbox":r=!0===r||"True"===r||r.toString()===o.value,o.checked=r;break;case"select-multiple":try{var d=r.map(function(e){return e.sRef});e.autoTimerChoices[n].setChoices(r,"sRef","name",!1).setChoices(r,"label","value",!1).removeActiveItems().setChoiceByValue(r).setChoiceByValue(d)}catch(e){owif.utils.debugLog(n,r,e)}break;default:o.value=r}try{o.dispatchEvent(new Event("change"))}catch(e){owif.utils.debugLog(n,r,e)}}else if(owif.utils.debugLog("%c[N/A]","color: red",n,r),"filters"!==n){var h=document.createElement("input");h.type="hidden",h.name=n,h.value=r,h.dataset.valueType=s(r),t[0].form.prepend(h)}}function m(e,t){try{e.classList.toggle("dependent-section--disabled",t),e.querySelectorAll("input, select").forEach(function(e){e.disabled=t})}catch(e){}}var d=function(){function e(r){i(this,e);var o=this;if(Object.assign(o,r),o.name=t(o.name),o.match=t(o.match),o.tag=[],o.bouquets=[],o.services=[],o.filters={include:[],exclude:[]},o.enabled="yes"===o.enabled?1:0,o.from&&(o.timespanFrom=o.from,delete o.from),o.to&&(o.timespanTo=o.to,delete o.to),o.after){var a=new Date(1e3*parseInt(o.after));o.after=a.toISOString().split("T")[0]}if(o.before){var c=new Date(1e3*parseInt(o.before));o.before=c.toISOString().split("T")[0]}if(o.afterevent){var u=o.afterevent.from,s=o.afterevent.to,l=o.afterevent["_@ttribute"];u&&(o.aftereventFrom=u),s&&(o.aftereventTo=s),l&&(o.afterevent={shutdown:"deepstandby"}[l]||l)}if(o.e2service){var f=!1;n(o.e2service).forEach(function(e){var t=owif.utils.isBouquet(e.e2servicereference)?"bouquets":"services";o[t].push({sRef:e.e2servicereference,name:e.e2servicename,selected:!0}),f=!e.e2servicename}),o.hasMismatchedService=f,delete o.e2service}o.e2tag&&(o.tag=n(o.e2tag),delete o.e2tag),o.e2tags&&(!o.tag&&(o.tag=o.e2tags.split(" ")),delete o.e2tags),o.include&&(o.filters.include=n(o.include),delete o.include),o.exclude&&(o.filters.exclude=n(o.exclude),delete o.exclude),o.vps_safemode=!o.vps_overwrite}return u(e,[{key:"bouquetSRefs",get:function(){return this.bouquets.map(function(e){return e.sRef})}},{key:"bouquetNames",get:function(){return this.bouquets.map(function(e){return e.name})}},{key:"channelSRefs",get:function(){return this.services.map(function(e){return e.sRef})}},{key:"channelNames",get:function(){return this.services.map(function(e){return e.name})}},{key:"isRestrictedByDay",get:function(){return 0<this.filters.include.filter(function(e){return"dayofweek"===e.where}).length+this.filters.exclude.filter(function(e){return"dayofweek"===e.where}).length}}]),e}();(new function(){var t,i=document.querySelector('form[name="atedit"]'),u=document.querySelector('form[name="atsettings"]'),s=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return e._timespan=!!e.timespanFrom||!!e.timespanTo,e._datespan=!!e.after||!!e.before,e._after=!!e.after,e._before=!!e.before,e._timerOffset=!!e.offset,e.timeSpanAE=!!e.afterevent,e._location=!!e.location,e},h=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=e.insertCell();return n.innerHTML=t,n},g=function(e,t){var n=e.insertRow(),r=t.e2state;h(n,r).title="Skip"===r?t.e2message:"",h(n,t.e2autotimername),h(n,t.e2name),h(n,t.e2servicename);var o=t.e2timebegin;h(n,owif.utils.getStrftime(o)).style.textAlign="right";var a=t.e2timeend;h(n,owif.utils.getToTimeText(o,a)).style.textAlign="right"};return{getAll:function(){var e=a(regeneratorRuntime.mark(function e(){var o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,owif.utils.fetchData("/autotimer");case 2:return o=e.sent,a=o.autotimer,owif.utils.debugLog(a),t.allAutoTimers=n(a.timer),t.allAutoTimers.map(function(e){return new d(e)}),t.allAutoTimers.sort(r("name")),e.abrupt("return",t.allAutoTimers);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),populateList:function(){var n=document.getElementById("at__list");c(".at__item"),document.getElementById("at__page--edit").classList.toggle("hidden",!0),window.scroll({top:0,left:0,behavior:"smooth"}),document.getElementById("at__page--list").classList.toggle("hidden",!1);var r=document.getElementById("autotimer-list-item-template"),o=[],a=[];t.getAll().then(function(i){i.forEach(function(e){(e=new d(e)).location&&o.push(e.location),a=a.concat(e.tag);var i=valueLabelMap.autoTimers.searchType[e.searchType]||"",c=r.content.firstElementChild.cloneNode(!0);c.querySelector('[name="preview"]').onclick=function(){return t.preview(e.id)},c.querySelector('[name="rename"]').onclick=function(){return t.renameEntry(e.id,e.name)};var u=c.querySelector('a[href="#/at/edit?id={{id}}"]');u.href=u.href.replace("{{id}}",e.id),u.onclick=function(){t.editEntry(e.id)},c.querySelector('button[name="toggle"]').onclick=function(){return t.toggleEntryEnabled(e.id,e.enabled)},c.querySelector('button[name="delete"]').onclick=function(){return t.deleteEntry(e.id)},c.querySelector('slot[name="autotimer-name"]').innerHTML=e.name,c.querySelector(".icon__state").textContent=e.enabled?"av_timer":"highlight_off",c.querySelector('slot[name="autotimer-searchType"]').innerHTML=i?"".concat(i,":"):"",e.timespanFrom&&(c.querySelector('slot[name="autotimer-timespan"]').innerHTML="~ ".concat(e.timespanFrom||""," - ").concat(e.timespanTo||"")),e.isRestrictedByDay&&(c.querySelector('slot[name="autotimer-filters"]').innerHTML="Certain days"),c.querySelector('slot[name="autotimer-channels"]').innerHTML=e.channelNames.join(", "),e.bouquetNames.length&&(c.querySelector('slot[name="autotimer-bouquets"]').innerHTML="<br> ".concat(e.bouquetNames.join(", "))),c.querySelector('slot[name="autotimer-match"]').innerHTML='"'.concat(e.match,'"'),n.appendChild(c)}),t.allLocations=e(new Set(t.availableLocations.concat(o))).sort()||[],t.allTags=e(new Set(t.availableTags.concat(a))).sort()||[]})},getSettings:function(){var e=a(regeneratorRuntime.mark(function e(){var n,r,o,a,i,c,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="config.plugins.autotimer.",e.next=3,owif.utils.fetchData("/autotimer/get");case 3:for(r=e.sent,o=r.e2settings.e2setting,a=u.elements,o=o.filter(function(e){return e.e2settingname.startsWith(n)}).map(function(e){for(var t=0,r=Object.entries(e);t<r.length;t++){var o=l(r[t],2),a=o[0],i=o[1];e[a.replace("e2setting","")]=i,delete e[a]}return e.name=e.name.replace(n,""),e}),i=0,c=Object.values(o);i<c.length;i++)s=c[i],f(t,a,s.name,s.value);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),saveSettings:function(){var e=a(regeneratorRuntime.mark(function e(){var t,n,r,o,a,i,c,s,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=new FormData(u),n=0,r=Object.entries(u);n<r.length;n++)o=l(r[n],2),o[0],"checkbox"!==(a=o[1]).type||t.has(a.name)||t.set(a.name,"");return e.prev=2,e.next=5,owif.utils.fetchData("/autotimer/set",{method:"post",body:t});case 5:if(i=e.sent,c=i.e2simplexmlresult,s=c.e2state,f=c.e2statetext,f="".concat(f.charAt(0).toUpperCase()).concat(f.slice(1)),!0!==s&&"true"!==s.toString().toLowerCase()){e.next=13;break}e.next=14;break;case 13:throw new Error(f);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),swal({title:tstr_oops,text:e.t0,type:"error",animation:"none"});case 19:case"end":return e.stop()}},e,null,[[2,16]])}));return function(){return e.apply(this,arguments)}}(),process:function(){var e=a(regeneratorRuntime.mark(function e(){var t,n,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,owif.utils.debugLog("`process` started, this could take a while..."),e.next=4,owif.utils.fetchData("/autotimer/parse");case 4:if(t=e.sent,n=t.e2simplexmlresult,r=n.e2state,o=n.e2statetext,o="".concat(o.charAt(0).toUpperCase()).concat(o.slice(1)),!0!==r&&"true"!==r.toString().toLowerCase()){e.next=13;break}swal({title:"result",text:o,type:"info",animation:"none"}),e.next=14;break;case 13:throw new Error(o);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),swal({title:tstr_oops,text:e.t0.message,type:"error",animation:"none"});case 19:case"end":return e.stop()}},e,null,[[0,16]])}));return function(){return e.apply(this,arguments)}}(),previewAll:function(){t.preview()},preview:function(){var e=a(regeneratorRuntime.mark(function e(){var t,n,r,o,a,i,c,u,s,l=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<l.length&&void 0!==l[0]?l[0]:"",n=document.getElementById("at-preview__list"),r=document.getElementById("at-preview__no-results"),o=document.getElementById("at-preview__progress"),n.querySelectorAll("tr").forEach(function(e){return e.remove()}),r.classList.toggle("hidden",!0),o.classList.toggle("hidden",!1),a=t&&"test?id=".concat(t)||"simulate",e.next=10,owif.utils.fetchData("/autotimer/".concat(a));case 10:i=e.sent,c=i.e2autotimersimulate||i.e2autotimertest,u=c.e2simulatedtimer||c.e2testtimer||[],s=document.createElement("tbody"),o.classList.toggle("hidden",!0),u.forEach(function(e){g(s,e)}),u.length?n.innerHTML=s.cloneNode(!0).innerHTML:r.classList.toggle("hidden",!1);case 17:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),prepareChoices:function(){t.allTags=t.allTags.map(function(e){return{value:e,label:e}}),t.autoTimerChoices.tag.setChoices(t.allTags,"value","label",!0),t.autoTimerChoices.bouquets.setChoices(t.availableServices.bouquets,"sRef","name",!0),t.autoTimerChoices.services.setChoices(t.availableServices.channels,"sRef","extendedName",!0)},populateForm:function(){var e=a(regeneratorRuntime.mark(function e(){var n,r,o,a,u,m,h,g,v,y,w,b=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=0<b.length&&void 0!==b[0]?b[0]:{},owif.utils.debugLog(n),r=i.elements,i.reset(),c(".at__filter__line"),document.getElementById("at__page--list").classList.toggle("hidden",!0),window.scroll({top:0,left:0,behavior:"smooth"}),document.getElementById("at__page--edit").classList.toggle("hidden",!1),n=new d(n),n=s(n),t.prepareChoices(),o=p(t.allLocations);try{for(o.s();!(a=o.n()).done;)u=a.value,(m=document.createElement("option")).appendChild(document.createTextNode(u)),m.value=u,document.querySelector('select[name="location"] optgroup[name="more"').appendChild(m),jQuery("select[name=location]").selectpicker("refresh")}catch(t){o.e(t)}finally{o.f()}for(h=0,g=Object.entries(n);h<g.length;h++)v=l(g[h],2),y=v[0],w=v[1],f(t,r,y,w);t.populateFilters(n.filters);case 15:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),deleteEntry:function(){var e=a(regeneratorRuntime.mark(function e(){var n,r=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:-1!==(n=0<r.length&&void 0!==r[0]?r[0]:-1)&&swal({title:tstr_del_autotimer,type:"warning",showCancelButton:!0,confirmButtonColor:"#dd6b55",confirmButtonText:tstrings_yes_delete,cancelButtonText:tstrings_no_cancel,closeOnConfirm:!0,closeOnCancel:!0,animation:"none"},function(){var e=a(regeneratorRuntime.mark(function e(r){var o,a,i,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=12;break}return e.next=3,owif.utils.fetchData("/autotimer/remove?id=".concat(n));case 3:o=e.sent,a=o.e2simplexmlresult,i=a.e2state,c=a.e2statetext,c="".concat(c.charAt(0).toUpperCase()).concat(c.slice(1)),!0===i||"true"===i.toString().toLowerCase()?swal({title:tstrings_deleted,text:c,type:"success",animation:"none"}):swal({title:tstr_oops,text:c,type:"error",animation:"none"}),t.populateList(),e.next=13;break;case 12:swal({title:tstrings_cancelled,type:"error",animation:"none"});case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),toggleEntryEnabled:function(){var e=a(regeneratorRuntime.mark(function e(){var n,r,o,a,i,c,u,s=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=0<s.length&&void 0!==s[0]?s[0]:-1,r=1<s.length?s[1]:void 0,o=1==r?0:1,e.prev=3,e.next=6,owif.utils.fetchData("/autotimer/change?id=".concat(n,"&enabled=").concat(o));case 6:if(a=e.sent,i=a.e2simplexmlresult,c=i.e2state,u=i.e2statetext,u="".concat(u.charAt(0).toUpperCase()).concat(u.slice(1)),!0!==c&&"true"!==c.toString().toLowerCase()){e.next=17;break}swal.close(),t.populateList(),owif.utils.debugLog("toggleEntryEnabled [id ".concat(n,"] from ").concat(r," to ").concat(o," successful")),e.next=18;break;case 17:throw new Error(u);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(3),swal({title:tstr_oops,text:e.t0.message,type:"error",animation:"none"});case 23:case"end":return e.stop()}},e,null,[[3,20]])}));return function(){return e.apply(this,arguments)}}(),createEntry:function(){return t.populateForm()},renameEntry:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1,n=1<arguments.length?arguments[1]:void 0,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",o=function(){var e=a(regeneratorRuntime.mark(function e(r,o){var a,i,c,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,owif.utils.fetchData("/autotimer/change?id=".concat(r,"&name=").concat(o));case 3:if(a=e.sent,i=a.e2simplexmlresult,c=i.e2state,u=i.e2statetext,u="".concat(u.charAt(0).toUpperCase()).concat(u.slice(1)),!0!==c&&"true"!==c.toString().toLowerCase()){e.next=14;break}swal.close(),t.populateList(),owif.utils.debugLog("renameEntry [id ".concat(r,"] from ").concat(n," to ").concat(o," successful")),e.next=15;break;case 14:throw new Error(u);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),swal({title:tstr_oops,text:e.t0.message,type:"error",animation:"none"});case 20:case"end":return e.stop()}},e,null,[[0,17]])}));return function(){return e.apply(this,arguments)}}();r?o(e,r):swal({title:tstr_rename,text:"",type:"input",showCancelButton:!0,closeOnConfirm:!1,inputValue:n,input:"text",animation:"none"},function(t){t&&t.length&&o(e,t)})},editEntry:function(){var e=a(regeneratorRuntime.mark(function e(){var n,r,o=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=0<o.length&&void 0!==o[0]?o[0]:-1,r=t.allAutoTimers.find(function(e){return e.id==n}),owif.utils.debugLog("editEntry: ".concat(r)),t.populateForm(r);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),transformFormData:function(){var e=new FormData(i),t=Object.fromEntries(e),n=["title","shortdescription","description","dayofweek","!title","!shortdescription","!description","!dayofweek"],r=n.concat(["offset","services","bouquets","vps_enabled"]),o=["offset","services","bouquets"];return window.disableFilterEditing&&n.forEach(function(t){return e.delete(t)}),["hasMismatchedService","_before","_after","_type","_filterpredicate","_filterwhere"].forEach(function(t){return e.delete(t)}),Object.entries(t).forEach(function(t){var n=l(t,2),r=n[0],a=n[1];owif.utils.debugLog(r,a),o.includes(r)&&e.set(r,e.getAll(r)),""===a||","===a?e.delete(r):owif.utils.regexDateFormat.test(a)&&e.set(r,owif.utils.toUnixDate(a))}),r.forEach(function(t){e.has(t)||e.set(t,"")}),e},saveEntry:function(){var e=a(regeneratorRuntime.mark(function e(){var n,r,o,a,i,c=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=0<c.length&&void 0!==c[0]?c[0]:"",e.next=3,owif.utils.fetchData("/autotimer/edit?".concat(n),{method:"post",body:t.transformFormData()});case 3:r=e.sent,o=r.e2simplexmlresult,a=o.e2state,i=o.e2statetext,i="".concat(i.charAt(0).toUpperCase()).concat(i.slice(1)),!0===a||"true"===a.toString().toLowerCase()?t.populateList():swal({title:tstr_oops,text:i,type:"error",animation:"none"});case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),cancelEntry:function(){swal({title:tstr_prompt_save_changes,type:"warning",showCancelButton:!0,confirmButtonColor:"#dd6b55",confirmButtonText:tstrings_yes,cancelButtonText:tstrings_no_cancel,closeOnConfirm:!1,closeOnCancel:!0,animation:"none"},function(e){e?t.saveEntry():(window.location.hash="/at",t.populateList())})},populateFilters:function(e){e.exclude.forEach(function(e){e.predicate="!",e.value=e["_@ttribute"],delete e["_@ttribute"],t.addFilter(e)}),e.include.forEach(function(e){e.predicate="",e.value=e["_@ttribute"],delete e["_@ttribute"],t.addFilter(e)})},addFilter:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{predicate:"",where:"title",value:""},n=document.getElementById("autotimer-filter-template").content.firstElementChild.cloneNode(!0),r=document.getElementById("atform__filters-container"),o=n.querySelector('select[name="_filterpredicate"]'),a=n.querySelector('select[name="_filterwhere"]'),i=n.querySelector('input[type="text"]'),c=n.querySelector('select[name="dayofweek"]'),u=function(){"dayofweek"===a.value?(c.name="".concat(o.value).concat(a.value),i.value=""):(i.name="".concat(o.value).concat(a.value),c.value="")};if(n.querySelector('button[name="removeFilter"]').onclick=t.removeFilter,o.onchange=function(){u()},a.onchange=function(e){var t=e.target,n=t.closest("fieldset"),r="dayofweek"===t.value;n.querySelector(".filter-value--dayofweek").classList.toggle("hidden",!r),n.querySelector(".filter-value--text").classList.toggle("hidden",r),u()},o.value=e.predicate,a.value=e.where,"dayofweek"===e.where){selectedOptions=e.value.split(",");var s,l=p(c);try{for(l.s();!(s=l.n()).done;)option=s.value,option.selected=selectedOptions.includes(option.value)}catch(t){l.e(t)}finally{l.f()}a.dispatchEvent(new Event("change"))}else i.value=e.value;u(),r.appendChild(n),jQuery.AdminBSB.select.activate()},removeFilter:function(){event.target.closest("fieldset.at__filter__line").remove()},initEventHandlers:function(){var e=document.createElement("input");(document.querySelector('button[name="reload"]')||e).onclick=t.populateList,(document.querySelector('button[name="process"]')||e).onclick=t.process,(document.querySelector('button[name="previewAll"]')||e).onclick=t.previewAll,(document.querySelector('button[name="timers"]')||e).onclick=function(){return window.listTimers()},(document.querySelector('button[name="settings"]')||e).onclick=t.getSettings,(document.querySelector('button[name="saveSettings"]')||e).onclick=t.saveSettings,(document.querySelector('a[href="#/at/new"]')||e).onclick=t.createEntry,(document.querySelector('button[name="addFilter"]')||e).onclick=function(){return t.addFilter()},(document.querySelector('button[name="cancel"]')||e).onclick=t.cancelEntry,(document.querySelector('form[name="atedit"]')||e).onsubmit=function(e){e.preventDefault(),t.saveEntry()},(document.querySelectorAll('input[name="justplay"], input[name="always_zap"]')||e).forEach(function(e){e.onchange=function(){1>document.querySelectorAll('input[name="justplay"]:checked, input[name="always_zap"]:checked').length&&(event.target.checked=!event.target.checked)}}),(document.getElementById("_timespan")||e).onchange=function(e){m(document.getElementById("_timespan_"),!e.target.checked)},(document.getElementById("_datespan")||e).onchange=function(e){m(document.getElementById("_datespan_"),!e.target.checked)},(document.getElementById("_timerOffset")||e).onchange=function(e){m(document.getElementById("_timerOffset_"),!e.target.checked)},(document.querySelector('[name="afterevent"]')||e).onchange=function(e){m(document.getElementById("AftereventE"),!e.target.value)},(document.getElementById("timeSpanAE")||e).onchange=function(e){m(document.getElementById("timeSpanAEE"),!e.target.checked)},(document.getElementById("_location")||e).onchange=function(e){m(document.getElementById("_location_"),!e.target.checked)},(document.getElementById("beforeevent")||e).onchange=function(e){m(document.getElementById("BeforeeventE"),!e.target.checked)},(document.querySelector('[name="vps_enabled"]')||e).onchange=function(e){m(document.getElementById("vps_enabled_"),!e.target.checked)},(document.querySelector('[name="vps_safemode"]')||e).onchange=function(t){(document.querySelector('[name="vps_overwrite"]')||e).value=t.target.checked?0:1}},init:function(){var e=a(regeneratorRuntime.mark(function e(){var n,r,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return!0,(t=this).allAutoTimers=[],e.next=5,owif.api.getAllServices(!0);case 5:return t.availableServices=e.sent,t.availableLocations=[],t.allLocations=[],e.next=10,owif.api.getTags();case 10:t.availableTags=e.sent,t.allTags=[],t.autoTimerChoices=owif.gui.preparedChoices(),(n=window.location.hash).startsWith("#/at/new")?(r=new URLSearchParams(n.split("?")[1]||""),(a=Object.fromEntries(r)).timespanFrom&&(a.timespanFrom=o(a.timespanFrom,{hours:-1})),a.timespanTo&&(a.timespanTo=o(a.timespanTo,{hours:1})),a.sref&&(a.e2service={e2servicereference:a.sref}),t.populateForm(a)):n.startsWith("#/at/edit")?(i=new URLSearchParams(n.split("?")[1]||""),t.editEntry(i.get("id"))):t.populateList(),t.initEventHandlers(t);case 16:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}).init()}();
},{}],"CKu5":[function(require,module,exports) {
require("./js/autotimers.js");
},{"./js/autotimers.js":"Tkyz"}]},{},["CKu5"], null)
//# sourceMappingURL=/autotimers-app.js.map