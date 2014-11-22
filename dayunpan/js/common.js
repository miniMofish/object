$(function () {
    //导航下拉
    $('.has-sub-menu').mouseenter(function() {
        $(this).find('ul').show().end().css('background','#830801');
    }).mouseleave(function() {
        $(this).find('ul').hide().end().css('background','none');
    });
    //首页商品左右切换
    $('.pro-list').each(function(){
        $(this).bxSlider({
            pager: false,   //去掉翻页
            minSlides: 1,
            maxSlides: 4,
            moveSlides: 1,
            slideWidth: 210,
            slideMargin: 40,
            prevText: '',
            nextText: '',
            infiniteLoop: false
        });
    });
    $('.pro-img a').hover(function(){
        $(this).find('.mask').show()
    },function(){
        $(this).find('.mask').hide()
    })
    //列表页面切换
    $('.bxslider-list').bxSlider({
        auto: true,
        controls: false //去掉左右箭头
    });

    $('.list-contianer-bxSlider-shop').bxSlider({
        auto: true,
        controls: false
    });
    //产品图片展示
    $('.pro-item-ul').bxSlider({
        pager: false,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 89,
        slideMargin: 12,
        prevText: '',
        nextText: '',
        infiniteLoop: false
    });
    $('.pro-item-ul li').each(function(){
        $(this).click(function(){
            var path = $(this).attr('data-img');
            $('.pro-big-img').html('<img src="' + path + '" width="450" height="375" />');
            $('.pro-item-ul li').removeClass('active');
            $(this).addClass('active');
        });
    });
    //产品详情切换
    $('.pro-des-nav li').on('click',function(){
        var index = $(this).index();
        $('.pro-des-nav li').removeClass('active');
        $(this).addClass('active');
        $('.pro-des-detail').hide();
        $('.pro-des-detail').eq(index).show();
    })
})