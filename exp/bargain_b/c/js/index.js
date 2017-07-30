$(function() {
    //check_back();
    //bodycss_b();
    pos();
    
    tips();
    tips2();
    tips_re();
    bar();
    area();
    
    shop_popups();
    
    myhead();

    gotop();
    goplay();
    slidebox();
    copys();
    read_cookies();
    //page_pos();
    //dnlm();
    pos();

});

// function isadmin(){
//     var url = location.href;
//     var _isadmin_1 = url.indexOf('jego1701');
//     var _isadmin_2 = url.indexOf('sample_jego');
//     if(_isadmin_1 > 0 || _isadmin_1 >0){
//         //console.log('hi admin');
//     }
// }

/*
function dnlm(){
    var url = location.href;
    var index1 = url.split('html')[1];

    if(index1!=='#shop1_popup'&&index1!=='#shop2_popup'&&index1!=='#shop3_popup'&&index1!=='#shop4_popup'&&index1!=='#shop5_popup'&&index1!=='#shop6_popup'&&index1!=='#shop7_popup'&&index1!=='#shop8_popup'&&index1!=='#shop9_popup'&&index1!=='#shop10_popup'){
        Cookies.set('page', 'index', { expires: 0.2 });

        $('.fontbox').removeClass('db').addClass('dn');
        $('.shop_popups').removeClass('db').addClass('dn');
        $('.mainbox').removeClass('dn').addClass('db');
        $('.footer0').removeClass('dn').addClass('db');

        var _index_pos = Cookies.get('index_pos');
        $("html,body").animate({ scrollTop: _index_pos }, 1);
    }
}

function check_back(){
    var detectBack = {

        initialize: function() {
            //监听hashchange事件
            window.addEventListener('hashchange', function() {

                //为当前导航页附加一个tag
                this.history.replaceState('hasHash', '', '');

            }, false);

            window.addEventListener('popstate', function(e) {

                if (e.state) {
                    //侦测是用户触发的后退操作, dosomething
                    //这里刷新当前url
                    Cookies.set('page', 'index', { expires: 0.2 });

                    //this.location.reload();
                }
            }, false);
        }
    }

    detectBack.initialize();
}
*/
function read_cookies() {
    var cookie_now = Cookies.get('sele');
    var cookie_page = Cookies.get('page');
    var cookie_visited = Cookies.get('visited');
    var cookie_index_pos = Cookies.get('index_pos');

    ////console.log(cookie_now);
    ////console.log(cookie_page);
    ////console.log(cookie_visited);
    console.log('cookie_index_pos' + cookie_index_pos);
}
function pos(){
    var mypos = Cookies.get('index_pos');
    console.log('mypos'+mypos);
    $("html,body").animate({ scrollTop: mypos }, 1);
    window.setTimeout(function(){
        myhead();
    },10); 
}
/*
function page_pos(){
    var _index_pos = Cookies.get('index_pos');
    $("html,body").animate({ scrollTop: _index_pos }, 1);

}
*/
function shop_popups() {
    function shop_popups_ox(popup, o, x, pages, pos) {
        $(o).click(function() {

            var _index = document.getElementById('firstdiv'),
                _index_pos0 = _index.getBoundingClientRect().top,
                _index_pos = -_index_pos0;

            console.log('im now'+_index_pos);
            Cookies.set('index_pos', _index_pos, { expires: 0.2 });

            $('.fontbox').removeClass('dn').addClass('db');
            $(popup).removeClass('dn').addClass('db');
            $('.mainbox').removeClass('db').addClass('dn');
            $('.footer0').removeClass('db').addClass('dn');
            $("html,body").animate({ scrollTop: 0 }, 1);
            Cookies.set('page', pages, { expires: 0.2 });
            Cookies.set('visited', 'yes', { expires: 0.2 });
        });
        $(x).click(function() {
            Cookies.set('page', 'index', { expires: 0.2 });

            $('.fontbox').removeClass('db').addClass('dn');
            $(popup).removeClass('db').addClass('dn');
            $('.mainbox').removeClass('dn').addClass('db');
            $('.footer0').removeClass('db').addClass('db');
        })
    };

    shop_popups_ox('.shop1_popup', '.shop_p1', '.fanhui', 'page_1', 'shop1pos');
    shop_popups_ox('.shop2_popup', '.shop_p2', '.fanhui', 'page_2', 'shop2pos');
    shop_popups_ox('.shop3_popup', '.shop_p3', '.fanhui', 'page_3', 'shop3pos');
    shop_popups_ox('.shop4_popup', '.shop_p4', '.fanhui', 'page_4', 'shop4pos');
    shop_popups_ox('.shop5_popup', '.shop_p5', '.fanhui', 'page_5', 'shop5pos');
    shop_popups_ox('.shop6_popup', '.shop_p6', '.fanhui', 'page_6', 'shop6pos');
    //shop_popups_ox('.shop7_popup','.shop_p7','.fanhui');
    shop_popups_ox('.shop8_popup', '.shop_p8', '.fanhui', 'page_8', 'shop8pos');
    shop_popups_ox('.shop9_popup', '.shop_p9', '.fanhui', 'page_9', 'shop9pos');
    shop_popups_ox('.shop10_popup', '.shop_p10', '.fanhui', 'page_10', 'shop10pos');

    function single_o(popup) {
        $('.fontbox').removeClass('dn').addClass('db');
        $(popup).removeClass('dn').addClass('db');
        $('.mainbox').removeClass('db').addClass('dn');
        $('.footer0').removeClass('db').addClass('dn');
        $("html,body").animate({ scrollTop: 0 }, 1);
        Cookies.set('page', 'index', { expires: 0.2 });
        window.setTimeout(function(){
            $("html,body").animate({ scrollTop: 0 }, 1);
        },500); 
        ////console.log(popup);

    };

    function single_x() {
        Cookies.set('page', 'index', { expires: 0.2 });

        $('.fontbox').removeClass('db').addClass('dn');
        $('.shop_popups').removeClass('db').addClass('dn');
        $('.mainbox').removeClass('dn').addClass('db');
        $('.footer0').removeClass('dn').addClass('db');
        
        // var _index_pos = Cookies.get('index_pos');
        // //console.log('im'+ _index_pos);
        // $("html,body").animate({ scrollTop: _index_pos }, 1);
    };


    //window.onhashchange = funcRef;
    changes();

    $(window).bind('hashchange', function() {
        console.log('change');
        changes();
    });

    function changes() {
        var url = location.href;

        var single_id = '';
        single_id = url.split('#')[1];
        ////console.log(single_id);
        ////console.log(single_id);
        if (single_id == 'shop1_popup') {
            single_o('.shop1_popup');
        } else if (single_id == 'shop2_popup') {
            single_o('.shop2_popup');
        } else if (single_id == 'shop3_popup') {
            single_o('.shop3_popup');
        } else if (single_id == 'shop4_popup') {
            single_o('.shop4_popup');
        } else if (single_id == 'shop5_popup') {
            single_o('.shop5_popup');
        } else if (single_id == 'shop6_popup') {
            single_o('.shop6_popup');
        } else if (single_id == 'shop8_popup') {
            single_o('.shop8_popup');
        } else if (single_id == 'shop9_popup') {
            single_o('.shop9_popup');
        } else if (single_id == 'shop10_popup') {
            single_o('.shop10_popup');
        } 
        /*
        else if (single_id == 'index.html#shop1_popup') {
            single_o('.shop1_popup');
        } else if (single_id == 'index.html#shop2_popup') {
            single_o('.shop2_popup');
        } else if (single_id == 'index.html#shop3_popup') {
            single_o('.shop3_popup');
        } else if (single_id == 'index.html#shop4_popup') {
            single_o('.shop4_popup');
        } else if (single_id == 'index.html#shop5_popup') {
            single_o('.shop5_popup');
        } else if (single_id == 'index.html#shop6_popup') {
            single_o('.shop6_popup');
        } else if (single_id == 'index.html#shop8_popup') {
            single_o('.shop8_popup');
        } else if (single_id == 'index.html#shop9_popup') {
            single_o('.shop9_popup');
        } else if (single_id == 'index.html#shop10_popup') {
            single_o('.shop10_popup');
        }*/
        else {
            //console.log('mememe');
            single_x();
            pos();
        };
    }



}

