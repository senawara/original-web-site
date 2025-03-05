const params = new URLSearchParams(window.location.search);
const nickname = params.get("nickname");
const score = params.get("score");

window.onload=function(){
    console.log(nickname);
    console.log(score);
    $("#holder_score1").text(`${6-score}`);
    $("#holder_name").text(`${nickname}`+"　様");
    $("#holder_score2").text(`${6-score}`+"級合格");
    $("#yourScore").text(`${score}`);
    if(nickname){
        $(".certification").show();
    }
}

import { db } from "../../firebase-config.js";
import { collection, getDocs, orderBy, query } 
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// データを取得
async function loadData() {
    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    const dataList = document.getElementById("dataList");
    dataList.innerHTML = ""; // 既存のデータをクリア

    querySnapshot.forEach((doc) => {
        const li = document.createElement("li");
        li.textContent = doc.data().text;
        dataList.appendChild(li);
        dataList.appendChild(document.createElement("br"));
    });
}

// 初回ロード時にデータを取得
loadData();