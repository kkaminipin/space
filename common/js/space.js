var window_width = 0;
var window_height = 0;
var sct01_height = 0;
var matrix_sitv;
var slice_len = 0;
var slice_loop = 1;
var slice_eq = 0;
var slice_gwang_click = true;
var percent_sitv = 0;
$(function () {
  slice_len = $('.gallery_banner_ul li').length;
  window_width = $(window).width();
  window_height = $(window).height();
  $('.scroll_wrap').height(window_height);
  sct01_height = $('#section01').height();
  $('.optimization').delay(1000).fadeIn(1500);
  $('.city1').animate({ bottom: '0%' }, 1500);
  $('.city2').animate({ bottom: '0%' }, 1500);
  $('.rocket_wrap').animate({ top: '83.03%' }, 1500);
  $('.match').animate({ top: '90.06%' }, 1500);
  $('.hand').animate({ top: '93.95%' }, 1500, function () {
    hand();
    $('.title').fadeIn(1500);
    $('.sublime').delay(1500).fadeIn(1500);
    $('.optimization').delay(1500).fadeOut(1500);
    $('.click').delay(1500).fadeIn(1500);
    $('.cloud1').delay(1000).fadeIn(1500);
    $('.cloud2')
      .delay(1000)
      .fadeIn(1500, function () {
        cloud();
      });
  });
  one1();
  one2();
  one3();
  one4();
  one5();
  one6();
  one7();
  one8();
  one9();
  one10();
  one11();
  one12();
  one13();
  one14();
  one15();
  var img_html = "<div class='top_img'><img src='' alt=''></div>";
  img_html = img_html + "<div class='bottom_img'><img src='' alt=''></div>";
  for (var slice_for = 0; slice_for < slice_len; slice_for++) {
    var img_src = $('.gallery_banner_ul > li')
      .eq(slice_for)
      .find('img')
      .attr('src');
    $('.gallery_banner_ul > li').eq(slice_for).html(img_html);
    $('.gallery_banner_ul > li')
      .eq(slice_for)
      .find('div > img')
      .attr('src', img_src);
  }
  /* gallery 도트 Str */
  $('.gallery_dot span').click(function () {
    if (slice_gwang_click == true) {
      slice_gwang_click = false;
      slice_eq = slice_loop - 1;
      var slice_idx = $(this).index();
      $('.gallery_dot span').eq(slice_idx).find('a').css('color', 'chartreuse');
      $('.gallery_dot span')
        .eq(slice_idx)
        .siblings()
        .find('a')
        .css('color', '#fff');
      $('.gallery_banner_ul > li').eq(slice_idx).css('z-index', 4);
      $('.gallery_banner_ul > li')
        .eq(slice_eq)
        .find('.top_img > img')
        .animate({ left: '100%' }, 1500);
      $('.gallery_banner_ul > li')
        .eq(slice_eq)
        .find('.bottom_img > img')
        .animate({ left: '-100%' }, 1500, function () {
          $('.gallery_banner_ul > li').find('.top_img > img').css('left', 0);
          $('.gallery_banner_ul > li').find('.bottom_img > img').css('left', 0);
          $('.gallery_banner_ul > li').eq(slice_eq).css('z-index', 1);
          $('.gallery_banner_ul > li').eq(slice_idx).css('z-index', 5);
          slice_eq = slice_idx;
          slice_gwang_click = true;
        });
      slice_loop = slice_idx + 1;
    }
  });
  /*
	window_height = 1080 - window_height;
	$("#section01").height(3194 - window_height);
	*/
  /* gallery 도트 End */
});
var test = 0;
var wrap_height = 0;
var resize_width = 0;
var resize_height = 0;
$(window).resize(function () {
  var resize_width = $(window).width();
  resize_height = $(window).height();
  $('.scroll_wrap').height(resize_height);
  wrap_height = $('.scroll').height();
  test = window_height - resize_height;
  if (test < 0) {
    test = 0;
  }
  /*
	$("#section01").height(3194-test);
	$("#section02").height(1063-test);
	var w = window_width - resize_width;
	var h = window_height - resize_height;
	if(w > h){
		//alert("width % 적용");
	}else{
		//alert("height % 적용");
	}
	*/
});

/* 구름 Str */
var stop_cloud = true;
function cloud() {
  if (stop_cloud == true) {
    $('.cloud1').animate({ left: '49.73%' }, 25000);
    $('.cloud2').animate({ left: '87.86%' }, 25000, function () {
      $('.cloud1').animate({ left: '9.73%' }, 25000);
      $('.cloud2').animate({ left: '47.86%' }, 25000, function () {
        cloud();
      });
    });
  }
}
/* 구름 End */

/* 손 Str */
var move_hand_fl = true;
function hand() {
  if (move_hand_fl == true) {
    $('.hand').animate({ top: 95.95 + '%' }, 1200); //1200
    $('.rocket_wrap').animate({ top: 85.03 + '%' }, 1200); //1200
    $('.match').animate({ top: 92.63 + '%' }, 1200, function () {
      //1200
      $('.hand').animate({ top: 93.95 + '%' }, 1200); //1200
      $('.rocket_wrap').animate({ top: 83.03 + '%' }, 1200); //1200
      $('.match').animate({ top: 90.63 + '%' }, 1200, function () {
        //1200
        hand();
      });
    });
  }
}
/* 손 End */

