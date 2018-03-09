$(function(){
	main();
});

var _road;
$(function road(){
	_road = window.setInterval(main,50000)
})

var main = function main(){
	window.setTimeout(step0,1000);
	window.setTimeout(step1,3000);
	window.setTimeout(step2,6000);

	window.setTimeout(step3,7000);
	window.setTimeout(br_in,8000);
	window.setTimeout(br_out,11000);
	window.setTimeout(step4,12000);

	window.setTimeout(step5,13000);
	window.setTimeout(br_in,14000);
	window.setTimeout(br_out,17000);
	window.setTimeout(step6,18000);

	window.setTimeout(step7,19000);
	window.setTimeout(br_in,20000);
	window.setTimeout(br_out,23000);
	window.setTimeout(step8,24000);

	window.setTimeout(step9,25000);//add 20170110
	window.setTimeout(br_in,26000);
	window.setTimeout(br_out,29000);
	window.setTimeout(step10,30000);

	window.setTimeout(step11,31000);
	window.setTimeout(br_in,32000);
	window.setTimeout(br_out,35000);
	window.setTimeout(step12,36000);//add 20170110

	window.setTimeout(step13,37000);
	window.setTimeout(br_in,38000);
	window.setTimeout(br_out,41000);
	window.setTimeout(step14,42000);//add 20170112

	window.setTimeout(hb,43000);
	window.setTimeout(step15,46000);

	window.setTimeout(reset,47000);
}

var _step0_bl;
function step0(){
	$('#font_b').animate({'opacity':'1'},1000);
	$('#font_c1').animate({'top':'-320px'},1000);
	var a = true;
	_step0_bl = window.setInterval(step0_bl,500);
	function step0_bl(){
		if(a){
			$('#s1_bl1').css({'display':'block'});
			$('#s1_bl2').css({'display':'none'});
		}
		else{
			$('#s1_bl1').css({'display':'none'});
			$('#s1_bl2').css({'display':'block'});
		};
		a = !a;
	};
}
	
function step1(){
	$('#s1_yearbox').animate({'top':'290px'},1000);
	$('#s1_year_p').animate({'top':'0px'},1000);
}

function step2(){
	$('#s1').animate({'opacity':'0'},500);//s1 out
	$('#s1_bg1').animate({'left':'-910px','opacity':'0'},1750);//s1_bg out
	$('#s1_bg2').animate({'left':'-910px','opacity':'0'},1600);
	$('#s1_bg3').animate({'left':'-910px','opacity':'0'},1450);
	$('#s1_bg4').animate({'left':'-910px','opacity':'0'},1300);
	$('#s1_bg5').animate({'left':'-910px','opacity':'0'},1150);
	$('#s1_bg6').animate({'left':'-910px','opacity':'0'},1000);
}

function step3(){
	$('#ny2').animate({'opacity':'1'},1000);
	$('#s2_w').animate({'opacity':'1'},2000);
}

function br_in(){
	$('#br').animate({'left':'660px'},1000);
	window.setTimeout(br_in_1,1000);
	window.setTimeout(br_in_2,1500);
	window.setTimeout(br_in_3,2000);
	window.setTimeout(br_in_1,2500);

	function br_in_1(){
		$('#br1').css({'display':'block'});
		$('#br2').css({'display':'none'});
		$('#br3').css({'display':'none'});
	}
	function br_in_2(){
		$('#br1').css({'display':'none'});
		$('#br2').css({'display':'block'});
		$('#br3').css({'display':'none'});
	}
	function br_in_3(){
		$('#br1').css({'display':'none'});
		$('#br2').css({'display':'none'});
		$('#br3').css({'display':'block'});
	}
}
function br_out(){
	$('#br').animate({'left':'910px'},1000);
}

function step4(){
	$('#s2_w').animate({'opacity':'0'},500);//s2 out
	$('#s2_bg1').animate({'top':'-420px','opacity':'0'},500);//s2_bg out
	$('#s2_bg2').animate({'top':'-420px','opacity':'0'},550);
	$('#s2_bg3').animate({'top':'-420px','opacity':'0'},600);
	$('#s2_bg4').animate({'top':'-420px','opacity':'0'},650);
	$('#s2_bg5').animate({'top':'-420px','opacity':'0'},700);
	$('#s2_bg6').animate({'top':'-420px','opacity':'0'},750);
	$('#s2_bg7').animate({'top':'-420px','opacity':'0'},800);
	$('#s2_bg8').animate({'top':'-420px','opacity':'0'},850);
	$('#s2_bg9').animate({'top':'-420px','opacity':'0'},900);
	$('#s2_bg10').animate({'top':'-420px','opacity':'0'},950);
}

function step5(){
	$('#s3_w').animate({'opacity':'1'},2000);
}

