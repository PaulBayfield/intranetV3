(self.webpackChunk=self.webpackChunk||[]).push([[5431],{44668:(t,e,n)=>{"use strict";var a=n(1128),i=n(19755);i(document).on("click",".optAfficher",(function(){var t=i(this).data("id"),e=i(this).children("i"),n=i(this);i.ajax({url:Routing.generate("administration_evaluation_visibilite",{uuid:t}),success:function(){e.hasClass("fa-eye")?(n.addClass("btn-danger"),n.removeClass("btn-info").removeClass("btn-outline"),e.removeClass("fa-eye"),e.addClass("fa-eye-slash"),n.attr("title","Evaluation masquée. Rendre visible l'évaluation")):(n.removeClass("btn-danger"),n.addClass("btn-info").addClass("btn-outline"),e.removeClass("fa-eye-slash"),e.addClass("fa-eye"),n.attr("title","Evaluation visible. Masquer l'évaluation")),(0,a.qX)("Visibilité de l'évaluation modifiée !","success")},error:function(){(0,a.qX)("Une erreur est survenue !","danger")}})})),i(document).on("click",".optVerrouiller",(function(){var t=i(this).data("id"),e=i(this).children("i"),n=i(this);i.ajax({url:Routing.generate("administration_evaluation_modifiable",{uuid:t}),success:function(){e.hasClass("fa-lock-open")?(console.log("ok"),n.addClass("btn-danger"),n.removeClass("btn-warning").removeClass("btn-outline"),e.removeClass("fa-lock-open"),e.addClass("fa-lock"),n.attr("data-original-title","Modification interdite. Autoriser la modificaiton")):(n.removeClass("btn-danger"),n.addClass("btn-warning").addClass("btn-outline"),e.removeClass("fa-lock"),e.addClass("fa-lock-open"),n.attr("data-original-title","Modification autorisée. Interdire la modification")),(0,a.qX)("Vérouillage de l'évaluation modifiée !","success")},error:function(){(0,a.qX)("Une erreur est survenue !","danger")}})}))},1128:(t,e,n)=>{"use strict";n.d(e,{qX:()=>m,xQ:()=>y,XQ:()=>h,zl:()=>C,FX:()=>g});n(74916),n(23123),n(3843),n(83710),n(73210),n(15306),n(9653);var a,i,s,o=n(19755),r=n.n(o),c=n(86455),u=n.n(c),l=n(19755),d=!1;function m(t,e){switch(e){case"success":r().toast.success(t);break;case"danger":r().toast.error(t);break;case"warning":r().toast.warning(t)}}a=r()(location).attr("pathname"),i=a.split("/"),s=2,"index.php"===i[1]&&i.length>1&&(s=3),"super-administration"===i[s]&&(s+=1),""===i[i.length-1]&&i.pop(),r()(".menu-item").removeClass("active"),r()("#menu-"+i[s]).addClass("active"),u().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),r()(document).on("click",".supprimer",(function(t){t.preventDefault();var e=r()(this).attr("href"),n=r()(this).data("csrf");u().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(t){t.value?r().ajax({url:e,type:"DELETE",data:{_token:n},success:function(t){t.hasOwnProperty("redirect")&&t.hasOwnProperty("url")?document.location.href=t.url:(r()("#ligne_"+t).closest("tr").remove(),m("Suppression effectuée avec succès","success"),u().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(t,e,n){u().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),m("Erreur lors de la tentative de suppression","danger")}}):"cancel"===t.dismiss&&u().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))})),r()(document).on("click",".confirm-delete",(function(t){t.preventDefault();var e=r()(this).data("href"),n=r()(this).data("uuid"),a=r()(this).data("csrf");console.log(n),console.log(a),u().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(t){t.value?r().ajax({url:Routing.generate(e,{uuid:n}),type:"DELETE",data:{_token:a},success:function(t){t.hasOwnProperty("redirect")&&t.hasOwnProperty("url")?document.location.href=t.url:(r()("#ligne_"+t).closest("tr").remove(),m("Suppression effectuée avec succès","success"),u().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(t,e,n){u().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),m("Erreur lors de la tentative de suppression","danger")}}):"cancel"===t.dismiss&&u().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var f="",p="text",b=!1;function v(t){var e=r()("#myedit-input-"+t).val();r().ajax({url:f.attr("href"),data:{field:f.data("field"),value:e,type:p},method:"POST",success:function(){f.html(e),r()("#myEdit-zone-"+t).replaceWith(f),b=!1}})}function y(t,e){var n={};return r().each(r()(t).data(),(function(t,a){if("provide"!=(t=t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})))){if(null!=e)switch(e[t]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}n[t]=a}})),n}function h(t){t.removeClass("is-valid").addClass("is-invalid")}function C(t){t.removeClass("is-invalid").addClass("is-valid")}function g(t){t.removeClass("is-invalid").removeClass("is-valid")}r()(document).on("click",".myedit",(function(t){t.preventDefault(),f=r()(this);var e,n,a="";b=!0,void 0!==r()(this).data("type")&&(p=r()(this).data("type")),"select"===r()(this).data("type")||("textarea"===r()(this).data("type")?(e=r()(this),n=Date.now(),d=!0,a='<div id="myEdit-zone-'+n+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+n+'">'+e.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):a=function(t){var e=Date.now();return'<div id="myEdit-zone-'+e+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+e+'" value="'+t.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+e+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+e+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(r()(this))),r()(this).replaceWith(a),r()("#myedit-input").focus()})),r()(document).on("keyup","#myedit-input",(function(t){13===t.keyCode&&!1===d?v():27===t.keyCode&&r()("#myEdit-zone").replaceWith(f)})),r()(document).on("click",".myedit-valide",(function(t){d=!1,t.preventDefault(),v(r()(this).data("key"))})),r()(document).on("keypress",(function(t){!0===b&&!1===d&&13===t.which&&(t.preventDefault(),v(r()(this).data("key"))),!0===b&&!1===d&&27===t.which&&(t.preventDefault(),r()("#myEdit-zone-"+r()(this).data("key")).replaceWith(f))})),r()(document).on("click",".myedit-annule",(function(t){t.preventDefault(),r()("#myEdit-zone-"+r()(this).data("key")).replaceWith(f)})),l.fn.dataAttr=function(t,e){return r()(this)[0].getAttribute("data-"+t)||e},l.fn.hasDataAttr=function(t){return r()(this)[0].hasAttribute("data-"+t)}}},0,[[44668,3666,9755,2109,6208,9904]]]);