/* 손 클릭시 Str */
var gwang_click = true;
var fire_sitv;
var r_smoke;
var scroll_move_sitv;
var r_height = 0;
function hand_click() {
  if (gwang_click == true) {
    gwang_click = false;
    move_hand_fl = false;
    r_height = $('.rocket_img').height();
    $('.click').fadeOut(1500);
    $('.title').fadeOut(1500);
    $('.sublime').fadeOut(2000);
    $('.hand')
      .stop()
      .animate({ top: 97.95 + '%' }, 1200); //1200
    $('.rocket_wrap')
      .stop()
      .animate({ top: 87.03 + '%' }, 1200); //1200
    $('.match')
      .stop()
      .animate({ top: 94.63 + '%' }, 1200, function () {
        //1200
        var img_temp = $('.hand').find('img').attr('src');
        img_temp = img_temp.replace('_off.png', '_on.png');
        $('.hand').find('img').attr('src', img_temp);
        $('.match').animate({ top: '100%' }, 1200); //1200
        $('.match').rotate({
          duration: 1000,
          angle: 0,
          animateTo: 45,
        });
        $('.moon').delay(4000).animate({ opacity: 1 }, 3000); //4000, 3000
        $('.smoke').animate({ height: '100%' }, 5000, function () {
          //5000
          $('.smoke').animate({ height: 0, opacity: 0 }, 5000); //5000
        });
        $('.rocket_smoke1').animate(
          { opacity: 1, bottom: '0%' },
          2000,
          function () {
            //2000
            $('.rocket_smoke1').animate({ 'z-index': 9999 }, 0);
          }
        );
        $('.rocket_smoke2').animate(
          { opacity: 1, bottom: '0%' },
          2000,
          function () {
            //2000
            $('.rocket_smoke2').animate({ 'z-index': 9999 }, 0);
          }
        );
        $('.smoke_shadow').animate(
          { opacity: 1, bottom: '0%' },
          2000,
          function () {
            //2000
            clearInterval(scroll_move_sitv);
          }
        );
        $('.rocket_wrap').animate({ top: '0%' }, 10000, function () {
          //10000
          $('.scroll_down').fadeIn(1000);
          mouse_wheel();
          stop_cloud = false;
        });
        $('.scroll')
          .delay(1000)
          .animate({ bottom: -sct01_height + r_height + 'px' }, 10000); //delay:1000	,10000
        $('.moon').animate({ opacity: 1 }, 1000, function () {
          gwang_click = true;
        });
      });
  }
}
/* 손 클릭시 End */

