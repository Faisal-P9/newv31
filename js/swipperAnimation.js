


// Swiper

var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "cube", //add(make slider cube
    grabCursor: true, //add(grab cursor
    speed: 1500,
    autoplay: {
      delay: 17000,
      disableOnInteraction: false
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // If you need pagination
    on: {
      slideChange: function () {
        const index_currentSlide = this.realIndex;
        var row1;
        var row2;
        var row3;
        var row4;
  
        if (index_currentSlide === 0) {
          row1 = '';
          row1 = row1 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
          row1 = row1 + '<span class="loaderSwipe"></span>';
          row1 = row1 + '</div>';
          $('#slide1').html(row1);
          setTimeout(slide1, 1500);
        } else if (index_currentSlide === 1) {
          row2 = '';
          row2 = row2 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
          row2 = row2 + '<span class="loaderSwipe"></span>';
          row2 = row2 + '</div>';
          $('#slide2').html(row2);
          setTimeout(slide2, 1500);
        } else if (index_currentSlide === 2) {
          row3 = '';
          row3 = row3 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
          row3 = row3 + '<span class="loaderSwipe"></span>';
          row3 = row3 + '</div>';
          $('#slide3').html(row3);
          setTimeout(slide3, 1500);
        } else if (index_currentSlide === 3) {
          row4 = '';
          row4 = row4 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
          row4 = row4 + '<span class="loaderSwipe"></span>';
          row4 = row4 + '</div>';
          $('#slide4').html(row4);
          setTimeout(slide4, 1500);
        } else {
          alert('something went wrong');
        }
  
        function slide1() {
          row1 = row1 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/1/index.html" frameborder="0" width="300" height="250"></iframe>';
          $('#slide1').html(row1);
        }
  
        function slide2() {
          row2 = row2 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/2/index.html" frameborder="0" width="300" height="250"></iframe>';
          $('#slide2').html(row2);
        }
  
        function slide3() {
          row3 = row3 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/3/index.html" frameborder="0" width="300" height="250"></iframe>';
          $('#slide3').html(row3);
        }
  
        function slide4() {
          row4 = row4 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/4/index.html" frameborder="0" width="300" height="250"></iframe>';
          $('#slide4').html(row4);
        }
      },
    },
  });
  
  
  
  