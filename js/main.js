// 1.돋보기에 focus 기능을 추가한다
// 2.검색버튼에 focus가 실행되면 .search위치에 focused라는 클래스가 추가된 후
// 3.input 요소에 '통합검색' 문구가 표시된다
// 4.focus가 취소되고 blur가 되면 .search위치에 focused라는 클래스가 사라진 후.
// 5.input 요소에 '통합검색' 문구도 사라진다.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});



// 스크롤의 값이 500px이 넘어가면 header .badges가 자연스럽게 사라진다.
const bsdgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY)
  if (window.scrollY > 500) {
    // 배지 숨기기
    // bsdgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(bsdgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //scrollTop버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //배지 보이기
    // bsdgeEl.style.display = 'block';
    gsap.to(bsdgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //scrollTop버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
//_.throttle(함수, 시간)

// 클릭하면 최상단으로 자연스럽게 올라가는 기능 구현
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});





//visual안에 있는 요소들이 자연스럽게 순차적으로 나타난다.
const fadeEls = document.querySelectorAll('.visual .fade-in');
//forEach()메서드는 배열의 각 요소에 대한 함수를 호출합니다.
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});

// notice swiper
// new Swiper(선택자, 옵션)
const swiper = new Swiper('.notice-line .swiper', {
  // Optional parameters
  direction: 'vertical', //수직 슬라이드
  autoplay: true,
  loop: true
});


// promotion swiper
new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복재생
  autoplay: {
    delay: 5000
  }, // 자동재생
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어가능
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  },
});

// awards swiper
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  },
});


//toggle-promtion
const promotionEl = document.querySelector('.promotion');
const prmoctionToggleBtn = document.querySelector('.toggle-promtion');
let isHidePromotion = false;
prmoctionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion //!가 붙으면 반대값으로 바꿔줌
  if (isHidePromotion) {
    //숨김처리!
    promotionEl.classList.add('hide');

  } else {
    // 보임처리!
    promotionEl.classList.remove('hide');
  }
});


// YOUTUBE VIDEO
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="palyer"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유뮤
      loop: true, // 반복 재생 유뮤
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
  });
}


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
    y: size,
    repeat: -1, //무한반복
    yoyo: true, //한 번 재생된 오브젝트를 뒤로 돌리는 옵션
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    //Scene() : 감시자  
    .Scene({
      triggerElement: spyEl,  //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8,  // 내가 감시하고 있는 요소가 이 지점에서 실행된다.
    })
    //setClassToggle() : 클래스를 넣었다 뺐다 제어
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022

