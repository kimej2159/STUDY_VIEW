// 더보기 버튼 클릭하면, 포트폴리오 페이지로 이동!
// HTML: 웹문서의 구조
// CSS: 웹문서의 스타일(=UI, 디자인)
// JS : HTML, CSS를 조작, 제어

//+더보기 : 대상을 선택(.getElenmentById(), ...vs .querySelector())
// 최근 : (mordern)
const moreBT = document.getElementById("more");

moreBT.addEventListener("click",function(){
	//클릭 이벤트 발생시, 실행할 js 코드를 작성
	location.href="protfolio.html"
});
// 선택된 대상을 조작, 제어 (이벤트)

//왼쪽 또는 오른쪽 버튼을 클릭하면 왼쪽 또는 오른쪽으로 이동합니다 메세지창 띄우기

let history = document.getElementsByClassName("history")[0];

let leftbtn = document.getElementsByClassName("circle")[0];
leftbtn.addEventListener("click", function(){
	//console.log("왼쪽으로 이동합니다");
	history.style.marginLeft = "-333px";
});

let rightbtn = document.getElementsByClassName("circle")[1];
rightbtn.addEventListener("click", function(){
	console.log("오른쪽으로 이동합니다");
	history.style.marginRight = "-333px";
});