var _area_able = true,
    _bar_able = true;

var _area_close = true;

var touchmove_able = true;

var head0 = document.getElementById('head0'),
    head0_pos = 0//head0.getBoundingClientRect().top; // <=0
function myhead() {
    if(touchmove_able){
        head0 = document.getElementById('head0'),
        head0_pos = head0.getBoundingClientRect().top; // <=0
        //console.log('i did' + head0_pos);
        if (head0_pos <= -64 && _area_close) {
            myhead_a();

        } else {
            myhead_b();
        };
    };
};

function myhead_a() {
    $('#headbox_abs').css({ 'z-index':'-1' ,'opacity': '0'});
    $('#headbox_fix').css({ 'z-index':'9' ,'opacity': '1'});
    //$('.barboxbox').css({ 'top': '45px', 'position': 'fixed' });
    //$('#body1').css('color','green');
    $('.areabox').css({ 'top': '40px' });
}

function myhead_b() {
    $('#headbox_abs').css({ 'z-index':'9' ,'opacity': '1' });
    $('#headbox_fix').css({ 'z-index':'-1' ,'opacity': '0' });
    //$('.barboxbox').css({ 'top': '107px', 'position': 'absolute' });
    //$('#body1').css('color','blue');
    var myhead_b_pos = head0_pos + 108;
    if(myhead_b_pos>108){
        myhead_b_pos = 108;
    };
    $('.areabox').css({ 'top': myhead_b_pos + 'px' });
    //$('.areabox').css({ 'top': '108px' });
}