function step6(){
	$('#s3_w').animate({'opacity':'0'},500);//s3 out
	$('#s3_bg1').animate({'left':'910px','opacity':'0'},500);//s3_bg out
	$('#s3_bg2').animate({'left':'910px','opacity':'0'},650);
	$('#s3_bg3').animate({'left':'910px','opacity':'0'},800);
	$('#s3_bg4').animate({'left':'910px','opacity':'0'},950);
	$('#s3_bg5').animate({'left':'910px','opacity':'0'},1100);
	$('#s3_bg6').animate({'left':'910px','opacity':'0'},1250);

}

function step7(){
	$('#s4_w').animate({'opacity':'1'},2000);
}

function step8(){
	$('#s4_w').animate({'opacity':'0'},500);//s4 out	
	$('#s4_bg1').animate({'top':'420px','opacity':'0'},500);//s4_bg out
	$('#s4_bg2').animate({'top':'420px','opacity':'0'},550);
	$('#s4_bg3').animate({'top':'420px','opacity':'0'},600);
	$('#s4_bg4').animate({'top':'420px','opacity':'0'},650);
	$('#s4_bg5').animate({'top':'420px','opacity':'0'},700);
	$('#s4_bg6').animate({'top':'420px','opacity':'0'},750);
	$('#s4_bg7').animate({'top':'420px','opacity':'0'},800);
	$('#s4_bg8').animate({'top':'420px','opacity':'0'},850);
	$('#s4_bg9').animate({'top':'420px','opacity':'0'},900);
	$('#s4_bg10').animate({'top':'420px','opacity':'0'},950);

}


function step9(){
	$('#s5_w').animate({'opacity':'1'},2000);
}

function step10(){
	$('#s5_w').animate({'opacity':'0'},500);//s5 out
	$('#s5_bg1').animate({'left':'910px','opacity':'0'},500);//s5_bg out
	$('#s5_bg2').animate({'left':'-910px','opacity':'0'},650);
	$('#s5_bg3').animate({'left':'910px','opacity':'0'},800);
	$('#s5_bg4').animate({'left':'-910px','opacity':'0'},950);
	$('#s5_bg5').animate({'left':'910px','opacity':'0'},1100);
	$('#s5_bg6').animate({'left':'-910px','opacity':'0'},1250);

}

function step11(){
	$('#s6_w').animate({'opacity':'1'},2000);
}

function step12(){
	$('#s6_w').animate({'opacity':'0'},500);//s6 out	
	$('#s6_bg1').animate({'top':'420px','opacity':'0'},500);//s6_bg out
	$('#s6_bg2').animate({'top':'-420px','opacity':'0'},550);
	$('#s6_bg3').animate({'top':'420px','opacity':'0'},600);
	$('#s6_bg4').animate({'top':'-420px','opacity':'0'},650);
	$('#s6_bg5').animate({'top':'420px','opacity':'0'},700);
	$('#s6_bg6').animate({'top':'-420px','opacity':'0'},750);
	$('#s6_bg7').animate({'top':'420px','opacity':'0'},800);
	$('#s6_bg8').animate({'top':'-420px','opacity':'0'},850);
	$('#s6_bg9').animate({'top':'420px','opacity':'0'},900);
	$('#s6_bg10').animate({'top':'-420px','opacity':'0'},950);

}

function step13(){
	$('#s7_w').animate({'opacity':'1'},2000);
}

function step14(){
	$('#s1').css({'z-index':'0','opacity':'1'});//s1 in
	$('#s1_bgbox').css({'z-index':'-1','opacity':'1'});
	$('#s1_bg1').animate({'left':'0px','opacity':'1'},5);//s1_bg in
	$('#s1_bg2').animate({'left':'0px','opacity':'1'},5);
	$('#s1_bg3').animate({'left':'0px','opacity':'1'},5);
	$('#s1_bg4').animate({'left':'0px','opacity':'1'},5);
	$('#s1_bg5').animate({'left':'0px','opacity':'1'},5);
	$('#s1_bg6').animate({'left':'0px','opacity':'1'},5);

	$('#s7_w').animate({'opacity':'0'},500);//s7 out	
	$('#s7_bg1').animate({'left':'910px','opacity':'0'},500);//s7_bg out
	$('#s7_bg2').animate({'left':'910px','opacity':'0'},650);
	$('#s7_bg3').animate({'left':'910px','opacity':'0'},700);
	$('#s7_bg4').animate({'left':'910px','opacity':'0'},750);
	$('#s7_bg5').animate({'left':'910px','opacity':'0'},800);
	$('#s7_bg6').animate({'left':'910px','opacity':'0'},850);
	$('#s7_bg7').animate({'left':'910px','opacity':'0'},900);
	$('#s7_bg8').animate({'left':'910px','opacity':'0'},950);
	$('#s7_bg9').animate({'left':'910px','opacity':'0'},1000);
	$('#s7_bg10').animate({'left':'910px','opacity':'0'},1050);

}

