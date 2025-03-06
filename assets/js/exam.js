import { db } from "../../firebase-config.js";
import { collection, addDoc, getDocs, serverTimestamp, orderBy, query } 
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";




// exam.htmlとのみ接続
let pages =1;
let score =0;
let nickname="";
let progress= 0;

$(function(){
    $("#q-1").show();
})
// ボタン選択と点数換算
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

$("#end-exam").on("click",function(){
    nickname=$("#nickname").val();
    if(score===5){
        sendData();
    }else{
        justPreview();
    }
})

const nicknameLength = nickname.length //nicknameの文字数
function justPreview(){
    if(nickname!="" && nicknameLength<=20){
        // リダイレクト
        window.location.href = `member.html?nickname=${encodeURIComponent(nickname)}&score=${encodeURIComponent(score)}`;
    }else{
        $(".alert").show();
    }
}


// データを送信
async function sendData() {
    const inputElement = document.getElementById("nickname");
    const inputValue = inputElement.value.trim();
    if (inputValue === "" && nicknameLength<=20) {
        console.log("メッセージを入力してください！");
        $(".alert").show();
        return;
    }
    try {
        await addDoc(collection(db, "messages"), {
            text: inputValue,
            timestamp: serverTimestamp() // 時間を追加
        });
        console.log("データを送信しました！");
        inputElement.value = "";
        // リダイレクト
        window.location.href = `member.html?nickname=${encodeURIComponent(nickname)}&score=${encodeURIComponent(score)}`    
    } catch (error) {
        console.error("データ送信エラー:", error);
    }
}