function tips() {
    var address = window.location.href;
    var cookie_visited = Cookies.get('visited');

    touch.on('.main', 'touchmove', function() {
        myhead();
        setTimeout(function() {
            myhead();
        }, 200);
        setTimeout(function() {
            myhead();
        }, 325);
        setTimeout(function() {
            myhead();
        }, 500);
        setTimeout(function() {
            myhead();
        }, 750);
        setTimeout(function() {
            myhead();
        }, 1000);
        setTimeout(function() {
            myhead();
        }, 1250);

    });

    // var head_interval;
    // $(function() {
    //      head_interval = window.setInterval(myhead ,100);
    // });
    // touch.on('.main', 'touchstart', function() {
    //     head_interval = window.setInterval(myhead ,100)
    // });

    // touch.on('.main', 'touchend', function() {
    //     window.clearInterval(head_interval);
    // });

    // function myhead() {
    //     // var sct = $(window).scrollTop(); // <=0
    //     // //console.log('it is' + sct);
    //     // if (sct >= 64) {
    //     //     $('.headbox').css({ 'top': '0px','position': 'fixed', 'z-index': '999'});
    //     //     $('.areabox').css({ 'top': '40px' });
    //     //     //console.log(555555);
    //     // } else {
    //     //     $('.headbox').css({ 'top': '64px', 'position': 'absolute'});
    //     //     $('.areabox').css({ 'top': head0_pos + 108 + 'px' });
    //     //     //console.log(6666666);

    //     // };
    //     var head0 = document.getElementById('head0'),
    //         head0_pos = head0.getBoundingClientRect().top; // <=0
    //     //console.log('i did' + head0_pos);
    //     $('#body1').css('color','red');

    //     if (head0_pos <= -64) {
    //     $('#body1').css('color','green');
    //         /*$('.barboxbox').css({ 'top': '45px', 'position': 'absolute''fixed' });*/
    //         $('.headbox').addClass('headbox2');
    //         $('.areabox').css({ 'top': '40px' });
    //         //console.log(555555);
    //     } else {
    //         $('#body1').css('color','blue');

    //         $('.headbox').removeClass('headbox2');
    //         /*$('.barboxbox').css({ 'top': '107px', 'position': 'absolute' });*/
    //         $('.areabox').css({ 'top': head0_pos + 108 + 'px' });
    //         //console.log(6666666);

    //     };
        
        
    // };
    myhead();

    //if ( /*cookie_visited !== 'yes' &&*/ address !== 'https://wow-j.com/c/jego1701' && address !== 'https://wow-j.com/c/sample_jego') {
        /*$('.head0').animate({ 'height': '67px' }, 1);
        $('.head0_animate').animate({ 'height': '60px' }, 1);
        $('.areabox').animate({ 'top': '105px' }, 1);
        $('.barboxbox').animate({ 'top': '105px' }, 1);
        $('.playjump').animate({ 'margin-top': '105px' }, 1);
        $('.head0_tips').removeClass('dn').addClass('db');*/


        // touch.on('.main', 'swipe', function() {
        //     var head = document.getElementById('head'),
        //         head_pos = head.getBoundingClientRect().top; // <=0
        //     // ////console.log(123);
        //     if (head_pos >= 0) {
        //             $('.barboxbox').animate({ 'top': '42px' }, 750);
        //             $('.areabox').animate({ 'top': '42px' }, 750);

        //         //window.setTimeout(function() {
        //             $('.head0').animate({ 'height': '0px' }, 750);
        //             $('.head0_animate').animate({ 'height': '0px' }, 750);
        //             $('.head0_tips').removeClass('db').addClass('dn');
        //             $('.areabox').animate({ 'top': '42px' }, 750);
        //             $('.barboxbox').animate({ 'top': '42px' }, 750);
        //             $('.playjump').animate({ 'margin-top': '45px' }, 750);
        //         //}, 1);
        //     };
    //};
}

