(self.webpackChunkintranetv3=self.webpackChunkintranetv3||[]).push([[5571],{9031:(t,e,n)=>{"use strict";n(3210);var a=n(2396),i=n(9755);i(document).on("change",".departementParDefaut",(function(t){i.ajax({url:Routing.generate("user_change_departement_defaut",{departement:i(this).val()}),method:"POST",success:function(t){(0,a.qX)("Mofification enregistrée !","success")},error:function(t){(0,a.qX)("Erreur lors de la sauvegarde de la modification !","danger")}})})),i(document).on("click","#valideNewpassword",(function(t){t.preventDefault();var e=i("#password_1").val().trim(),n=i("#password_2").val().trim(),r=i("#password_actuel").val().trim();""!==n&&""!==e&&""!==r?e!==n?(0,a.qX)("Les deux nouveaux mot de passe ne sont pas identique!","danger"):i.ajax({url:Routing.generate("user_change_password"),data:{passwd1:e,passwd2:n,passwdactuel:r},method:"POST",success:function(t){(0,a.qX)("Mofification de votre mot de passe effectuée !","success")},error:function(t){(0,a.qX)("Erreur lors de la modification du mot de passe !","danger")}}):(0,a.qX)("Tous les champs sont obligatoires pour la modification du mot de passe!","danger")}))},2396:(t,e,n)=>{"use strict";n.d(e,{qX:()=>b,FX:()=>j,xQ:()=>x,XQ:()=>C,zl:()=>B});n(4916),n(3123),n(3843),n(3710),n(3210),n(5306),n(9653);var a=n(6455),i=n.n(a),r=(n(9070),n(7941),n(2526),n(7327),n(5003),n(9554),n(4747),n(9337),n(3321),n(8588)),o=n.n(r);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const d=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"defaultOptions",{close:!0,duration:3e3,className:"toast",escapeMarkup:!1,gravity:"top",position:"right",stopOnFocus:!0})}var e,n,a;return e=t,(n=[{key:"show",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(a=c(c({},this.defaultOptions),a)).className+=" toast-"+t;var i='<div class="toast-wrapper">';n&&(i+='<div class="toast-head">'+n+"</div>"),i+='<div class="toast-body">'+e+"</div>",i+="</div>",a.text=i,o()(a).showToast()}},{key:"error",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("error",t,e,n)}},{key:"warning",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("warning",t,e,n)}},{key:"success",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("success",t,e,n)}},{key:"info",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("info",t,e,n)}}])&&u(e.prototype,n),a&&u(e,a),t}());var p,f,m,v=n(9755),h=n(9755),y=!1;function b(t,e){switch(e){case"success":d.success(t);break;case"danger":d.error(t);break;case"warning":d.warning(t);break;case"info":d.info(t)}}p=v(location).attr("pathname"),f=p.split("/"),m=2,"index.php"===f[1]&&f.length>1&&(m=3),"super-administration"===f[m]&&(m+=1),""===f[f.length-1]&&f.pop(),v(".menu-item").removeClass("active"),v("#menu-"+f[m]).addClass("active"),i().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),v(document).on("click",".supprimer",(function(t){t.preventDefault();var e=v(this).attr("href"),n=v(this).data("csrf");i().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(t){t.value?v.ajax({url:e,type:"DELETE",data:{_token:n},success:function(t){t.hasOwnProperty("redirect")&&t.hasOwnProperty("url")?document.location.href=t.url:(v("#ligne_"+t).closest("tr").remove(),b("Suppression effectuée avec succès","success"),i().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(t,e,n){i().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),b("Erreur lors de la tentative de suppression","danger")}}):"cancel"===t.dismiss&&i().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var g="",w="text",k=!1;function O(t){var e=v("#myedit-input-"+t).val();v.ajax({url:g.attr("href"),data:{field:g.data("field"),value:e,type:w},method:"POST",success:function(){g.html(e),v("#myEdit-zone-"+t).replaceWith(g),k=!1}})}function x(t,e){var n={};return v.each(v(t).data(),(function(t,a){if("provide"!=(t=t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})))){if(null!=e)switch(e[t]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}n[t]=a}})),n}function C(t){t.removeClass("is-valid").addClass("is-invalid")}function B(t){t.removeClass("is-invalid").addClass("is-valid")}function j(t){t.removeClass("is-invalid").removeClass("is-valid")}v(document).on("click",".myedit",(function(t){t.preventDefault(),g=v(this);var e,n,a="";k=!0,void 0!==v(this).data("type")&&(w=v(this).data("type")),"select"===v(this).data("type")||("textarea"===v(this).data("type")?(e=v(this),n=Date.now(),y=!0,a='<div id="myEdit-zone-'+n+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+n+'">'+e.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):a=function(t){var e=Date.now();return'<div id="myEdit-zone-'+e+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+e+'" value="'+t.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+e+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+e+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(v(this))),v(this).replaceWith(a),v("#myedit-input").focus()})),v(document).on("keyup","#myedit-input",(function(t){13===t.keyCode&&!1===y?O():27===t.keyCode&&v("#myEdit-zone").replaceWith(g)})),v(document).on("click",".myedit-valide",(function(t){y=!1,t.preventDefault(),O(v(this).data("key"))})),v(document).on("keypress",(function(t){!0===k&&!1===y&&13===t.which&&(t.preventDefault(),O(v(this).data("key"))),!0===k&&!1===y&&27===t.which&&(t.preventDefault(),v("#myEdit-zone-"+v(this).data("key")).replaceWith(g))})),v(document).on("click",".myedit-annule",(function(t){t.preventDefault(),v("#myEdit-zone-"+v(this).data("key")).replaceWith(g)})),h.fn.dataAttr=function(t,e){return v(this)[0].getAttribute("data-"+t)||e},h.fn.hasDataAttr=function(t){return v(this)[0].hasAttribute("data-"+t)}}},t=>{"use strict";t.O(0,[9755,2109,4093,1870,8771],(()=>{return e=9031,t(t.s=e);var e}));t.O()}]);