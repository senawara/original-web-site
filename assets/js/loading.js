// ローディング画面のHTMLを追加
const loadingHTML = `
    <div id="loading" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-image: url('./assets/img/bgi2.jpg');
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    ">
        <div class="spinner" style="
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
        ">
            <img src="./assets/img/nerimaru1.png" style="
                width: 100px;
                height: 100px;
                position: absolute;
                top: 10px;
                left: 10px;
            ">
        </div>
        <div>
        now loading...
        </div>
    </div>
    <style>
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
`;

// ローディング画面をbodyに追加
document.body.insertAdjacentHTML('beforeend', loadingHTML);

// ページの読み込みが完了したらローディング画面を非表示にする
window.addEventListener('load', () => {
    console.log("ページの読み込み");
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
});