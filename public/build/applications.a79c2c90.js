(self.webpackChunkintranetv3=self.webpackChunkintranetv3||[]).push([[5383],{8884:(e,t,n)=>{"use strict";var a=n(1128),i=(n(4649),n(9755)),s=n(9755);i(document).on("click",".changeapplication",(function(e){e.preventDefault(),e.stopPropagation(),i(".changeapplication").removeClass("active show"),i(this).addClass("active show"),i("#mainContent").empty().load(i(this).attr("href"))})),i(document).on("change","#selectsemestre",(function(){i("#listegroupe").empty();var e=i("#selectmatiere"),t=i("#selectgroupes");i.ajax({url:Routing.generate("api_matieres_semestre",{semestre:i(this).val()}),dataType:"json",success:function(t){e.empty(),e.append(i("<option></option>").attr("value","").text("Choisir une matière")),s.each(t,(function(t,n){e.append(i("<option></option>").attr("value",n.typeMatiere+"_"+n.id).text(n.display))})),e.attr("data-provide","selectpicker"),e.attr("data-live-search","true")},error:function(){(0,a.qX)("Erreur lors de la tentative d'affichage des matières du semestres. Veuillez contacter le responsable de l'intranet si le problème persiste !","danger")}}),i.ajax({url:Routing.generate("api_type_groupe_semestre",{semestre:i(this).val()}),dataType:"json",success:function(e){t.empty(),t.append(i("<option></option>").attr("value","").text("Choisir un type de groupe")),s.each(e,(function(e,n){t.append(i("<option></option>").attr("value",n.id).text(n.libelle))}))},error:function(){(0,a.qX)("Erreur lors de la tentative d'affichage des groupes du semestres. Veuillez contacter le responsable de l'intranet si le problème persiste !","danger")}})})),i(document).on("change","#selectgroupes",(function(){var e=i("#listegroupe");i.ajax({url:Routing.generate("api_groupe_type_groupe",{typeGroupe:i(this).val()}),dataType:"json",success:function(t){e.empty();var n="";s.each(t,(function(e,t){n+='<input type="checkbox" checked name="detail_groupes[]" value="'+t.id+'"> '+t.libelle+" | "})),e.html(n)},error:function(){(0,a.qX)("Erreur lors de la tentative d'affichage des groupes du semestres. Veuillez contacter le responsable de l'intranet si le problème persiste !","danger")}})})),i(document).on("click","#add_rattrapage",(function(){i("#bloc_add_rattrapage").toggle()})),i(document).on("click","#add_carnet",(function(){i("#bloc_add_carnet").toggle()}))},4649:(e,t,n)=>{var a=n(9755);n(1058),n(6977),a(document).on("click",".messagerie-filtre",(function(e){e.preventDefault(),e.stopPropagation(),a(".messagerie-filtre").parent().removeClass("active"),a(this).parent().addClass("active"),a("#messages-liste").empty().load(Routing.generate("messagerie_filtre",{filtre:a(this).data("filtre")}))})),a(document).on("click","#modalPj",(function(e){e.preventDefault(),e.stopPropagation(),a("#blocPj").toggle()})),a(document).on("click",".addFile",(function(e){e.preventDefault(),e.stopPropagation();var t=parseInt(a(this).data("file"))+1,n='<div class="row" id="file'+t+'">\n            <div class="col-10">\n                <input type="file" name="pj'+t+'" id="pj'+t+'" class="form-control pjFile" placeholder="Ajouter une pièce jointe">\n            </div>\n            <div class="col-1">\n                <button class="btn btn-block btn-success-outline addFile" data-file="'+t+'"><i class="fa fa-plus-circle"></i></button>\n            </div>\n            <div class="col-1">\n                <button class="btn btn-block btn-danger-outline removeFile" data-file="'+t+'"><i class="fa\n            fa-minus-circle"></i></button>\n            </div>\n        </div>';a("#blocPj").append(n)})),a(document).on("click",".removeFile",(function(e){e.preventDefault(),e.stopPropagation();var t=a(this).data("file");a("#file"+t).remove()})),a(document).on("click","#saveDraft",(function(e){e.preventDefault(),e.stopPropagation(),a.ajax({url:Routing.generate("messagerie_draft"),data:{messageToSemestre:a("#messageToSemestre").val(),messageToGroupe:a("#messageToGroupe").val(),messageToLibreEtudiant:a("#messageToLibreEtudiant").val(),messageToLibrePersonnel:a("#messageToLibrePersonnel").val(),typeDestinataire:a("input[type=radio][name=messageDestinataireType]:checked").val(),copie:a("#messageCopy").val(),message:a(".ql-editor").html(),sujet:a("#messageSubject").val()},method:"POST",success:function(e){a("#messages-liste").empty().load(Routing.generate("messagerie_filtre",{filtre:"draft"}))}})})),a(document).on("click",".message-read",(function(e){e.preventDefault(),e.stopPropagation(),a("#messages-liste").empty().load(Routing.generate("messagerie_message",{message:a(this).data("message")}))})),a(document).on("click",".message-read-auteur",(function(e){e.preventDefault(),e.stopPropagation(),a("#messages-liste").empty().load(Routing.generate("messagerie_message_envoye",{message:a(this).data("message")}))})),a(document).on("click","#new-message",(function(e){e.preventDefault(),e.stopPropagation(),a("#messages-liste").empty().load(Routing.generate("messagerie_nouveau"),{},(function(){tinymce.init({selector:"#messageMessage",height:300,menubar:!1,language:"fr_FR",content_css:"default",toolbar:"undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent"})}))})),a(document).on("change",".pjFile",(function(){var e=0;a('input[type="file"]').each((function(t,n){console.log(n.files[0]),void 0!==n.files[0]&&(e+=n.files[0].size)})),e/=1024,e/=1024,a("#poidPj").show().html("Le poids des pièces jointes est de "+e.toFixed(3)+" Mo")})),a(document).on("click","#messageSent",(function(e){e.preventDefault(),e.stopPropagation(),a(this).attr("disabled",!0),a(this).text("Envoi en cours...");var t=new FormData(a("form")[0]);t.append("messageMessage",tinymce.activeEditor.getContent({format:"html"})),a.ajax({url:Routing.generate("messagerie_sent"),data:t,async:!1,cache:!1,contentType:!1,enctype:"multipart/form-data",processData:!1,method:"POST",success:function(e){a("#messages-liste").empty().load(Routing.generate("messagerie_message_envoye",{message:e.message})),a("#messageSent").attr("disabled",!1),a(this).text("Envoyer")}})})),a(document).on("click",".send_draft",(function(e){e.preventDefault(),e.stopPropagation(),a("#messages-liste").empty().load(Routing.generate("messagerie_nouveau",{message:a(this).data("message")}))})),a(document).on("click",".starred",(function(){a.ajax({url:Routing.generate("messagerie_change_etat"),method:"POST",data:{valeur:"S",message:a(this).data("message")},error:function(){a(this).prop("checked",!1)}})})),a(document).on("click","#deleteMessage",(function(){a.ajax({url:Routing.generate("messagerie_change_etat"),method:"POST",data:{etat:"D",message:a(this).data("message")},success:function(){a("#messages-liste").empty().load(Routing.generate("messagerie_filtre",{filtre:"all"}))}})})),a(document).on("click",".messageDestinataireType",(function(){var e=a(this).val(),t=a("#blocDestLibreEtudiant"),n=a("#blocDestLibrePersonnel"),i=a("#blocDestMessgaeInfo"),s=a("#blocDestGroupe"),o=a("#blocDestSemestre");"e"===e?(t.show(),n.hide(),i.hide(),s.hide(),o.hide()):"s"===e?(t.hide(),n.hide(),i.hide(),s.hide(),o.show()):"g"===e?(t.hide(),n.hide(),i.hide(),s.show(),o.hide()):"p"===e&&(t.hide(),n.show(),i.hide(),s.hide(),o.hide())}))},1128:(e,t,n)=>{"use strict";n.d(t,{qX:()=>d,xQ:()=>h,XQ:()=>v,zl:()=>b,FX:()=>y});n(4916),n(3123),n(3843),n(3710),n(3210),n(5306),n(9653);var a,i,s,o=n(6455),r=n.n(o),c=n(9755),l=n(9755),u=!1;function d(e,t){switch(t){case"success":window.umbrella.Toast.success(e);break;case"danger":window.umbrella.Toast.error(e);break;case"warning":window.umbrella.Toast.warning(e);break;case"info":window.umbrella.Toast.info(e)}}a=c(location).attr("pathname"),i=a.split("/"),s=2,"index.php"===i[1]&&i.length>1&&(s=3),"super-administration"===i[s]&&(s+=1),""===i[i.length-1]&&i.pop(),c(".menu-item").removeClass("active"),c("#menu-"+i[s]).addClass("active"),r().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),c(document).on("click",".supprimer",(function(e){e.preventDefault();var t=c(this).attr("href"),n=c(this).data("csrf");r().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(e){e.value?c.ajax({url:t,type:"DELETE",data:{_token:n},success:function(e){e.hasOwnProperty("redirect")&&e.hasOwnProperty("url")?document.location.href=e.url:(c("#ligne_"+e).closest("tr").remove(),d("Suppression effectuée avec succès","success"),r().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(e,t,n){r().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),d("Erreur lors de la tentative de suppression","danger")}}):"cancel"===e.dismiss&&r().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))})),c(document).on("click",".confirm-delete",(function(e){e.preventDefault();var t=c(this).data("href"),n=c(this).data("uuid"),a=c(this).data("csrf");console.log(n),console.log(a),r().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(e){e.value?c.ajax({url:Routing.generate(t,{uuid:n}),type:"DELETE",data:{_token:a},success:function(e){e.hasOwnProperty("redirect")&&e.hasOwnProperty("url")?document.location.href=e.url:(c("#ligne_"+e).closest("tr").remove(),d("Suppression effectuée avec succès","success"),r().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(e,t,n){r().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),d("Erreur lors de la tentative de suppression","danger")}}):"cancel"===e.dismiss&&r().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var p="",m="text",f=!1;function g(e){var t=c("#myedit-input-"+e).val();c.ajax({url:p.attr("href"),data:{field:p.data("field"),value:t,type:m},method:"POST",success:function(){p.html(t),c("#myEdit-zone-"+e).replaceWith(p),f=!1}})}function h(e,t){var n={};return c.each(c(e).data(),(function(e,a){if("provide"!=(e=e.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()})))){if(null!=t)switch(t[e]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}n[e]=a}})),n}function v(e){e.removeClass("is-valid").addClass("is-invalid")}function b(e){e.removeClass("is-invalid").addClass("is-valid")}function y(e){e.removeClass("is-invalid").removeClass("is-valid")}c(document).on("click",".myedit",(function(e){e.preventDefault(),p=c(this);var t,n,a="";f=!0,void 0!==c(this).data("type")&&(m=c(this).data("type")),"select"===c(this).data("type")||("textarea"===c(this).data("type")?(t=c(this),n=Date.now(),u=!0,a='<div id="myEdit-zone-'+n+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+n+'">'+t.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):a=function(e){var t=Date.now();return'<div id="myEdit-zone-'+t+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+t+'" value="'+e.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+t+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+t+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(c(this))),c(this).replaceWith(a),c("#myedit-input").focus()})),c(document).on("keyup","#myedit-input",(function(e){13===e.keyCode&&!1===u?g():27===e.keyCode&&c("#myEdit-zone").replaceWith(p)})),c(document).on("click",".myedit-valide",(function(e){u=!1,e.preventDefault(),g(c(this).data("key"))})),c(document).on("keypress",(function(e){!0===f&&!1===u&&13===e.which&&(e.preventDefault(),g(c(this).data("key"))),!0===f&&!1===u&&27===e.which&&(e.preventDefault(),c("#myEdit-zone-"+c(this).data("key")).replaceWith(p))})),c(document).on("click",".myedit-annule",(function(e){e.preventDefault(),c("#myEdit-zone-"+c(this).data("key")).replaceWith(p)})),l.fn.dataAttr=function(e,t){return c(this)[0].getAttribute("data-"+e)||t},l.fn.hasDataAttr=function(e){return c(this)[0].hasAttribute("data-"+e)}},3009:(e,t,n)=>{var a=n(7854),i=n(3111).trim,s=n(1361),o=a.parseInt,r=/^[+-]?0[Xx]/,c=8!==o(s+"08")||22!==o(s+"0x16");e.exports=c?function(e,t){var n=i(String(e));return o(n,t>>>0||(r.test(n)?16:10))}:o},8415:(e,t,n)=>{"use strict";var a=n(9958),i=n(4488);e.exports="".repeat||function(e){var t=String(i(this)),n="",s=a(e);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(t+=t))1&s&&(n+=t);return n}},863:(e,t,n)=>{var a=n(4326);e.exports=function(e){if("number"!=typeof e&&"Number"!=a(e))throw TypeError("Incorrect invocation");return+e}},6977:(e,t,n)=>{"use strict";var a=n(2109),i=n(9958),s=n(863),o=n(8415),r=n(7293),c=1..toFixed,l=Math.floor,u=function(e,t,n){return 0===t?n:t%2==1?u(e,t-1,n*e):u(e*e,t/2,n)};a({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}))},{toFixed:function(e){var t,n,a,r,c=s(this),d=i(e),p=[0,0,0,0,0,0],m="",f="0",g=function(e,t){for(var n=-1,a=t;++n<6;)a+=e*p[n],p[n]=a%1e7,a=l(a/1e7)},h=function(e){for(var t=6,n=0;--t>=0;)n+=p[t],p[t]=l(n/e),n=n%e*1e7},v=function(){for(var e=6,t="";--e>=0;)if(""!==t||0===e||0!==p[e]){var n=String(p[e]);t=""===t?n:t+o.call("0",7-n.length)+n}return t};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(c*u(2,69,1))-69)<0?c*u(2,-t,1):c/u(2,t,1),n*=4503599627370496,(t=52-t)>0){for(g(0,n),a=d;a>=7;)g(1e7,0),a-=7;for(g(u(10,a,1),0),a=t-1;a>=23;)h(1<<23),a-=23;h(1<<a),g(1,1),h(2),f=v()}else g(0,n),g(1<<-t,0),f=v()+o.call("0",d);return f=d>0?m+((r=f.length)<=d?"0."+o.call("0",d-r)+f:f.slice(0,r-d)+"."+f.slice(r-d)):m+f}})},1058:(e,t,n)=>{var a=n(2109),i=n(3009);a({global:!0,forced:parseInt!=i},{parseInt:i})}},e=>{"use strict";e.O(0,[9755,2109,2481,6757],(()=>{return t=8884,e(e.s=t);var t}));e.O()}]);