function hb(){
	window.setTimeout(hb1,500);
	window.setTimeout(hb2,750);
	window.setTimeout(hb3,1000);
	window.setTimeout(hb4,1250);
	window.setTimeout(hb5,1500);

	function hb1(){
		$('#hb1').fadeIn(500).fadeOut(500);
	}
	function hb2(){
		$('#hb2').fadeIn(500).fadeOut(500);
	}
	function hb3(){
		$('#hb3').fadeIn(500).fadeOut(500);
	}
	function hb4(){
		$('#hb4').fadeIn(500).fadeOut(500);
	}
	function hb5(){
		$('#hb5').fadeIn(500);
	}
}

function step15(){
	$('#font_b').animate({'opacity':'0'},1000);
	$('#font_c1').animate({'top':'0px'},1000);
	$('#ny2').animate({'opacity':'0'},1000);
}

function reset(){
	$('#hb5').fadeOut(1000);

	window.clearInterval(_step0_bl);

	$('#s1').css({'z-index':'13','opacity':'1'});
	$('#s1_bgbox').css({'z-index':'12','opacity':'1'});

	$('#s1_yearbox').css({'top':'323px'});
	$('#s1_year_p').css({'top':'-33px'});

	$('#s2_w').css({'opacity':'0'});
	$('#s2_bg1').css({'top':'0px','opacity':'1'});
	$('#s2_bg2').css({'top':'0px','opacity':'1'});
	$('#s2_bg3').css({'top':'0px','opacity':'1'});
	$('#s2_bg4').css({'top':'0px','opacity':'1'});
	$('#s2_bg5').css({'top':'0px','opacity':'1'});
	$('#s2_bg6').css({'top':'0px','opacity':'1'});
	$('#s2_bg7').css({'top':'0px','opacity':'1'});
	$('#s2_bg8').css({'top':'0px','opacity':'1'});
	$('#s2_bg9').css({'top':'0px','opacity':'1'});
	$('#s2_bg10').css({'top':'0px','opacity':'1'});

	$('#s3_w').css({'opacity':'0'});
	$('#s3_bg1').css({'left':'0px','opacity':'1'});
	$('#s3_bg2').css({'left':'0px','opacity':'1'});
	$('#s3_bg3').css({'left':'0px','opacity':'1'});
	$('#s3_bg4').css({'left':'0px','opacity':'1'});
	$('#s3_bg5').css({'left':'0px','opacity':'1'});
	$('#s3_bg6').css({'left':'0px','opacity':'1'});

	$('#s4_w').css({'opacity':'0'});	
	$('#s4_bg1').css({'top':'0px','opacity':'1'});
	$('#s4_bg2').css({'top':'0px','opacity':'1'});
	$('#s4_bg3').css({'top':'0px','opacity':'1'});
	$('#s4_bg4').css({'top':'0px','opacity':'1'});
	$('#s4_bg5').css({'top':'0px','opacity':'1'});
	$('#s4_bg6').css({'top':'0px','opacity':'1'});
	$('#s4_bg7').css({'top':'0px','opacity':'1'});
	$('#s4_bg8').css({'top':'0px','opacity':'1'});
	$('#s4_bg9').css({'top':'0px','opacity':'1'});
	$('#s4_bg10').css({'top':'0px','opacity':'1'});

	$('#s5_w').css({'opacity':'0'});
	$('#s5_bg1').css({'left':'0px','opacity':'1'});
	$('#s5_bg2').css({'left':'0px','opacity':'1'});
	$('#s5_bg3').css({'left':'0px','opacity':'1'});
	$('#s5_bg4').css({'left':'0px','opacity':'1'});
	$('#s5_bg5').css({'left':'0px','opacity':'1'});
	$('#s5_bg6').css({'left':'0px','opacity':'1'});

	$('#s6_w').css({'opacity':'0'});	
	$('#s6_bg1').css({'top':'0px','opacity':'1'});
	$('#s6_bg2').css({'top':'0px','opacity':'1'});
	$('#s6_bg3').css({'top':'0px','opacity':'1'});
	$('#s6_bg4').css({'top':'0px','opacity':'1'});
	$('#s6_bg5').css({'top':'0px','opacity':'1'});
	$('#s6_bg6').css({'top':'0px','opacity':'1'});
	$('#s6_bg7').css({'top':'0px','opacity':'1'});
	$('#s6_bg8').css({'top':'0px','opacity':'1'});
	$('#s6_bg9').css({'top':'0px','opacity':'1'});
	$('#s6_bg10').css({'top':'0px','opacity':'1'});

		$('#s7_w').css({'opacity':'0'});	
	$('#s7_bg1').css({'left':'0px','opacity':'1'});
	$('#s7_bg2').css({'left':'91px','opacity':'1'});
	$('#s7_bg3').css({'left':'182px','opacity':'1'});
	$('#s7_bg4').css({'left':'273px','opacity':'1'});
	$('#s7_bg5').css({'left':'364px','opacity':'1'});
	$('#s7_bg6').css({'left':'455px','opacity':'1'});
	$('#s7_bg7').css({'left':'546px','opacity':'1'});
	$('#s7_bg8').css({'left':'637px','opacity':'1'});
	$('#s7_bg9').css({'left':'728px','opacity':'1'});
	$('#s7_bg10').css({'left':'819px','opacity':'1'});
}

/* done */