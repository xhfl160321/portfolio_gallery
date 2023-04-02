(function () {
    console.clear();
    //menu query

    //imgList query
    // $(".imgList ul li").hide().eq(0).show();

    //imgConSlide query
    // $(".imgConList ul li").hide().eq(0).show();

    //화살표 클릭시 해당 인덱스에 맞게 그림 및 글귀 보여주는 쿼리
    var nextBtn = $(".next");
    var backBtn = $(".back");
    var imgSelect = $(".imgList img");
    var imgConSelect = $(".imgConList .imgConSlide");

    //이전 클릭시 그림 바뀌는 쿼리
    backBtn.click(function (e) {
        e.preventDefault();

        //이미지 및 con 현재 위치
        var imgIndex = $(".imgList").find(".on").index();
        var imgConIndex = $(".imgConList").find(".on").index();
        //이미지 및 con 갯수
        var imgCnt = $(".imgList img").length;
        var imgConCnt = imgConSelect.length;
        // console.log(imgIndex+"번째 그림!", imgConIndex+"번째 설명!");

        //imgList img 중 imgIndex && imgConList imgConSlide 중 imgConIndex  번째의 on 클래스 이벤트 
        imgSelect.eq(imgIndex).removeClass("on");
        imgSelect.eq(imgIndex).css({ "opacity": 0 });
        imgConSelect.eq(imgConIndex).removeClass("on");
        imgConSelect.eq(imgConIndex).css({ "opacity": 0 });

        //이전 위치로 돌아가기
        imgIndex = imgIndex - 1;
        imgConIndex = imgConIndex - 1;

        if (imgIndex < 0 && imgConIndex < 0) {
            // 돌아가 위치가 -1일 경우
            // 이미지의 마지막으로 돌아간다
            var imgWidth = $(".imgList").width();
            var imgConWidth = $(".imgConList").width();

            imgSelect.eq(imgCnt - 1).css({ "opacity": 1 });
            imgSelect.eq(imgCnt - 1).addClass("on");
            imgConSelect.eq(imgConCnt - 1).css({ "opacity": 1 });
            imgConSelect.eq(imgConCnt - 1).addClass("on");
        } else {
            //돌아갈 위치가 -1이 아닌 경우
            imgSelect.eq(imgIndex).css({ "opacity": 1 });
            imgSelect.eq(imgIndex).addClass("on");
            imgConSelect.eq(imgConIndex).css({ "opacity": 1 });
            imgConSelect.eq(imgConIndex).addClass("on");
        }
    });

    //다음버튼 클릭시 그림 바뀌는 쿼리
    nextBtn.click(function (e) {
        e.preventDefault();

        //이미지 현재 위치
        var imgIndex = $(".imgList").find(".on").index();
        var imgConIndex = $(".imgConList").find(".on").index();
        //이미지 갯수
        var imgCnt = $(".imgList img").length;
        var imgConCnt = $(".imgConList .imgConSlide").length;
        // console.log(imgIndex+"번째 그림!", imgConIndex+"번째 설명!");

        //imgList img 중 imgIndex 번째의 on 클래스 이벤트
        imgSelect.eq(imgIndex).removeClass("on");
        imgSelect.eq(imgIndex).css({ "opacity": 0 });
        imgConSelect.eq(imgConIndex).removeClass("on");
        imgConSelect.eq(imgConIndex).css({ "opacity": 0 });

        //다음 위치
        imgIndex = imgIndex + 1;
        imgConIndex = imgConIndex + 1;

        if (imgIndex === imgCnt && imgConIndex === imgConCnt) {
            // 다음의 위치가 총 개수보다 클 경우
            // 처음의 위치로 돌아간다
            imgSelect.eq(0).css("opacity", 1);
            imgSelect.eq(0).addClass("on");
            imgConSelect.eq(0).css({ "opacity": 1 });
            imgConSelect.eq(0).addClass("on");
        } else {
            // 다음 위치가 있는 경우
            imgSelect.eq(imgIndex).css("opacity", 1);
            imgSelect.eq(imgIndex).addClass("on");
            imgConSelect.eq(imgConIndex).css({ "opacity": 1 });
            imgConSelect.eq(imgConIndex).addClass("on");
        }
    });
})(jQuery);