function tips_re() {
    touch.on('.main', 'swipedown', function() {
        var head = document.getElementById('firstdiv'),
            head_pos = head.getBoundingClientRect().top; // <=0
        if (head_pos == 0) {
            Cookies.set('visited', 'maybe', { expires: 0.2 });
            tips();
        };
    })
}

function tips2() {
    var address = window.location.href;
    var cookie_visited = Cookies.get('visited');

    if (cookie_visited !== 'yes' && address !== 'https://wow-j.com/c/jego1701' && address !== 'https://wow-j.com/c/sample_jego') {

        $('.tips2').removeClass('dn').addClass('db');

        $('.tips2_x').click(function() {
            window.setTimeout(function() {
                $('.tips2').removeClass('db').addClass('dn')
            }, 200);
        });

        window.setTimeout(function() {
            $('.tips2').removeClass('db').addClass('dn')
        }, 10000);
    }
}

function gotop() {
    $('.gotop').click(function() {
        $("html,body").animate({ scrollTop: 0 }, 1000);
        Cookies.set('visited', 'maybe', { expires: 0.2 });
        tips();
        gotop_hide();
        myhead_a();
        window.setTimeout(function(){
            myhead_b();
            $('.areabox').css({ 'top': '108px'});
        },1050);
    });

    touch.on('.mainbox', 'swipedown', function() {
        gotop_hide();
    });
    touch.on('.mainbox', 'swipeup', function() {
        if(_area_close){
            gotop_show();
        };
    });

    function gotop_hide() {
        $('.gotop').animate({ 'bottom': '-50px' }, 100);
    };

    function gotop_show() {
        $('.gotop').animate({ 'bottom': '-5px' }, 100);
    };
}

function goplay() {
    $('.head_play').click(function() {
        var play_pos = $('.play_h').offset().top,
            play_pos2 = play_pos - 50;
        $("html,body").animate({ scrollTop: play_pos2 }, 1000);
        myhead_a();
        window.setTimeout(function(){
            myhead_a();
        },800);
    });
}

function search(a) {
    var _a = $(a);
    $('.play').animate({ 'top': '1000px' });
    $('.shop_p').animate({ 'opacity': '0' }, 500);
    window.setTimeout(function() {
        $('.play').animate({ 'top': '0px' }, 500);
        dn('.shop_p');
        db(_a);
        $(_a).animate({ 'opacity': '1' }, 500)
    }, 500);
}

function db(a) {
    $(a).removeClass('dn').addClass('db');
}

function dn(a) {
    $(a).removeClass('db').addClass('dn');
}

/*
function search_area(a){
    var _a = $(a);
    $('.play').animate({'top':'1000px'});
    $('.shop_p').animate({'opacity':'0'},500);
    window.setTimeout(function(){
        $('.play').animate({'top':'0px'},500);
        dn_area('.shop_p');
        db_area(_a);
        $(_a).animate({'opacity':'1'},500)
    },500);
}

function search_bar(a){
    var _a = $(a);
    $('.play').animate({'top':'1000px'});
    $('.shop_p').animate({'opacity':'0'},500);
    window.setTimeout(function(){
        $('.play').animate({'top':'0px'},500);
        dn_bar('.shop_p');
        db_bar(_a);
        $(_a).animate({'opacity':'1'},500)
    },500);
}

function db_area(a){
    $(a).children().addClass('shop_area_now');
    $(a).has('.shop_bar_now').removeClass('dn').addClass('db');
    ////console.log('db_area');
}
function dn_area(a){
    $(a).children().removeClass('shop_area_now');
    $(a).removeClass('db').addClass('dn');
    ////console.log('dn_area');

}

function db_bar(a){
    $(a).children().addClass('shop_bar_now');
    $(a).has('.shop_area_now').removeClass('dn').addClass('db');
    ////console.log('db_bar');

}
function dn_bar(a){
    $(a).children().removeClass('shop_bar_now');
    $(a).removeClass('db').addClass('dn');
    ////console.log('dn_bar');

}
*/
function tg_show() {
    $('.tg').fadeOut(500);

    window.setTimeout(function() {
        $('.tg').fadeIn(500)
    }, 500);
    ////console.log('heihei');
    $('.tg2').fadeOut(500);
};

