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


//footer
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022