/* 로켓 컨트롤 Str */
var s_speed = 10;
var d_top = 7;
var d_left = 7;
var r_flag = true;
var rotate_flag = true;
var r_speed = 2;
var turn = true;
function move_rocket(i) {
  console.log('i ' + i);
  console.log('d_top ' + -d_top);
  console.log('d_left ' + -d_left);
  r_class = $('.rocket_img').attr('class');
  if (i >= 0 && i < 30) {
    $('.scroll_down').fadeOut(500);
    console.log('일번');
    d_left = delta + d_left;
    if (d_left < 0) {
      d_left = 0;
    }
    if (delta == 1) {
      if (rotate_flag == true && i >= 0) {
        turn = true;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 0,
          animateTo: -90,
        });
        rotate_flag = false;
      } else if (turn == false) {
        $('.rocket_img').rotate(-90);
        turn = true;
      }
      $('.rocket_img')
        .stop()
        .animate({ top: '-7%', left: -d_left + '%' }, 500);
    } else if (delta == -1) {
      if (rotate_flag == false && i < 3 && turn == false) {
        turn = false;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 90,
          animateTo: 180,
        });
        rotate_flag = true;
        $('.rocket_img').stop().animate({ top: '0%', left: '0%' }, 500);
      } else if (rotate_flag == true && i >= 3 && i < 30) {
        //전꺼
        turn = false;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 180,
          animateTo: 90,
        });
        rotate_flag = false;
        $('.rocket_img').stop().animate({ top: '0%', left: '0%' }, 500);
      }
      if (r_flag == true && i >= 3) {
        // i가 3 보다 클때
        $('.rocket_img')
          .stop()
          .animate({ top: '-7%', left: -d_left + '%' }, 500);
      }
      if (turn == true) {
        $('.rocket_img').rotate(90);
        turn = false;
      }
    }
  } else if (i >= 30 && i < 55) {
    console.log('이번');
    d_top = delta + d_top;
    if (delta == 1) {
      if (rotate_flag == false && i >= 30) {
        if (d_top > 7) {
          d_top = 7;
          d_left = 36;
        }
        turn = true;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: -90,
          animateTo: 0,
        });
        rotate_flag = true;
        $('.frame').fadeIn(3000);
        $('.profile_title').fadeIn(2500);
        $('.profile_info').fadeIn(2500);
      } else if (turn == false) {
        $('.rocket_img').rotate(0);
        turn = true;
      }
    } else if (delta == -1) {
      if (rotate_flag == false && i < 55) {
        //전꺼
        turn = false;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 270,
          animateTo: 180,
        });
        rotate_flag = true;
      } else if (turn == true) {
        $('.rocket_img').rotate(180);
        turn = false;
      }
    }
    $('.rocket_img')
      .stop()
      .animate({ top: -d_top + '%', left: '-44.5%' }, 500);
  } else if (i >= 55 && i < 125) {
    console.log('삼번');
    s_speed = 9;
    d_left = d_left - delta;
    if (delta == 1) {
      if (rotate_flag == true) {
        if (d_left > 31) {
          d_top = 31;
          d_left = 36;
        }
        turn = true;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 0,
          animateTo: 90,
        });
        rotate_flag = false;
      } else if (turn == false) {
        $('.rocket_img').rotate(90);
        turn = true;
      }
    } else if (delta == -1) {
      if (rotate_flag == true && i < 125) {
        //전꺼
        turn = false;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 180,
          animateTo: 270,
        });
        rotate_flag = false;
      } else if (turn == true) {
        $('.rocket_img').rotate(-90);
        turn = false;
      }
    }
    $('.rocket_img')
      .stop()
      .animate({ top: '-34.7%', left: -d_left + '%' }, 500);
  } else if (i >= 125 && i < 170) {
    console.log('사번');
    s_speed = 11;
    d_top = delta + d_top;
    if (delta == 1) {
      console.log(rotate_flag);
      if (rotate_flag == false) {
        if (d_top > 31) {
          d_top = 37;
          d_left = -34;
        }
        turn = true;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 90,
          animateTo: 0,
        });
        rotate_flag = true;
        $('.introduce_info').fadeIn(1500, function () {
          matrix_sitv = setInterval('matrix()', 54);
        });
      } else if (turn == false) {
        $('.rocket_img').rotate(0);
        turn = true;
      }
    } else if (delta == -1) {
      if (rotate_flag == false && i < 170) {
        //전꺼
        d_top = 78;
        turn = false;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 90,
          animateTo: 180,
        });
        rotate_flag = true;
      } else if (turn == true) {
        $('.rocket_img').rotate(180);
        turn = false;
      }
    }
    $('.rocket_img')
      .stop()
      .animate({ top: -d_top + '%', left: '41.6%' }, 500);
  } else if (i >= 170 && i < 240) {
    //오번에서 육번 넘어가는데 문제
    console.log('오번');
    s_speed = 11;
    d_left = delta + d_left;
    if (delta == 1) {
      if (rotate_flag == true) {
        if (d_left < 34) {
          d_top = 78;
          d_left = -34;
        }
        turn = true;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 0,
          animateTo: -90,
        });
        rotate_flag = false;
      } else if (turn == false) {
        $('.rocket_img').rotate(-90);
        turn = true;
      }
    } else if (delta == -1) {
      if (rotate_flag == true && i < 240) {
        //전꺼
        turn = false;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 180,
          animateTo: 90,
        });
        rotate_flag = false;
        stop_fire = false;
      } else if (turn == true) {
        $('.rocket_img').rotate(90);
        turn = false;
      }
    }
    $('.rocket_img')
      .stop()
      .animate({ top: '-79.4%', left: -d_left + '%' }, 500);
  } else if (i >= 240 && i < 270) {
    console.log('육번');
    d_top = delta + d_top;
    if (delta == 1) {
      if (rotate_flag == false) {
        if (d_top > 75) {
          d_top = 84;
          d_left = 30;
        }
        turn = true;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: -90,
          animateTo: 0,
        });
        rotate_flag = true;
        $('.skill_bar').fadeIn(1000, function () {
          $('.skill_name').animate({ opacity: 1 }, 1500);
          $('.html_bar').animate({ width: '50%' }, 3000);
          $('.css_bar').animate({ width: '50%' }, 3000);
          $('.js_bar').animate({ width: '50%' }, 3000);
          $('.jquery_bar').animate({ width: '50%' }, 3000);
          $('.ps_bar').animate({ width: '50%' }, 3000);
          percent_sitv = setInterval('percent()', 35);
        });
      } else if (turn == false) {
        $('.rocket_img').rotate(0);
        turn = true;
      }
    } else if (delta == -1) {
      if (rotate_flag == false && i < 270) {
        //전꺼
        turn = false;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 270,
          animateTo: 180,
        });
        rotate_flag = true;
      } else if (turn == true) {
        $('.rocket_img').rotate(180);
        turn = false;
      }
    }
    $('.rocket_img')
      .stop()
      .animate({ top: -d_top + '%', left: '-38.7%' }, 500);
  } else if (i >= 270 && i < 290) {
    console.log('칠번');
    d_left = d_left - delta;
    if (delta == 1) {
      if (rotate_flag == true) {
        if (d_left < 30) {
          d_top = 108;
          d_left = 30;
        }
        turn = true;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 0,
          animateTo: 90,
        });
        rotate_flag = false;
        stop_fire = true;
        firecracker();
      } else if (turn == false) {
        $('.rocket_img').rotate(90);
        turn = true;
      }
    } else if (delta == -1) {
      if (rotate_flag == true && i < 290) {
        turn = false;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 180,
          animateTo: 270,
        });
        rotate_flag = false;
      } else if (turn == true) {
        $('.rocket_img').rotate(-90);
        turn = false;
      }
    }
    $('.rocket_img')
      .stop()
      .animate({ top: '-113.9%', left: -d_left + '%' }, 500);
  } else if (i >= 290 && i < 315) {
    console.log('팔번');
    s_speed = 12;
    d_top = delta + d_top;
    if (delta == 1) {
      if (rotate_flag == false) {
        if (d_top > 108) {
          d_top = 116;
          d_left = 11;
        }
        turn = true;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 90,
          animateTo: 0,
        });
        rotate_flag = true;
      } else if (turn == false) {
        $('.rocket_img').rotate(0);
        turn = true;
      }
    } else if (delta == -1) {
      if (rotate_flag == false && i < 315) {
        turn = false;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 90,
          animateTo: 180,
        });
        rotate_flag = true;
      } else if (turn == true) {
        $('.rocket_img').rotate(180);
        turn = false;
      }
    }
    $('.rocket_img')
      .stop()
      .animate({ top: -d_top + '%', left: '0.1%' }, 500);
  } else if (i >= 315 && i < 340) {
    console.log('구번');
    d_left = delta + d_left;
    if (delta == 1) {
      if (rotate_flag == true) {
        if (d_left > 11) {
          d_top = 136;
          d_left = 11;
        }
        turn = true;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 0,
          animateTo: -90,
        });
        rotate_flag = false;
      } else if (turn == false) {
        $('.rocket_img').rotate(-90);
        turn = true;
      }
    } else if (delta == -1) {
      if (rotate_flag == true && i < 340) {
        turn = false;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 180,
          animateTo: 90,
        });
        rotate_flag = false;
      } else if (turn == true) {
        $('.rocket_img').rotate(90);
        turn = false;
      }
    }
    $('.rocket_img')
      .stop()
      .animate({ top: '-138%', left: -d_left + '%' }, 500);
  } else if (i >= 340 && i < 365) {
    console.log('십번');
    s_speed = 12.5;
    d_top = delta + d_top;
    if (delta == 1) {
      if (rotate_flag == false) {
        if (d_top > 136) {
          d_top = 140;
          d_left = 36;
        }
        turn = true;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: -90,
          animateTo: 0,
        });
        rotate_flag = true;
        $('.gallery_banner_wrap').fadeIn(1500, function () {
          $('.prev_btn').fadeIn(1500);
          $('.next_btn').fadeIn(1500);
          $('.gallery_dot').fadeIn(1500);
        });
      } else if (turn == false) {
        $('.rocket_img').rotate(0);
        turn = true;
      }
    } else if (delta == -1) {
      if (rotate_flag == false && i < 365) {
        turn = false;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 270,
          animateTo: 180,
        });
        rotate_flag = true;
        //stop_fire = true;
        //firecracker();
      } else if (turn == true) {
        $('.rocket_img').rotate(180);
        turn = false;
      }
    }
    $('.rocket_img')
      .stop()
      .animate({ top: -d_top + '%', left: '-44%' }, 500);
  } else if (i >= 365 && i < 430) {
    stop_fire = false;
    console.log('십일번');
    d_left = d_left - delta;
    if (delta == 1) {
      if (rotate_flag == true) {
        if (d_left < 36) {
          d_top = 169;
          d_left = 36;
        }
        turn = true;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 0,
          animateTo: 90,
        });
        rotate_flag = false;
      } else if (turn == false) {
        $('.rocket_img').rotate(90);
        turn = true;
      }
    } else if (delta == -1) {
      if (rotate_flag == true && i < 430) {
        turn = false;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 180,
          animateTo: 270,
        });
        rotate_flag = false;
      } else if (turn == true) {
        $('.rocket_img').rotate(-90);
        turn = false;
      }
    }
    $('.rocket_img')
      .stop()
      .animate({ top: '-165.8%', left: -d_left + '%' }, 500);
  } else if (i >= 430 && i < 440) {
    console.log('십이번');
    d_top = delta + d_top;
    if (delta == 1) {
      if (rotate_flag == false) {
        if (d_top > 163) {
          d_top = 169;
          d_left = -33;
        }
        turn = true;
        $('.rocket_img').rotate({
          duration: 1000,
          angle: 90,
          animateTo: 0,
        });
        rotate_flag = true;
      } else if (turn == false) {
        $('.rocket_img').rotate(0);
        turn = true;
      }
    } else if (delta == -1) {
      $('.rocket_img').rotate(180);
    }
    $('.rocket_img')
      .stop()
      .animate({ top: -d_top + '%', left: '41.6%' }, 500);
  } else if (i >= 440) {
    wrap_height = $('.scroll').height();
    var sct05_height = $('#section05').height();
    $('.scroll').animate(
      { bottom: -(wrap_height - sct05_height) + 'px' },
      1500,
      function () {
        creat_star();
        $('.contact')
          .delay(1000)
          .fadeIn(2000, function () {
            $('.thank_you').animate({ top: '35%', 'font-size': '70px' }, 3000);
            $('.design').delay(2000).fadeIn(1000);
          });
      }
    );
    $('.rocket_img').animate({ top: '-210%', left: '40%' }, 5000, function () {
      //stop_fire = false;	//스크롤이 멈추면 폭죽도 멈춤.
    });
    stop_scroll = false;
  }
  if (i < 440) {
    $('.scroll')
      .stop()
      .animate({ bottom: -sct01_height + r_height - i * s_speed + 'px' }, 500);
  }
}
var d_count = 0;
var stop_scroll = true;
function mouse_wheel() {
  $(window).on('mousewheel DOMMouseScroll', function (e) {
    if (stop_scroll == true) {
      var road1_height = $('.road1').height();
      var rocket_height = $('.rocket_img').height();
      var E = e.originalEvent; //자바스크립트 코어 이벤트
      if (E.detail) {
        delta = ((E.detail * -40) / 120) * -1; // E.detail 파이어폭스
      } else {
        delta = (E.wheelDelta / 120) * -1; // E.wheeldelta 익스 크롬
        d_count = delta + d_count;
        if (d_count < 0) {
          d_count = 0;
        }
        move_rocket(d_count);
      }
    }
  });
}
/* 로켓 컨트롤 End */

