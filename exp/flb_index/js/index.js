$(function road(){
	menu_hover('grid_1','sub_bar_1','menu_hover_1');
	menu_hover('grid_2','sub_bar_2','menu_hover_2');
	menu_hover('grid_3','sub_bar_3','menu_hover_3');
	menu_ox1('roof','menu','menu_ox','menu_o','menu_x');
	menu_ox2('menu_1_n','menu_1ox','menu_1o','menu_1x');
	menu_ox2('menu_2_n','menu_2ox','menu_2o','menu_2x');
	menu_ox2('menu_3_n','menu_3ox','menu_3o','menu_3x');
	//case_fade('p1a_bg',3,'p1a_l','p1a_r','p1a_point');
	//pre_animate();
	//scroll_animate();
});

function menu_hover(a, b, c) {
	var aa = document.getElementById(a),//item
		bb = document.getElementById(b);//sub_item
	$(aa).addClass(c);
	$(bb).addClass(c);
	var cc = $('.' + c);//new class_name
	$(cc).mouseover(function() {
		$(aa).addClass('blue_bg');
		$(bb).addClass('di');
	});
	$(cc).mouseout(function() {
		$(aa).removeClass('blue_bg');
		$(bb).removeClass('di');
	});
}

function menu_ox1(a, b, c, o, x) {
	var aa = document.getElementById(a),//main_body
		bb = document.getElementById(b),//menu
		cc = document.getElementById(c),//switcher
		oo = document.getElementById(o),
		xx = document.getElementById(x),
		n = 0;
	$(cc).click(function(){
		if(n % 2 === 0) {
			$(window).width()>767?$(aa).animate({'left': '-250px'}, 100):$(aa).animate({'left': '-150px'}, 100);
			$(bb).animate({'right': '0px'}, 100);
			$(oo).addClass('dn').removeClass('di');
			$(xx).addClass('di').removeClass('dn');
			n = n + 1;
		}
		else if(n % 2 === 1) {
			$(aa).animate({'left': '0px'}, 100);
			$(window).width()>767?$(bb).animate({'right': '-250px'}, 100):$(bb).animate({'right': '-150px'}, 100);
			$(oo).addClass('di').removeClass('dn');
			$(xx).addClass('dn').removeClass('di');
			n = n + 1;
		};
	});
}

function menu_ox2(a, b, o, x) {
	var aa = document.getElementById(a),//menu
		bb = document.getElementById(b),//sub_menu
		oo = document.getElementById(o),
		xx = document.getElementById(x),
		n = 0;
	$(bb).click(function(){
		if (n % 2 === 0) {
			$(aa).slideDown(100);
			$(oo).addClass('dn').removeClass('di');
			$(xx).addClass('di').removeClass('dn');
			n = n + 1;
		}
		else if (n % 2 === 1) {
			console.log(n);
			$(aa).slideUp(100);
			$(oo).addClass('di').removeClass('dn');
			$(xx).addClass('dn').removeClass('di');
			n = n + 1;
		};
	});
}

function case_fade(a,n,l,r,p){
	var a = a,//name
	 	n = n,//length
		ll = document.getElementById(l),//left
		rr = document.getElementById(r),//right
		p = p,//points
		m = 300,
		n0,
		n1;
	console.log('n='+n);

	function lll(){
		n0 = m % n + 1;
		n1 = (m - 1) % n + 1;
		m = m - 1;
		$('#'+a+n0).css('display','none');
		$('#'+a+n1).fadeIn(2000);
		$('#'+p+'_'+n0+'a').addClass('di').removeClass('dn');
		$('#'+p+'_'+n0+'b').addClass('dn').removeClass('di');
		$('#'+p+'_'+n1+'a').addClass('dn').removeClass('di');
		$('#'+p+'_'+n1+'b').addClass('di').removeClass('dn');
	};
	function rrr(){
		n0 = m % n + 1;
		n1 = (m + 1) % n + 1;
		m = m + 1;
		$('#'+a+n0).css('display','none');
		$('#'+a+n1).fadeIn(2000);
		$('#'+p+'_'+n0+'a').addClass('di').removeClass('dn');
		$('#'+p+'_'+n0+'b').addClass('dn').removeClass('di');
		$('#'+p+'_'+n1+'a').addClass('dn').removeClass('di');
		$('#'+p+'_'+n1+'b').addClass('di').removeClass('dn');
	};
	window.setInterval(rrr,3000);
	$(ll).click(lll);
	$(rr).click(rrr);
}


