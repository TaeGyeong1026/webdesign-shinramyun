$(document).ready(function(){
    //INIT
    var ww = $(window).width();
    var wh = $(window).height();
    
    $('.intro-pic').hover(function(){
        $(this).css({
            'z-index' : 99,
        });
        $(this).children('.intro-in-txt').stop().animate({
            top: '75%',
        },500);
    },function(){
        $(this).css({
            'z-index' : 1,
        });
        $(this).children('.intro-in-txt').stop().animate({
            top: '100%',
        });
    });
    
    //MAIN
    main_entrance();
    function main_entrance(){
     $('#main-after').animate({
         opacity: 1,
     },2000);
    $('#main-last').animate({
        opacity: 1,
    },4000);
     $('#main-red').animate({
         height: 869,
     },100,function(){
         $('#main-red').animate({
             opacity: 0,
         },200,function(){
             $('#main-white').animate({
                 height: 869,
             },100,function(){
                 $('#main-white').animate({
                     opacity: 0,
                 },200,function(){
                     $('#main-green').animate({
                         height: 869,
                     },100,function(){
                         $('#main-green').animate({
                             opacity: 0,
                         },200,function(){
                             $('#main-orange').animate({
                                 height: 869,
                             },100,function(){
                                 $('#main-orange').animate({
                                     opacity: 0,
                                 },200,function(){
                                     $('#main-brown').animate({
                                         height: 869,
                                     },100,function(){
                                         $('#main-brown').animate({
                                             opacity: 0,
                                         },200);
                                     });
                                 });
                             });
                         });
                     });
                 });
             });
         });
     });
    }
    
    //menu event
    var ah=[0,0,0,0,0,0,0,10000];
    for(var i=0; i<7; i++){
        ah[i]=$('article').eq(i+1).offset().top-120;
    }
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        for(var i=0; i<7 ;i++){
            if(sct>= ah[i] && sct < ah[i+1]){
                if(i != 0){
                    top_on(i);
                }
                side_on(i);
            }
        }
        if(sct >= 0 && sct < 869){
                $('.top').removeClass('top-on');
                $('.top-effect').stop().animate({
                    width: 0,
                });
                $('.top-but-wrap').fadeOut(500);
        }
        else{
                $('.top-but-wrap').fadeIn(500);
        }
    });
    
    //top menu effect
    function top_on(i){
        $('.top').removeClass('top-on');
        $('.top').eq(i-1).addClass('top-on');
        $('.top').eq(i-1).children('.top-effect').stop().animate({
            width: '100%',
        });
        $('.top-effect').not($('.top').eq(i-1).children('.top-effect')).stop().animate({
            width: '0%',
        });
    }
    $('.top').click(function(){
        var click_index = $(this).index();
        $('html, body').animate({
            scrollTop: ah[click_index+1]+20,
        });
    });
    $('.top').hover(function(){
        $(this).children('.top-effect').stop().animate({
           width: '100%', 
        });
    },function(){
        $(this).children('.top-effect').stop().animate({
           width: '0%', 
        });
    });
    
    //top move button
    $('#top-but').click(function(){
        $('html, body').animate({
            scrollTop: 0,
        });
    });
    
    //side menu effect
    function side_on(i){
        $('.side-menu').removeClass('side-on');
        $('.side-menu').eq(i).addClass('side-on');
        $('.side-menu').children('.side-menu-logo').removeClass('logo-on');
        $('.side-menu').eq(i).children('.side-menu-logo').addClass('logo-on');
        $('.side-menu-logo').transition({
            rotate: '360deg',
        }).css({
            transform: 'rotate(0deg)',
        });
    }
    $('.side-menu').click(function(){
        var click_index = $(this).index();
        $('html, body').animate({
            scrollTop: ah[click_index]+20,
        });
    });
    
    //history article arrow event
    var history_index=0;
    $('#history-prev').click(function(){
        history_index--;
        if(history_index < 0){
            history_index = 13;
        }
        year_change(history_index);
        history_con_change();
    });
    $('#history-next').click(function(){
        history_index++;
        if(history_index > 13){
            history_index = 0;
        }
        year_change(history_index);
        history_con_change();
    });
    function year_change(i){
        if(i >= 0 && i <= 6){
            $('.history-year-top').children('.history-year').removeClass('year-top-on');
            $('.history-year-bottom').children('.history-year').removeClass('year-bottom-on');
            $('.history-year-top').children('.history-year').eq(i).addClass('year-top-on');
        }
        else if(i >= 7 && i <= 13){
            $('.history-year-bottom').children('.history-year').removeClass('year-bottom-on');
            $('.history-year-top').children('.history-year').removeClass('year-top-on');
            $('.history-year-bottom').children('.history-year').eq(i-7).addClass('year-bottom-on');
        }
    }
    function history_con_change(){
        $('#history-con').attr({
            src: "img/history/history-con-"+(history_index+1)+'.png',
        });
    };
    $('.history-year').click(function(){
        if($(this).parent().index() == 0){
            history_index = $(this).index();
        }
        else if($(this).parent().index() == 3){
            history_index = $(this).index()+7;
        }
        year_change(history_index);
        history_con_change();
    });
    function history_con_change(){
        $('#history-con').attr({
            src: "img/history/history-con-"+(history_index+1)+'.png',
        });
    };
    
    //global article flag position / effect
    $('.global-in-wrap').eq(0).css({
        left: 530,
        top: 560,
    });
    $('.global-in-wrap').eq(1).css({
        left: 1250,
        top: 500,
    });
    $('.global-in-wrap').eq(2).css({
        left: 1020,
        top: 175,
    });
    $('.global-in-wrap').eq(3).css({
        left: 1170,
        top: 565,
    });
    $('.global-in-wrap').eq(4).css({
        left: 445,
        top: 330,
    });
    $('.global-in-wrap').eq(5).css({
        left: 70,
        top: 240,
    });
    $('.global-in-wrap').eq(6).css({
        left: 100,
        top: 265,
    });
    $('.global-in-wrap').eq(7).css({
        left: 555,
        top: 295,
    });
    $('.global-in-wrap').eq(8).css({
        left: 180,
        top: 430,
    });
    $('.global-in-wrap').eq(9).css({
        left: 410,
        top: 430,
    });
    $('.global-in-wrap').eq(10).css({
        left: 365,
        top: 310,
    });
    $('.global-in-wrap').eq(11).css({
        left: 100,
        top: 210,
    });
    $('.global-in-wrap').eq(12).css({
        left: 115,
        top: 240,
    });
    $('.global-in-wrap').eq(13).css({
        left: 240,
        top: 350,
    });
    $('.global-in-wrap').eq(14).css({
        left: 40,
        top: 210,
    });
    $('.global-in-wrap').eq(15).css({
        left: 1050,
        top: 270,
    });
    $('.global-flag').hover(function(){
        $(this).siblings($('.global-in-txt')).stop().fadeIn(300);
        $(this).stop().transition({
            scale: 1.5,
        },300)
        .css({
            'z-index' : 99,
            border: '1px solid white',
        });
    },function(){
        $(this).siblings($('.global-in-txt')).stop().fadeOut(500);
        $(this).stop().transition({
            scale: 1,
        },500)
        .css({
            'z-index' : 1,
             border: 'none',
        });
    });
    
    //cf article click slide effect
    var cf_scroll_num =1;
    $('.cf-horizon-wrap').css({
        
    })
    $('#cf-right').click(function(){
        var item_width = $('.cf-item-wrap').width();
        
        $('.cf-horizon-wrap').animate({
            left: -350 -(item_width + 195),
        },function(){
            $('.cf-horizon-wrap').css({
                left: -350,
            }).find('.cf-item-wrap').first().appendTo('.cf-horizon-wrap');
        });
        cf_scroll_num++;
        if(cf_scroll_num > 8){
            cf_scroll_num = 1;
        }
        cf_scroll(); 
        cf_effect(2);      
    });
    $('#cf-left').click(function(){
        var item_width = $('.cf-item-wrap').width();
        
        $('.cf-horizon-wrap').css({
            left: -350 -(item_width + 195),
        }).find('.cf-item-wrap').last().prependTo('.cf-horizon-wrap');
        $('.cf-horizon-wrap').animate({
            left: -350,
        });
        cf_scroll_num--;
        if(cf_scroll_num < 1){
            cf_scroll_num = 8;
        }
        cf_scroll();
        cf_effect(1);
    });
    function cf_scroll(){
        var cf_scroll_width = ww * 0.125;
        $('.cf-scroll-but').animate({
            width: cf_scroll_width * cf_scroll_num,
        });
    }
    $('.cf-item').eq(1).css({
        opacity: 1, 
    });
    $('.cf-item').eq(1).siblings('.cf-item-txt-wrap').css({
        display: 'block',
    });
    function cf_effect(dir){
            $('.cf-item').eq(dir).animate({
               opacity: 1, 
            });
            $('.cf-item').not($('.cf-item').eq(dir)).animate({
                opacity: 0.5,
            })
            $('.cf-item').eq(dir).siblings('.cf-item-txt-wrap').fadeIn(500);
            $('.cf-item-txt-wrap').not($('.cf-item').eq(dir).siblings('.cf-item-txt-wrap')).fadeOut(500);
    }
    
    //movie article arrow event
    var movie_index=0;
    $('#movie-right').click(function(){
        movie_index++;
        if(movie_index > 2){
            movie_index = 2;
        }
        movie_move();
        movie_scroll(movie_index);
    });
    $('#movie-left').click(function(){
        movie_index--;
        if(movie_index < 0){
            movie_index = 0;
        }
        movie_move();
        movie_scroll(movie_index);
    });
    function movie_move(){
        $('.movie-contents-wrap').animate({
            left: -1000 * movie_index,
        },function(){
            
        },function(){
            if(movie_index==2){
                $('#movie-left').css({display: 'block'});
                $('#movie-right').css({display: 'none'});
            }
            else if(movie_index==0){
                $('#movie-left').css({display: 'none'});
                $('#movie-right').css({display: 'block'});
            }
            else{
                $('#movie-left').css({display: 'block'});
                $('#movie-right').css({display: 'block'});
            }
        });  
    }
    function movie_scroll(i){
        $('.movie-scroll-but').removeClass('movie-but-on');
        $('.movie-scroll-but').eq(i).addClass('movie-but-on');
    }
    $('.movie-scroll-but').click(function(){
        movie_index = $(this).index();
        movie_move();
        movie_scroll(movie_index);
    })
    
    // recipe article button click event
    $('#recipe-more').click(function(){
        $('.recipe-page-2').animate({
            height: 1000,
        });
        $('#recipe-close').css({
            display: 'block',
        });
        $('#recipe-more').css({
            display: 'none',
        });
    });
    
    $('#recipe-close').click(function(){
        $('.recipe-page-2').animate({
            height: 0,
        });
        $('#recipe-close').css({
            display: 'none',
        });
        $('#recipe-more').css({
            display: 'block',
        });
    });
});      //end