/* 매트릭스 텍스트 Str */
var text =
  '어렸을 적부터 게임을 좋아했던 저는 “포트리스”라는 게임으로 쉽게 컴퓨터와 친해졌고, TV나 영화에 해커가 나와서 까만 모니터 화면에 알 수 없는 초록색 글씨의 컴퓨터 언어를 타이핑하는 모습을 보면서 프로그래머의 매력에 빠져들며 동경하게 되었습니다. 그때부터 프로그래머에 대한 꿈이 가슴 한편에 작은 불씨로 자리 잡게 되었습니다.';
var matrix_text = '';
var matrix_len = 0;
function matrix() {
  matrix_len = text.length;
  if (text.substring(0, 1) == ',') {
    matrix_text = matrix_text + text.substring(0, 1) + '</br>';
  } else if (text.substring(0, 1) == '를') {
    matrix_text = matrix_text + text.substring(0, 1) + '</br>';
  } else if (text.substring(0, 1) == '.') {
    matrix_text = matrix_text + text.substring(0, 1) + '</br>';
  } else if (text.substring(0, 1) == '프') {
    matrix_text =
      matrix_text + "<span class='matrix_color'>" + text.substring(0, 1);
  } else if (text.substring(0, 1) == '머') {
    matrix_text = matrix_text + text.substring(0, 1) + '</span>';
  } else {
    matrix_text = matrix_text + text.substring(0, 1);
  }
  text = text.substring(1, matrix_len);
  $('.matrix').html(matrix_text);
  if (matrix_len == 0) {
    clearInterval(matrix_sitv);
    $('.self_introduction').fadeIn(1500);
  }
}
/* 매트릭스 텍스트 End */

