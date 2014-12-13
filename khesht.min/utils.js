define(["require","exports","khesht/app","jquery"],function(n,t,i){return function(){function t(){}return t.isString=function(n){return $.type(n)==="string"},t.uniqueId=function(){return(t.UID++).toString(36)},t.formatMoney=function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},t.each=function(n,t,i){return $.each(n||[],i?t.bind(i):t)},t.param=function(n){return n?"?"+$.param(n):""},t.uniqe=function(n){return n.filter(function(n,t,i){return i.indexOf(n)===t})},t.parsURL=function(n){n===void 0&&(n=location.search);var i=n.replace(/^\?/,"").split(/&/),t={};return this.each(i,function(n,i){i.length>0&&(i=i.split("="),t[decodeURIComponent(i[0]).toLowerCase()]=decodeURIComponent(i[1]))}),t},t.url=function(n){n===void 0&&(n=null);var t=[window.location.protocol,"//",window.location.host,location.pathname].join("");return t.slice(0,t.lastIndexOf("/")+1)+this.param(n)},t.log=function(){for(var n=[],t=0;t<arguments.length;t++)n[+t]=arguments[t];n=Array.prototype.slice.call(n);n.unshift(["<",i.config.name,"> - "].join(""));console.log.apply(console,n)},t.error=function(n,t){console.error.apply(console,[["<",i.config.name," error> - ",t,":"].join(""),n])},t.ajax=function(t,i,r,u){return u===void 0&&(u={}),$.extend(u,{data:i,url:n.toUrl(t),success:r,error:this.error.bind(this)}),$.ajax(u)},t.when=function(n,t,i){var u=this,r={};n&&Object.keys(n).length>0?(this.each(n,function(n,t){t.done(function(t){t=t&&t.error?null:t;r[n]=t;u.log("ajax request recived :",n,"=",t)}).fail(null)}),$.when.apply(this,$.map(n,function(n){return n})).then(function(){t&&t(r)}).fail(function(n,t){i?i():u.error(n,"ajax set request failed : "+t)})):t&&t(r)},t.getJSON=function(n,t,i,r){return r===void 0&&(r={}),$.extend(r,{dataType:"json"}),this.ajax(n,t,i,r)},t.api=function(n,t,i,r){var f=this,u;if(t===void 0&&(t={}),r===void 0&&(r={}),t=t||{},t instanceof FormData?t.append("call",n):$.extend(t,{call:n}),r.argsfail&&(u=[],this.each(t,function(n,t){switch(typeof t){case"string":t==""&&u.push(n);break;case"number":case"boolean":break;default:u.push(n)}}),u.length>0)){r.argsfail(u);return}return this.getJSON("api/",t,function(t){var u=t?t.error:null;if(u){if(f.error(u,'api "'+n+'" call failed'),r.onerror)r.onerror(u)}else i&&(f.log('api "',n,'" call returned:',t),i(t))},r)},t.loadModule=function(t,i,r){var u=this;n.call(null,[t],function(n){u.log("module file loaded:",t);i(n)},function(n){u.error(n.requireModules&&n.requireModules[0],"loading module failed");r&&r()})},t.UID=Date.now(),t}()})