function tg2_show() {
    $('.tg2').fadeOut(500);

    window.setTimeout(function() {
        $('.tg2').fadeIn(500);
    }, 500);
    ////console.log('heihei');
    $('.tg').fadeOut(500);
};

function bar() {
    touch.on('.bar', 'swipe', function() {
        var bar = document.getElementById('bar'),
            bar_pos = bar.getBoundingClientRect().left, // <=0
            width = $(window).width(),
            l = 630 - width + bar_pos;
        if (bar_pos > -20) {
            $('.bar_left').animate({ 'opacity': '0', 'z-index': '-1' }, 1);
            $('.bar_right').animate({ 'opacity': '0.8', 'z-index': '3' }, 1);
            hide();
        } else if (l < 20) {
            $('.bar_left').animate({ 'opacity': '0.8', 'z-index': '3' }, 1);
            $('.bar_right').animate({ 'opacity': '0', 'z-index': '-1' }, 1)
            hide();
        } else {
            $('.bar_left').animate({ 'opacity': '0.8', 'z-index': '3' });
            $('.bar_right').animate({ 'opacity': '0.8', 'z-index': '3' });
            hide();
        }
    });

    function hide() {
        window.setTimeout(function() {
            $('.bar_left').animate({ 'opacity': '0', 'z-index': '-1' });
            $('.bar_right').animate({ 'opacity': '0', 'z-index': '-1' })
        }, 3000);
    }

    /*********************************************************/

    var cookie_now = Cookies.get('sele');

    if (cookie_now == 'bar_all') {
        search('.shop_p')
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_all').addClass('bar_p--selected');
        area_able();
        tg_show();
    } else if (cookie_now == 'bar_hzp') {
        search('.shop_hzp');
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_hzp').addClass('bar_p--selected');
        area_disable();
        tg2_show();
    } else if (cookie_now == 'bar_ryp') {
        search('.shop_ryp');
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_ryp').addClass('bar_p--selected');
        area_disable();
        tg2_show();
    } else if (cookie_now == 'bar_bjp') {
        search('.shop_bjp');
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_bjp').addClass('bar_p--selected');
        area_disable();
        tg2_show();
    } else if (cookie_now == 'bar_bjp') {
        search('.shop_dq');
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_dq').addClass('bar_p--selected');
        area_disable();
        tg2_show();
    } else if (cookie_now == 'bar_fz') {
        search('.shop_fz');
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_fz').addClass('bar_p--selected');
        area_disable();
        tg2_show();
    } else if (cookie_now == 'bar_td') {
        search('.shop_td');
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_td').addClass('bar_p--selected');
        area_disable();
        tg2_show();
    } else if (cookie_now == 'bar_cy') {
        search('.shop_cy');
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_cy').addClass('bar_p--selected');
        area_disable();
        tg2_show();
    } else if (cookie_now == 'bar_cy') {
        search('.shop_mr');
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_mr').addClass('bar_p--selected');
        area_disable();
        tg2_show();
    } else if (cookie_now == 'bar_jt') {
        search('.shop_jt');
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_jt').addClass('bar_p--selected');
        area_disable();
        tg2_show();
    };
    /**********************************************************/

    $('.bar_all').click(function() {
        search('.shop_p')
        $("html,body").animate({ scrollTop: 0 }, 1000);
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_all').addClass('bar_p--selected');
        area_able();
        tg_show();
        Cookies.set('sele', 'bar_all', { expires: 0.2 });
        myhead_b();

    });

    $('.bar_hzp').click(function() {
        search('.shop_hzp');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_hzp').addClass('bar_p--selected');
        area_disable();
        tg2_show();
        Cookies.set('sele', 'bar_hzp', { expires: 0.2 });
        myhead_b();

    });


    $('.bar_ryp').click(function() {
        search('.shop_ryp');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_ryp').addClass('bar_p--selected');
        area_disable();
        tg2_show();
        Cookies.set('sele', 'bar_ryp', { expires: 0.2 });
        myhead_b();

    });
    $('.bar_bjp').click(function() {
        search('.shop_bjp');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_bjp').addClass('bar_p--selected');
        area_disable();
        tg2_show();
        Cookies.set('sele', 'bar_bjp', { expires: 0.2 });
        myhead_b();

    });
    $('.bar_dq').click(function() {
        search('.shop_dq');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_dq').addClass('bar_p--selected');
        area_disable();
        tg2_show();
        Cookies.set('sele', 'bar_dq', { expires: 0.2 });
        myhead_b();

    });
    $('.bar_fz').click(function() {
        search('.shop_fz');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_fz').addClass('bar_p--selected');
        area_disable();
        tg2_show();
        Cookies.set('sele', 'bar_fz', { expires: 0.2 });
        myhead_b();

    });
    $('.bar_td').click(function() {
        search('.shop_td');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_td').addClass('bar_p--selected');
        area_disable();
        tg2_show();
        Cookies.set('sele', 'bar_td', { expires: 0.2 });
        myhead_b();

    });
    $('.bar_cy').click(function() {
        search('.shop_cy');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_cy').addClass('bar_p--selected');
        area_disable();
        tg2_show();
        Cookies.set('sele', 'bar_cy', { expires: 0.2 });
        myhead_b();

    });
    $('.bar_mr').click(function() {
        search('.shop_mr');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_mr').addClass('bar_p--selected');
        area_disable();
        tg2_show();
        Cookies.set('sele', 'bar_mr', { expires: 0.2 });
        myhead_b();

    });
    $('.bar_jt').click(function() {
        search('.shop_jt');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        $('.bar_p--selected').removeClass('bar_p--selected');
        $('.bar_jt').addClass('bar_p--selected');
        area_disable();
        tg2_show();
        Cookies.set('sele', 'bar_jt', { expires: 0.2 });
        myhead_b();

    });
}