/* skill 퍼센트 Str */
var html_pct = 0;
var css_pct = 0;
var js_pct = 0;
var jquery_pct = 0;
var ps_pct = 0;
function percent() {
  if (html_pct < 50) {
    html_pct = html_pct + 1;
  }
  if (css_pct < 50) {
    css_pct = css_pct + 1;
  }
  if (js_pct < 50) {
    js_pct = js_pct + 1;
  }
  if (jquery_pct < 50) {
    jquery_pct = jquery_pct + 1;
  }
  if (ps_pct < 50) {
    ps_pct = ps_pct + 1;
  } else if (html_pct == 50) {
    clearInterval(percent_sitv);
  }
  $('.html_percent').text(html_pct + '%');
  $('.css_percent').text(css_pct + '%');
  $('.js_percent').text(js_pct + '%');
  $('.jquery_percent').text(jquery_pct + '%');
  $('.ps_percent').text(ps_pct + '%');
}
/* skill 퍼센트 End */

/* gallery 버튼 Str */
function prev() {
  if (slice_gwang_click == true) {
    slice_gwang_click = false;
    slice_loop = slice_loop - 1;
    if (slice_loop < 0) {
      slice_loop = slice_len - 1;
    }
    $('.gallery_banner_ul > li')
      .eq(slice_loop - 1)
      .css('z-index', 4);
    $('.gallery_banner_ul > li')
      .eq(slice_loop)
      .find('.top_img > img')
      .animate({ left: '100%' }, 1500);
    $('.gallery_banner_ul > li')
      .eq(slice_loop)
      .find('.bottom_img > img')
      .animate({ left: '-100%' }, 1500, function () {
        $('.gallery_banner_ul > li').find('.top_img > img').css('left', 0);
        $('.gallery_banner_ul > li').find('.bottom_img > img').css('left', 0);
        $('.gallery_banner_ul > li')
          .eq(slice_loop - 1)
          .css('z-index', 5);
        $('.gallery_banner_ul > li').eq(slice_loop).css('z-index', 1);
        slice_gwang_click = true;
      });
    $('.gallery_dot span')
      .eq(slice_loop - 1)
      .find('a')
      .css('color', 'chartreuse');
    $('.gallery_dot span')
      .eq(slice_loop - 1)
      .siblings()
      .find('a')
      .css('color', '#fff');
  }
}
function next() {
  if (slice_gwang_click == true) {
    slice_gwang_click = false;
    slice_loop = slice_loop + 1;
    if (slice_loop == slice_len + 1) {
      slice_loop = 1;
    }
    $('.gallery_banner_ul > li')
      .eq(slice_loop - 1)
      .css('z-index', 4);
    $('.gallery_banner_ul > li')
      .eq(slice_loop - 2)
      .find('.top_img > img')
      .animate({ left: '100%' }, 1500);
    $('.gallery_banner_ul > li')
      .eq(slice_loop - 2)
      .find('.bottom_img > img')
      .animate({ left: '-100%' }, 1500, function () {
        $('.gallery_banner_ul > li').find('.top_img > img').css('left', 0);
        $('.gallery_banner_ul > li').find('.bottom_img > img').css('left', 0);
        $('.gallery_banner_ul > li')
          .eq(slice_loop - 1)
          .css('z-index', 5);
        $('.gallery_banner_ul > li')
          .eq(slice_loop - 2)
          .css('z-index', 1);
        slice_gwang_click = true;
      });
    $('.gallery_dot span')
      .eq(slice_loop - 1)
      .find('a')
      .css('color', 'chartreuse');
    $('.gallery_dot span')
      .eq(slice_loop - 1)
      .siblings()
      .find('a')
      .css('color', '#fff');
  }
}
/* gallery 버튼 End */

