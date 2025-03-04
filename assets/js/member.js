const params = new URLSearchParams(window.location.search);
const nickname = params.get("nickname");
const score = params.get("score");
window.onload=function(){
    $("#holder_score1").text(`${6-score}`);
    $("#holder_name").text(`${nickname}`+"　様");
    $("#holder_score2").text(`${6-score}`+"級合格");
    if(nickname){
        $(".certification").show();
    }
}