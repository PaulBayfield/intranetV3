(self.webpackChunkintranetv3=self.webpackChunkintranetv3||[]).push([[7034],{8143:(t,e,n)=>{"use strict";for(var i=n(2396),r=n(6455),a=n.n(r),o=n(9755),s=["{{civilite_court_etudiant}}","{{civilite_etudiant}}","{{prenom_etudiant}}","{{nom_etudiant}}","{{entreprise}}","{{civilite_court_responsable}}","{{civilite_responsable}}","{{prenom_reponsable}}","{{nom_responsable}}","{{civilite_court_tuteur}}","{{civilite_tuteur}}","{{prenom_tuteur}}","{{nom_tuteur}}","{{civilite_court_tuteur_univ}}","{{civilite_tuteur_univ}}","{{prenom_tuteur_univ}}","{{nom_tuteur_univ}}","{{date_debut_stage}}","{{date_fin_stage}}","{{nom_periode_stage}}"],u=s.length,c="",l=0;l<u;l++)c=c+" "+s[l];function d(t){return tinymce.init({selector:"#text_"+t,height:300,menubar:"publipostage",language:"fr_FR",content_css:"default",toolbar:"undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent",menu:{publipostage:{title:"Champs de publipostage",items:c}},setup:function(t){for(var e=function(e){t.ui.registry.addMenuItem(s[e],{text:s[e],onAction:function(){t.insertContent(s[e])}})},n=0;n<u;n++)e(n)}})}o(document).ready((function(){d("ETAT_STAGE_AUTORISE"),d("ETAT_STAGE_DEPOSE"),d("ETAT_STAGE_VALIDE"),d("ETAT_STAGE_REFUS"),d("ETAT_STAGE_INCOMPLET"),d("ETAT_STAGE_CONVENTION_IMPRIMEE"),d("ETAT_STAGE_CONVENTION_ENVOYEE"),d("ETAT_STAGE_CONVENTION_RECUE"),d("courrier")})),o(document).on("click",".enregistreModeleMail",(function(){var t=o(this).data("type"),e=o(this).data("ed");o.ajax({url:Routing.generate("administration_stage_periode_courrier_sauvegarde_modele",{uuid:o(this).data("periode"),mail:t}),method:"POST",data:{message:tinymce.get("text_"+e).getContent(),sujet:o("#sujet_"+t).val()},success:function(){(0,i.qX)("Modèle enregistré !","success")}})})),o(document).on("click",".resetDefaut",(function(t){t.preventDefault();var e=o(this).data("type"),n=o(this).data("periode");a().fire({title:"Confirmer le retour au message par défaut ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(t){t.value?o.ajax({url:Routing.generate("administration_stage_periode_courrier_reset",{id:n,etat:e}),type:"POST",success:function(){tinymce.get("text_"+e).setContent(""),(0,i.qX)("Suppression effectuée avec succès, retour au message par défaut","success"),a().fire({title:"Message réinitialisé!",text:"Le message par défaut sera maintenant utilisé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})},error:function(t,e,n){a().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),(0,i.qX)("Erreur lors de la tentative de suppression","danger")}}):"cancel"===t.dismiss&&a().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}))},2396:(t,e,n)=>{"use strict";n.d(e,{qX:()=>h,FX:()=>w,xQ:()=>T,XQ:()=>C,zl:()=>k});n(4916),n(3123),n(3843),n(3710),n(3210),n(5306),n(9653);var i=n(6455),r=n.n(i),a=(n(9070),n(7941),n(2526),n(7327),n(5003),n(9554),n(4747),n(9337),n(3321),n(8588)),o=n.n(a);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const d=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"defaultOptions",{close:!0,duration:3e3,className:"toast",escapeMarkup:!1,gravity:"top",position:"right",stopOnFocus:!0})}var e,n,i;return e=t,(n=[{key:"show",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(i=u(u({},this.defaultOptions),i)).className+=" toast-"+t;var r='<div class="toast-wrapper">';n&&(r+='<div class="toast-head">'+n+"</div>"),r+='<div class="toast-body">'+e+"</div>",r+="</div>",i.text=r,o()(i).showToast()}},{key:"error",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("error",t,e,n)}},{key:"warning",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("warning",t,e,n)}},{key:"success",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("success",t,e,n)}},{key:"info",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("info",t,e,n)}}])&&c(e.prototype,n),i&&c(e,i),t}());var p,f,m,v=n(9755),b=n(9755),y=!1;function h(t,e){switch(e){case"success":d.success(t);break;case"danger":d.error(t);break;case"warning":d.warning(t);break;case"info":d.info(t)}}p=v(location).attr("pathname"),f=p.split("/"),m=2,"index.php"===f[1]&&f.length>1&&(m=3),"super-administration"===f[m]&&(m+=1),""===f[f.length-1]&&f.pop(),v(".menu-item").removeClass("active"),v("#menu-"+f[m]).addClass("active"),r().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),v(document).on("click",".supprimer",(function(t){t.preventDefault();var e=v(this).attr("href"),n=v(this).data("csrf");r().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(t){t.value?v.ajax({url:e,type:"DELETE",data:{_token:n},success:function(t){t.hasOwnProperty("redirect")&&t.hasOwnProperty("url")?document.location.href=t.url:(v("#ligne_"+t).closest("tr").remove(),h("Suppression effectuée avec succès","success"),r().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(t,e,n){r().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),h("Erreur lors de la tentative de suppression","danger")}}):"cancel"===t.dismiss&&r().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var g="",_="text",O=!1;function E(t){var e=v("#myedit-input-"+t).val();v.ajax({url:g.attr("href"),data:{field:g.data("field"),value:e,type:_},method:"POST",success:function(){g.html(e),v("#myEdit-zone-"+t).replaceWith(g),O=!1}})}function T(t,e){var n={};return v.each(v(t).data(),(function(t,i){if("provide"!=(t=t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})))){if(null!=e)switch(e[t]){case"bool":i=Boolean(i);break;case"num":i=Number(i);break;case"array":i=i.split(",")}n[t]=i}})),n}function C(t){t.removeClass("is-valid").addClass("is-invalid")}function k(t){t.removeClass("is-invalid").addClass("is-valid")}function w(t){t.removeClass("is-invalid").removeClass("is-valid")}v(document).on("click",".myedit",(function(t){t.preventDefault(),g=v(this);var e,n,i="";O=!0,void 0!==v(this).data("type")&&(_=v(this).data("type")),"select"===v(this).data("type")||("textarea"===v(this).data("type")?(e=v(this),n=Date.now(),y=!0,i='<div id="myEdit-zone-'+n+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+n+'">'+e.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):i=function(t){var e=Date.now();return'<div id="myEdit-zone-'+e+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+e+'" value="'+t.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+e+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+e+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(v(this))),v(this).replaceWith(i),v("#myedit-input").focus()})),v(document).on("keyup","#myedit-input",(function(t){13===t.keyCode&&!1===y?E():27===t.keyCode&&v("#myEdit-zone").replaceWith(g)})),v(document).on("click",".myedit-valide",(function(t){y=!1,t.preventDefault(),E(v(this).data("key"))})),v(document).on("keypress",(function(t){!0===O&&!1===y&&13===t.which&&(t.preventDefault(),E(v(this).data("key"))),!0===O&&!1===y&&27===t.which&&(t.preventDefault(),v("#myEdit-zone-"+v(this).data("key")).replaceWith(g))})),v(document).on("click",".myedit-annule",(function(t){t.preventDefault(),v("#myEdit-zone-"+v(this).data("key")).replaceWith(g)})),b.fn.dataAttr=function(t,e){return v(this)[0].getAttribute("data-"+t)||e},b.fn.hasDataAttr=function(t){return v(this)[0].hasAttribute("data-"+t)}}},t=>{"use strict";t.O(0,[9755,2109,4093,1870,8771],(()=>{return e=8143,t(t.s=e);var e}));t.O()}]);