/* 배경 동그라미 Str */
function one1() {
  $('.st01_one1').fadeOut(1000);
  $('.st02_one1').fadeOut(1000);
  $('.st03_one1').fadeOut(1000);
  $('.st04_one1').fadeOut(1000, function () {
    $('.st04_one1').fadeIn(1000);
    $('.st04_one1').fadeIn(1000);
    $('.st04_one1').fadeIn(1000);
    $('.st04_one1').fadeIn(1000, function () {
      one1();
    });
  });
}
function one2() {
  $('.st01_one2').delay(200).fadeOut(1000);
  $('.st02_one2').delay(200).fadeOut(1000);
  $('.st03_one2').delay(200).fadeOut(1000);
  $('.st04_one2')
    .delay(200)
    .fadeOut(1000, function () {
      $('.st01_one2').fadeIn(1000);
      $('.st02_one2').fadeIn(1000);
      $('.st03_one2').fadeIn(1000);
      $('.st04_one2').fadeIn(1000, function () {
        one2();
      });
    });
}
function one3() {
  $('.st01_one3').delay(400).fadeOut(1000);
  $('.st02_one3').delay(400).fadeOut(1000);
  $('.st03_one3').delay(400).fadeOut(1000);
  $('.st04_one3')
    .delay(400)
    .fadeOut(1000, function () {
      $('.st01_one3').fadeIn(1000);
      $('.st02_one3').fadeIn(1000);
      $('.st03_one3').fadeIn(1000);
      $('.st04_one3').fadeIn(1000, function () {
        one3();
      });
    });
}
function one4() {
  $('.st01_one4').delay(600).fadeOut(1000);
  $('.st02_one4').delay(600).fadeOut(1000);
  $('.st03_one4').delay(600).fadeOut(1000);
  $('.st04_one4')
    .delay(600)
    .fadeOut(1000, function () {
      $('.st01_one4').fadeIn(1000);
      $('.st02_one4').fadeIn(1000);
      $('.st03_one4').fadeIn(1000);
      $('.st04_one4').fadeIn(1000, function () {
        one4();
      });
    });
}
function one5() {
  $('.st01_one5').delay(800).fadeOut(1000);
  $('.st02_one5').delay(800).fadeOut(1000);
  $('.st03_one5').delay(800).fadeOut(1000);
  $('.st04_one5')
    .delay(800)
    .fadeOut(1000, function () {
      $('.st01_one5').fadeIn(1000);
      $('.st02_one5').fadeIn(1000);
      $('.st03_one5').fadeIn(1000);
      $('.st04_one5').fadeIn(1000, function () {
        one5();
      });
    });
}
function one6() {
  $('.st01_one6').delay(100).fadeOut(1000);
  $('.st02_one6').delay(100).fadeOut(1000);
  $('.st03_one6').delay(100).fadeOut(1000);
  $('.st04_one6')
    .delay(100)
    .fadeOut(1000, function () {
      $('.st01_one6').fadeIn(1000);
      $('.st02_one6').fadeIn(1000);
      $('.st03_one6').fadeIn(1000);
      $('.st04_one6').fadeIn(1000, function () {
        one6();
      });
    });
}
function one7() {
  $('.st01_one7').delay(300).fadeOut(1000);
  $('.st02_one7').delay(300).fadeOut(1000);
  $('.st03_one7').delay(300).fadeOut(1000);
  $('.st04_one7')
    .delay(300)
    .fadeOut(1000, function () {
      $('.st01_one7').fadeIn(1000);
      $('.st02_one7').fadeIn(1000);
      $('.st03_one7').fadeIn(1000);
      $('.st04_one7').fadeIn(1000, function () {
        one7();
      });
    });
}
function one8() {
  $('.st01_one8').delay(500).fadeOut(1000);
  $('.st02_one8').delay(500).fadeOut(1000);
  $('.st03_one8')
    .delay(500)
    .fadeOut(1000, function () {
      $('.st01_one8').fadeIn(1000);
      $('.st02_one8').fadeIn(1000);
      $('.st03_one8').fadeIn(1000, function () {
        one8();
      });
    });
}
function one9() {
  $('.st01_one9').delay(700).fadeOut(1000);
  $('.st02_one9').delay(700).fadeOut(1000);
  $('.st03_one9')
    .delay(700)
    .fadeOut(1000, function () {
      $('.st01_one9').fadeIn(1000);
      $('.st02_one9').fadeIn(1000);
      $('.st03_one9').fadeIn(1000, function () {
        one9();
      });
    });
}
function one10() {
  $('.st01_one10').delay(900).fadeOut(1000);
  $('.st02_one10').delay(900).fadeOut(1000);
  $('.st03_one10')
    .delay(900)
    .fadeOut(1000, function () {
      $('.st01_one10').fadeIn(1000);
      $('.st02_one10').fadeIn(1000);
      $('.st03_one10').fadeIn(1000, function () {
        one10();
      });
    });
}
function one11() {
  $('.st01_one11').delay(200).fadeOut(1000);
  $('.st02_one11').delay(200).fadeOut(1000);
  $('.st03_one11')
    .delay(200)
    .fadeOut(1000, function () {
      $('.st01_one11').fadeIn(1000);
      $('.st02_one11').fadeIn(1000);
      $('.st03_one11').fadeIn(1000, function () {
        one11();
      });
    });
}
function one12() {
  $('.st01_one12').delay(400).fadeOut(1000);
  $('.st02_one12').delay(400).fadeOut(1000);
  $('.st03_one12')
    .delay(400)
    .fadeOut(1000, function () {
      $('.st01_one12').fadeIn(1000);
      $('.st02_one12').fadeIn(1000);
      $('.st03_one12').fadeIn(1000, function () {
        one12();
      });
    });
}
function one13() {
  $('.st01_one13').delay(600).fadeOut(1000);
  $('.st03_one13')
    .delay(600)
    .fadeOut(1000, function () {
      $('.st01_one13').fadeIn(1000);
      $('.st03_one13').fadeIn(1000, function () {
        one13();
      });
    });
}
function one14() {
  $('.st01_one14').delay(800).fadeOut(1000);
  $('.st03_one14')
    .delay(800)
    .fadeOut(1000, function () {
      $('.st01_one14').fadeIn(1000);
      $('.st03_one14').fadeIn(1000, function () {
        one14();
      });
    });
}
function one15() {
  $('.st01_one15').delay(100).fadeOut(1000);
  $('.st03_one15')
    .delay(100)
    .fadeOut(1000, function () {
      $('.st01_one15').fadeIn(1000);
      $('.st03_one15').fadeIn(1000, function () {
        one15();
      });
    });
}
/* 배경 동그라미 End */