function bar_disable() {
    $('.barboxbox').removeClass('db').addClass('dn');
    $('.head0_placeholder').animate({ 'height': '45px' });
    //$("html,body").animate({ scrollTop: 0 }, 1000);
    _bar_able = false;
}

function bar_able() {
    $('.barboxbox').removeClass('dn').addClass('db');
    search('.shop_p')
    //$("html,body").animate({ scrollTop: 0 }, 1000);
    $('.bar_p--selected').removeClass('bar_p--selected');
    $('.bar_index').addClass('bar_p--selected');
    $('.head0_placeholder').animate({ 'height': '210px' });
    _bar_able = true;
}



function area_disable() {
    $('.head_area').addClass('area_gray');
    $('.head_area span').removeClass('db').addClass('dn');
    $('.head_area_index').removeClass('dn').addClass('db');
    //$("html,body").animate({ scrollTop: 0 }, 1000);
    _area_able = false;
}

function area_able() {
    $('.head_area').removeClass('area_gray');
    //$("html,body").animate({ scrollTop: 0 }, 1000);
    _area_able = true;
}

function bodycss_a(){
    $('body').css({'overflow': 'hidden'});
    movestop();
}
function bodycss_b(){
    $('body').css({'overflow': 'scroll'});
    moveavail();
}
function dangerous(){
    
}

