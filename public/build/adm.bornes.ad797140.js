(self.webpackChunkintranetv3=self.webpackChunkintranetv3||[]).push([[1358],{5707:(t,e,n)=>{"use strict";var a=n(1128),s=n(9755);s(document).on("click",".visibiliteBorne",(function(){var t=s(this);s.ajax({url:Routing.generate("administration_borne_visibilite",{id:t.data("id")}),success:function(e){!1===e?((0,a.qX)("Message masqué avec succés !","success"),t.removeClass("btn-success").addClass("btn-danger"),t.children("i").removeClass("fa-eye").addClass("fa-eye-slash"),t.attr("title","Message masqué. Rendre visible")):((0,a.qX)("Message affiché avec succés !","success"),t.removeClass("btn-danger").addClass("btn-success"),t.children("i").removeClass("fa-eye-slash").addClass("fa-eye"),t.attr("title","Message affiché. Rendre invisible"))}})}))},1128:(t,e,n)=>{"use strict";n.d(e,{qX:()=>m,xQ:()=>v,XQ:()=>h,zl:()=>g,FX:()=>C});n(4916),n(3123),n(3843),n(3710),n(3210),n(5306),n(9653);var a,s,i,r=n(9755),o=n.n(r),c=n(6455),u=n.n(c),l=n(9755),d=!1;function m(t,e){switch(e){case"success":window.umbrella.Toast.success(t);break;case"danger":window.umbrella.Toast.error(t);break;case"warning":window.umbrella.Toast.warning(t);break;case"info":window.umbrella.Toast.info(t)}}a=o()(location).attr("pathname"),s=a.split("/"),i=2,"index.php"===s[1]&&s.length>1&&(i=3),"super-administration"===s[i]&&(i+=1),""===s[s.length-1]&&s.pop(),o()(".menu-item").removeClass("active"),o()("#menu-"+s[i]).addClass("active"),u().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),o()(document).on("click",".supprimer",(function(t){t.preventDefault();var e=o()(this).attr("href"),n=o()(this).data("csrf");u().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(t){t.value?o().ajax({url:e,type:"DELETE",data:{_token:n},success:function(t){t.hasOwnProperty("redirect")&&t.hasOwnProperty("url")?document.location.href=t.url:(o()("#ligne_"+t).closest("tr").remove(),m("Suppression effectuée avec succès","success"),u().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(t,e,n){u().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),m("Erreur lors de la tentative de suppression","danger")}}):"cancel"===t.dismiss&&u().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))})),o()(document).on("click",".confirm-delete",(function(t){t.preventDefault();var e=o()(this).data("href"),n=o()(this).data("uuid"),a=o()(this).data("csrf");console.log(n),console.log(a),u().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(t){t.value?o().ajax({url:Routing.generate(e,{uuid:n}),type:"DELETE",data:{_token:a},success:function(t){t.hasOwnProperty("redirect")&&t.hasOwnProperty("url")?document.location.href=t.url:(o()("#ligne_"+t).closest("tr").remove(),m("Suppression effectuée avec succès","success"),u().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(t,e,n){u().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),m("Erreur lors de la tentative de suppression","danger")}}):"cancel"===t.dismiss&&u().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var f="",p="text",b=!1;function y(t){var e=o()("#myedit-input-"+t).val();o().ajax({url:f.attr("href"),data:{field:f.data("field"),value:e,type:p},method:"POST",success:function(){f.html(e),o()("#myEdit-zone-"+t).replaceWith(f),b=!1}})}function v(t,e){var n={};return o().each(o()(t).data(),(function(t,a){if("provide"!=(t=t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})))){if(null!=e)switch(e[t]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}n[t]=a}})),n}function h(t){t.removeClass("is-valid").addClass("is-invalid")}function g(t){t.removeClass("is-invalid").addClass("is-valid")}function C(t){t.removeClass("is-invalid").removeClass("is-valid")}o()(document).on("click",".myedit",(function(t){t.preventDefault(),f=o()(this);var e,n,a="";b=!0,void 0!==o()(this).data("type")&&(p=o()(this).data("type")),"select"===o()(this).data("type")||("textarea"===o()(this).data("type")?(e=o()(this),n=Date.now(),d=!0,a='<div id="myEdit-zone-'+n+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+n+'">'+e.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):a=function(t){var e=Date.now();return'<div id="myEdit-zone-'+e+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+e+'" value="'+t.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+e+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+e+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(o()(this))),o()(this).replaceWith(a),o()("#myedit-input").focus()})),o()(document).on("keyup","#myedit-input",(function(t){13===t.keyCode&&!1===d?y():27===t.keyCode&&o()("#myEdit-zone").replaceWith(f)})),o()(document).on("click",".myedit-valide",(function(t){d=!1,t.preventDefault(),y(o()(this).data("key"))})),o()(document).on("keypress",(function(t){!0===b&&!1===d&&13===t.which&&(t.preventDefault(),y(o()(this).data("key"))),!0===b&&!1===d&&27===t.which&&(t.preventDefault(),o()("#myEdit-zone-"+o()(this).data("key")).replaceWith(f))})),o()(document).on("click",".myedit-annule",(function(t){t.preventDefault(),o()("#myEdit-zone-"+o()(this).data("key")).replaceWith(f)})),l.fn.dataAttr=function(t,e){return o()(this)[0].getAttribute("data-"+t)||e},l.fn.hasDataAttr=function(t){return o()(this)[0].hasAttribute("data-"+t)}}},t=>{"use strict";t.O(0,[9755,2109,6208,9904],(()=>{return e=5707,t(t.s=e);var e}));t.O()}]);