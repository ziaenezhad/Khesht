var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(["require","exports","khesht/ext/bootstrap/dom","khesht/utils","khesht/eventdispatcher"],function(n,t,i,r,u){return function(n){function t(t,u,f){n.call(this);this.modal=null;this.form=null;this.options=$.extend({icon:"flag",title:".titile",showCloseBotton:!0,id:r.uniqueId(),size:""},f);this.modal=i.modal(this.options.size,i.modal.header(this.options.icon,this.options.title,this.options.showCloseBotton),[this.form=i.form().addClass("form-horizontal").append(t),i.hr().css({"margin-top":"inherit","margin-bottom":"inherit"}),this.div_message=i.div()],u).attr({id:this.options.id,"data-backdrop":"static","data-keyboard":!1}).appendTo(i.body).on("show.bs.modal",this.onshow.bind(this)).on("hidden.bs.modal",this.onclose.bind(this))}return __extends(t,n),t.prototype.show=function(){this.modal.modal("show")},t.prototype.close=function(){this.modal.modal("hide")},t.prototype.onshow=function(){},t.prototype.onclose=function(){},t.prototype.link=function(){return i.a({"data-toggle":"modal","data-target":"#"+this.options.id},this.options.icon).append(" ",this.options.title)},t.prototype.input=function(n,t,r){return i.labeledControl(n,t,r,4)},t.prototype.message=function(n,t){t===void 0&&(t="info");i.alert("phone-alt").addClass("alert-"+t).append(n).appendTo(this.div_message)},t.prototype.ajaxParams=function(){return{}},t.prototype.reset=function(){this.div_message.empty()},t}(u)})