var p3_done = 0,
	p4_done = 0,
	p5_done = 0,
	p6_done = 0;
function pre_animate(){
	if($(window).width()>1000){
			$('#p3_t').css('opacity','0');
			$('#p3a_p').css({'width':'390px','height':'350px','left':'800px','top':'225px','opacity':'0'});
			
			$('#p4_1').css({'top':'-100px','opacity':'0'});
			$('#p4_2').css({'top':'-100px','opacity':'0'});
			$('#p4_3').css({'top':'-100px','opacity':'0'});
			$('#p4_4').css({'top':'350px','opacity':'0'});
			$('#p4_5').css({'top':'350px','opacity':'0'});
			$('#p4_6').css({'top':'350px','opacity':'0'});

			$('#p5_t1').css({'opacity':'0'});
			$('#p5_t2').css({'opacity':'0'});
			$('#p5_t3').css({'opacity':'0'});
			$('#p5_t4').css({'opacity':'0'});
			$('#p5_t5').css({'opacity':'0'});
			$('#p5_t6').css({'opacity':'0'});

			$('#p6_t').css({'left':'-30%','opacity':'0'});
			$('#p6_p').css({'left':'65%','opacity':'0'});
	};
};
function scroll_animate(){
	$(window).scroll(function(){
		var height = $(window).height();

		if(p3_done===0 && $(window).width()>1000 && $('#p3').get(0).getBoundingClientRect().top <= (height/3)){
			p3_done=1;
			
			$('#p3a_p').animate({'width':'780px','height':'700px','left':'610px','top':'0','opacity':'1'},1500,function(){$('#p3_t').animate({'opacity':'1'},1000)});
		};
		if(p4_done===0 && $(window).width()>1000 && $('#p4').get(0).getBoundingClientRect().top <= (height/3)){
			p4_done=1;


			$('#p4_h').animate({'opacity':'0.999'},500,
				function(){
					$('#p4_1').animate({'top':'0','opacity':'1'},1000);
					$('#p4_2').animate({'top':'0','opacity':'1'},1500);
					$('#p4_3').animate({'top':'0','opacity':'1'},2000);
					$('#p4_4').animate({'top':'250','opacity':'1'},1000);
					$('#p4_5').animate({'top':'250','opacity':'1'},1500);
					$('#p4_6').animate({'top':'250','opacity':'1'},2000);
				}
			);
		};
		if(p5_done===0 && $(window).width()>500 && $('#p5').get(0).getBoundingClientRect().top <= (height/3)){
			p5_done = 1;


			$('#p5_h').animate({'opacity':'0.999'},1000,
				function(){
					$('#p5_t1').animate({'opacity':'1'},300);
					$('#p5_t2').animate({'opacity':'1'},300,
						function(){
							$('#p5_t3').animate({'opacity':'1'},300);
							$('#p5_t4').animate({'opacity':'1'},300,
								function(){
									$('#p5_t5').animate({'opacity':'1'},300);
									$('#p5_t6').animate({'opacity':'1'},300);
								}
							);
						}
					);
				}
			);
		};
		if(p6_done===0 && $(window).width()>1000 && $('#p6').get(0).getBoundingClientRect().top <= (height/3)){
			p6_done=1;
			$('#p5_h').animate({'opacity':'0.999'},1000,
				function(){
					$('#p6_t').animate({'left':'0','opacity':'1'},1000);
					$('#p6_p').animate({'left':'35%','opacity':'1'},1000);
				}
			);
		};
	})
}

