// ローディング画面のHTMLを追加
const loadingHTML = `
    <div id="loading" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    ">
        <div class="spinner" style="
            border: 16px solid #f3f3f3;
            border-top: 16px solid #3498db;
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
        "></div>
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
    console.log("ページの読み込み")
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
});