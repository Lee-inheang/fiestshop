

$('#list-filter>li').click(function(){
    let filter = $(this).data('filter');
    $('#list-filter>li').removeClass('listactive');
    $(this).addClass('listactive');

    if(filter == '*'){
        $('.list-content').fadeIn();
    }else{
        $('.list-content').hide();
        $('.'+filter).fadeIn();
    }
});


const byunsub = [ 
    
    '<a href="#" class="n">신상</a>',
    '<a href="#" class="j">주문폭주</a>',
    '<a href="#" class="e">기간한정</a>',

];

const colortype = [ 
   
    '<div class="color-list-box black"></div>',
    '<div class="color-list-box pink"></div>',
    '<div class="color-list-box beige"></div>',
    
]

$.get("./list/list.json")
.done(function(json){
    const Womenlist = json.Womenlist.length;
    let colprolist = '' , Womenboxlist=0, num=0, colornum=0, listbox='', color='' ;
    // console.log(Womenlist); 배열 길이 12 
    // console.log(json.Womenlist[0]); 
    for(let i=0; i<Womenlist; i++){
        Womenboxlist = json.Womenlist[i].listbox.length;
            colortypelist =json.Womenlist[i].color.length;
        for(let k=0; k<Womenboxlist; k++){
            num = parseInt(json.Womenlist[i].listbox[k]);
            listbox +=byunsub[num];
        }
        for(let a=0; a<colortypelist; a++){
            colornum = parseInt(json.Womenlist[i].color[a]);
            color += colortype[colornum];
        }
        
        colprolist+= '<div class="list-content col-pro-list '+json.Womenlist[i].class+'">';
        colprolist+= '<a href="detail.html"><img src="'+json.Womenlist[i].img+'" alt="'+json.Womenlist[i].listgoodstitle+'"></a>';
        colprolist+= '<div class="list-review"><a href="#">'+json.Womenlist[i].listreview+'</a></div>';
        colprolist+= '  <div class="listbox">'
        colprolist+= listbox; 
        colprolist+= ' </div>'
        colprolist+= '<h3 class="list-goods-title">'+json.Womenlist[i].listgoodstitle+'</h3>';
        colprolist+= '<div class="color-list d-flex">';
        colprolist+= color;
        colprolist+= '</div>';
          colprolist+='<p class="list-goods-money"><del>'+json.Womenlist[i].deor+'</del>'+json.Womenlist[i].orpr+'</p>';
          colprolist+= '</div>';
          listbox =''; // 초기화 
          color =''; // 초기화 
    }
    $('#listtest').html(colprolist);
    colprolist='';

});