function movestop(){
    // document.body.addEventListener('touchmove', function (event){
    //     event.preventDefault();
    // }, false);
    $("#body1").bind("touchmove",function(event){event.preventDefault();})//code});
    touchmove_able = false;
    //console.log('now you can not ');
}
function moveavail(){
    // document.body.removeEventListener('touchmove', function (event){
    //     event.preventDefault();
    // }, false);
    $("#body1").unbind("touchmove");
    touchmove_able = true;
    //console.log('and now you can ');
}
function area() {
    var area_ox = true;
    $('.head_area').click(function() {
        if (_area_able) {
            if (area_ox) {
                _area_close = false;
                $('.area').removeClass('dn').addClass('db');
                $('.shadow').removeClass('dn').addClass('db');
                $('.head_area_back').removeClass('dn').addClass('db');
                $('.head_h').removeClass('db').addClass('dn');
                $('.head_play').removeClass('db').addClass('dn');
                $('.head_close').removeClass('dn').addClass('db');

                $('.headbox').css({'background': 'url(0001/img/b/head2.jpg)','background-size': '100% 100%'});

                bodycss_a();
                area_ox = false;

            } else {

                $('.area').removeClass('db').addClass('dn');
                bodycss_b();
                $('.head_area_back').removeClass('db').addClass('dn');
                _area_close = true;

                $('.head_h').removeClass('dn').addClass('db');
                $('.head_play').removeClass('dn').addClass('db');
                $('.head_close').removeClass('db').addClass('dn');
                $('.headbox').css({'background': 'url(0001/img/b/head1.png)','background-size': '100% 100%'});

                area_ox = true;
                $('.shadow').removeClass('db').addClass('dn');
                // setTimeout(function() {
                //     myhead();
                // }, 1000);
                /*window.setTimeout(function() {
                    $('.shadow').removeClass('db').addClass('dn');
                }, 1);*/
            };
            //area_ox = !area_ox;
        } else {
            return _area_able;
        };
    });


    function area_menu_x() {
        bodycss_b();
        $('.area').removeClass('db').addClass('dn');
        $('.head_h').removeClass('dn').addClass('db');
        $('.head_play').removeClass('dn').addClass('db');
        $('.head_close').removeClass('db').addClass('dn');
        $('.headbox').css({'background': 'url(0001/img/b/head1.png)','background-size': '100% 100%'});
        setTimeout(function() {
            myhead_b();
            $('.areabox').css({ 'top': '108px' });

        }, 500);
        window.setTimeout(function() {
            $('.shadow').removeClass('db').addClass('dn');
        }, 300);
        _area_close = true;

        area_ox = true;
    };

    function area_menu_x2() {
        bodycss_b();
        $('.area').removeClass('db').addClass('dn');
        $('.head_h').removeClass('dn').addClass('db');
        $('.head_play').removeClass('dn').addClass('db');
        $('.head_close').removeClass('db').addClass('dn');
        $('.headbox').css({'background': 'url(0001/img/b/head1.png)','background-size': '100% 100%'});
        setTimeout(function() {
            myhead();

        }, 500);
        window.setTimeout(function() {
            $('.shadow').removeClass('db').addClass('dn');
        }, 300);
        _area_close = true;

        area_ox = true;
    };

    $('.head_close').click(function(){
        area_menu_x2();
    })
    /**********************************************************/
    var cookie_now = Cookies.get('sele');

    if (cookie_now == 'area_all') {
        search('.shop_p');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_index').removeClass('dn').addClass('db');
        area_menu_x();
        bar_able();
        tg_show();
    } else if (cookie_now == 'area_dj') {
        search('.shop_0dj');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_dj').removeClass('dn').addClass('db');
        bar_disable();
        area_menu_x();
        tg2_show();
    } else if (cookie_now == 'area_gx') {
        search('.shop_0gx');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_gx').removeClass('dn').addClass('db');
        bar_disable();
        area_menu_x();
        tg2_show();
    } else if (cookie_now == 'area_bhd') {
        search('.shop_0bhd');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_bhd').removeClass('dn').addClass('db');
        bar_disable();
        area_menu_x();
        tg2_show();
    } else if (cookie_now == 'area_jz') {
        search('.shop_0jz');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_jz').removeClass('dn').addClass('db');
        bar_disable();
        area_menu_x();
        tg2_show();
    } else if (cookie_now == 'area_dh') {
        search('.shop_0dh');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_dh').removeClass('dn').addClass('db');
        bar_disable();
        area_menu_x();
        tg2_show();
    } else if (cookie_now == 'area_zg') {
        search('.shop_0zg');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_zg').removeClass('dn').addClass('db');
        bar_disable();
        area_menu_x();
        tg2_show();
    } else if (cookie_now == 'area_other') {
        search('.shop_0other');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_other').removeClass('dn').addClass('db');
        bar_disable();
        area_menu_x();
        tg2_show();
    };
    /**********************************************************/

    $('.area_all').click(function() {
        search('.shop_p');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_index').removeClass('dn').addClass('db');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        myhead_b();
        area_menu_x();
        bar_able();
        tg_show();
        Cookies.set('sele', 'area_all', { expires: 0.2 });

    });
    $('.area_dj').click(function() {
        search('.shop_0dj');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_dj').removeClass('dn').addClass('db');
        myhead_b();
        $("html,body").animate({ scrollTop: 0 }, 1000);
        bar_disable();
        area_menu_x();
        tg2_show();
        Cookies.set('sele', 'area_dj', { expires: 0.2 });

    });
    $('.area_gx').click(function() {
        search('.shop_0gx');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_gx').removeClass('dn').addClass('db');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        myhead_b();
        bar_disable();
        area_menu_x();
        tg2_show();
        Cookies.set('sele', 'area_gx', { expires: 0.2 });

    });
    $('.area_bhd').click(function() {
        search('.shop_0bhd');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_bhd').removeClass('dn').addClass('db');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        myhead_b();
        bar_disable();
        area_menu_x();
        tg2_show();
        Cookies.set('sele', 'area_bhd', { expires: 0.2 });

    });
    $('.area_jz').click(function() {
        search('.shop_0jz');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_jz').removeClass('dn').addClass('db');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        myhead_b();
        bar_disable();
        area_menu_x();
        tg2_show();
        Cookies.set('sele', 'area_jz', { expires: 0.2 });

    });
    $('.area_dh').click(function() {
        search('.shop_0dh');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_dh').removeClass('dn').addClass('db');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        myhead_b();
        bar_disable();
        area_menu_x();
        tg2_show();
        Cookies.set('sele', 'area_dh', { expires: 0.2 });

    });
    $('.area_zg').click(function() {
        search('.shop_0zg');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_zg').removeClass('dn').addClass('db');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        myhead_b();
        bar_disable();
        area_menu_x();
        tg2_show();
        Cookies.set('sele', 'area_zg', { expires: 0.2 });

    });
    $('.area_other').click(function() {
        search('.shop_0other');
        $('.head_area span').removeClass('db').addClass('dn');
        $('.head_area_other').removeClass('dn').addClass('db');
        $("html,body").animate({ scrollTop: 0 }, 1000);
        myhead_b();
        bar_disable();
        area_menu_x();
        tg2_show();
        Cookies.set('sele', 'area_other', { expires: 0.2 });

    });

}

