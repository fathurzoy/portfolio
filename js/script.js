// event pada saat line di klik
// Easing
$('.page-scroll').on('click', function(e){
	// console.log('ok');  untuk cek 

	// ambil isi href
	var tujuan = $(this).attr('href');
	// console.log(href); cek

	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);
	// console.log(elemenTujuan.offset().top); cek berapa jarak keatas

	// $('body').scrollTop('700');
	// console.log($('body').scrollTop());

	// pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'easeInOutExpo');
	// $('body').scrollTop(elemenTujuan.offset().top);

	e.preventDefault();

});

// // jika eror tidak bisa scroll
// Diberi pin oleh Web Programming UNPAS
// Rizal Hasan
// 2 tahun yang lalu
// punteun pak dosen sedikit membantu menjawab buat teman-teman yang fungsi js scroll nya belum jalan
// tinggal tambahkan kata html sebelum kata body dan jangan lupa pake tanda koma ( , )
// copy paste aja script di bawah ini, insya allah jalan
// pami masih error taroskeun ka pak dosen saya mah masih newbie :)

// $('.page-scroll').on('click', function(e) {

//  var tujuan = $(this).attr('href');

//  var elemenTujuan = $(tujuan);

//  $('html , body').animate({
//   scrollTop: elemenTujuan.offset().top - 50
//  });

//  e.preventDefault();
// });


// paralax
// about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});


$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	// console.log(wScroll); cek
	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'$)'
	});

// portfolio
	if(wScroll > $('.portfolio').offset().top - 250) {
		// console.log('ok'); cek

		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				// console.log('ok');cek
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
		// $('.portfolio .thumbnail').addClass('muncul');

	}

});