(self.webpackChunkintranetv3=self.webpackChunkintranetv3||[]).push([[7306],{4098:(e,t,n)=>{"use strict";n(1058);var a=n(2396),r=n(9755);function i(e,t,n){r.ajax({url:Routing.generate("application_personnel_disponibilite_update"),data:{jour:e,heure:t,etat:n},method:"POST"})}function s(e,t,n){r.ajax({url:Routing.generate("administration_creneau_bloque_modifie_etat"),data:{creneau:t,type:e,semaine:n},method:"POST"})}r(document).on("click","#btn_creneau_add",(function(){var e=r("#change_annee_universitiare_temp").val();r.ajax({method:"POST",data:{anneeUniversitaire:e,jour:r("#creneau_jour").val(),debut:r("#creneau_debut").val(),fin:r("#creneau_fin").val()},url:Routing.generate("administration_creneau_cours_new"),success:function(){r("#liste_creneaux").empty().load(Routing.generate("administration_creneau_cours_liste",{annee_universitaire:e})),(0,a.qX)("Créneau ajouté avec succès","success")},error:function(){(0,a.qX)("Erreur lors de l'ajout du créneau","danger")}})})),r(document).on("click",".bloquercreneau",(function(){var e=r(this);e.hasClass("bloquercreneau_eviter")?(s("dispo",e.data("creneau"),e.data("semaine")),e.removeClass("bloquercreneau_eviter")):e.hasClass("bloquercreneau_interdit")?(e.removeClass("bloquercreneau_interdit"),e.addClass("bloquercreneau_eviter"),s("au",e.data("creneau"),e.data("semaine"))):(e.addClass("bloquercreneau_interdit"),s("va",e.data("creneau"),e.data("semaine")))})),r(document).on("click",".creneau",(function(){var e=r("#nb_interdit"),t=r("#nb_eviter"),n=r("#nb_dispo"),a=r(this).data("heure"),s=r(this).dataAttr("jour"),o=parseInt(e.text()),u=parseInt(t.text()),c=parseInt(n.text());r(this).hasClass("bloquercreneau_interdit")?(r(this).removeClass("bloquercreneau_interdit"),r(this).addClass("bloquercreneau_eviter"),o--,u++,i(s,a,"E")):r(this).hasClass("bloquercreneau_eviter")?(r(this).removeClass("bloquercreneau_eviter"),u--,c++,i(s,a,"D")):(r(this).addClass("bloquercreneau_interdit"),o++,c--,i(s,a,"I")),e.text(o),t.text(u),n.text(c)}))},2396:(e,t,n)=>{"use strict";n.d(t,{qX:()=>y,FX:()=>j,xQ:()=>w,XQ:()=>O,zl:()=>x});n(4916),n(3123),n(3843),n(3710),n(3210),n(5306),n(9653);var a=n(6455),r=n.n(a),i=(n(9070),n(7941),n(2526),n(7327),n(5003),n(9554),n(4747),n(9337),n(3321),n(8588)),s=n.n(i);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"defaultOptions",{close:!0,duration:3e3,className:"toast",escapeMarkup:!1,gravity:"top",position:"right",stopOnFocus:!0})}var t,n,a;return t=e,(n=[{key:"show",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(a=u(u({},this.defaultOptions),a)).className+=" toast-"+e;var r='<div class="toast-wrapper">';n&&(r+='<div class="toast-head">'+n+"</div>"),r+='<div class="toast-body">'+t+"</div>",r+="</div>",a.text=r,s()(a).showToast()}},{key:"error",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("error",e,t,n)}},{key:"warning",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("warning",e,t,n)}},{key:"success",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("success",e,t,n)}},{key:"info",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("info",e,t,n)}}])&&c(t.prototype,n),a&&c(t,a),e}());var p,f,v,m=n(9755),h=n(9755),b=!1;function y(e,t){switch(t){case"success":d.success(e);break;case"danger":d.error(e);break;case"warning":d.warning(e);break;case"info":d.info(e)}}p=m(location).attr("pathname"),f=p.split("/"),v=2,"index.php"===f[1]&&f.length>1&&(v=3),"super-administration"===f[v]&&(v+=1),""===f[f.length-1]&&f.pop(),m(".menu-item").removeClass("active"),m("#menu-"+f[v]).addClass("active"),r().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),m(document).on("click",".supprimer",(function(e){e.preventDefault();var t=m(this).attr("href"),n=m(this).data("csrf");r().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(e){e.value?m.ajax({url:t,type:"DELETE",data:{_token:n},success:function(e){e.hasOwnProperty("redirect")&&e.hasOwnProperty("url")?document.location.href=e.url:(m("#ligne_"+e).closest("tr").remove(),y("Suppression effectuée avec succès","success"),r().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(e,t,n){r().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),y("Erreur lors de la tentative de suppression","danger")}}):"cancel"===e.dismiss&&r().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var g="",_="text",k=!1;function C(e){var t=m("#myedit-input-"+e).val();m.ajax({url:g.attr("href"),data:{field:g.data("field"),value:t,type:_},method:"POST",success:function(){g.html(t),m("#myEdit-zone-"+e).replaceWith(g),k=!1}})}function w(e,t){var n={};return m.each(m(e).data(),(function(e,a){if("provide"!=(e=e.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()})))){if(null!=t)switch(t[e]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}n[e]=a}})),n}function O(e){e.removeClass("is-valid").addClass("is-invalid")}function x(e){e.removeClass("is-invalid").addClass("is-valid")}function j(e){e.removeClass("is-invalid").removeClass("is-valid")}m(document).on("click",".myedit",(function(e){e.preventDefault(),g=m(this);var t,n,a="";k=!0,void 0!==m(this).data("type")&&(_=m(this).data("type")),"select"===m(this).data("type")||("textarea"===m(this).data("type")?(t=m(this),n=Date.now(),b=!0,a='<div id="myEdit-zone-'+n+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+n+'">'+t.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):a=function(e){var t=Date.now();return'<div id="myEdit-zone-'+t+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+t+'" value="'+e.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+t+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+t+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(m(this))),m(this).replaceWith(a),m("#myedit-input").focus()})),m(document).on("keyup","#myedit-input",(function(e){13===e.keyCode&&!1===b?C():27===e.keyCode&&m("#myEdit-zone").replaceWith(g)})),m(document).on("click",".myedit-valide",(function(e){b=!1,e.preventDefault(),C(m(this).data("key"))})),m(document).on("keypress",(function(e){!0===k&&!1===b&&13===e.which&&(e.preventDefault(),C(m(this).data("key"))),!0===k&&!1===b&&27===e.which&&(e.preventDefault(),m("#myEdit-zone-"+m(this).data("key")).replaceWith(g))})),m(document).on("click",".myedit-annule",(function(e){e.preventDefault(),m("#myEdit-zone-"+m(this).data("key")).replaceWith(g)})),h.fn.dataAttr=function(e,t){return m(this)[0].getAttribute("data-"+e)||t},h.fn.hasDataAttr=function(e){return m(this)[0].hasAttribute("data-"+e)}},3009:(e,t,n)=>{var a=n(7854),r=n(1340),i=n(3111).trim,s=n(1361),o=a.parseInt,u=/^[+-]?0[Xx]/,c=8!==o(s+"08")||22!==o(s+"0x16");e.exports=c?function(e,t){var n=i(r(e));return o(n,t>>>0||(u.test(n)?16:10))}:o},1058:(e,t,n)=>{var a=n(2109),r=n(3009);a({global:!0,forced:parseInt!=r},{parseInt:r})}},e=>{e.O(0,[9755,2109,3123,94,8771],(()=>{return t=4098,e(e.s=t);var t}));e.O()}]);