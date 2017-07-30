$(function road(){
	keep_height();
	steps();
	//check();
	menu_hover('grid_1','sub_bar_1','menu_hover_1');
	menu_hover('grid_2','sub_bar_2','menu_hover_2');
	menu_hover('grid_3','sub_bar_3','menu_hover_3');
	menu_ox1('roof','menu','menu_ox','menu_o','menu_x');
	menu_ox2('menu_1_n','menu_1ox','menu_1o','menu_1x');
	menu_ox2('menu_2_n','menu_2ox','menu_2o','menu_2x');
	menu_ox2('menu_3_n','menu_3ox','menu_3o','menu_3x');
	$(window).resize(function(){keep_height()});

	//case_fade('p1a_bg',3,'p1a_l','p1a_r','p1a_point');
	//pre_animate();
	//scroll_animate();
});
function keep_height() {
	var width = $(window).width(),
		height = $(window).height();
	if(width<1000&&height>750){
		height = $(window).height();
		$('#roof').addClass('_roof');
		$('._roof').css('height',height);
		//$('#p8').css('padding-top','36px');
		$('#foot').css('position','absolute');
	}
	else{
		height = $(window).height();

		$('#roof').removeClass('roof');
		$('.roof').css('height',height);
		//$('#p8').css('padding-top','0px');
		$('#foot').css('position','relative');
	};
	console.log(123);
}

function steps(){
	var width = $(window).width(),
		step_on = 1;
	if(width<768&&step_on === 1){
		$('#p1a_span').removeClass('p1_dn');
		$('#p1b_span').addClass('p1_dn');
		$('#p1c_span').addClass('p1_dn');
		$('#p1_step1').css('width','70%');
		$('#p1_step2').css('width','15%');
		$('#p1_step3').css('width','15%');
	}
	else if(width<768&&step_on === 2){
		$('#p1a_span').addClass('p1_dn');
		$('#p1b_span').removeClass('p1_dn');
		$('#p1c_span').addClass('p1_dn');
		$('#p1_step1').css('width','15%');
		$('#p1_step2').css('width','70%');
		$('#p1_step3').css('width','15%');
	}
	else if(width<768&&step_on === 3){
		$('#p1a_span').addClass('p1_dn');
		$('#p1b_span').addClass('p1_dn');
		$('#p1c_span').removeClass('p1_dn');
		$('#p1_step1').css('width','15%');
		$('#p1_step2').css('width','15%');
		$('#p1_step3').css('width','70%');
	}
	else{
		$('#p1a_span').removeClass('p1_dn');
		$('#p1b_span').removeClass('p1_dn');
		$('#p1c_span').removeClass('p1_dn');
	};
	$(window).resize(function(){
	    width = $(window).width();

		if(width<768&&step_on === 1){
			$('#p1a_span').removeClass('p1_dn');
			$('#p1b_span').addClass('p1_dn');
			$('#p1c_span').addClass('p1_dn');
			$('#p1_step1').css('width','70%');
			$('#p1_step2').css('width','15%');
			$('#p1_step3').css('width','15%');
		}
		else if(width<768&&step_on === 2){
			$('#p1a_span').addClass('p1_dn');
			$('#p1b_span').removeClass('p1_dn');
			$('#p1c_span').addClass('p1_dn');
			$('#p1_step1').css('width','15%');
			$('#p1_step2').css('width','70%');
			$('#p1_step3').css('width','15%');
		}
		else if(width<768&&step_on === 3){
			$('#p1a_span').addClass('p1_dn');
			$('#p1b_span').addClass('p1_dn');
			$('#p1c_span').removeClass('p1_dn');
			$('#p1_step1').css('width','15%');
			$('#p1_step2').css('width','15%');
			$('#p1_step3').css('width','70%');
		}
		else{
			$('#p1a_span').removeClass('p1_dn');
			$('#p1b_span').removeClass('p1_dn');
			$('#p1c_span').removeClass('p1_dn');
			$('#p1_step1').css('width','33%');
			$('#p1_step2').css('width','33%');
			$('#p1_step3').css('width','33%');
		};
	});
	$('#p1_step1').click(function(){
		step_on = 1;
		$('#p1_step1').removeClass('p1_opc');
		$('#p1_step2').addClass('p1_opc');
		$('#p1_step3').addClass('p1_opc');
		$('#p1a').removeClass('p1_dn');
		$('#p1b').addClass('p1_dn');
		$('#p1c').addClass('p1_dn');
		if(width<768){
			$('#p1a_span').removeClass('p1_dn');
			$('#p1b_span').addClass('p1_dn');
			$('#p1c_span').addClass('p1_dn');
			$('#p1_step1').css('width','70%');
			$('#p1_step2').css('width','15%');
			$('#p1_step3').css('width','15%');
		};
	});
	$('#p1_step2').click(function(){
		step_on = 2;

		$('#p1_step1').addClass('p1_opc');
		$('#p1_step2').removeClass('p1_opc');
		$('#p1_step3').addClass('p1_opc');
		$('#p1a').addClass('p1_dn');
		$('#p1b').removeClass('p1_dn');
		$('#p1c').addClass('p1_dn');
		if(width<768){
			$('#p1a_span').addClass('p1_dn');
			$('#p1b_span').removeClass('p1_dn');
			$('#p1c_span').addClass('p1_dn');
			$('#p1_step1').css('width','15%');
			$('#p1_step2').css('width','70%');
			$('#p1_step3').css('width','15%');
		};

	});
	$('#p1_step3').click(function(){
		step_on = 3;

		$('#p1_step1').addClass('p1_opc');
		$('#p1_step2').addClass('p1_opc');
		$('#p1_step3').removeClass('p1_opc');
		$('#p1a').addClass('p1_dn');
		$('#p1b').addClass('p1_dn');
		$('#p1c').removeClass('p1_dn');
		if(width<768){
			$('#p1a_span').addClass('p1_dn');
			$('#p1b_span').addClass('p1_dn');
			$('#p1c_span').removeClass('p1_dn');
			$('#p1_step1').css('width','15%');
			$('#p1_step2').css('width','15%');
			$('#p1_step3').css('width','70%');
		};

	});
}

