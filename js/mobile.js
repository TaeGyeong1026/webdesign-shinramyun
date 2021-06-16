$(document).ready(function () {

    $('.m_top').eq(0).children('.m_top-effect').stop().animate({
        width: '100%',
    });

    
    //mobile entrance
    mobileEntrance();
    function mobileEntrance(){
        $('#mobile-main').stop().animate({
            opacity: 0.8,
        },1500,function(){
            $('#mobile-main-1').stop().animate({
               opacity: 1, 
            },700,function(){
                $('#mobile-main-2').stop().animate({
                    opacity: 1,
                },500,function(){
                    $('#mobile-main-3').stop().animate({
                        opacity: 1,
                    },400,function(){
                        $('#mobile-txt').stop().animate({
                            opacity: 1,
                        },700,function(){
                            $('#mobile-main-4').stop().animate({
                                opacity: 1,
                            },500);
                        });
                    });
                })
            });
        });
    }
    $('.m_top').eq(0).click(function(){
        mobileEntrance();
    });
    $('.m_top').not($('.m_top').eq(0)).click(function(){
        $('.mobile-effect').css({opacity: 0,});
    });
    
    /*mobile top menu effect*/
    var articleIndex = 0;
    $('.m_top').click(function () {
        articleIndex = $(this).index();
        $('.m_article').fadeOut(100);
        $('.m_article').eq(articleIndex).fadeIn(1000);

        $('.m_top').removeClass('top-on');
        $('.m_top').eq(articleIndex).addClass('top-on');
        $('.m_top').eq(articleIndex).children('.m_top-effect').stop().animate({
            width: '100%',
        });
        $('.m_top-effect').not($('.m_top').eq(articleIndex).children('.m_top-effect')).stop().animate({
            width: '0%',
        });
        $('.m_header-menu-wrap').animate({
            scrollLeft: $(this).width()*articleIndex-1,
        });
    });
    
    /*mobile history article*/
    var historyIndex=0;
    $('#m_history-prev').click(function(){
        historyIndex--;
        if(historyIndex < 0){
            historyIndex = 13;
        }
        m_year_change(historyIndex);
        m_history_con_change();
    });
    $('#m_history-next').click(function(){
        historyIndex++;
        if(historyIndex > 13){
            historyIndex = 0;
        }
        m_year_change(historyIndex);
        m_history_con_change();
    });
    $('.m_history-year').click(function () {
        if($(this).parent().index() == 0){
            historyIndex = $(this).index();
        }
        else if($(this).parent().index() == 3){
            historyIndex = $(this).index()+7;
        }
        m_history_con_change();
        m_year_change(historyIndex);
    });

    function m_year_change(i) {
        if (i >= 0 && i <= 6) {
            $('.m_history-year-top').children('.m_history-year').removeClass('m_year-top-on');
            $('.m_history-year-bottom').children('.m_history-year').removeClass('m_year-bottom-on');
            $('.m_history-year-top').children('.m_history-year').eq(i).addClass('m_year-top-on');
        } else if (i >= 7 && i <= 13) {
            $('.m_history-year-bottom').children('.m_history-year').removeClass('m_year-bottom-on');
            $('.m_history-year-top').children('.m_history-year').removeClass('m_year-top-on');
            $('.m_history-year-bottom').children('.m_history-year').eq(i - 7).addClass('m_year-bottom-on');
        }
    }

    function m_history_con_change() {
        $('#m_history-con').attr({
            src: "img/history/history-con-" + (historyIndex + 1) + '.png',
        });
    };
    
    
    //mobile recipe more button
    var recipeHeight = $(window).width() * 6.4;
    $('#m_recipe-more').click(function(){
        $('.m_recipe-page-2').animate({
            height: recipeHeight,
        });
        $(this).fadeOut(500);
    });

}) //end
