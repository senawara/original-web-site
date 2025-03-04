//ボタンをホバーすると凹む
$(".btn").hover(
    function(){
    $(this).css({
        "top":"0px",
        "right":"0px"
    })},
    function(){
    $(this).css({
        "top":"-5px",
        "right":"3px"
    })
    }
);

// ボタン押して遷移
$('#btn-en').on("click",function(){
    $(this).css({
        "background-color":"#6d8740"
    });
    setTimeout(function(){$("#back-pop").show()},200);
})

$('#popup-x').on("click",function(){
    $("#back-pop").hide();
    $("#btn-en",).css({
        "top":"-5px",
        "right":"3px",
        "background-color":"#8CB24C"
    });
})
$('#popup-x').hover(function(){
        $(this).css("background-color","#6d8740")},
    function(){
        $(this).css("background-color","transparent")
    }
)

let count=0;
// Featuresのアニメーション
window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let offset = $("#features").offset().top;
    if (scrollY >= offset && count==0 && scrollY<=1100) {
        console.log(scrollY);
        window.scrollTo(0,offset);
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.body.style.overflow = "hidden";
        count+=1;
        featureAnime();
        setTimeout(function(){
            $(".feature2 p").slideDown(1000);
        },1800)
        setTimeout(function(){
            $(".feature2 span").css({
                "font-size":"26px",
                "transition": "font-size 2s ease"
            });
        },2800)
        setTimeout(function(){
            document.body.style.overflow = "visible";
            document.body.style.paddingRight = "0px";
        },4000);
    }
});

function featureAnime(){
    $(".featureImg1").css({
        "height": `160px`,
        "transition": "height 2s ease"
    });
    $(".featureImg2").css({
        "height": `180px`,
        "transition": "height 2s ease"
    });
}



//Animeのアニメーション
function autoHorizontalScroll(selector, speed = 2) {
    let container = document.querySelector(selector);
    if (!container) return;

    function scroll() {
        container.scrollLeft += speed; // 横スクロール

        // スクロール量の割合を調べる
        // 現在の横スクロール
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0; // 右端に達したら左端に戻る
        }
    }
    let interval = setInterval(scroll, 30);
    // ホバーで停止
    container.addEventListener("mouseenter", () => clearInterval(interval));
    container.addEventListener("mouseleave", () => {
        interval = setInterval(scroll, 30);
    });
}
// 例: `#scroll-container` を水平方向にスクロール
autoHorizontalScroll(".anime-list", 2);

$("#ani1").on("click",function(){
    $(".anime-list").scrollLeft(0)
})

$("#ani2").on("click",function(){
    $(".anime-list").scrollLeft(300)
})
$("#ani3").on("click",function(){
    $(".anime-list").scrollLeft(600)
})
$("#ani4").on("click",function(){
    $(".anime-list").scrollLeft(900)
})

//イベントのアニメーション
window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    console.log(scrollY)
    if (scrollY >= 3000 && scrollY<=3150) {
       tagAnime(1);
       setTimeout(function(){tagAnime(2)},100);
       setTimeout(function(){tagAnime(3)},200);
       setTimeout(function(){tagAnime(4)},300);
    }

})

swipeAnime("tag1", 'https://www.instagram.com/nerimaru_nerimaoshi/' );
swipeAnime("tag2", 'https://x.com/nerimaru_nerima');
swipeAnime("tag3", 'https://nerimaru-land.nerimakanko.jp/');
swipeAnime("tag4", 'https://www.nerimakanko.jp/review/detail.php?article_id=SPE0000090');

function swipeAnime(id,url){
    const swipeElement = document.getElementById(id);
    let startX = 0;
    let endX = 0;
    const swipeThreshold = 300; // スワイプ判定のしきい値(px)

    swipeElement.addEventListener("touchstart", function(event) {
        startX = event.touches[0].clientX;
    });


    swipeElement.addEventListener("touchmove", function(event) {
        currentX = event.touches[0].clientX;
        let deltaX = currentX - startX;

        $(`#${id}`).css({
            "transform": `translateX(${deltaX}px)`,
            "transition": "transform 0.1s ease"
        })

    });

    swipeElement.addEventListener("touchend", function(event) {
        endX = event.changedTouches[0].clientX;

        let deltaX = endX - startX;

        if ( Math.abs(deltaX) > swipeThreshold) {
            if (deltaX < 0) {
                // 左スワイプ
                window.location.href = url;
            }
        }else{
            $(`#${id}`).css({
                "transform": `translateX(0px)`,
                "transition": "transform 0.1s ease"
            })
        }
    });
}


function tagAnime(num){
    $(`#tag${num}`).css({
        "transform":"translateX(-50px)",
        "transition":"transform 0.5s ease"
    })
    setTimeout(function(){
        $(`#tag${num}`).css({
            "transform":"translateX(0px)",
            "transition":"transform 1s ease"
        })
    },400)
}