(self.webpackChunkintranetv3=self.webpackChunkintranetv3||[]).push([[8880],{3550:(e,t,n)=>{"use strict";var r=n(2396),a=n(9755);a(document).on("click",".change-semestre",(function(e){e.preventDefault(),a(".change-semestre").removeClass("active show"),a(this).addClass("active show");var t=a(this).data("semestre");a("#liste_semestre").empty().load(Routing.generate("administration_groupe_liste_semestre",{semestre:t},(function(){a("#export_csv").attr("href",Routing.generate("administration_groupe_export",{semestre:t,_format:"csv"})),a("#export_xlsx").attr("href",Routing.generate("administration_groupe_export",{semestre:t,_format:"xlsx"})),a("#export_pdf").attr("href",Routing.generate("administration_groupe_export",{semestre:t,_format:"pdf"}))}))),a("#type_groupes_semestre").empty().load(Routing.generate("administration_type_groupe_liste_semestre",{semestre:t}))})),a(document).on("change",".change-parent",(function(){var e=a(this).data("semestre");a.ajax({url:Routing.generate("administration_groupe_change_parent"),data:{groupe:a(this).data("groupe"),parent:a(this).val()},method:"POST",success:function(){a("#groupes_semestre").empty().load(Routing.generate("administration_groupe_liste_semestre",{semestre:e})),(0,r.qX)("Mise à jour du parent","success")}})})),a(document).on("change",".change-typegroupe",(function(){var e=a(this).data("semestre");a.ajax({url:Routing.generate("administration_groupe_change_typegroupe"),data:{groupe:a(this).data("groupe"),typegroupe:a(this).val()},method:"POST",success:function(){a("#groupes_semestre").empty().load(Routing.generate("administration_groupe_liste_semestre",{semestre:e})),(0,r.qX)("Mise à jour du type de groupe","success")}})})),a(document).on("change",".change-parcours",(function(){var e=a(this).data("semestre");a.ajax({url:Routing.generate("administration_groupe_change_parcours"),data:{groupe:a(this).data("groupe"),parcours:a(this).val()},method:"POST",success:function(){a("#groupes_semestre").empty().load(Routing.generate("administration_groupe_liste_semestre",{semestre:e})),(0,r.qX)("Mise à jour du parcours associé au groupe","success")}})})),a(document).on("change",".change-type_typegroupe",(function(){a.ajax({url:Routing.generate("administration_typegroupe_change_type",{typeGroupe:a(this).data("typegroupe")}),data:{type:a(this).val()},method:"POST",success:function(){(0,r.qX)("Mise à jour du type de type de groupe","success")}})})),a(document).on("click",".duplicate-groupe",(function(e){e.preventDefault();var t=a(this).data("semestre");a.ajax({url:Routing.generate("administration_groupe_duplicate",{groupe:a(this).data("groupe")}),method:"GET",success:function(){a("#groupes_semestre").empty().load(Routing.generate("administration_groupe_liste_semestre",{semestre:t})),(0,r.qX)("Groupe dupliqué","success")}})})),a(document).on("click",".duplicate-type_groupe",(function(e){e.preventDefault();var t=a(this).data("semestre");a.ajax({url:Routing.generate("administration_type_groupe_duplicate",{typegroupe:a(this).data("typegroupe")}),method:"GET",success:function(){a("#groupes_semestre").empty().load(Routing.generate("administration_groupe_liste_semestre",{semestre:t})),a("#type_groupes_semestre").empty().load(Routing.generate("administration_type_groupe_liste_semestre",{semestre:t})),(0,r.qX)("Type de groupe dupliqué","success")}})})),a(document).on("click","#addGroupe",(function(e){e.preventDefault();var t=a(this).data("semestre"),n=new FormData(a("#form_groupe")[0]);a.ajax({url:Routing.generate("administration_groupe_new",{semestre:t}),data:n,processData:!1,contentType:!1,method:"POST",success:function(){a("#groupes_semestre").empty().load(Routing.generate("administration_groupe_liste_semestre",{semestre:t})),(0,r.qX)("Mise à jour du parcours associé au groupe","success")}})})),a(document).on("click","#addTypeGroupe",(function(e){e.preventDefault();var t=a(this).data("semestre");a.ajax({url:Routing.generate("administration_type_groupe_new",{semestre:t}),data:{libelle:a("#typegroupe_libelle").val(),type:a("#typegroupe_type").val(),defaut:a("#typegroupe_defaut").prop("checked")},method:"POST",success:function(){a("#groupes_semestre").empty().load(Routing.generate("administration_groupe_liste_semestre",{semestre:t})),a("#type_groupes_semestre").empty().load(Routing.generate("administration_type_groupe_liste_semestre",{semestre:t})),(0,r.qX)("Ajout d'un type de groupe","success")}})})),a(document).on("change",".changeDefaut",(function(e){var t=a(this).data("semestre");e.preventDefault(),e.stopPropagation(),a.ajax({url:Routing.generate("administration_type_groupe_defaut",{semestre:t,typegroupe:a(this).data("type-groupe")}),method:"POST",data:{defaut:a(this).prop("checked")},success:function(){a("#type_groupes_semestre").empty().load(Routing.generate("administration_type_groupe_liste_semestre",{semestre:t})),(0,r.qX)("Type de groupe par défaut enregistrée","success")},error:function(){(0,r.qX)("Erreur lors de l'enregistrement","danger")}})}))},2396:(e,t,n)=>{"use strict";n.d(t,{qX:()=>_,FX:()=>R,xQ:()=>O,bV:()=>v,XQ:()=>j,zl:()=>C});n(4916),n(3123),n(3843),n(3710),n(3210),n(5306),n(9653);var r=n(6455),a=n.n(r),s=(n(9070),n(7941),n(2526),n(7327),n(5003),n(9554),n(4747),n(9337),n(3321),n(8588)),o=n.n(s);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"defaultOptions",{close:!0,duration:3e3,className:"toast",escapeMarkup:!1,gravity:"top",position:"right",stopOnFocus:!0})}var t,n,r;return t=e,(n=[{key:"show",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(r=u(u({},this.defaultOptions),r)).className+=" toast-"+e;var a='<div class="toast-wrapper">';n&&(a+='<div class="toast-head">'+n+"</div>"),a+='<div class="toast-body">'+t+"</div>",a+="</div>",r.text=a,o()(r).showToast()}},{key:"error",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("error",e,t,n)}},{key:"warning",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("warning",e,t,n)}},{key:"success",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("success",e,t,n)}},{key:"info",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("info",e,t,n)}}])&&c(t.prototype,n),r&&c(t,r),e}());var d,m,g,f=n(9755),h=n(9755),y=!1;function v(e,t){for(t=t.toLowerCase();e&&e.nodeName.toLowerCase()!=t;)e=e.parentNode;return e||null}function _(e,t){switch(t){case"success":l.success(e);break;case"danger":l.error(e);break;case"warning":l.warning(e);break;case"info":l.info(e)}}d=f(location).attr("pathname"),m=d.split("/"),g=2,"index.php"===m[1]&&m.length>1&&(g=3),"super-administration"===m[g]&&(g+=1),""===m[m.length-1]&&m.pop(),f(".menu-item").removeClass("active"),f("#menu-"+m[g]).addClass("active"),a().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),f(document).on("click",".supprimer",(function(e){e.preventDefault();var t=f(this).attr("href"),n=f(this).data("csrf");a().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(r){r.value?f.ajax({url:t,type:"DELETE",data:{_token:n},success:function(t){if(t.hasOwnProperty("redirect")&&t.hasOwnProperty("url"))document.location.href=t.url;else{var n=v(e.target,"tr");n.parentNode.removeChild(n),_("Suppression effectuée avec succès","success"),a().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}},error:function(e,t,n){a().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),_("Erreur lors de la tentative de suppression","danger")}}):"cancel"===r.dismiss&&a().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var b="",k="text",w=!1;function x(e){var t=f("#myedit-input-"+e).val();f.ajax({url:b.attr("href"),data:{field:b.data("field"),value:t,type:k},method:"POST",success:function(){b.html(t),f("#myEdit-zone-"+e).replaceWith(b),w=!1}})}function O(e,t){var n={};return f.each(f(e).data(),(function(e,r){if("provide"!=(e=e.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()})))){if(null!=t)switch(t[e]){case"bool":r=Boolean(r);break;case"num":r=Number(r);break;case"array":r=r.split(",")}n[e]=r}})),n}function j(e){e.removeClass("is-valid").addClass("is-invalid")}function C(e){e.removeClass("is-invalid").addClass("is-valid")}function R(e){e.removeClass("is-invalid").removeClass("is-valid")}f(document).on("click",".myedit",(function(e){e.preventDefault(),b=f(this);var t,n,r="";w=!0,void 0!==f(this).data("type")&&(k=f(this).data("type")),"select"===f(this).data("type")||("textarea"===f(this).data("type")?(t=f(this),n=Date.now(),y=!0,r='<div id="myEdit-zone-'+n+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+n+'">'+t.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):r=function(e){var t=Date.now();return'<div id="myEdit-zone-'+t+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+t+'" value="'+e.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+t+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+t+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(f(this))),f(this).replaceWith(r),f("#myedit-input").focus()})),f(document).on("keyup","#myedit-input",(function(e){13===e.keyCode&&!1===y?x():27===e.keyCode&&f("#myEdit-zone").replaceWith(b)})),f(document).on("click",".myedit-valide",(function(e){y=!1,e.preventDefault(),x(f(this).data("key"))})),f(document).on("keypress",(function(e){!0===w&&!1===y&&13===e.which&&(e.preventDefault(),x(f(this).data("key"))),!0===w&&!1===y&&27===e.which&&(e.preventDefault(),f("#myEdit-zone-"+f(this).data("key")).replaceWith(b))})),f(document).on("click",".myedit-annule",(function(e){e.preventDefault(),f("#myEdit-zone-"+f(this).data("key")).replaceWith(b)})),h.fn.dataAttr=function(e,t){return f(this)[0].getAttribute("data-"+e)||t},h.fn.hasDataAttr=function(e){return f(this)[0].hasAttribute("data-"+e)}}},e=>{"use strict";e.O(0,[9755,2109,4093,1870,8771],(()=>{return t=3550,e(e.s=t);var t}));e.O()}]);