/* 폭죽 Str */
var stop_fire = true;
var fire1_temp = 0;
var fire2_temp = 0;
var fire3_temp = 0;
var fire4_temp = 0;
function firecracker() {
  bar1();
  bar2();
  bar3();
  bar4();
}
function bar1() {
  if (stop_fire == true) {
    $('.bar1').animate({ height: '100%' }, 500, function () {
      $('.fire1').effect(
        'puff',
        { mode: 'show', percent: '1' },
        600,
        function () {
          fire1();
        }
      );
      $('.bar1').css('height', 0);
    });
  }
}
function bar2() {
  if (stop_fire == true) {
    $('.bar2')
      .delay(500)
      .animate({ height: '100%' }, 500, function () {
        $('.fire2').effect(
          'puff',
          { mode: 'show', percent: '1' },
          500,
          function () {
            fire2();
          }
        );
        $('.bar2').css('height', 0);
      });
  }
}
function bar3() {
  if (stop_fire == true) {
    $('.bar3')
      .delay(700)
      .animate({ height: '100%' }, 500, function () {
        $('.fire3').effect(
          'puff',
          { mode: 'show', percent: '1' },
          500,
          function () {
            fire3();
          }
        );
        $('.bar3').css('height', 0);
      });
  }
}
function bar4() {
  if (stop_fire == true) {
    $('.bar4')
      .delay(900)
      .animate({ height: '100%' }, 500, function () {
        $('.fire4').effect(
          'puff',
          { mode: 'show', percent: '1' },
          500,
          function () {
            fire4();
          }
        );
        $('.bar4').css('height', 0);
      });
  }
}
function fire1() {
  fire1_temp = fire1_temp + 1;
  $('.fire1').fadeIn(700, function () {
    $('.fire1').fadeOut(700, function () {
      if (fire1_temp < 3) {
        fire1();
      } else if (fire1_temp == 3) {
        bar1();
        fire1_temp = 0;
      }
    });
  });
}
function fire2() {
  fire2_temp = fire2_temp + 1;
  $('.fire2').fadeIn(700, function () {
    $('.fire2').fadeOut(700, function () {
      if (fire2_temp < 3) {
        fire2();
      } else if (fire2_temp == 3) {
        bar2();
        fire2_temp = 0;
      }
    });
  });
}
function fire3() {
  fire3_temp = fire3_temp + 1;
  $('.fire3').fadeIn(700, function () {
    $('.fire3').fadeOut(700, function () {
      if (fire3_temp < 3) {
        fire3();
      } else if (fire3_temp == 3) {
        bar3();
        fire3_temp = 0;
      }
    });
  });
}
function fire4() {
  fire4_temp = fire4_temp + 1;
  $('.fire4').fadeIn(700, function () {
    $('.fire4').fadeOut(700, function () {
      if (fire4_temp < 3) {
        fire4();
      } else if (fire4_temp == 3) {
        bar4();
        fire4_temp = 0;
      }
    });
  });
}
/* 폭죽 End */

