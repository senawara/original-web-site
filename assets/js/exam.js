// exam.htmlとのみ接続

$(window).on('load',function(){
    $("#q-1").show();
    $('.certification').show();
    console.log(nickname);
    console.log(score);
});

let pages =1;
let score =0;
let nickname="sena"
let progress= 0;

// カードが次々出てくる
$("#ans-1-3,#ans-2-3,#ans-3-1,#ans-4-2,#ans-5-3").on("click",function(){
    score +=1;
})


$(".option").on('click',function(){
    pages +=1;
    setTimeout(function(){cardChange(pages)},100);
    console.log(score)
})

// カードの遷移とプログレスバー
function cardChange(num){
    $(`#q-${num-1}`).hide();
    $(`#q-${num}`).show();
    const bar=setInterval(function(){
        if(progress<=(num-1)*19.8){
            progress+=2.2
            $('#progress').css("width",`${progress}%`)
        }else{
            clearInterval(bar);
            console.log("stop");
        }
    },40
    )
}

$('#end-exam').on("click",function(){
    nickname= $("#nickname").val();
    if(nickname===""){
        $(".alert").show();
    }else{
        window.location.href=`../../member.html?nickname=${encodeURIComponent(nickname)}&score=${score}`;
    }
})