function slidebox() {
    // var step = 0;
    // var width = $(window).width(),
    //     max_left = -2.4*width +10,
    //     max_right = 2.8*width -10,
    //     _sr = true,
    //     _sl = true;
    // ////console.log(max_left);
    // ////console.log(max_right);

    function slide_right() {
        $('.slide_right0').click(function() {
            if ($('.sm').is(':animated')) {
                $('.slide_right0').click().delay(500);
            }

            // debugger
            var right = $('.sm:eq(0)').clone().css('left', '150%');
            // ////console.log(right);
            $('.s').append(right);
            var i = 4;
            $('.sm').animate({ left: '-=65%' }, 500, function() {
                i = i - 1;
                if (i == 0) {
                    $('.sm:eq(0)').remove();
                    $('.sm').removeClass('sn_left').removeClass('sn_center').removeClass('sn_right');
                }

            });

        });

        touch.on('.s', 'swipeleft', function() {
            if ($('.sm').is(':animated')) {
                $('.slide_right0').click().delay(500);
            }

            // debugger
            var right = $('.sm:eq(0)').clone().css('left', '150%');
            // ////console.log(right);
            $('.s').append(right);
            var i = 4;
            $('.sm').animate({ left: '-=65%' }, 500, function() {
                i = i - 1;
                if (i == 0) {
                    $('.sm:eq(0)').remove();
                    $('.sm').removeClass('sn_left').removeClass('sn_center').removeClass('sn_right');
                }

            });

        });

    }

    function slide_left() {
        $('.slide_left').click(function() {

            if ($('.sm').is(':animated')) {
                $('.slide_left').click().delay(500);
            }

            // debugger
            var left = $('.sm:eq(2)').clone().css('left', '-110%');
            // ////console.log(right);
            $('.s').prepend(left);
            var i = 4;
            $('.sm').animate({ left: '+=65%' }, 500, function() {
                i = i - 1;
                if (i == 0) {
                    $('.sm:eq(3)').remove();
                    $('.sm').removeClass('sn_left').removeClass('sn_center').removeClass('sn_right');
                }

            });

        });

        touch.on('.s', 'swiperight', function() {

            if ($('.sm').is(':animated')) {
                $('.slide_left').click().delay(500);
            }

            // debugger
            var left = $('.sm:eq(2)').clone().css('left', '-110%');
            // ////console.log(right);
            $('.s').prepend(left);
            var i = 4;
            $('.sm').animate({ left: '+=65%' }, 500, function() {
                i = i - 1;
                if (i == 0) {
                    $('.sm:eq(3)').remove();
                    $('.sm').removeClass('sn_left').removeClass('sn_center').removeClass('sn_right');
                }

            });

        });
    }
    slide_right();
    slide_left();
}



function copys() {
    var clipboard = new Clipboard('.copybtn');

    touch.on('.fontbox', 'touchend', function() {
        var url = location.href;
        ////console.log(url);
        $('#copybox').html(url);
    })

    $('.copybtn').click(function() {
            $('.copybtn').css('text-decoration', 'underline');
            window.setTimeout(function() {
                $('.copybtn').css('text-decoration', 'none');
            }, 200)
        })
        /*clipboard.on('success', function(e) {
            ////console.log(e);
        });

        clipboard.on('error', function(e) {
            ////console.log(e);
        });*/
}