/* 별 Str */
var star_position = 0;
var star_speed = 0;
function creat_star() {
  for (var i = 0; i < 3; i++) {
    $('.shooting_star').append(
      "<img src='common/images/shooting_star.png' alt='별똥별'/>"
    );
    shooting_star(i);
    $('.star1').append("<img src='common/images/star1.png' alt='별1'/>");
    star1(i);
  }
  for (var i = 0; i < 6; i++) {
    $('.star2').append("<img src='common/images/star2.png' alt='별2'/>");
    star2(i);
  }
  for (var i = 0; i < 9; i++) {
    $('.star3').append("<img src='common/images/star3.png' alt='별3'/>");
    star3(i);
  }
}
function shooting_star(i) {
  star_position = Math.floor(Math.random() * 50) + 0;
  star_speed = Math.floor(Math.random() * 6000) + 3000;
  $('.shooting_star')
    .find('img')
    .eq(i)
    .css({ top: +'0%', right: star_position + '%' });
  $('.shooting_star')
    .find('img')
    .eq(i)
    .animate(
      { top: '100%', right: star_position + 100 + '%' },
      star_speed,
      function () {
        $('.shooting_star')
          .find('img')
          .eq(i)
          .css({ top: '0%', right: star_position + '%' });
        shooting_star(i);
      }
    );
}
var star_top = 0;
var star_left = 0;
var star1_delay = 0;
var star2_delay = 0;
var star3_delay = 0;
function star1(i) {
  star1_delay = star1_delay + 200;
  star_top = Math.floor(Math.random() * 100) + 0;
  star_left = Math.floor(Math.random() * 100) + 0;
  $('.star1')
    .find('img')
    .eq(i)
    .animate({ top: star_top + '%', left: star_left + '%' }, 0, function () {
      $('.star1')
        .find('img')
        .eq(i)
        .delay(star1_delay)
        .fadeIn(1500, function () {
          $('.star1')
            .find('img')
            .eq(i)
            .fadeOut(1000, function () {
              star1(i);
              star1_delay = 0;
            });
        });
    });
}
function star2(i) {
  star2_delay = star2_delay + 200;
  star_top = Math.floor(Math.random() * 100) + 0;
  star_left = Math.floor(Math.random() * 100) + 0;
  $('.star2')
    .find('img')
    .eq(i)
    .animate({ top: star_top + '%', left: star_left + '%' }, 0, function () {
      $('.star2')
        .find('img')
        .eq(i)
        .delay(star2_delay)
        .fadeIn(1500, function () {
          $('.star2')
            .find('img')
            .eq(i)
            .fadeOut(1000, function () {
              star2(i);
              star2_delay = 0;
            });
        });
    });
}
function star3(i) {
  star3_delay = star3_delay + 200;
  star_top = Math.floor(Math.random() * 100) + 0;
  star_left = Math.floor(Math.random() * 100) + 0;
  $('.star3')
    .find('img')
    .eq(i)
    .animate({ top: star_top + '%', left: star_left + '%' }, 0, function () {
      $('.star3')
        .find('img')
        .eq(i)
        .delay(star3_delay)
        .fadeIn(1500, function () {
          $('.star3')
            .find('img')
            .eq(i)
            .fadeOut(1000, function () {
              star3(i);
              star3_delay = 0;
            });
        });
    });
}
/* 별 End */
