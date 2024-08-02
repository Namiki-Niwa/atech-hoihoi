// jQuery(document).ready(function($){
//   $('#btn').on("click", function(){
//     alert("正常に発動しました");
//   });
// });

jQuery('#al').on("click", function(){
  alert("suceed!");
});

jQuery('#modal-open').on("click", function (){
  jQuery('#modal-container').addClass('is-active');
  jQuery('body').css('overflow', 'hidden');
});

jQuery('#modal-close').on("click", function (){
  jQuery('#modal-container').removeClass('is-active');
  jQuery('body').css('overflow', '');
});


