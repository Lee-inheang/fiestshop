
$(function(){

/* 팝업창 */
$('.pop>.close').click(function(){
    $('.popup-event').hide();
});

/* 언어 */
$('.language-button').click(function(){
    $(this).find('.language-select').slideToggle();
   
});

$('.language-select>li').click(function(){
    // $(this).data('value') 현재 데이터의 벨류값을 가져온다.
    let myval=  $(this).data('value');
    // alert(myval); 값 들어오는 것 확인
    $('.language-button>span').text(myval);
});


    $('.top_notice_item').slick({
        autoplay:true,
        arrows:false,
        dots:false,
        slideToShow:1,
        draggable:false,
        Infinite:true,
        vertical:true,
        speed:500,
        autoplaySpeed:3000

    });

/*메뉴*/
    $('.gnb>li').hover(function(){
        $(this).find('.lnb').stop().slideToggle();
    });


/*모바일 메뉴*/
let mobile = false; 
$('.mobile-nav').click(function(){
    mobile = true;
    $('.gnb').animate({
        right :'0px'
    },300);
});

$('.mobile-close').click(function(){
    $('.gnb').animate({
        right :'-250px'
    },300);
});





    
$('.main-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });




/* ---------베스트 아이템 섬네일 ------------ */


    // 변수에 담음.
    const byunsu = [ 
        '<a href="#" class="n">신상</a>',
        '<a href="#" class="j">주문폭주</a>',
        '<a href="#" class="e">기간한정</a>'
    ];

$.get("./list/bestlist.json")
   .done(function(json){
    const maxlength = json.bestlist.length;
    const obj2 = json.list;
    let colpro = '' , maxboxlength=0, num=0, box='' ;
    // console.log(maxlength); - 배열 길이 확인했음
    // console.log(json.bestlist[0]); - 0번 배열 값이 들어오는지 확인했음
    for(let i=0; i<maxlength; i++){
        maxboxlength = json.bestlist[i].box.length;
        for(let k=0; k <maxboxlength; k++){
           num = parseInt(json.bestlist[i].box[k]);
           //parseInt : 숫자배열로 전환시켰음.
           box += byunsu[num];
        //   console.log(byunsu[num]) 콘솔에 값이 들어오늕지 찍어본 것
     
        }
      
        colpro+= '<div class="col-pro">';
        colpro+= '<div class="best-list">';
        colpro+= '<a href="detail.html"><img src="'+json.bestlist[i].img+'"alt="'+json.bestlist[i].title+'"></a>';
        colpro+= '<div class="review"><a href="#">'+json.bestlist[i].review+'</a></div>';
        colpro+= '<div class="box">';
        colpro+= box;
        // colpro+= '<a href="#" class="n">신상</a>';
        // colpro+= '<a href="#" class="j">주문폭주</a> ';
        // colpro+= '<a href="#" class="e">기간한정특가</a>';
        colpro+= '</div>';
        colpro+= '<h3 class="goods-title">'+json.bestlist[i].title+'</h3>';
        colpro+= '<p class="goods-money"><del>'+json.bestlist[i].deor+'</del>'+json.bestlist[i].orpr+'</p>';
        colpro+= '<div class="talk">'+json.bestlist[i].talk+'</div>';
        colpro+= '<div class="best-count">'+json.bestlist[i].count+'</div>';
        colpro +='</div></div>';
        box =''; // 초기화 
    }
    $('#bestgoods').html(colpro);
    colpro = ''; // 초기화


    /*-----gif 파일 옆 베스트 상품 ------*/

    for(let j=0; j<obj2.length; j++){ 
        maxboxlength = obj2[j].box.length;
        for(let k=0; k <maxboxlength; k++){
           num = parseInt(json.bestlist[j].box[k]);
           //parseInt : 숫자배열로 전환시켰음.
           box += byunsu[num];
        //   console.log(byunsu[num]) 콘솔에 값이 들어오늕지 찍어본 것
     
        }

        colpro+= '<div class="col-3 px-2">';
        colpro+= '<div class="best-list">';
        colpro+= '<a href="detail.hmtl"><img src="'+obj2[j].img+'"alt="'+obj2[j].title+'"></a>';
        colpro+= '<div class="review"><a href="#">'+obj2[j].review+'</a></div>';
        colpro+= '<div class="box">';
        colpro+= box;
        // colpro+= '<a href="#" class="n">신상</a>';
        // colpro+= '<a href="#" class="j">주문폭주</a> ';
        // colpro+= '<a href="#" class="e">기간한정특가</a>';
        colpro+= '</div>';
        colpro+= '<h3 class="goods-title">'+obj2[j].title+'</h3>';
        colpro+= '<p class="goods-money"><del>'+obj2[j].deor+'</del>'+obj2[j].orpr+'</p>';
        colpro+= '<div class="talk">'+obj2[j].talk+'</div>';
        colpro+= '<div class="best-count">'+obj2[j].count+'</div>';
        colpro +='</div></div>';
        box =''; // 초기화 
    }

    $('#goods').html(colpro);


})
.fail(function(xhr,status,error){
    console.log("오류명:"+error+"상태:"+status);
});
//xhr : 오류명 받아옴


//강력추천 베스트 아이템 왼쪽 퀵메뉴 
$('.best-nav a').click(function(e){
    e.preventDefault();
    let num = $(this).data('char');
    // alert(num); -- 값이 들어오는지 확인해봄

})

// 단독특가 이벤트 배너 

$('.event-img').slick({
    speed: 1000,
    autoplay :true,
    autoplaySpeed : 2500,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
});



/* 주목 브랜드 상품 */

$('.brand-gnb>li').click(function(){
    let table = $(this).attr('id'); // 현재 아이디 값을 이 변수에 넣어줄거임.
    $('.brand-gnb>li').removeClass('active');
    $(this).addClass('active');
    $('.tab').hide();
    $('.'+table).show();

});


/*위아래 이동버튼*/

    $('.remtocontrol').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: '0px'
        },500);
    });

    $('.remtocontrol-2').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(document).height()
        },500);
    });

 




