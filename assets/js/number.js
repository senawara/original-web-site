import { db } from "../../firebase-config.js";
import { doc, getDoc, setDoc, updateDoc, increment } 
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// ゼロパディング関数
function zeroPad(number, length) {
    return String(number).padStart(length, '0');
}

// 非同期関数を定義
async function initialize() {
    const docRef = doc(db, "number", "clickCount");
    const docSnap = await getDoc(docRef);

    // ボタンのクリックイベントをキャプチャ
    document.getElementById('btn-en').addEventListener('click', async () => {
        if (docSnap.exists()) {
            // ドキュメントが存在する場合、クリック回数をインクリメント
            await updateDoc(docRef, {
                count: increment(1)
            });
        } else {
            // ドキュメントが存在しない場合、新しいドキュメントを作成
            await setDoc(docRef, {
                count: 1
            });
        }
        countShow();
    });

    countShow();
}

// ページの読み込みが完了したら初期化関数を呼び出す
window.onload = function() {
    initialize();
};

async function countShow() {
    const docRef = doc(db, "number", "clickCount");
    const updatedDocSnap = await getDoc(docRef);
    const clickCount = updatedDocSnap.data().count;

    // ゼロパディングして表示
    const paddedClickCount = zeroPad(clickCount, 8);
    console.log(`Button clicked ${paddedClickCount} times`);

    // 会員番号を表示
    document.getElementById('numbers').textContent = `会員No.${paddedClickCount}`;
    document.getElementById('numbers2').textContent = `${paddedClickCount}`;
}