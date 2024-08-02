// jQuery(document).ready(function($){
//   $('#btn').on("click", function(){
//     alert("正常に発動しました");
//   });
// });

jQuery('#al').on("click", function(){
  alert("suceed!");
});

jQuery('#modal-open').on("click", function (){
  console.log("test");
  jQuery('#modal-container').addClass('is-active');
  return false;
});



// $(function(){
// 	// 変数に要素を入れる
// 	var open = $('.modal__open'),
// 		close = $('.modal__close'),
// 		container = $('.modal__container');

// 	//開くボタンをクリックしたらモーダルを表示する
// 	open.on('click',function(){	
// 		container.addClass('active');
// 		return false;
// 	});

// 	//閉じるボタンをクリックしたらモーダルを閉じる
// 	close.on('click',function(){	
// 		container.removeClass('active');
// 	});

// 	//モーダルの外側をクリックしたらモーダルを閉じる
// 	$(document).on('click',function(e) {
// 		if(!$(e.target).closest('.modal__body').length) {
// 			container.removeClass('active');
// 		}
// 	});
// });