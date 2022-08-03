//メニュー
$(function(){
	
	var mediaQuery = matchMedia('(max-width: 599px)'),
			flg = true;
	
	// ページが読み込まれた時に実行
	handle(mediaQuery);
	
	// ウィンドウサイズが変更されても実行されるように
	mediaQuery.addListener(handle);
	
	//モーダル閉じる関数
	function menuClose(){
		$('#modal-overlay').fadeOut(300 , function(){ //フェードアウト
			$('#modal-overlay').remove(); //オーバーレイ用html削除
		});
		$('.menuLabel').removeClass('menuOpen'); //クラス名open削除
		flg = true;
	}
	
	function handle(mq){
		if (mq.matches) {
			// ウィンドウサイズが599px以下のとき
			$('.menuLabel').on('click' , function(){ //クリックイベントon
				if( flg ){
					$(this).addClass('menuOpen'); //開いたらクラス名open付与
					$('body').append('<div id="modal-overlay"></div>'); //オーバーレイ用html追加
					$('#modal-overlay').fadeIn(300); //フェードイン
					flg = false;
				}else{
					menuClose(); //閉じる関数
				}
			});

			//オーバーレイをクリックしたら
			$(document).on('click' , '#modal-overlay' , function(){
				menuClose(); //閉じる関数
			});
			
		} else {
			// ウィンドウサイズそれ以外
			$('.menuLabel').off(); //クリックイベントoff
			menuClose(); //閉じる関数
		}
	}
});