var _empty = false;
var _phone = false;
var _pw = false;
function check_empty(a,b,c){
	console.log('run check_empty');
	var a = document.getElementById(a).value,
	b = document.getElementById(b),
	c = document.getElementById(c);
	
	if(a==''){
		$(b).addClass('p1_bgr');
		$(c).addClass('db');
		_empty = false;
	}
	else{
		$(b).removeClass('p1_bgr');
		$(c).removeClass('db');
		_empty = true;
	};
}

function check_phone(){
	console.log('run check_phone');
	var phone = document.getElementById("p1a_phone").value;
	var reg0 = /^1[0-9]{10}$/;
	var reg = /^(((13[0-9]{1})|15[0-9]|18[0-9]|177)+\d{8})$/;
	if(phone==''){
		$('#warning1a').removeClass('db');
		$('#warning1b').addClass('db');
		$('#p1a_phone').addClass('p1_bgr');
		_phone = false;
		
	}
	else if(phone!==''&!reg.exec(phone)){
		$('#warning1a').addClass('db');
		$('#warning1b').removeClass('db');
		$('#p1a_phone').addClass('p1_bgr');
		_phone = false;
	}
	else{
		$('#warning1a').removeClass('db');
		$('#warning1b').removeClass('db');
		$('#p1a_phone').removeClass('p1_bgr');
		_phone = true;

	};
}
function check_all_1(){
	check_phone();
	check_empty("p1a_vcode1","p1a_vcode1","warning4");
	check_empty("p1a_vcode2","p1a_vcode2","warning5");
	if(_empty&_phone){
		$("#p1a_button").attr("disabled",false);
		console.log(123);
	};
}
function check_pw(){
	console.log('run check_pw');
	var pw1 = document.getElementById("p1b_password").value,
	    pw2 = document.getElementById("p1b_password_repeat").value;
	
	if(pw1==''){
		$('#warning2').addClass('db');
		$('#p1b_password').addClass('p1_bgr');
	}
	else{
		$('#warning2').removeClass('db');
		$('#p1b_password').removeClass('p1_bgr');

	};

	if(pw1!==''&pw2!==pw1){
		$('#warning3').addClass('db');
		$('#p1b_password_repeat').addClass('p1_bgr');
		_pw = false;
	}
	else{
		$('#warning3').removeClass('db');
		$('#p1b_password_repeat').removeClass('p1_bgr');
		_pw = true;

	};
}
function check_all_2(){
	check_pw();
	if(_pw){
		$("#p1b_button").attr("disabled",false);
		console.log(223);
	};
}
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
/*
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

*/