/*--------디테일--------------*/


// 좋아요(하트) 버튼
$('.icon>i:first-child').click(function(){
    if($('.icon>i:first-child').hasClass('active')){
        $('.icon>i:first-child').removeClass('active'); 
    }else{
        $('.icon>i:first-child').addClass('active');
    }
});


$('.goods-thumbnail-sm>div').hover(function(){
    let imgbox = $(this).html();
    $('.big-img').html(imgbox);
  });
  


/*탭 처리하기*/

$('.desc-nav>li').click(function(){
  let list = $(this).data('list');
    $('.desc-nav>li').removeClass('act');
    $('.desc-content>div').removeClass('act');
    $(this).addClass('act');
    $('#'+list).addClass('act');

});


/** 쇼핑정보 기록 */

let size = '', color = '', opt = '', optVal = 0;
let money = $('#goods').val();

 

$('#color').click(function(){
    if($(this).val() == ''){
        //  alert('컬러를 선택하세요.');
        return;
     }  

   color = "색상: " + $(this).val();
   totalVal(color, size, opt);
});


$('#size').change(function(){
   if($(this).val() == ''){
      alert('사이즈를 선택하세요.');
      return;
   }

   size = "사이즈: " + $(this).val();
   totalVal(color, size, opt);

});


 

$('#add').change(function(){

   if(size == '' || color == ''){

      alert('사이즈와 색상을 먼저 선택하세요.');

      return;

   }

   opt = "추가옵션: " + $(this).val();

   optVal = $('#add option:selected').data('add');
   totalVal(color, size, opt);
   totalMoney(money, optVal);

});

$('.result').html(commaNumber(money));

 

 

}); //jquery거 건드리지 마시오!!!!


 

function totalVal(color, size, opt){

    let total =  color;

    if(size) {

        total = total + "<br>" + size;

    }

    if(opt) {

        total = total + "<br>" + opt;

    }

 

    $('#totals').html(commaNumber(total));

}

 

function totalMoney(money, optVal) {

    let total = parseInt(money) + parseInt(optVal);

    $('#result').val(total);
    $('.result').html(commaNumber(total));

}


/* 천단위 콤마 정규식*/
function commaNumber(numbers){
    return numbers.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};




/*----------모바일------------*/



/*리스트 */




